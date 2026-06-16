// Section 7 — 폰 목업 내부 스크롤 (일반 스크롤)
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const scrollArea = document.getElementById('sec7ScrollArea');
    if (!scrollArea) return;

    // 폰 위에서 마우스 휠 시 페이지 스냅 이동 방지 (내부 스크롤 허용)
    scrollArea.addEventListener('wheel', (e) => {
      if (scrollArea.scrollHeight > scrollArea.clientHeight) {
        e.stopPropagation();
      }
    }, { passive: true });
  });
})();
