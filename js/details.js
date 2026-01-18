document.querySelectorAll('.accordion').forEach(details => {
  const summary = details.querySelector('summary');
  const content = summary.nextElementSibling;

  details.open = false;
  content.style.height = '0px';

  summary.addEventListener('click', e => {
    e.preventDefault();

    const isOpen = details.open;
    details.dataset.animating = '';

    if (!isOpen) {
      details.open = true;
      const height = content.scrollHeight;

      content.style.height = '0px';
      requestAnimationFrame(() => {
        content.style.height = height + 'px';
      });

      content.addEventListener('transitionend', function handler() {
        content.style.height = 'auto';
        details.removeAttribute('data-animating');
        content.removeEventListener('transitionend', handler);
      });
    } else {
      const height = content.scrollHeight;
      content.style.height = height + 'px';

      requestAnimationFrame(() => {
        content.style.height = '0px';
      });

      content.addEventListener('transitionend', function handler() {
        details.open = false;
        details.removeAttribute('data-animating');
        content.removeEventListener('transitionend', handler);
      });
    }
  });
});
