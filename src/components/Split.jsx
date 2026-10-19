import Photo from './Photo.jsx';

export default function Split() {
  return (
    <section className="split">
      <img className="split__mark" src="assets/logo-mark.png" alt="" width="351" height="142" />
      <div className="split__photo">
        <div className="split__media" data-parallax="0.12"><Photo src="assets/circularity.jpg" loading="lazy" /></div>
        <p className="reveal">We aim to prove that giving, caring for people and caring for the planet belong together.</p>
      </div>
      <div className="split__copy">
        <h2 className="reveal">Circularity+</h2>
        <p className="reveal" style={{ '--d': '.08s' }}>Our approach is built on the circular economy. Wearable clothes are cleaned and gifted. What can’t be worn is upcycled by rural women at our Refresh unit into blankets, bags and dog beds. Every garment is used to its fullest, and every thread keeps giving.</p>
        <a className="link reveal" style={{ '--d': '.16s' }} href="#about">Learn More</a>
      </div>
    </section>
  );
}
