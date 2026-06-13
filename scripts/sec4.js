// Section 4 — Chip Interaction + Card List wheel & drag scroll
document.addEventListener('DOMContentLoaded', () => {

  // ── Chip Interaction ──
  const chipsContainer = document.getElementById('genreChips');
  if (chipsContainer) {
    const allLists = document.querySelectorAll('.card-list-2');

    chipsContainer.querySelectorAll('.chip, .chip-2').forEach(chip => {
      chip.addEventListener('click', () => {
        // 모든 칩 비활성화
        chipsContainer.querySelectorAll('.chip, .chip-2').forEach(c => {
          const icon = c.querySelector('.chip-icon');
          const label = c.querySelector('.text-wrapper-15, .text-wrapper-16');
          icon.src = c.dataset.disabledIcon;
          c.className = 'chip-2';
          if (label) label.className = 'text-wrapper-16';
        });

        // 모든 카드 리스트 숨기기
        allLists.forEach(list => { list.style.display = 'none'; });

        // 클릭한 칩 활성화
        const icon = chip.querySelector('.chip-icon');
        const label = chip.querySelector('.text-wrapper-16');
        icon.src = chip.dataset.selectedIcon;
        chip.className = 'chip';
        if (label) label.className = 'text-wrapper-15';

        // 해당 카드 리스트 표시
        const targetList = document.getElementById(chip.dataset.list);
        if (targetList) {
          targetList.style.display = 'flex';
          targetList.scrollLeft = 0;
        }
      });
    });
  }

  // ── Card List: wheel + drag scroll ──
  let isDragging = false;
  let dragTarget = null;
  let startX = 0;
  let startScrollLeft = 0;

  document.querySelectorAll('.card-list-2').forEach(cardList => {
    cardList.addEventListener('wheel', e => {
      if (cardList.scrollWidth <= cardList.clientWidth) return;
      e.preventDefault();
      cardList.scrollLeft += e.deltaY + e.deltaX;
    }, { passive: false });

    cardList.addEventListener('mousedown', e => {
      if (cardList.scrollWidth <= cardList.clientWidth) return;
      isDragging = true;
      dragTarget = cardList;
      startX = e.pageX;
      startScrollLeft = cardList.scrollLeft;
      cardList.classList.add('dragging');
    });
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging || !dragTarget) return;
    dragTarget.scrollLeft = startScrollLeft - (e.pageX - startX);
  });

  document.addEventListener('mouseup', () => {
    if (dragTarget) dragTarget.classList.remove('dragging');
    isDragging = false;
    dragTarget = null;
  });
});
