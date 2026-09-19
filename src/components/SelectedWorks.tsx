import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectMockupIllustration } from './ProjectMockupIllustration';
import { ProjectModal } from './ProjectModal';

export const selectedProjectsData: ProjectItem[] = [
  {
    id: 'jj-electrical',
    title: 'J&J Electrical',
    subtitle: 'Residential, Commercial & Winery Electrical Services',
    industry: 'Electrical Services',
    role: 'Web Designer / CMS Specialist',
    platform: 'WordPress + Divi 5',
    scope: 'Complete website design, content hierarchy, service booking page structure, mobile-first responsive implementation, and ongoing CMS updates.',
    category: 'Electrical Services',
    metrics: '+180% Lead Inquiries',
    featuredVisualType: 'electrical',
    link: 'https://otmd1.com/jj-electric/',
    deliverables: [
      'Custom Divi 5 service catalog & quote request funnel',
      'High-speed mobile optimization (<1.2s LCP load)',
      'Winery & commercial electrical project showcase gallery',
      'Local SEO geo-targeting and Google Business schema'
    ]
  },
  {
    id: 'primo-ak',
    title: 'Primo AK',
    subtitle: 'Cannabis Dispensary & Retail Catalog',
    industry: 'Cannabis Dispensary',
    role: 'Web Designer / CMS Specialist',
    platform: 'WordPress + Divi 5',
    scope: 'Website architecture, legal age verification gate, interactive live product menu integration, location directional maps, and responsive mobile styling.',
    category: 'Cannabis Dispensary',
    metrics: '99.9% Compliance & 45k Monthly Visitors',
    featuredVisualType: 'dispensary',
    link: 'https://mbmweb1.com/primo-ak',
    deliverables: [
      'Age gate verification module compliant with regional state law',
      'Live dynamic dispensary inventory sync via API',
      'Location finder with Google Maps directions integration',
      'Touch-friendly mobile navigation for rapid strain lookup'
    ]
  },
  {
    id: 'bright-right-electric',
    title: 'Bright Right Electric',
    subtitle: 'Electrical Services Homes & Businesses',
    industry: 'Electrical Services',
    role: 'Web Designer / CMS Specialist',
    platform: 'WordPress + Divi 5',
    scope: 'Website design, clear commercial & residential service breakdown, responsive page structure, rapid dispatch contact forms, and client content updates.',
    category: 'Electrical Services',
    metrics: '2.4x Mobile Conversion Rate',
    featuredVisualType: 'commercial',
    link: 'https://brightright.net/',
    deliverables: [
      'Emergency 24/7 electrician callout banner with direct click-to-dial',
      'Commercial client trust badges and verified review integration',
      'Lightweight Divi 5 code structuring to eliminate layout shift',
      'Cross-browser QA tested on iOS Safari, Android Chrome, and Desktop'
    ]
  }
];

export const SelectedWorks: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Electrical Services', 'Cannabis Dispensary'];

  const filteredProjects = activeFilter === 'All' 
    ? selectedProjectsData 
    : selectedProjectsData.filter(p => p.category === activeFilter);

  return (
    <section 
      id="works" 
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" 
      />

      {/* Header Row inspired directly by reference */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6 mb-12">
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafted with <span className="text-cyan-400">Precision.</span>
          </h2>
        </div>

        {/* Right subtext and filter */}
        <div className="flex flex-col sm:items-end gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Showcasing work / Divi Projects
          </span>
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Project Cards List */}
      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {filteredProjects.map((project, index) => {
          // Even index: Image Left, Text Right; Odd index: Text Left, Image Right (matching reference)
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                
                {/* Visual Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                    aria-label={`View ${project.title} live website`}
                  >
                    <ProjectMockupIllustration
                      type={project.featuredVisualType}
                      title={project.title}
                    />
                  </a>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5`}>
                  
                  <div>
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Subtitle in cyan */}
                    <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1 leading-snug">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Metadata Specification Table / List */}
                  <div className="space-y-2.5 text-xs border-y border-slate-800/90 py-4 text-slate-300">
                    <div className="flex items-start">
                      <span className="w-20 text-slate-400 font-mono shrink-0">Industry:</span>
                      <span className="text-slate-200 font-medium">{project.industry}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-20 text-slate-400 font-mono shrink-0">Role:</span>
                      <span className="text-slate-200 font-medium">{project.role}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-20 text-slate-400 font-mono shrink-0">Platform:</span>
                      <span className="text-cyan-300 font-mono font-medium">{project.platform}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-20 text-slate-400 font-mono shrink-0">Scope:</span>
                      <span className="text-slate-300 leading-relaxed">{project.scope}</span>
                    </div>
                  </div>

                  {/* Metric / highlight badge */}
                  {project.metrics && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Action button */}
                  <div>
                    <a
                      id={`view-project-btn-${project.id}`}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 text-white hover:text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] active:scale-[0.98]"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
