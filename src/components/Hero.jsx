import Photo from './Photo.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" data-parallax="0.25">
        <Photo src="assets/hero.jpg" />
      </div>
      <div className="hero__shade"></div>
      <h1 className="hero__title">
        <span className="line"><span>Every garment deserves</span></span>
        <span className="line"><span>a second life.</span></span>
      </h1>
      <a className="hero__scroll" href="#made" aria-label="Scroll down"><span></span></a>
    </section>
  );
}
