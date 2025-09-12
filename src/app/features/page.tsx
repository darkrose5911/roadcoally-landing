"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function FeaturesPage() {
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
              <Header className="flex-shrink-0" currentPath="/features" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Roadcoally Features</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    Discover all the powerful features that make Roadcoally the most trusted 
                    community-driven delivery platform.
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                <div className="text-center space-y-8 max-w-4xl mx-auto" data-speed="0.9">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Core Features</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Everything you need for seamless, reliable delivery experiences in your local community.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-speed="0.8">
                  <div className="text-center space-y-4" data-lag="0.1">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <h3 className="text-xl font-normal text-white">Real-Time Tracking</h3>
                    <p className="text-white/80">Track your deliveries in real-time with GPS precision. Know exactly where your items are at every moment.</p>
                  </div>
                  
                  <div className="text-center space-y-4" data-lag="0.2">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-normal text-white">Secure Verification</h3>
                    <p className="text-white/80">All delivery partners undergo thorough background checks and identity verification for your peace of mind.</p>
                  </div>
                  
                  <div className="text-center space-y-4" data-lag="0.3">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-normal text-white">In-App Communication</h3>
                    <p className="text-white/80">Communicate directly with your delivery partner through secure, encrypted messaging within the app.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.7">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-white">Smart Matching Algorithm</h2>
                    <div className="space-y-4 text-lg text-white/90">
                      <p>
                        Our intelligent matching system connects you with the most suitable delivery partners 
                        based on location, schedule, and user ratings.
                      </p>
                      <p>
                        The algorithm considers factors like proximity, delivery history, user preferences, 
                        and real-time availability to ensure the best possible match.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1 text-white">98%</div>
                        <div className="text-white/80 text-sm">Successful Matches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1 text-white">2min</div>
                        <div className="text-white/80 text-sm">Average Match Time</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-xl font-normal mb-6 text-white">Matching Factors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm text-white">📍</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Location Proximity</p>
                          <p className="text-white/80 text-sm">Nearest available partners</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm text-white">⭐</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Rating & Reviews</p>
                          <p className="text-white/80 text-sm">High-rated partners prioritized</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm text-white">🕒</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Schedule Compatibility</p>
                          <p className="text-white/80 text-sm">Perfect timing alignment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-8 max-w-4xl mx-auto" data-speed="0.6">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Advanced Security Features</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4" data-lag="0.1">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📸</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Photo Verification</h3>
                      <p className="text-white/80">Photo confirmation at pickup and delivery ensures accountability and peace of mind.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.2">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Insurance Coverage</h3>
                      <p className="text-white/80">All deliveries are covered by comprehensive insurance for damage or loss protection.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.3">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚨</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Emergency Support</h3>
                      <p className="text-white/80">24/7 emergency support team ready to assist with any delivery issues or concerns.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-8 max-w-4xl mx-auto" data-speed="0.5">
                  <h2 className="text-3xl font-normal mb-8 text-center text-white">Mobile App Features</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white mb-4">For Customers</h3>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>One-tap delivery requests</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Multiple payment options</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Delivery history and receipts</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Push notifications and updates</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Rate and review system</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white mb-4">For Delivery Partners</h3>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Route optimization</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Earnings tracking</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Flexible scheduling</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Instant payouts</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Performance analytics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Ready to Get Started Section */}
                <div className="text-center space-y-8 mt-40 mb-24">
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