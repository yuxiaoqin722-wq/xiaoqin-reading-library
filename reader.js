let currentLesson = null;
let currentLevel = 'A';

function initLibrary() {
  renderBookFilters();
  renderBookSections('all');
}

function renderBookFilters() {
  const container = document.getElementById('bookFilters');
  const books = Object.keys(BOOK_THEMES);

  container.innerHTML = `
    <button class="active" onclick="renderBookSections('all', this)">All</button>
    ${books.map(book => `
      <button onclick="renderBookSections('${book}', this)">${book}</button>
    `).join('')}
  `;
}

function renderBookSections(filterBook = 'all', btn = null) {
  if (btn) {
    document.querySelectorAll('#bookFilters button').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
  }

  const container = document.getElementById('bookSections');

  const books = Object.keys(BOOK_THEMES).filter(book => {
    return filterBook === 'all' || filterBook === book;
  });

  container.innerHTML = books.map(book => {
    const theme = BOOK_THEMES[book];
    const lessons = LESSON_LIBRARY.filter(item => item.book === book);

    return `
      <section class="book-section"
        style="
          --book-color:${theme.color};
          --book-soft:${theme.soft};
          --book-dark:${theme.dark};
          border-left:8px solid ${theme.color};
        ">

        <div class="section-title"
          style="color:${theme.dark}; justify-content:space-between;">

          <div style="display:flex; align-items:center; gap:12px;">
            <div style="
              width:44px;
              height:44px;
              border-radius:16px;
              display:grid;
              place-items:center;
              background:${theme.soft};
              color:${theme.dark};
              font-size:24px;
            ">
              ${theme.icon}
            </div>

            <h2 style="margin:0;">
              《跨越丝路》${book}
            </h2>
          </div>

          <span style="font-size:14px; color:#7e6d66;">
  ${lessons.length} Lessons · ${theme.subtitle}
</span>
        </div>

        <div class="lesson-grid">
          ${lessons.length
            ? lessons.map(lesson => renderLessonCard(lesson, theme)).join('')
            : renderComingSoonCard(book, theme)}
        </div>
      </section>
    `;
  }).join('');
}

function renderLessonCard(lesson, theme) {
  return `
    <a class="lesson-card"
      href="#${lesson.id}"
      onclick="openLesson('${lesson.id}'); return false;"
      style="
        background:linear-gradient(180deg,#fff,${theme.soft});
        border:1px solid ${theme.color}33;
      ">
    <button class="copy-link-btn"
  onclick="event.preventDefault(); event.stopPropagation(); copyLessonLink('${lesson.id}', this)"
  title="Copy lesson link">🔗</button>

      <div class="lesson-number"
        style="
          background:rgba(255,255,255,.75);
          color:${theme.dark};
          border:1px solid ${theme.color}33;
        ">
        ${lesson.lesson}
      </div>

      <div class="lesson-title">${lesson.title}</div>
      <div class="lesson-pinyin">${lesson.pinyin}</div>


      <div style="
        position:absolute;
        right:16px;
        bottom:10px;
        font-size:60px;
        opacity:.16;
      ">
        ${lesson.icon}
      </div>
    </a>
  `;
}

function renderComingSoonCard(book, theme) {
  return `
    <div class="lesson-card"
      style="
        opacity:.55;
        background:linear-gradient(180deg,#fff,${theme.soft});
        border:1px solid ${theme.color}33;
      ">

      <div class="lesson-number"
        style="background:rgba(255,255,255,.75); color:${theme.dark};">
        Coming Soon
      </div>

      <div class="lesson-title">${book} Lessons</div>
      <div class="lesson-pinyin">Coming soon</div>
      <div class="lesson-desc">Lessons will appear here after they are added.</div>

      <div class="status"
        style="background:${theme.color}22; color:${theme.dark};">
        Coming Soon
      </div>
    </div>
  `;
}

