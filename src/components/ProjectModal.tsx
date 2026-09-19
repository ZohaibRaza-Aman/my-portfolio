import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass, Sparkles, Monitor } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C1322] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {project.industry} Case Study
            </span>
          </div>
          <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-cyan-300 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
          <div>
            <span className="block text-[11px] text-slate-400 uppercase font-mono">Industry</span>
            <span className="text-xs sm:text-sm font-semibold text-white">{project.industry}</span>
          </div>
          <div>
            <span className="block text-[11px] text-slate-400 uppercase font-mono">Role</span>
            <span className="text-xs sm:text-sm font-semibold text-white">{project.role}</span>
          </div>
          <div>
            <span className="block text-[11px] text-slate-400 uppercase font-mono">Platform</span>
            <span className="text-xs sm:text-sm font-semibold text-cyan-400">{project.platform}</span>
          </div>
          <div>
            <span className="block text-[11px] text-slate-400 uppercase font-mono">Impact</span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-400">{project.metrics || '100% Responsive'}</span>
          </div>
        </div>

        {/* Detailed Scope */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              Project Scope & Architecture
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {project.scope}
            </p>
          </div>

          {/* Key Deliverables */}
          {project.deliverables && (
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-cyan-400" />
                Key Deliverables & Implementations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Bottom Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-mono">
            Designed & Built with Divi 5 + WordPress CMS
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-all shadow-md"
              >
                <span>View Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
