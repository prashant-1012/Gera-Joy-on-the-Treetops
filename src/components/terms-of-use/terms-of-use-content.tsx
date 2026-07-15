
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';

export default function TermsOfUseContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-in fade-in duration-500 ease-out">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Terms &amp; Conditions</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">

            <p>By accessing or using this website, you agree to the following terms and conditions governing usage, content, and information provided on this landing page.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Intellectual Property</h2>
            <p>All content, including text, images, graphics, logos, and materials are owned by the developer or licensors and protected under intellectual property laws. Unauthorized copying, distribution, or modification is prohibited.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Property Information</h2>
            <p>Project specifications, pricing, availability, and timelines are subject to change without prior notice. Information displayed on this website is indicative and should be verified with the official sales team.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">User Responsibilities</h2>
            <p>Users must provide accurate information when submitting enquiries and must not engage in unlawful activities including hacking, spamming or misuse of the website.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Privacy &amp; Data Usage</h2>
            <p>Personal information submitted through the website may be used for communication, marketing updates and service improvement in accordance with the Privacy Policy.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Disclaimer of Liability</h2>
            <p>The company shall not be liable for any direct or indirect losses, damages or reliance on information provided on this website.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Third-Party Links</h2>
            <p>The website may contain links to external platforms. We do not control or assume responsibility for third-party content or practices.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Modifications to Terms</h2>
            <p>These terms may be revised at any time without prior notice. Continued use of the website constitutes acceptance of updates.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">Governing Law &amp; Jurisdiction</h2>
            <p>Any disputes arising from use of this website shall be governed by applicable jurisdiction laws and resolved in the relevant courts.</p>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
