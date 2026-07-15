
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const heroImages = [
  { src: '/images/hero-bg-1.png', alt: 'Godrej Kukatpally twin towers at sunset' },
  { src: '/images/hero-bg-2.png', alt: 'Godrej Kukatpally aerial view with pool' },
];

interface InfoCardProps {
  onOpenEnquirePopup: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ onOpenEnquirePopup }) => (
  <div className="relative bg-card p-5 md:p-6 rounded-xl shadow-2xl w-full max-w-sm mx-auto md:mx-0 animate-in fade-in slide-in-from-right-10 duration-700 ease-out delay-200">
    {/* Pre-Launch Tag */}
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-custom-gold text-primary-foreground text-xs sm:text-sm font-semibold rounded-lg shadow-md whitespace-nowrap">
      Pre-Launch
    </div>

    {/* Title & Subtitle */}
    <div className="text-center mt-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">Godrej Kukatpally</h2>
      <p className="text-sm text-muted-foreground mt-1">Kukatpally, Hyderabad</p>
    </div>

    {/* Land Parcel & Floors */}
    <div className="bg-secondary/30 p-3 sm:p-4 rounded-lg my-5 space-y-1.5">
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="text-secondary-foreground">Land Parcel</span>
        <span className="font-semibold text-primary">7.8 Acres</span>
      </div>
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="text-secondary-foreground">Floors</span>
        <span className="font-semibold text-primary">4B + G + 45 Storey</span>
      </div>
    </div>

    {/* Features List */}
    <div className="bg-custom-gold text-primary-foreground rounded-lg overflow-hidden shadow-sm mb-5 text-xs sm:text-sm">
      <p className="py-2.5 px-3 sm:px-4 font-medium text-center">Near Metro, Nexus Mall & HITEC City</p>
      <p className="py-2.5 px-3 sm:px-4 font-medium text-center border-t border-white/25">72,000 Sq.Ft. Clubhouse</p>
      <p className="py-2.5 px-3 sm:px-4 font-medium text-center border-t border-white/25">75% Open Green Spaces</p>
      <p className="py-2.5 px-3 sm:px-4 font-medium text-center border-t border-white/25">Flexible EOI Options</p>
    </div>

    {/* Pricing & BHK Info */}
    <div className="text-center mb-4">
      <p className="text-base sm:text-lg font-semibold text-primary">Premium 3 & 4 BHK Homes</p>
      <p className="text-3xl sm:text-4xl font-bold text-custom-gold my-1">
        Rs. 2.11 Cr*
        <span className="text-lg sm:text-xl font-medium text-muted-foreground align-baseline"> Onwards</span>
      </p>
    </div>

    {/* Enquire Now Button */}
    <Button
      onClick={onOpenEnquirePopup}
      className="w-full bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md h-11 sm:h-12"
    >
      Enquire Now
    </Button>

    {/* RERA */}
    <p className="text-xs text-muted-foreground text-center mt-3">RERA: Coming Soon</p>
  </div>
);

interface HeroSectionProps {
  onOpenEnquirePopup: () => void;
}

export function HeroSection({ onOpenEnquirePopup }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="overview"
      className="relative h-auto md:h-[calc(100vh-7rem)] min-h-[700px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden py-12 md:py-0"
    >
      {/* Background image slideshow */}
      {heroImages.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            quality={85}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-5' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between w-full gap-8">
        {/* Left: Hero Text */}
        <div className="md:w-1/2 lg:w-3/5 flex flex-col justify-center text-center md:text-left order-2 md:order-1 mt-10 md:mt-0 animate-in fade-in duration-700 ease-out">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.7)' }}>
            Godrej Kukatpally, Hyderabad
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl max-w-xl lg:max-w-2xl mb-8 sm:mb-10 mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-150" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.7)' }}>
            Brooklyn-Inspired Sky Residences with Premium Amenities, Excellent Connectivity & Pre-Launch Benefits.
          </p>
        </div>

        {/* Right: Info Card */}
        <div className="md:w-1/2 lg:w-2/5 flex items-center justify-center md:justify-end order-1 md:order-2 w-full">
          <InfoCard onOpenEnquirePopup={onOpenEnquirePopup} />
        </div>
      </div>
    </section>
  );
}
