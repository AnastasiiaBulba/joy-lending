const content = document.querySelector('.historie-wrap-content');
const cards = document.querySelectorAll('.historie-card');
const dotsContainer = document.querySelector('.dots');
const progressLine = document.querySelector('.progress-line');

let currentIndex = 0;
let visibleCards = window.innerWidth >= 1440 ? 3 : 1;

function updateSlider() {
  visibleCards = window.innerWidth >= 1440 ? 3 : 1;
  const cardWidth = cards[0].offsetWidth + 24;

  content.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  if (dotsContainer) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  if (window.innerWidth >= 1440 && progressLine) {
    const maxSteps = cards.length - visibleCards;
    const percentage =
      maxSteps > 0 ? ((currentIndex + visibleCards) / cards.length) * 100 : 0;
    progressLine.style.setProperty('--progress', `${percentage}%`);
  }
}

function createDots() {
  dotsContainer.innerHTML = '';
  const dotCount = cards.length - visibleCards + 1;

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}

function handleResize() {
  const wasDesktop = visibleCards === 3;
  visibleCards = window.innerWidth >= 1440 ? 3 : 1;
  const maxIndex = cards.length - visibleCards;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  if (visibleCards === 1) {
    createDots();
    dotsContainer.style.display = 'flex';
    progressLine.style.display = 'none';
  } else {
    dotsContainer.style.display = 'none';
    progressLine.style.display = 'block';
  }

  updateSlider();
}

// Swipe
let startX = 0;
content.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
content.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientX - startX;
  const maxIndex = cards.length - visibleCards;

  if (diff > 50 && currentIndex > 0) {
    currentIndex--;
    updateSlider();
  } else if (diff < -50 && currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

// Клік по лінії
progressLine.addEventListener('click', e => {
  if (window.innerWidth < 1440) return;
  const rect = progressLine.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const progress = clickX / rect.width;
  const maxIndex = cards.length - visibleCards;
  currentIndex = Math.round(progress * maxIndex);
  updateSlider();
});

// перетягування мишкою
let isDragging = false;
let dragStartX = 0;
let dragCurrentX = 0;

content.addEventListener('mousedown', e => {
  if (window.innerWidth < 1440) return;
  isDragging = true;
  dragStartX = e.clientX;
  content.style.transition = 'none';
  content.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  dragCurrentX = e.clientX;
  const dragOffset = dragCurrentX - dragStartX;
  const cardWidth = cards[0].offsetWidth + 24;
  const translateX = -currentIndex * cardWidth + dragOffset;
  content.style.transform = `translateX(${translateX}px)`;
});

document.addEventListener('mouseup', e => {
  if (!isDragging) return;
  isDragging = false;
  content.style.transition = 'transform 0.3s ease';
  content.style.cursor = 'grab';

  const dragOffset = e.clientX - dragStartX;
  const maxIndex = cards.length - visibleCards;

  if (dragOffset > 50 && currentIndex > 0) {
    currentIndex--;
  } else if (dragOffset < -50 && currentIndex < maxIndex) {
    currentIndex++;
  }

  updateSlider();
});

handleResize();
window.addEventListener('resize', handleResize);
