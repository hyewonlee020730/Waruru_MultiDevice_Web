// i18n — KOR / ENG Language Switching (index.html 전용)
document.addEventListener('DOMContentLoaded', () => {

  const LANG = {
    ko: {
      gnbLogoSrc:  'assets/svg/logo_kr.svg',
      navAbout:    '와르르 소개',
      navNewsroom: '뉴스룸',

      s1Heading:     '콘텐츠 감상이<br />혼자만의 경험으로 끝나지 않도록',
      s1DescDesktop: '좋아하는 것들을 함께 보고 난 뒤의 이야기가 기록되고, 공유되고, 오래 남을 수 있도록.<br />흩어지던 감상이 한곳에 모이고, 혼자 쓰던 후기가 함께 채워지는 경험을 만듭니다.',
      s1DescMobile:  '흩어지던 감상과 후기를 친구들과 함께 기록하고 공유해요.<br />함께 본 순간을 더 오래 남는 추억으로 만들어가요.',

      labelConcert:   '콘서트',
      labelAnimation: '애니메이션',
      labelMovie:     '영화',
      labelSeries:    '시리즈',

      s2Card1:      '관람이 끝나는 순간이 아니라, 감상을 나누는 시간까지하나의 콘텐츠 경험이라고 생각해요.',
      s2Card2:      '공연 끝나고는 진짜 할 말이 많은데, 며칠만 지나도 어떤 장면이 좋았는지 잘 기억이 안 나요.',
      s2Card3:      '같이 본 친구들의 후기를 한곳에서 모아보면 <br />그날의 기억이 더 오래 남을 것 같아요.',
      s2Card4:      '후기를 남기고 싶긴 한데 <br />막상 쓰려고 하면 뭘 써야 할지 모르겠어요.',
      s2Card5:      '친구들이랑 감상 얘기를 엄청 나누는데 <br />단톡방에 묻혀서 나중에는 다시 찾기가 힘들어요.',
      s2Card6:      '같은 작품을 봐도 사람마다 해석이 달라서 재밌는데, <br />다른 사람들은 어떻게 봤는지 궁금해요.',
      s2Heading:    '이런 경험, 한 번쯤 있지 않나요?',
      s2DescDesktop:'공연을 보고 나왔을 때는 분명 할 말이 많았는데, 며칠만 지나도 어떤 장면이 좋았는지 기억이 흐려져요.<br />친구들과 감상을 나누며 즐거운 시간을 보냈지만, 대화는 단톡방 속으로 사라지고 추억도 점점 희미해져요.',
      s2DescMobile: '콘텐츠를 보고, 친구들과 감상을 나누며 즐거운 시간을 보냈지만<br />대화는 단톡방 속으로 사라지고 추억도 점점 희미해져요.',

      s3Heading:  '흩어지는 감상과 추억을 한곳에 모아<br />오래도록 꺼내볼 수 있는 기록 공간을 소개합니다.',
      s3LogoSrc:  'assets/svg/logo_kr_T.svg',

      s4Heading: '콘텐츠별로, 더 알맞게 기록하세요',
      s4Desc:    '<span class="span">콘서트, 애니메이션, 영화, 시리즈</span><span class="text-wrapper-14">까지.</span><br class="br-sec4-default"><span class="text-wrapper-14">콘텐츠의 특성에 맞는 공간에서 </span><br class="br-sec4-small"><span class="text-wrapper-14">우리의 감상을 더욱 자연스럽게 기록할 수 있어요.</span>',

      s5Heading:       '함께 본 순간을 함께 남겨보세요',
      s5DescDesktop:   '<span class="text-wrapper-20">초대장</span><span class="text-wrapper-21">을 주고받아 친구와 </span><span class="text-wrapper-20">같은 기록장을 공유</span><span class="text-wrapper-21">하고, 하나의 작품을 각자의 시선으로 기록할 수 있어요.</span><br><span class="text-wrapper-21">서로의 감상을 읽고 이야기를 이어가며 함께했던 순간을 더욱 풍성한 추억으로 남겨보세요.</span>',
      s5DescMobile:    '<span class="text-wrapper-20">초대장</span>을 주고받아 친구와 <span class="text-wrapper-20">같은 기록장을 공유</span>하고,<br class="br-sec5-small"> 하나의 작품을 각자의 시선으로 기록할 수 있어요.',
      s5PosterFront:   'assets/svg/poster_kr_1.svg',
      s5PosterBack:    'assets/svg/poster_kr_2.svg',
      s5TooltipDesktop:'assets/svg/tooltip_kr_1.svg',
      s5TooltipMobile: 'assets/svg/tooltip_kr_2.svg',

      s6Heading:     '감상을 떠올리는 작은 단서들',
      s6DescDesktop: '<span class="text-wrapper-30">명대사, OST, 장르별 질문 등을 제공하는 </span><span class="text-wrapper-31">작성 키트</span><span class="text-wrapper-30">가 작품 속 기억을 자연스럽게 떠올릴 수 있도록 도와줘요.<br>감상이 막히는 순간에도 생각의 흐름을 이어가며 더 풍부한 후기를 작성할 수 있어요.</span>',
      s6DescMobile:  '<span class="text-wrapper-30">명대사, OST, 장르별 질문 등을 제공하는 </span><span class="text-wrapper-31">작성 키트로</span><br>더 풍부한 후기를 작성할 수 있어요.',

      s7Heading:    '각자의 후기가 모여<br>더욱 풍성한 이야기가 돼요',
      s7TooltipSrc: 'assets/svg/tooltip_kr_7.svg',

      s8Heading: '뉴스룸',
      s8News1:   '와르르 1주년, 누적 후기 10만 건 달성',
      s8News2:   '와르르 앱, 플레이스토어 \'이주의 신규 추천\' 선정',
      s8News3:   '와르르, 정식 출시 — 콘텐츠 감상을 함께 기록하는 첫 서비스',
      s8News4:   '와르르 베타테스트 참여자 1,000명 돌파',

      s9Q1: '와르르는 어떤 서비스인가요?',
      s9A1Desktop: '와르르는 영화, 드라마, 애니메이션, 콘서트 등 콘텐츠를 본 감상을 혼자가 아니라 함께 기록하는 서비스예요. 같은 작품을 본 사람들과 후기를 나누며 감상을 더 오래 기억하고, 다른 사람의 시선도 발견해보세요.',
      s9A1Mobile:  '영화, 드라마, 애니메이션, 콘서트 감상을 친구들과 함께 기록하고 나누는 서비스예요.',

      s9Q2: '어떤 콘텐츠에 대해 후기를 남길 수 있나요?',
      s9A2Desktop: '영화, 드라마, 애니메이션, 콘서트까지 총 4가지 카테고리의 콘텐츠에 대해 후기를 남길 수 있어요. 작품을 검색해서 바로 후기를 작성할 수 있고, 아직 등록되지 않은 작품은 직접 추가할 수도 있습니다. 추후 더 다양한 콘텐츠 카테고리도 추가할 예정이에요.',
      s9A2Mobile:  '영화, 드라마, 애니메이션, 콘서트 총 4가지 카테고리를 지원해요. 등록되지 않은 작품은 직접 추가할 수 있어요.',

      s9Q3: '작성한 후기는 다른 사람에게 공개되나요?',
      s9A3Desktop: '후기마다 공개 범위를 직접 설정할 수 있어요. 나만 보기, 팔로워에게만 공개, 전체 공개 중 원하는 방식을 선택할 수 있고, 작성 후에도 언제든지 공개 범위를 바꿀 수 있습니다. 다른 사람과 나누고 싶은 기록만 골라서 공유해보세요.',
      s9A3Mobile:  '나만 보기, 팔로워 공개, 전체 공개 중 선택할 수 있고 언제든 변경 가능해요.',

      s9Q4: '친구를 초대해서 함께 후기를 쓸 수 있나요?',
      s9A4Desktop: '네, 친구를 초대해 같은 콘텐츠에 대한 후기를 함께 작성할 수 있어요. 각자의 감상을 한 공간에 나란히 기록하면서, 같은 작품을 보고도 서로 다르게 느낀 지점들을 비교하고 이야기 나눌 수 있습니다.',
      s9A4Mobile:  '네, 친구를 초대해 같은 콘텐츠 후기를 한 공간에 함께 기록할 수 있어요.',

      s9Q5: '회원 탈퇴 시 작성한 후기는 어떻게 되나요?',
      s9A5Desktop: '회원 탈퇴를 신청하시면 작성하신 모든 후기와 기록은 즉시 삭제되며 복구할 수 없습니다. 탈퇴 전 보관하고 싶은 기록이 있다면 미리 내보내기 기능을 이용해 백업해두시는 것을 권장드려요. 자세한 절차는 마이페이지 > 설정 > 회원 탈퇴에서 확인하실 수 있습니다.',
      s9A5Mobile:  '탈퇴 즉시 모든 기록이 삭제되며 복구되지 않아요. 탈퇴 전 내보내기 기능으로 백업을 권장드려요.',

      footerLinks: '개인정보처리방침&nbsp;&nbsp;&nbsp;&nbsp;이용약관&nbsp;&nbsp;&nbsp;&nbsp;보안',
    },

    en: {
      gnbLogoSrc:  'assets/svg/logo_En.svg',
      navAbout:    'About',
      navNewsroom: 'Newsroom',

      s1Heading:     'great experiences are better<br />remembered together',
      s1DescDesktop: 'After enjoying something together, the conversations that follow deserve to be remembered, shared, and preserved.<br />WARURU brings scattered thoughts into one place, transforming individual reviews into stories written together.',
      s1DescMobile:  'After enjoying something together, WARURU brings your scattered thoughts into one place.<br />Transform individual reviews into stories written together.',

      labelConcert:   'Concerts',
      labelAnimation: 'Anime',
      labelMovie:     'Movie',
      labelSeries:    'Series',

      s2Card1:      'I believe the experience doesn\'t end when the curtain falls. Sharing your thoughts is part of it too.',
      s2Card2:      'Right after a show, I have so much to say. But a few days later, I can barely remember which scenes I loved.',
      s2Card3:      'If I could gather all my friends\' thoughts in one place, I think the memory of that day would stay with me so much longer.',
      s2Card4:      'I want to write a review, but when I actually sit down to do it, I never know where to start.',
      s2Card5:      'We talk endlessly with friends after a show. but those moments get buried in a group chat, never to be found again.',
      s2Card6:      'We watch the same show, yet everyone takes something different from it — that\'s what makes it fascinating. I\'m always curious how others saw it.',
      s2Heading:    'Ever felt this way after a movie, concert, or show?',
      s2DescDesktop:'Right after the show, you have so much to say. But a few days later, your favorite moments start to blur.<br />You talked with friends, laughed together — but those conversations got buried in a chat thread,<br />and the memory slowly fades.',
      s2DescMobile: 'Right after the show, you have so much to say.<br />But those conversations got buried in a chat thread, and the memory slowly fades.',

      s3Heading:  'A place to gather scattered thoughts and memories,<br />so you can revisit them for years to come.',
      s3LogoSrc:  'assets/svg/logo_En_T.svg',

      s4Heading: 'Record more meaningfully, for every type of content.',
      s4Desc:    '<span class="span">From concerts and anime to films and series</span><span class="text-wrapper-14"> —</span><br class="br-sec4-default"><span class="text-wrapper-14">each with its own space, so your thoughts feel right at home.</span>',

      s5Heading:       'Capture the moments you shared, together',
      s5DescDesktop:   '<span class="text-wrapper-21">Share a journal with friends and </span><span class="text-wrapper-20">record the same work through different perspectives.</span><br><span class="text-wrapper-21">Read each other\'s reviews and turn shared experiences into lasting memories.</span>',
      s5DescMobile:    'Share a journal with friends and <span class="text-wrapper-20">record the same work<br class="br-sec5-small">through different perspectives.</span>',
      s5PosterFront:   'assets/svg/poster_En_1.svg',
      s5PosterBack:    'assets/svg/poster_En_2.svg',
      s5TooltipDesktop:'assets/svg/tooltip_En_1.svg',
      s5TooltipMobile: 'assets/svg/tooltip_En_2.svg',

      s6Heading:     'Little prompts to spark your memories',
      s6DescDesktop: '<span class="text-wrapper-30">With memorable quotes, OSTs, and tailored questions, </span><span class="text-wrapper-31">writing kits</span><span class="text-wrapper-30"> help you recall moments from the content.<br>When your thoughts slow down, they help you keep writing and create richer reviews.</span>',
      s6DescMobile:  '<span class="text-wrapper-30">With memorable quotes, OSTs, and tailored questions, </span><span class="text-wrapper-31">writing kits</span><span class="text-wrapper-30"><br>help you create richer reviews.</span>',

      s7Heading:    'Different perspectives come together<br>to create a richer story.',
      s7TooltipSrc: 'assets/svg/tooltip_En_7.svg',

      s8Heading: 'Newsroom',
      s8News1:   'Waruru Celebrates 1st Anniversary with 100,000 Reviews',
      s8News2:   'Waruru Named Google Play\'s "New App of the Week"',
      s8News3:   'Waruru Official Launch — The First App to Record Content Reviews Together',
      s8News4:   'Waruru Beta Testers Surpass 1,000',

      s9Q1: 'What is Waruru?',
      s9A1Desktop: 'Waruru is a service for recording your thoughts on movies, dramas, animations, and concerts — together, not alone. Share reviews with people who watched the same work, keep the memories alive longer, and discover new perspectives.',
      s9A1Mobile:  'Waruru lets you record and share your reviews of movies, dramas, animations, and concerts with friends.',

      s9Q2: 'What types of content can I review?',
      s9A2Desktop: 'You can leave reviews across 4 categories: movies, dramas, animations, and concerts. Search for a title and start writing right away, or add one yourself if it\'s not listed yet. More categories are planned for the future.',
      s9A2Mobile:  '4 categories are supported: movies, dramas, animations, and concerts. Unlisted titles can be added manually.',

      s9Q3: 'Can others see my reviews?',
      s9A3Desktop: 'You can set the visibility for each review — private, followers only, or public — and change it anytime, even after publishing. Share only the records you want to.',
      s9A3Mobile:  'Choose from private, followers only, or public. You can change the setting anytime.',

      s9Q4: 'Can I invite friends to write reviews together?',
      s9A4Desktop: 'Yes! Invite a friend to record reviews for the same content side by side. Capture each other\'s impressions in one shared space, compare what you felt differently, and talk it through.',
      s9A4Mobile:  'Yes, invite a friend to record reviews for the same content together in one shared space.',

      s9Q5: 'What happens to my reviews if I delete my account?',
      s9A5Desktop: 'Once you submit a deletion request, all your reviews and records are immediately and permanently deleted. We recommend using the export feature to back up anything you\'d like to keep beforehand. Find the full process under My Page > Settings > Delete Account.',
      s9A5Mobile:  'All records are deleted immediately and cannot be recovered. We recommend backing up with the export feature before deleting.',

      footerLinks: 'Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms of Use&nbsp;&nbsp;&nbsp;&nbsp;Security',
    }
  };

  function applyLang(lang) {
    const t    = LANG[lang];
    const sec5 = document.querySelector('#genre + .frame-3');
    const sec7 = document.querySelector('#writing-kit + .frame-3');

    // ── GNB ──────────────────────────────────────────────
    document.querySelector('#gnbLogo img').src = t.gnbLogoSrc;
    document.querySelectorAll('#gnbNav .nav-item, #mobileOverlay .mobile-nav-item').forEach(el => {
      const href = el.getAttribute('href');
      if (href === '#about')    el.textContent = t.navAbout;
      else if (href === '#newsroom') el.textContent = t.navNewsroom;
    });

    // ── Section 1 ─────────────────────────────────────────
    document.querySelector('#about .p').innerHTML             = t.s1Heading;
    document.querySelector('#about .sec1-desc-desktop').innerHTML = t.s1DescDesktop;
    document.querySelector('#about .sec1-desc-mobile').innerHTML  = t.s1DescMobile;

    document.querySelectorAll('#about .card').forEach(card => {
      const src   = card.querySelector('.card-overlay-icon').src;
      const label = card.querySelector('.card-overlay-label');
      if (src.includes('Concerts_s'))   label.textContent = t.labelConcert;
      else if (src.includes('Anime_s')) label.textContent = t.labelAnimation;
      else if (src.includes('Movies_s'))label.textContent = t.labelMovie;
      else if (src.includes('Series_s'))label.textContent = t.labelSeries;
    });

    // ── Section 2 ─────────────────────────────────────────
    [
      ['.cardtextfield',   t.s2Card1],
      ['.cardtextfield-2', t.s2Card2],
      ['.cardtextfield-3', t.s2Card3],
      ['.cardtextfield-4', t.s2Card4],
      ['.cardtextfield-5', t.s2Card5],
      ['.cardtextfield-6', t.s2Card6],
    ].forEach(([sel, html]) => {
      const el = document.querySelector(`#experience ${sel} .text-wrapper-9`);
      if (el) el.innerHTML = html;
    });
    document.querySelector('#experience .text-wrapper-10').textContent      = t.s2Heading;
    document.querySelector('#experience .sec2-desc-desktop').innerHTML      = t.s2DescDesktop;
    document.querySelector('#experience .sec2-desc-mobile').innerHTML       = t.s2DescMobile;

    // ── Section 3 ─────────────────────────────────────────
    document.querySelector('#archive .text-wrapper-12').innerHTML = t.s3Heading;
    document.querySelector('#archive .star-3').src                = t.s3LogoSrc;

    // ── Section 4 ─────────────────────────────────────────
    document.querySelector('#genre .text-wrapper-13').textContent = t.s4Heading;
    document.querySelector('#genre .div-2').innerHTML             = t.s4Desc;

    Object.entries({ 'cardList-concert': t.labelConcert, 'cardList-animation': t.labelAnimation, 'cardList-movie': t.labelMovie, 'cardList-series': t.labelSeries })
      .forEach(([list, text]) => {
        const chip = document.querySelector(`[data-list="${list}"]`);
        if (chip) chip.querySelector('div').textContent = text;
      });

    ['concert', 'animation', 'movie', 'series'].forEach(type => {
      const map = { concert: t.labelConcert, animation: t.labelAnimation, movie: t.labelMovie, series: t.labelSeries };
      document.querySelectorAll(`#cardList-${type} .text-wrapper-18`).forEach(el => el.textContent = map[type]);
    });

    document.querySelectorAll('#genre .text-wrapper-17[data-ko]').forEach(el => {
      el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ko;
    });

    // ── Section 5 ─────────────────────────────────────────
    if (sec5) {
      sec5.querySelector('.text-wrapper-13').textContent         = t.s5Heading;
      sec5.querySelector('.sec5-desc-desktop').innerHTML         = t.s5DescDesktop;
      sec5.querySelector('.sec5-desc-mobile').innerHTML          = t.s5DescMobile;
      sec5.querySelector('.card-flip-front .poster-kr').src      = t.s5PosterFront;
      sec5.querySelector('.card-flip-back  .poster-kr').src      = t.s5PosterBack;
      sec5.querySelector('.tooltip-kr--desktop').src             = t.s5TooltipDesktop;
      sec5.querySelector('.tooltip-kr--mobile').src              = t.s5TooltipMobile;
    }

    // ── Section 6 ─────────────────────────────────────────
    document.querySelector('#writing-kit .text-wrapper-29').textContent      = t.s6Heading;
    document.querySelector('#writing-kit .sec6-desc-desktop').innerHTML      = t.s6DescDesktop;
    document.querySelector('#writing-kit .sec6-desc-mobile').innerHTML       = t.s6DescMobile;

    const isEn = lang === 'en';
    [1, 2, 3].forEach(n => {
      const listM = document.querySelector(`.sec6-list-m-${n}`);
      if (listM) listM.src = isEn ? `assets/svg/List_M_EN_${n}.svg` : `assets/svg/List_M_${n}.svg`;
      const row = document.querySelector(`.sec6-row-${n}`);
      if (row) row.src = isEn ? `assets/svg/list_row_EN_${n}.svg` : `assets/svg/list_row_${n}.svg`;
    });
    const mockup1 = document.querySelector('.sec6-mockup-1');
    if (mockup1) mockup1.src = isEn ? 'assets/Img/Mockup_1_en.png' : 'assets/Img/Mockup_1.png';
    const mockup2 = document.querySelector('.sec6-mockup-2');
    if (mockup2) mockup2.src = isEn ? 'assets/Img/Mockup_2_en.png' : 'assets/Img/Mockup_2.png';

    // ── Section 7 ─────────────────────────────────────────
    if (sec7) {
      sec7.querySelector('.text-wrapper-36').innerHTML = t.s7Heading;
      sec7.querySelector('.sec7-tooltip').src          = t.s7TooltipSrc;
      const mockupIn = sec7.querySelector('.sec7-mockup-img');
      if (mockupIn) mockupIn.src = isEn ? 'assets/Img/Mockup_in_en.png' : 'assets/Img/Mockup_in.png';
    }

    // ── Section 8 ─────────────────────────────────────────
    document.querySelector('#newsroom .text-wrapper-13').textContent = t.s8Heading;
    document.querySelectorAll('#newsroom .text-wrapper-37').forEach((el, i) => {
      const val = t[`s8News${i + 1}`];
      if (val) el.textContent = val;
    });

    // ── Section 9 ─────────────────────────────────────────
    document.querySelectorAll('#qaList .qa-item').forEach((item, i) => {
      const n = i + 1;
      item.querySelector('.text-wrapper-41').textContent  = t[`s9Q${n}`];
      item.querySelector('.qa-text-desktop').textContent  = t[`s9A${n}Desktop`];
      item.querySelector('.qa-text-mobile').textContent   = t[`s9A${n}Mobile`];
    });

    // ── Footer ────────────────────────────────────────────
    document.querySelector('.text-wrapper-44').innerHTML = t.footerLinks;
  }

  // ── Lang Button Handler ──────────────────────────────────
  let currentLang = localStorage.getItem('waruru-lang') || 'ko';

  // 저장된 언어가 영어면 버튼 상태 + 콘텐츠 초기 적용
  if (currentLang === 'en') {
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === 'eng')
    );
    applyLang('en');
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang === 'eng' ? 'en' : 'ko';
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem('waruru-lang', lang);
      document.querySelectorAll('.lang-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.lang === btn.dataset.lang)
      );
      applyLang(lang);
    });
  });
});
