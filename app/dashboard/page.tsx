'use client';

import { motion } from 'framer-motion';
import { BarChart3, Clock3, FileText, Flame } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard-sidebar';

const documents = [
  { title: 'Neural Networks Fundamentals.pdf', topic: 'Machine Learning', updated: '2h ago' },
  { title: 'Organic Chemistry Lecture 08.pdf', topic: 'Chemistry', updated: 'Yesterday' },
  { title: 'World History Chapter 4.pdf', topic: 'History', updated: '3d ago' }
];

export default function DashboardPage() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[250px_1fr] md:px-8 md:py-8">
      <DashboardSidebar />

      <section className="space-y-6">
        <header className="glass rounded-2xl p-5 md:p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Main Dashboard</p>
          <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Welcome back, keep your momentum.</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Track progress, revisit active study documents, and stay aligned with your AI learning flow.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-5 md:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Active Documents</h2>
              <FileText className="h-5 w-5 text-electric" />
            </div>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc.title} className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                  <p className="font-medium text-white">{doc.title}</p>
                  <div className="mt-1 flex items-center justify-between text-xs text-slate-300">
                    <span>{doc.topic}</span>
                    <span>{doc.updated}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="glass rounded-2xl p-5 md:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Study Progress</h2>
              <BarChart3 className="h-5 w-5 text-electric" />
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2"><Flame className="h-4 w-4 text-electric" /> Weekly Focus</span>
                  <span>74%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[74%] rounded-full bg-electric" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-electric" /> Daily Study Goal</span>
                  <span>52 min / 90 min</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[58%] rounded-full bg-electric" />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
