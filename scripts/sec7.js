// Section 7 — 폰 목업 자동 스크롤
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const scrollArea = document.getElementById('sec7ScrollArea');
    const btn = document.getElementById('sec7ScrollBtn');
    // sec7ScrollBtn이 HTML에 존재하지 않아 btn이 null일 수 있음 — 안전하게 처리
    if (!scrollArea) return;

    // 폰 위에서 마우스 휠 시 페이지 스냅 이동 방지 (내부 스크롤 허용)
    scrollArea.addEventListener('wheel', (e) => {
      if (scrollArea.scrollHeight > scrollArea.clientHeight) {
        e.stopPropagation();
      }
    }, { passive: true });

    let rafId = null;
    let isAnimating = false;

    function ease(t) {
      return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateTo(target, duration, onDone) {
      const from = scrollArea.scrollTop;
      const diff = target - from;
      let t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / duration, 1);
        scrollArea.scrollTop = from + diff * ease(p);
        if (p < 1) { rafId = requestAnimationFrame(step); }
        else if (onDone) { onDone(); }
      }
      rafId = requestAnimationFrame(step);
    }

    function runDemo() {
      if (isAnimating) return;
      isAnimating = true;
      scrollArea.scrollTop = 0;
      const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
      setTimeout(() => {
        animateTo(maxScroll, 3500, () => {
          setTimeout(() => {
            animateTo(0, 3000, () => { isAnimating = false; });
          }, 700);
        });
      }, 200);
    }

    if (btn) {
      btn.addEventListener('click', () => {
        if (rafId) cancelAnimationFrame(rafId);
        isAnimating = false;
        runDemo();
      });
    }

    // 섹션이 처음 보일 때 자동 실행
    let autoTriggered = false;
    const sec7 = scrollArea.closest('.frame-3');
    if (sec7) {
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !autoTriggered) {
          autoTriggered = true;
          setTimeout(runDemo, 700);
        }
      }, { threshold: 0.6 });
      obs.observe(sec7);
    }
  });
})();
