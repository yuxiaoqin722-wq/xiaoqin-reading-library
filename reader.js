let currentLesson = null;
let currentLevel = 'A';

function initLibrary() {
  renderBookFilters();
  renderBookSections('1A');
}

function renderBookFilters() {
  const container = document.getElementById('bookFilters');
  const books = Object.keys(BOOK_THEMES);

  container.innerHTML = books.map(book => {
    const theme = BOOK_THEMES[book];

    return `
      <button
        class="book-filter-btn ${book === '1A' ? 'active' : ''}"
        style="
          --book-color:${theme.color};
          --book-soft:${theme.soft};
          --book-dark:${theme.dark};
        "
        onclick="renderBookSections('${book}', this)">
        ${book}
      </button>
    `;
  }).join('');
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
// renderChallenge(lesson);

  // Force open Reading module
document.querySelectorAll('.lesson-module').forEach(module => {
  module.classList.add('hidden');
});

document.getElementById('readingModule').classList.remove('hidden');

// Force active Reading tab
document.querySelectorAll('.lesson-module-btn').forEach(button => {
  button.classList.remove('active');
});

document.querySelectorAll('.lesson-module-btn')[0].classList.add('active');

// Force render Level A directly
currentLevel = 'A';

document.querySelectorAll('#lessonToolbar button').forEach(button => {
  button.classList.remove('active');
});

document.querySelectorAll('#lessonToolbar button')[0].classList.add('active');

const data = currentLesson.readings.A;

document.getElementById('reading').innerHTML = `
  <div class="level-label">${getEnglishLevelLabel('A', data)}</div>
  ${data.lines.map(line => renderReadingParagraph(line)).join('')}
  <div class="translation">${data.translation}</div>
`;

hideMeaning();

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

let currentQuizIndex = 0;
let currentQuizQuestions = [];
let currentQuizAnswers = [];

function renderPractice(lesson) {
  currentQuizIndex = 0;
  currentQuizQuestions = generateQuizQuestions(lesson);
  currentQuizAnswers = new Array(currentQuizQuestions.length).fill(null);
  renderQuizQuestion();
}

function cleanQuestionText(text) {
  return String(text || '')
    .replace(/^\s*\d+\s*[.。]\s*/, '')
    .trim();
}

function extractChineseTarget(text) {
  const str = String(text || '');

  const quoted = str.match(/[“"]([^”"]+)[”"]/);
  if (quoted && /[\u4e00-\u9fff]/.test(quoted[1])) {
    return quoted[1].replace(/[。？！?！]/g, '').trim();
  }

  const chineseOnly = str
    .replace(/^\s*\d+\s*[.。]\s*/, '')
    .replace(/是什么意思/g, '')
    .replace(/是哪一个/g, '')
    .replace(/什么意思/g, '')
    .replace(/[“”"？?]/g, '')
    .trim();

  return /[\u4e00-\u9fff]/.test(chineseOnly) ? chineseOnly : '';
}

function extractPinyinTarget(text) {
  const str = String(text || '');

  const quoted = str.match(/[“"]([^”"]+)[”"]/);
  if (quoted) {
    return quoted[1].trim();
  }

  return str
    .replace(/^\s*\d+\s*[.。]\s*/, '')
    .replace(/shì shénme yìsi\??/i, '')
    .replace(/shì nǎ yí ge\??/i, '')
    .replace(/[“”"？?]/g, '')
    .trim();
}

function extractEnglishTarget(text) {
  const str = String(text || '');

  const quoted = str.match(/[“"]([^”"]+)[”"]/);
  if (quoted && !/[\u4e00-\u9fff]/.test(quoted[1])) {
    return quoted[1].trim();
  }

  return '';
}

function generateQuizQuestions(lesson) {
  const quiz = [];

  // 1. Keep original practice questions
  if (Array.isArray(lesson.practice)) {
    lesson.practice.forEach(item => {
     const cleanQuestion = cleanQuestionText(item.question || '');
const englishTarget = extractEnglishTarget(item.question || '');
const chineseTarget = englishTarget ? '' : extractChineseTarget(item.prompt || item.question || '');
const pinyinTarget = item.promptPinyin || extractPinyinTarget(item.pinyin || '');

quiz.push({
  type: englishTarget ? 'english-to-chinese' : 'practice',
  instruction: item.translation || 'Choose the correct answer.',
  question: cleanQuestion,
  pinyin: '',
  english: englishTarget,
  prompt: chineseTarget || item.prompt || '',
  promptPinyin: chineseTarget ? pinyinTarget : (item.promptPinyin || ''),
  choices: item.choices || []
});
    });
  }

  // 2. Key Words: Chinese -> English meaning
  if (Array.isArray(lesson.keyWords)) {
    lesson.keyWords.slice(0, 3).forEach(word => {
      const correctMeaning = getEnglishMeaning(word.translation);
      const wrongChoices = lesson.keyWords
        .filter(w => w.text !== word.text)
        .map(w => getEnglishMeaning(w.translation))
        .filter(Boolean);

      quiz.push({
        type: 'word-meaning',
        instruction: 'Choose the correct meaning.',
        chinese: word.text,
        pinyin: word.pinyin,
        choices: makeChoices(correctMeaning, wrongChoices)
      });
    });
  }

  // 3. Key Words: English -> Chinese
  if (Array.isArray(lesson.keyWords)) {
    lesson.keyWords.slice(0, 2).forEach(word => {
      const meaning = getEnglishMeaning(word.translation);
      const wrongChoices = lesson.keyWords
        .filter(w => w.text !== word.text)
        .map(w => w.text);

      quiz.push({
        type: 'english-to-chinese',
        instruction: 'Choose the correct Chinese word.',
        english: meaning,
        choices: makeChoices(word.text, wrongChoices)
      });
    });
  }

  // 4. Key Sentences: Chinese sentence -> English meaning
  if (Array.isArray(lesson.keySentences)) {
    lesson.keySentences.slice(0, 2).forEach(sentence => {
      const correctMeaning = getEnglishMeaning(sentence.translation);
      const wrongChoices = lesson.keySentences
        .filter(s => s !== sentence)
        .map(s => getEnglishMeaning(s.translation))
        .filter(Boolean);

      if (correctMeaning && wrongChoices.length) {
        quiz.push({
          type: 'sentence-meaning',
          instruction: 'Choose the correct meaning.',
          tokens: sentence.tokens,
          choices: makeChoices(correctMeaning, wrongChoices)
        });
      }
    });
  }

  // 5. Reading A: sentence translation questions
  const readingA = lesson.readings && lesson.readings.A && Array.isArray(lesson.readings.A.lines)
    ? lesson.readings.A.lines
    : [];

  readingA.slice(0, 2).forEach(line => {
    const tokens = Array.isArray(line) ? line : line.tokens;
    const translation = Array.isArray(line) ? '' : line.translation;
    const correctMeaning = getEnglishMeaning(translation);

    if (!tokens || !correctMeaning) return;

    const wrongChoices = readingA
      .filter(other => other !== line)
      .map(other => getEnglishMeaning(Array.isArray(other) ? '' : other.translation))
      .filter(Boolean);

    if (wrongChoices.length) {
      quiz.push({
        type: 'reading-meaning',
        instruction: 'Read and choose the correct meaning.',
        tokens,
        choices: makeChoices(correctMeaning, wrongChoices)
      });
    }
  });

  return shuffleArray(quiz).slice(0, 10);
}

function renderQuizQuestion() {
  const container = document.getElementById('practiceGrid');

  if (!currentQuizQuestions.length) {
    container.innerHTML = `<div class="quiz-card">No quiz yet.</div>`;
    return;
  }

  const item = currentQuizQuestions[currentQuizIndex];
  const answer = currentQuizAnswers[currentQuizIndex];
  const progressPercent = ((currentQuizIndex + 1) / currentQuizQuestions.length) * 100;

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-top">
        <div class="quiz-progress">Question ${currentQuizIndex + 1} / ${currentQuizQuestions.length}</div>
        <div class="quiz-progress-bar">
          <div style="width:${progressPercent}%"></div>
        </div>
      </div>

      <div class="quiz-instruction">${item.instruction || 'Choose the correct answer.'}</div>

      ${renderQuizPrompt(item)}

      <div class="quiz-choices">
        ${item.choices.map(choice => {
          const selected = answer && answer.selected === choice.text;
          const shouldShowCorrect = answer && choice.correct;
          const shouldShowWrong = selected && answer && !answer.correct;

          return `
            <button
              class="quiz-choice ${shouldShowCorrect ? 'correct' : ''} ${shouldShowWrong ? 'wrong' : ''}"
              onclick="checkQuizChoice(this, ${choice.correct ? 'true' : 'false'}, '${escapeForAttribute(choice.text)}')"
              ${answer ? 'disabled' : ''}>
              ${choice.text}
              ${choice.pinyin ? `<span class="inline-pinyin">${choice.pinyin}</span>` : ''}
            </button>
          `;
        }).join('')}
      </div>

      ${answer ? `
        <div class="quiz-feedback ${answer.correct ? 'correct' : 'wrong'}">
          ${answer.correct ? '✓ Correct!' : '✗ Not yet. The correct answer is shown above.'}
        </div>
      ` : ''}

      <div class="quiz-nav">
        <button onclick="prevQuizQuestion()" ${currentQuizIndex === 0 ? 'disabled' : ''}>← Previous</button>

        ${currentQuizIndex === currentQuizQuestions.length - 1
          ? `<button onclick="finishQuiz()">Finish</button>`
          : `<button onclick="nextQuizQuestion()">Next →</button>`
        }
      </div>
    </div>
  `;
}

function renderQuizPrompt(item) {
  if (item.tokens) {
    return `
      <div class="quiz-chinese-card">
        ${renderLine(item.tokens)}
      </div>
    `;
  }

  if (item.chinese) {
    return `
      <div class="quiz-chinese-card">
        <div class="quiz-pinyin">${item.pinyin || ''}</div>
        <div class="quiz-hanzi">${item.chinese}</div>
      </div>
    `;
  }

  if (item.english) {
    return `
      <div class="quiz-english-card">
        ${item.english}
      </div>
    `;
  }

  if (item.prompt) {
  const hasChinese = /[\u4e00-\u9fff]/.test(item.prompt);

  return `
    <div class="quiz-chinese-card">
      ${item.promptPinyin ? `<div class="quiz-pinyin">${item.promptPinyin}</div>` : ''}
      <div class="${hasChinese ? 'quiz-hanzi' : 'quiz-question-text'}">
        ${item.prompt}
      </div>
    </div>
  `;
}

  return `
    <div class="quiz-question-text">
      ${item.question || ''}
      ${item.pinyin ? `<span class="inline-pinyin">${item.pinyin}</span>` : ''}
    </div>
  `;
}

function prevQuizQuestion() {
  if (currentQuizIndex > 0) {
    currentQuizIndex--;
    renderQuizQuestion();
  }
}

function nextQuizQuestion() {
  if (currentQuizIndex < currentQuizQuestions.length - 1) {
    currentQuizIndex++;
    renderQuizQuestion();
  }
}

function checkQuizChoice(btn, isCorrect, selectedText) {
  if (currentQuizAnswers[currentQuizIndex]) return;

  currentQuizAnswers[currentQuizIndex] = {
    selected: selectedText,
    correct: isCorrect
  };

  renderQuizQuestion();
}

function finishQuiz() {
  const total = currentQuizQuestions.length;
  const correct = currentQuizAnswers.filter(answer => answer && answer.correct).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  const container = document.getElementById('practiceGrid');

  container.innerHTML = `
    <div class="quiz-card quiz-result-card">
      <div class="quiz-result-title">🏆 Quiz Finished!</div>

      <div class="quiz-score">${correct} / ${total}</div>
      <div class="quiz-score-percent">${percent}%</div>

      <div class="quiz-result-message">
        ${wrong === 0
          ? 'Excellent! You got everything correct.'
          : `You got ${wrong} question${wrong > 1 ? 's' : ''} wrong. Try again!`
        }
      </div>

      <div class="quiz-nav quiz-result-actions">
        <button onclick="restartQuiz()">Do Again</button>
        <button onclick="showLessonModule('reading', document.querySelector('.lesson-module-btn'))">Back to Reading</button>
      </div>
    </div>
  `;
}

function restartQuiz() {
  if (!currentLesson) return;
  currentQuizIndex = 0;
  currentQuizQuestions = generateQuizQuestions(currentLesson);
  currentQuizAnswers = new Array(currentQuizQuestions.length).fill(null);
  renderQuizQuestion();
}

function getEnglishMeaning(translation) {
  if (!translation) return '';
  return String(translation).split('/')[0].trim();
}

function makeChoices(correct, wrongChoices) {
  const cleanWrong = [...new Set(wrongChoices)]
    .filter(item => item && item !== correct)
    .slice(0, 3);

  const choices = [
    { text: correct, correct: true },
    ...cleanWrong.map(text => ({ text, correct: false }))
  ];

  return shuffleArray(choices);
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
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

function showLessonModule(moduleName, btn = null) {
  document.querySelectorAll('.lesson-module').forEach(module => {
    module.classList.add('hidden');
  });

  const target = document.getElementById(moduleName + 'Module');
  if (target) {
    target.classList.remove('hidden');
  }

  document.querySelectorAll('.lesson-module-btn').forEach(button => {
    button.classList.remove('active');
  });

  if (btn) {
    btn.classList.add('active');
  }

  hideMeaning();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cleanLevelLabel(label) {
  return String(label || '')
    .replace('初级｜', '· ')
    .replace('中级｜', '· ')
    .replace('高级｜', '· ')
    .replace('初级 |', '· ')
    .replace('中级 |', '· ')
    .replace('高级 |', '· ');
}

function getEnglishLevelLabel(level, data) {
  const tip = String(data.tip || '')
    .replace(/^Reading Goal:\s*/i, '')
    .replace(/^Speaking Goal:\s*/i, '')
    .trim();

  return `Level ${level} · ${tip}`;
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
    <div class="level-label">${getEnglishLevelLabel(level, data)}</div>
${data.lines.map(line => renderReadingParagraph(line)).join('')}
<div class="translation">${data.translation}</div>
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
