// ========================================
// Array de Projetos
// ========================================
const projetos = [
    {
        id: 1,
        titulo: "Sistema de Gerenciamento de Estoque",
        descricao: "Sistema web completo para gerenciamento de estoque com controle de entrada e saída de produtos, relatórios e dashboard administrativo.",
        tecnologias: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
        githubLink: "https://github.com/willdemar00",
        demoLink: null,
        icone: "📦"
    },
    {
        id: 2,
        titulo: "Automação de Relatórios com Python",
        descricao: "Script Python para automação de geração de relatórios a partir de planilhas Excel, com envio automático por email.",
        tecnologias: ["Python", "Pandas", "Openpyxl", "SMTP"],
        githubLink: "https://github.com/willdemar00",
        demoLink: null,
        icone: "🐍"
    },
    {
        id: 3,
        titulo: "API RESTful de Gerenciamento",
        descricao: "API desenvolvida em Laravel para gerenciamento de recursos com autenticação JWT, documentação Swagger e testes automatizados.",
        tecnologias: ["Laravel", "PHP", "MySQL", "JWT", "Swagger"],
        githubLink: "https://github.com/willdemar00",
        demoLink: null,
        icone: "🔌"
    },
    {
        id: 4,
        titulo: "Dashboard Interativo",
        descricao: "Dashboard responsivo com visualização de dados em tempo real utilizando gráficos interativos e filtros dinâmicos.",
        tecnologias: ["JavaScript", "jQuery", "Chart.js", "HTML5", "CSS3"],
        githubLink: "https://github.com/willdemar00",
        demoLink: null,
        icone: "📊"
    },
    {
        id: 5,
        titulo: "Sistema de Login e Cadastro",
        descricao: "Sistema completo de autenticação com registro de usuários, recuperação de senha e painel administrativo para gestão de usuários.",
        tecnologias: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        githubLink: "https://github.com/willdemar00",
        demoLink: null,
        icone: "🔐"
    },
    {
        id: 6,
        titulo: "Web Scraper de Dados",
        descricao: "Script Python para coleta automatizada de dados de sites, processamento e armazenamento em banco de dados.",
        tecnologias: ["Python", "BeautifulSoup", "Requests", "SQLite"],
        githubLink: "https://github.com/willdemar00",
        demoLink: null,
        icone: "🕷️"
    }
];

// ========================================
// Função para Renderizar Projetos
// ========================================
function renderizarProjetos() {
    const container = document.getElementById('projetosContainer');
    
    if (!container) {
        console.error('Container de projetos não encontrado!');
        return;
    }
    
    // Limpa o container antes de renderizar
    container.innerHTML = '';
    
    // Renderiza cada projeto
    projetos.forEach(projeto => {
        const projetoCard = criarCardProjeto(projeto);
        container.appendChild(projetoCard);
    });
}

// ========================================
// Função para Criar Card de Projeto
// ========================================
function criarCardProjeto(projeto) {
    // Cria o elemento principal do card
    const card = document.createElement('div');
    card.className = 'projeto-card';
    card.setAttribute('data-id', projeto.id);
    
    // HTML do card
    card.innerHTML = `
        <div class="projeto-imagem">
            <span>${projeto.icone}</span>
        </div>
        <div class="projeto-conteudo">
            <h3 class="projeto-titulo">${projeto.titulo}</h3>
            <p class="projeto-descricao">${projeto.descricao}</p>
            <div class="projeto-tecnologias">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="projeto-links">
                <a href="${projeto.githubLink}" target="_blank" rel="noopener" class="projeto-link link-github">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${projeto.demoLink ? 
                    `<a href="${projeto.demoLink}" target="_blank" rel="noopener" class="projeto-link link-demo">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>` : 
                    '<span class="projeto-link link-demo" style="opacity: 0.5; cursor: not-allowed;">Em desenvolvimento</span>'
                }
            </div>
        </div>
    `;
    
    return card;
}

// ========================================
// Menu Mobile - Toggle
// ========================================
function inicializarMenuMobile() {
    const menuBtn = document.getElementById('menuBtn');
    const overlay = document.getElementById('mobileOverlay');

    if (!menuBtn || !overlay) return;

    const toggle = () => {
        overlay.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    };

    menuBtn.addEventListener('click', toggle);

    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

// ========================================
// Scroll Suave e Ativo no Menu
// ========================================
function inicializarScrollSuave() {
    // Adiciona scroll suave para todos os links âncora
    const linksAncora = document.querySelectorAll('a[href^="#"]');
    
    linksAncora.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios ou apenas "#"
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calcula o offset do header fixo
                const headerHeight = document.querySelector('.topbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                // Faz o scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Destaque do menu ativo
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-desktop a');
    
    function ativarLinkMenu() {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', ativarLinkMenu);
}

// ========================================
// Animação de Entrada dos Elementos
// ========================================
function inicializarAnimacoes() {
    const elementos = document.querySelectorAll('.projeto-card, .skill-card, .contato-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementos.forEach(elemento => observer.observe(elemento));
}

// ========================================
// Função de Log de Informações (Console)
// ========================================
function exibirInfoProjetos() {
    console.log('%c📚 Portfólio - Wildemar Pedro Leal', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log(`%c✨ Total de projetos: ${projetos.length}`, 'font-size: 14px; color: #10b981;');
    console.log('%c🔧 Tecnologias utilizadas:', 'font-size: 14px; font-weight: bold; color: #f59e0b;');
    
    // Extrai todas as tecnologias únicas
    const tecnologias = [...new Set(projetos.flatMap(p => p.tecnologias))];
    console.log(tecnologias.join(', '));
    
    console.log('\n%c📊 Lista de Projetos:', 'font-size: 14px; font-weight: bold; color: #8b5cf6;');
    projetos.forEach((projeto, index) => {
        console.log(`${index + 1}. ${projeto.titulo} - ${projeto.tecnologias.join(', ')}`);
    });
}

// ========================================
// Inicialização quando o DOM estiver pronto
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza os projetos
    renderizarProjetos();
    
    // Inicializa o menu mobile
    inicializarMenuMobile();
    
    // Inicializa scroll suave
    inicializarScrollSuave();
    
    // Inicializa animações
    setTimeout(() => {
        inicializarAnimacoes();
    }, 300);
    
    // Exibe informações no console
    exibirInfoProjetos();
    
    console.log('%c✅ Portfólio carregado com sucesso!', 'font-size: 14px; font-weight: bold; color: #10b981;');
});

// ========================================
// Exportar para uso em outros módulos (opcional)
// ========================================
// Se você usar módulos ES6 no futuro, pode descomentar:
// export { projetos, renderizarProjetos, criarCardProjeto };
