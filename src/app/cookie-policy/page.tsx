"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function CookiePolicy() {
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
              <Header className="flex-shrink-0" currentPath="/cookie-policy" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Cookie Policy</h1>
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
                    This Cookie Policy explains how Roadcoally ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website or use our mobile application. This policy should be read alongside our Privacy Policy.
                  </p>
                </div>

                {/* What Are Cookies */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">1. What Are Cookies</h2>
                  <div className="space-y-4">
                    <p className="text-white/90 leading-relaxed">
                      Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and enhance your browsing experience.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      Cookies can be "persistent" (remaining on your device until deleted or expired) or "session" cookies (deleted when you close your browser). They may be "first-party" (set by our website) or "third-party" (set by other domains).
                    </p>
                  </div>
                </div>

                {/* Types of Cookies */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">2. Types of Cookies We Use</h2>
                  <div className="space-y-6">
                    <p className="text-white/90 leading-relaxed">
                      We use different types of cookies for various purposes on our platform:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Essential Cookies</h3>
                        <p className="text-white/90">
                          Required for basic website functionality and security. These cannot be disabled.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Analytics Cookies</h3>
                        <p className="text-white/90">
                          Help us understand how visitors interact with our platform to improve performance.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Functional Cookies</h3>
                        <p className="text-white/90">
                          Remember your preferences and settings to enhance your experience.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Advertising Cookies</h3>
                        <p className="text-white/90">
                          Used to deliver relevant advertisements and track campaign effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Managing Cookies */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">3. Managing Cookies</h2>
                  <div className="space-y-4">
                    <p className="text-white/90 leading-relaxed">
                      You have several options for controlling cookies:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Browser Settings</h3>
                        <p className="text-white/90 mb-3">
                          Most browsers allow you to control cookies through their settings:
                        </p>
                        <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                          <li>Block all cookies</li>
                          <li>Block third-party cookies only</li>
                          <li>Delete existing cookies</li>
                          <li>Set notifications when cookies are set</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed">
                      Please note that disabling cookies may affect the functionality of our website and your user experience.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Contact Information</h2>
                  <p className="text-white/90 leading-relaxed">
                    If you have questions about this Cookie Policy or our use of cookies, please contact us at support@roadcoally.com
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