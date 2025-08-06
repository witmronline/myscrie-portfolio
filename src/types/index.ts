export interface SiteConfig extends HeaderProps {
  title: string;
  siteName: string;
  description: string;
  theme: any;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ScriptsProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteName?: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
