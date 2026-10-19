export default function Wave({ className }) {
  return (
    <div className={className} aria-hidden="true">
      <img className="wave__a" src="assets/wave-orange.png" alt="" width="1920" height="164" loading="lazy" />
      <img className="wave__b" src="assets/wave-green.png" alt="" width="1920" height="164" loading="lazy" />
    </div>
  );
}
