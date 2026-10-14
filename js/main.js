// Adhithyan S portfolio site interactions.
// No frameworks, vanilla JS only, built to run directly on GitHub Pages.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------- Scroll spy for active nav link ---------- */
  const sections = document.querySelectorAll('main .section, .hero');
  const navItems = document.querySelectorAll('.nav-link');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach((item) => {
          item.classList.toggle('active', item.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach((section) => spyObserver.observe(section));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 40);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Animated stat counters ---------- */
  const statEls = document.querySelectorAll('.stat-num');
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statEls.forEach((el) => statObserver.observe(el));

  /* ---------- CPENT progress bars ---------- */
  const progressEls = document.querySelectorAll('.progress-fill');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const pct = entry.target.getAttribute('data-progress');
        entry.target.style.width = pct + '%';
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  progressEls.forEach((el) => progressObserver.observe(el));

  /* ---------- Typing effect in hero ---------- */
  const typedEl = document.getElementById('typed');
  const phrases = [
    'Penetration Tester.',
    'CPENT v2 and CEH v13 Certified.',
    'Active Directory. Binaries. Firmware. Web apps.',
    'I document what I break.'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeTick = () => {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeTick, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeTick, deleting ? 30 : 55);
  };
  typeTick();

});
