
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Home, LayoutDashboard, Wifi, MapPin, Images, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinksConfig = [
  { href: '/#overview', label: 'Overview', icon: Home },
  { href: '/#floor-plan', label: 'Floor Plan & Pricing', icon: LayoutDashboard },
  { href: '/#location', label: 'Location', icon: MapPin },
  { href: '/#amenities', label: 'Amenities', icon: Wifi },
  { href: '/#gallery', label: 'Gallery', icon: Images },
];

interface HeaderProps {
  onOpenEnquirePopup: () => void;
}

export function Header({ onOpenEnquirePopup }: HeaderProps) {
  const [activeLink, setActiveLink] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = navLinksConfig.find(
              (l) => l.href.split('#')[1] === entry.target.id
            );
            if (matched) setActiveLink(matched.label);
          }
        });
      },
      { rootMargin: '0px 0px -85% 0px', threshold: 0 }
    );

    navLinksConfig.forEach(({ href }) => {
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // When scrolled to the very bottom, keep the last nav item active
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 60) {
        setActiveLink(navLinksConfig[navLinksConfig.length - 1].label);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (label: string) => {
    setActiveLink(label);
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 animate-in fade-in duration-300 ease-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => handleNavLinkClick('Overview')}>
            <Image
              src="/images/logo.png"
              alt="Gera's Joy on the Treetops Logo"
              width={109}
              height={44}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
            {navLinksConfig.map((linkInfo) => {
              const IconComponent = linkInfo.icon;
              const isActive = activeLink === linkInfo.label;
              return (
                <Link
                  key={linkInfo.label}
                  href={linkInfo.href}
                  onClick={() => handleNavLinkClick(linkInfo.label)}
                  className={cn(
                    "flex items-center space-x-1.5 pb-1 font-medium group whitespace-nowrap transition-transform duration-200 ease-out hover:-translate-y-px",
                    isActive
                      ? "text-custom-gold border-b-2 border-custom-gold"
                      : "text-foreground hover:text-custom-gold hover:border-b-2 hover:border-custom-gold/50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <IconComponent
                    className={cn(
                      "h-4 w-4",
                      isActive ? "text-custom-gold" : "text-foreground group-hover:text-custom-gold"
                    )}
                  />
                  <span className="text-sm">{linkInfo.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Enquire Now Button (Large Screens) */}
          <div className="hidden lg:flex items-center shrink-0 ml-4">
            <Button
              onClick={onOpenEnquirePopup}
              className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-md px-5 py-2 text-sm shadow-md transform transition-transform hover:scale-105"
            >
              Book A Visit
            </Button>
          </div>
          
          {/* Mobile Menu Trigger and Enquire Now Button */}
          <div className="lg:hidden flex items-center space-x-2">
             <Button
                onClick={onOpenEnquirePopup}
                size="sm"
                className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-md px-3 py-1.5 text-xs shadow-md"
              >
                Book A Visit
              </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-0">
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle className="text-lg font-semibold text-primary text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 p-4">
                  {navLinksConfig.map((linkInfo) => {
                    const IconComponent = linkInfo.icon;
                    const isActive = activeLink === linkInfo.label;
                    return (
                      <SheetClose asChild key={linkInfo.label}>
                        <Link
                          href={linkInfo.href}
                          onClick={() => handleNavLinkClick(linkInfo.label)}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors",
                            isActive
                              ? "bg-primary/10 text-custom-gold"
                              : "text-foreground hover:bg-secondary/80 hover:text-primary"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <IconComponent className={cn("h-5 w-5", isActive ? "text-custom-gold" : "text-muted-foreground")} />
                          <span>{linkInfo.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
