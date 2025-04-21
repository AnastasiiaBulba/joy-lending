document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#modal-cookies');
  const acceptBtn = document.querySelector('.modal-cookies-accept');
  const declineBtn = document.querySelector('.modal-cookies-decline');
  const backdrop = document.querySelector('[data-backdrop]');

  const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

  if (!hasAcceptedCookies) {
    showModal();
  }

  function showModal() {
    modal.classList.remove('is-hidden');
  }

  function hideModal() {
    modal.classList.add('is-hidden');
    localStorage.setItem('cookiesAccepted', 'true');
  }

  acceptBtn.addEventListener('click', hideModal);
  declineBtn.addEventListener('click', hideModal);

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      hideModal();
    }
  });
});
