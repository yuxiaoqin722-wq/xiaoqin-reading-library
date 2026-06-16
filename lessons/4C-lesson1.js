window.LESSONS = window.LESSONS || {};

window.LESSONS['4C-lesson1'] = {
  id: '4C-lesson1',
  book: '4C',
  lesson: 'Lesson 1',
  title: '我们不但是同学，而且是最好的朋友。',
  theme: 'Friendship and Describing People',
  goal: 'Use 不但……而且…… to describe people, abilities, qualities and relationships.',
  heroTranslation: 'We are not only classmates, but also best friends.',

  titleTokens: [
    { py: 'Wǒmen', hz: '我们', cls: 'self' },
    { py: 'búdàn shì', hz: '不但是', cls: 'speaker' },
    { py: 'tóngxué', hz: '同学', cls: 'person' },
    { hz: '，' },
    { py: 'érqiě shì', hz: '而且是', cls: 'speaker' },
    { py: 'zuì hǎo de péngyou', hz: '最好的朋友', cls: 'person' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👩‍🎓', pinyin: 'tóngxué', text: '同学', translation: 'classmate / زميل الدراسة' },
    { emoji: '🤝', pinyin: 'péngyou', text: '朋友', translation: 'friend / صديق' },
    { emoji: '🌟', pinyin: 'zuì hǎo de péngyou', text: '最好的朋友', translation: 'best friend / أفضل صديق' },
    { emoji: '📏', pinyin: 'gèzi', text: '个子', translation: 'height / القامة' },
    { emoji: '😊', pinyin: 'liǎn', text: '脸', translation: 'face / الوجه' },
    { emoji: '😄', pinyin: 'ài xiào', text: '爱笑', translation: 'likes to smile / يحب الابتسام' },
    { emoji: '📚', pinyin: 'xuéxí rènzhēn', text: '学习认真', translation: 'studies carefully / يدرس بجدية' },
    { emoji: '🤲', pinyin: 'bāngzhù tóngxué', text: '帮助同学', translation: 'help classmates / يساعد زملاء الدراسة' },
    { emoji: '☀️', pinyin: 'rèqíng', text: '热情', translation: 'warm-hearted / ودود ومتحمس' },
    { emoji: '💛', pinyin: 'yǒuhǎo', text: '友好', translation: 'friendly / ودود' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'búdàn shì', hz: '不但是', cls: 'speaker' },
        { py: 'tóngxué', hz: '同学', cls: 'person' },
        { hz: '，' },
        { py: 'érqiě shì', hz: '而且是', cls: 'speaker' },
        { py: 'zuì hǎo de péngyou', hz: '最好的朋友', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'We are not only classmates, but also best friends. / نحن لسنا زملاء دراسة فقط، بل نحن أيضًا أفضل الأصدقاء.'
    },
    {
      tokens: [
        { py: 'Tā búdàn huì chàng', hz: '她不但会唱', cls: 'activity' },
        { py: 'Zhōngwén gē', hz: '中文歌', cls: 'activity' },
        { hz: '，' },
        { py: 'érqiě huì', hz: '而且会', cls: 'speaker' },
        { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'She can not only sing Chinese songs, but also dance. / هي لا تستطيع غناء الأغاني الصينية فقط، بل تستطيع الرقص أيضًا.'
    },
    {
      tokens: [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'búdàn xuéxí rènzhēn', hz: '不但学习认真', cls: 'activity' },
        { hz: '，' },
        { py: 'érqiě chángcháng', hz: '而且常常', cls: 'speaker' },
        { py: 'bāngzhù tóngxué', hz: '帮助同学', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'My friend not only studies carefully, but also often helps classmates. / صديقي لا يدرس بجدية فقط، بل يساعد زملاءه كثيرًا أيضًا.'
    },
    {
      tokens: [
        { py: 'Tā shì', hz: '他是', cls: 'person' },
        { py: 'shénme yàng de rén', hz: '什么样的人', cls: 'speaker' },
        { hz: '？' }
      ],
      translation: 'What kind of person is he? / أي نوع من الأشخاص هو؟'
    },
    {
      tokens: [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'péngyou', hz: '朋友', cls: 'person' },
        { py: 'hěn zhòngyào', hz: '很重要', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I think friends are very important. / أعتقد أن الأصدقاء مهمون جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会描述朋友',
      translation: 'Her height is tall. His face is round, and he always likes to smile. She can not only sing Chinese songs, but also dance. My friend not only studies carefully, but also often helps classmates. We are not only classmates, but also best friends.',
      tip: 'Reading Goal: Describe people and use 不但……而且…….',
      lines: [
        {
          tokens: [
            { py: 'Tā de gèzi', hz: '她的个子', cls: 'person' },
            { py: 'hěn gāo', hz: '很高', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Her height is tall. / قامتها طويلة.'
        },
        {
          tokens: [
            { py: 'Tā de liǎn', hz: '他的脸', cls: 'person' },
            { py: 'yuányuán de', hz: '圆圆的', cls: 'like' },
            { hz: '，' },
            { py: 'zǒng shì', hz: '总是', cls: 'time' },
            { py: 'ài xiào', hz: '爱笑', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'His face is round, and he always likes to smile. / وجهه مستدير، وهو يحب الابتسام دائمًا.'
        },
        {
          tokens: [
            { py: 'Tā búdàn huì chàng', hz: '她不但会唱', cls: 'activity' },
            { py: 'Zhōngwén gē', hz: '中文歌', cls: 'activity' },
            { hz: '，' },
            { py: 'érqiě huì', hz: '而且会', cls: 'speaker' },
            { py: 'tiàowǔ', hz: '跳舞', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She can not only sing Chinese songs, but also dance. / هي لا تستطيع غناء الأغاني الصينية فقط، بل تستطيع الرقص أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'búdàn xuéxí rènzhēn', hz: '不但学习认真', cls: 'activity' },
            { hz: '，' },
            { py: 'érqiě chángcháng', hz: '而且常常', cls: 'speaker' },
            { py: 'bāngzhù tóngxué', hz: '帮助同学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend not only studies carefully, but also often helps classmates. / صديقي لا يدرس بجدية فقط، بل يساعد زملاءه كثيرًا أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'búdàn shì', hz: '不但是', cls: 'speaker' },
            { py: 'tóngxué', hz: '同学', cls: 'person' },
            { hz: '，' },
            { py: 'érqiě shì', hz: '而且是', cls: 'speaker' },
            { py: 'zuì hǎo de péngyou', hz: '最好的朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'We are not only classmates, but also best friends. / نحن لسنا زملاء دراسة فقط، بل نحن أيضًا أفضل الأصدقاء.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会介绍我的好朋友',
      translation: 'Who is your best friend? My good friend is Hassan. What kind of person is he? He not only studies carefully, but also often helps classmates. What do you often do together? We often study Chinese together. So you are best friends? Yes, we are not only classmates, but also best friends.',
      tip: 'Pair Work: Ask your partner about his or her best friend.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zuì hǎo de péngyou', hz: '你最好的朋友', cls: 'person' },
            { py: 'shì shéi', hz: '是谁', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Who is your best friend? / من هو أفضل صديق لك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ de hǎo péngyou', hz: '我的好朋友', cls: 'person' },
            { py: 'shì Hāsāng', hz: '是哈桑', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My good friend is Hassan. / صديقي الجيد هو حسن.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'shénme yàng de rén', hz: '什么样的人', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What kind of person is he? / أي نوع من الأشخاص هو؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā búdàn', hz: '他不但', cls: 'speaker' },
            { py: 'xuéxí rènzhēn', hz: '学习认真', cls: 'activity' },
            { hz: '，' },
            { py: 'érqiě chángcháng', hz: '而且常常', cls: 'speaker' },
            { py: 'bāngzhù tóngxué', hz: '帮助同学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He not only studies carefully, but also often helps classmates. / هو لا يدرس بجدية فقط، بل يساعد زملاءه كثيرًا أيضًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐmen chángcháng', hz: '你们常常', cls: 'self' },
            { py: 'yìqǐ zuò shénme', hz: '一起做什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you often do together? / ماذا تفعلان كثيرًا معًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen chángcháng', hz: '我们常常', cls: 'self' },
            { py: 'yìqǐ xuéxí', hz: '一起学习', cls: 'activity' },
            { py: 'Zhōngwén', hz: '中文', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We often study Chinese together. / نحن ندرس اللغة الصينية معًا كثيرًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Suǒyǐ', hz: '所以', cls: 'speaker' },
            { py: 'nǐmen shì', hz: '你们是', cls: 'self' },
            { py: 'zuì hǎo de péngyou', hz: '最好的朋友', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'So you are best friends? / إذن أنتما أفضل الأصدقاء؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duì', hz: '对', cls: 'speaker' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'búdàn shì', hz: '不但是', cls: 'speaker' },
            { py: 'tóngxué', hz: '同学', cls: 'person' },
            { hz: '，' },
            { py: 'érqiě shì', hz: '而且是', cls: 'speaker' },
            { py: 'zuì hǎo de péngyou', hz: '最好的朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'Yes, we are not only classmates, but also best friends. / نعم، نحن لسنا زملاء دراسة فقط، بل نحن أيضًا أفضل الأصدقاء.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的好朋友',
      translation: 'I have a good friend. We have known each other for three years. We are not only classmates, but also best friends. She studies carefully and is also warm-hearted. She not only often helps classmates, but also shares her study methods. After class, we often chat together and do homework together. When we meet difficulties, we also help each other. I think friends are very important. With a good friend, studying and life both become happier.',
      tip: 'Speaking Goal: Introduce a good friend and explain why friendship is important.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'yí ge hǎo péngyou', hz: '一个好朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have a good friend. / لدي صديق جيد.'
        },
        {
          tokens: [
            { py: 'Wǒmen rènshi', hz: '我们认识', cls: 'self' },
            { py: 'sān nián le', hz: '三年了', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'We have known each other for three years. / نحن نعرف بعضنا منذ ثلاث سنوات.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'búdàn shì', hz: '不但是', cls: 'speaker' },
            { py: 'tóngxué', hz: '同学', cls: 'person' },
            { hz: '，' },
            { py: 'érqiě shì', hz: '而且是', cls: 'speaker' },
            { py: 'zuì hǎo de péngyou', hz: '最好的朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'We are not only classmates, but also best friends. / نحن لسنا زملاء دراسة فقط، بل نحن أيضًا أفضل الأصدقاء.'
        },
        {
          tokens: [
            { py: 'Tā xuéxí', hz: '她学习', cls: 'activity' },
            { py: 'hěn rènzhēn', hz: '很认真', cls: 'like' },
            { hz: '，' },
            { py: 'yě hěn rèqíng', hz: '也很热情', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'She studies carefully and is also warm-hearted. / هي تدرس بجدية وهي أيضًا ودودة ومتحمسة.'
        },
        {
          tokens: [
            { py: 'Tā búdàn chángcháng', hz: '她不但常常', cls: 'speaker' },
            { py: 'bāngzhù tóngxué', hz: '帮助同学', cls: 'activity' },
            { hz: '，' },
            { py: 'érqiě huì fēnxiǎng', hz: '而且会分享', cls: 'speaker' },
            { py: 'zìjǐ de xuéxí fāngfǎ', hz: '自己的学习方法', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She not only often helps classmates, but also shares her study methods. / هي لا تساعد زملاءها كثيرًا فقط، بل تشارك أيضًا طرقها في الدراسة.'
        },
        {
          tokens: [
            { py: 'Xiàkè yǐhòu', hz: '下课以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen chángcháng', hz: '我们常常', cls: 'self' },
            { py: 'yìqǐ liáotiān', hz: '一起聊天', cls: 'activity' },
            { hz: '，' },
            { py: 'yìqǐ zuò zuòyè', hz: '一起做作业', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After class, we often chat together and do homework together. / بعد الحصة، نتحدث معًا كثيرًا ونقوم بالواجب معًا.'
        },
        {
          tokens: [
            { py: 'Yùdào kùnnan de shíhou', hz: '遇到困难的时候', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen yě huì', hz: '我们也会', cls: 'self' },
            { py: 'hùxiāng bāngzhù', hz: '互相帮助', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'When we meet difficulties, we also help each other. / عندما نواجه صعوبات، نساعد بعضنا أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'péngyou', hz: '朋友', cls: 'person' },
            { py: 'hěn zhòngyào', hz: '很重要', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think friends are very important. / أعتقد أن الأصدقاء مهمون جدًا.'
        },
        {
          tokens: [
            { py: 'Yǒu hǎo péngyou', hz: '有好朋友', cls: 'person' },
            { hz: '，' },
            { py: 'xuéxí hé shēnghuó', hz: '学习和生活', cls: 'activity' },
            { py: 'dōu huì', hz: '都会', cls: 'speaker' },
            { py: 'gèng kuàilè', hz: '更快乐', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'With a good friend, studying and life both become happier. / مع صديق جيد، تصبح الدراسة والحياة أكثر سعادة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我们不但是同学，而且是最好的朋友。” 是什么意思？',
      pinyin: '“Wǒmen búdàn shì tóngxué, érqiě shì zuì hǎo de péngyou.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We are not only classmates, but also best friends.', correct: true },
        { text: 'We are not classmates.', correct: false },
        { text: 'We do not have friends.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “best friend”？',
      pinyin: 'Nǎ yí ge shì “best friend”?',
      translation: 'Which one means “best friend”?',
      choices: [
        { text: '最好的朋友', correct: true },
        { text: '个子', correct: false },
        { text: '脸', correct: false }
      ]
    },
    {
      question: '3. “他是什么样的人？” 是什么意思？',
      pinyin: '“Tā shì shénme yàng de rén?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What kind of person is he?', correct: true },
        { text: 'Where is he going?', correct: false },
        { text: 'What time is it?', correct: false }
      ]
    },
    {
      question: '4. C层中，好朋友会做什么？',
      pinyin: 'C céng zhōng, hǎo péngyou huì zuò shénme?',
      translation: 'In Level C, what does the good friend do?',
      choices: [
        { text: '帮助同学，分享学习方法。', correct: true },
        { text: '每天生气。', correct: false },
        { text: '不学习中文。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'búdàn', hz: '不但', cls: 'speaker' },
        { blank: true },
        { hz: '，' },
        { py: 'érqiě', hz: '而且', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā búdàn huì', hz: '她不但会', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'érqiě huì', hz: '而且会', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'búdàn shì', hz: '不但是', cls: 'speaker' },
        { blank: true },
        { hz: '，' },
        { py: 'érqiě shì', hz: '而且是', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'péngyou', hz: '朋友', cls: 'person' },
        { py: 'hěn', hz: '很', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'My friend not only ______, but also ______. She can not only ______, but also ______. We are not only ______, but also ______. I think friends are very ______.',
    tip: 'Use: 学习认真、帮助同学、唱中文歌、跳舞、同学、最好的朋友、重要。'
  },

  meanings: {
    '我们': 'we / نحن',
    '不但': 'not only / ليس فقط',
    '而且': 'but also / بل أيضًا',
    '不但是': 'not only are / لسنا فقط',
    '而且是': 'but also are / بل أيضًا',
    '同学': 'classmate / زميل الدراسة',
    '朋友': 'friend / صديق',
    '好朋友': 'good friend / صديق جيد',
    '最好的朋友': 'best friend / أفضل صديق',
    '我们不但是同学，而且是最好的朋友': 'we are not only classmates, but also best friends / نحن لسنا زملاء دراسة فقط، بل نحن أيضًا أفضل الأصدقاء',
    '个子': 'height / القامة',
    '她的个子': 'her height / قامتها',
    '很高': 'very tall / طويل جدًا',
    '脸': 'face / الوجه',
    '他的脸': 'his face / وجهه',
    '圆圆的': 'round / مستدير',
    '总是': 'always / دائمًا',
    '爱笑': 'likes to smile / يحب الابتسام',
    '中文歌': 'Chinese song / أغنية صينية',
    '会唱中文歌': 'can sing Chinese songs / يستطيع غناء الأغاني الصينية',
    '跳舞': 'dance / يرقص',
    '会跳舞': 'can dance / يستطيع الرقص',
    '她不但会唱中文歌，而且会跳舞': 'she can not only sing Chinese songs, but also dance / هي لا تستطيع غناء الأغاني الصينية فقط، بل تستطيع الرقص أيضًا',
    '我的朋友': 'my friend / صديقي',
    '学习认真': 'study carefully / يدرس بجدية',
    '不但学习认真': 'not only studies carefully / لا يدرس بجدية فقط',
    '常常': 'often / كثيرًا',
    '帮助同学': 'help classmates / يساعد زملاء الدراسة',
    '而且常常帮助同学': 'but also often helps classmates / بل يساعد زملاءه كثيرًا أيضًا',
    '热情': 'warm-hearted / ودود ومتحمس',
    '友好': 'friendly / ودود',
    '你最好的朋友': 'your best friend / أفضل صديق لك',
    '是谁': 'is who / من هو',
    '我的好朋友': 'my good friend / صديقي الجيد',
    '是哈桑': 'is Hassan / هو حسن',
    '他是': 'he is / هو',
    '什么样的人': 'what kind of person / أي نوع من الأشخاص',
    '他是什么样的人': 'what kind of person is he / أي نوع من الأشخاص هو',
    '他不但': 'he not only / هو لا... فقط',
    '你们常常': 'you often / أنتم كثيرًا',
    '一起做什么': 'do what together / ماذا تفعلون معًا',
    '一起学习': 'study together / يدرسون معًا',
    '中文': 'Chinese language / اللغة الصينية',
    '所以': 'so / لذلك',
    '你们是': 'you are / أنتم',
    '对': 'yes; right / نعم؛ صحيح',
    '我有': 'I have / لدي',
    '一个好朋友': 'a good friend / صديق جيد',
    '我们认识': 'we have known each other / نحن نعرف بعضنا',
    '三年了': 'for three years / منذ ثلاث سنوات',
    '她学习': 'she studies / هي تدرس',
    '很认真': 'very carefully / بجدية كبيرة',
    '也很热情': 'also very warm-hearted / أيضًا ودودة ومتحمسة',
    '她不但常常': 'she not only often / هي لا... كثيرًا فقط',
    '而且会分享': 'but also shares / بل تشارك أيضًا',
    '自己的学习方法': 'her own study methods / طرقها في الدراسة',
    '下课以后': 'after class / بعد الحصة',
    '我们常常': 'we often / نحن كثيرًا',
    '一起聊天': 'chat together / نتحدث معًا',
    '一起做作业': 'do homework together / نقوم بالواجب معًا',
    '遇到困难的时候': 'when meeting difficulties / عندما نواجه صعوبات',
    '我们也会': 'we also can / يمكننا أيضًا',
    '互相帮助': 'help each other / نساعد بعضنا',
    '我觉得': 'I think / أعتقد',
    '很重要': 'very important / مهم جدًا',
    '有好朋友': 'having a good friend / وجود صديق جيد',
    '学习和生活': 'study and life / الدراسة والحياة',
    '都会': 'both will / كلاهما سوف',
    '更快乐': 'happier / أكثر سعادة'
  }
};