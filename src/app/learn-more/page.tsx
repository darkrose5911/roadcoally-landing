"use client";

import BackgroundPattern from '@/components/BackgroundPattern';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Header from '@/components/Header';
import { ClickSpark } from '@/components/ClickSpark';
import Link from 'next/link';

export default function LearnMorePage() {
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
              <Header className="flex-shrink-0" currentPath="/learn-more" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white space-y-8 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">Learn More About Roadcoally</h1>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                    Discover how our innovative community-driven platform is revolutionizing local delivery 
                    and logistics through the power of neighborly cooperation.
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20" data-speed="0.8">
              <div className="text-white space-y-16">
                <div className="text-center space-y-8 max-w-4xl mx-auto" data-speed="0.9">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">The Roadcoally Difference</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Unlike traditional delivery services, Roadcoally harnesses the power of community connections 
                    to create a more efficient, affordable, and sustainable delivery network.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.7">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-white">Built for Community</h2>
                    <div className="space-y-4 text-lg text-white/90">
                      <p>
                        Roadcoally was founded on the belief that communities are stronger when neighbors 
                        help neighbors. Our platform creates meaningful connections while solving real logistics challenges.
                      </p>
                      <p>
                        Every delivery on our network represents more than just a package moving from point A to point B. 
                        It's a community member helping another, building trust and cooperation in the process.
                      </p>
                      <p>
                        We've designed our platform to reward this spirit of cooperation with fair compensation, 
                        transparent processes, and the satisfaction of knowing you're making a difference.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-xl font-normal mb-6 text-white">Community Impact</h3>
                    <div className="space-y-4 text-white/90">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm text-white">🏘️</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Strengthens Local Bonds</p>
                          <p className="text-white/80 text-sm">Connects neighbors and builds community relationships</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm text-white">💰</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Economic Benefits</p>
                          <p className="text-white/80 text-sm">Keeps money circulating within the community</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-sm text-white">🌱</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">Environmental Impact</p>
                          <p className="text-white/80 text-sm">Reduces carbon footprint through trip optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-8 max-w-4xl mx-auto" data-speed="0.6">
                  <h2 className="text-3xl md:text-4xl font-normal text-white">Innovation Meets Tradition</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4" data-lag="0.1">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Traditional Values</h3>
                      <p className="text-white/80">Rooted in the timeless tradition of neighbors helping neighbors.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.2">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Modern Technology</h3>
                      <p className="text-white/80">Powered by cutting-edge matching algorithms and real-time tracking.</p>
                    </div>
                    
                    <div className="text-center space-y-4" data-lag="0.3">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔮</span>
                      </div>
                      <h3 className="text-xl font-normal text-white">Future Vision</h3>
                      <p className="text-white/80">Building the foundation for sustainable, community-centered logistics.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-8 max-w-4xl mx-auto" data-speed="0.5">
                  <h2 className="text-3xl font-normal mb-8 text-center text-white">Our Technology Platform</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white mb-4">Smart Matching</h3>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>AI-powered route optimization</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Real-time availability matching</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Preference-based partner selection</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Dynamic pricing optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white mb-4">Security & Trust</h3>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Multi-layer identity verification</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>End-to-end delivery tracking</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Secure payment processing</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-white mt-1">✓</span>
                          <span>Comprehensive insurance coverage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-speed="0.8">
                  <div data-lag="0.1">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-white">Join the Movement</h2>
                    <div className="space-y-4 text-lg text-white/90">
                      <p>
                        Roadcoally is more than just a delivery platform – it's a movement toward more 
                        sustainable, community-centered commerce and logistics.
                      </p>
                      <p>
                        By choosing Roadcoally, you're not just getting your packages delivered. You're 
                        investing in your community, supporting your neighbors, and helping build a 
                        more connected future.
                      </p>
                      <div className="flex items-center space-x-4 pt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1 text-white">50K+</div>
                          <div className="text-white/80 text-sm">Active Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1 text-white">100K+</div>
                          <div className="text-white/80 text-sm">Deliveries Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1 text-white">98%</div>
                          <div className="text-white/80 text-sm">Satisfaction Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-8" data-lag="0.2">
                    <h3 className="text-xl font-normal mb-6 text-white">Ready to Get Started?</h3>
                    <div className="space-y-4 text-white/90">
                      <p>
                        Whether you need something delivered or want to earn money helping others, 
                        Roadcoally makes it simple and rewarding.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-white">📱</span>
                          <span>Download the mobile app</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-white">✍️</span>
                          <span>Complete your profile</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-white">🚀</span>
                          <span>Start connecting with neighbors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ready to Get Started Section */}
                <div className="text-center space-y-8 mt-40 mb-24" data-speed="0.7">
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