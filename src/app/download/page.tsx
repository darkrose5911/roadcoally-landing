"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function DownloadPage() {
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
              <Header className="flex-shrink-0" currentPath="/download" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Get the Roadcoally App</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    Download the Roadcoally mobile app to start requesting deliveries and connecting 
                    with trusted community members in your area.
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                <div className="text-center space-y-12">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Available on Your Favorite Platform</h2>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                      href="#" 
                      className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-colors px-8 py-4 rounded-lg flex items-center space-x-3 min-w-[200px]"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-sm font-bold text-white">📱</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/70">Download on the</div>
                        <div className="text-lg font-medium text-white">App Store</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#" 
                      className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-colors px-8 py-4 rounded-lg flex items-center space-x-3 min-w-[200px]"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-sm font-bold text-white">🤖</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/70">Get it on</div>
                        <div className="text-lg font-medium text-white">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.9">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-white">Features at Your Fingertips</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm text-white">📍</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-white">Real-Time Tracking</h3>
                          <p className="text-white/80">Track your delivery from pickup to drop-off with live GPS updates and notifications.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm text-white">💬</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-white">In-App Messaging</h3>
                          <p className="text-white/80">Communicate directly with your delivery partner through secure in-app messaging.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm text-white">💳</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-white">Secure Payments</h3>
                          <p className="text-white/80">Safe and secure payment processing with multiple payment options available.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm text-white">⭐</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-white">Rating System</h3>
                          <p className="text-white/80">Rate and review delivery partners to maintain high service quality standards.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-2xl font-normal mb-6 text-center text-white">App Statistics</h3>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2 text-white">50K+</div>
                        <div className="text-white/80 text-sm">Active Users</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2 text-white">100K+</div>
                        <div className="text-white/80 text-sm">Deliveries Completed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2 text-white">4.8⭐</div>
                        <div className="text-white/80 text-sm">Average Rating</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2 text-white">15min</div>
                        <div className="text-white/80 text-sm">Avg Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-8 max-w-4xl mx-auto" data-speed="0.7">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Why Choose Our App?</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4" data-lag="0.1">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Fast & Reliable</h3>
                      <p className="text-white/80">Quick delivery connections with trusted community members.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.2">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Safe & Secure</h3>
                      <p className="text-white/80">Advanced security features protect your data and transactions.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.3">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Affordable Rates</h3>
                      <p className="text-white/80">Competitive pricing with transparent fee structure.</p>
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