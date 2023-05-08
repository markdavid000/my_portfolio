const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

const alternateStyles = document.querySelectorAll('.alternate-style');
const setActiveStyle = color => {
  alternateStyles.forEach(style => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });

  localStorage.setItem('selectedColor', color);
};

const selectedColor = localStorage.getItem('selectedColor');
if (selectedColor) {
  setActiveStyle(selectedColor);
}
