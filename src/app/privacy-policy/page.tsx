"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Header className="flex-shrink-0" currentPath="/privacy-policy" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Privacy Policy</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    Last updated: December 2024
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                {/* Introduction */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-white/90 text-lg leading-relaxed">
                    At Roadcoally, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our delivery and logistics platform.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    By using our services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>

                {/* 1. Information We Collect */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">1. Information We Collect</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Personal Information</h3>
                      <p className="text-white/90 mb-4">We collect information you provide directly to us, including:</p>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Name, email address, and phone number</li>
                        <li>Delivery addresses and location preferences</li>
                        <li>Payment information and billing details</li>
                        <li>Profile information and preferences</li>
                        <li>Communications with our support team</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Usage Data</h3>
                      <p className="text-white/90 mb-4">We automatically collect certain information about your use of our platform:</p>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Device information (IP address, browser type, operating system)</li>
                        <li>Usage patterns and interaction data</li>
                        <li>Delivery history and preferences</li>
                        <li>App performance and crash reports</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Location Data</h3>
                      <p className="text-white/90">
                        With your permission, we collect precise location data to provide accurate delivery services, 
                        track deliveries in real-time, and improve our routing algorithms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. How We Use Your Information */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">2. How We Use Your Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Service Provision</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Process and fulfill delivery requests</li>
                        <li>Match customers with available drivers</li>
                        <li>Provide real-time tracking and updates</li>
                        <li>Process payments and manage billing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Communication</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Send delivery notifications and updates</li>
                        <li>Provide customer support</li>
                        <li>Send promotional offers and service updates</li>
                        <li>Conduct surveys and gather feedback</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Service Improvement</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Analyze usage patterns to enhance user experience</li>
                        <li>Improve delivery routes and efficiency</li>
                        <li>Develop new features and services</li>
                        <li>Ensure platform security and prevent fraud</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Contact Information</h2>
                  <p className="text-white/90 leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                    please contact us at support@roadcoally.com
                  </p>
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