function openLesson(lessonId) {
  const lesson = window.LESSONS && window.LESSONS[lessonId];

  if (!lesson) {
    alert(`Lesson data not found: ${lessonId}`);
    return;
  }

  currentLesson = lesson;
  currentLevel = 'A';

  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('homeHero').classList.add('hidden');
  document.getElementById('lessonView').classList.remove('hidden');

  document.body.classList.remove('hide-pinyin');
  document.body.classList.remove('hide-translation');

  applyLessonTheme(lesson);
  renderLessonHero(lesson);
  renderKeyWords(lesson);
  renderKeySentences(lesson);
  renderPractice(lesson);
  renderChallenge(lesson);

  showLevel('A', document.querySelector('#lessonToolbar button'));

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyLessonTheme(lesson) {
  const theme = BOOK_THEMES[lesson.book] || BOOK_THEMES['1A'];

  document.documentElement.style.setProperty('--active-color', theme.color);
  document.documentElement.style.setProperty('--active-soft', theme.soft);
  document.documentElement.style.setProperty('--active-dark', theme.dark);
}

function goHome() {
  currentLesson = null;

  document.getElementById('lessonView').classList.add('hidden');
  document.getElementById('homeView').classList.remove('hidden');
  document.getElementById('homeHero').classList.remove('hidden');

  hideMeaning();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonHero(lesson) {
  const theme = BOOK_THEMES[lesson.book] || BOOK_THEMES['1A'];
  const hero = document.getElementById('lessonHero');

  hero.style.background = `linear-gradient(135deg, #ffffff 0%, ${theme.soft} 50%, ${theme.color}66 100%)`;
  hero.style.color = theme.dark;

  hero.innerHTML = `

    <div style="display:flex; justify-content:center; margin-top:6px; flex-direction:column; align-items:center;">
      <div style="
  text-align:center;
  margin-bottom:12px;
">
  <div style="
    font-size:15px;
    letter-spacing:2px;
    opacity:.65;
    margin-bottom:10px;
    font-weight:700;
  ">
    ${lesson.book} · ${lesson.lesson}
  </div>

  <div class="line"
    style="
      gap:16px;
      align-items:flex-end;
      justify-content:center;
      margin:0;
      background:rgba(255,255,255,.45);
      padding:14px 22px;
      border-radius:22px;
    ">
    ${renderTokens(lesson.titleTokens || [])}
  </div>
</div>
    </div>

   <div style="
  margin-top:12px;
  font-size:18px;
  opacity:.75;
  color:${theme.dark};
  font-weight:600;
">
  ${lesson.heroTranslation || ''}
</div>

<div style="
  margin-top:26px;
  font-size:14px;
  opacity:.55;
  font-weight:500;
  display:flex;
  justify-content:center;
  gap:34px;
  flex-wrap:wrap;
">
  <span>Theme: ${lesson.theme}</span>
  <span>Goal: ${lesson.goal}</span>
</div>
  `;
}

function renderKeyWords(lesson) {
  const container = document.getElementById('keyWords');

  const wordCount = lesson.keyWords.length;
  const columns = wordCount <= 6 ? wordCount : Math.ceil(wordCount / 2);

  container.style.gridTemplateColumns = `repeat(${columns}, minmax(120px, 1fr))`;

  container.innerHTML = lesson.keyWords.map(word => `
    <div class="key-card" onclick="speak('${escapeForAttribute(word.text)}')">
      <span class="emoji">${word.emoji || '🔹'}</span>
      <div class="small-pinyin">${word.pinyin}</div>
      <div class="hanzi">${word.text}</div>
      <div class="translation">${word.translation}</div>
    </div>
  `).join('');
}

function renderKeySentences(lesson) {
  const container = document.getElementById('keySentences');

  container.innerHTML = lesson.keySentences.map(sentence => `
    <div class="sentence-card sentence-row"
      onclick="speak('${escapeForAttribute(sentence.speak || flattenTokens(sentence.tokens))}')">

      <div class="sentence-left">
        ${renderLine(sentence.tokens)}
      </div>

      <div class="translation sentence-right">
        ${sentence.translation}
      </div>
    </div>
  `).join('');
}

function renderPractice(lesson) {
  const container = document.getElementById('practiceGrid');

  container.innerHTML = lesson.practice.map(item => `
    <div class="practice-question">
      <strong>${item.question}</strong>
      <span class="inline-pinyin">${item.pinyin || ''}</span>
      <div class="translation">${item.translation || ''}</div>

      ${item.prompt ? `
        <p>
          <b>${item.prompt}</b>
          <span class="inline-pinyin">${item.promptPinyin || ''}</span>
        </p>
      ` : ''}

      <div class="choices">
        ${item.choices.map(choice => `
          <span class="choice" onclick="check(this, ${choice.correct ? 'true' : 'false'})">
            ${choice.text}
            ${choice.pinyin ? `<br><span class="inline-pinyin">${choice.pinyin}</span>` : ''}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderChallenge(lesson) {
  const container = document.getElementById('challengeBox');

  container.innerHTML = `
    <h2 class="section-title">🎯 Challenge：我来说一说</h2>
    ${lesson.challenge.lines.map(tokens => renderLine(tokens)).join('')}
    <div class="translation">${lesson.challenge.translation}</div>
    <div class="tip">${lesson.challenge.tip}</div>
  `;
}

function showLevel(level, btn) {
  if (!currentLesson) return;

  currentLevel = level;

  document.querySelectorAll('#lessonToolbar button').forEach(b => {
    b.classList.remove('active');
  });

  if (btn) btn.classList.add('active');

  const data = currentLesson.readings[level];

  const html = `
    <div class="level-label">${data.label}</div>
    ${data.lines.map(line => renderReadingParagraph(line)).join('')}
    <div class="translation">${data.translation}</div>
    <div class="tip">${data.tip}</div>
  `;

  document.getElementById('reading').innerHTML = html;
  hideMeaning();
}

function renderReadingParagraph(line) {
  const tokens = Array.isArray(line) ? line : line.tokens;
  const lineTranslation = Array.isArray(line) ? '' : (line.translation || '');

  const isDialogue =
    tokens.length >= 2 &&
    /^[\p{Extended_Pictographic}\p{Emoji_Presentation}]+$/u.test(tokens[0].hz || '') &&
    /^[：:]$/.test(tokens[1].hz || '');

  const speakerTokens = isDialogue ? tokens.slice(0, 2) : [];
  const contentTokens = isDialogue ? tokens.slice(2) : tokens;

  const sentences = splitTokensBySentence(contentTokens);

  return `
    <div class="reading-sentence-row ${isDialogue ? 'dialogue-row' : ''}">
      ${isDialogue ? `
        <div class="dialogue-speaker-fixed">
          ${renderTokens(speakerTokens, true)}
        </div>
      ` : ''}

      <div class="sentence-content ${isDialogue ? 'dialogue-content-fixed' : ''}">
        ${sentences.map(sentenceTokens => {
          const text = flattenTokens([...speakerTokens, ...sentenceTokens]);
          const translation = lineTranslation || getSentenceTranslation(sentenceTokens);
          const translationId = 'tr_' + Math.random().toString(36).slice(2, 9);

          return `
            <div class="dialogue-sentence-block">
              ${renderLine(sentenceTokens, true)}
              <div class="sentence-tools">
                <button class="sentence-audio-btn"
                  onclick="event.stopPropagation(); speak('${escapeForAttribute(text)}')"
                  title="Listen">🔊</button>

                <button class="sentence-translate-btn"
                  onclick="event.stopPropagation(); toggleSentenceTranslation('${translationId}')"
                  title="Translation">🌍</button>
              </div>

              <div id="${translationId}" class="sentence-translation">
                ${translation || 'No translation yet.'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function splitTokensBySentence(tokens) {

  const sentences = [];
  let current = [];

  tokens.forEach(t => {

    current.push(t);

    const hz = t.hz || '';

    // 只有真正句末标点才切句
    const isSentenceEnd =
      hz === '。' ||
      hz === '？' ||
      hz === '！' ||
      hz === '.' ||
      hz === '?' ||
      hz === '!';

    if (isSentenceEnd) {

      // 检查这一句是否真的有中文内容
      const hasChineseContent = current.some(token => {

        const text = token.hz || '';

        // 过滤 emoji
        if (/^[\p{Extended_Pictographic}\p{Emoji_Presentation}]+$/u.test(text)) {
          return false;
        }

        // 必须包含中文
        return /[\u4e00-\u9fff]/.test(text);

      });

      // 只有真正句子才加入
      if (hasChineseContent) {
        sentences.push(current);
      }

      current = [];
    }

  });

  // 最后一段
  if (current.length > 0) {

    const hasChineseContent = current.some(token => {

      const text = token.hz || '';

      if (/^[\p{Extended_Pictographic}\p{Emoji_Presentation}]+$/u.test(text)) {
        return false;
      }

      return /[\u4e00-\u9fff]/.test(text);

    });

    if (hasChineseContent) {
      sentences.push(current);
    }
  }

  return sentences;
}

function renderLine(tokens, clickable = false) {
  return `<div class="line">${renderTokens(tokens, clickable)}</div>`;
}

function renderTokens(tokens, clickable = false) {
  let html = '';

  tokens.forEach(t => {
    if (t.pause) {
      html += `<span class="pause">/</span>`;
      return;
    }

    if (t.blank) {
      html += `<span class="fill"></span>`;
      return;
    }

    const hz = t.hz || '';

    // 标点不要单独成为一个元素，直接贴到前一个 token 后面
    if (!t.py && /^[。，？：,.!?]$/.test(hz)) {
      html += `<span class="punct-inline">${hz}</span>`;
      return;
    }

    const meaning = currentLesson && currentLesson.meanings ? currentLesson.meanings[hz] : '';
    const clickAttr = clickable && meaning
      ? `onclick="showMeaning(event, '${escapeForAttribute(meaning)}')"`
      : '';

    html += `
      <span class="token" ${clickAttr}>
        <span class="token-pinyin">${t.py || ''}</span>
        <span class="token-hanzi ${t.cls || ''}">${hz}</span>
      </span>
    `;
  });

  return html;
}

function flattenTokens(tokens) {
  return tokens
    .map(t => {
      if (t.pause || t.blank) return '';

      const text = t.hz || '';

      if (/^[\p{Extended_Pictographic}\p{Emoji_Presentation}]+[：:]?$/u.test(text)) {
        return '';
      }

      return text;
    })
    .join('')
    .replace(/[\/]/g, '')
    .replace(/[👦👧🧒👨👩👴👵👋🎂📚🎤🎨🎮😊🙏❤️🔢🔊📘🔤➗🔬🎵🏃💻🕑❓➕👥👉]/g, '')
    .trim();
}
function getSentenceTranslation(tokens) {
  if (!currentLesson || !currentLesson.meanings) return '';

  const text = flattenTokens(tokens);

  // 1. 优先匹配整句
  if (currentLesson.meanings[text]) {
    return currentLesson.meanings[text];
  }

  // 2. 兜底：按词组 meanings 拼接
  const parts = tokens
    .map(t => {
      if (t.pause || t.blank) return '';
      const hz = t.hz || '';

      if (/^[。，？！：,.!?]$/.test(hz)) return '';
      if (/^[\p{Extended_Pictographic}\p{Emoji_Presentation}]+$/u.test(hz)) return '';

      return currentLesson.meanings[hz] || '';
    })
    .filter(Boolean);

  return parts.join(' · ');
}

function toggleSentenceTranslation(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('show');
}

function speakReading() {
  return;
}

function speak(text) {
  const cleanText = String(text || '').trim();

  if (!cleanText) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.68;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  } else {
    alert('This browser does not support speech synthesis.');
  }
}

function togglePinyin() {
  document.body.classList.toggle('hide-pinyin');
  hideMeaning();
}

function toggleTranslation() {
  document.body.classList.toggle('hide-translation');
  hideMeaning();
}

function togglePageFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function showMeaning(event, meaning) {
  event.stopPropagation();

  const pop = document.getElementById('meaningPop');

  pop.innerHTML = meaning;
  pop.style.display = 'block';

  const rect = event.currentTarget.getBoundingClientRect();
  const left = Math.min(rect.left, window.innerWidth - 280);
  const top = rect.bottom + 8;

  pop.style.left = `${Math.max(12, left)}px`;
  pop.style.top = `${top}px`;
}

function hideMeaning() {
  const pop = document.getElementById('meaningPop');
  if (pop) pop.style.display = 'none';
}

function check(el, isCorrect) {
  const siblings = el.parentElement.querySelectorAll('.choice');

  siblings.forEach(s => {
    s.classList.remove('correct');
    s.classList.remove('wrong');
  });

  el.classList.add(isCorrect ? 'correct' : 'wrong');
}
function copyLessonLink(lessonId, btn) {
  const url =
    window.location.origin +
    window.location.pathname +
    '#' +
    lessonId;

  navigator.clipboard.writeText(url).then(() => {
    const oldText = btn.textContent;
    btn.textContent = '✓';

    setTimeout(() => {
      btn.textContent = oldText;
    }, 1200);
  });
}
function escapeForAttribute(text) {
  return String(text)
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('click', hideMeaning);

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
  initLibrary();

  const lessonId = window.location.hash.replace('#', '');

  if (lessonId && window.LESSONS && window.LESSONS[lessonId]) {
    openLesson(lessonId);
  } else {
    window.scrollTo(0, 0);
  }
});
