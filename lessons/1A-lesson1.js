window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson1'] = {
  id: '1A-lesson1',
  book: '1A',
  lesson: 'Lesson 1',
  title: '汉语拼音',
  theme: 'Chinese Pinyin',
  goal: 'Learn tones and simple pinyin reading with easy Chinese words.',
  heroTranslation: 'Chinese Pinyin.',
  titleTokens: [
    { py: 'Hànyǔ', hz: '汉语', cls: 'activity' },
    { py: 'pīnyīn', hz: '拼音', cls: 'activity' }
  ],

  keyWords: [
    { emoji: '🔤', pinyin: 'pīnyīn', text: '拼音', translation: 'pinyin / بينيين' },
    { emoji: '1️⃣', pinyin: 'bā', text: '八', translation: 'eight / ثمانية' },
    { emoji: '👩', pinyin: 'mā', text: '妈', translation: 'mom / أم' },
    { emoji: '👨', pinyin: 'bà', text: '爸', translation: 'dad / أب' },
    { emoji: '🐎', pinyin: 'mǎ', text: '马', translation: 'horse / حصان' },
    { emoji: '👋', pinyin: 'nǐ', text: '你', translation: 'you / أنت' },
    { emoji: '😊', pinyin: 'hǎo', text: '好', translation: 'good / جيد' },
    { emoji: '👋', pinyin: 'nǐ hǎo', text: '你好', translation: 'hello / مرحبًا' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ hǎo', hz: '你好！', cls: 'greeting' }
      ],
      translation: 'Hello! / مرحبًا!'
    },
    {
      tokens: [
        { py: 'Wǒ hǎo', hz: '我好。', cls: 'self' }
      ],
      translation: 'I am good. / أنا بخير.'
    },
    {
      tokens: [
        { py: 'Māma hǎo', hz: '妈妈好。', cls: 'person' }
      ],
      translation: 'Hello, Mom. / مرحبًا يا أمي.'
    },
    {
      tokens: [
        { py: 'Wǒ huì dú pīnyīn', hz: '我会读拼音。', cls: 'activity' }
      ],
      translation: 'I can read pinyin. / أستطيع قراءة البينيين.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读四声',
      translation: 'I can read the four tones: bā, bá, bǎ, bà; mā, má, mǎ, mà.',
      tip: 'Reading Goal: Read the tone marks clearly.',
      lines: [
  {
    tokens: [
      { py: 'bā', hz: '八', cls: 'time' }
    ],
    translation: 'Read: bā. / اقرأ: bā.'
  },
  {
    tokens: [
      { py: 'bá', hz: '拔', cls: 'activity' }
    ],
    translation: 'Read: bá. / اقرأ: bá.'
  },
  {
    tokens: [
      { py: 'bǎ', hz: '把', cls: 'activity' }
    ],
    translation: 'Read: bǎ. / اقرأ: bǎ.'
  },
  {
    tokens: [
      { py: 'bà', hz: '爸', cls: 'person' }
    ],
    translation: 'Read: bà. / اقرأ: bà.'
  },
  {
    tokens: [
      { py: 'mā', hz: '妈', cls: 'person' }
    ],
    translation: 'Read: mā. / اقرأ: mā.'
  },
  {
    tokens: [
      { py: 'mǎ', hz: '马', cls: 'activity' }
    ],
    translation: 'Read: mǎ. / اقرأ: mǎ.'
  }
]
    },

    B: {
      label: 'Level B 中级｜我会读简单词语',
      translation: 'Dad. Mom. I. You. Good. Hello.',
      tip: 'Reading Goal: Read simple Chinese words with pinyin.',
      lines: [
        {
          tokens: [
            { py: 'bàba', hz: '爸爸', cls: 'person' },
            { py: 'māma', hz: '妈妈', cls: 'person' }
          ],
          translation: 'Dad. Mom. / أبي. أمي.'
        },
        {
          tokens: [
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'nǐ', hz: '你', cls: 'person' },
            { py: 'hǎo', hz: '好', cls: 'like' }
          ],
          translation: 'I. You. Good. / أنا. أنت. جيد.'
        },
        {
          tokens: [
            { py: 'nǐ hǎo', hz: '你好！', cls: 'greeting' }
          ],
          translation: 'Hello! / مرحبًا!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会读简单句子',
      translation: 'Hello. I am good. Hello, Mom. Hello, Dad. I can read pinyin.',
      tip: 'Speaking Goal: Read simple sentences with pinyin.',
      lines: [
        {
          tokens: [
            { py: 'Nǐ hǎo', hz: '你好！', cls: 'greeting' }
          ],
          translation: 'Hello! / مرحبًا!'
        },
        {
          tokens: [
            { py: 'Wǒ hǎo', hz: '我好。', cls: 'self' }
          ],
          translation: 'I am good. / أنا بخير.'
        },
        {
          tokens: [
            { py: 'Māma hǎo', hz: '妈妈好。', cls: 'person' }
          ],
          translation: 'Hello, Mom. / مرحبًا يا أمي.'
        },
        {
          tokens: [
            { py: 'Bàba hǎo', hz: '爸爸好。', cls: 'person' }
          ],
          translation: 'Hello, Dad. / مرحبًا يا أبي.'
        },
        {
          tokens: [
            { py: 'Wǒ huì dú pīnyīn', hz: '我会读拼音。', cls: 'activity' }
          ],
          translation: 'I can read pinyin. / أستطيع قراءة البينيين.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. 哪一个是 “bā”？',
      pinyin: 'Nǎ yí ge shì “bā”?',
      translation: 'Which one is “bā”?',
      choices: [
        { text: '八', correct: true },
        { text: '爸', correct: false },
        { text: '马', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “mā”？',
      pinyin: 'Nǎ yí ge shì “mā”?',
      translation: 'Which one is “mā”?',
      choices: [
        { text: '妈', correct: true },
        { text: '马', correct: false },
        { text: '骂', correct: false }
      ]
    },
    {
      question: '3. “你好” 是什么意思？',
      pinyin: '“Nǐ hǎo” shì shénme yìsi?',
      translation: 'What does “你好” mean?',
      choices: [
        { text: 'hello', correct: true },
        { text: 'thank you', correct: false },
        { text: 'goodbye', correct: false }
      ]
    },
    {
      question: '4. “我会读拼音。” 是什么意思？',
      pinyin: '“Wǒ huì dú pīnyīn.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I can read pinyin.', correct: true },
        { text: 'I can write Arabic.', correct: false },
        { text: 'I cannot read.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'bā', hz: '八', cls: 'time' },
        { py: 'mā', hz: '妈', cls: 'person' },
        { py: 'bà', hz: '爸', cls: 'person' },
        { py: 'mǎ', hz: '马', cls: 'activity' }
      ],
      [
        { py: 'Nǐ hǎo', hz: '你好！', cls: 'greeting' }
      ],
      [
        { py: 'Wǒ huì dú pīnyīn', hz: '我会读拼音。', cls: 'activity' }
      ]
    ],
    translation: 'Read the sounds first. Then say: Hello! I can read pinyin.',
    tip: 'Try to read the tones clearly: bā, mā, bà, mǎ.'
  },

  meanings: {
    '汉语': 'Chinese language / اللغة الصينية',
    '拼音': 'pinyin / بينيين',
    '八': 'eight / ثمانية',
    '拔': 'pull / يسحب',
    '把': 'hold; handle / يمسك',
    '爸': 'dad / أب',
    '妈': 'mom / أم',
    '麻': 'numb; hemp /麻 sound word / كلمة لصوت má',
    '马': 'horse / حصان',
    '骂': 'scold / يوبخ',
    '爸爸': 'dad / أبي',
    '妈妈': 'mom / أمي',
    '我': 'I; me / أنا',
    '你': 'you / أنت',
    '好': 'good / جيد',
    '你好': 'hello / مرحبًا',
    '你好！': 'Hello! / مرحبًا!',
    '我好': 'I am good / أنا بخير',
    '我好。': 'I am good. / أنا بخير.',
    '妈妈好': 'Hello, Mom / مرحبًا يا أمي',
    '妈妈好。': 'Hello, Mom. / مرحبًا يا أمي.',
    '爸爸好': 'Hello, Dad / مرحبًا يا أبي',
    '爸爸好。': 'Hello, Dad. / مرحبًا يا أبي.',
    '我会读拼音': 'I can read pinyin / أستطيع قراءة البينيين',
    '我会读拼音。': 'I can read pinyin. / أستطيع قراءة البينيين.'
  }
};