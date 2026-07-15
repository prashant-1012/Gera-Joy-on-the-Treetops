import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  href: string;
  iconSize?: number;
}

const iconComponents = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const SocialIcon: React.FC<SocialIconProps> = ({ platform, href, iconSize = 20 }) => {
  const IconComponent = iconComponents[platform];
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${platform} page`}>
      <IconComponent size={iconSize} className="text-foreground hover:text-accent transition-colors" />
    </Link>
  );
};

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ className, iconSize }) => {
  const socialLinks = [
    { platform: 'facebook', href: 'https://facebook.com' },
    { platform: 'twitter', href: 'https://twitter.com' },
    { platform: 'instagram', href: 'https://instagram.com' },
    { platform: 'linkedin', href: 'https://linkedin.com' },
    { platform: 'youtube', href: 'https://youtube.com' },
  ] as SocialIconProps[];

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {socialLinks.map((link) => (
        <SocialIcon key={link.platform} {...link} iconSize={iconSize} />
      ))}
    </div>
  );
};
