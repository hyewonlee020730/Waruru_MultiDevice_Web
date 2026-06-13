// Section 1 — Card List: Auto-scroll + Drag
window.addEventListener('load', () => {
  const cardList = document.querySelector('.card-list');
  const cardTrack = document.querySelector('.card-track');

  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let isPaused = false;
  let rafId;
  let halfWidth = 0;
  let scrollPos = 0;
  const speed = 0.6;

  function updateHalfWidth() {
    halfWidth = cardTrack.scrollWidth / 2;
    if (halfWidth > 0 && scrollPos >= halfWidth) {
      scrollPos = scrollPos % halfWidth;
    }
  }

  // 렌더링 완료 후 halfWidth 계산
  setTimeout(updateHalfWidth, 150);

  // resize debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateHalfWidth, 200);
  });

  // --- Auto-scroll ---
  function tick() {
    if (!isPaused && halfWidth > 0) {
      scrollPos += speed;
      if (scrollPos >= halfWidth) scrollPos -= halfWidth;
      cardList.scrollLeft = scrollPos;
    }
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  // --- Card hover pause ---
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => { isPaused = true; });
    card.addEventListener('mouseleave', () => { if (!isDragging) isPaused = false; });
  });

  // --- Drag ---
  cardList.addEventListener('mousedown', (e) => {
    isDragging = true;
    isPaused = true;
    dragStartX = e.pageX - cardList.offsetLeft;
    dragStartScroll = cardList.scrollLeft;
    scrollPos = cardList.scrollLeft;
    cardList.classList.add('dragging');
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    isPaused = false;
    cardList.classList.remove('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardList.offsetLeft;
    const delta = (x - dragStartX);
    let next = dragStartScroll - delta;

    // 무한 루프 보정
    if (next >= halfWidth) next -= halfWidth;
    else if (next < 0) next += halfWidth;

    cardList.scrollLeft = next;
  });
});
