const toggleButton = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-link');

export function toggleBurgerMenu() {
  toggleButton.addEventListener('click', function () {
    headerNav.classList.toggle('is-closed');
    headerNav.classList.toggle('is-opened');
    const isOpened = headerNav.classList.contains('is-opened');
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function () {
      headerNav.classList.remove('is-opened');
      headerNav.classList.add('is-closed');
      document.body.style.overflow = '';
    });
  });


  function handleResize() {
    headerNav.classList.remove('is-opened');
    headerNav.classList.add('is-closed');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    const isClickInsideMenu = headerNav.contains(e.target);
    const isClickOnToggleButton = toggleButton.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggleButton) {
      headerNav.classList.remove('is-opened');
      headerNav.classList.add('is-closed');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('resize', handleResize);

}
