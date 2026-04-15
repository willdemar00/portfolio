import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ]

  const close = () => setOpen(false)

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#inicio" className="logo">W<span>.</span>dev</a>
          <nav className="nav-desktop">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>
      <div className={`mobile-overlay ${open ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {links.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </nav>
      </div>
    </>
  )
}
