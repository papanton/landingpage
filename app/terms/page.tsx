'use client'

import Link from "next/link"
import Image from "next/image"

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <header className="flex items-center justify-between py-4 px-4 sm:px-6 border-b border-neutral-800/50">
        <Link href="/" className="text-base sm:text-lg font-semibold flex items-center gap-2 min-w-0 flex-shrink">
          <div className="relative w-7 h-7 flex-shrink-0">
            <Image 
              src="/images/logo.svg" 
              alt="Unusual Labs Logo" 
              fill
              sizes="(max-width: 768px) 28px, 32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="whitespace-nowrap truncate">Unusual Labs</span>
        </Link>
      </header>

      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-invert">
            <p className="text-neutral-400 mb-8">Last updated: January 11, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>Our mobile applications are licensed, not sold, to you for use strictly in accordance with these terms. This license is non-transferable and limited to the device(s) on which you have installed our applications.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
              <p>Any content you create, upload, or share through our services remains your property. However, by using our services, you grant us a license to use, modify, and display that content for the purpose of providing and improving our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>Our applications, including but not limited to software, graphics, text, and logos, are protected by copyright and other intellectual property laws. You may not modify, reproduce, or create derivative works based on our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
              <p>You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree not to use our services for any unlawful purpose or in any way that could damage or impair service functionality.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
              <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties, expressed or implied. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.</p>
              <p className="mt-4">We make no warranty that (a) our services will meet your requirements, (b) our services will be uninterrupted, timely, secure, or error-free, (c) the results from the use of our services will be accurate or reliable, (d) the quality of any products, services, information, or other material purchased or obtained through our services will meet your expectations, or (e) any errors in our services will be corrected.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, in no event shall Unusual Labs, Inc., its affiliates, directors, employees, agents, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, our services.</p>
              <p className="mt-4">Under no circumstances will our aggregate liability for all claims relating to our services exceed the greater of $100 USD or the amount you paid us in the last 12 months. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.</p>
              <p className="mt-4">You acknowledge and agree that the disclaimers and limitations of liability set forth in these terms reflect a reasonable and fair allocation of risk between you and Unusual Labs, Inc., and that these limitations are an essential basis of the bargain between the parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Unusual Labs, Inc., its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time at our sole discretion. We will notify users of any material changes via email or through our applications. Your continued use of our services following such modifications constitutes your binding acceptance of the updated terms. If you do not agree to the modified terms, you must stop using our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Dispute Resolution and Arbitration</h2>
              <p>By using our services, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or our services will be resolved through binding arbitration, rather than in court. The arbitration will be conducted by JAMS under its applicable rules in San Francisco, California. The arbitrator's decision will be binding and may be entered as a judgment in any court of competent jurisdiction.</p>
              <p className="mt-4">You agree to resolve any disputes on an individual basis and waive any right to pursue disputes on a class or consolidated basis. You may opt out of this arbitration agreement by emailing us at info@unusuallabs.com within 30 days of first accepting these Terms.</p>
              <p className="mt-4">Notwithstanding the foregoing, you agree that Unusual Labs, Inc. shall still be allowed to apply for injunctive remedies (or an equivalent type of urgent legal relief) in any jurisdiction.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal suit, action, or proceeding arising out of these Terms or our services shall be settled by binding arbitration in San Francisco, California.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@unusuallabs.com" className="text-pink-500 hover:text-pink-400">info@unusuallabs.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 