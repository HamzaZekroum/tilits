const clipLinks = Array.from(document.querySelectorAll('[data-clip]'));
const clipDialog = document.querySelector('#clip-player');
const clipVideo = clipDialog.querySelector('video');
const clipTitle = document.querySelector('#clip-title');
let activeClip = 0;

function playClip(index) {
  activeClip = (index + clipLinks.length) % clipLinks.length;
  const link = clipLinks[activeClip];
  clipTitle.textContent = link.getAttribute('aria-label');
  clipVideo.poster = link.querySelector('img').src;
  clipVideo.src = link.href;
  clipVideo.play().catch(() => {
    // Native controls remain available if the browser blocks automatic playback.
  });
}

clipLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof clipDialog.showModal !== 'function') return;
    event.preventDefault();
    clipDialog.showModal();
    playClip(index);
  });
});

clipDialog.querySelectorAll('[data-clip-step]').forEach((button) => {
  button.addEventListener('click', () => playClip(activeClip + Number(button.dataset.clipStep)));
});

clipDialog.addEventListener('click', (event) => {
  if (event.target === clipDialog) clipDialog.close();
});

clipDialog.addEventListener('close', () => {
  clipVideo.pause();
  clipVideo.removeAttribute('src');
  clipVideo.removeAttribute('poster');
  clipVideo.load();
  clipLinks[activeClip].focus({ preventScroll: true });
});
