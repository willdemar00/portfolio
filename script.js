// ============================
// Navigation Toggle (mobile)
// ============================
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav when a link is clicked
navList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================
// Active nav link on scroll
// ============================
const sections = document.querySelectorAll('section[id], div[id="top"]');
const navLinks = document.querySelectorAll('.nav__link');

const observerOptions = {
  root: null,
  // --nav-h is a static value (64px) defined in CSS and not changed at runtime
  rootMargin: `-${getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-h').trim()} 0px -60% 0px`,
  threshold: 0
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('section[id]').forEach(sec => sectionObserver.observe(sec));

// ============================
// Fade-in on scroll
// ============================
const fadeElements = document.querySelectorAll(
  '.section__title, .section__subtitle, .about__avatar, .about__text, ' +
  '.skill-category, .project-card, .contact__info, .contact__form, .tech-tags'
);

fadeElements.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

// ============================
// Skill bars animation
// ============================
const skillFills = document.querySelectorAll('.skill-item__fill');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const level = entry.target.dataset.level;
      entry.target.style.width = `${level}%`;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ============================
// Footer year
// ============================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================
// Contact form validation
// ============================
const contactForm = document.getElementById('contactForm');

function getField(id) { return document.getElementById(id); }
function getError(id) { return document.getElementById(id + 'Error'); }

function showError(fieldId, message) {
  const field = getField(fieldId);
  const error = getError(fieldId);
  field.classList.add('invalid');
  if (error) error.textContent = message;
}

function clearError(fieldId) {
  const field = getField(fieldId);
  const error = getError(fieldId);
  field.classList.remove('invalid');
  if (error) error.textContent = '';
}

function validateEmail(value) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}

function validateForm() {
  let valid = true;

  const name = getField('name').value.trim();
  const email = getField('email').value.trim();
  const subject = getField('subject').value.trim();
  const message = getField('message').value.trim();

  clearError('name');
  clearError('email');
  clearError('subject');
  clearError('message');

  if (!name) {
    showError('name', 'Por favor, informe seu nome.');
    valid = false;
  }
  if (!email) {
    showError('email', 'Por favor, informe seu e-mail.');
    valid = false;
  } else if (!validateEmail(email)) {
    showError('email', 'E-mail inválido.');
    valid = false;
  }
  if (!subject) {
    showError('subject', 'Por favor, informe o assunto.');
    valid = false;
  }
  if (!message) {
    showError('message', 'Por favor, escreva sua mensagem.');
    valid = false;
  }

  return valid;
}

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const formSuccess = document.getElementById('formSuccess');

    if (validateForm()) {
      // Simulate submission (replace with real endpoint as needed)
      const submitBtn = contactForm.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensagem';
        formSuccess.hidden = false;
        setTimeout(() => { formSuccess.hidden = true; }, 5000);
      }, 1200);
    }
  });
}
