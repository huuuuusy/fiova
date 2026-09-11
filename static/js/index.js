'use strict';
const chooser = document.querySelector('#example-select');
const examples = document.querySelectorAll('.example');
if (chooser) {
  const update = () => examples.forEach(example => { example.hidden = example.id !== chooser.value; if (example.hidden) example.querySelectorAll("video").forEach(video => video.pause()); });
  chooser.addEventListener('change', update);
  update();
}
const dialog = document.querySelector('#figure-dialog');
let opener;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.figure-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      const source = link.querySelector('img');
      const image = dialog.querySelector('img');
      image.src = link.href;
      image.alt = source.alt;
      document.querySelector('#figure-description').textContent = source.alt;
      dialog.showModal();
      dialog.scrollTop = 0;
      dialog.scrollLeft = 0;
    });
  });
  document.querySelector('#close-figure').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { if (opener) opener.focus({preventScroll:true}); });
}
