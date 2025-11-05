const navList = document.querySelector('.sidebar__nav-list');
const navItem = document.querySelector('.sidebar__nav-item--active');

navList.addEventListener('mouseenter', () => {
  navItem.classList.remove('sidebar__nav-item--active');
});
navList.addEventListener('mouseleave', () => {
  navItem.classList.add('sidebar__nav-item--active');
});
