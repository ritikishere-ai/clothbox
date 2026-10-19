import { Heart } from './icons.jsx';

const Group = ({ hidden }) => (
  <div className="ticker__group" aria-hidden={hidden || undefined}>
    <a href="#donate" tabIndex={hidden ? -1 : undefined}>Winter Warmth Drive is open: donate a blanket, warm a family. Donate now →</a>
    <Heart aria-hidden="true" />
    <a href="#partner" tabIndex={hidden ? -1 : undefined}>Hiring CSR partners for 2027 drives. Partner with us →</a>
    <Heart aria-hidden="true" />
  </div>
);

export default function Ticker() {
  return (
    <div className="ticker" role="region" aria-label="Announcements">
      <div className="ticker__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
