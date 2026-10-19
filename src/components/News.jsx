const posts = [
  { img: 'news1.png', title: 'cosy beds for shelters and street dogs', date: 'July 30th' },
  { img: 'news2.png', title: 'donations for local animal rescues', date: 'August 15th' },
  { img: 'news3.png', title: 'volunteer opportunities at the animal clinic', date: 'September 1st' },
  { img: 'news4.png', title: 'fundraising events for stray cat colonies', date: 'October 10th' },
  { img: 'news5.png', title: 'awareness campaigns for pet adoption', date: 'November 20th' },
];

export default function News() {
  return (
    <section className="news" id="news">
      <h2 className="news__title">Our Latest News</h2>
      <div className="news__row">
        <div className="news__grid" data-drag>
          {posts.map(p => (
            <a key={p.img} className="post" href="#news">
              <div className="post__img"><img src={`assets/${p.img}`} alt="" width="307" height="322" loading="lazy" /></div>
              <h3>{p.title}</h3>
              <time>{p.date}</time>
            </a>
          ))}
        </div>
        <div className="news__cta"><a className="btn btn--black" href="#news">View All News</a></div>
      </div>
    </section>
  );
}
