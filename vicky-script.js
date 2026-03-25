/* =============================================================
   SITE 1 — AMBER PORTFOLIO — Script
   Populates content from shared config.js
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const C = CONFIG;

  // ─── Populate simple data-cfg fields ───
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const key = el.dataset.cfg;
    if (C[key] !== undefined) el.textContent = C[key];
  });

  // ─── Hero title (Person's Name) ───
  const nameParts = C.fullName.split(' ');
  const nameLast = nameParts.pop();
  document.getElementById('hero-title').innerHTML =
    `<span class="line">${nameParts.join(' ')}</span><span class="line accent-text">${nameLast}</span>`;

  // ─── Hero photo / initials ───
  const photoFrame = document.getElementById('hero-photo');
  const initialsEl = document.getElementById('hero-initials');
  if (C.heroPhoto) {
    const img = document.createElement('img');
    img.src = C.heroPhoto;
    img.alt = C.fullName;
    img.className = 'photo-img';
    photoFrame.prepend(img);
    initialsEl.style.display = 'none';
  } else {
    const initials = C.fullName.split(' ').map(w => w[0]).join('');
    initialsEl.textContent = initials;
  }

  // ─── About title ───
  document.getElementById('about-title').innerHTML =
    `The <span class="accent-text">${C.challengeTitle.replace('The ', '')}</span>`;

  // ─── About cards ───
  const aboutGrid = document.getElementById('about-grid');
  C.cards.forEach((card, i) => {
    aboutGrid.innerHTML += `
      <div class="about-card reveal" data-delay="${i * 100}">
        <div class="card-icon"><span class="material-symbols-rounded">${card.icon}</span></div>
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
      </div>`;
  });

  // ─── Screens title & cards ───
  const sParts = C.screensTitle.split(' ');
  const sLast = sParts.pop();
  document.getElementById('screens-title').innerHTML =
    `${sParts.join(' ')} <span class="accent-text">${sLast}</span>`;
  const screensEl = document.getElementById('screens-carousel');
  C.screens.forEach((s, i) => {
    screensEl.innerHTML += `
      <div class="screen-card reveal" data-delay="${i * 100}">
        <div class="screen-phone"><img src="../assets/${s.img}" alt="${s.title}"></div>
        <div class="screen-meta">
          <span class="screen-num">${s.num}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      </div>`;
  });

  // ─── Tech stack ───
  const techEl = document.getElementById('tech-row');
  C.tech.forEach((t, i) => {
    techEl.innerHTML += `
      <div class="tech-chip reveal" data-delay="${i * 50}">
        <span class="material-symbols-rounded">${t.icon}</span>${t.name}
      </div>`;
  });

  // ─── CTA ───
  const ctaAccent = C.ctaAccent || '';
  document.getElementById('cta-title').innerHTML = ctaAccent
    ? C.ctaTitle.replace(new RegExp(`(${ctaAccent})`, 'i'), '<span class="accent-text">$1</span>')
    : C.ctaTitle;
  document.querySelector('#cta-btn-primary span:last-child').textContent = C.ctaPrimary;
  document.querySelector('#cta-btn-secondary span:last-child').textContent = C.ctaSecondary;
  document.querySelector('#cta-btn-primary').href = `mailto:${C.email}`;

  // ─── Footer ───
  document.getElementById('footer-year').textContent = `© ${C.year}`;

  // ─── Sticky nav ───
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── Reveal on scroll ───
  const initReveals = () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => observer.observe(el));
  };
  initReveals();

  // ─── Smooth scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ─── Parallax hero device ───
  const device = document.querySelector('.hero-device');
  if (device) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) device.style.transform = `translateY(${y * 0.08}px)`;
    });
  }
});
