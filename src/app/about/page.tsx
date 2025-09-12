"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <SmoothScrollWrapper>
      <BackgroundPattern>
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}>
          
          <div className="min-h-screen flex flex-col">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
              <Header className="flex-shrink-0" currentPath="/about" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">About Roadcoally</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    We're revolutionizing local delivery by connecting community members who need 
                    items delivered with neighbors already traveling that route.
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                <div className="text-center space-y-8 max-w-4xl mx-auto" data-speed="0.9">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Our Mission</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Our mission is to create a sustainable, community-driven delivery network that reduces 
                    environmental impact while providing affordable, reliable delivery services. By connecting 
                    people who need deliveries with community members already making those trips, we're building 
                    a more efficient and eco-friendly logistics ecosystem.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.7">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-white">Why We Started</h2>
                    <div className="space-y-4 text-lg text-white/90">
                      <p>
                        Traditional delivery services are expensive, wasteful, and often unreliable. We saw an 
                        opportunity to leverage the power of community connections to create something better.
                      </p>
                      <p>
                        Every day, millions of people make trips to stores, restaurants, and businesses. Many 
                        of these travelers would be happy to help neighbors by picking up and delivering items 
                        along their route for a small fee.
                      </p>
                      <p>
                        Roadcoally makes these connections possible, creating a win-win situation for everyone involved.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-xl font-normal mb-6 text-white">Our Values</h3>
                    <div className="space-y-4 text-white/90">
                      <div>
                        <h4 className="font-medium text-white">Community First</h4>
                        <p className="text-sm">Building stronger neighborhoods through mutual support and cooperation.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Sustainability</h4>
                        <p className="text-sm">Reducing carbon footprint by optimizing existing transportation routes.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Trust & Safety</h4>
                        <p className="text-sm">Rigorous verification and rating systems ensure safe, reliable service.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Affordability</h4>
                        <p className="text-sm">Making delivery services accessible to everyone in the community.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center max-w-4xl mx-auto space-y-8" data-speed="0.8">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">How It Benefits Everyone</h2>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center space-y-4" data-lag="0.1">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👥</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">For Requesters</h3>
                      <p className="text-white/80">Get affordable, fast delivery from trusted community members who care about your neighborhood.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.2">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">For Drivers</h3>
                      <p className="text-white/80">Earn extra income on trips you're already making while helping your neighbors and community.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.3">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">For the Environment</h3>
                      <p className="text-white/80">Reduce carbon emissions by utilizing existing trips instead of creating new delivery routes.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-8 max-w-4xl mx-auto" data-speed="0.6">
                  <h2 className="text-3xl font-normal mb-6 text-center text-white">Our Commitment to Safety</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Background checks for all delivery partners</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Real-time GPS tracking for every delivery</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Photo confirmation at pickup and delivery</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Community rating and review system</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>24/7 customer support and assistance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Insurance coverage for all deliveries</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Secure payment processing</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Privacy protection and data security</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

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
                    <Link href="/support" className="text-white/70 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/support" className="text-white/70 hover:text-white transition-colors">
                      Cookie Policy
                    </Link>
                    <Link href="/support" className="text-white/70 hover:text-white transition-colors">
                      Data Protection
                    </Link>
                    <Link href="/support" className="text-white/70 hover:text-white transition-colors">
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