const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('figcaption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

if (lightbox && lightboxImage && lightboxCaption) {
  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      lightboxImage.src = item.dataset.image || '';
      lightboxImage.alt = item.dataset.alt || '';
      lightboxCaption.textContent = item.dataset.caption || '';
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('show')) closeLightbox();
  });
}
