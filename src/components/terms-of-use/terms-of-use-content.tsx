
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

            <p>By accessing or using this website, you agree to the following terms and conditions governing its use and the information provided.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">1. Professional Status</h2>
            <p>Prop Mission Private Limited is an authorized Channel Partner. This website is an informational landing page intended for collecting Expressions of Interest (EOI) and does not represent the official website of the developer.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">2. Pre-Launch Disclaimer</h2>
            <p>The project is currently in the pre-launch stage. RERA registration is awaited. All images, floor plans, specifications, and details are tentative and for representational purposes only. Formal bookings will only be accepted after the project receives its RERA registration number.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">3. NRI Investment Compliance</h2>
            <p>Property investments for Non-Resident Indians (NRIs) are governed by the Foreign Exchange Management Act (FEMA). All transactions must comply with RBI guidelines, including usage of NRE/NRO accounts and applicable TDS (Tax Deducted at Source) regulations.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">4. Use of Website</h2>
            <p>Users agree to use this website for lawful purposes only. You must not misuse the platform for fraudulent activities, spamming, or any unauthorized access attempts.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">5. Information Accuracy</h2>
            <p>While we strive to provide accurate and updated information, all project-related details such as pricing, availability, and timelines are subject to change without prior notice and should be verified with the official sales team.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">6. Privacy &amp; Data Usage</h2>
            <p>Any personal information submitted through this website will be used for communication, property updates, and marketing purposes in accordance with our Privacy Policy.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">7. Disclaimer of Liability</h2>
            <p>Prop Mission Private Limited shall not be held liable for any direct, indirect, or incidental damages arising from the use of this website or reliance on the information provided.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">8. Third-Party Services</h2>
            <p>This website may include integrations or links to third-party services. We do not control or take responsibility for their content, policies, or practices.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">9. Modifications to Terms</h2>
            <p>These terms may be updated at any time without prior notice. Continued use of the website constitutes acceptance of the revised terms.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">10. Governing Law</h2>
            <p>Any disputes shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
