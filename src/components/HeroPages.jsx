import '../styles/global/_index.scss'

function HeroPages({ name }) {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            <p>
              <a href="/">Home</a> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
