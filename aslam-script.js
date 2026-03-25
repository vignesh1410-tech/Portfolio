/* =============================================================
   SITE 2 — EMERALD PORTFOLIO — Script
   Populates content from shared config.js
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const C = CONFIG;

  // ─── Populate simple data-cfg fields ───
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const key = el.dataset.cfg;
    if (C[key] !== undefined) el.textContent = C[key];
  });

  // ─── Nav Initial ───
  document.getElementById('nav-initial').textContent = C.name.charAt(0);

  // ─── Hero title (Person's Name) ───
  const nameParts = C.fullName.split(' ');
  const nameLast = nameParts.pop();
  document.getElementById('hero-title').innerHTML = `${nameParts.join(' ')}<br><span class="accent">${nameLast}</span>`;

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
  
  // ─── Hero CTA ───
  document.getElementById('hero-cta-btn').textContent = `${C.ctaPrimary} →`;
  document.getElementById('hero-cta-btn').href = `mailto:${C.email}`;

  // ─── Process section ───
  const procGrid = document.getElementById('process-grid');
  C.process.forEach((p, i) => {
    procGrid.innerHTML += `
      <div class="proc-card anim" data-delay="${i * 80}">
        <div class="proc-num">0${i + 1}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>`;
  });

  // ─── Showcase section ───
  const showList = document.getElementById('showcase-list');
  C.screens.forEach((s, i) => {
    const isReverse = i % 2 !== 0;
    showList.innerHTML += `
      <div class="show-row ${isReverse ? 'reverse' : ''} anim">
        <div class="show-phone"><img src="${s.img}" alt="${s.title}"></div>
        <div class="show-text">
          <span class="show-label">SCREEN ${s.num}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <div class="show-tags">
            ${s.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>`;
  });

  // ─── About / Challenge cards ───
  const aboutGrid = document.getElementById('about-grid');
  if (aboutGrid && C.cards) {
    C.cards.forEach((card, i) => {
      aboutGrid.innerHTML += `
        <div class="proc-card anim" data-delay="${i * 80}">
          <div class="proc-num"><span class="material-symbols-rounded">${card.icon}</span></div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>`;
    });
  }

  // ─── Tech stack ───
  const techRow = document.getElementById('stack-row');
  C.tech.forEach((t, i) => {
    techRow.innerHTML += `
      <div class="stack-pill anim" data-delay="${i * 40}">
        <span class="material-symbols-rounded">${t.icon}</span>${t.name}
      </div>`;
  });

  // ─── CTA ───
  const ctaAccent = C.ctaAccent || '';
  document.getElementById('cta-title').innerHTML = ctaAccent
    ? C.ctaTitle.replace(new RegExp(`(${ctaAccent})`, 'i'), '<span class="accent">$1</span>')
    : C.ctaTitle;
  document.querySelector('#cta-btn-primary span:last-child').textContent = C.ctaPrimary;
  document.querySelector('#cta-btn-secondary span:last-child').textContent = C.ctaSecondary;
  document.querySelector('#cta-btn-primary').href = `mailto:${C.email}`;

  // ─── Footer ───
  document.getElementById('footer-text').textContent = C.footerText;
  document.getElementById('footer-year').textContent = `© ${C.year}`;

  // ─── Sticky nav ───
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── Reveal on scroll ───
  const initReveals = () => {
    const anims = document.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    anims.forEach(el => observer.observe(el));
  };
  initReveals();

  // ─── Smooth scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ─── Tilt on hover for phone stack ───
  const phoneStack = document.querySelector('.phone-stack');
  if (phoneStack) {
    phoneStack.addEventListener('mousemove', (e) => {
      const rect = phoneStack.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      phoneStack.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    phoneStack.addEventListener('mouseleave', () => {
      phoneStack.style.transform = '';
      phoneStack.style.transition = 'transform 0.4s ease';
      setTimeout(() => { phoneStack.style.transition = ''; }, 400);
    });
  }
});
