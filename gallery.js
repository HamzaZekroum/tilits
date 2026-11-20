const photos = Array.from(document.querySelectorAll('[data-photo]'));
const lightbox = document.querySelector('#lightbox');
const largePhoto = lightbox.querySelector('img');
const controls = lightbox.querySelector('.gallery-controls');
let current = 0;

function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  const photo = photos[current];
  largePhoto.src = photo.href;
  largePhoto.alt = photo.querySelector('img').alt;
}

controls.hidden = photos.length < 2;
photos.forEach((photo, index) => {
  photo.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof lightbox.showModal !== 'function') return;
    event.preventDefault();
    showPhoto(index);
    lightbox.showModal();
  });
});
controls.addEventListener('click', (event) => {
  const button = event.target.closest('[data-step]');
  if (button) showPhoto(current + Number(button.dataset.step));
});
lightbox.addEventListener('keydown', (event) => {
  if (photos.length < 2) return;
  if (event.key === 'ArrowLeft') showPhoto(current - 1);
  if (event.key === 'ArrowRight') showPhoto(current + 1);
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
