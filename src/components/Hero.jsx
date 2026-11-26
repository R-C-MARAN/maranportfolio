import React from 'react';
import { ArrowRight, Sparkles, Mail, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Hero({ darkMode }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border ${
              darkMode
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {PROFILE.statusBadge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Bridging{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Enterprise Reliability
            </span>{' '}
            &amp; Modern Generative AI.
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {PROFILE.subhead}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              View AI Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-100'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className={`rounded-2xl border p-6 backdrop-blur-xl shadow-xl space-y-5 ${
              darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white/90 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-4 border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <h2 className="font-bold text-base">{PROFILE.name}</h2>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {PROFILE.currentRole}
                  </p>
                </div>
              </div>
              <span
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-cyan-300'
                    : 'bg-slate-100 border-slate-200 text-cyan-700'
                }`}
              >
                2+ Yrs Ops
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Production Support &amp; Triage</p>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    ERP &amp; academic admin systems, root-cause debugging
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Full-Stack Engineering</p>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Django REST Framework, PostgreSQL, React &amp; React Native
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Generative AI &amp; Agents</p>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    LangGraph, RAG pipelines, Chroma/Pinecone, Tool Calling
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`rounded-xl p-3 text-xs font-mono border ${
                darkMode
                  ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <span className="text-cyan-400">target_roles</span> = [
              <span className="text-emerald-400">"Full-Stack (Django/React)"</span>,{' '}
              <span className="text-emerald-400">"GenAI / LLM Engineer"</span>]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
