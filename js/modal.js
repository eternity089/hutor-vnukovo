document.addEventListener('DOMContentLoaded', () => {

  /**
   * Универсальная функция открытия модального окна
   * @param {string} templateId - id template
   */
  function openModal(templateId) {
    // если уже есть модалка — закрываем
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const template = document.getElementById(templateId);
    if (!template) {
      console.error(`Template ${templateId} не найден`);
      return;
    }

    const fragment = template.content.cloneNode(true);
    const modal = fragment.querySelector('.modal-overlay');
    const closeBtn = fragment.querySelector('.close-btn');

    if (!modal || !closeBtn) {
      console.error('Модальное окно собрано некорректно');
      return;
    }

    document.body.appendChild(fragment);

    // закрытие по кнопке
    closeBtn.addEventListener('click', () => {
      modal.remove();
    });

    // закрытие по клику на оверлей
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // переход на логин
    modal.querySelector('.to-login')?.addEventListener('click', (e) => {
      e.preventDefault();
      modal.remove();
      openModal('modal-login');
    });

    // переход на регистрацию
    modal.querySelector('.to-register')?.addEventListener('click', (e) => {
      e.preventDefault();
      modal.remove();
      openModal('modal-reg');
    });
  }

  // кнопка открытия регистрации
  const openRegBtn = document.getElementById('openModalReg');
  openRegBtn?.addEventListener('click', () => {
    openModal('modal-reg');
  });

  // кнопка открытия логина
  const openLoginBtn = document.getElementById('openModalLogin');
  openLoginBtn?.addEventListener('click', () => {
    openModal('modal-login');
  });

});



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
