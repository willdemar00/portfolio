const skills = [
  { icon: 'fab fa-php', label: 'PHP & Laravel' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fab fa-html5', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', label: 'CSS3' },
  { icon: 'fas fa-database', label: 'MySQL' },
  { icon: 'fab fa-git-alt', label: 'Git' },
  { icon: 'fab fa-linux', label: 'Linux' },
]

export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-user"></i> Quem sou eu</span>
          <h2>Sobre <em>Mim</em></h2>
        </div>
        <div className="sobre-grid">
          <div className="sobre-texto">
            <p>Sou estudante de <strong>Tecnologia em Sistemas para Internet</strong>, com experiência sólida em desenvolvimento web full stack. Paixão por criar aplicações robustas e eficientes, sempre aplicando boas práticas de engenharia.</p>
            <p>Minha jornada envolve desde backend com PHP/Laravel até automações em Python, passando por bancos de dados relacionais e controle de versão com Git.</p>
            <p>Em constante aprendizado, busco sempre entregar soluções de qualidade que atendam às necessidades reais dos usuários.</p>
          </div>
          <div className="skills-grid">
            {skills.map(s => (
              <div key={s.label} className="skill-card">
                <i className={s.icon}></i>
                <h4>{s.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
