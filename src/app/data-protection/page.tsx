"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function DataProtectionPage() {
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
              <Header className="flex-shrink-0" currentPath="/data-protection" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Data Protection</h1>
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
                    Roadcoally is committed to protecting your personal data and respecting your privacy rights. 
                    This Data Protection Policy explains how we collect, use, store, and protect your information 
                    in compliance with applicable data protection laws, including the General Data Protection 
                    Regulation (GDPR).
                  </p>
                </div>

                {/* Our Commitment */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">1. Our Commitment</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      We are committed to upholding the highest standards of data protection. Our approach 
                      is built on the following principles:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Lawfulness, fairness, and transparency:</strong> We process data legally, fairly, and transparently</li>
                      <li><strong className="text-white">Purpose limitation:</strong> Data is collected for specified, explicit, and legitimate purposes</li>
                      <li><strong className="text-white">Data minimization:</strong> We collect only what is necessary for our purposes</li>
                      <li><strong className="text-white">Accuracy:</strong> We keep personal data accurate and up to date</li>
                      <li><strong className="text-white">Storage limitation:</strong> Data is kept only as long as necessary</li>
                      <li><strong className="text-white">Integrity and confidentiality:</strong> We ensure appropriate security measures</li>
                      <li><strong className="text-white">Accountability:</strong> We demonstrate compliance with data protection principles</li>
                    </ul>
                  </div>
                </div>

                {/* Your Data Protection Rights */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">2. Your Data Protection Rights</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>Under GDPR, you have the following rights regarding your personal data:</p>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li><strong className="text-white">Right of Access:</strong> Request copies of your personal data</li>
                      <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                      <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
                      <li><strong className="text-white">Right to Data Portability:</strong> Request transfer of your data in a structured format</li>
                      <li><strong className="text-white">Right to Restrict Processing:</strong> Request limitation of processing in specific situations</li>
                      <li><strong className="text-white">Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
                      <li><strong className="text-white">Rights related to Automated Decision-making:</strong> Protection against solely automated decisions</li>
                    </ul>
                  </div>
                </div>

                {/* Data Security Measures */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">3. Data Security Measures</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>We implement comprehensive security measures to protect your personal data:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>End-to-end encryption for data in transit and at rest</li>
                      <li>Multi-factor authentication for system access</li>
                      <li>Regular security assessments and penetration testing</li>
                      <li>Access controls and role-based permissions</li>
                      <li>Continuous monitoring and threat detection</li>
                      <li>Secure backup and disaster recovery procedures</li>
                      <li>Regular security training for all staff members</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Contact Information</h2>
                  <p className="text-white/90 leading-relaxed">
                    For any data protection questions or concerns, please contact our Data Protection Officer at dpo@roadcoally.com
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