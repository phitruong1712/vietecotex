'use client';

import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Pages that have a hero banner and should NOT have top padding (content starts at top)
  const hasHeroBanner = ['/', '/compliance', '/catalog'].includes(pathname);

  return (
    <main className={hasHeroBanner ? '' : 'pt-24'}>
      {children}
    </main>
  );
}


