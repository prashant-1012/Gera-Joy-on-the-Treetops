
import type { Metadata } from 'next';
import TermsOfUseContent from '@/components/terms-of-use/terms-of-use-content';

export const metadata: Metadata = {
  title: "Terms & Conditions - Gera's Joy on the Treetops",
  description: "Terms and Conditions for Gera's Joy on the Treetops by Fusion Ace.",
};

export default function TermsOfUsePage() {
  return <TermsOfUseContent />;
}
