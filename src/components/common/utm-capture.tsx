"use client";

import { useEffect } from 'react';
import { captureUtmParams } from '@/lib/utm';

// Renders nothing — mounted once in the root layout so utm_source/utm_medium/utm_id
// get captured into sessionStorage on the very first page a visitor lands on,
// regardless of which route that is (not just the homepage where the enquiry
// form lives).
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
