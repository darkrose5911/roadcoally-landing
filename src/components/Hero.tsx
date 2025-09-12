"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ScrollFloat } from "./ScrollFloat";
import { ShinyText } from "./ShinyText";

interface HeroProps {
  className?: string;
  onOrderNow?: () => void;
  onLearnMore?: () => void;
}

export default function Hero({ className, onOrderNow, onLearnMore }: HeroProps) {
  const handleLearnMore = () => {
    window.location.href = '/learn-more';
  };

  const handleDownload = () => {
    window.location.href = '/download';
  };

  return (
    <section
      className={`flex flex-col justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 ${className || ''}`}
      aria-labelledby="hero-heading">

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl lg:text-left text-center">
          {/* Main Headline with ScrollReveal Animation */}
          <ScrollReveal
            containerClassName="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight uppercase mb-6"
            textClassName="font-heading"
            enableBlur={true}
            baseOpacity={0.1}
            baseRotation={5}
            blurStrength={2}
            rotationEnd="center center"
            wordAnimationEnd="center center">

            Peer-to-Peer Local Delivery Anywhere, Anytime.
          </ScrollReveal>
          
          {/* Subheadline with ScrollFloat Animation */}
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}>

            <p className="text-white/90 text-lg sm:text-xl md:text-2xl text-center leading-relaxed mb-8 max-w-2xl lg:text-justify !px-0">
              Roadcoally connects you with friends, families, acquaintances, and anyone to deliver anything you need – quick, safe, and easy.
            </p>
          </ScrollFloat>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-start justify-center">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-white text-[#00A651] hover:bg-gray-50 font-medium px-8 py-3 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 min-h-[44px] text-base"
              aria-label="Download the app"
              aria-describedby="order-hint">
              <ShinyText
                text="Download"
                disabled={false}
                speed={3}
                className="on-white" />

            </Button>
            
            <Button
              onClick={handleLearnMore}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-all duration-200 min-h-[44px] text-base"
              aria-label="Learn more about our service">
              Learn More
            </Button>
          </div>
          
          {/* Hidden accessibility hint */}
          <div id="order-hint" className="sr-only">
            Download the app to start using delivery service from local community members
          </div>
        </div>
      </div>
    </section>);

}