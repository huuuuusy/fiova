'use strict';
const chips = document.querySelectorAll('.chip[data-target]');
const examples = document.querySelectorAll('.example');
if (chips.length) {
  const show = id => {
    chips.forEach(chip => chip.setAttribute('aria-pressed', String(chip.dataset.target === id)));
    examples.forEach(example => {
      example.hidden = example.id !== id;
      if (example.hidden) example.querySelectorAll('video').forEach(video => video.pause());
    });
  };
  chips.forEach(chip => chip.addEventListener('click', () => show(chip.dataset.target)));
  show(chips[0].dataset.target);
}
const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const navTargets = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && navTargets.length) {
  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    const current = navTargets.find(target => visible.has(target));
    navLinks.forEach(link => link.classList.toggle('active', !!current && link.getAttribute('href') === '#' + current.id));
  }, {rootMargin: '-45% 0px -50% 0px'});
  navTargets.forEach(target => observer.observe(target));
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
