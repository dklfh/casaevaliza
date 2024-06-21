document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('[id^="modal-"]');
    const images = document.querySelectorAll('img[data-modal-target]');
  
    images.forEach((image) => {
      image.addEventListener('click', (event) => {
        const modalId = event.target.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.toggle('hidden');
      });
    });
  
    modals.forEach((modal) => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.add('hidden');
        }
      });
    });
  });