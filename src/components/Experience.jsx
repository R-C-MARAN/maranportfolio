import React from 'react';
import { Briefcase, Activity, GitBranch, ArrowRight } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Background &amp; Reliability Edge
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            From Operational Triage to Production-Hardened Code
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div
            className={`lg:col-span-7 rounded-2xl border p-6 sm:p-8 space-y-5 ${
              darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{EXPERIENCE.role}</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {EXPERIENCE.domain}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {EXPERIENCE.duration}
              </span>
            </div>

            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {EXPERIENCE.summary}
            </p>

            <ul className="space-y-3">
              {EXPERIENCE.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Activity className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`lg:col-span-5 rounded-2xl border p-6 sm:p-8 space-y-5 ${
              darkMode
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 border-slate-800'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-bold">
              <GitBranch className="w-4 h-4 text-emerald-400" />
              <span>Why Support Experience Builds Better Engineers</span>
            </div>

            <div className="space-y-4">
              {EXPERIENCE.engineeringTranslations.map((item) => (
                <div
                  key={item.from}
                  className={`rounded-xl border p-4 space-y-1.5 ${
                    darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{item.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-cyan-400">{item.to}</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
