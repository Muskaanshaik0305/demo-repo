'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { LandingNavbar } from '@/components/landing-navbar';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
      <LandingNavbar />

      <section className="hero-glow relative mx-auto mt-16 flex w-full max-w-6xl flex-col items-start gap-8 md:mt-24">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.45 }}
          className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
        >
          Next-Gen Learning Intelligence
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          Learn Faster with an <span className="text-electric">AI-Powered</span> Study Ecosystem.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="max-w-2xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg"
        >
          Edu Nexa transforms your documents, videos, and notes into focused learning paths with smart summaries,
          memory tools, and adaptive quiz experiences.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-electric px-5 py-3 text-sm font-semibold text-white transition hover:shadow-glow"
          >
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:border-electric">
            <PlayCircle className="h-4 w-4 text-electric" />
            Try Demo
          </button>
        </motion.div>
      </section>
    </main>
  );
}
