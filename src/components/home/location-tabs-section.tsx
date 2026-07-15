
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
      { name: "NH 65", distance: "3 Mins" },
      { name: "Kukatpally Metro Station", distance: "8 Mins" },
      { name: "Outer Ring Road (ORR)", distance: "9 Mins" },
      { name: "Bharatnagar Railway Station", distance: "10 Mins" },
      { name: "Begumpet Railway Station", distance: "14 Mins" },
      { name: "Lingampally Railway Station", distance: "18 Mins" },
      { name: "Inner Ring Road", distance: "22 Mins" },
      { name: "Rajiv Gandhi International Airport", distance: "28 Mins" },
    ],
  },
  {
    title: "Schools & Colleges",
    items: [
      { name: "Geethanjali Model School", distance: "3 Mins" },
      { name: "Samskruti International School", distance: "4 Mins" },
      { name: "Mount Litera Zee School & Kidzee Rainbow Vistas", distance: "4 Mins" },
      { name: "Birla Open Minds Pre School Kukatpally", distance: "4 Mins" },
      { name: "CGR International School", distance: "11 Mins" },
      { name: "Tapasya College Of Commerce & Management", distance: "12 Mins" },
      { name: "Siddhartha Degree And PG College", distance: "15 Mins" },
      { name: "Osmania University", distance: "30 Mins" },
    ],
  },
  {
    title: "Hospitals",
    items: [
      { name: "Sree Manju Hospitals", distance: "4 Mins" },
      { name: "NextGen Hospitals", distance: "7 Mins" },
      { name: "Prathima Hospitals", distance: "10 Mins" },
      { name: "Pace Hospitals", distance: "10 Mins" },
      { name: "Apollo Spectra Hospitals", distance: "13 Mins" },
    ],
  },
  {
    title: "Malls",
    items: [
      { name: "NSL Centrum Mall", distance: "4 Mins" },
      { name: "Nexus Hyderabad Mall", distance: "6 Mins" },
      { name: "LuLu Mall Hyderabad", distance: "9 Mins" },
      { name: "Inorbit Mall", distance: "14 Mins" },
      { name: "Sarath City Capital Mall", distance: "15 Mins" },
    ],
  },
  {
    title: "Business Hubs",
    items: [
      { name: "Mindspace IT Park", distance: "5 Mins" },
      { name: "Hitec City", distance: "5–10 Mins" },
      { name: "Cyber Towers", distance: "6 Mins" },
      { name: "Madhapur IT Hub", distance: "8 Mins" },
      { name: "Tech Mahindra", distance: "8 Mins" },
      { name: "Cognizant", distance: "9 Mins" },
      { name: "Gachibowli", distance: "10 Mins" },
      { name: "Kondapur", distance: "10 Mins" },
      { name: "TCS", distance: "12 Mins" },
      { name: "Wipro", distance: "12 Mins" },
      { name: "Infosys", distance: "14 Mins" },
      { name: "Nanakramguda", distance: "14 Mins" },
      { name: "Financial District", distance: "16 Mins" },
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
          Godrej Kukatpally, Location Advantage
        </h2>
        <div className="h-1 w-20 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-150">

          {/* Left — Map */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-border h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4326!2d78.3990!3d17.4840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d1b4e6e44f%3A0x6dc6c5bde72beee4!2sKukatpally%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Godrej Kukatpally, Hyderabad"
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
