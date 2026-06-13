// GNB 모바일 토글 버튼 및 드로어 메뉴 제어
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const gnbBackdrop = document.getElementById('gnbBackdrop');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  function toggleMenu() {
    const isOpen = mobileOverlay.classList.contains('open');
    if (isOpen) {
      mobileOverlay.classList.remove('open');
      gnbBackdrop.classList.remove('open');
      menuToggle.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      mobileOverlay.classList.add('open');
      gnbBackdrop.classList.add('open');
      menuToggle.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  menuToggle.addEventListener('click', toggleMenu);
  gnbBackdrop.addEventListener('click', toggleMenu);

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileOverlay.classList.remove('open');
      gnbBackdrop.classList.remove('open');
      menuToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});
