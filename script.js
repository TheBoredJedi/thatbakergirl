// script.js

const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel-indicators .dot');
const itemWidth = document.querySelector('.carousel-item').offsetWidth + 16;
let currentIndex = 0;
let autoScrollInterval;

function scrollToIndex(index) {
  carousel.scrollTo({
    left: index * itemWidth,
    behavior: 'smooth'
  });
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
  currentIndex = index;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    scrollToIndex(index);
    resetAutoScroll();
  });
});

function autoScroll() {
  const nextIndex = (currentIndex + 1) % dots.length;
  scrollToIndex(nextIndex);
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(autoScroll, 3000);
}

resetAutoScroll();
