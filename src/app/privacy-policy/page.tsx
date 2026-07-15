
import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/privacy-policy/privacy-policy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy - Godrej Kukatpally',
  description: 'Privacy Policy for Godrej Kukatpally by Prop Mission Private Limited.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
