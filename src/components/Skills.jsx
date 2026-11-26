import React, { useState } from 'react';
import { BrainCircuit, Server, Smartphone, Database, Code2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const iconMap = {
    BrainCircuit,
    Server,
    Smartphone,
    Database,
  };

  const filters = [
    { id: 'all', label: 'All Expertise' },
    { id: 'ai', label: 'AI & Agents' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'data-devops', label: 'Data & Tooling' },
  ];

  const visibleGroups =
    activeFilter === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === activeFilter);

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Technical Expertise
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Full-Stack &amp; Generative AI Matrix
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                  activeFilter === f.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-500 font-semibold'
                    : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {visibleGroups.map((group) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div
                key={group.id}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br border flex items-center justify-center ${group.accent}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{group.title}</h3>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        darkMode
                          ? 'bg-slate-950/70 border-slate-800 text-slate-200'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
