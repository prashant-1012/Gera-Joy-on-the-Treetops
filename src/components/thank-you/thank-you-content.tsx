
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';

export default function ThankYouContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);

  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-in fade-in duration-500 ease-out">
        <div className="max-w-xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <CheckCircle2 className="h-16 w-16 text-custom-gold mx-auto mb-6" />
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">Thank You!</h1>
          <p className="text-foreground/90 leading-relaxed text-sm sm:text-base mb-8">
            Your enquiry for <span className="font-semibold text-primary">Gera's Joy on the Treetops</span> has
            been received. Our team will get in touch with you shortly to schedule your site visit.
          </p>
          <Button asChild className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
