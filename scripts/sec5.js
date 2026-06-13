// Section 5 — 카드 플립
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('sec5Card');
  if (!card) return;
  card.addEventListener('click', function () {
    this.classList.toggle('flipped');
  });
});
