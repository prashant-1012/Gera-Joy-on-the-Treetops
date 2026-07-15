
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

            <p>Welcome to <span className="font-semibold text-primary">Prop Mission Private Limited</span>, your trusted authorized channel partner for Godrej Kukatpally, Hyderabad.</p>

            <p>Our mission is to provide exceptional service and guidance to help you find your dream home. We are dedicated to ensuring a seamless and transparent property buying experience — from your first enquiry to final possession.</p>

            <h2 className="font-semibold text-xl text-primary mt-8 mb-3">About Godrej Properties</h2>
            <p>Godrej Properties Limited is the real estate arm of the 127-year-old Godrej Group, one of India's most trusted and diversified conglomerates. Established in 1990 and headquartered in Mumbai, the company has successfully translated its parent group's philosophy of innovation, sustainability, and excellence into the real estate sector.</p>

            <p>With a strong presence across major Indian cities, Godrej Properties is known for delivering high-quality residential and commercial developments that combine modern design with sustainable practices. The company has received numerous awards for its commitment to green building and cutting-edge architecture.</p>

            <p>Guided by its 'Good &amp; Green' vision, the brand focuses on eco-friendly development, energy efficiency, and community-centric living. Known for transparency, reliability, and a customer-first approach, Godrej Properties continues to create future-ready homes that offer long-term value and elevated lifestyles.</p>

            <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-lg text-sm text-foreground/75">
              <p><span className="font-semibold text-primary">Prop Mission Private Limited</span> — Authorized Channel Partner of Godrej Properties</p>
              <p className="mt-1">For enquiries: <a href="mailto:info@propmission.com" className="text-primary underline hover:text-custom-gold transition-colors">info@propmission.com</a></p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
