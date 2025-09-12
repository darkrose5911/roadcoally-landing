"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Car, DollarSign, Clock, Users, Smartphone, CheckCircle, MapPin, Shield, Star, Download } from "lucide-react";
import Link from 'next/link';

export default function BecomeDriverPage() {
  return (
    <SmoothScrollWrapper>
      <BackgroundPattern>
        <div className="min-h-screen flex flex-col">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
            <Header className="flex-shrink-0" currentPath="/become-a-driver" />
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-white space-y-8 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-normal mb-8 md:!text-white">Become a Roadcoally Driver</h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Turn your daily routes into earning opportunities while helping your neighbors get their packages delivered safely and efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-[#00A651] hover:bg-gray-50 font-medium px-8 py-3 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 min-h-[44px] text-base"
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.roadcoally.driver', '_blank')}
                    aria-label="Download the Roadcoally Driver app">
                    <Download className="mr-2 h-5 w-5" />
                    Download Driver App
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
            <div className="text-center text-white space-y-12">
              <h2 className="text-3xl md:text-4xl mb-8 md:text-white font-normal">Why Drive with Roadcoally?</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center" data-lag="0.1">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-white font-normal">Flexible Schedule</h3>
                  <p className="text-white/80">Drive when you want, where you want. Perfect for full-time or part-time earning.</p>
                </div>
                
                <div className="text-center" data-lag="0.2">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Great Earnings</h3>
                  <p className="text-white/80">Competitive rates with instant payouts. Your earnings, your schedule.</p>
                </div>
                
                <div className="text-center" data-lag="0.3">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Help Your Community</h3>
                  <p className="text-white/80">Make a real difference by helping neighbors get their deliveries on time.</p>
                </div>

                <div className="text-center" data-lag="0.4">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Easy to Use</h3>
                  <p className="text-white/80">Simple app interface makes getting started and managing deliveries effortless.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.9">
            <div className="text-center text-white space-y-8">
              <h2 className="text-3xl md:text-4xl mb-8 md:text-white font-normal">How It Works</h2>
              
              <div className="grid md:grid-cols-3 gap-8 py-16">
                <div className="text-center" data-lag="0.1">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl mb-2 text-white font-normal">Sign Up</h3>
                  <p className="text-white/80">Download the Roadcoally Driver App and complete your profile with required documents.</p>
                </div>
                
                <div className="text-center" data-lag="0.2">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Accept Deliveries</h3>
                  <p className="text-white/80">Receive delivery requests that match your route and schedule preferences.</p>
                </div>
                
                <div className="text-center" data-lag="0.3">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Start Earning</h3>
                  <p className="text-white/80">Complete deliveries, help your community, and earn money with flexible scheduling.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
            <div className="text-center text-white space-y-12">
              <h2 className="text-3xl md:text-4xl mb-8 md:text-white font-normal">Driver Requirements</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div data-lag="0.1">
                  <h3 className="text-2xl md:text-3xl font-normal mb-6 md:!text-white">Getting Started is Simple</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Here's what you need to become a Roadcoally driver and start earning with your community.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="!text-white">Must be 18 years or older</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="!text-white">Valid driver's license & clean driving record</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="!text-white">Smartphone with internet access</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="!text-white">Reliable vehicle with insurance</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="!text-white">Pass background verification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Earnings Section */}
          <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.9">
            <div className="text-center text-white space-y-12">
              <h2 className="text-3xl md:text-4xl mb-8 md:text-white font-normal">Your Earning Potential</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center" data-lag="0.1">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-white font-normal">Competitive Rates</h3>
                  <p className="text-white/80">Earn fair compensation for every mile driven and delivery completed.</p>
                </div>
                
                <div className="text-center" data-lag="0.2">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Bonus Opportunities</h3>
                  <p className="text-white/80">Earn extra through peak hour bonuses and customer rating rewards.</p>
                </div>
                
                <div className="text-center" data-lag="0.3">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 font-normal text-white">Instant Payouts</h3>
                  <p className="text-white/80">Get paid immediately after completing each delivery. No waiting periods.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Download App CTA Section */}
          <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 mt-40 mb-24" data-speed="0.7">
              <h2 className="text-3xl md:text-4xl font-normal md:!text-white">Ready to Start Driving?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Join thousands of drivers who are already earning money while helping their neighbors. Download the Roadcoally Driver App and start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-center justify-center mt-6">
                <Button
                  size="lg"
                  className="bg-white text-[#00A651] hover:bg-gray-50 font-medium px-8 py-3 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 min-h-[44px] text-base"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.roadcoally.driver', '_blank')}
                  aria-label="Download the Roadcoally Driver app">
                  <Download className="mr-2 h-5 w-5" />
                  Download Driver App
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-all duration-200 min-h-[44px] text-base"
                  onClick={() => window.location.href = '/support'}
                  aria-label="Contact driver support">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Service Areas
                </Button>
              </div>
              
              <div className="pt-8 border-t border-white/20 max-w-2xl mx-auto">
                <p className="text-white/70 text-sm">
                  Questions? Contact our driver support team at{" "}
                  <a href="mailto:drivers@roadcoally.com" className="text-white underline hover:no-underline">
                    drivers@roadcoally.com
                  </a>
                </p>
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
          </section>
        </div>
      </BackgroundPattern>
    </SmoothScrollWrapper>
  );
}