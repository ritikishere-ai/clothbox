export default function Cards() {
  return (
    <section className="cards">
      <div className="cards__row" data-drag>
        <div className="card card--purple reveal"><p>We train women to turn old fabric into steady incomes.</p></div>
        <div className="card card--photo reveal" style={{ '--d': '.08s' }}>
          <img src="assets/card-women.png" alt="Women spinning yarn from recycled fabric" width="546" height="534" loading="lazy" />
        </div>
        <div className="card card--green reveal" style={{ '--d': '.16s' }}><p>We make sure no garment and no talent goes to waste.</p></div>
      </div>
    </section>
  );
}
