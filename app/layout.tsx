import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Edu Nexa',
  description: 'AI-powered educational SaaS for focused, modern learning.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy bg-grid antialiased">{children}</body>
    </html>
  );
}
