window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson9'] = {
  id: '1A-lesson9',
  book: '1A',
  lesson: 'Lesson 9',
  title: '上海在中国。',
  theme: 'Cities and places',
  goal: 'Say where a city is and where you are from.',
  heroTranslation: 'Shanghai is in China. / Where are you from?',
  titleTokens: [
    { py: 'Shànghǎi', hz: '上海', cls: 'place' },
    { py: 'zài', hz: '在', cls: 'location' },
    { py: 'Zhōngguó', hz: '中国', cls: 'country' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🇨🇳', pinyin: 'Zhōngguó', text: '中国', translation: 'China / الصين' },
    { emoji: '🏙️', pinyin: 'Shànghǎi', text: '上海', translation: 'Shanghai / شنغهاي' },
    { emoji: '🏯', pinyin: 'Běijīng', text: '北京', translation: 'Beijing / بكين' },
    { emoji: '🏙️', pinyin: 'Díbài', text: '迪拜', translation: 'Dubai / دبي' },
    { emoji: '🌊', pinyin: 'Ābùzhābǐ', text: '阿布扎比', translation: 'Abu Dhabi / أبوظبي' },
    { emoji: '📍', pinyin: 'zài', text: '在', translation: 'in / at / في' },
    { emoji: '❓', pinyin: 'nǎlǐ', text: '哪里', translation: 'where / أين' },
    { emoji: '🧭', pinyin: 'láizì', text: '来自', translation: 'come from / من' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'Zhōngguó', hz: '中国', cls: 'country' },
        { hz: '。' }
      ],
      translation: 'Shanghai is in China. / شنغهاي في الصين.'
    },
    {
      tokens: [
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'nǎlǐ', hz: '哪里' },
        { hz: '？' }
      ],
      translation: 'Where is Shanghai? / أين شنغهاي؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我' },
        { py: 'láizì', hz: '来自', cls: 'from' },
        { py: 'Díbài', hz: '迪拜', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'I come from Dubai. / أنا من دبي.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读',
      translation: 'Shanghai is in China. Beijing is in China. Dubai is in the UAE. Abu Dhabi is in the UAE.',
      tip: 'Reading Goal: Read each sentence 3 times. Pause when you see / .',
      lines: [
        [
          { py: 'Shànghǎi', hz: '上海', cls: 'place' }, { pause: true },
          { py: 'zài', hz: '在', cls: 'location' }, { pause: true },
          { py: 'Zhōngguó', hz: '中国', cls: 'country' }, { hz: '。' }
        ],
        [
          { py: 'Běijīng', hz: '北京', cls: 'place' }, { pause: true },
          { py: 'zài', hz: '在', cls: 'location' }, { pause: true },
          { py: 'Zhōngguó', hz: '中国', cls: 'country' }, { hz: '。' }
        ],
        [
          { py: 'Díbài', hz: '迪拜', cls: 'place' }, { pause: true },
          { py: 'zài', hz: '在', cls: 'location' }, { pause: true },
          { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' }, { hz: '。' }
        ],
        [
          { py: 'Ābùzhābǐ', hz: '阿布扎比', cls: 'place' }, { pause: true },
          { py: 'zài', hz: '在', cls: 'location' }, { pause: true },
          { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' }, { hz: '。' }
        ]
      ]
    },
    B: {
      label: 'Level B 中级｜我会问答',
      translation: 'Where is Shanghai? Shanghai is in China. Where are you from? I come from Dubai.',
      tip: 'Practice in pairs. One student asks questions and the other answers. Then switch roles.',
      lines: [
        [
          { py: '', hz: '👧：', cls: 'speaker' },
          { py: 'Shànghǎi', hz: '上海', cls: 'place' },
          { py: 'zài', hz: '在', cls: 'location' },
          { py: 'nǎlǐ', hz: '哪里' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '🧒：', cls: 'speaker' },
          { py: 'Shànghǎi', hz: '上海', cls: 'place' },
          { py: 'zài', hz: '在', cls: 'location' },
          { py: 'Zhōngguó', hz: '中国', cls: 'country' },
          { hz: '。' }
        ],
        [
          { py: '', hz: '👧：', cls: 'speaker' },
          { py: 'Nǐ', hz: '你' },
          { py: 'láizì', hz: '来自', cls: 'from' },
          { py: 'nǎlǐ', hz: '哪里' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '🧒：', cls: 'speaker' },
          { py: 'Wǒ', hz: '我' },
          { py: 'láizì', hz: '来自', cls: 'from' },
          { py: 'Díbài', hz: '迪拜', cls: 'place' },
          { hz: '。' }
        ]
      ]
    },
    C: {
      label: 'Level C 高级｜我会表达',
      translation: 'My name is Lily. I come from Dubai. Shanghai is in China, and Beijing is also in China. I like Chinese cities.',
      tip: 'Use your own city and country to make a one-minute Chinese introduction.',
      lines: [
        [
          { py: 'Wǒ', hz: '我' },
          { py: 'jiào', hz: '叫' },
          { py: 'Lìli', hz: '莉莉' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我' },
          { py: 'láizì', hz: '来自', cls: 'from' },
          { py: 'Díbài', hz: '迪拜', cls: 'place' },
          { hz: '。' }
        ],
        [
          { py: 'Shànghǎi', hz: '上海', cls: 'place' },
          { py: 'zài', hz: '在', cls: 'location' },
          { py: 'Zhōngguó', hz: '中国', cls: 'country' },
          { hz: '，' },
          { py: 'Běijīng', hz: '北京', cls: 'place' },
          { py: 'yě', hz: '也' },
          { py: 'zài', hz: '在', cls: 'location' },
          { py: 'Zhōngguó', hz: '中国', cls: 'country' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ', hz: '我' },
          { py: 'xǐhuan', hz: '喜欢' },
          { py: 'Zhōngguó de chéngshì', hz: '中国的城市', cls: 'country' },
          { hz: '。' }
        ]
      ]
    }
  },

  practice: [
    {
      question: '1. “上海” 是哪一个？',
      pinyin: '“Shànghǎi” shì nǎ yí ge?',
      translation: 'Which one is “Shanghai”?',
      choices: [
        { text: '北京', pinyin: 'Běijīng', correct: false },
        { text: '上海', pinyin: 'Shànghǎi', correct: true },
        { text: '迪拜', pinyin: 'Díbài', correct: false }
      ]
    },
    {
      question: '2. “上海在中国。” 是什么意思？',
      pinyin: '“Shànghǎi zài Zhōngguó.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Shanghai is in China.', correct: true },
        { text: 'I come from Shanghai.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你来自哪里？',
      promptPinyin: 'Nǐ láizì nǎlǐ?',
      choices: [
        { text: '我来自迪拜。', pinyin: 'Wǒ láizì Díbài.', correct: true },
        { text: '上海在中国。', pinyin: 'Shànghǎi zài Zhōngguó.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我' },
        { py: 'láizì', hz: '来自', cls: 'from' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我' },
        { py: 'shì', hz: '是' },
        { blank: true },
        { py: 'rén', hz: '人' },
        { hz: '。' }
      ],
      [
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'Zhōngguó', hz: '中国', cls: 'country' },
        { hz: '。' }
      ]
    ],
    translation: 'I come from ______. / I am ______. / Shanghai is in China.',
    tip: 'Use your own city and country to make a short Chinese introduction.'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '叫': 'be called / يُدعى',
    '莉莉': 'Lily / ليلي',
    '上海': 'Shanghai / شنغهاي',
    '北京': 'Beijing / بكين',
    '中国': 'China / الصين',
    '迪拜': 'Dubai / دبي',
    '阿联酋': 'UAE / الإمارات',
    '阿布扎比': 'Abu Dhabi / أبوظبي',
    '在': 'in / at / في',
    '哪里': 'where / أين',
    '来自': 'come from / من',
    '也': 'also / أيضًا',
    '喜欢': 'like / يحب',
    '中国的城市': 'Chinese cities / المدن الصينية',
    '人': 'person / شخص',
    '是': 'am / is / are / يكون'
  }
};