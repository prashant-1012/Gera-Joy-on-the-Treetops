
"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'Godrej Kukatpally — Tower Render' },
  { src: '/images/gallery-2.png', alt: 'Godrej Kukatpally — Aerial View with Pool' },
  { src: '/images/gallery-3.png', alt: 'Godrej Kukatpally — Bedroom Interior' },
  { src: '/images/gallery-4.png', alt: 'Godrej Kukatpally — Living Room' },
  { src: '/images/gallery-5.png', alt: 'Godrej Kukatpally — Clubhouse Interior' },
  { src: '/images/gallery-6.png', alt: 'Godrej Kukatpally — Lounge Interior' },
];

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? 0 : (i + 1) % galleryImages.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, prev, next]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          Godrej Kukatpally Project — Gallery
        </h2>
        <div className="h-1 w-20 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100" />

        {/* Carousel */}
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-150"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((img, index) => (
              <CarouselItem
                key={img.src}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out hover:shadow-2xl transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(index)}
                  role="button"
                  aria-label={`View ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Image counter badge */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1} / {galleryImages.length}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-15px] sm:left-[-20px] md:left-[-25px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-foreground/60 hover:bg-foreground/80 text-background border-none" />
          <CarouselNext className="absolute right-[-15px] sm:right-[-20px] md:right-[-25px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-foreground/60 hover:bg-foreground/80 text-background border-none" />
        </Carousel>

        <p className="text-xs text-muted-foreground text-center mt-6">
          *All images are for representational purposes only.
        </p>
      </div>

      {/* Lightbox */}
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-0 rounded-xl overflow-hidden">
          <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9]">
            {lightboxIndex !== null && (
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            )}

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Caption + counter */}
            <div className="absolute bottom-0 inset-x-0 bg-black/60 py-3 px-4 flex items-center justify-between">
              <p className="text-white text-sm truncate">
                {lightboxIndex !== null && galleryImages[lightboxIndex].alt}
              </p>
              <span className="text-white/70 text-xs shrink-0 ml-4">
                {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 p-3 bg-black/90 overflow-x-auto">
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(index)}
                className={`relative shrink-0 w-16 h-12 rounded overflow-hidden transition-all ${
                  lightboxIndex === index
                    ? 'ring-2 ring-custom-gold opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
