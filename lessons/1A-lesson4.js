window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson4'] = {
  id: '1A-lesson4',
  book: '1A',
  lesson: 'Lesson 4',
  title: '这是九。',
  theme: 'Numbers',
  goal: 'Learn numbers and ask “What number is this?”',
  heroTranslation: 'This is nine.',
  titleTokens: [
    { py: 'Zhè shì', hz: '这是', cls: 'activity' },
    { py: 'jiǔ', hz: '九', cls: 'time' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '1️⃣', pinyin: 'yī', text: '一', translation: 'one / واحد' },
    { emoji: '2️⃣', pinyin: 'èr', text: '二', translation: 'two / اثنان' },
    { emoji: '3️⃣', pinyin: 'sān', text: '三', translation: 'three / ثلاثة' },
    { emoji: '4️⃣', pinyin: 'sì', text: '四', translation: 'four / أربعة' },
    { emoji: '5️⃣', pinyin: 'wǔ', text: '五', translation: 'five / خمسة' },
    { emoji: '6️⃣', pinyin: 'liù', text: '六', translation: 'six / ستة' },
    { emoji: '7️⃣', pinyin: 'qī', text: '七', translation: 'seven / سبعة' },
    { emoji: '8️⃣', pinyin: 'bā', text: '八', translation: 'eight / ثمانية' },
    { emoji: '9️⃣', pinyin: 'jiǔ', text: '九', translation: 'nine / تسعة' },
    { emoji: '🔟', pinyin: 'shí', text: '十', translation: 'ten / عشرة' },
    { emoji: '👉', pinyin: 'zhè', text: '这', translation: 'this / هذا' },
    { emoji: '❓', pinyin: 'jǐ', text: '几', translation: 'what number / أي رقم' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'jǐ', hz: '几', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'What number is this? / ما هذا الرقم؟'
    },
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'jiǔ', hz: '九', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'This is nine. / هذا رقم تسعة.'
    },
    {
      tokens: [
        { py: 'Zhè bú shì', hz: '这不是', cls: 'not-like' },
        { py: 'jiǔ', hz: '九', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'This is not nine. / هذا ليس رقم تسعة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读数字',
      translation: 'One, two, three, four, five, six, seven, eight, nine, ten. / واحد، اثنان، ثلاثة، أربعة، خمسة، ستة، سبعة، ثمانية، تسعة، عشرة.',
      tip: 'Reading Goal: Read numbers 1–10 slowly and clearly.',
      lines: [
        {
          tokens: [
            { py: 'yī', hz: '一', cls: 'time' },
            { hz: ' ' },
            { py: 'èr', hz: '二', cls: 'time' },
            { hz: ' ' },
            { py: 'sān', hz: '三', cls: 'time' }
          ],
          translation: 'One, two, three. / واحد، اثنان، ثلاثة.'
        },
        {
          tokens: [
            { py: 'sì', hz: '四', cls: 'time' },
            { hz: ' ' },
            { py: 'wǔ', hz: '五', cls: 'time' },
            { hz: ' ' },
            { py: 'liù', hz: '六', cls: 'time' }
          ],
          translation: 'Four, five, six. / أربعة، خمسة، ستة.'
        },
        {
          tokens: [
            { py: 'qī', hz: '七', cls: 'time' },
            { hz: ' ' },
            { py: 'bā', hz: '八', cls: 'time' },
            { hz: ' ' },
            { py: 'jiǔ', hz: '九', cls: 'time' }
          ],
          translation: 'Seven, eight, nine. / سبعة، ثمانية، تسعة.'
        },
        {
          tokens: [
            { py: 'shí', hz: '十', cls: 'time' }
          ],
          translation: 'Ten. / عشرة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问数字',
      translation: 'What number is this? This is nine. Haha, this is not nine. This is six. / ما هذا الرقم؟ هذا رقم تسعة. هاها، هذا ليس رقم تسعة. هذا رقم ستة.',
      tip: 'Pair Work: One student asks, one student answers with a number card.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'jǐ', hz: '几', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What number is this? / ما هذا الرقم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'jiǔ', hz: '九', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This is nine. / هذا رقم تسعة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hāhā', hz: '哈哈', cls: 'like' },
            { hz: '，' },
            { py: 'zhè bú shì', hz: '这不是', cls: 'not-like' },
            { py: 'jiǔ', hz: '九', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Haha, this is not nine. / هاها، هذا ليس رقم تسعة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'liù', hz: '六', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This is six. / هذا رقم ستة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会读数字绕口令',
      translation: 'Four is four. Ten is ten. Fourteen is fourteen. Forty is forty. Forty-four is forty-four. / أربعة هي أربعة. عشرة هي عشرة. أربعة عشر هي أربعة عشر. أربعون هي أربعون. أربعة وأربعون هي أربعة وأربعون.',
      tip: 'Speaking Goal: Read slowly first, then read faster. Pay attention to sì and shí.',
      lines: [
        {
          tokens: [
            { py: 'Sì', hz: '四', cls: 'time' },
            { py: 'shì', hz: '是' },
            { py: 'sì', hz: '四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Four is four. / أربعة هي أربعة.'
        },
        {
          tokens: [
            { py: 'Shí', hz: '十', cls: 'time' },
            { py: 'shì', hz: '是' },
            { py: 'shí', hz: '十', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Ten is ten. / عشرة هي عشرة.'
        },
        {
          tokens: [
            { py: 'Shísì', hz: '十四', cls: 'time' },
            { py: 'shì', hz: '是' },
            { py: 'shísì', hz: '十四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Fourteen is fourteen. / أربعة عشر هي أربعة عشر.'
        },
        {
          tokens: [
            { py: 'Sìshí', hz: '四十', cls: 'time' },
            { py: 'shì', hz: '是' },
            { py: 'sìshí', hz: '四十', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Forty is forty. / أربعون هي أربعون.'
        },
        {
          tokens: [
            { py: 'Sìshí sì', hz: '四十四', cls: 'time' },
            { py: 'shì', hz: '是' },
            { py: 'sìshí sì', hz: '四十四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Forty-four is forty-four. / أربعة وأربعون هي أربعة وأربعون.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. 哪一个是 “九”？',
      pinyin: 'Nǎ yí ge shì “jiǔ”?',
      translation: 'Which one is “nine”?',
      choices: [
        { text: '9 九', correct: true },
        { text: '6 六', correct: false },
        { text: '2 二', correct: false }
      ]
    },
    {
      question: '2. “这是几？” 是什么意思？',
      pinyin: '“Zhè shì jǐ?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What number is this?', correct: true },
        { text: 'This is nine.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '这是几？',
      promptPinyin: 'Zhè shì jǐ?',
      choices: [
        { text: '这是五。', pinyin: 'Zhè shì wǔ.', correct: true },
        { text: '你好。', pinyin: 'Nǐhǎo.', correct: false }
      ]
    },
    {
      question: '4. “四十” 是什么意思？',
      pinyin: '“Sìshí” shì shénme yìsi?',
      translation: 'What does “四十” mean?',
      choices: [
        { text: 'forty', correct: true },
        { text: 'fourteen', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zhè bú shì', hz: '这不是', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Sì', hz: '四', cls: 'time' },
        { py: 'shì', hz: '是' },
        { py: 'sì', hz: '四', cls: 'time' },
        { hz: '，' },
        { py: 'shí', hz: '十', cls: 'time' },
        { py: 'shì', hz: '是' },
        { py: 'shí', hz: '十', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Shísì', hz: '十四', cls: 'time' },
        { py: 'shì', hz: '是' },
        { py: 'shísì', hz: '十四', cls: 'time' },
        { hz: '，' },
        { py: 'sìshí', hz: '四十', cls: 'time' },
        { py: 'shì', hz: '是' },
        { py: 'sìshí', hz: '四十', cls: 'time' },
        { hz: '。' }
      ]
    ],
    translation: 'This is ______. This is not ______. Four is four, ten is ten. Fourteen is fourteen, forty is forty. / هذا رقم ______. هذا ليس رقم ______. أربعة هي أربعة، وعشرة هي عشرة. أربعة عشر هي أربعة عشر، وأربعون هي أربعون.',
    tip: 'First fill in a number card. Then try the number tongue twister slowly.'
  },

  meanings: {
    '这': 'this / هذا',
    '这是': 'this is / هذا هو',
    '是': 'is / يكون',
    '几': 'what number / أي رقم',
    '这是几': 'What number is this? / ما هذا الرقم؟',
    '这不是': 'this is not / هذا ليس',
    '一': 'one / واحد',
    '二': 'two / اثنان',
    '三': 'three / ثلاثة',
    '四': 'four / أربعة',
    '五': 'five / خمسة',
    '六': 'six / ستة',
    '七': 'seven / سبعة',
    '八': 'eight / ثمانية',
    '九': 'nine / تسعة',
    '十': 'ten / عشرة',
    '十四': 'fourteen / أربعة عشر',
    '四十': 'forty / أربعون',
    '四十四': 'forty-four / أربعة وأربعون',
    '哈哈': 'haha / هاها',
    '这是九': 'This is nine. / هذا رقم تسعة.',
    '这是六': 'This is six. / هذا رقم ستة.',
    '这不是九': 'This is not nine. / هذا ليس رقم تسعة.',
    '四是四': 'Four is four. / أربعة هي أربعة.',
    '十是十': 'Ten is ten. / عشرة هي عشرة.',
    '十四是十四': 'Fourteen is fourteen. / أربعة عشر هي أربعة عشر.',
    '四十是四十': 'Forty is forty. / أربعون هي أربعون.',
    '四十四是四十四': 'Forty-four is forty-four. / أربعة وأربعون هي أربعة وأربعون.',
    '上': 'up / فوق'
  }
};