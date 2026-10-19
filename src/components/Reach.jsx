import { DownloadDoc } from './icons.jsx';

const email = 'info@clothesboxfoundation.org';

export default function Reach() {
  return (
    <section className="reach" id="contact">
      <div className="pill pill--round reveal">
        <h2>Contact us</h2>
        <p>Have clothes to give, a drive to plan or a partnership in mind? Reach out and we’ll help you get started.</p>
        <a className="pill__mail" href={`mailto:${email}`}>{email}</a>
        <a className="btn btn--ghost-dark" href={`mailto:${email}`}>Submit</a>
      </div>
      <div className="pill pill--soft reveal" style={{ '--d': '.1s' }}>
        <h2>Press Pack</h2>
        <p>Download our press pack for our story, impact figures, logo and photography, everything you need to tell the Cloth Box story.</p>
        <a className="press-btn" href="#contact">
          <DownloadDoc />
          Download Press Pack
        </a>
      </div>
    </section>
  );
}
