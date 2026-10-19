import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Smooth scrolling for the whole page. Returns a ref to the Lenis instance
// (null when the visitor prefers reduced motion).
export function useLenis() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.15, easing: t => 1 - Math.pow(1 - t, 4), smoothWheel: true });
    ref.current = lenis;
    let id;
    const raf = t => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      ref.current = null;
    };
  }, []);

  return ref;
}
