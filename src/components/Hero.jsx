export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-text-col">
          <span className="hero-badge"><i className="fas fa-code"></i> Full Stack Developer</span>
          <h1>Wildemar<br />Pedro<br /><span className="accent">Leal</span></h1>
          <p>Desenvolvedor Full Stack especializado em PHP/Laravel, JavaScript e Python. Foco em soluções web eficientes, escaláveis e bem arquitetadas.</p>
          <div className="hero-btns">
            <a href="#projetos" className="btn-primary">Ver projetos</a>
            <a href="#contato" className="btn-ghost">Fale comigo <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="social-links">
            <a href="https://github.com/willdemar00" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/wildemar-leal-a504b4254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:willeal17@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-photo-col">
          <div className="photo-ring"></div>
          <img src="/perfil.jpg" alt="Wildemar Pedro Leal" className="hero-img" />
        </div>
      </div>
    </section>
  )
}
