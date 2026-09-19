import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background ambient lighting and crescent arc rings matching reference */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 w-[550px] h-[550px] rounded-full border border-cyan-500/10 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-20 right-20 w-[450px] h-[450px] rounded-full border border-blue-600/10 pointer-events-none" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Heading, Bio, Actions, Stats */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            <span>WEB DESIGNER & CMS SPECIALIST / USA REMOTE</span>
          </div>

          {/* Massive Two-Tone Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Websites with <br className="hidden sm:inline" />
            <span className="text-cyan-400">a point of view.</span>
          </h1>

          {/* Narrative description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            I’m <strong className="text-white font-semibold">Zohaib Raza</strong> — a Web Designer & CMS Specialist with 3+ years of experience working remotely with USA-based digital agencies, specializing in WordPress, Divi, responsive design, and website content management.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href="https://zohaibraza.rf.gd/explore-projects-page"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-explore-work-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] active:scale-[0.98]"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              id="hero-have-project-btn"
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all active:scale-[0.98]"
            >
              <span>HAVE A PROJECT?</span>
            </button>
          </div>

          {/* 3-Column Metrics Ribbon (matching the reference footer of hero) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs">
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-black text-white block">3+ Years</span>
              <span className="text-slate-400 text-[11px] block">Professional Experience</span>
            </div>

            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-black text-white block">USA Agency</span>
              <span className="text-slate-400 text-[11px] block">Remote Collaboration</span>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-xl sm:text-2xl font-black text-cyan-400 block">WordPress + Divi</span>
              <span className="text-slate-400 text-[11px] block">CMS & Web Design</span>
            </div>
          </div>

        </div>

        {/* Right Column: Stylized Portrait Frame with Glowing Rings & Badge */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative">
            
            {/* Ambient circular neon halo */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/15 blur-2xl transform scale-110"></div>

            {/* Glowing cyan circular ring container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-cyan-400/80 p-2 shadow-[0_0_40px_rgba(56,189,248,0.25)] bg-[#0A101C]">
              
              {/* Inner ring */}
              <div className="w-full h-full rounded-full border border-cyan-500/40 overflow-hidden bg-gradient-to-b from-slate-950 to-[#060A12] flex items-center justify-center relative">
                
                {/* Original Portrait Photo of Zohaib Raza */}
                <img
                  src="/zohaibraza-2.png"
                  alt="Zohaib Raza - Senior CMS & Divi Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Name and Designation Overlay at the base of the circle */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-3 text-center px-2 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 shadow-lg">
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                    Zohaib Raza
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-cyan-400 font-mono font-medium leading-tight">
                    Senior CMS & Divi Developer
                  </span>
                </div>

              </div>

            </div>

            {/* Floating "Available for Select Collaborations" badge (exact reference detail) */}
            <div className="absolute -top-3 -right-3 sm:right-0 bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 rounded-full px-4 py-2 shadow-xl flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                Available for Select Collaborations ↗
              </span>
            </div>

            {/* Sub-label badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0A111E] border border-slate-800 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-400 shadow-md whitespace-nowrap">
              <span>01 — Web designer / Developer</span>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Down Prompt */}
      <div className="pt-12 text-center">
        <a 
          href="#works" 
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
        >
          <span>— SCROLL TO EXPLORE</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
        </a>
      </div>

    </section>
  );
};
