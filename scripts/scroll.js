// 풀페이지 스크롤 (GNB 테마·네비게이션·섹션 이동 통합)

// 359px 이하: 스크롤 스냅 비활성화 판정
// viewport가 360px로 고정되어 window.innerWidth가 360으로 보고되므로 클래스로 판정
function isSnapDisabled() {
  return document.documentElement.classList.contains('viewport-xs');
}

document.addEventListener('DOMContentLoaded', () => {
  const SELECTOR = '.desktop > [data-section]';
  const desktop = document.querySelector('.desktop');
  const gnb = document.querySelector('.gnb');
  const navItems = document.querySelectorAll('#gnbNav .nav-item');

  // 섹션 인덱스별 GNB 테마 / nav active id
  const GNB_THEME = ['dark', 'dark', 'dark', 'light', 'light', 'light', 'light', 'white', 'white'];
  const NAV_ACTIVE = ['about', 'about', 'about', 'about', 'about', 'about', 'about', 'newsroom', 'qa'];

  let currentIndex = 0;
  let isAnimating = false;
  let wheelLocked = false;  // 관성 이벤트 차단용 (1500ms)
  let wheelLockTimer = null;
  let wheelAccum = 0;
  let wheelEndTimer = null;

  const getSections = () => [...document.querySelectorAll(SELECTOR)];

  function updateGnb(idx) {
    const theme = GNB_THEME[idx] ?? 'dark';
    gnb.classList.toggle('gnb--light', theme === 'light');
    gnb.classList.toggle('gnb--white', theme === 'white');
  }

  function updateNav(idx) {
    const id = NAV_ACTIVE[idx] ?? 'about';
    navItems.forEach(item =>
      item.classList.toggle('active', item.getAttribute('href') === `#${id}`)
    );
  }

  function goTo(index) {
    const count = getSections().length;
    if (index < 0 || index >= count || isAnimating) return;
    currentIndex = index;
    desktop.style.transform = `translateY(${-currentIndex * window.innerHeight}px)`;
    isAnimating = true;
    // 휠 전용 잠금: 관성이 완전히 가라앉을 때까지 차단
    wheelLocked = true;
    wheelAccum = 0;
    clearTimeout(wheelLockTimer);
    wheelLockTimer = setTimeout(() => {
      wheelLocked = false;
      wheelAccum = 0;
    }, 1500);
    updateGnb(currentIndex);
    updateNav(currentIndex);
  }

  desktop.addEventListener('transitionend', () => {
    setTimeout(() => { isAnimating = false; }, 350);
  });

  // ── Wheel ──
  window.addEventListener('wheel', (e) => {
    if (isSnapDisabled()) return; // 359px 이하: 자연 스크롤 허용
    // 예외: 폰 목업 내부 스크롤 영역
    if (e.target.closest('#sec7ScrollArea')) return;
    // 예외: 섹션 4 카드 리스트 가로 스크롤
    if (e.target.closest('.card-list-2')) {
      const list = e.target.closest('.card-list-2');
      if (list.scrollWidth > list.clientWidth) return;
    }
    e.preventDefault();

    // 잠금 중(관성 구간)에는 누적값 리셋 후 무시
    if (wheelLocked) { wheelAccum = 0; return; }

    // 제스처 종료 300ms 후 누적값 리셋
    clearTimeout(wheelEndTimer);
    wheelEndTimer = setTimeout(() => { wheelAccum = 0; }, 300);

    wheelAccum += e.deltaY;
    if (Math.abs(wheelAccum) < 80) return;

    const dir = wheelAccum > 0 ? 1 : -1;
    wheelAccum = 0;
    goTo(currentIndex + dir);
  }, { passive: false });

  // ── Touch ──
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isSnapDisabled()) return; // 359px 이하: 자연 스크롤 허용
    if (e.target.closest('#sec7ScrollArea')) return;
    if (e.target.closest('.card-list-2')) return;
    e.preventDefault();
    if (isAnimating) return;
    const delta = touchStartY - e.touches[0].clientY;
    if (Math.abs(delta) < 14) return;
    if (delta < 0) goTo(currentIndex - 1);
    else goTo(currentIndex + 1);
    touchStartY = e.touches[0].clientY;
  }, { passive: false });

  // ── Resize — 인덱스 유지하며 위치 재계산 ──
  window.addEventListener('resize', () => {
    desktop.style.transition = 'none';
    if (isSnapDisabled()) {
      // 359px 이하: transform 초기화 → 자연 스크롤
      desktop.style.transform = 'translateY(0)';
    } else {
      desktop.style.transform = `translateY(${-currentIndex * window.innerHeight}px)`;
    }
    requestAnimationFrame(() => { desktop.style.transition = ''; });
  });

  // ── GNB / 모바일 메뉴 앵커 클릭 ──
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const idx = getSections().findIndex(s => s === target || s.contains(target));
    if (idx !== -1) goTo(idx);
  });

  // 초기 상태
  const initHash = window.location.hash.slice(1);
  if (initHash) {
    const hashTarget = document.getElementById(initHash);
    if (hashTarget) {
      const hashIdx = getSections().findIndex(s => s === hashTarget || s.contains(hashTarget));
      if (hashIdx !== -1) {
        currentIndex = hashIdx;
        desktop.style.transition = 'none';
        desktop.style.transform = `translateY(${-currentIndex * window.innerHeight}px)`;
        requestAnimationFrame(() => { desktop.style.transition = ''; });
      }
    }
  }
  updateGnb(currentIndex);
  updateNav(currentIndex);
});
