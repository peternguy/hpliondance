'use client';

import { useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { usePathname } from 'next/navigation';

export default function LocomotiveWrapper({ children }) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      scroll?.destroy?.(); // optional, still valid if needed
    };
  }, [pathname]);

  return (
    <main data-scroll-container ref={containerRef}   
      style={{
        position: 'relative', 
        minHeight: '100dvh',
        overflowX: 'hidden',
      }}>
      {children}
    </main>
  );
}
