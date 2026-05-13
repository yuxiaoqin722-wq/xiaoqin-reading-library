window.LESSONS = window.LESSONS || {};

window.LESSONS['1C-lesson4'] = {
  id: '1C-lesson4',
  book: '1C',
  lesson: 'Lesson 4',
  title: '我喜欢唱歌。',
  theme: 'My hobbies',
  goal: 'Say what you like and what you do not like.',
  heroTranslation: 'I like singing. / What do you like to do?',
  titleTokens: [
    { py: 'Wǒ', hz: '我' },
    { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
    { py: 'chànggē', hz: '唱歌', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🎤', pinyin: 'chànggē', text: '唱歌', translation: 'sing / يغني' },
    { emoji: '💃', pinyin: 'tiàowǔ', text: '跳舞', translation: 'dance / يرقص' },
    { emoji: '🎮', pinyin: 'wán yóuxì', text: '玩游戏', translation: 'play games / يلعب لعبة' },
    { emoji: '🌐', pinyin: 'shàngwǎng', text: '上网', translation: 'go online / يتصفح الإنترنت' },
    { emoji: '🎨', pinyin: 'huà huà', text: '画画', translation: 'draw / يرسم' },
    { emoji: '🐪', pinyin: 'qí luòtuo', text: '骑骆驼', translation: 'ride a camel / يركب جملا' },
    { emoji: '💚', pinyin: 'xǐhuan', text: '喜欢', translation: 'like / يحب' },
    { emoji: '🚫', pinyin: 'bù xǐhuan', text: '不喜欢', translation: "don’t like / لا يحب" }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ', hz: '我' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'chànggē', hz: '唱歌', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I like singing. / أنا أحب الغناء.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我' },
        { py: 'bù xǐhuan', hz: '不喜欢', cls: 'not-like' },
        { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' },
        { hz: '。' }
      ],
      translation: "I don’t like dancing. / أنا لا أحب الرقص."
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'zuò', hz: '做' },
        { py: 'shénme', hz: '什么' },
        { hz: '？' }
      ],
      translation: 'What do you like to do? / ماذا تحب أن تفعل؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读',
      translation: "I like singing. I like drawing. I like playing games. I don’t like dancing.",
      tip: 'Reading Goal: Read each sentence 3 times. Pause when you see / .',
      lines: [
        [
          { py: 'Wǒ', hz: '我' }, { pause: true },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' }, { pause: true },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' }, { hz: '。' }, { hz: '🎤' }
        ],
        [
          { py: 'Wǒ', hz: '我' }, { pause: true },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' }, { pause: true },
          { py: 'huà huà', hz: '画画', cls: 'activity' }, { hz: '。' }, { hz: '🎨' }
        ],
        [
          { py: 'Wǒ', hz: '我' }, { pause: true },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' }, { pause: true },
          { py: 'wán yóuxì', hz: '玩游戏', cls: 'activity' }, { hz: '。' }, { hz: '🎮' }
        ],
        [
          { py: 'Wǒ', hz: '我' }, { pause: true },
          { py: 'bù xǐhuan', hz: '不喜欢', cls: 'not-like' }, { pause: true },
          { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' }, { hz: '。' }, { hz: '💃' }
        ]
      ]
    },
    B: {
      label: 'Level B 中级｜我会问答',
      translation: "What do you like to do? I like singing. Do you like drawing? I like drawing. I don’t like dancing.",
      tip: 'Practice in pairs. One student asks questions and the other answers. Then switch roles.',
      lines: [
        [
          { py: '', hz: '👧：', cls: 'speaker' },
          { py: 'Nǐ', hz: '你' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'zuò', hz: '做' },
          { py: 'shénme', hz: '什么' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '🧒：', cls: 'speaker' },
          { py: 'Wǒ', hz: '我' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { hz: '。' },
          { hz: '🎤' }
        ],
        [
          { py: '', hz: '👧：', cls: 'speaker' },
          { py: 'Nǐ', hz: '你' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'huà huà', hz: '画画', cls: 'activity' },
          { py: 'ma', hz: '吗' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '🧒：', cls: 'speaker' },
          { py: 'Wǒ', hz: '我' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'huà huà', hz: '画画', cls: 'activity' },
          { hz: '。' },
          { hz: '🎨' }
        ],
        [
          { py: '', hz: '🧒：', cls: 'speaker' },
          { py: 'Wǒ', hz: '我' },
          { py: 'bù xǐhuan', hz: '不喜欢', cls: 'not-like' },
          { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' },
          { hz: '。' }
        ]
      ]
    },
    C: {
      label: 'Level C 高级｜我会表达',
      translation: "My name is Lily. I like singing and drawing. I don’t like playing games. After school, I like singing with my friends. Singing makes me happy.",
      tip: 'Use your own name and real hobbies to make a one-minute Chinese introduction.',
      lines: [
        [
          { py: 'Wǒ', hz: '我' },
          { py: 'jiào', hz: '叫' },
          { py: 'Lìli', hz: '莉莉' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { hz: '，' },
          { py: 'yě', hz: '也' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'huà huà', hz: '画画', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我' },
          { py: 'bù xǐhuan', hz: '不喜欢', cls: 'not-like' },
          { py: 'wán yóuxì', hz: '玩游戏', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Fàngxué yǐhòu', hz: '放学以后', cls: 'time' },
          { hz: '，' },
          { py: 'wǒ', hz: '我' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'hé péngyou', hz: '和朋友' },
          { py: 'yìqǐ', hz: '一起' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Chànggē', hz: '唱歌', cls: 'activity' },
          { py: 'ràng', hz: '让' },
          { py: 'wǒ', hz: '我' },
          { py: 'hěn', hz: '很' },
          { py: 'kāixīn', hz: '开心' },
          { hz: '。' },
          { hz: '😊' }
        ]
      ]
    }
  },

  practice: [
    {
      question: '1. “唱歌” 是哪一个？',
      pinyin: '“chànggē” shì nǎ yí ge?',
      translation: 'Which one is “sing”?',
      choices: [
        { text: '🎤 唱歌', pinyin: 'chànggē', correct: true },
        { text: '🎮 玩游戏', pinyin: 'wán yóuxì', correct: false },
        { text: '🎨 画画', pinyin: 'huà huà', correct: false }
      ]
    },
    {
      question: '2. “我不喜欢跳舞。” 是什么意思？',
      pinyin: '“Wǒ bù xǐhuan tiàowǔ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I like dancing.', correct: false },
        { text: "I don’t like dancing.", correct: true }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你喜欢做什么？',
      promptPinyin: 'Nǐ xǐhuan zuò shénme?',
      choices: [
        { text: '我喜欢画画。', pinyin: 'Wǒ xǐhuan huà huà.', correct: true },
        { text: '你好。', pinyin: 'Nǐ hǎo.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我' },
        { py: 'bù xǐhuan', hz: '不喜欢', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'zuò', hz: '做' },
        { py: 'shénme', hz: '什么' },
        { hz: '？' }
      ]
    ],
    translation: 'I like ______. / I don’t like ______. / What do you like to do?',
    tip: 'Start with Level A first, then challenge Level B or Level C. Focus on speaking confidently before memorizing.'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '喜欢': 'like / يحب',
    '不喜欢': 'don’t like / لا يحب',
    '唱歌': 'sing / يغني',
    '画画': 'draw / يرسم',
    '玩游戏': 'play games / يلعب لعبة',
    '跳舞': 'dance / يرقص',
    '上网': 'go online / يتصفح الإنترنت',
    '骑骆驼': 'ride a camel / يركب جملا',
    '做': 'do / يفعل',
    '什么': 'what / ماذا',
    '吗': 'question word / أداة سؤال',
    '也': 'also / أيضًا',
    '叫': 'be called / يُدعى',
    '莉莉': 'Lily / ليلي',
    '放学以后': 'after school / بعد المدرسة',
    '和朋友': 'with friends / مع الأصدقاء',
    '一起': 'together / معًا',
    '让': 'make / يجعل',
    '很': 'very / جدًا',
    '开心': 'happy / سعيد'
  }
};