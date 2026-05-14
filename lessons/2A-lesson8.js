window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson8'] = {
  id: '2A-lesson8',
  book: '2A',
  lesson: 'Lesson 8',
  title: '我两点有中文课。',
  theme: 'School timetable',
  goal: 'Talk about school subjects and class time.',
  heroTranslation: 'I have Chinese class at two o’clock.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
    { py: 'yǒu', hz: '有' },
    { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📘', pinyin: 'Zhōngwén kè', text: '中文课', translation: 'Chinese class / درس اللغة الصينية' },
    { emoji: '🔤', pinyin: 'Yīngyǔ kè', text: '英语课', translation: 'English class / درس اللغة الإنجليزية' },
    { emoji: '➗', pinyin: 'shùxué kè', text: '数学课', translation: 'math class / درس الرياضيات' },
    { emoji: '🔬', pinyin: 'kēxué kè', text: '科学课', translation: 'science class / درس العلوم' },
    { emoji: '🎵', pinyin: 'yīnyuè kè', text: '音乐课', translation: 'music class / درس الموسيقى' },
    { emoji: '🎨', pinyin: 'měishù kè', text: '美术课', translation: 'art class / درس الفنون' },
    { emoji: '🏃', pinyin: 'tǐyù kè', text: '体育课', translation: 'PE class / درس الرياضة' },
    { emoji: '💻', pinyin: 'diànnǎo kè', text: '电脑课', translation: 'computer class / درس الكمبيوتر' },
    { emoji: '🕑', pinyin: 'liǎng diǎn', text: '两点', translation: "two o'clock / الساعة الثانية" },
    { emoji: '❓', pinyin: 'shénme kè', text: '什么课', translation: 'what class / أي درس' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { py: 'shénme kè', hz: '什么课', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What classes do you have today? / ما الدروس لديك اليوم؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
        { hz: '。' }
      ],
      translation: "I have Chinese class at two o'clock. / لدي درس صيني في الساعة الثانية."
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'shénme kè', hz: '什么课', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What class do you like? / أي درس تحب؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读课程',
      translation: 'Chinese class. English class. Math class. Science class. I have Chinese class.',
      tip: 'Reading Goal: Read the subject names clearly. Point to each class picture.',
      lines: [
        [
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' },
          { hz: '📘' }
        ],
        [
          { py: 'Yīngyǔ kè', hz: '英语课', cls: 'activity' },
          { hz: '。' },
          { hz: '🔤' }
        ],
        [
          { py: 'shùxué kè', hz: '数学课', cls: 'activity' },
          { hz: '。' },
          { hz: '➗' }
        ],
        [
          { py: 'kēxué kè', hz: '科学课', cls: 'activity' },
          { hz: '。' },
          { hz: '🔬' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ]
      ]
    },

    B: {
      label: 'Level B 中级｜我会说时间和课程',
      translation: "I have Chinese class at two o'clock. I have English class in the afternoon. I like Chinese class.",
      tip: 'Pair Work: Say the time first, then say the class.',
      lines: [
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xiàwǔ', hz: '下午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Yīngyǔ kè', hz: '英语课', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xiàwǔ', hz: '下午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'shùxué kè', hz: '数学课', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ]
      ]
    },

    C: {
      label: 'Level C 高级｜我会问今天有什么课',
      translation: "What classes do you have today? I have Chinese class at two o'clock. What class do you like?",
      tip: 'Speaking Goal: Ask about today’s classes, answer with time and class, then ask what class your friend likes.',
      lines: [
        [
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'jīntiān', hz: '今天', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'shénme kè', hz: '什么课', cls: 'activity' },
          { hz: '？' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'jīntiān', hz: '今天', cls: 'time' },
          { py: 'xiàwǔ', hz: '下午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'shùxué kè', hz: '数学课', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'shénme kè', hz: '什么课', cls: 'activity' },
          { hz: '？' }
        ]
      ]
    }
  },

  practice: [
    {
      question: '1. “中文课” 是哪一个？',
      pinyin: '“Zhōngwén kè” shì nǎ yí ge?',
      translation: 'Which one is Chinese class?',
      choices: [
        { text: '📘 中文课', pinyin: 'Zhōngwén kè', correct: true },
        { text: '➗ 数学课', pinyin: 'shùxué kè', correct: false },
        { text: '🎵 音乐课', pinyin: 'yīnyuè kè', correct: false }
      ]
    },
    {
      question: '2. “我两点有中文课。” 是什么意思？',
      pinyin: '“Wǒ liǎng diǎn yǒu Zhōngwén kè.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: "I have Chinese class at two o'clock.", correct: true },
        { text: 'I like Chinese class.', correct: false },
        { text: 'What class do you have?', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你今天有什么课？',
      promptPinyin: 'Nǐ jīntiān yǒu shénme kè?',
      choices: [
        { text: '我有中文课。', pinyin: 'Wǒ yǒu Zhōngwén kè.', correct: true },
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: false }
      ]
    },
    {
      question: '4. “你喜欢什么课？” 是什么意思？',
      pinyin: '“Nǐ xǐhuan shénme kè?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What class do you like?', correct: true },
        { text: 'What is your name?', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'yǒu', hz: '有' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'shénme kè', hz: '什么课', cls: 'activity' },
        { hz: '？' }
      ]
    ],
    translation: 'I have ______ today. / I have ______ at ______. / I like ______. / What class do you like?',
    tip: 'Use your real timetable. Say one class, one time, and one class you like.'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '有': 'have / لديه',
    '今天': 'today / اليوم',
    '上午': 'morning / صباحًا',
    '中午': 'noon / الظهر',
    '下午': 'afternoon / بعد الظهر',
    '两点': "two o'clock / الساعة الثانية",
    '几点': 'what time / أي ساعة',
    '什么课': 'what class / أي درس',
    '中文课': 'Chinese class / درس اللغة الصينية',
    '英语课': 'English class / درس اللغة الإنجليزية',
    '数学课': 'math class / درس الرياضيات',
    '科学课': 'science class / درس العلوم',
    '音乐课': 'music class / درس الموسيقى',
    '美术课': 'art class / درس الفنون',
    '体育课': 'PE class / درس الرياضة',
    '电脑课': 'computer class / درس الكمبيوتر',
    '社会科学课': 'social studies class / درس الدراسات الاجتماعية',
    '阿拉伯语课': 'Arabic class / درس اللغة العربية',
    '你今天有什么课': 'what classes do you have today / ما الدروس لديك اليوم',
    '我两点有中文课': "I have Chinese class at two o'clock / لدي درس صيني في الساعة الثانية",
    '你喜欢什么课': 'what class do you like / أي درس تحب',
    '我喜欢中文课': 'I like Chinese class / أحب درس اللغة الصينية',
    '迟到': 'late / متأخر',
    '我迟到了': 'I am late / لقد تأخرت',
    '再见': 'goodbye / وداعًا',
    '学': 'study / دراسة'
  }
};