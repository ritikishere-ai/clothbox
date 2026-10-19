import { useCallback, useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis.js';
import { useMotion } from './hooks/useMotion.js';
import Ticker from './components/Ticker.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Made from './components/Made.jsx';
import Mission from './components/Mission.jsx';
import Partners from './components/Partners.jsx';
import Cards from './components/Cards.jsx';
import Wave from './components/Wave.jsx';
import Ways from './components/Ways.jsx';
import Hands from './components/Hands.jsx';
import Impact from './components/Impact.jsx';
import Voices from './components/Voices.jsx';
import Steps from './components/Steps.jsx';
import Split from './components/Split.jsx';
import News from './components/News.jsx';
import Reach from './components/Reach.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useMotion();

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (lenis.current) menuOpen ? lenis.current.stop() : lenis.current.start();
  }, [menuOpen, lenis]);

  // In-page links glide to their section instead of jumping
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onClick = e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || e.defaultPrevented) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis.current) lenis.current.scrollTo(target, { offset: -70 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [lenis, closeMenu]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Ticker />
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(o => !o)} />
      <main id="main">
        <Hero />
        <Made />
        <Mission />
        <Partners />
        <Cards />
        <Wave className="wave" />
        <Ways />
        <Hands />
        <Impact />
        <Voices />
        <Steps />
        <Split />
        <News />
        <Reach />
      </main>
      <Footer />
    </>
  );
}
