
import type { Metadata } from 'next';
import ContactInfoContent from '@/components/contact-info/contact-info-content';

export const metadata: Metadata = {
  title: "Contact Us - Gera's Joy on the Treetops",
  description: "Contact Fusion Ace, authorized channel partner for Gera's Joy on the Treetops.",
};

export default function ContactInfoPage() {
  return <ContactInfoContent />;
}
