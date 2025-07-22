// script.js

const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel-indicators .dot');
const itemWidth = document.querySelector('.carousel-item').offsetWidth + 16;
let currentIndex = 0;
let autoScrollInterval;
let isUserInteracting = false;

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
  if (!isUserInteracting) {
    const nextIndex = (currentIndex + 1) % dots.length;
    scrollToIndex(nextIndex);
  }
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(autoScroll, 3000);
}

carousel.addEventListener('touchstart', () => {
  isUserInteracting = true;
  clearInterval(autoScrollInterval);
});

carousel.addEventListener('touchend', () => {
  isUserInteracting = false;
  resetAutoScroll();
});

resetAutoScroll();

// Inject dynamic background
const imageSources = [
  'photos/bentocake.webp',
  'photos/brownies.webp',
  'photos/bundt.webp',
  'photos/cinnamonrolls.webp',
  'photos/tiramisu.webp',
  'photos/carrotcake.webp',
  'photos/chocchunk.webp',
  'photos/chocchunkbrownies.webp',
  'photos/chocoandberries.webp',
  'photos/chocobiscoff.webp'
];

const bgContainer = document.querySelector('.background-composite');
imageSources.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.style.top = `${Math.random() * 100}%`;
  img.style.left = `${Math.random() * 100}%`;
  img.style.animationDelay = `${i * 5}s`;
  bgContainer.appendChild(img);
});
