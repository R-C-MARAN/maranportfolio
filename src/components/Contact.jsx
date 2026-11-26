import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setStatus('submitting');

    try {
      const res = await fetch(PROFILE.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`rounded-2xl border p-6 sm:p-10 grid lg:grid-cols-12 gap-8 ${
            darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Get In Touch</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let&apos;s Build Reliable AI &amp; Full-Stack Products
              </h2>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Open to Full-Stack Developer (Django / React) and Generative AI / LLM Engineer roles.
              </p>
            </div>

            <div className="space-y-3">
              <div
                className={`flex items-center justify-between gap-2 p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 text-sm min-w-0">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate font-mono text-xs sm:text-sm">{PROFILE.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border shrink-0 ${
                    darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-white text-slate-700'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border ${
                    darkMode ? 'border-slate-800 bg-slate-950/60 hover:bg-slate-800 text-slate-200' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border ${
                    darkMode ? 'border-slate-800 bg-slate-950/60 hover:bg-slate-800 text-slate-200' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Recruiter or Hiring Manager"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                    darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                    darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the role, team, or project..."
                className={`w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none ${
                  darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 transition-colors"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent!
                </span>
              )}
              {status === 'error' && (
                <span className="text-xs font-medium text-rose-400">
                  Configure your Formspree endpoint in src/data/portfolioData.js.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
