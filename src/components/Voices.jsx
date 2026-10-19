const voices = [
  { logo: 'logo-fedex.png', alt: 'FedEx', h: 57, quote: 'Our employees cleared out their wardrobes in a single week. Cloth Box handled the pickup and sent us photos of the people who received the clothes. That transparency is why we keep coming back.' },
  { logo: 'logo-lt.png', alt: 'Larsen & Toubro', h: 65, quote: 'Knowing that what can’t be worn is upcycled by women at Cloth Box made the decision easy. Nothing goes to waste, and people earn from it.' },
];

export default function Voices() {
  return (
    <section className="voices">
      <h2 className="voices__title reveal">Meet the partners who trust Cloth Box to put their donations in the right hands</h2>
      <div className="voices__row" data-drag>
        {voices.map((v, i) => (
          <article key={v.alt} className="voice reveal" style={i ? { '--d': '.1s' } : undefined}>
            <div className="voice__copy">
              <img className="voice__logo" src={`assets/${v.logo}`} alt={v.alt} height={v.h} />
              <blockquote>{v.quote}</blockquote>
              <p className="voice__who"><b>Sam Israielt</b><span>Partner &amp; Chief Sustainability Officer</span></p>
            </div>
            <div className="voice__panel" aria-hidden="true">“</div>
          </article>
        ))}
      </div>
    </section>
  );
}
