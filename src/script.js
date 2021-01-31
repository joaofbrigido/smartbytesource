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

// function animaAoScroll() {
//   const sections = document.querySelectorAll('[data-anima]');
// }
// animaAoScroll();
