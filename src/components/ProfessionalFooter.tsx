import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SocialIcon } from './SocialIcon';
import { ContactInfo, SocialLink, NavColumn } from '../types';

interface ProfessionalFooterProps {
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  brandName?: string;
  brandTagline?: string;
  onOpenContactModal?: () => void;
}

const defaultContact: ContactInfo = {
  email: 'zohaibraza510@gmail.com',
  phone: '03152205086',
  whatsapp: '03152205086',
  location: 'San Francisco, CA & Global Remote',
  timezone: 'PST (UTC-8) / Ready for Remote',
  status: 'Available for Select Projects'
};

const defaultSocials: SocialLink[] = [
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/zohaib-raza-77453b296', handle: 'zohaib-raza', iconName: 'Linkedin' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/zohaib-dev', handle: 'zohaib-dev', iconName: 'Github' },
  { id: 'twitter', name: 'X (Twitter)', url: 'https://twitter.com', handle: '@modernbiz', iconName: 'Twitter' },
  { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/923152205086', handle: '03152205086', iconName: 'MessageCircle' },
  { id: 'dribbble', name: 'Dribbble / Portfolio', url: 'https://zohaibraza.rf.gd/explore-projects-page', handle: 'zohaibraza', iconName: 'Globe' }
];

const navColumns: NavColumn[] = [
  {
    title: 'Expertise',
    links: [
      { label: 'Responsive Web Design', href: '#works' },
      { label: 'CMS & Divi Architecture', href: '#works' },
      { label: 'UI/UX Design Systems', href: '#expertise' },
      { label: 'Website Redesigns', href: '#works' },
      { label: 'Performance & SEO QA', href: '#services', badge: 'High Impact' }
    ]
  },
  {
    title: 'Navigation',
    links: [
      { label: 'About & Approach', href: '#approach' },
      { label: 'Selected Works', href: '#works' },
      { label: 'Experience Timeline', href: '#experience' },
      { label: 'Tools & Technologies', href: '#tools' },
      { label: 'Working Process', href: '#process' }
    ]
  },
  {
    title: 'Client Resources',
    links: [
      { label: 'Project Onboarding Guide', href: '#resources' },
      { label: 'Design System Checklist', href: '#resources' },
      { label: 'Schedule Discovery Call', href: '#contact', isExternal: true },
      { label: 'Client Feedback & Reviews', href: '#reviews' }
    ]
  },
  {
    title: 'Legal & Trust',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Engagement', href: '#terms' },
      { label: 'Security & Non-Disclosure', href: '#nda' },
      { label: 'Cookie Preferences', href: '#cookies' }
    ]
  }
];

export const ProfessionalFooter: React.FC<ProfessionalFooterProps> = ({
  contactInfo = defaultContact,
  socialLinks = defaultSocials,
  brandName = 'StudioCraft',
  brandTagline = 'High-impact digital products & websites engineered with intention.',
  onOpenContactModal
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [localTime, setLocalTime] = useState<string>('');

  // Clock for the remote availability badge
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer-section"
      className="relative bg-[#060910] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP TIER: Brand Summary + Direct Contact Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Brand & Availability Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Profile Avatar / Monogram */}
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0 overflow-hidden">
                <div className="w-full h-full rounded-[10px] bg-[#070B12] flex items-center justify-center text-cyan-300 font-black text-sm">
                  ZR
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">{brandName}</span>
                <span className="block text-xs font-medium text-cyan-400 tracking-wide uppercase">Senior CMS & Divi Developer</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {brandTagline}
            </p>

            {/* Real-time Status Card */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400">{contactInfo.status}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Local time: <strong className="text-slate-200">{localTime || '12:00 PM'}</strong></span>
              </div>
            </div>

            {/* Social Media Links Header/Callout */}
            <div className="pt-2">
              <span className="block text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
                Connect on Social Networks
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.id} social={social} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Direct Contact Cards Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 self-start">
            
            {/* Email Card */}
            <div 
              id="footer-email-card"
              className="group relative p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  onClick={(e) => handleCopy(contactInfo.email, e)}
                  aria-label="Copy email address"
                  className="p-1.5 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="block text-xs font-medium text-slate-400 mb-1">Direct Inquiries</span>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors break-all"
              >
                {contactInfo.email}
              </a>
              <span className="mt-2 block text-[11px] text-slate-400">Response within 24 business hours</span>
            </div>

            {/* WhatsApp / Phone Card */}
            <div 
              id="footer-phone-card"
              className="group relative p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  Online
                </span>
              </div>
              <span className="block text-xs font-medium text-slate-400 mb-1">WhatsApp / Call</span>
              <a 
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
                className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors"
              >
                {contactInfo.phone}
              </a>
              <span className="mt-2 block text-[11px] text-slate-400">Direct message or scheduled intro</span>
            </div>

            {/* Location & Remote Availability Card */}
            <div 
              id="footer-location-card"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="block text-xs font-medium text-slate-400 mb-1">Location & Remote Reach</span>
              <p className="text-sm font-semibold text-white">{contactInfo.location}</p>
              <span className="mt-2 block text-[11px] text-slate-400">{contactInfo.timezone}</span>
            </div>

            {/* Newsletter & Updates Card */}
            <div 
              id="footer-newsletter-card"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-medium text-slate-300">Design & Dev Notes</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  Periodic insights on web architecture, performance & UI craft.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="relative mt-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  aria-label="Your email address for design notes"
                  className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-3 py-2 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to design notes"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all active:scale-95"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
              {newsletterSubscribed && (
                <span className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" /> Thanks! You’re on the list.
                </span>
              )}
            </div>

          </div>
        </div>

        {/* MIDDLE TIER: Navigational Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800/80">
          {navColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xs font-semibold tracking-wider text-slate-200 uppercase flex items-center gap-2">
                <span className="w-2 h-[2px] bg-cyan-400"></span>
                <span>{col.title}</span>
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">{link.label}</span>
                      {link.badge && (
                        <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 rounded">
                          {link.badge}
                        </span>
                      )}
                      {link.isExternal && (
                        <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM TIER: Copyright, Security Badge & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Copyright text */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-center sm:text-left">
            <span>© {currentYear} {brandName}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              Built with intention and craft.
            </span>
          </div>

          {/* Center Trust Indicator */}
          <div className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-300 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SSL Encrypted & GDPR Compliant</span>
          </div>

          {/* Back to top button */}
          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
