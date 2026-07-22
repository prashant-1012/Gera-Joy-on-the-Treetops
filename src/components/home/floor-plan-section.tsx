
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lock, IndianRupee } from 'lucide-react';

const floorPlans = [
  {
    config: '2 BHK',
    area: '691–868 Sq. Ft.',
    price: '79.90 Lacs Onwards*',
    image: '/images/floorplan-2bhk.webp',
    alt: "2 BHK floor plan — Gera's Joy on the Treetops",
  },
  {
    config: '3 BHK',
    area: '1011–1237 Sq. Ft.',
    price: '1.19 Cr Onwards*',
    image: '/images/floorplan-3bhk.webp',
    alt: "3 BHK floor plan — Gera's Joy on the Treetops",
  },
  {
    config: '2 BHK Duplex',
    area: '898 Sq. Ft.',
    price: '1.07 Cr All Inc.*',
    image: '/images/floorplan-2bhk-duplex.webp',
    alt: "2 BHK Duplex floor plan — Gera's Joy on the Treetops",
  },
  {
    config: '3 BHK Duplex',
    area: '1218 Sq. Ft.',
    price: '1.54 Cr All Inc.*',
    image: '/images/floorplan-3bhk-duplex.webp',
    alt: "3 BHK Duplex floor plan — Gera's Joy on the Treetops",
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
          Gera's Joy On The Treetops Floor Plan & Pricing
        </h2>
        <div className="h-1 w-20 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {floorPlans.map((plan, index) => (
            <div
              key={plan.config}
              className="h-full animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">

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
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
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
                  <p className="text-xl sm:text-2xl font-bold text-custom-gold mb-6 flex items-center justify-center text-center">
                    <IndianRupee className="h-5 w-5 sm:h-6 sm:w-6 mr-0.5 shrink-0" />
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
