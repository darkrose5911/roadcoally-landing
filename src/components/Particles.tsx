"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { Renderer, Camera, Transform, Mesh, Geometry, Program, Vec3, Vec2 } from 'ogl';

interface ParticlesProps {
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleBaseSize?: number;
  moveParticlesOnHover?: boolean;
  alphaParticles?: boolean;
  disableRotation?: boolean;
}

export const Particles: React.FC<ParticlesProps> = ({
  particleColors = ['#ffffff'],
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleBaseSize = 100,
  moveParticlesOnHover = true,
  alphaParticles = false,
  disableRotation = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const sceneRef = useRef<Transform | null>(null);
  const meshesRef = useRef<Mesh[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef<Vec2>(new Vec2(0, 0));
  const normalizedMouseRef = useRef<Vec2>(new Vec2(0, 0));
  const isHoveringRef = useRef<boolean>(false);
  const particleDataRef = useRef<Array<{
    originalPosition: Vec3;
    velocity: Vec3;
    rotation: number;
    rotationSpeed: number;
  }>>([]);

  const hexToRgb = useCallback((hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255,
        ]
      : [1, 1, 1];
  }, []);

  const vertexShader = `
    attribute vec3 position;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;
    uniform float uSize;
    uniform vec2 uMouse;
    uniform bool uMouseActive;
    varying float vAlpha;
    
    void main() {
      vec3 pos = position;
      
      // Mouse interaction
      if (uMouseActive) {
        vec2 mousePos = uMouse * 0.01;
        float dist = distance(pos.xy, mousePos);
        float influence = 1.0 / (1.0 + dist * 2.0);
        vec2 direction = normalize(pos.xy - mousePos);
        pos.xy += direction * influence * 0.5;
      }
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      gl_PointSize = uSize * (300.0 / -mvPosition.z);
      vAlpha = smoothstep(-1000.0, -200.0, mvPosition.z);
    }
  `;

  const fragmentShader = `
    precision mediump float;
    uniform vec3 uColor;
    uniform bool uAlphaParticles;
    varying float vAlpha;
    
    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);
      
      if (dist > 0.5) discard;
      
      float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
      
      if (uAlphaParticles) {
        alpha *= vAlpha * 0.8;
      } else {
        alpha *= 0.9;
      }
      
      gl_FragColor = vec4(uColor, alpha);
    }
  `;

  const initWebGL = useCallback(() => {
    if (!canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const renderer = new Renderer({
        canvas,
        width: canvas.clientWidth,
        height: canvas.clientHeight,
        alpha: true,
        antialias: false,
      });

      if (!renderer.gl) {
        console.warn('WebGL not supported');
        return;
      }

      const camera = new Camera(renderer.gl, {
        fov: 75,
        aspect: canvas.clientWidth / canvas.clientHeight,
      });
      camera.position.z = 5;

      const scene = new Transform();

      rendererRef.current = renderer;
      sceneRef.current = scene;

      // Create geometry
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * particleSpread;
        positions[i3 + 1] = (Math.random() - 0.5) * particleSpread;
        positions[i3 + 2] = (Math.random() - 0.5) * particleSpread;
      }

      const geometry = new Geometry(renderer.gl, {
        position: { size: 3, data: positions },
      });

      const color = hexToRgb(particleColors[0]);
      const program = new Program(renderer.gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: particleBaseSize * 0.01 },
          uColor: { value: color },
          uAlphaParticles: { value: alphaParticles },
          uMouse: { value: [0, 0] },
          uMouseActive: { value: false },
        },
        transparent: true,
        depthTest: false,
      });

      const mesh = new Mesh(renderer.gl, { geometry, program });
      mesh.setParent(scene);
      mesh.mode = renderer.gl.POINTS;

      meshesRef.current = [mesh];

      // Store particle data
      const particleData = [];
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particleData.push({
          originalPosition: new Vec3(positions[i3], positions[i3 + 1], positions[i3 + 2]),
          velocity: new Vec3(
            (Math.random() - 0.5) * speed * 0.1,
            (Math.random() - 0.5) * speed * 0.1,
            (Math.random() - 0.5) * speed * 0.1
          ),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.002,
        });
      }
      particleDataRef.current = particleData;

      const animate = (time: number) => {
        if (!rendererRef.current || !sceneRef.current) return;
        
        const t = time * 0.001;
        const mesh = meshesRef.current[0];
        
        if (mesh && mesh.geometry && mesh.geometry.attributes.position) {
          const positions = mesh.geometry.attributes.position.data as Float32Array;
          
          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const data = particleDataRef.current[i];
            
            // Simple floating motion
            data.velocity.x += Math.sin(t * 0.5 + i) * 0.00001;
            data.velocity.y += Math.cos(t * 0.3 + i) * 0.00001;
            
            // Apply velocity
            positions[i3] += data.velocity.x;
            positions[i3 + 1] += data.velocity.y;
            positions[i3 + 2] += data.velocity.z;
            
            // Boundary wrapping
            if (Math.abs(positions[i3]) > particleSpread) {
              positions[i3] = data.originalPosition.x;
            }
            if (Math.abs(positions[i3 + 1]) > particleSpread) {
              positions[i3 + 1] = data.originalPosition.y;
            }
            if (Math.abs(positions[i3 + 2]) > particleSpread) {
              positions[i3 + 2] = data.originalPosition.z;
            }
          }
          
          mesh.geometry.attributes.position.needsUpdate = true;
        }

        // Update uniforms
        if (mesh && mesh.program && mesh.program.uniforms) {
          mesh.program.uniforms.uTime.value = t;
          mesh.program.uniforms.uMouse.value = [
            normalizedMouseRef.current.x,
            normalizedMouseRef.current.y
          ];
          mesh.program.uniforms.uMouseActive.value = isHoveringRef.current && moveParticlesOnHover;
        }

        try {
          rendererRef.current.render({ scene: sceneRef.current, camera });
        } catch (error) {
          console.warn('Render error:', error);
        }
        
        animationRef.current = requestAnimationFrame(animate);
      };

      animate(0);

      const handleResize = () => {
        if (!renderer || !canvas) return;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height);
        camera.perspective({ aspect: width / height });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };

    } catch (error) {
      console.warn('WebGL initialization failed:', error);
    }
  }, [
    particleColors,
    particleCount,
    particleSpread,
    speed,
    particleBaseSize,
    alphaParticles,
    moveParticlesOnHover,
    hexToRgb,
  ]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Store raw mouse position
    mouseRef.current.set(x, y);
    
    // Normalize mouse position to WebGL coordinate system
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = -((y / rect.height) * 2 - 1);
    
    normalizedMouseRef.current.set(normalizedX * particleSpread, normalizedY * particleSpread);
  }, [particleSpread]);

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
  }, []);

  useEffect(() => {
    const cleanup = initWebGL();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Cleanup WebGL resources safely
      try {
        meshesRef.current.forEach(mesh => {
          if (mesh.geometry && mesh.geometry.dispose) {
            mesh.geometry.dispose();
          }
          if (mesh.program && mesh.program.dispose) {
            mesh.program.dispose();
          }
        });
        
        if (rendererRef.current && rendererRef.current.dispose) {
          rendererRef.current.dispose();
        }
      } catch (error) {
        console.warn('Cleanup error:', error);
      }

      if (cleanup) cleanup();
    };
  }, [initWebGL]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: moveParticlesOnHover ? 'auto' : 'none',
        zIndex: 0,
      }}
    />
  );
};