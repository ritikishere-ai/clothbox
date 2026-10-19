import { useEffect, useRef, useState } from 'react';

const links = [
  ['#drive', 'Start a Drive'],
  ['#partner', 'Partner/CSR'],
  ['#shop', 'Shop Now'],
  ['#about', 'About Us'],
  ['#impact', 'Our Impact'],
  ['#news', 'Resources'],
];

const NavLinks = () => links.map(([href, label]) => <a key={href} href={href}>{label}</a>);

// Sticky nav: appears after the hero, hides on scroll down, returns on scroll up
function useStickyNav() {
  const [state, setState] = useState({ stuck: false, hidden: false });
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero');
      const h = hero ? hero.offsetHeight : 0;
      const y = window.scrollY;
      const stuck = y > h * 0.6;
      setState(prev => {
        const hidden = stuck && y > lastY.current + 2 && y > h;
        return prev.stuck === stuck && prev.hidden === hidden ? prev : { stuck, hidden };
      });
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}

export default function Header({ menuOpen, onToggleMenu }) {
  const { stuck, hidden } = useStickyNav();
  const cls = ['nav', stuck && 'is-stuck', hidden && 'is-hidden'].filter(Boolean).join(' ');

  return (
    <>
      <header className={cls} id="nav">
        <a className="nav__brand" href="#top" aria-label="Cloth Box Foundation home">
          <img src="assets/logo-mark.png" alt="" width="153" height="62" />
          <span>Cloth Box<br />Foundation</span>
        </a>
        <nav className="nav__links" aria-label="Primary"><NavLinks /></nav>
        <div className="nav__cta">
          <a className="btn btn--white" href="#donate">Donate Now</a>
          <a className="btn btn--ghost-light" href="#contact">Contact Us</a>
        </div>
        <button className="nav__burger" aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={onToggleMenu}>
          <span></span><span></span>
        </button>
      </header>
      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        <NavLinks />
        <a className="btn btn--white" href="#donate">Donate Now</a>
        <a className="btn btn--ghost-light" href="#contact">Contact Us</a>
      </div>
    </>
  );
}
