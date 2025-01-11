'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastScrollTime = useRef<number>(Date.now());
  const scrollVelocity = useRef<number>(0);

  useEffect(() => {
    // Track scroll velocity
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const now = Date.now();
          const timeDiff = now - lastScrollTime.current;
          const distanceDiff = Math.abs(window.scrollY - lastScrollY);
          scrollVelocity.current = distanceDiff / timeDiff;
          
          lastScrollY = window.scrollY;
          lastScrollTime.current = now;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If scrolling too fast, show elements immediately without animation
          if (scrollVelocity.current > 1.5) { // Threshold in pixels/millisecond
            entry.target.classList.add('no-animation', 'animate-in');
          } else {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, 50);
          }
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      rootMargin: '100px'
    });

    // Observe all scroll-animation elements
    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    // If there's a hash in the URL, scroll to it smoothly
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-foreground">
      <style jsx global>{`
        @keyframes fadeIn {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center bottom;
          will-change: opacity, transform;
          backface-visibility: hidden;
        }

        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                    border-color 0.5s ease;
          will-change: opacity, transform;
          backface-visibility: hidden;
          transform-origin: center;
          -webkit-font-smoothing: subpixel-antialiased;
          position: relative;
          height: auto;
          min-height: fit-content;
        }

        .scroll-animation.no-animation {
          transition: none !important;
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .scroll-delay-1 { transition-delay: 0s; }
        .scroll-delay-2 { transition-delay: 0.15s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
        .scroll-delay-4 { transition-delay: 0.45s; }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.6s;
        }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50">
        <Link href="/" className="text-lg font-semibold flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image 
              src="/images/logo.svg" 
              alt="Unusual Labs Logo" 
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span>Unusual Labs</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/terms">Terms</Link>
          </Button>
          <Button size="sm" asChild>
            <a href="mailto:info@unusuallabs.com">Contact</a>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="hero-glow opacity-0 animate-fade-in" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 text-sm text-neutral-400 mb-8 glimmer-pill opacity-0 fade-in">
              <span>Consumer Mobile App Studio</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight opacity-0 fade-in delay-1">
              We Build Apps<br />People Love
            </h1>
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto opacity-0 fade-in delay-2">
              Crafting exceptional mobile experiences that push the boundaries of innovation and delight users worldwide.
            </p>
            <div className="opacity-0 fade-in delay-3">
              <Button 
                size="lg" 
                className="rounded-full"
                onClick={() => {
                  const element = document.querySelector('#apps');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Apps
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Concept to App Store</h2>
              <p className="text-xl text-neutral-400">We transform ideas into successful mobile applications.</p>
            </div>

            <div className="relative">
              {/* Decorative line connecting the steps */}
              <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-neutral-800 via-pink-500/20 to-neutral-800 hidden md:block" />
              
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative">
                <div className="bg-neutral-900/50 backdrop-blur-sm p-10 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-500 h-full">
                  <div className="text-2xl mb-8 text-pink-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Design & UX</h3>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    Beautiful, intuitive interfaces that users love to engage with, crafted with meticulous attention to detail.
                  </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm p-10 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-500 h-full">
                  <div className="text-2xl mb-8 text-blue-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Development</h3>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    Robust, scalable applications built with cutting-edge technology and performance in mind.
                  </p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm p-10 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-500 h-full">
                  <div className="text-2xl mb-8 text-green-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Launch & Scale</h3>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    End-to-end support from app store submission to scaling your user base globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="apps" className="py-32 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-24 scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Apps</h2>
              <p className="text-neutral-400">Discover our collection of mobile applications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <a href="https://apps.apple.com/us/app/yuzu-ai-avatar-for-your-pet/id1661617607" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all scroll-animation scroll-delay-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/06/4c/0e/064c0ea8-220d-dcd9-bf5d-26095fd78d26/AppIcon-0-0-1x_U007epad-0-85-220.jpeg/460x0w.webp" 
                      alt="Yuzu App Icon" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500 transition-colors">Yuzu</h3>
                    <p className="text-neutral-400">Transform your pet photos into stunning AI-generated portraits. Create magical, personalized artwork of your furry friends in various artistic styles.</p>
                  </div>
                </div>
              </a>

              <a href="https://apps.apple.com/us/app/chromakit-design-app-palettes/id6723902289" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all scroll-animation scroll-delay-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d8/eb/49/d8eb49ba-2974-9786-d8de-277035a9e2c0/AppIcon-0-0-1x_U007epad-0-85-220.png/460x0w.webp" 
                      alt="ChromaKit App Icon" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">ChromaKit</h3>
                    <p className="text-neutral-400">The ultimate color palette generator for developers. Create beautiful, accessible color schemes for your apps with AI-powered suggestions and Xcode integration.</p>
                  </div>
                </div>
              </a>

              <a href="https://apps.apple.com/us/app/motivate-inspirational-quotes/id1452080385" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all scroll-animation scroll-delay-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/d4/f4/67/d4f467a1-199f-5a51-7692-d99624275540/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp" 
                      alt="Motivate App Icon" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Motivate</h3>
                    <p className="text-neutral-400">Start your day inspired with carefully curated motivational quotes. Personalize your daily dose of inspiration with beautiful themes and widgets.</p>
                  </div>
                </div>
              </a>

              <a href="https://apps.apple.com/us/app/pcento-guess-the-percentage/id1348080741" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all scroll-animation scroll-delay-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c6/5f/a3/c65fa30d-a9fb-6050-054a-ca9d95630634/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp" 
                      alt="Pcento App Icon" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-green-500 transition-colors">Pcento</h3>
                    <p className="text-neutral-400">Test your intuition in this unique trivia game. Guess percentages about the world around us and compete with friends to see who knows better.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
              <p className="text-neutral-400 mb-4">Have an idea? We'd love to hear about it.</p>
              <p className="text-xl mb-12">
                <a href="mailto:info@unusuallabs.com" className="text-white hover:text-pink-500 transition-colors">info@unusuallabs.com</a>
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <Button className="w-full" size="lg" asChild>
                <a href="mailto:info@unusuallabs.com">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-800/50 scroll-animation">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-400">
            © 2025 Unusual Labs, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a href="https://www.linkedin.com/company/106134640/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}