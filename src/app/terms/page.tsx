"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function TermsPage() {
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
              <Header className="flex-shrink-0" currentPath="/terms" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Terms & Conditions</h1>
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
                    Welcome to Roadcoally. These Terms and Conditions ("Terms") govern your use of our community-driven delivery platform. By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </div>

                {/* 1. Introduction and Acceptance */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">1. Introduction and Acceptance</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      These Terms of Service constitute a legally binding agreement between you and Roadcoally regarding your use of our platform, mobile application, and related services.
                    </p>
                    <p>
                      By creating an account, accessing our platform, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                    </p>
                  </div>
                </div>

                {/* 2. Service Description */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">2. Service Description</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      Roadcoally operates a community-driven delivery platform that connects users who need items delivered with community members who can provide delivery services along their existing routes.
                    </p>
                    <p>
                      Our platform facilitates these connections but does not directly provide delivery services. We act as an intermediary, providing the technology and framework for community members to help each other.
                    </p>
                  </div>
                </div>

                {/* 3. User Accounts and Verification */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">3. User Accounts and Verification</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      To use our services, you must create an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials.
                    </p>
                    <p>
                      Delivery partners must complete additional verification steps, including identity verification and background checks, before being approved to provide delivery services.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Valid government-issued identification</li>
                      <li>Background check clearance</li>
                      <li>Vehicle registration and insurance (where applicable)</li>
                      <li>Phone number verification</li>
                    </ul>
                  </div>
                </div>

                {/* 4. User Responsibilities */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">4. User Responsibilities</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">For All Users</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Provide accurate and truthful information</li>
                        <li>Comply with all applicable laws and regulations</li>
                        <li>Treat other community members with respect</li>
                        <li>Use the platform only for legitimate purposes</li>
                        <li>Maintain the security of your account</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">For Delivery Partners</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        <li>Handle all items with care and professionalism</li>
                        <li>Deliver items safely and on time</li>
                        <li>Maintain appropriate insurance coverage</li>
                        <li>Communicate clearly with customers</li>
                        <li>Follow all traffic laws and safety regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5. Prohibited Activities */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">5. Prohibited Activities</h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>The following activities are strictly prohibited on our platform:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Delivery of illegal, dangerous, or prohibited items</li>
                      <li>Fraudulent or deceptive practices</li>
                      <li>Harassment or inappropriate behavior toward other users</li>
                      <li>Circumventing our fee structure or payment systems</li>
                      <li>Creating fake accounts or impersonating others</li>
                      <li>Interfering with the platform's operation or security</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-3xl font-normal text-white">Contact Information</h2>
                  <p className="text-white/90 leading-relaxed">
                    If you have any questions about these Terms & Conditions, please contact us at legal@roadcoally.com
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