'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpenText, BrainCircuit, LayoutDashboard, Map, NotebookPen } from 'lucide-react';

const links = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Study Lab', icon: NotebookPen, href: '/study-lab' },
  { label: 'Memory Tools', icon: BrainCircuit, href: '/memory-tools' },
  { label: 'Nexus Map', icon: Map, href: '/nexus-map' }
];

export function DashboardSidebar() {
  return (
    <aside className="glass h-fit rounded-2xl p-4 md:sticky md:top-6">
      <div className="mb-6 flex items-center gap-2 px-2 text-white">
        <BookOpenText className="h-5 w-5 text-electric" />
        <span className="font-semibold">Edu Nexa</span>
      </div>
      <nav className="space-y-1">
        {links.map(({ label, icon: Icon, href }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4 text-electric" />
              {label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}
