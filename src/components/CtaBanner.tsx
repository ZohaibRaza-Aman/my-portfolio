import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

interface CtaBannerProps {
  email: string;
  onOpenContactModal?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ email, onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div 
        id="cta-banner-container"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0E1729] to-[#080D18] border border-slate-800/90 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-cyan-950/20"
      >
        {/* Subtle decorative curved arc in background inspired by reference */}
        <div 
          aria-hidden="true" 
          className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full border border-cyan-500/15 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute right-12 -bottom-28 w-[320px] h-[320px] rounded-full border border-blue-500/10 pointer-events-none" 
        />

        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-4">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            <span>HAVE A GOOD IDEA?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let’s give it a <span className="text-cyan-400">proper home.</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Tell me what you’re building, what feels stuck, or what you wish your current digital presence could do. I’ll get back to you with a thoughtful next step.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary Email / Contact Button */}
            <a
              id="cta-email-primary-btn"
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>

            {/* Copy Email Button */}
            <button
              id="cta-copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 active:scale-[0.98]"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Quick Consultation trigger */}
            {onOpenContactModal && (
              <button
                id="cta-open-consultation-btn"
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-all duration-200"
              >
                <span>Send Quick Message</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
