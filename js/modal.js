document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // Мобильное меню (бургер)
  // =========================
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  if (burger && mobileMenu && mobileMenuCloseBtn) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    mobileMenuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  } else {
    console.warn('Бургерное меню: один из элементов не найден на этой странице');
  }

  // =========================
  // Функция открытия модалок
  // =========================
  function openModal(templateId) {
    // закрываем уже открытые модалки
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const template = document.getElementById(templateId);
    if (!template) return;

    const fragment = template.content.cloneNode(true);
    const modal = fragment.querySelector('.modal-overlay');
    const closeBtn = fragment.querySelector('.close-btn');
    if (!modal || !closeBtn) return;

    document.body.appendChild(fragment);

    // закрытие по кнопке
    closeBtn.addEventListener('click', () => modal.remove());

    // закрытие по клику вне окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
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

  // =========================
  // Кнопки открытия модалок
  // (работают и на десктопе, и в бургерном меню)
  // =========================
  document.querySelectorAll('.open-reg, #openModalReg').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('modal-reg');
      mobileMenu?.classList.remove('active'); // закрываем меню при открытии модалки
    });
  });

  document.querySelectorAll('.open-login, #openModalLogin').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('modal-login');
      mobileMenu?.classList.remove('active'); // закрываем меню при открытии модалки
    });
  });

});
