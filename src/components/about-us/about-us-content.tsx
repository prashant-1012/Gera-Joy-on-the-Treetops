
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';

export default function AboutUsContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-in fade-in duration-500 ease-out">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">About Us</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">

            <p>Welcome to <span className="font-semibold text-primary">Fusion Ace</span>, your trusted authorized channel partner for Gera's Joy on the Treetops, Hinjewadi, Pune.</p>

            <p>Our mission is to provide exceptional service and guidance to help you find your dream home. We are dedicated to ensuring a seamless and transparent property buying experience — from your first enquiry to final possession.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">About Gera Developments</h2>
            <p>Founded in 1970, Gera Developments develops premium residential and commercial projects. The company has established a strong presence in Pune, Goa, and Bangalore with landmark projects. Gera Developments has introduced several firsts in the Indian real estate market, including a intelligent building, child-centric project.</p>

            <p>With over 50 years of experience, Gera Developments is driven by a future-focused vision and a 'Let's Outdo' philosophy. Built on trust, a customer-first approach, innovation, and uncompromising quality, we don't just build home, we create inspiring spaces that redefine modern living. By constantly pushing boundaries, we craft experiences that stand the test of time and shape the future of how we live.</p>

            <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-lg text-sm text-foreground/75">
              <p><span className="font-semibold text-primary">Fusion Ace</span> — Authorized Channel Partner of Gera Developments</p>
              {/* <p className="mt-1">For enquiries: <span className="italic">[Contact details pending client input — see Open Questions in docs/progress.md]</span></p> */}
            </div>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
