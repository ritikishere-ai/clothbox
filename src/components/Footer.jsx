import { useState } from 'react';
import { Chevron, Facebook, Instagram, Twitter, YouTube } from './icons.jsx';

function Feedback() {
  const [sent, setSent] = useState(false);
  return (
    <form className={sent ? 'feedback is-sent' : 'feedback'} onSubmit={e => { e.preventDefault(); setSent(true); }}>
      <div className="feedback__top">
        <p className="eyebrow">Feedback</p>
        <h2><span>Seeking personalized support?</span> Request a call from our team</h2>
        <label className="field"><span>Your name</span><input name="name" autoComplete="name" required /></label>
        <label className="field"><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" required /></label>
        <button className="btn btn--orange" type="submit">Submit</button>
        <p className="feedback__ok" role="status">Thanks, we’ll call you soon.</p>
      </div>
      <a className="feedback__privacy" href="#">Privacy</a>
    </form>
  );
}

function Subscribe() {
  const [sent, setSent] = useState(false);
  return (
    <form className={sent ? 'subscribe is-sent' : 'subscribe'} onSubmit={e => { e.preventDefault(); setSent(true); }}>
      <p className="eyebrow">Subscription</p>
      <label className="subscribe__box">
        <span className="sr">E-mail</span>
        <input type="email" placeholder="E-mail" required />
        <button aria-label="Subscribe"><Chevron /></button>
      </label>
    </form>
  );
}

const List = ({ items }) => (
  <ul role="list">{items.map(item => <li key={item}><a href="#">{item}</a></li>)}</ul>
);

export default function Footer() {
  return (
    <footer className="footer">
      <Feedback />
      <div className="footer__main">
        <div className="footer__cols">
          <div><p className="eyebrow">Info</p><List items={['Company', 'Products', 'Engineering', 'Services', 'Productions']} /></div>
          <div><p className="eyebrow">About us</p><List items={['Gallery', 'Technologies', 'Contacts']} /></div>
          <img className="footer__mark" src="assets/logo-mark.png" alt="Cloth Box Foundation" width="351" height="142" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Contact us</p>
          <ul role="list">
            <li><a href="tel:+19999999999">+1 (999) 999-99-99</a></li>
            <li><a href="mailto:hello@logoipsum.com">hello@logoipsum.com</a></li>
            <li>London</li>
          </ul>
        </div>
        <Subscribe />
        <div className="footer__bottom">
          <div className="social">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="YouTube"><YouTube /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
          <p className="copyright">© 2026 Cloth Box Foundation</p>
        </div>
      </div>
    </footer>
  );
}
