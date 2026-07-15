import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/common/whatsapp-button';

export const metadata: Metadata = {
  title: 'Godrej Kukatpally, Hyderabad | Premium 3 & 4 BHK Homes',
  description: 'Brooklyn-Inspired Sky Residences in Kukatpally, Hyderabad. Premium 3 & 4 BHK homes from ₹2.11 Cr*. Twin 45-storey towers, 72,000 Sq.Ft. clubhouse, near Metro & HITEC City.',
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
          {children}
          <WhatsAppButton />
          <Toaster />
      </body>
    </html>
  );
}
