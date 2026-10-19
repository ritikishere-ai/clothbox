// Each word is its own span so it can light up as the visitor scrolls (see useMotion).
function Words({ text }) {
  return text.split(/(\s+)/).filter(Boolean).map((part, i) =>
    /^\s+$/.test(part) ? part : <span key={i} className="w">{part}</span>
  );
}

export default function Mission() {
  return (
    <section className="mission" id="about">
      <p className="mission__text" data-words>
        <span className="indent"></span>
        <b className="c-purple"><Words text="Cloth Box Foundation" /></b>
        <Words text=" turns unwanted clothing into " />
        <b className="c-brown"><Words text="dignity" /></b>
        <Words text=". We " />
        <b className="c-teal"><Words text="collect, clean and upcycle" /></b>
        <Words text=" donated garments into wearables, relief blankets, bags and dog beds, while training rural women in industrial stitching skills." />
      </p>
      <a className="btn btn--ghost-dark mission__btn reveal" href="#about">Learn More About Us</a>
    </section>
  );
}
