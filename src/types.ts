export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  timezone: string;
  status: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconName: 'Linkedin' | 'Github' | 'Twitter' | 'MessageCircle' | 'Globe';
}

export interface NavColumn {
  title: string;
  links: {
    label: string;
    href: string;
    badge?: string;
    isExternal?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  role: string;
  platform: string;
  scope: string;
  category: string;
  metrics?: string;
  featuredVisualType: 'electrical' | 'dispensary' | 'commercial';
  deliverables?: string[];
  link?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables?: string[];
  duration?: string;
}

export interface ServiceCapability {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

