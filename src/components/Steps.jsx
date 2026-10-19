import Wave from './Wave.jsx';

const steps = [
  { badge: 'purple', r: '0deg', img: 'step1.png', alt: 'Packing clothes into a donation box', w: 351, title: 'Book a pickup', text: 'Schedule a doorstep pickup from anywhere in India, or drop off at a collection point. Pack what you no longer wear and we’ll take it from there.' },
  { badge: 'brown', r: '-16deg', img: 'step2.png', alt: 'Volunteers sorting donated clothes in a warehouse', w: 350, title: 'We sort, clean and upcycle', text: 'Wearable clothes are cleaned and sorted with care. What can’t be worn goes to Refresh, where rural women turn it into blankets, bags and dog beds.' },
  { badge: 'green', r: '20deg', img: 'step3.png', alt: 'A smiling girl in a blue shirt', w: 351, title: 'Gifted, and you see it', text: 'Clean clothes reach people in need, and you get a photo update showing where they went, so you know your donation made it.' },
];

export default function Steps() {
  return (
    <section className="steps" id="donate">
      <h2 className="steps__title reveal">From your wardrobe<br />to someone’s life.</h2>
      <Wave className="steps__wave" />
      <ol className="steps__grid">
        {steps.map((s, i) => (
          <li key={s.title} className="step reveal" style={i ? { '--d': `.${i}s` } : undefined}>
            <span className={`badge badge--${s.badge}`} style={{ '--r': s.r }}><span>{i + 1}</span></span>
            <div className="step__img"><img src={`assets/${s.img}`} alt={s.alt} width={s.w} height="382" loading="lazy" /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
