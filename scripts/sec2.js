// Section 2 — cardtextfield 등장 모션
document.addEventListener('DOMContentLoaded', () => {
  const section2 = document.getElementById('experience');
  if (!section2) return;

  const selectors = [
    '.cardtextfield-4',
    '.cardtextfield',
    '.cardtextfield-5',
    '.cardtextfield-2',
    '.cardtextfield-6',
    '.cardtextfield-3',
  ];

  const fields = selectors.map(s => document.querySelector(s)).filter(Boolean);

  let timers = [];
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      timers.forEach(clearTimeout);
      timers = fields.map((el, i) =>
        setTimeout(() => el.classList.add('ctf-visible'), i * 120)
      );
    } else {
      timers.forEach(clearTimeout);
      timers = [];
      fields.forEach(el => el.classList.remove('ctf-visible'));
    }
  }, { threshold: 0.15 });

  observer.observe(section2);
});
