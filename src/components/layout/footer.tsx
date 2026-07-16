
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-10 pb-6 border-t border-primary/20 animate-in fade-in duration-700 ease-out delay-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Gera's Joy on the Treetops Logo"
            width={160}
            height={65}
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-custom-gold mx-auto mb-7" />

        {/* Disclaimer */}
        <div className="mb-6 text-xs text-primary-foreground/75 max-w-3xl mx-auto leading-relaxed">
          <p>
            <span className="font-semibold text-primary-foreground">Disclaimer:</span> This is an informational website owned and managed by{' '}
            <span className="font-semibold text-primary-foreground">Fusion Ace</span>, an authorized marketing partner of an authorized channel partner registered under RERA ID: A51700015804. This is not the official website of the developer. All images, floor plans, and project details are for representational purposes only and may be subject to change. All trademarks and project information belong to their respective owners.
          </p>
        </div>

        {/* RERA Info */}
        <div className="mb-6 text-xs text-primary-foreground/75 font-semibold space-y-1.5">
          <p>RERA No: A51700015804 &nbsp;|&nbsp; Project MahaRERA No. – P52100077635 &amp; PR1261012501648</p>
          <p>
            <span className="text-custom-gold">https://maharera.maharashtra.gov.in</span>
          </p>
        </div>

        {/* RERA QR Codes */}
        <div className="mb-6 flex justify-center">
          <div className="bg-white rounded-md p-2 inline-block">
            <Image
              src="/images/rera-qr-codes.png"
              alt="MahaRERA QR codes for Project MahaRERA No. P52100077635 and PR1261012501648"
              width={259}
              height={136}
              className="object-contain w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="mb-6 text-sm font-semibold flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
          {/* <Link href="/about-us" className="text-primary-foreground/80 hover:text-custom-gold hover:underline transition-colors">
            About Us
          </Link>
          <span className="text-primary-foreground/40 hidden sm:inline">|</span> */}
          <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-custom-gold hover:underline transition-colors">
            Privacy Policy
          </Link>
          <span className="text-primary-foreground/40 hidden sm:inline">|</span>
          <Link href="/terms-of-use" className="text-primary-foreground/80 hover:text-custom-gold hover:underline transition-colors">
            Terms & Conditions
          </Link>
          {/* <span className="text-primary-foreground/40 hidden sm:inline">|</span>
          <Link href="/contact-info" className="text-primary-foreground/80 hover:text-custom-gold hover:underline transition-colors">
            Contact Info
          </Link> */}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-primary-foreground/10 mb-5" />

        {/* Copyright */}
        <div className="text-xs text-primary-foreground/50">
          <p>All Rights Reserved. &copy; 2026 Gera's Joy on the Treetops</p>
        </div>

      </div>
    </footer>
  );
}
