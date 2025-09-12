"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function Page() {
  return (
    <SmoothScrollWrapper>
      <BackgroundPattern>
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="min-h-screen flex flex-col">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
              <Header className="flex-shrink-0" currentPath="/" />
              <div className="flex-1 flex items-center">
                <Hero className="w-full" />
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-center text-white space-y-8">
                <h2 className="text-3xl md:text-4xl mb-8 text-white font-normal">How It Works</h2>
                
                <div className="grid md:grid-cols-3 gap-8 py-16">
                  <div className="text-center" data-lag="0.1">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl mb-2 text-white font-normal">Request</h3>
                    <p className="text-white/80">Post what you need delivered with pickup and drop-off locations.</p>
                  </div>
                  
                  <div className="text-center" data-lag="0.2">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl mb-2 font-normal text-white">Connect</h3>
                    <p className="text-white/80">Get matched with trusted community members going your way.</p>
                  </div>
                  
                  <div className="text-center" data-lag="0.3">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl mb-2 font-normal text-white">Deliver</h3>
                    <p className="text-white/80">Track your delivery in real-time until it reaches you safely.</p>
                  </div>
                </div>
                
                <section className="py-20 space-y-6 font-normal" data-speed="0.9">
                  <h2 className="text-3xl md:text-4xl text-white font-normal">Why Choose Roadcoally?</h2>
                  <div className="max-w-2xl mx-auto space-y-4 text-lg text-white font-bold">
                    <p className="text-white">• Community-driven delivery network you can trust</p>
                    <p className="text-white">• Affordable prices with transparent pricing</p>
                    <p className="text-white">• Fast delivery times within your local area</p>
                    <p className="text-white">• Environmental friendly by utilizing existing trips</p>
                    <p className="text-white">• Support your local community while getting deliveries</p>
                  </div>
                </section>

                {/* Ready to Get Started Section */}
                <div className="text-center space-y-8 mt-40 mb-24" data-speed="0.7">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Ready to Get Started?</h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Join thousands of community members who are already using Roadcoally for 
                    their delivery needs. Sign up today and experience the future of local delivery.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Download App
                    </button>
                    <Link 
                      href="/about"
                      className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-block"
                    >
                      About Us
                    </Link>
                  </div>
                </div>

                {/* Legal Links Footer */}
                <div className="text-center space-y-4 pt-20 mt-24 border-t border-white/20" data-speed="0.6">
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                      Terms & Conditions
                    </Link>
                    <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/cookie-policy" className="text-white/70 hover:text-white transition-colors">
                      Cookie Policy
                    </Link>
                    <Link href="/data-protection" className="text-white/70 hover:text-white transition-colors">
                      Data Protection
                    </Link>
                    <Link href="/accessibility" className="text-white/70 hover:text-white transition-colors">
                      Accessibility
                    </Link>
                  </div>
                  <p className="text-white/60 text-sm">
                    © 2024 Roadcoally. All rights reserved.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </ClickSpark>
      </BackgroundPattern>
    </SmoothScrollWrapper>
  );
}