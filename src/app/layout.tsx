import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import { UtmCapture } from '@/components/common/utm-capture';

export const metadata: Metadata = {
  title: "Gera's Joy on the Treetops, Hinjewadi Pune | Premium 2 & 3 BHK Homes",
  description: "Gera's Joy on the Treetops at Hinjewadi, Pune. Premium 2 & 3 BHK apartments and duplexes from ₹79.90 Lacs*. On-site electric go-kart track, 9 celebrity-led academies, 35,000+ Sq.Ft. clubhouse, near upcoming Metro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
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
