import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';
import { SelectedWorks } from './components/SelectedWorks';
import { WhatCanIDo } from './components/WhatCanIDo';
import { CtaBanner } from './components/CtaBanner';
import { ProfessionalFooter } from './components/ProfessionalFooter';
import { ContactModal } from './components/ContactModal';
import { ContactInfo, SocialLink } from './types';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  SlidersHorizontal,
  Layers,
  Briefcase,
  Wrench,
  Mail
} from 'lucide-react';

export default function App() {
  const [showCtaBanner, setShowCtaBanner] = useState(true);
  const [footerStyle, setFooterStyle] = useState<'full' | 'compact'>('full');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const contactData: ContactInfo = {
    email: 'zohaibraza510@gmail.com',
    phone: '+92 315 2205086',
    whatsapp: '+92 315 2205086',
    location: 'Remote Specialist & USA Collaboration',
    timezone: 'UTC+5 (Overlapping US/EU Hours)',
    status: 'Available for Select Collaborations'
  };

  const socialLinks: SocialLink[] = [
    { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/zohaib-raza-77453b296', handle: 'zohaib-raza', iconName: 'Linkedin' },
    { id: 'github', name: 'GitHub', url: 'https://github.com/zohaib-dev', handle: 'zohaib-dev', iconName: 'Github' },
    { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/923152205086', handle: '+92 315 2205086', iconName: 'MessageCircle' },
    { id: 'twitter', name: 'Twitter / X', url: 'https://twitter.com', handle: '@zohaib_web', iconName: 'Twitter' },
    { id: 'portfolio', name: 'Live Web Portfolio', url: 'https://zohaibraza.rf.gd/explore-projects-page', handle: 'portfolio', iconName: 'Globe' }
  ];

  const handleCopyCodeSnippet = () => {
    const snippet = `<ProfessionalFooter 
  contactInfo={{
    email: "${contactData.email}",
    phone: "${contactData.phone}",
    whatsapp: "${contactData.whatsapp}",
    location: "${contactData.location}",
    timezone: "${contactData.timezone}",
    status: "${contactData.status}"
  }}
  socialLinks={socialLinks}
  brandName="Zohaib Raza"
  brandTagline="Websites with a point of view. High-converting CMS, Divi & custom web architecture."
/>`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Navigation & Control Bar */}
      <header className="sticky top-0 z-40 bg-[#070B12]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Brand and Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-sm shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:scale-105 transition-transform">
              ZR
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                Zohaib Raza
                <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/50 rounded-full">
                  WordPress & Divi
                </span>
              </span>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Web Designer & CMS Specialist
              </p>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#works" className="hover:text-cyan-400 transition-colors">
              Selected Works
            </a>
            <a href="#approach" className="hover:text-cyan-400 transition-colors">
              The Approach
            </a>
            <a href="#what-can-i-do" className="hover:text-cyan-400 transition-colors">
              What Can I Do
            </a>
            <a href="#process" className="hover:text-cyan-400 transition-colors">
              How I Work
            </a>
            <a href="#main-footer-section" className="hover:text-cyan-400 transition-colors">
              Contact & Links
            </a>
          </nav>

          {/* Right Interactive Controls */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            {/* Quick Contact button */}
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>

            {/* Toggle Footer Density */}
            <button
              type="button"
              onClick={() => setFooterStyle(footerStyle === 'full' ? 'compact' : 'full')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-all"
              title="Toggle footer design format"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{footerStyle === 'full' ? 'Footer: Full' : 'Footer: Compact'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />

        {/* 2. The Approach Section */}
        <ApproachSection />

        {/* 3. Selected Works Section */}
        <SelectedWorks />

        {/* 4. What Can I Do & How I Work Section */}
        <WhatCanIDo />

        {/* 5. Pre-Footer Call to Action Banner */}
        {showCtaBanner && (
          <CtaBanner 
            email={contactData.email} 
            onOpenContactModal={() => setIsContactModalOpen(true)} 
          />
        )}
      </main>

      {/* 6. THE PROFESSIONAL FOOTER SECTION */}
      {footerStyle === 'full' ? (
        <ProfessionalFooter
          contactInfo={contactData}
          socialLinks={socialLinks}
          brandName="Zohaib Raza"
          brandTagline="Web Designer & CMS Specialist with 3+ years of experience working remotely with USA-based digital agencies. Specializing in WordPress, Divi, responsive web design, and content architecture."
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      ) : (
        /* Compact Minimalist Variant for ultra-focused views */
        <footer className="relative bg-[#060910] text-slate-400 border-t border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-xs">
                ZR
              </div>
              <div>
                <span className="text-sm font-bold text-white">Zohaib Raza</span>
                <span className="block text-[11px] text-cyan-400">CMS & Web Architecture</span>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <a href={`mailto:${contactData.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                {contactData.email}
              </a>
              <span className="text-slate-700">•</span>
              <a href={`tel:${contactData.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                {contactData.phone}
              </a>
            </div>

            {/* Socials & Copyright */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {socialLinks.slice(0, 3).map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
              <span className="text-xs text-slate-500">
                © {new Date().getFullYear()} Zohaib Raza.
              </span>
            </div>
          </div>
        </footer>
      )}

      {/* Interactive Contact Inquiry Dialog */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        email={contactData.email}
      />
    </div>
  );
}

