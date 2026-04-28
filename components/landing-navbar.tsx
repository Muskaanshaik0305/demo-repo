'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

export function LandingNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="glass mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6"
    >
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-wide text-white">
        <Bot className="h-5 w-5 text-electric" />
        Edu Nexa
      </Link>
      <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
        <a href="#features" className="transition hover:text-electric">Features</a>
        <a href="#vision" className="transition hover:text-electric">Vision</a>
        <Link href="/dashboard" className="transition hover:text-electric">Dashboard</Link>
      </div>
      <button className="glass inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:shadow-glow">
        <Sparkles className="h-4 w-4 text-electric" />
        AI Upgrade
      </button>
    </motion.nav>
  );
}
