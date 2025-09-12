"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function HowItWorksPage() {
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
              <Header className="flex-shrink-0" currentPath="/how-it-works" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">How Roadcoally Works</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    Discover how our community-driven platform connects neighbors for fast, 
                    reliable, and affordable local deliveries.
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-6" data-lag="0.1">
                    <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold">1</span>
                    </div>
                    <h3 className="text-2xl font-normal !text-white">Request Delivery</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Post your delivery request with pickup and drop-off locations. Set your preferred time and any special instructions.
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 text-sm text-white/70">
                      <p className="!text-white">• Add item details and photos</p>
                      <p className="!text-white">• Set pickup and delivery locations</p>
                      <p className="!text-white">• Choose delivery timeframe</p>
                      <p className="!text-white">• Set your budget</p>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-6" data-lag="0.2">
                    <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold">2</span>
                    </div>
                    <h3 className="text-2xl font-normal !text-white">Get Matched</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Our smart algorithm matches you with trusted community members who are already traveling your route.
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 text-sm text-white/70">
                      <p className="!text-white">• View nearby delivery partners</p>
                      <p className="!text-white">• Check ratings and reviews</p>
                      <p className="!text-white">• Confirm pickup details</p>
                      <p className="!text-white">• Secure payment processing</p>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-6" data-lag="0.3">
                    <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold">3</span>
                    </div>
                    <h3 className="text-2xl font-normal !text-white">Track & Receive</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Follow your package in real-time with GPS tracking and receive notifications at every step of the journey.
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 text-sm text-white/70">
                      <p className="!text-white">• Real-time GPS tracking</p>
                      <p className="!text-white">• Photo confirmations</p>
                      <p className="!text-white">• Delivery notifications</p>
                      <p className="!text-white">• Rate your experience</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-8" data-speed="0.9">
                  <h2 className="text-3xl font-normal mb-8 text-center !text-white">For Delivery Partners</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div data-lag="0.1">
                      <h3 className="text-xl font-normal mb-4 !text-white">Earn While You Travel</h3>
                      <p className="text-white/90 mb-4">
                        Already planning a trip? Pick up packages along your route and earn extra income 
                        while helping your community.
                      </p>
                      <ul className="space-y-2 text-white/80">
                        <li>• Set your own schedule</li>
                        <li>• Choose deliveries on your route</li>
                        <li>• Earn competitive rates</li>
                        <li>• Build your reputation</li>
                      </ul>
                    </div>
                    <div data-lag="0.2">
                      <h3 className="text-xl font-normal mb-4 !text-white">Safety & Support</h3>
                      <p className="text-white/90 mb-4">
                        We provide comprehensive safety features and support to ensure every delivery 
                        is secure and successful.
                      </p>
                      <ul className="space-y-2 text-white/80">
                        <li>• Identity verification required</li>
                        <li>• Insurance coverage included</li>
                        <li>• 24/7 customer support</li>
                        <li>• Secure payment guarantee</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.7">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 md:!text-white">Why Choose Roadcoally?</h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-white/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-medium !text-white">Community-Driven</h4>
                          <p className="text-white/80 text-sm">Built by and for local communities</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-white/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-medium !text-white">Cost-Effective</h4>
                          <p className="text-white/80 text-sm">Up to 50% cheaper than traditional delivery</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-white/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-medium !text-white">Environmentally Friendly</h4>
                          <p className="text-white/80 text-sm">Reduces carbon footprint by using existing trips</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-white/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="font-medium !text-white">Fast & Reliable</h4>
                          <p className="text-white/80 text-sm">Average delivery time of 2 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-xl font-normal mb-6 !text-white">Success Stories</h3>
                    <div className="space-y-6">
                      <div className="border-l-2 border-white/20 pl-4">
                        <p className="text-white/90 italic mb-2">
                          "I've saved hundreds of dollars on deliveries while supporting my neighbors. It's amazing!"
                        </p>
                        <p className="text-white/60 text-sm">- Sarah M., Regular User</p>
                      </div>
                      <div className="border-l-2 border-white/20 pl-4">
                        <p className="text-white/90 italic mb-2">
                          "As a delivery partner, I earn extra income on trips I was already making. Win-win!"
                        </p>
                        <p className="text-white/60 text-sm">- Mike D., Delivery Partner</p>
                      </div>
                    </div>
                  </div>
                </div>

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