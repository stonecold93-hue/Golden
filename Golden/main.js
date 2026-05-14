// Golden — main.js
// Prêt pour ajouter des interactions futures

document.addEventListener('DOMContentLoaded', () => {
  // Hover glow effect sur les mini logos
  const minis = document.querySelectorAll('.mini');
  minis.forEach(mini => {
    mini.addEventListener('mouseenter', () => {
      mini.style.transition = 'transform .2s, opacity .2s';
    });
  });
});
