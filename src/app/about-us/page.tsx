
import type { Metadata } from 'next';
import AboutUsContent from '@/components/about-us/about-us-content';

export const metadata: Metadata = {
  title: 'About Us - Godrej Kukatpally',
  description: 'Learn more about Prop Mission Private Limited, authorized channel partner for Godrej Kukatpally.',
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
