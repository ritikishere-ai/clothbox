import Photo from './Photo.jsx';

export default function Hands() {
  return (
    <section className="hands">
      <div className="hands__media" data-parallax="0.15"><Photo src="assets/hands.jpg" loading="lazy" /></div>
      <div className="hands__shade"></div>
      <p className="hands__text reveal">Behind every donation is a hand that sorts, stitches and gives it new purpose. At Cloth Box, rural women turn discarded clothes into products that fund their own livelihoods.</p>
      <a className="btn btn--ghost-light hands__btn reveal" href="#impact">Learn More About Our Impact</a>
    </section>
  );
}
