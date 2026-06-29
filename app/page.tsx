"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT = "mailto:pragya@heyrubric.ai";
const EXPERT = "https://interview.therubric.ai";

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref: ref as React.RefObject<HTMLElement>, inView };
}

function YCLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Y Combinator">
      <rect width="48" height="48" fill="#FF6600" />
      <path
        d="M13.9 11.8h3.76l4.84 9.75c.71 1.45 1.3 2.86 1.3 2.86s.63-1.38 1.37-2.86l4.91-9.75h3.5l-8.3 15.59V37.3h-3.16V27.19L13.9 11.8z"
        fill="white"
      />
    </svg>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────── */
function Nav() {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const fn = () => setBg(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        bg ? "bg-white/90 backdrop-blur-md border-b border-black/8" : ""
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <span className="font-mono font-bold text-sm tracking-tight">Rubric AI</span>
        <a
          href={CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.18em] border border-black text-black px-4 py-1.5 hover:bg-black hover:text-white transition-colors duration-150"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-14 px-6 md:px-10">
      <div className="max-w-[1120px] mx-auto w-full flex-1 flex flex-col justify-center py-24 md:py-0">
        {/* YC badge */}
        <div className="flex items-center gap-2 mb-8 fade-up" style={{ animationDelay: "0.05s" }}>
          <YCLogo size={22} />
          <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-black/45">Backed by Y Combinator</span>
        </div>

        {/* headline */}
        <h1
          className="font-mono tracking-tight leading-[1.04] fade-up"
          style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.6rem)", animationDelay: "0.15s" }}
        >
          Expert judgment,<br />
          structured for<br />
          post-training.
        </h1>

        {/* sub */}
        <p
          className="font-sans text-black/50 leading-relaxed mt-8 max-w-lg fade-up"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)", animationDelay: "0.28s" }}
        >
          AI labs need domain-expert graded data to train and evaluate models
          in medicine, law, and finance. We collect it, structure it, and
          deliver it in formats that go directly into post-training pipelines.
        </p>

        <div className="mt-10 fade-up" style={{ animationDelay: "0.38s" }}>
          <a
            href={CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] bg-black text-white px-6 py-3 hover:bg-black/80 transition-colors"
          >
            Talk to us →
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="max-w-[1120px] mx-auto w-full pb-8 flex items-center gap-3">
        <div className="w-px h-8 bg-black/15" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/25">Scroll</span>
      </div>
    </section>
  );
}

