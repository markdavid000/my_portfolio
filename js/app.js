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
  '.home_img, .slide-container, .portfolio_box, .portfolio_btn',
  {
    origin: 'bottom',
  }
);
ScrollReveal().reveal('.home_content h1, .about_img, .contact form .btn', {
  origin: 'left',
});
ScrollReveal().reveal('.home_content p, .about_content, .contact form', {
  origin: 'right',
});

const typed = new Typed('.multiple_text', {
  strings: ['Frontend Developer', 'Web Developer', 'Frontend Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const type = new Typed('.wlc_txt', {
  strings: [
    'WELCOME TO MY PORTFOLIO',
    'Where design meets code',
    'and',
    'User experience meets functionality',
  ],
  typeSpeed: 30,
  backSpeed: 30,
  backDelay: 800,
  loop: true,
});

const modeToggler = document.getElementById('mode-toggler');
const body = document.body;

modeToggler.addEventListener('click', () => {
  body.classList.toggle('light-mode');
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader_hidden');

    loader.addEventListener('transitionend', () => {
      document.body.removeChild(loader);
    });
  }, 10000);
});

const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#ffae00';
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);
