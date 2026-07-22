
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  '10.7-acre Premium Township',
  'Near Hinjewadi IT Park & Upcoming Metro',
  '35,000+ Sq. Ft. Clubhouse',
  '30+ Lifestyle Amenities Incl. Go-karting & Bowling',
  'Half Olympic-sized Temperature-controlled Pool',
  '9 Celebrity-led Learning Academies',
  'Green-hill Views And Peaceful Surroundings',
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
            Gera's Joy On The Treetops, Hinjewadi
          </h2>
          <div className="mt-3 h-1 w-20 bg-custom-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-start">

          {/* Left: description + highlights + CTA */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-10 duration-700 ease-out">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Finding a home that balances your work commute with your family's happiness isn't easy. That is why <span className="font-semibold text-foreground">Gera's Joy on the Treetops</span> in Hinjewadi is designed differently. Spread across 10.7 acres, this isn't just another residential complex. It is a community built around your children's growth and your peace of mind. Instead of spending hours driving your kids to after-school activities, everything they need is right outside your front door. The project features 9 celebrity-led academies right on-site, offering professional training in sports, arts, and music. Combined with a massive 35,000 sq. ft. clubhouse, a private electric go-kart track, and an all-season heated swimming pool, your family will never run out of things to do. Situated in Hinjewadi, just 4 minutes from the upcoming metro station, you get the perfect mix of a quick commute to IT majors and quiet, peaceful views of the surrounding green hills.
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
              Book A Visit
            </Button>
          </div>

          {/* Right: building image */}
          <div className="relative order-first md:order-last mt-0 md:mt-4 animate-in fade-in slide-in-from-right-10 duration-700 ease-out delay-150">
            <div className="relative rounded-l-xl rounded-r-[60px] overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/overview-building.webp"
                alt="Gera's Joy on the Treetops — ground-level render with go-kart track, Artist's Impression"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
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
