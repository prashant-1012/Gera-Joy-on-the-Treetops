import type {Metadata} from 'next';
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased animate-in fade-in duration-500 ease-out">
          <UtmCapture />
          {children}
          <WhatsAppButton />
          <Toaster />
      </body>
    </html>
  );
}
