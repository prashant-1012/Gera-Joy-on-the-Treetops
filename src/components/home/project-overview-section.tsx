
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  '2 Iconic Towers',
  '4B + G + 45 Floors High-Rise Living',
  'Dec 2030* Possession',
  'Near Metro, Nexus Mall & HITEC City',
  'Spacious 3 & 4 BHK Homes',
  '72,000 Sq Ft Grand Clubhouse',
  '75% Open Green Spaces',
  'Flexible EOI Options',
];

interface ProjectOverviewSectionProps {
  onOpenEnquirePopup: () => void;
}

export function ProjectOverviewSection({ onOpenEnquirePopup }: ProjectOverviewSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Godrej Kukatpally, Hyderabad
          </h2>
          <div className="mt-3 h-1 w-20 bg-custom-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-start">

          {/* Left: description + highlights + CTA */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-10 duration-700 ease-out">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Welcome to <span className="font-semibold text-foreground">Godrej Kukatpally</span>, a vertical sanctuary of distinction rising high above West Hyderabad's skyline. Featuring magnificent twin high-rise towers soaring 45 stories into the sky, this iconic development introduces an extraordinary blend of grand architectural scale and peaceful residential serenity. Inside, you will find an exclusive collection of premium <span className="font-semibold text-foreground">3 & 4 BHK residences</span> where luxury is carefully crafted around your everyday comfort, style, and seamless connectivity to the city's tech hubs.
            </p>

            {/* Project Highlights */}
            <div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary mb-4">
                Project Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-custom-gold shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              onClick={onOpenEnquirePopup}
              className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-lg shadow-md px-6 py-3 transform transition-transform hover:scale-105"
            >
              Enquire Now
            </Button>
          </div>

          {/* Right: building image */}
          <div className="relative order-first md:order-last mt-0 md:mt-4 animate-in fade-in slide-in-from-right-10 duration-700 ease-out delay-150">
            <div className="relative rounded-l-xl rounded-r-[60px] overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/overview-building.png"
                alt="Godrej Kukatpally twin towers — Artist's Impression"
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-right pr-4">*Artist's Impression</p>
          </div>

        </div>
      </div>
    </section>
  );
}
