import React from 'react';
import { Monitor, Smartphone, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';

interface ProjectMockupProps {
  type: 'electrical' | 'dispensary' | 'commercial';
  title: string;
}

export const ProjectMockupIllustration: React.FC<ProjectMockupProps> = ({ type, title }) => {
  const getBadgeInfo = () => {
    switch (type) {
      case 'dispensary':
        return {
          tag: 'E-Commerce & Age Gate',
          icon: <Shield className="w-3 h-3 text-emerald-400" />,
          color: 'from-emerald-950/40 via-[#0B1A24] to-[#0A121E]',
          accent: 'emerald',
          code: 'Divi 5 • Woo Checkout'
        };
      case 'commercial':
        return {
          tag: 'Multi-Location Commercial',
          icon: <Sparkles className="w-3 h-3 text-amber-400" />,
          color: 'from-blue-950/40 via-[#0B1528] to-[#080E1B]',
          accent: 'cyan',
          code: 'WordPress • Lead Funnel'
        };
      case 'electrical':
      default:
        return {
          tag: 'Residential & Winery CMS',
          icon: <Zap className="w-3 h-3 text-cyan-400" />,
          color: 'from-cyan-950/40 via-[#0B1626] to-[#070D18]',
          accent: 'cyan',
          code: 'Custom Divi • Booking Engine'
        };
    }
  };

  const info = getBadgeInfo();

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] rounded-2xl bg-gradient-to-tr from-slate-950 via-[#0C1424] to-[#121E36] border border-slate-800/80 p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl group">
      {/* Ambient background glow and soft cyan/blue circles matching reference */}
      <div 
        aria-hidden="true" 
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-20 -left-12 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" 
      />

      {/* Top Bar of the Mockup Card */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 pl-2">
            preview.divi-live.net/{title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-medium text-slate-300">
          {info.icon}
          <span>{info.tag}</span>
        </div>
      </div>

      {/* Main Isometric & UI Device Canvas */}
      <div className="relative z-10 my-4 flex-1 flex items-center justify-center">
        {/* Stylized Laptop / Display Screen Vector */}
        <div className="w-full max-w-[440px] transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          
          {/* Screen Body */}
          <div className="relative bg-slate-900/95 rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden p-3.5 sm:p-4">
            
            {/* Screen Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold">
                  {title.charAt(0)}
                </div>
                <div className="h-2 w-20 bg-slate-700 rounded"></div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-8 bg-slate-800 rounded"></div>
                <div className="h-1.5 w-8 bg-slate-800 rounded"></div>
                <div className="h-1.5 w-12 bg-cyan-500/40 rounded"></div>
              </div>
            </div>

            {/* Screen Content Hero Section */}
            <div className="grid grid-cols-12 gap-3 mb-3">
              {/* Text wireframe */}
              <div className="col-span-7 space-y-2">
                <div className="h-4 w-3/4 bg-white/90 rounded font-semibold text-[10px] text-slate-900 flex items-center px-1.5 truncate">
                  {title}
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-slate-700/80 rounded"></div>
                  <div className="h-1.5 w-5/6 bg-slate-700/60 rounded"></div>
                  <div className="h-1.5 w-4/6 bg-slate-700/50 rounded"></div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="inline-block h-4 px-2 rounded bg-cyan-500 text-[9px] font-bold text-slate-950 leading-4">
                    Book Service
                  </span>
                  <span className="inline-block h-4 px-2 rounded border border-slate-700 text-[9px] text-slate-400 leading-4">
                    Learn More
                  </span>
                </div>
              </div>

              {/* Graphic wireframe block */}
              <div className="col-span-5 bg-gradient-to-br from-cyan-950/60 to-blue-950/80 rounded-lg border border-cyan-500/30 p-2 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[8px] text-cyan-300 font-mono">
                  <span>99.8% Speed</span>
                  <Zap className="w-2.5 h-2.5 text-cyan-400" />
                </div>
                <div className="py-2 flex items-center justify-center">
                  <div className="relative w-12 h-12 rounded-full border border-cyan-400/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse"></div>
                    <CheckCircle className="w-4 h-4 text-cyan-300 absolute" />
                  </div>
                </div>
                <div className="text-[7px] text-center text-slate-400 font-mono">
                  DIVI 5 OPTIMIZED
                </div>
              </div>
            </div>

            {/* Screen 3-card mini grid */}
            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80">
              <div className="p-1.5 rounded bg-slate-950/70 border border-slate-800 text-[8px] text-slate-400">
                <span className="block text-white font-semibold text-[9px]">Responsive</span>
                <span>Mobile First</span>
              </div>
              <div className="p-1.5 rounded bg-slate-950/70 border border-slate-800 text-[8px] text-slate-400">
                <span className="block text-white font-semibold text-[9px]">Fast CMS</span>
                <span>Zero Bloat</span>
              </div>
              <div className="p-1.5 rounded bg-slate-950/70 border border-slate-800 text-[8px] text-slate-400">
                <span className="block text-cyan-300 font-semibold text-[9px]">SEO Ready</span>
                <span>Structured Data</span>
              </div>
            </div>

          </div>

          {/* Laptop Base Stand */}
          <div className="relative mx-auto w-3/4 h-2.5 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-b"></div>
          </div>
          <div className="mx-auto w-5/6 h-1 bg-cyan-500/20 blur-sm"></div>

        </div>

        {/* Floating Mobile Preview Companion Badge */}
        <div className="absolute -bottom-1 -right-1 sm:right-2 sm:bottom-2 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 rounded-xl p-2.5 shadow-xl flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Smartphone className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-bold text-white">Mobile 100%</span>
            <span className="block text-[9px] text-emerald-400 flex items-center gap-0.5">
              <CheckCircle className="w-2.5 h-2.5" /> Divi Touch Ready
            </span>
          </div>
        </div>

      </div>

      {/* Bottom info tags */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
        <span className="font-mono text-cyan-400/90">{info.code}</span>
        <span className="text-[10px] text-slate-500">Live Client Build</span>
      </div>
    </div>
  );
};
