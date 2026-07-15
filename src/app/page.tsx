
"use client";

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { ProjectOverviewSection } from '@/components/home/project-overview-section';
import { FloorPlanSection } from '@/components/home/floor-plan-section';
import { AmenitiesSection } from '@/components/home/amenities-section';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';
import { LocationTabsSection } from '@/components/home/location-tabs-section';
import { GallerySection } from '@/components/home/gallery-section';
import { AboutSection } from '@/components/home/about-section';


export default function Home() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const [initialPopupTriggered, setInitialPopupTriggered] = useState(false);

  const initialDelayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerPopup = () => {
    if (initialDelayTimerRef.current) {
      clearTimeout(initialDelayTimerRef.current);
      initialDelayTimerRef.current = null;
    }
    setShowEnquirePopup(true);
    if (!initialPopupTriggered) {
      setInitialPopupTriggered(true);
    }
  };

  useEffect(() => {
    if (!initialPopupTriggered && !showEnquirePopup) {
      initialDelayTimerRef.current = setTimeout(() => {
        triggerPopup();
      }, 3000);
    }
    return () => {
      if (initialDelayTimerRef.current) {
        clearTimeout(initialDelayTimerRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePopupOpenChange = (isOpen: boolean) => {
    setShowEnquirePopup(isOpen);
    if (isOpen && !initialPopupTriggered) {
      setInitialPopupTriggered(true);
      if (initialDelayTimerRef.current) {
        clearTimeout(initialDelayTimerRef.current); 
        initialDelayTimerRef.current = null;
      }
    }
  };
  
  const openEnquirePopup = () => {
    triggerPopup();
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow">
        <HeroSection onOpenEnquirePopup={openEnquirePopup} />
        <ProjectOverviewSection onOpenEnquirePopup={openEnquirePopup} />
        <FloorPlanSection onOpenEnquirePopup={openEnquirePopup} />

        <AmenitiesSection />

        <LocationTabsSection onOpenEnquirePopup={openEnquirePopup} />
        <GallerySection />
        <AboutSection />

      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={handlePopupOpenChange} />
    </div>
  );
}
