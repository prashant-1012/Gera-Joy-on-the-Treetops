
"use client";

import { useState } from 'react';
import Link from 'next/link';
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

            <p>This Privacy Policy explains how information is collected, used, and protected when you interact with this website.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Information We Collect</h2>
            <p>We may collect personal information such as name, phone number, email address, and any details submitted through enquiry forms or communication channels.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">How We Use Information</h2>
            <p>The information collected is used to respond to enquiries, provide project updates, improve user experience, and share relevant communication related to the project.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Cookies &amp; Analytics</h2>
            <p>This website may use cookies and third-party analytics tools to understand user behaviour, improve performance and enhance the browsing experience.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Data Protection</h2>
            <p>We take reasonable steps to safeguard your personal information and prevent unauthorized access, misuse or disclosure.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Third-Party Services</h2>
            <p>The website may integrate third-party tools such as CRM platforms, marketing services or analytics providers. These services operate under their own privacy policies.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">User Consent</h2>
            <p>By submitting your information on this website, you consent to the collection and use of data in accordance with this policy.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Policy Updates</h2>
            <p>This Privacy Policy may be updated from time to time without prior notice. Users are encouraged to review this page periodically.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Contact</h2>
            <p>For privacy-related queries, please contact the official sales team through the{' '}
              <Link href="/contact-info" className="text-primary underline hover:text-custom-gold transition-colors">
                contact details provided on this website
              </Link>.
            </p>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
