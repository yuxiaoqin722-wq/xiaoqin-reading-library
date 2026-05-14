window.LESSONS = window.LESSONS || {};

window.LESSONS['3B-lesson2'] = {
  id: '3B-lesson2',
  book: '3B',
  lesson: 'Lesson 2',
  title: '她说汉语说得很好。',
  theme: 'Talking about skills',
  goal: 'Talk about how well someone can do something.',
  heroTranslation: 'She speaks Chinese very well.',
  titleTokens: [
    { py: 'Tā', hz: '她', cls: 'person' },
    { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
    { py: 'shuō de', hz: '说得', cls: 'activity' },
    { py: 'hěn hǎo', hz: '很好', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🗣️', pinyin: 'shuō Hànyǔ', text: '说汉语', translation: 'speak Chinese / يتحدث الصينية' },
    { emoji: '🗣️', pinyin: 'shuō Yīngyǔ', text: '说英语', translation: 'speak English / يتحدث الإنجليزية' },
    { emoji: '✍️', pinyin: 'xiě Hànzì', text: '写汉字', translation: 'write Chinese characters / يكتب الحروف الصينية' },
    { emoji: '🎤', pinyin: 'chànggē', text: '唱歌', translation: 'sing / يغني' },
    { emoji: '💃', pinyin: 'tiàowǔ', text: '跳舞', translation: 'dance / يرقص' },
    { emoji: '⚽', pinyin: 'tī zúqiú', text: '踢足球', translation: 'play football / يلعب كرة القدم' },
    { emoji: '🏀', pinyin: 'dǎ lánqiú', text: '打篮球', translation: 'play basketball / يلعب كرة السلة' },
    { emoji: '😊', pinyin: 'hěn hǎo', text: '很好', translation: 'very good / جيد جدًا' },
    { emoji: '👍', pinyin: 'búcuò', text: '不错', translation: 'not bad / لا بأس به' },
    { emoji: '🙂', pinyin: 'yìbān', text: '一般', translation: 'so-so / عادي' },
    { emoji: '❓', pinyin: 'zěnmeyàng', text: '怎么样', translation: 'how is it / كيف' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Tā', hz: '她', cls: 'person' },
        { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
        { py: 'shuō de', hz: '说得', cls: 'activity' },
        { py: 'hěn hǎo', hz: '很好', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'She speaks Chinese very well. / إنها تتحدث الصينية بشكل جيد جدًا.'
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
        { py: 'shuō de', hz: '说得', cls: 'activity' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'like' },
        { hz: '？' }
      ],
      translation: 'How well do you speak Chinese? / كيف تتحدث الصينية؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
        { py: 'shuō de', hz: '说得', cls: 'activity' },
        { py: 'búcuò', hz: '不错', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I speak Chinese pretty well. / أتحدث الصينية بشكل لا بأس به.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读技能',
      translation: 'She speaks Chinese very well. He sings very well. She dances very well. He plays football well.',
      tip: 'Reading Goal: Read the skill first, then read the level word.',
      lines: [
        [
          { py: 'Tā', hz: '她', cls: 'person' },
          { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
          { py: 'shuō de', hz: '说得', cls: 'activity' },
          { py: 'hěn hǎo', hz: '很好', cls: 'like' },
          { hz: '。' }
        ],
        [
          { py: 'Tā', hz: '他', cls: 'person' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { py: 'chàng de', hz: '唱得', cls: 'activity' },
          { py: 'hěn hǎo', hz: '很好', cls: 'like' },
          { hz: '。' }
        ],
        [
          { py: 'Tā', hz: '她', cls: 'person' },
          { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' },
          { py: 'tiào de', hz: '跳得', cls: 'activity' },
          { py: 'hěn hǎo', hz: '很好', cls: 'like' },
          { hz: '。' }
        ],
        [
          { py: 'Tā', hz: '他', cls: 'person' },
          { py: 'tī zúqiú', hz: '踢足球', cls: 'activity' },
          { py: 'tī de', hz: '踢得', cls: 'activity' },
          { py: 'búcuò', hz: '不错', cls: 'like' },
          { hz: '。' }
        ]
      ]
    },

    B: {
      label: 'Level B 中级｜我会问能力',
      translation: 'How well do you speak Chinese? I speak Chinese very well. How well do you sing? I sing so-so.',
      tip: 'Pair Work: Ask with “怎么样？” Answer with “很好 / 不错 / 一般”。',
      lines: [
        [
          { py: '', hz: '👧', cls: 'speaker' },
          { hz: '：' },
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
          { py: 'shuō de', hz: '说得', cls: 'activity' },
          { py: 'zěnmeyàng', hz: '怎么样', cls: 'like' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '👦', cls: 'speaker' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
          { py: 'shuō de', hz: '说得', cls: 'activity' },
          { py: 'hěn hǎo', hz: '很好', cls: 'like' },
          { hz: '。' }
        ],
        [
          { py: '', hz: '👦', cls: 'speaker' },
          { hz: '：' },
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { py: 'chàng de', hz: '唱得', cls: 'activity' },
          { py: 'zěnmeyàng', hz: '怎么样', cls: 'like' },
          { hz: '？' }
        ],
        [
          { py: '', hz: '👧', cls: 'speaker' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { py: 'chàng de', hz: '唱得', cls: 'activity' },
          { py: 'yìbān', hz: '一般', cls: 'like' },
          { hz: '。' }
        ]
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍朋友的能力',
      translation: 'My friend is Aisha. She dances very well. She also sings very well. My friend Fatima speaks Chinese very well.',
      tip: 'Speaking Goal: Introduce one friend and say what he or she does well.',
      lines: [
        [
          { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
          { py: 'jiào', hz: '叫', cls: 'name' },
          { py: 'Āyīshā', hz: '阿伊莎', cls: 'name' },
          { hz: '。' }
        ],
        [
          { py: 'Tā', hz: '她', cls: 'person' },
          { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' },
          { py: 'tiào de', hz: '跳得', cls: 'activity' },
          { py: 'hěn hǎokàn', hz: '很好看', cls: 'like' },
          { hz: '。' }
        ],
        [
          { py: 'Tā', hz: '她', cls: 'person' },
          { py: 'hái huì', hz: '还会', cls: 'activity' },
          { py: 'chànggē', hz: '唱歌', cls: 'activity' },
          { hz: '，' },
          { py: 'chàng de', hz: '唱得', cls: 'activity' },
          { py: 'hěn hǎotīng', hz: '很好听', cls: 'like' },
          { hz: '。' }
        ],
        [
          { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
          { py: 'jiào', hz: '叫', cls: 'name' },
          { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
          { hz: '。' }
        ],
        [
          { py: 'Tā', hz: '她', cls: 'person' },
          { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
          { py: 'shuō de', hz: '说得', cls: 'activity' },
          { py: 'hěn hǎo', hz: '很好', cls: 'like' },
          { hz: '。' }
        ]
      ]
    }
  },

  practice: [
    {
      question: '1. “她说汉语说得很好。” 是什么意思？',
      pinyin: '“Tā shuō Hànyǔ shuō de hěn hǎo.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'She speaks Chinese very well.', correct: true },
        { text: 'She writes Chinese characters.', correct: false },
        { text: 'She likes Chinese class.', correct: false }
      ]
    },
    {
      question: '2. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你说汉语说得怎么样？',
      promptPinyin: 'Nǐ shuō Hànyǔ shuō de zěnmeyàng?',
      choices: [
        { text: '我说汉语说得不错。', pinyin: 'Wǒ shuō Hànyǔ shuō de búcuò.', correct: true },
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: false }
      ]
    },
    {
      question: '3. “唱得很好” 是什么意思？',
      pinyin: '“Chàng de hěn hǎo” shì shénme yìsi?',
      translation: 'What does it mean?',
      choices: [
        { text: 'sing very well', correct: true },
        { text: 'dance very well', correct: false }
      ]
    },
    {
      question: '4. “一般” 表示什么水平？',
      pinyin: '“Yìbān” biǎoshì shénme shuǐpíng?',
      translation: 'What level does “一般” mean?',
      choices: [
        { text: 'so-so', correct: true },
        { text: 'very good', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'jiào', hz: '叫', cls: 'name' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '他/她', cls: 'person' },
        { blank: true },
        { py: 'de', hz: '得', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '他/她', cls: 'person' },
        { py: 'hái huì', hz: '还会', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { blank: true },
        { py: 'de', hz: '得', cls: 'activity' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'like' },
        { hz: '？' }
      ]
    ],
    translation: 'My friend is ______. He/She does ______ very well. He/She can also ______. How well do you ______?',
    tip: 'Use real classmates. You can choose: 说汉语、唱歌、跳舞、踢足球、写汉字。'
  },

  meanings: {
    '她': 'she / هي',
    '他': 'he / هو',
    '你': 'you / أنت',
    '我': 'I / أنا',
    '我的朋友': 'my friend / صديقي',
    '叫': 'be called / يُدعى',
    '说': 'speak / يتحدث',
    '说汉语': 'speak Chinese / يتحدث الصينية',
    '说英语': 'speak English / يتحدث الإنجليزية',
    '说得': 'speak in a way / يتحدث بطريقة',
    '怎么样': 'how / كيف',
    '很好': 'very good / جيد جدًا',
    '不错': 'not bad / لا بأس به',
    '一般': 'so-so / عادي',
    '唱歌': 'sing / يغني',
    '唱得': 'sing in a way / يغني بطريقة',
    '跳舞': 'dance / يرقص',
    '跳得': 'dance in a way / يرقص بطريقة',
    '踢足球': 'play football / يلعب كرة القدم',
    '踢得': 'play football in a way / يلعب بطريقة',
    '打篮球': 'play basketball / يلعب كرة السلة',
    '写汉字': 'write Chinese characters / يكتب الحروف الصينية',
    '很好看': 'looks very good / جميل جدًا',
    '很好听': 'sounds very good / جميل الصوت',
    '还会': 'also can / يستطيع أيضًا',
    '阿伊莎': 'Aisha / عائشة',
    '法蒂玛': 'Fatima / فاطمة',
    '介绍': 'introduce / يقدم',
    '好听': 'pleasant to hear / جميل الصوت',
    '考试': 'exam / اختبار',
    '看到': 'see / يرى',
    '能': 'can / يستطيع',
    '给': 'give / يعطي'
  }
};