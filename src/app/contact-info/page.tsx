
import type { Metadata } from 'next';
import ContactInfoContent from '@/components/contact-info/contact-info-content';

export const metadata: Metadata = {
  title: 'Contact Us - Godrej Kukatpally',
  description: 'Contact Prop Mission Private Limited, authorized channel partner for Godrej Kukatpally.',
};

export default function ContactInfoPage() {
  return <ContactInfoContent />;
}
