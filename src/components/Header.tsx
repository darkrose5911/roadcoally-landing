"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle } from
"@/components/ui/sheet";

interface HeaderProps {
  className?: string;
  currentPath?: string;
}

const navLinks = [
{ name: "Home", href: "/" },
{ name: "Features", href: "/features" },
{ name: "How It Works", href: "/how-it-works" },
{ name: "About", href: "/about" },
{ name: "Download", href: "/download" }];


export default function Header({ className = "" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const pathname = usePathname();
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get current active index
  const currentActiveIndex = navLinks.findIndex(link => link.href === pathname);

  // Initialize indicator position without animation
  const initializeIndicator = () => {
    if (currentActiveIndex !== -1 && navRefs.current[currentActiveIndex] && containerRef.current) {
      const activeElement = navRefs.current[currentActiveIndex];
      const container = containerRef.current;
      
      if (activeElement && container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        
        const relativeLeft = elementRect.left - containerRect.left;
        const elementWidth = elementRect.width;
        
        // Set position immediately without animation
        setIndicatorStyle({
          left: relativeLeft,
          width: elementWidth,
          opacity: 1
        });
        setIsInitialized(true);
        setPreviousIndex(currentActiveIndex);
      }
    }
  };

  // Initialize position on mount (without animation)
  useEffect(() => {
    if (!isInitialized) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        initializeIndicator();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentActiveIndex, isInitialized]);

  // Handle directional sliding animation on navigation changes
  useEffect(() => {
    if (!isInitialized || currentActiveIndex === -1) return;
    
    // Only animate if we're moving to a different page
    if (previousIndex !== -1 && previousIndex !== currentActiveIndex) {
      const activeElement = navRefs.current[currentActiveIndex];
      const container = containerRef.current;
      
      if (activeElement && container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        
        const relativeLeft = elementRect.left - containerRect.left;
        const elementWidth = elementRect.width;
        
        // Determine direction for enhanced animation
        const isMovingRight = currentActiveIndex > previousIndex;
        const isMovingLeft = currentActiveIndex < previousIndex;
        
        // Animate to new position with directional awareness
        setIndicatorStyle({
          left: relativeLeft,
          width: elementWidth,
          opacity: 1
        });
      }
    }
    
    // Update previous index for next navigation
    setPreviousIndex(currentActiveIndex);
  }, [currentActiveIndex, previousIndex, isInitialized]);

  return (
    <header className={`w-full ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl lg:text-2xl text-white tracking-tight font-normal !font-(family-name:--font-anton)">
              Roadcoally
            </Link>
          </div>

          {/* Desktop Navigation - Pill Shape with True Directional Sliding */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <div 
              ref={containerRef}
              className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 relative overflow-hidden"
            >
              {/* Directional Sliding Background Indicator */}
              <div 
                className={`absolute top-3 bottom-3 bg-white/30 rounded-full border border-white/40 shadow-lg ${
                  isInitialized ? 'transition-all duration-700 ease-in-out' : ''
                }`}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                  transform: 'translateZ(0)',
                  willChange: 'left, width, opacity'
                }}
              />
              
              <div className="flex items-center space-x-1 relative z-10">
                {navLinks.map((link, index) =>
                <Link
                  key={link.name}
                  ref={(el) => { navRefs.current[index] = el; }}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent group ${
                  pathname === link.href ?
                  "text-white font-semibold" :
                  ""}`
                  }
                  aria-current={pathname === link.href ? "page" : undefined}>

                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      {link.name}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-300 ease-out transform group-hover:scale-110" />
                  </Link>
                )}
              </div>
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/become-a-driver">
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white focus:ring-white/20 rounded-full px-6 transition-all duration-300 hover:scale-105">
                Become a Driver
              </Button>
            </Link>
            <Link href="/support">
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white focus:ring-white/20 rounded-full px-6 transition-all duration-300 hover:scale-105">
                Support
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 focus:ring-white/20 p-2"
                  aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <SheetHeader>
                  <SheetTitle className="text-left text-foreground">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
                    {navLinks.map((link) =>
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-foreground text-lg py-3 px-4 rounded-md transition-colors duration-200 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                      pathname === link.href ?
                      "bg-muted font-medium" :
                      ""}`
                      }
                      aria-current={pathname === link.href ? "page" : undefined}>
                        {link.name}
                      </Link>
                    )}
                  </nav>
                  
                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                    <Link href="/become-a-driver" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full rounded-full">
                        Become a Driver
                      </Button>
                    </Link>
                    <Link href="/support" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full rounded-full">
                        Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>);
}