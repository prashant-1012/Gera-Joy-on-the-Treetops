
"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Headphones, Car, IndianRupee, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { saveEnquiry, type SaveEnquiryInput } from '@/ai/flows/save-enquiry-flow';
import { useToast } from "@/hooks/use-toast";

const countryCodes = [
  { code: '+91', label: '🇮🇳 +91', country: 'India' },
  { code: '+1',  label: '🇺🇸 +1',  country: 'USA' },
  { code: '+44', label: '🇬🇧 +44', country: 'UK' },
  { code: '+971',label: '🇦🇪 +971',country: 'UAE' },
  { code: '+65', label: '🇸🇬 +65', country: 'Singapore' },
  { code: '+61', label: '🇦🇺 +61', country: 'Australia' },
  { code: '+60', label: '🇲🇾 +60', country: 'Malaysia' },
  { code: '+966',label: '🇸🇦 +966',country: 'Saudi Arabia' },
  { code: '+974',label: '🇶🇦 +974',country: 'Qatar' },
];

const configurations = [
  { value: '3bhk-premium', label: '3 BHK Premium - 2.11 CR*' },
  { value: '3bhk-luxe',    label: '3 BHK Luxe - 2.75 CR*' },
  { value: '4bhk-maid',   label: '4 BHK + Maid - 4.40 CR*' },
];

interface EnquireNowPopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function EnquireNowPopup({ isOpen, onOpenChange }: EnquireNowPopupProps) {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [configuration, setConfiguration] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const resetForm = () => {
    setName('');
    setCountryCode('+91');
    setPhoneNumber('');
    setEmail('');
    setConfiguration('');
    setConsent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setIsSubmitting(true);

    const enquiryData: SaveEnquiryInput = {
      name,
      email,
      phoneNumber: `${countryCode} ${phoneNumber}`,
      submissionTimestamp: new Date().toISOString(),
    };

    try {
      const result = await saveEnquiry(enquiryData);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        resetForm();
        onOpenChange(false);
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Could not submit your enquiry. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(openState) => {
      if (isSubmitting && !openState) return;
      onOpenChange(openState);
    }}>
      <DialogContent
        className="max-w-[700px] w-[90vw] p-0 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => {
          if (isSubmitting) e.preventDefault();
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Pane */}
          <div className="w-full md:w-[220px] bg-secondary/40 p-3 md:p-8 flex flex-col justify-center items-center text-center order-2 md:order-1">
            <h3 className="text-lg font-semibold text-foreground mb-1 mt-1 md:mt-0">WE PROMISE</h3>
            <div className="w-10 h-0.5 bg-custom-gold mb-2 md:mb-6 mx-auto" />
            <ul className="flex flex-row justify-around w-full md:flex-col md:space-y-6 gap-2">
              <li className="flex flex-col items-center">
                <Headphones className="h-5 w-5 md:h-8 md:w-8 text-custom-gold mb-0.5 md:mb-1.5" />
                <span className="text-xs font-medium text-foreground">INSTANT</span>
                <span className="text-xs font-medium text-foreground">CALL BACK</span>
              </li>
              <li className="flex flex-col items-center">
                <Car className="h-5 w-5 md:h-8 md:w-8 text-custom-gold mb-0.5 md:mb-1.5" />
                <span className="text-xs font-medium text-foreground">FREE</span>
                <span className="text-xs font-medium text-foreground">SITE VISIT</span>
              </li>
              <li className="flex flex-col items-center">
                <IndianRupee className="h-5 w-5 md:h-8 md:w-8 text-custom-gold mb-0.5 md:mb-1.5" />
                <span className="text-xs font-medium text-foreground">UNMATCHED</span>
                <span className="text-xs font-medium text-foreground">PRICE</span>
              </li>
            </ul>
          </div>

          {/* Right Pane — Form */}
          <div className="w-full md:flex-1 p-6 md:p-8 order-1 md:order-2">
            {/* Logo & partner text */}
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Godrej Kukatpally Logo"
                width={180}
                height={62}
                className="object-contain"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Presented by <span className="font-semibold text-foreground">Prop Mission Private Limited</span> – Authorized Channel Partner of Godrej Properties
              </p>
            </div>

            <DialogHeader className="text-center mb-5">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-custom-gold">Enquire Now!</DialogTitle>
              <div className="w-12 h-0.5 bg-custom-gold mx-auto mt-1" />
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-11 text-sm"
                disabled={isSubmitting}
              />

              {/* Phone with country code dropdown */}
              <div className="flex items-center gap-0">
                <Select value={countryCode} onValueChange={setCountryCode} disabled={isSubmitting}>
                  <SelectTrigger className="w-[110px] h-11 rounded-r-none border-r-0 text-sm shrink-0 focus:z-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map(({ code, label, country }) => (
                      <SelectItem key={code + country} value={code}>
                        {label} {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  required
                  minLength={7}
                  maxLength={15}
                  className="h-11 text-sm rounded-l-none flex-1"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 text-sm"
                disabled={isSubmitting}
              />

              {/* Configuration dropdown */}
              <Select value={configuration} onValueChange={setConfiguration} disabled={isSubmitting}>
                <SelectTrigger className="h-11 text-sm w-full">
                  <SelectValue placeholder="Configuration Interested In" />
                </SelectTrigger>
                <SelectContent>
                  {configurations.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Consent checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  disabled={isSubmitting}
                  className="mt-0.5 shrink-0"
                />
                <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the{' '}
                  <a href="/privacy-policy" target="_blank" className="underline text-foreground hover:text-custom-gold">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms-of-use" target="_blank" className="underline text-foreground hover:text-custom-gold">Terms & Conditions</a>
                  {' '}and consent to be contacted by Prop Mission Private Limited via Phone/WhatsApp regarding this property.
                </Label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground h-11 text-sm shadow-md"
                disabled={isSubmitting || !consent}
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>

            {/* Footer trust bar */}
            <div className="mt-5 pt-4 border-t border-border">
              <div className="flex flex-row flex-wrap justify-around text-xs text-foreground gap-2">
                <div className="flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-custom-gold mr-1.5 shrink-0" />
                  <span>Available Units</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-custom-gold mr-1.5 shrink-0" />
                  <span>Payment Plan</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-custom-gold mr-1.5 shrink-0" />
                  <span>Floor Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
