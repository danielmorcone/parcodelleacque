document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    e.preventDefault();
    document.querySelector('.page-wrapper').style.transition = 'opacity 0.2s ease';
    document.querySelector('.page-wrapper').style.opacity = '0';
    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});

const scrollHint = document.querySelector('.scroll-hint');
const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('.footer');

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

window.addEventListener('scroll', () => {
  if (scrollHint) {
    if (window.scrollY > 50) {
      scrollHint.style.opacity = '0';
      scrollHint.style.pointerEvents = 'none';
    } else {
      scrollHint.style.opacity = '1';
    }
  }

  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    if (footer) {
      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const scrollBottom = window.scrollY + window.innerHeight;
      if (scrollBottom >= footerTop) {
        const offset = scrollBottom - footerTop + 20;
        backToTop.style.bottom = `calc(4vw + ${offset}px)`;
      } else {
        backToTop.style.bottom = '4vw';
      }
    }
  }
});