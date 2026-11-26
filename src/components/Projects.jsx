import React, { useState } from 'react';
import { ExternalLink, Github, Code2, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Featured Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Production &amp; AI Engineering Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 hover:border-cyan-500/50 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                      darkMode
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                        : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                    }`}
                  >
                    {project.category}
                  </span>
                  <Code2 className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div>
                  <h3 className="font-bold text-lg leading-snug">{project.title}</h3>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">{project.subtitle}</p>
                </div>

                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] font-mono px-2 py-1 rounded-md border ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/50 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </button>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                    darkMode
                      ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`w-full max-w-lg rounded-2xl border p-6 space-y-5 shadow-2xl ${
              darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-cyan-400">
                  {selectedProject.category} Architecture Preview
                </span>
                <h3 className="text-xl font-bold mt-1">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className={`p-1.5 rounded-lg border ${
                  darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedProject.description}
            </p>
            <div className="space-y-2.5">
              {selectedProject.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 flex items-center justify-end gap-3">
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border ${
                  darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                Source Code
              </a>
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Deployment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
