
"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
interface Amenity {
  id: string;
  name: string;
  imageSrc: string;
}

const amenities: Amenity[] = [
  {
    id: '1',
    name: 'Gym',
    imageSrc: '/images/amenity-gym.png',
  },
  {
    id: '2',
    name: 'Swimming Pool',
    imageSrc: '/images/amenity-pool.png',
  },
  {
    id: '3',
    name: 'Clubhouse',
    imageSrc: '/images/clubhouse.png',
  },
  {
    id: '4',
    name: "Children's Play Area",
    imageSrc: '/images/amenity-play-area.png',
  },
  {
    id: '5',
    name: 'Jogging Track',
    imageSrc: '/images/jogging track.png',
  },
  {
    id: '6',
    name: 'Tennis Court',
    imageSrc: '/images/tennis-track.png',
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500 ease-out">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          Godrej Kukatpally, Hyderabad — Amenities
        </h2>
        <div className="h-1 w-20 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100" />

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-150"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {amenities.map((amenity, index) => (
              <CarouselItem
                key={amenity.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="p-1 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <Card className="overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-2xl">
                    <CardContent className="relative aspect-[4/3] p-0">
                      <Image
                        src={amenity.imageSrc}
                        alt={amenity.name}
                        fill
                        className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                      />
                      {/* Amenity label */}
                      <div className="absolute bottom-3 left-0 bg-background/85 text-foreground px-4 py-2 rounded-tr-xl rounded-br-xl text-sm font-semibold shadow-md">
                        {amenity.name}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-15px] sm:left-[-20px] md:left-[-25px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-foreground/60 hover:bg-foreground/80 text-background border-none transition-opacity hover:opacity-80" />
          <CarouselNext className="absolute right-[-15px] sm:right-[-20px] md:right-[-25px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-foreground/60 hover:bg-foreground/80 text-background border-none transition-opacity hover:opacity-80" />
        </Carousel>

        <p className="text-center text-muted-foreground font-body text-base sm:text-lg mt-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-300">
          72,000 Sq. Ft. Grand Clubhouse with world-class amenities designed for your comfort and leisure.
        </p>
      </div>
    </section>
  );
}
