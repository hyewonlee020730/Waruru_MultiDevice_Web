// Q&A 아코디언
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.qa-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.qa-item');
      const isOpen = item.classList.contains('open');

      // 열린 항목 모두 닫기
      document.querySelectorAll('.qa-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.qa-arrow').src = 'assets/svg/arrow_down.svg';
      });

      // 클릭한 항목이 닫혀있던 경우에만 열기
      if (!isOpen) {
        item.classList.add('open');
        trigger.querySelector('.qa-arrow').src = 'assets/svg/arrow_up.svg';
      }
    });
  });
});
