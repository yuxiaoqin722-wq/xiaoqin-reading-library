window.LESSONS = window.LESSONS || {};

window.LESSONS['2B-lesson6'] = {
  id: '2B-lesson6',
  book: '2B',
  lesson: 'Lesson 6',
  title: '我买了一部手机。',
  theme: 'Shopping and things',
  goal: 'Talk about what people bought with “买了 / 还买了”.',
  heroTranslation: 'I bought a mobile phone.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'mǎi le', hz: '买了', cls: 'activity' },
    { py: 'yí bù shǒujī', hz: '一部手机', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🛒', pinyin: 'mǎi le', text: '买了', translation: 'bought / اشترى' },
    { emoji: '➕', pinyin: 'hái mǎi le', text: '还买了', translation: 'also bought / اشترى أيضًا' },
    { emoji: '📱', pinyin: 'yí bù shǒujī', text: '一部手机', translation: 'one mobile phone / هاتف واحد' },
    { emoji: '💻', pinyin: 'yì tái diànnǎo', text: '一台电脑', translation: 'one computer / حاسوب واحد' },
    { emoji: '🎒', pinyin: 'yí ge shūbāo', text: '一个书包', translation: 'one schoolbag / حقيبة مدرسية واحدة' },
    { emoji: '📘', pinyin: 'yì běn shū', text: '一本书', translation: 'one book / كتاب واحد' },
    { emoji: '📚', pinyin: 'jǐ běn shū', text: '几本书', translation: 'some books / عدة كتب' },
    { emoji: '✏️', pinyin: 'yì zhī bǐ', text: '一支笔', translation: 'one pen / قلم واحد' },
    { emoji: '✏️', pinyin: 'jǐ zhī bǐ', text: '几支笔', translation: 'some pens / عدة أقلام' },
    { emoji: '🏬', pinyin: 'shāngdiàn', text: '商店', translation: 'shop / متجر' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'mǎi le', hz: '买了', cls: 'activity' },
        { py: 'shénme', hz: '什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What did you buy? / ماذا اشتريت؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'mǎi le', hz: '买了', cls: 'activity' },
        { py: 'yí bù shǒujī', hz: '一部手机', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I bought one mobile phone. / اشتريت هاتفًا واحدًا.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'hái mǎi le', hz: '还买了', cls: 'activity' },
        { py: 'yì běn shū', hz: '一本书', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I also bought one book. / اشتريت أيضًا كتابًا واحدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说买了什么',
      translation: 'I bought one mobile phone. I bought one book. I bought one pen. What did you buy?',
      tip: 'Reading Goal: Read “我买了……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yí bù shǒujī', hz: '一部手机', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I bought one mobile phone. / اشتريت هاتفًا واحدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yì běn shū', hz: '一本书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I bought one book. / اشتريت كتابًا واحدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yì zhī bǐ', hz: '一支笔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I bought one pen. / اشتريت قلمًا واحدًا.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What did you buy? / ماذا اشتريت؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会说昨天买了什么',
      translation: 'Where did you go yesterday? I went to a shop. What did you buy? I bought one mobile phone. I also bought one pen and two books.',
      tip: 'Pair Work: Ask and answer with “昨天 / 买了 / 还买了”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zuótiān', hz: '昨天', cls: 'time' },
            { py: 'qù nǎr le', hz: '去哪儿了', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Where did you go yesterday? / إلى أين ذهبت أمس؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qù le', hz: '去了', cls: 'activity' },
            { py: 'shāngdiàn', hz: '商店', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I went to a shop. / ذهبت إلى متجر.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What did you buy? / ماذا اشتريت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yí bù shǒujī', hz: '一部手机', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I bought one mobile phone. / اشتريت هاتفًا واحدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hái mǎi le', hz: '还买了', cls: 'activity' },
            { py: 'yì zhī bǐ', hz: '一支笔', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'liǎng běn shū', hz: '两本书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also bought one pen and two books. / اشتريت أيضًا قلمًا واحدًا وكتابين.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我买了什么',
      translation: 'Yesterday I went to a shop. I bought one mobile phone, and I also bought one schoolbag, some books, and some pens. My friend bought one computer and one book. We are very happy.',
      tip: 'Speaking Goal: Say what you and your friend bought in a natural paragraph.',
      lines: [
        {
          tokens: [
            { py: 'Zuótiān', hz: '昨天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'qù le', hz: '去了', cls: 'activity' },
            { py: 'shāngdiàn', hz: '商店', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Yesterday I went to a shop. / أمس ذهبت إلى متجر.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yí bù shǒujī', hz: '一部手机', cls: 'activity' },
            { hz: '，' },
            { py: 'hái mǎi le', hz: '还买了', cls: 'activity' },
            { py: 'yí ge shūbāo', hz: '一个书包', cls: 'activity' },
            { hz: '、' },
            { py: 'jǐ běn shū', hz: '几本书', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'jǐ zhī bǐ', hz: '几支笔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I bought one mobile phone, and I also bought one schoolbag, some books, and some pens. / اشتريت هاتفًا واحدًا، واشتريت أيضًا حقيبة مدرسية، وعدة كتب، وعدة أقلام.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yì tái diànnǎo', hz: '一台电脑', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'yì běn shū', hz: '一本书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend bought one computer and one book. / اشترى صديقي حاسوبًا واحدًا وكتابًا واحدًا.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'person' },
            { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'We are very happy. / نحن سعداء جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “买了” 是什么意思？',
      pinyin: '“Mǎi le” shì shénme yìsi?',
      translation: 'What does “买了” mean?',
      choices: [
        { text: 'bought / اشترى', correct: true },
        { text: 'want / يريد', correct: false },
        { text: 'eat / يأكل', correct: false }
      ]
    },
    {
      question: '2. “我买了一部手机。” 是什么意思？',
      pinyin: '“Wǒ mǎi le yí bù shǒujī.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I bought one mobile phone.', correct: true },
        { text: 'I bought one book.', correct: false },
        { text: 'I want one mobile phone.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你买了什么？',
      promptPinyin: 'Nǐ mǎi le shénme?',
      choices: [
        { text: '我买了一本书。', pinyin: 'Wǒ mǎi le yì běn shū.', correct: true },
        { text: '我喜欢喝果汁。', pinyin: 'Wǒ xǐhuan hē guǒzhī.', correct: false }
      ]
    },
    {
      question: '4. “还买了” 是什么意思？',
      pinyin: '“Hái mǎi le” shì shénme yìsi?',
      translation: 'What does “还买了” mean?',
      choices: [
        { text: 'also bought', correct: true },
        { text: 'do not want', correct: false },
        { text: 'usually eat', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zuótiān', hz: '昨天', cls: 'time' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'qù le', hz: '去了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'mǎi le', hz: '买了', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'hái mǎi le', hz: '还买了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'mǎi le', hz: '买了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'person' },
        { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'Yesterday I went to ______. I bought ______, and I also bought ______. My friend bought ______. We are very happy.',
    tip: 'Use words: 商店、手机、电脑、书包、书、笔。Use measure words: 一部、一台、一个、一本、一支、几本、几支。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '我们': 'we / نحن',
    '我的朋友': 'my friend / صديقي',
    '昨天': 'yesterday / أمس',
    '去了': 'went to / ذهب إلى',
    '商店': 'shop / متجر',
    '买': 'buy / يشتري',
    '买了': 'bought / اشترى',
    '还': 'also / أيضًا',
    '还买了': 'also bought / اشترى أيضًا',
    '什么': 'what / ماذا',
    '你买了什么': 'What did you buy? / ماذا اشتريت؟',
    '手机': 'mobile phone / هاتف',
    '电脑': 'computer / حاسوب',
    '书包': 'schoolbag / حقيبة مدرسية',
    '书': 'book / كتاب',
    '笔': 'pen / قلم',
    '一部手机': 'one mobile phone / هاتف واحد',
    '一台电脑': 'one computer / حاسوب واحد',
    '一个书包': 'one schoolbag / حقيبة مدرسية واحدة',
    '一本书': 'one book / كتاب واحد',
    '两本书': 'two books / كتابان',
    '几本书': 'some books / عدة كتب',
    '一支笔': 'one pen / قلم واحد',
    '几支笔': 'some pens / عدة أقلام',
    '和': 'and / و',
    '很开心': 'very happy / سعيد جدًا',
    '我买了一部手机': 'I bought one mobile phone / اشتريت هاتفًا واحدًا'
  }
};