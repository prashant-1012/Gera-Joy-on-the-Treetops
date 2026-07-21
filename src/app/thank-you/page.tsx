
import type { Metadata } from 'next';
import ThankYouContent from '@/components/thank-you/thank-you-content';

export const metadata: Metadata = {
  title: "Thank You - Gera's Joy on the Treetops",
  description: "Thank you for your enquiry about Gera's Joy on the Treetops.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
