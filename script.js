const carousel = document.querySelector('.carousel');

const items = Array.from(carousel.children);
items.forEach(item => {
  const clone = item.cloneNode(true);
  carousel.appendChild(clone);
});

let scrollAmount = 0;
const scrollStep = 1;

function autoScroll() {
  scrollAmount += scrollStep;
  if (scrollAmount >= carousel.scrollWidth / 2) {
    scrollAmount = 0;
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollLeft += scrollStep;
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();
