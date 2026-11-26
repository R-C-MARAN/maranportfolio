import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Download, Github, Linkedin, Terminal } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Navbar({ darkMode, onToggleTheme, onOpenResume }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-900/85 border-slate-800 text-slate-100'
          : 'bg-white/85 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center gap-2 font-bold text-lg tracking-tight shrink-0"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
            <Terminal className="w-4 h-4" />
          </span>
          <span>
            Sugumaran<span className="text-cyan-500">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors hover:text-cyan-400 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`hidden sm:inline-flex p-2 rounded-lg border transition-colors ${
              darkMode
                ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`hidden sm:inline-flex p-2 rounded-lg border transition-colors ${
              darkMode
                ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className={`p-2 rounded-lg border transition-colors ${
              darkMode
                ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-amber-300'
                : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg border ${
              darkMode
                ? 'border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden border-t px-4 py-4 space-y-3 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  darkMode
                    ? 'text-slate-200 hover:bg-slate-800'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800/40 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold bg-cyan-500 text-slate-950"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
