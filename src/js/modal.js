// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//     backdrop: document.querySelector('[data-backdrop]'),
//     links: document.querySelectorAll('.modal-nav-link'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   refs.backdrop.addEventListener('click', closeModal);

//   refs.links.forEach(link => {
//     if (link) {
//       link.addEventListener('click', closeModal);
//     }
//   });

//   function closeModal() {
//     refs.modal.classList.add('is-hidden');
//     refs.closeModalBtn.classList.add('is-hidden');
//     refs.backdrop.classList.add('is-hidden');
//   }

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.closeModalBtn.classList.toggle('is-hidden');
//     refs.backdrop.classList.toggle('is-hidden');
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
    links: document.querySelectorAll('.modal-nav-link'),
    header: document.querySelector('.header'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.backdrop.addEventListener('click', closeModal);

  refs.links.forEach(link => {
    if (link) {
      link.addEventListener('click', closeModal);
    }
  });

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.closeModalBtn.classList.remove('is-hidden');
    refs.backdrop.classList.remove('is-hidden');
    refs.header.classList.add('is-hidden'); // ховати хедер при відкритті модалки
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.closeModalBtn.classList.add('is-hidden');
    refs.backdrop.classList.add('is-hidden');
    refs.header.classList.remove('is-hidden'); // показати хедер при закритті
  }
})();
