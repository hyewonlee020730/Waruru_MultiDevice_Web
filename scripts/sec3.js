// Section 3 — 앱 아이콘 글로우 모션
document.addEventListener('DOMContentLoaded', () => {
  const section3 = document.getElementById('archive');
  const iconWrapper = document.querySelector('.app-icon-wrapper');
  if (!section3 || !iconWrapper) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      iconWrapper.classList.add('glow-visible');
    } else {
      iconWrapper.classList.remove('glow-visible');
    }
  }, { threshold: 0.15 });

  observer.observe(section3);
});
