// utils.js — 공통 유틸리티

/**
 * 섹션 진입 시 요소들을 순차적으로 등장시키는 IntersectionObserver 헬퍼.
 * @param {string} sectionId   - 감지할 섹션의 id
 * @param {string[]} selectors - 순서대로 등장시킬 CSS 셀렉터 배열
 * @param {string} visibleClass - 등장 시 추가할 클래스명
 * @param {{ threshold?: number, delay?: number }} options
 */
function staggerReveal(sectionId, selectors, visibleClass, options = {}) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const { threshold = 0.15, delay = 120 } = options;
  const elements = selectors.map(s => document.querySelector(s)).filter(Boolean);

  let timers = [];
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      timers.forEach(clearTimeout);
      timers = elements.map((el, i) =>
        setTimeout(() => el.classList.add(visibleClass), i * delay)
      );
    } else {
      timers.forEach(clearTimeout);
      timers = [];
      elements.forEach(el => el.classList.remove(visibleClass));
    }
  }, { threshold });

  observer.observe(section);
}
