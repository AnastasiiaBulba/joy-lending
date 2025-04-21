function initSlider(wrapperSelector, itemSelector, paginationSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  const items = wrapper.querySelectorAll(itemSelector);
  const pagination = document.querySelector(paginationSelector);
  let currentIndex = 0;

  if (!wrapper || !items.length || !pagination) return;

  pagination.innerHTML = '';
  items.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showItem(index));
    pagination.appendChild(dot);
  });

  function showItem(index) {
    items.forEach(item => item.classList.remove('active'));
    pagination
      .querySelectorAll('.dot')
      .forEach(dot => dot.classList.remove('active'));

    items[index].classList.add('active');
    pagination.querySelectorAll('.dot')[index].classList.add('active');
    currentIndex = index;
  }

  let startX = 0;
  wrapper.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  wrapper.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < items.length - 1) {
        showItem(currentIndex + 1);
      } else if (diffX < 0 && currentIndex > 0) {
        showItem(currentIndex - 1);
      }
    }
  });

  showItem(0);
}

document.addEventListener('DOMContentLoaded', function () {
  // Ініціалізація для першого слайдера (твій "nasze")
  initSlider('.nasze-wrap-content', '.nasze-text', '.pagination');

  // Можна додати інші слайдери, наприклад:
  initSlider(
    '.treningi-wrap-content',
    '.treningi-text',
    '.treningi-pagination'
  );

  initSlider('.cennik-wrap-content', '.cennik-text', '.cennik-pagination');
});