/* ─── Marquee ──────────────────────────────────────────────────── */
function Marquee() {
  const items = [
    "Healthcare", "·", "Life Sciences", "·", "Finance", "·",
    "Legal", "·", "Pharmaceuticals", "·", "Clinical Research", "·",
    "Drug Discovery", "·", "Radiology", "·", "Healthcare", "·",
    "Life Sciences", "·", "Finance", "·", "Legal", "·",
    "Pharmaceuticals", "·", "Clinical Research", "·",
    "Drug Discovery", "·", "Radiology", "·",
  ];
  return (
    <div className="border-t border-b border-black/10 py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] uppercase tracking-[0.22em] px-4 ${
              item === "·" ? "text-black/20" : "text-black/40"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Problem ──────────────────────────────────────────────────── */
function Problem() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-10">
      <div
        className={`max-w-[1120px] mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24 transition-all duration-700 ${
          inView ? "fade-up opacity-100" : "opacity-0"
        }`}
      >
        <div className="space-y-4">
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-black/60">
            The problem
          </p>
          <h2
            className="font-mono tracking-tight leading-snug"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}
          >
            Crowdsourced feedback breaks down in specialized domains.
          </h2>
        </div>
        <div className="space-y-5 text-black/55 leading-[1.8]" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
          <p>
            Post-training (RLHF, DPO, supervised fine-tuning, RL) shapes how
            a model behaves on a specific task. The quality of that process
            depends entirely on the quality of human feedback driving it.
          </p>
          <p>
            For general tasks this is straightforward. Crowdworkers can judge
            whether a summary is readable. But in medicine, law, or finance, the
            gap between a plausible answer and a dangerous one isn&rsquo;t
            visible to a generalist. A first-year resident can miss what a
            cardiologist catches in seconds. Most AI labs either skip
            domain-specific post-training, or run it with evaluators who aren&rsquo;t
            qualified to distinguish good outputs from subtly wrong ones.
          </p>
          <p className="text-black font-medium">
            The result is models that sound authoritative but fail where
            it matters most.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── What we build ────────────────────────────────────────────── */
function WhatWeBuild() {
  const { ref, inView } = useInView();
  const items = [
    {
      n: "01",
      title: "Expert preference datasets",
      body: "We source credentialed domain experts (physicians, attorneys, scientists, financial analysts) and run structured annotation workflows for RLHF and DPO. A doctor comparing two diagnostic plans. A lawyer ranking two contract analyses. Each judgment is logged with structured reasoning and delivered in standard formats.",
    },
    {
      n: "02",
      title: "Domain evaluation frameworks",
      body: "We build evals that go beyond multiple-choice benchmarks. Whether a clinical recommendation is appropriate requires someone who has actually made clinical decisions. We design scenario-based tasks, expert-graded rubrics, and scoring pipelines for domains where \"correct\" can't be reduced to an answer key.",
    },
    {
      n: "03",
      title: "RL environments and reward infrastructure",
      body: "For agentic tasks like a clinical documentation system or a legal research tool, you need a reward function. There's no unit test for \"is this clinical reasoning sound.\" We build the environments and expert-in-the-loop reward pipelines that let labs run policy gradient training on complex professional tasks.",
    },
  ];

  return (
    <section ref={ref} className="bg-black text-white py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1120px] mx-auto">
        <p
          className={`font-mono text-sm font-bold uppercase tracking-widest text-white/60 mb-16 transition-all duration-700 ${
            inView ? "fade-up opacity-100" : "opacity-0"
          }`}
        >
          What we build
        </p>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div
              key={item.n}
              className={`grid md:grid-cols-[72px_1fr] gap-6 md:gap-16 py-12 border-t border-white/10 transition-all duration-700 ${
                inView ? "fade-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="font-mono text-[11px] text-white/20 pt-1">{item.n}</span>
              <div className="space-y-4">
                <h3
                  className="font-mono tracking-tight text-white"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}
                >
                  {item.title}
                </h3>
                <p className="font-sans text-white/45 leading-[1.8] max-w-2xl" style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Research ─────────────────────────────────────────────────── */
function Research() {
  const { ref, inView } = useInView();
  const stats = [
    { val: "47", label: "Clinical scenarios" },
    { val: "22", label: "Models evaluated" },
    { val: "23", label: "Rubric criteria" },
    { val: "3,100", label: "Scored responses" },
  ];
  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-10 border-t border-black/10">
      <div className="max-w-[1120px] mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "fade-up opacity-100" : "opacity-0"}`}
        >
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-black/60 mb-4">
            Research
          </p>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h2
              className="font-mono tracking-tight leading-snug max-w-2xl"
              style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}
            >
              WHBench: A Women&rsquo;s Health Benchmark<br className="hidden md:block" /> for Evaluating Frontier LLMs
            </h2>
            <a
              href="/whbench-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] border border-black/20 px-4 py-2 text-black/50 hover:text-black hover:border-black transition-colors self-start mt-1"
            >
              Paper ↗
            </a>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/10 border border-black/10 transition-all duration-700 ${
            inView ? "fade-up opacity-100" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 space-y-2">
              <div
                className="font-mono font-bold tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                {s.val}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/35">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p
          className={`mt-10 font-sans text-black/45 leading-[1.8] max-w-2xl transition-all duration-700 ${
            inView ? "fade-up opacity-100" : "opacity-0"
          }`}
          style={{ animationDelay: "0.25s", fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}
        >
          Across 3,100 scored responses, no model mean exceeds 75%, with
          substantial safety and equity gaps across clinical topics. No widely
          adopted benchmark had previously evaluated frontier LLMs on
          women&rsquo;s health.
        </p>
      </div>
    </section>
  );
}

/* ─── Modalities ───────────────────────────────────────────────── */
function Modalities() {
  const { ref, inView } = useInView();
  const rows = [
    { label: "Text", desc: "Structured reasoning, preference pairs, rubric evaluations." },
    { label: "Voice", desc: "Spoken expert reasoning during clinical and legal encounters." },
    { label: "Video", desc: "Egocentric recordings of procedural tasks: surgery, lab work, physical examination." },
    { label: "Multimodal", desc: "Cross-modal datasets combining text, image, audio, and action." },
  ];
  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-10 bg-black text-white">
      <div className="max-w-[1120px] mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "fade-up opacity-100" : "opacity-0"}`}
        >
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
            Modalities
          </p>
          <h2
            className="font-mono tracking-tight text-white"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}
          >
            Expert knowledge comes in many forms.
          </h2>
        </div>
        <div className="divide-y divide-white/10 border-t border-white/10">
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-8 transition-all duration-700 ${
                inView ? "fade-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span
                className="font-mono font-bold tracking-tight w-48 shrink-0 text-white"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
              >
                {r.label}
              </span>
              <span className="font-sans text-white/40 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}>
                {r.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ──────────────────────────────────────────────────── */
function Contact() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 md:py-48 px-6 md:px-10">
      <div
        className={`max-w-[1120px] mx-auto transition-all duration-700 ${
          inView ? "fade-up opacity-100" : "opacity-0"
        }`}
      >
        <h2
          className="font-mono tracking-tight leading-[1.05] mb-10"
          style={{ fontSize: "clamp(3rem, 7vw, 6.4rem)" }}
        >
          Let&rsquo;s work<br />together.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] bg-black text-white px-8 py-4 hover:bg-black/80 transition-colors text-center"
          >
            Talk to us →
          </a>
          <a
            href={EXPERT}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] border border-black/25 text-black/55 px-8 py-4 hover:border-black hover:text-black transition-colors text-center"
          >
            Join as a domain expert ↗
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-black/10 py-7 px-6 md:px-10">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="font-mono font-bold text-sm">Rubric AI</span>
          <span className="text-black/15">·</span>
          <span className="font-mono text-[11px] text-black/30">© 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-black/30 tracking-wide">Backed by</span>
          <YCLogo size={18} />
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <WhatWeBuild />
      <Research />
      <Modalities />
      <Contact />
      <Footer />
    </main>
  );
}
