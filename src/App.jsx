import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { FileText, X, Download } from 'lucide-react';
import { PROFILE, EXPERIENCE, SKILL_GROUPS, PROJECTS } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sugumaran_theme');
    if (saved === 'light') setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('sugumaran_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const handleDownloadResumeText = () => {
    const resumeContent = [
      'SUGUMARAN — FULL-STACK & GENERATIVE AI ENGINEER',
      '================================================',
      `Target Roles: ${PROFILE.targetRoles.join(' | ')}`,
      '',
      PROFILE.subhead,
      '',
      `EXPERIENCE: ${EXPERIENCE.role} (${EXPERIENCE.duration})`,
      ...EXPERIENCE.responsibilities.map((r) => `- ${r}`),
      '',
      'SKILLS:',
      ...SKILL_GROUPS.map((g) => `${g.title}: ${g.skills.join(', ')}`),
      '',
      'PROJECTS:',
      ...PROJECTS.map((p) => `- ${p.title} (${p.tech.join(', ')}): ${p.description}`),
    ].join('\n');

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sugumaran_Resume_Summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setShowResumeModal(true)}
      />
      <main>
        <Hero darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <footer
        className={`border-t py-8 text-center text-xs ${
          darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Sugumaran. Built with React, Tailwind CSS &amp; Lucide.</p>
          <p className="font-mono text-[11px]">Python &bull; Django REST &bull; React &bull; LangGraph</p>
        </div>
      </footer>

      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className={`w-full max-w-md rounded-2xl border p-6 space-y-4 shadow-2xl ${
              darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span>Resume Overview</span>
              </div>
              <button type="button" onClick={() => setShowResumeModal(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Download a structured resume summary or add your <code>resume.pdf</code> to <code>public/</code>.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleDownloadResumeText}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
              >
                <Download className="w-3.5 h-3.5" />
                Download Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
