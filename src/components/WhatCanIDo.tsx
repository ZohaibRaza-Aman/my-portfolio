import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Layers, 
  Code, 
  Layout, 
  RefreshCw, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { ProcessStep, ServiceCapability } from '../types';

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'I start by understanding your goals, content, audience, and project requirements.',
    deliverables: ['Discovery audit', 'Target audience analysis', 'Content requirements checklist'],
    duration: 'Phase 1'
  },
  {
    number: '02',
    title: 'Structure',
    description: 'I define the page hierarchy, content structure, and user flow to create a clear foundation.',
    deliverables: ['Information architecture', 'Sitemap definition', 'Low-fidelity wireframe blueprints'],
    duration: 'Phase 2'
  },
  {
    number: '03',
    title: 'Design',
    description: 'I shape the visual direction, typography, spacing, and interface details around your brand and goals.',
    deliverables: ['High-fidelity responsive UI', 'Typography & color system', 'Component design kit'],
    duration: 'Phase 3'
  },
  {
    number: '04',
    title: 'Build',
    description: 'I bring the design to life in WordPress and Divi with clean, responsive, and manageable layouts.',
    deliverables: ['Clean Divi 5 / WordPress development', 'Fast asset optimization', 'Form & API integration'],
    duration: 'Phase 4'
  },
  {
    number: '05',
    title: 'Refine',
    description: 'I carefully refine the details across desktop, tablet, and mobile to ensure everything feels polished and consistent.',
    deliverables: ['Cross-browser testing (Chrome, Safari, Firefox)', 'Touch-screen UX tuning', 'Core Web Vitals audit'],
    duration: 'Phase 5'
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'After final quality checks, I help prepare the site for launch and provide ongoing updates and support when needed.',
    deliverables: ['Domain & SSL live switch', 'CMS training walkthrough', 'Ongoing maintenance & updates'],
    duration: 'Phase 6'
  }
];

export const capabilitiesData: ServiceCapability[] = [
  {
    number: '01',
    title: 'WordPress & Divi',
    description: 'Custom page builds, responsive layouts, reusable sections and CMS implementation designed for easy client maintenance.',
    skills: ['Divi 5 Builder', 'Custom Post Types', 'Dynamic Templates', 'Lightweight Assets']
  },
  {
    number: '02',
    title: 'UI & Web Design',
    description: 'Clean visual systems, page structure, typography, spacing and responsive interfaces that build trust.',
    skills: ['Design Systems', 'Responsive Grids', 'Typography Hierarchy', 'High-Contrast Dark Themes']
  },
  {
    number: '03',
    title: 'Website Redesigns',
    description: 'Modernizing outdated websites while improving structure, usability, mobile performance, and visual consistency.',
    skills: ['Legacy Migration', 'UX Friction Elimination', 'Conversion Rate Lift', 'SEO URL Preservation']
  },
  {
    number: '04',
    title: 'CMS & Website Maintenance',
    description: 'Content updates, page edits, image management, troubleshooting, security patches, and ongoing improvements.',
    skills: ['Speed Tuning', 'Plugin Compatibility', 'Regular Backups', '24h Turnaround Support']
  }
];

export const WhatCanIDo: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'both' | 'capabilities' | 'process'>('both');

  return (
    <section 
      id="what-can-i-do" 
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Ambient background aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" 
      />

      {/* PART 1: Capabilities / Expertise ("Good work is a conversation") */}
      {(activeTab === 'both' || activeTab === 'capabilities') && (
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Headline Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                <span className="w-5 h-[1.5px] bg-cyan-400"></span>
                <span>EXPERTISE & SERVICES</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Good work is a <br />
                <span className="text-cyan-400">conversation.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                Bring the rough idea, the half-finished brief, or the site that has outgrown you. We’ll find the clear version together.
              </p>

              <div className="pt-3">
                <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                    3+
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Years Agency Experience</span>
                    <span className="text-slate-400 text-[11px]">USA-based remote workflows</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Capabilities List */}
            <div className="lg:col-span-7 space-y-3">
              {capabilitiesData.map((item) => (
                <div
                  key={item.number}
                  id={`capability-${item.number}`}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-cyan-400 pt-0.5">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Capability micro pills */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-3">
                          {item.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-950/80 rounded border border-slate-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* PART 2: The Signature 6-Step Execution Framework ("WHAT CAN I DO / HOW I WORK") */}
      {(activeTab === 'both' || activeTab === 'process') && (
        <div id="process" className="relative border-t border-slate-800/80 pt-16">
          
          {/* Section Header matching the reference */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
              <span className="w-5 h-[1.5px] bg-cyan-400"></span>
              <span>WHAT CAN I DO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              How I <span className="text-cyan-400">Work.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              A transparent, structured 6-step journey from initial brief to stable production launch. Click any phase for deliverables.
            </p>
          </div>

          {/* 6-Card Grid replicating the reference image's clean architectural styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {processStepsData.map((step) => {
              const isSelected = selectedStep === step.number;

              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  onClick={() => setSelectedStep(isSelected ? null : step.number)}
                  className={`cursor-pointer group relative p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-[#0E1729] border-cyan-500/50 shadow-lg shadow-cyan-950/30' 
                      : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Step Number + Title */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-mono font-bold text-cyan-400">
                          {step.number}
                        </span>
                        <span className="text-slate-600">—</span>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                        {step.duration}
                      </span>
                    </div>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List (collapsible / expanded) */}
                  <div className="pt-3 border-t border-slate-800/60">
                    <div className="text-[11px] font-semibold text-slate-300 mb-2 flex items-center justify-between">
                      <span className="text-cyan-400/90 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" /> Key Deliverables:
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {isSelected ? 'Click to minimize' : 'Click to inspect'}
                      </span>
                    </div>
                    
                    <ul className="space-y-1.5">
                      {step.deliverables?.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom workflow guarantee banner */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Every project includes clean documentation, responsive breakpoints test report, and post-launch handover.
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium whitespace-nowrap"
            >
              <span>Have a project in mind?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

    </section>
  );
};
