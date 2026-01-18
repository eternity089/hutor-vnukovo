// Кнопки, которые открывают форму бронирования
document.querySelectorAll('.modal').forEach(btn => {
  btn.addEventListener('click', () => {
    openModal('modal-template', 'modal');
  });
});

function openModal(templateId, modalId) {
  let modal = document.getElementById(modalId);

  // если модалки ещё нет — создаём из template
  if (!modal) {
    const template = document.getElementById(templateId);
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);

    modal = document.getElementById(modalId);

    // закрытие по клику на крестик
    modal.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', () => closeModal(modalId));
    });

    // закрытие по клику на оверлей
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal(modalId);
    });

    // логика формы
    if (modalId === 'modal') {
      const form = modal.querySelector('#form');

      form.addEventListener('submit', e => {
        e.preventDefault();

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        closeModal('modal');

        // открываем success-модалку
        openModal('modal-success-template', 'modal-success');
      });
    }
  }

  // плавное появление
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove('active');
}


// бургерное меню

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
