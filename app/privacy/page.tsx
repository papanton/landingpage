'use client'

import Link from "next/link"
import Image from "next/image"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-foreground">
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
      </header>

      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert">
            <p className="text-neutral-400 mb-8">Last updated: January 11, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our applications.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Account information (email address, username)</li>
                <li>User-generated content</li>
                <li>App usage data and preferences</li>
                <li>Device information (model, operating system)</li>
              </ul>
              <p>We don&apos;t collect or store sensitive personal information.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Communicate with you about updates</li>
                <li>Analyze app performance and usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Analytics partners to improve our services</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@unusuallabs.com" className="text-pink-500 hover:text-pink-400">info@unusuallabs.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 