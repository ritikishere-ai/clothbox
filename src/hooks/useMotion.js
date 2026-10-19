import { useEffect } from 'react';

const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// Count-up numbers
const fmt = (v, d) => d ? v.toFixed(d) : String(Math.round(v));
function countUp(el, reduce) {
  const end = parseFloat(el.dataset.count);
  const d = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  if (reduce) { el.textContent = fmt(end, d) + suffix; return; }
  const dur = 1800;
  const t0 = performance.now();
  const step = t => {
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 4);
    el.textContent = fmt(end * e, d) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  el.textContent = fmt(0, d) + suffix;
  requestAnimationFrame(step);
}

// Page-wide scroll effects, driven by classes and data attributes in the markup:
// .reveal (fade up when seen), [data-count] (count-up), [data-parallax],
// [data-parallax-inner], [data-words] .w (mission words light up) and [data-drag] rows.
export function useMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];

    // Reveal on scroll
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        $$('[data-count]', en.target).forEach(el => countUp(el, reduce));
        io.unobserve(en.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal, .wave, .steps__wave, .impact, .step').forEach(el => io.observe(el));
    cleanups.push(() => io.disconnect());

    // Mission words
    const mission = document.querySelector('[data-words]');
    const words = mission ? $$('.w', mission) : [];
    const lightWords = () => {
      if (!words.length) return;
      const r = mission.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    };

    // Parallax
    const layers = $$('[data-parallax]').map(el => ({ el, k: parseFloat(el.dataset.parallax) }));
    const inner = $$('[data-parallax-inner]').map(el => ({ el, k: parseFloat(el.dataset.parallaxInner) }));
    const parallax = () => {
      if (!reduce) {
        const vh = window.innerHeight;
        layers.forEach(({ el, k }) => {
          const r = el.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          el.style.transform = `translate3d(0, ${(-(r.top + r.height / 2 - vh / 2) * k).toFixed(1)}px, 0)`;
        });
        inner.forEach(({ el, k }) => {
          const r = el.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const p = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.transform = `translate3d(0, ${(-6 + p * k * -100).toFixed(1)}%, 0)`;
        });
      }
      lightWords();
    };
    window.addEventListener('scroll', parallax, { passive: true });
    window.addEventListener('resize', parallax);
    cleanups.push(() => {
      window.removeEventListener('scroll', parallax);
      window.removeEventListener('resize', parallax);
    });
    parallax();

    // Drag to scroll for horizontal rows
    $$('[data-drag]').forEach(row => {
      let down = false, startX = 0, startL = 0, moved = false;
      const onDown = e => {
        if (e.pointerType !== 'mouse') return;
        down = true; moved = false; startX = e.clientX; startL = row.scrollLeft;
        row.style.cursor = 'grabbing'; row.style.scrollSnapType = 'none';
      };
      const onMove = e => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        row.scrollLeft = startL - dx;
      };
      const onUp = () => {
        if (!down) return;
        down = false; row.style.cursor = ''; row.style.scrollSnapType = '';
      };
      const onClick = e => { if (moved) { e.preventDefault(); e.stopPropagation(); } };
      const onDrag = e => e.preventDefault();
      row.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      row.addEventListener('click', onClick, true);
      row.addEventListener('dragstart', onDrag);
      cleanups.push(() => {
        row.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        row.removeEventListener('click', onClick, true);
        row.removeEventListener('dragstart', onDrag);
      });
    });

    return () => cleanups.forEach(fn => fn());
  }, []);
}
