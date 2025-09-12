"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function AccessibilityPage() {
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
              <Header className="flex-shrink-0" currentPath="/accessibility" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Accessibility Statement</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    Last updated: December 2024
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                {/* Our Commitment */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Our Commitment</h2>
                  <div className="space-y-4 text-white/90">
                    <p>
                      At Roadcoally, we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to information and functionality for all users.
                    </p>
                    <p>
                      We believe that everyone should have access to efficient delivery and logistics solutions, regardless of their abilities or the technologies they use to access our services. This commitment extends across all our digital platforms, including our website, mobile applications, and customer portals.
                    </p>
                  </div>
                </div>

                {/* Accessibility Standards */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Accessibility Standards</h2>
                  <div className="space-y-4 text-white/90">
                    <p>
                      We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities and are recognized internationally as the standard for web accessibility.
                    </p>
                    <p>
                      Our target is to achieve and maintain WCAG 2.1 AA compliance across all user interfaces, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Providing text alternatives for non-text content</li>
                      <li>Ensuring sufficient color contrast ratios</li>
                      <li>Making all functionality available via keyboard navigation</li>
                      <li>Providing clear and consistent navigation</li>
                      <li>Ensuring compatibility with assistive technologies</li>
                    </ul>
                  </div>
                </div>

                {/* Current Accessibility Features */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Current Accessibility Features</h2>
                  <div className="space-y-4 text-white/90">
                    <p>
                      Our platform currently includes the following accessibility features:
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Keyboard Navigation</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Full keyboard accessibility for all interactive elements</li>
                          <li>Logical tab order throughout the interface</li>
                          <li>Visible focus indicators for keyboard users</li>
                          <li>Skip navigation links for efficient page traversal</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Screen Reader Support</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Semantic HTML markup for proper content structure</li>
                          <li>ARIA labels and descriptions for complex elements</li>
                          <li>Heading hierarchy for easy navigation</li>
                          <li>Form labels and error messages clearly associated with inputs</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Color and Contrast</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>High contrast color schemes meeting WCAG AA standards</li>
                          <li>Information conveyed through multiple visual cues, not color alone</li>
                          <li>Customizable display options for better readability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Contact Information</h2>
                  <p className="text-white/90 leading-relaxed">
                    For accessibility-related questions, concerns, or feedback, please contact our accessibility support team at accessibility@roadcoally.com
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