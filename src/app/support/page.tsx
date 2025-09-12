"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function SupportPage() {
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
              <Header className="flex-shrink-0" currentPath="/support" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Get Support</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    We're here to help you with any questions or issues you might have with Roadcoally.
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4" data-lag="0.1">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-normal text-white">Live Chat</h3>
                    <p className="text-white/80">Get instant help through our in-app live chat support available 24/7.</p>
                    <button className="bg-white/10 text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-colors">
                      Start Chat
                    </button>
                  </div>
                  
                  <div className="text-center space-y-4" data-lag="0.2">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📧</span>
                    </div>
                    <h3 className="text-xl font-normal text-white">Email Support</h3>
                    <p className="text-white/80">Send us a detailed message and we'll respond within 24 hours.</p>
                    <button className="bg-white/10 text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-colors">
                      Send Email
                    </button>
                  </div>
                  
                  <div className="text-center space-y-4" data-lag="0.3">
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📞</span>
                    </div>
                    <h3 className="text-xl font-normal text-white">Phone Support</h3>
                    <p className="text-white/80">Call our support team for urgent issues and immediate assistance.</p>
                    <button className="bg-white/10 text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-8" data-speed="0.9">
                  <h2 className="text-3xl font-normal mb-8 text-center text-white">Frequently Asked Questions</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6" data-lag="0.1">
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">How do I request a delivery?</h3>
                        <p className="text-white/80 text-sm">
                          Simply open the app, tap "Request Delivery", enter your pickup and drop-off locations, 
                          add item details, and set your preferred time and budget.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">How are delivery partners verified?</h3>
                        <p className="text-white/80 text-sm">
                          All delivery partners go through identity verification, background checks, and must 
                          maintain a minimum rating to stay active on the platform.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">What if my item gets damaged?</h3>
                        <p className="text-white/80 text-sm">
                          All deliveries include insurance coverage. Report any damage through the app and 
                          we'll process your claim within 48 hours.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6" data-lag="0.2">
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">How much does delivery cost?</h3>
                        <p className="text-white/80 text-sm">
                          Delivery costs vary based on distance, item size, and urgency. Our platform typically 
                          offers 30-50% savings compared to traditional delivery services.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">Can I track my delivery?</h3>
                        <p className="text-white/80 text-sm">
                          Yes! You'll get real-time GPS tracking, photo confirmations at pickup and delivery, 
                          and push notifications throughout the entire process.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">How do I become a delivery partner?</h3>
                        <p className="text-white/80 text-sm">
                          Download the app, complete the verification process, and start accepting delivery 
                          requests on routes you're already traveling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.7">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-white">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm">📧</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-white/80 text-sm">support@roadcoally.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm">📞</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Phone</p>
                          <p className="text-white/80 text-sm">1-800-ROADCOALLY</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm">🕒</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Hours</p>
                          <p className="text-white/80 text-sm">24/7 Support Available</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm">📍</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Address</p>
                          <p className="text-white/80 text-sm">123 Community Drive<br />Local City, LC 12345</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-xl font-normal mb-6 text-white">Send us a Message</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                          placeholder="Your full name" />

                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                          placeholder="your@email.com" />

                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                          placeholder="How can we help?" />

                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Message</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
                          placeholder="Tell us more about your question or issue...">
                        </textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">

                        Send Message
                      </button>
                    </form>
                  </div>
                </div>

                <div className="text-center space-y-8 mt-40 mb-24">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Still Need Help?</h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Our community forum is also a great place to get help from other users and find answers to common questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Visit Community Forum
                    </button>
                    <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                      Download App
                    </button>
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
    </SmoothScrollWrapper>);

}