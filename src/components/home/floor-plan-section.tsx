
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lock, IndianRupee } from 'lucide-react';

const floorPlans = [
  {
    config: '3 BHK Premium',
    area: '1600–1900 Sq. Ft.',
    price: '2.11 Cr*',
    image: '/images/floorplan-3bhk-premium.png',
    alt: '3 BHK Premium floor plan — Godrej Kukatpally',
  },
  {
    config: '3 BHK Luxe',
    area: '2000–2100 Sq. Ft.',
    price: '2.75 Cr*',
    image: '/images/floorplan-3bhk-luxe.png',
    alt: '3 BHK Luxe floor plan — Godrej Kukatpally',
  },
  {
    config: '4 BHK + Maid',
    area: '3200 Sq. Ft.',
    price: '4.40 Cr*',
    image: '/images/floorplan-4bhk-maid.png',
    alt: '4 BHK + Maid floor plan — Godrej Kukatpally',
  },
];

interface FloorPlanSectionProps {
  onOpenEnquirePopup: () => void;
}

export function FloorPlanSection({ onOpenEnquirePopup }: FloorPlanSectionProps) {
  return (
    <section id="floor-plan" className="py-16 sm:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          Godrej Kukatpally Floor Plan & Pricing
        </h2>
        <div className="h-1 w-20 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <div
              key={plan.config}
              className="animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">

                {/* Blurred image — click to open popup */}
                <div
                  className="relative aspect-[4/3] cursor-pointer group overflow-hidden"
                  onClick={onOpenEnquirePopup}
                  role="button"
                  aria-label={`View ${plan.config} floor plan — enquiry required`}
                >
                  <Image
                    src={plan.image}
                    alt={plan.alt}
                    fill
                    className="object-cover scale-110 blur-sm transition-all duration-300 group-hover:blur-md"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors duration-300">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                      Click to View Floor Plan
                    </p>
                  </div>
                </div>

                {/* Card info */}
                <div className="flex flex-col items-center text-center p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-1">{plan.config}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{plan.area}</p>
                  <p className="text-3xl font-bold text-custom-gold mb-6 flex items-center justify-center">
                    <IndianRupee className="h-7 w-7 mr-0.5 shrink-0" />
                    {plan.price}
                  </p>
                  <Button
                    onClick={onOpenEnquirePopup}
                    className="w-full bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-lg px-6 py-3 text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 mt-auto"
                  >
                    Complete Costing Details
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8">
          * Prices are indicative and subject to change. T&C apply.
        </p>
      </div>
    </section>
  );
}
