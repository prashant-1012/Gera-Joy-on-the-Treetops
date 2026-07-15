
import type { Metadata } from 'next';
import AboutUsContent from '@/components/about-us/about-us-content';

export const metadata: Metadata = {
  title: "About Us - Gera's Joy on the Treetops",
  description: "Learn more about Fusion Ace, authorized channel partner for Gera's Joy on the Treetops.",
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
