import { projetos } from '../data/projetos.js'

function ProjetoCard({ projeto }) {
  return (
    <div className="projeto-card">
      <div className="projeto-imagem"><span>{projeto.icone}</span></div>
      <div className="projeto-conteudo">
        <h3 className="projeto-titulo">{projeto.titulo}</h3>
        <p className="projeto-descricao">{projeto.descricao}</p>
        <div className="projeto-tecnologias">
          {projeto.tecnologias.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <div className="projeto-links">
          <a href={projeto.githubLink} target="_blank" rel="noopener noreferrer" className="projeto-link link-github">
            <i className="fab fa-github"></i> GitHub
          </a>
          {projeto.demoLink ? (
            <a href={projeto.demoLink} target="_blank" rel="noopener noreferrer" className="projeto-link link-demo">
              <i className="fas fa-external-link-alt"></i> Demo
            </a>
          ) : (
            <span className="projeto-link link-demo" style={{ opacity: 0.5, cursor: 'not-allowed' }}>Em desenvolvimento</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projetos() {
  return (
    <section className="section projetos" id="projetos">
      <div className="container">
        <div className="section-intro">
          <span className="chip"><i className="fas fa-folder-open"></i> Portfólio</span>
          <h2>Meus <em>Projetos</em></h2>
          <p className="section-desc">Seleção de projetos desenvolvidos ao longo da minha jornada</p>
        </div>
        <div className="projetos-grid">
          {projetos.map(p => <ProjetoCard key={p.id} projeto={p} />)}
        </div>
      </div>
    </section>
  )
}
