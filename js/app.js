const yearEL = document.querySelector('.year');
const currentyear = new Date().getFullYear();
yearEL.textContent = currentyear;

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal('.home_content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home_img, .slide-container, .portfolio_box, .portfolio_btn, .contact form',
  {
    origin: 'bottom',
  }
);
ScrollReveal().reveal('.home_content h1, .about_img', { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content', { origin: 'right' });

const typed = new Typed('.multiple_text', {
  strings: ['Frontend Developer', 'Web Developer', 'Frontend Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
