import React from 'react';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            <span>THE APPROACH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Make it useful. <br />
            <span className="text-cyan-400">Make it yours.</span>
          </h2>
        </div>

        {/* Right Column: Narrative & 3 Core Values (Clarity, Character, Care) */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I’m Zohaib Raza, a Web Designer and CMS Specialist based in Pakistan, with <strong className="text-white">3+ years of professional experience</strong> working remotely with USA-based digital agencies.
          </p>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            My work focuses on <strong className="text-cyan-300 font-medium">WordPress, Divi, responsive web design, CMS management, website redesigns, page building</strong> content implementation, and ongoing website improvements.
          </p>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            I care about clean layouts, thoughtful user experiences, responsive details, and websites that are easy to manage after launch.
          </p>

          {/* 3 Columns: 01 / Clarity, 02 / Character, 03 / Care (matching reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 text-xs">
            <div className="space-y-1.5">
              <span className="font-mono text-cyan-400 font-semibold block text-xs">01 / Clarity</span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Every page has a job. Every interaction has a reason.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-cyan-400 font-semibold block text-xs">02 / Character</span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Distinctive visual systems built around your point of view.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-cyan-400 font-semibold block text-xs">03 / Care</span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Clean, maintainable websites that stay useful long after launch.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
