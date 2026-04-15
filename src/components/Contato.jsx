const contatos = [
  { href: 'mailto:willeal17@gmail.com', icon: 'fas fa-envelope', label: 'E-mail', value: 'willeal17@gmail.com' },
  { href: 'https://github.com/willdemar00', icon: 'fab fa-github', label: 'GitHub', value: 'willdemar00' },
  { href: 'https://www.linkedin.com/in/wildemar-leal-a504b4254/', icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'wildemar-leal' },
]

export default function Contato() {
  return (
    <section className="section contato" id="contato">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-paper-plane"></i> Vamos conversar</span>
          <h2>Entre em <em>Contato</em></h2>
          <p className="section-desc">Aberto a novas oportunidades e colaborações</p>
        </div>
        <div className="contact-boxes">
          {contatos.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-box">
              <div className="cbox-icon"><i className={c.icon}></i></div>
              <span className="cbox-label">{c.label}</span>
              <span className="cbox-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
