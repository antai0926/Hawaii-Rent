const header = document.querySelector('header');
window.addEventListener('scroll', (e) => {
  if (window.pageYOffset !== 0) {
    header.classList.add('dynamicHeader');
  } else {
    header.classList.remove('dynamicHeader');
  }
});
