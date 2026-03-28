# 🌐 Portfólio Profissional - Wildemar Pedro Leal

Portfólio profissional desenvolvido como projeto acadêmico do curso de Tecnologia em Sistemas para Internet. Este projeto demonstra habilidades em desenvolvimento web front-end utilizando HTML5, CSS3 e JavaScript.

## 📋 Sobre o Projeto

Este é um portfólio responsivo que apresenta informações profissionais, habilidades técnicas e projetos desenvolvidos. O site foi construído seguindo as melhores práticas de desenvolvimento web e design responsivo.

### ✨ Características

- ✅ **HTML5 Semântico**: Estrutura clara com tags semânticas (header, nav, section, footer)
- ✅ **CSS3 Moderno**: Estilização com Flexbox e CSS Grid
- ✅ **Responsivo**: Design adaptável para desktop, tablet e mobile
- ✅ **JavaScript Dinâmico**: Renderização de projetos via array de objetos
- ✅ **Interatividade**: Menu mobile, scroll suave e animações
- ✅ **Acessibilidade**: Uso de atributos ARIA e estrutura semântica

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura e marcação semântica
- **CSS3**: Estilização, Flexbox, Grid, Media Queries
- **JavaScript (ES6+)**: Lógica de interação e manipulação do DOM
- **Font Awesome**: Ícones vetoriais
- **Git & GitHub**: Controle de versão
- **GitHub Pages**: Hospedagem estática

## 📂 Estrutura do Projeto

```
portfolio/
│
├── index.html          # Página principal do portfólio
├── css/
│   └── style.css      # Estilos CSS
├── js/
│   └── main.js        # Lógica JavaScript
├── img/               # Pasta para imagens (criar se necessário)
└── README.md          # Documentação do projeto
```

## 🚀 Como Executar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/willdemar00/portfolio.git
   cd portfolio
   ```

2. **Abra o arquivo `index.html`** em seu navegador:
   - Clique duas vezes no arquivo `index.html`, ou
   - Use uma extensão de Live Server no VS Code

## 📤 Como Publicar no GitHub

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **"New Repository"** (Novo Repositório)
3. Configure o repositório:
   - **Nome**: `portfolio` ou `willdemar00.github.io`
   - **Descrição**: "Meu portfólio profissional"
   - **Visibilidade**: Public (Público)
   - ✅ Marque **"Add a README file"** (Adicionar arquivo README) - NÃO marque
4. Clique em **"Create repository"** (Criar repositório)

### Passo 2: Enviar Código para o GitHub

No terminal/PowerShell, dentro da pasta do projeto:

```bash
# Inicializar repositório Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Versão inicial do portfólio"

# Conectar com o repositório remoto
git remote add origin https://github.com/willdemar00/portfolio.git

# Renomear branch para 'main' (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No seu repositório do GitHub, clique em **"Settings"** (Configurações)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"** (Origem):
   - Selecione **"Deploy from a branch"**
   - Branch: **`main`**
   - Pasta: **`/ (root)`**
4. Clique em **"Save"** (Salvar)
5. Aguarde alguns minutos e seu site estará disponível em:
   ```
   https://willdemar00.github.io/portfolio/
   ```
   ou, se o repositório for nomeado `willdemar00.github.io`:
   ```
   https://willdemar00.github.io/
   ```

## 🎨 Personalização

### Alterar Informações Pessoais

1. **No `index.html`**:
   - Atualize seu nome, curso e descrição
   - Adicione seus links de redes sociais (GitHub, LinkedIn, email)

2. **No `js/main.js`**:
   - Edite o array `projetos` com seus próprios projetos
   - Atualize os links do GitHub e demos

### Adicionar Novos Projetos

No arquivo `js/main.js`, adicione novos objetos ao array `projetos`:

```javascript
const projetos = [
    // ... projetos existentes
    {
        id: 7,
        titulo: "Meu Novo Projeto",
        descricao: "Descrição do projeto...",
        tecnologias: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/usuario/projeto",
        demoLink: "https://projeto.com",
        icone: "🚀"
    }
];
```

### Alterar Cores

No arquivo `css/style.css`, modifique as variáveis CSS:

```css
:root {
    --primary-color: #2563eb;    /* Cor primária */
    --accent-color: #f59e0b;      /* Cor de destaque */
    /* ... outras cores */
}
```

## 📱 Funcionalidades

### Menu de Navegação
- Menu fixo no topo
- Responsivo com menu hambúrguer em dispositivos móveis
- Links com scroll suave para as seções

### Seções

1. **Home/Hero**: Apresentação inicial com call-to-action
2. **Sobre Mim**: Informações pessoais e habilidades técnicas
3. **Projetos**: Grid de projetos renderizados dinamicamente
4. **Contato**: Informações de contato e redes sociais

### Interatividade JavaScript

- ✅ Renderização dinâmica de projetos a partir de array
- ✅ Menu mobile toggle
- ✅ Scroll suave entre seções
- ✅ Animações ao scroll
- ✅ Logs informativos no console

## 📝 Checklist de Entrega

- [x] HTML5 com estrutura semântica
- [x] CSS3 com Flexbox/Grid
- [x] Responsividade para mobile
- [x] JavaScript com array de objetos
- [x] Renderização dinâmica de projetos
- [x] Repositório público no GitHub
- [x] Publicação no GitHub Pages
- [ ] PDF com links (repositório + GitHub Pages)

## 🔗 Links

- **Repositório GitHub**: [https://github.com/willdemar00/portfolio](https://github.com/willdemar00/portfolio)
- **Site Publicado**: [https://willdemar00.github.io/portfolio/](https://willdemar00.github.io/portfolio/)

## 👤 Autor

**Wildemar Pedro Leal**
- Curso: Tecnologia em Sistemas para Internet
- GitHub: [@willdemar00](https://github.com/willdemar00)
- LinkedIn: [Wildemar Pedro Leal](https://www.linkedin.com/in/wildemar-leal-a504b4254/)
- Email: willeal17@gmail.com

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

---

⭐ **Desenvolvido com dedicação para o trabalho da faculdade** ⭐
