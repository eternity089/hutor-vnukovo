const slider = document.querySelector('.slider');

let isDown = false;
let startX;
let startScrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();

  const walk = e.pageX - startX;
  slider.scrollLeft = startScrollLeft - walk;
});

['mouseup', 'mouseleave'].forEach(event =>
  slider.addEventListener(event, () => {
    isDown = false;
  })
);

