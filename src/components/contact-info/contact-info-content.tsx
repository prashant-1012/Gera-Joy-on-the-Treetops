
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';
export default function ContactInfoContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-in fade-in duration-500 ease-out">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out text-center">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-8">Contact Information</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">

            <p>Get in touch with us for any enquiries about <span className="font-semibold text-primary">Gera's Joy on the Treetops, Hinjewadi, Pune</span>.</p>

            {/* <div className="mt-8 italic text-foreground/60">
              [Contact details pending client input — see Open Questions in docs/progress.md]
            </div> */}

            <p className="mt-8 text-foreground/60 text-sm">
              Fusion Ace — Authorized Channel Partner of Gera Developments
            </p>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
