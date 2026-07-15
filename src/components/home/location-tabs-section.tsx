
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LocationItem {
  name: string;
  distance: string;
}

interface LocationCategory {
  title: string;
  items: LocationItem[];
}

const locationData: LocationCategory[] = [
  {
    title: "Connectivity",
    items: [
      { name: "Upcoming Metro", distance: "4 Mins" },
      { name: "Megapolis Circle (retail & entertainment)", distance: "5 Mins" },
      { name: "Pune-Mumbai Expressway", distance: "10 Mins" },
      { name: "Pune Railway Station", distance: "45 Mins" },
      { name: "Pune Airport", distance: "50 Mins" },
    ],
  },
  {
    title: "Schools & Colleges",
    items: [
      { name: "Podar Jumbo Kids", distance: "2 Mins" },
      { name: "VIBGYOR High School", distance: "3 Mins" },
      { name: "National Institute of Construction Management And Research (NICMAR)", distance: "3 Mins" },
      { name: "Mitcon Institute of Management", distance: "3 Mins" },
      { name: "GS Moze College of Engineering", distance: "3 Mins" },
      { name: "The Orchid School", distance: "6 Mins" },
      { name: "CM International School", distance: "6 Mins" },
    ],
  },
  {
    title: "Hospitals",
    items: [
      { name: "Manipal Hospital", distance: "3 Mins" },
      { name: "Benecare Mother & Child Super Specialty Hospital", distance: "3 Mins" },
      { name: "Sunshine Multispecialty Hospital", distance: "5 Mins" },
      { name: "Jupiter Hospital", distance: "7 Mins" },
      { name: "Lifeline Hospital", distance: "7 Mins" },
      { name: "Aditya Birla Memorial Hospital", distance: "16 Mins" },
    ],
  },
  {
    title: "Malls",
    items: [
      { name: "D Mart", distance: "2 Mins" },
      { name: "Balewadi High Street", distance: "5 Mins" },
      { name: "Primrose The Mall", distance: "7 Mins" },
      { name: "Phoenix – The Mall Of Millennium: Wakad", distance: "9 Mins" },
      { name: "Xion Mall", distance: "11 Mins" },
      { name: "Westend Mall", distance: "15 Mins" },
    ],
  },
  {
    title: "Business Hubs",
    items: [
      { name: "Rajiv Gandhi Infotech Park Hinjewadi", distance: "10 Mins" },
      { name: "Embassy Quadron Business Park", distance: "10 Mins" },
    ],
  },
];

interface LocationTabsSectionProps {
  onOpenEnquirePopup: () => void;
}

export function LocationTabsSection({ onOpenEnquirePopup }: LocationTabsSectionProps) {
  const [activeTab, setActiveTab] = useState(locationData[0].title);
  const activeCategory = locationData.find((c) => c.title === activeTab)!;

  return (
    <section id="location" className="py-16 sm:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          Gera's Joy On The Treetops Location Advantage
        </h2>
        <div className="h-1 w-20 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-150">

          {/* Left — Map */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-border h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps?q=Hinjewadi,+Pune,+Maharashtra&output=embed"
              className="w-full h-full min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Gera's Joy on the Treetops, Hinjewadi, Pune"
            />
          </div>

          {/* Right — Tabs */}
          <div className="flex flex-col bg-card rounded-xl shadow-xl border border-border overflow-hidden">

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 p-4 border-b border-border bg-secondary/30">
              {locationData.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  className={cn(
                    "px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all",
                    activeTab === category.title
                      ? "bg-custom-gold text-primary-foreground shadow-md scale-105"
                      : "bg-background text-foreground border border-border hover:border-custom-gold hover:text-custom-gold"
                  )}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="flex-1 p-5 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {activeCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2 w-2 bg-custom-gold rounded-full shrink-0" />
                    <span className="text-sm text-foreground">
                      {item.name}
                      <span className="ml-1 text-xs text-muted-foreground font-medium">— {item.distance}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-border text-center">
              <Button
                onClick={onOpenEnquirePopup}
                className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-lg shadow-md px-8 transition-transform hover:scale-105"
              >
                Request Location Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
