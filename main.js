// Nav: solid state on scroll
const nav = document.getElementById('nav');
function updateNav() {
  nav.classList.toggle('solid', window.scrollY > 50);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu
const burger   = document.getElementById('burger');
const navMob   = document.getElementById('nav-mobile');
const mobLinks = navMob.querySelectorAll('a');

burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  navMob.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

function closeMenu() {
  burger.setAttribute('aria-expanded', 'false');
  navMob.classList.remove('open');
  document.body.style.overflow = '';
}

mobLinks.forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMob.classList.contains('open')) closeMenu();
});

// Hero: pan-in + staggered text
window.addEventListener('load', () => {
  document.getElementById('heroBg').classList.add('ready');
  document.querySelectorAll('[data-h]').forEach(el => el.classList.add('in'));
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-r]').forEach(el => io.observe(el));
