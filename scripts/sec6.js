// Section 6 — row / list-m 등장 모션
document.addEventListener('DOMContentLoaded', () => {
  const section6 = document.getElementById('writing-kit');
  if (!section6) return;

  const selectors = [
    '.sec6-list-m-1',
    '.sec6-row-1',
    '.sec6-list-m-2',
    '.sec6-row-2',
    '.sec6-list-m-3',
    '.sec6-row-3',
  ];

  const items = selectors.map(s => document.querySelector(s)).filter(Boolean);

  let timers = [];
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      timers.forEach(clearTimeout);
      timers = items.map((el, i) =>
        setTimeout(() => el.classList.add('s6-visible'), i * 120)
      );
    } else {
      timers.forEach(clearTimeout);
      timers = [];
      items.forEach(el => el.classList.remove('s6-visible'));
    }
  }, { threshold: 0.15 });

  observer.observe(section6);
});
