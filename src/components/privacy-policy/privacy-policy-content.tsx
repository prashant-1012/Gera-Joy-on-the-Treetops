
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';

export default function PrivacyPolicyContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-in fade-in duration-500 ease-out">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Privacy Policy</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">

            <p>This Privacy Policy outlines how Prop Mission Private Limited collects, uses, and protects your personal information when you interact with this website.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">1. Introduction</h2>
            <p>Prop Mission Private Limited, an authorized channel partner, respects your privacy. This policy explains how we handle your data on our website for users globally, including India, Singapore, Australia, UK, and USA.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">2. Information Collection &amp; Consent</h2>
            <p>We collect your name, email, and phone number only when you voluntarily submit an Enquiry or EOI. We use Google Consent Mode v2 to manage your tracking preferences. Tracking only occurs if you provide consent via our cookie banner.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">3. International Data Transfers (NRI Disclosure)</h2>
            <p>By submitting an enquiry, NRI users acknowledge that their data will be transferred to and processed in India. We maintain strict security protocols to protect your information according to international standards.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">4. Data Protection Officer</h2>
            <p>For any data access, correction, or deletion requests, please contact us at{' '}
              <a href="mailto:info@propmission.com" className="text-primary underline hover:text-custom-gold transition-colors">
                info@propmission.com
              </a>
            </p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">5. Company Identity</h2>
            <p>Prop Mission Private Limited (Authorized Channel Partner)</p>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
