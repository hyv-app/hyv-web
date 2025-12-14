'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return <>{children}</>;
}

export default ScrollProvider;
