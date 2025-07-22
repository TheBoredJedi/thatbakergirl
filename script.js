// script.js

const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel-indicators .dot');
const itemWidth = document.querySelector('.carousel-item').offsetWidth + 16;

function scrollToIndex(index) {
  carousel.scrollTo({
    left: index * itemWidth,
    behavior: 'smooth'
  });
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    scrollToIndex(index);
  });
});
