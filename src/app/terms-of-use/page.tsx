
import type { Metadata } from 'next';
import TermsOfUseContent from '@/components/terms-of-use/terms-of-use-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Godrej Kukatpally',
  description: 'Terms and Conditions for Godrej Kukatpally by Prop Mission Private Limited.',
};

export default function TermsOfUsePage() {
  return <TermsOfUseContent />;
}
