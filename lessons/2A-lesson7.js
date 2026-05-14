window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson7'] = {
  id: '2A-lesson7',
  book: '2A',
  lesson: 'Lesson 7',
  title: '我在学习。',
  theme: 'What are you doing?',
  goal: 'Talk about what someone is doing now.',
  heroTranslation: 'I am studying.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'zài', hz: '在', cls: 'time' },
    { py: 'xuéxí', hz: '学习', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '⏳', pinyin: 'zài', text: '在', translation: 'be doing now / الآن' },
    { emoji: '📚', pinyin: 'xuéxí', text: '学习', translation: 'study / يدرس' },
    { emoji: '📺', pinyin: 'kàn diànshì', text: '看电视', translation: 'watch TV / يشاهد التلفاز' },
    { emoji: '🎹', pinyin: 'tán gāngqín', text: '弹钢琴', translation: 'play piano / يعزف البيانو' },
    { emoji: '☎️', pinyin: 'dǎ diànhuà', text: '打电话', translation: 'make a phone call / يتصل هاتفيًا' },
    { emoji: '🥋', pinyin: 'dǎ tàijíquán', text: '打太极拳', translation: 'do Tai Chi / يمارس تاي تشي' },
    { emoji: '❓', pinyin: 'zuò shénme', text: '做什么', translation: 'do what / ماذا يفعل' },
    { emoji: '👨', pinyin: 'bàba', text: '爸爸', translation: 'dad / أبي' },
    { emoji: '👩', pinyin: 'māma', text: '妈妈', translation: 'mom / أمي' },
    { emoji: '👴', pinyin: 'yéye', text: '爷爷', translation: 'grandpa / الجد' },
    { emoji: '👵', pinyin: 'nǎinai', text: '奶奶', translation: 'grandma / الجدة' },
    { emoji: '💭', pinyin: 'xiǎng', text: '想', translation: 'miss / يشتاق' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'time' },
        { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What are you doing? / ماذا تفعل؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zài', hz: '在', cls: 'time' },
        { py: 'xuéxí', hz: '学习', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I am studying. / أنا أدرس.'
    },
    {
      tokens: [
        { py: 'Bàba', hz: '爸爸', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'time' },
        { py: 'kàn shū', hz: '看书', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Dad is reading. / أبي يقرأ.'
    },
    {
      tokens: [
        { py: 'Māma', hz: '妈妈', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'time' },
        { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Mom is playing the piano. / أمي تعزف البيانو.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读动作',
      translation: 'I am studying. I am watching TV. I am making a phone call. I am playing the piano.',
      tip: 'Reading Goal: Read “我在……” slowly. Point to the action picture.',
      lines: [
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'xuéxí', hz: '学习', cls: 'activity' },
          { hz: '。' },
          { hz: '📚' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'kàn diànshì', hz: '看电视', cls: 'activity' },
          { hz: '。' },
          { hz: '📺' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'dǎ diànhuà', hz: '打电话', cls: 'activity' },
          { hz: '。' },
          { hz: '☎️' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
          { hz: '。' },
          { hz: '🎹' }
        ]
      ]
    },

    B: {
      label: 'Level B 中级｜我会简单问答',
      translation: 'What are you doing? I am studying. What are you doing? I am making a phone call.',
      tip: 'Pair Work: One student asks “你在做什么？”, the other answers “我在……”。',
      lines: [
        [
          { py: '', hz: '👦', cls: 'speaker' },
          { hz: '：' },
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '👧', cls: 'speaker' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'xuéxí', hz: '学习', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: '', hz: '👧', cls: 'speaker' },
          { hz: '：' },
          { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '👦', cls: 'speaker' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'dǎ diànhuà', hz: '打电话', cls: 'activity' },
          { hz: '。' }
        ]
      ]
    },

    C: {
      label: 'Level C 高级｜我会说家人在做什么',
      translation: 'Dad is reading. Mom is playing the piano. I am studying. What are you doing?',
      tip: 'Speaking Goal: Say what you are doing, then say what your family is doing.',
      lines: [
        [
          { py: 'Bàba', hz: '爸爸', cls: 'person' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'kàn shū', hz: '看书', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Māma', hz: '妈妈', cls: 'person' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Yéye', hz: '爷爷', cls: 'person' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'dǎ tàijíquán', hz: '打太极拳', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'xuéxí', hz: '学习', cls: 'activity' },
          { hz: '。' }
        ],
        [
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'zài', hz: '在', cls: 'time' },
          { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
          { hz: '？' }
        ]
      ]
    }
  },

  practice: [
    {
      question: '1. “我在学习。” 是什么意思？',
      pinyin: '“Wǒ zài xuéxí.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am studying.', correct: true },
        { text: 'I am watching TV.', correct: false },
        { text: 'I am playing the piano.', correct: false }
      ]
    },
    {
      question: '2. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你在做什么？',
      promptPinyin: 'Nǐ zài zuò shénme?',
      choices: [
        { text: '我在学习。', pinyin: 'Wǒ zài xuéxí.', correct: true },
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: false }
      ]
    },
    {
      question: '3. “爸爸在看书。” 是什么意思？',
      pinyin: '“Bàba zài kàn shū.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Dad is reading.', correct: true },
        { text: 'Mom is playing the piano.', correct: false }
      ]
    },
    {
      question: '4. “弹钢琴” 是哪一个？',
      pinyin: '“Tán gāngqín” shì nǎ yí ge?',
      translation: 'Which one is “play the piano”?',
      choices: [
        { text: '🎹 弹钢琴', pinyin: 'tán gāngqín', correct: true },
        { text: '📺 看电视', pinyin: 'kàn diànshì', correct: false },
        { text: '📚 学习', pinyin: 'xuéxí', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zài', hz: '在', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Bàba', hz: '爸爸', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Māma', hz: '妈妈', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'time' },
        { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
        { hz: '？' }
      ]
    ],
    translation: 'I am ______. Dad is ______. Mom is ______. What are you doing?',
    tip: 'Use real actions. You can say: 学习、看电视、打电话、弹钢琴。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '他': 'he / هو',
    '爸爸': 'dad / أبي',
    '妈妈': 'mom / أمي',
    '爷爷': 'grandpa / الجد',
    '奶奶': 'grandma / الجدة',
    '在': 'be doing now / الآن',
    '做什么': 'do what / ماذا يفعل',
    '你在做什么': 'what are you doing / ماذا تفعل',
    '我在学习': 'I am studying / أنا أدرس',
    '学习': 'study / يدرس',
    '看电视': 'watch TV / يشاهد التلفاز',
    '看书': 'read a book / يقرأ كتابًا',
    '打电话': 'make a phone call / يتصل هاتفيًا',
    '弹钢琴': 'play the piano / يعزف البيانو',
    '打太极拳': 'do Tai Chi / يمارس تاي تشي',
    '爸爸在看书': 'Dad is reading / أبي يقرأ',
    '妈妈在弹钢琴': 'Mom is playing the piano / أمي تعزف البيانو',
    '爷爷在打太极拳': 'Grandpa is doing Tai Chi / الجد يمارس تاي تشي',
    '想': 'miss / يشتاق',
    '想你': 'miss you / أشتاق إليك',
    '非常想你': 'miss you very much / أشتاق إليك كثيرًا',
    '再见': 'goodbye / وداعًا'
  }
};