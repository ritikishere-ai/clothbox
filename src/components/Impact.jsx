import Stat from './Stat.jsx';

const pins = [
  { '--x': '27%', '--y': '36.3%', '--s': '8.2%' },
  { '--x': '40.6%', '--y': '24.2%', '--s': '8.2%', '--delay': '.6s' },
  { '--x': '37.2%', '--y': '59.7%', '--s': '9.7%', '--delay': '1.2s' },
  { '--x': '49.9%', '--y': '35.5%', '--s': '5.2%', '--delay': '.3s' },
  { '--x': '68.6%', '--y': '52.4%', '--s': '11%', '--delay': '.9s' },
];

export default function Impact() {
  return (
    <section className="impact" id="impact">
      <h2 className="impact__title" aria-label="Our Impact"><span className="impact__our">Our</span><span className="impact__word">Impact</span></h2>
      <div className="impact__map">
        <img src="assets/india.png" alt="" width="1458" height="1458" loading="lazy" />
        {pins.map((style, i) => <span key={i} className="pin" style={style}></span>)}
      </div>
      <div className="impact__stat impact__stat--a reveal">
        <Stat value={7.2} decimals={1} suffix=" L+ Units" />
        <p>Circular Products Created and Distributed</p>
      </div>
      <div className="impact__stat impact__stat--b reveal">
        <Stat value={1486} suffix="+ Tonnes" />
        <p>Textile Waste Diverted from Landfill</p>
      </div>
      <div className="impact__stat impact__stat--c reveal">
        <Stat value={320} suffix="M+ L" xl />
        <p>Water Saved Through Circular Recovery</p>
      </div>
    </section>
  );
}
