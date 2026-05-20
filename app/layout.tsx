import '../globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az">
      <body className="min-h-screen antialiased bg-[#f7fbff] text-[#161c24]">
        {children}
      </body>
    </html>
  );
}
