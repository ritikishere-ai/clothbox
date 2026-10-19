import Stat from './Stat.jsx';

const products = [
  { img: 'prod-dogbed.png', alt: 'Upcycled dog bed', w: 428, h: 286, title: 'Dog Beds', value: 40, suffix: 'K+', desc: 'cosy beds for shelters and street dogs' },
  { img: 'prod-bag.png', alt: 'Patchwork bag made from recycled fabric', w: 238, h: 358, title: 'Recycled Bags', value: 85, suffix: 'K+', desc: 'recycled fabric' },
  { img: 'prod-blanket.png', alt: 'Folded relief blanket', w: 379, h: 260, title: 'Blankets', value: 120, suffix: 'K+', desc: 'warm blankets stitched from donated fabric', multiply: true },
  { img: 'prod-clothes.png', alt: 'Stack of donated denim clothes', w: 195, h: 201, title: 'Clothes', value: 3.5, decimals: 1, suffix: 'M+', desc: 'wearables distributed to people in need', multiply: true },
];

export default function Made() {
  return (
    <section className="made" id="made">
      <div className="made__panel">
        <div className="made__head">
          <h2 className="reveal">Old clothes. New lives. <em>Real things made.</em></h2>
          <p className="reveal" style={{ '--d': '.1s' }}>Nothing we receive goes to waste. What can be worn is cleaned and gifted; the rest is upcycled by rural women at our Refresh unit into products that keep giving.</p>
        </div>
        <div className="made__grid" id="shop">
          {products.map((p, i) => (
            <article key={p.title} className={`product product--${i + 1} reveal`} style={i ? { '--d': `${(i * 0.08).toFixed(2)}s` } : undefined}>
              <div className={p.multiply ? 'product__img product__img--multiply' : 'product__img'}>
                <img src={`assets/${p.img}`} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
              </div>
              <h3>{p.title}</h3>
              <Stat value={p.value} decimals={p.decimals} suffix={p.suffix} />
              <p className="product__desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
