import { useEffect, useState } from 'react';

const ways = [
  { title: 'Dignity', text: 'Wearable clothes reach families in underserved communities, sorted with care for pride.', href: '#impact' },
  { title: 'Warmth', text: 'Relief blankets stitched from donated fabric keep families warm through the winter.', href: '#impact' },
  { title: 'Livelihood', text: 'We train rural women in industrial stitching, turning old fabric into steady incomes.', href: '#impact' },
  { title: 'Relief', text: 'Clothes and blankets reach people in need, with a photo update so donors see where they went.', href: '#impact' },
  { title: 'Community', text: "Cosy beds for shelters and street dogs, made from what can't be worn.", href: '#impact' },
  { title: 'Corporate Outreach', text: 'Employee wardrobe drives with doorstep pickup and full transparency on where every garment goes.', href: '#partner', style: { '--bx': 1130 } },
];

export default function Ways() {
  const [open, setOpen] = useState(0);
  // On large screens with a mouse, hovering a row opens it
  const [hoverOpens, setHoverOpens] = useState(false);
  useEffect(() => {
    setHoverOpens(window.matchMedia('(hover: hover) and (min-width: 1101px)').matches);
  }, []);

  return (
    <section className="ways" id="drive">
      <div className="ways__top">
        <h2 className="reveal">Ways we turn<br />cloth into change.</h2>
        <p className="ways__intro reveal" style={{ '--d': '.08s' }}>Nothing we receive goes to waste. What can be worn is cleaned and gifted; the rest is upcycled by rural women at our Refresh unit into products that keep giving.</p>
        <figure className="ways__photo reveal" style={{ '--d': '.16s' }}>
          <div className="ways__frame">
            <img src="assets/giving.png" alt="Smiling children who received donated clothes" width="393" height="508" loading="lazy" data-parallax-inner="0.08" />
          </div>
        </figure>
      </div>
      <ul className="ways__list" role="list">
        {ways.map((w, i) => (
          <li key={w.title} className={i === open ? 'way is-open' : 'way'} style={w.style}>
            <button
              className="way__head"
              aria-expanded={i === open}
              onClick={() => setOpen(i)}
              onPointerMove={hoverOpens ? () => setOpen(i) : undefined}
            >
              <span className="way__kicker">Giving Through</span>
              <span className="way__title">{w.title}</span>
            </button>
            <div className="way__body"><div><p>{w.text}</p><a href={w.href}>Explore More</a></div></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
