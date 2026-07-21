import type {Metadata} from 'next';
import Script from 'next/script';
import {Alegreya, Alegreya_SC, PT_Sans} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import { UtmCapture } from '@/components/common/utm-capture';

export const metadata: Metadata = {
  title: "Gera's Joy on the Treetops, Hinjewadi Pune | Premium 2 & 3 BHK Homes",
  description: "Gera's Joy on the Treetops at Hinjewadi, Pune. Premium 2 & 3 BHK apartments and duplexes from ₹79.90 Lacs*. On-site electric go-kart track, 9 celebrity-led academies, 35,000+ Sq.Ft. clubhouse, near upcoming Metro.",
};

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-alegreya',
  display: 'swap',
});

const alegreyaSC = Alegreya_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya-sc',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${alegreya.variable} ${alegreyaSC.variable} ${ptSans.variable}`}
    >
      <head>
        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body className="font-body antialiased animate-in fade-in duration-500 ease-out">
          {gtmId && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{display: 'none', visibility: 'hidden'}}
              />
            </noscript>
          )}
          <UtmCapture />
          {children}
          <WhatsAppButton />
          <Toaster />
      </body>
    </html>
  );
}
