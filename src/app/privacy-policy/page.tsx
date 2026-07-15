
import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/privacy-policy/privacy-policy-content';

export const metadata: Metadata = {
  title: "Privacy Policy - Gera's Joy on the Treetops",
  description: "Privacy Policy for Gera's Joy on the Treetops by Fusion Ace.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
