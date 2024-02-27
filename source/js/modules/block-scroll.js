const toggleButton = document.querySelector('.header__toggle');
const navMenu = document.querySelector('.header__nav');

toggleButton.addEventListener('click', function () {
  navMenu.classList.toggle('is-opened');
  const isOpened = navMenu.classList.contains('is-opened');

  if (isOpened) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
