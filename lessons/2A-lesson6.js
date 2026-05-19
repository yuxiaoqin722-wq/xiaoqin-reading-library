window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson6'] = {
  id: '2A-lesson6',
  book: '2A',
  lesson: 'Lesson 6',
  title: '我周末去公园玩了。',
  theme: 'Weekend Activities',
  goal: 'Talk about weekend activities with “我周末去……了”.',
  heroTranslation: 'I went to the park to play on the weekend.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'zhōumò', hz: '周末', cls: 'time' },
    { py: 'qù', hz: '去', cls: 'activity' },
    { py: 'gōngyuán', hz: '公园', cls: 'place' },
    { py: 'wán le', hz: '玩了', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🌳', pinyin: 'gōngyuán', text: '公园', translation: 'park / حديقة' },
    { emoji: '🏖️', pinyin: 'hǎibiān', text: '海边', translation: 'beach / شاطئ البحر' },
    { emoji: '📚', pinyin: 'túshūguǎn', text: '图书馆', translation: 'library / مكتبة' },
    { emoji: '🏬', pinyin: 'shāngdiàn', text: '商店', translation: 'shop / متجر' },
    { emoji: '🎈', pinyin: 'wán', text: '玩', translation: 'play / يلعب' },
    { emoji: '🏊', pinyin: 'yóuyǒng', text: '游泳', translation: 'swim / يسبح' },
    { emoji: '📖', pinyin: 'kàn shū', text: '看书', translation: 'read books / يقرأ كتابًا' },
    { emoji: '🛍️', pinyin: 'mǎi dōngxi', text: '买东西', translation: 'buy things / يشتري أشياء' },
    { emoji: '🕌', pinyin: 'zuò lǐbài', text: '做礼拜', translation: 'pray / يصلي' },
    { emoji: '😊', pinyin: 'hěn kāixīn', text: '很开心', translation: 'very happy / سعيد جدًا' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
        { py: 'zuò shénme le', hz: '做什么了', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What did you do on Saturday? / ماذا فعلت يوم السبت؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { py: 'gōngyuán', hz: '公园', cls: 'place' },
        { py: 'wán le', hz: '玩了', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I went to the park to play on Saturday. / ذهبت إلى الحديقة للعب يوم السبت.'
    },
    {
      tokens: [
        { py: 'Gōngyuán', hz: '公园', cls: 'place' },
        { py: 'hěn hǎowán', hz: '很好玩', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'The park is very fun. / الحديقة ممتعة جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说周末活动',
      translation: 'I went to the park to play on the weekend. I went to the library to read books on the weekend. I went to the shop to buy things on the weekend. I went to the beach to swim on Saturday.',
      tip: 'Reading Goal: Read “someone + time + 去 + place + activity + 了”.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'wán le', hz: '玩了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the park to play on the weekend. / ذهبت إلى الحديقة للعب في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'kàn shū le', hz: '看书了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the library to read books on the weekend. / ذهبت إلى المكتبة لقراءة الكتب في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'shāngdiàn', hz: '商店', cls: 'place' },
            { py: 'mǎi dōngxi le', hz: '买东西了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the shop to buy things on the weekend. / ذهبت إلى المتجر لشراء الأشياء في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'hǎibiān', hz: '海边', cls: 'place' },
            { py: 'yóuyǒng le', hz: '游泳了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the beach to swim on Saturday. / ذهبت إلى شاطئ البحر للسباحة يوم السبت.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问星期六做什么了',
      translation: 'What did you do on Saturday? I went to the park to play on Saturday. Is the park fun? The park is very fun. Do you like the park? I like the park.',
      tip: 'Pair Work: Ask and answer “你星期六做什么了？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
            { py: 'zuò shénme le', hz: '做什么了', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What did you do on Saturday? / ماذا فعلت يوم السبت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'wán le', hz: '玩了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the park to play on Saturday. / ذهبت إلى الحديقة للعب يوم السبت.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Gōngyuán', hz: '公园', cls: 'place' },
            { py: 'hǎowán ma', hz: '好玩吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Is the park fun? / هل الحديقة ممتعة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Gōngyuán', hz: '公园', cls: 'place' },
            { py: 'hěn hǎowán', hz: '很好玩', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The park is very fun. / الحديقة ممتعة جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'gōngyuán ma', hz: '公园吗', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Do you like the park? / هل تحب الحديقة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I like the park. / أحب الحديقة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会分享我的周末活动',
      translation: 'Hello everyone. My name is Fatima. I went to the mosque to pray on Saturday. I went to the park to play in the afternoon. The park is very fun. I am very happy. I like weekends.',
      tip: 'Speaking Goal: Share weekend activities with “去 + place + activity + 了”.',
      lines: [
        {
          tokens: [
            { py: 'Dàjiā hǎo', hz: '大家好', cls: 'greeting' },
            { hz: '！' }
          ],
          translation: 'Hello everyone! / مرحبًا بالجميع!'
        },
        {
          tokens: [
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Fatima. / اسمي فاطمة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'qīngzhēnsì', hz: '清真寺', cls: 'place' },
            { py: 'zuò lǐbài le', hz: '做礼拜了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the mosque to pray on Saturday. / ذهبت إلى المسجد للصلاة يوم السبت.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiàwǔ', hz: '下午', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'wán le', hz: '玩了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the park to play in the afternoon. / ذهبت إلى الحديقة للعب بعد الظهر.'
        },
        {
          tokens: [
            { py: 'Gōngyuán', hz: '公园', cls: 'place' },
            { py: 'hěn hǎowán', hz: '很好玩', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The park is very fun. / الحديقة ممتعة جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I am very happy. / أنا سعيدة جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I like weekends. / أحب عطلة نهاية الأسبوع.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “玩” 是什么意思？',
      pinyin: '“Wán” shì shénme yìsi?',
      translation: 'What does “玩” mean?',
      choices: [
        { text: 'play', correct: true },
        { text: 'read books', correct: false },
        { text: 'buy things', correct: false }
      ]
    },
    {
      question: '2. “海边” 是什么意思？',
      pinyin: '“Hǎibiān” shì shénme yìsi?',
      translation: 'What does “海边” mean?',
      choices: [
        { text: 'beach', correct: true },
        { text: 'park', correct: false },
        { text: 'shop', correct: false }
      ]
    },
    {
      question: '3. “我周末去公园玩了。” 是什么意思？',
      pinyin: '“Wǒ zhōumò qù gōngyuán wán le.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I went to the park to play on the weekend.', correct: true },
        { text: 'I went to the library to read on the weekend.', correct: false },
        { text: 'I like the park on the weekend.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “swim”？',
      pinyin: 'Nǎ yí ge shì “swim”?',
      translation: 'Which one means “swim”?',
      choices: [
        { text: '游泳', correct: true },
        { text: '看书', correct: false },
        { text: '买东西', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
        { py: 'zuò shénme le', hz: '做什么了', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xīngqīliù', hz: '星期六', cls: 'time' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { blank: true },
        { py: 'le', hz: '了', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zhōumò', hz: '周末', cls: 'time' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { blank: true },
        { py: 'le', hz: '了', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'hěn hǎowán', hz: '很好玩', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'What did you do on Saturday? I went to _____ to _____ on Saturday. I went to _____ to _____ on the weekend. _____ is very fun. I am very happy.',
    tip: 'Use places and activities: 公园玩、海边游泳、图书馆看书、商店买东西、清真寺做礼拜。'
  },

  meanings: {
    '公园': 'park / حديقة',
    '海边': 'beach / شاطئ البحر',
    '图书馆': 'library / مكتبة',
    '商店': 'shop / متجر',
    '清真寺': 'mosque / مسجد',
    '玩': 'play / يلعب',
    '玩了': 'played / لعب',
    '游泳': 'swim / يسبح',
    '游泳了': 'swam / سبح',
    '看书': 'read books / يقرأ كتابًا',
    '看书了': 'read books / قرأ كتابًا',
    '买东西': 'buy things / يشتري أشياء',
    '买东西了': 'bought things / اشترى أشياء',
    '做礼拜': 'pray / يصلي',
    '做礼拜了': 'prayed / صلى',
    '星期六': 'Saturday / السبت',
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '去': 'go / يذهب',
    '做什么了': 'what did you do / ماذا فعلت',
    '你星期六做什么了': 'what did you do on Saturday / ماذا فعلت يوم السبت',
    '我周末去公园玩了': 'I went to the park to play on the weekend / ذهبت إلى الحديقة للعب في عطلة نهاية الأسبوع',
    '我周末去图书馆看书了': 'I went to the library to read books on the weekend / ذهبت إلى المكتبة لقراءة الكتب في عطلة نهاية الأسبوع',
    '我周末去商店买东西了': 'I went to the shop to buy things on the weekend / ذهبت إلى المتجر لشراء الأشياء في عطلة نهاية الأسبوع',
    '我星期六去海边游泳了': 'I went to the beach to swim on Saturday / ذهبت إلى شاطئ البحر للسباحة يوم السبت',
    '我星期六去清真寺做礼拜了': 'I went to the mosque to pray on Saturday / ذهبت إلى المسجد للصلاة يوم السبت',
    '我下午去公园玩了': 'I went to the park to play in the afternoon / ذهبت إلى الحديقة للعب بعد الظهر',
    '好玩': 'fun / ممتع',
    '好玩吗': 'is it fun / هل هو ممتع',
    '很好玩': 'very fun / ممتع جدًا',
    '开心': 'happy / سعيد',
    '很开心': 'very happy / سعيد جدًا',
    '下午': 'afternoon / بعد الظهر',
    '你喜欢': 'you like / تحب',
    '我喜欢': 'I like / أحب',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة'
  }
};