function scrollSuave() {
  const nav = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.path[0].getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  nav.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}
scrollSuave();

function animaAoScroll() {
  const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sections = document.querySelectorAll('[data-anima]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;
    const animaClass = 'anima';

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add(animaClass);
        else if (section.classList.contains(animaClass))
          section.classList.remove(animaClass);
      });
    }
    animaScroll();

    window.addEventListener(
      'scroll',
      debounce(() => {
        animaScroll();
      }, 50),
    );
  }
}
animaAoScroll();
