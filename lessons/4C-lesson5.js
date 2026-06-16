window.LESSONS = window.LESSONS || {};

window.LESSONS['4C-lesson5'] = {
  id: '4C-lesson5',
  book: '4C',
  lesson: 'Lesson 5',
  title: '如果八月参加夏令营，我就七月去旅行。',
  theme: 'Summer Camp and Holiday Plans',
  goal: 'Use 如果……就…… to talk about conditions and plans.',
  heroTranslation: 'If I join the summer camp in August, I will travel in July.',

  titleTokens: [
    { py: 'Rúguǒ bā yuè', hz: '如果八月', cls: 'time' },
    { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营，', cls: 'activity' },
    { py: 'wǒ jiù qī yuè', hz: '我就七月', cls: 'self' },
    { py: 'qù lǚxíng。', hz: '去旅行。', cls: 'activity' }
  ],

  keyWords: [
    { emoji: '🏕️', pinyin: 'xiàlìngyíng', text: '夏令营', translation: 'summer camp / مخيم صيفي' },
    { emoji: '🙋', pinyin: 'cānjiā', text: '参加', translation: 'join; take part in / يشارك' },
    { emoji: '🌐', pinyin: 'wǎngzhàn', text: '网站', translation: 'website / موقع إلكتروني' },
    { emoji: '🏫', pinyin: 'dàxué', text: '大学', translation: 'university / جامعة' },
    { emoji: '❓', pinyin: 'rúguǒ', text: '如果', translation: 'if / إذا' },
    { emoji: '🧱', pinyin: 'Chángchéng', text: '长城', translation: 'the Great Wall / سور الصين العظيم' },
    { emoji: '🏯', pinyin: 'Gùgōng', text: '故宫', translation: 'the Forbidden City / القصر الإمبراطوري' },
    { emoji: '🏛️', pinyin: 'míngshèng gǔjì', text: '名胜古迹', translation: 'famous historical places / المعالم التاريخية المشهورة' },
    { emoji: '🏺', pinyin: 'bówùguǎn', text: '博物馆', translation: 'museum / متحف' },
    { emoji: '✈️', pinyin: 'lǚxíng', text: '旅行', translation: 'travel / سفر' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Rúguǒ bā yuè', hz: '如果八月', cls: 'time' },
        { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营，', cls: 'activity' },
        { py: 'wǒ jiù qī yuè', hz: '我就七月', cls: 'self' },
        { py: 'qù lǚxíng。', hz: '去旅行。', cls: 'activity' }
      ],
      translation: 'If I join the summer camp in August, I will travel in July. / إذا شاركت في المخيم الصيفي في أغسطس، فسأسافر في يوليو.'
    },
    {
      tokens: [
        { py: 'Rúguǒ yǒu jīhuì', hz: '如果有机会，', cls: 'speaker' },
        { py: 'wǒ jiù', hz: '我就', cls: 'self' },
        { py: 'cānjiā xiàlìngyíng。', hz: '参加夏令营。', cls: 'activity' }
      ],
      translation: 'If I have the chance, I will join the summer camp. / إذا أتيحت لي الفرصة، فسأشارك في المخيم الصيفي.'
    },
    {
      tokens: [
        { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
        { py: 'cānguān', hz: '参观', cls: 'activity' },
        { py: 'bówùguǎn hé míngshèng gǔjì。', hz: '博物馆和名胜古迹。', cls: 'place' }
      ],
      translation: 'I want to visit museums and famous historical places. / أريد زيارة المتاحف والمعالم التاريخية المشهورة.'
    },
    {
      tokens: [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'xiàlìngyíng', hz: '夏令营', cls: 'activity' },
        { py: 'néng xué dào', hz: '能学到', cls: 'activity' },
        { py: 'hěn duō dōngxi。', hz: '很多东西。', cls: 'like' }
      ],
      translation: 'I think summer camp can help me learn many things. / أعتقد أن المخيم الصيفي يمكن أن يجعلني أتعلم أشياء كثيرة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会用“如果……就……”说计划',
      translation: 'If I have time today, I will go to the library. If the weather is good on the weekend, we will go to the park. If I have a lot of money, I will travel. If you want to learn Chinese, I will help you. If I join the summer camp in August, I will travel in July.',
      tip: 'Reading Goal: Use 如果……就…… to talk about conditions and results.',
      lines: [
        {
          tokens: [
            { py: 'Rúguǒ jīntiān', hz: '如果今天', cls: 'time' },
            { py: 'yǒu shíjiān', hz: '有时间，', cls: 'time' },
            { py: 'wǒ jiù qù', hz: '我就去', cls: 'self' },
            { py: 'túshūguǎn。', hz: '图书馆。', cls: 'place' }
          ],
          translation: 'If I have time today, I will go to the library. / إذا كان لدي وقت اليوم، فسأذهب إلى المكتبة.'
        },
        {
          tokens: [
            { py: 'Rúguǒ zhōumò', hz: '如果周末', cls: 'time' },
            { py: 'tiānqì hǎo', hz: '天气好，', cls: 'like' },
            { py: 'wǒmen jiù qù', hz: '我们就去', cls: 'self' },
            { py: 'gōngyuán。', hz: '公园。', cls: 'place' }
          ],
          translation: 'If the weather is good on the weekend, we will go to the park. / إذا كان الطقس جيدًا في عطلة نهاية الأسبوع، فسنذهب إلى الحديقة.'
        },
        {
          tokens: [
            { py: 'Rúguǒ wǒ', hz: '如果我', cls: 'self' },
            { py: 'yǒu hěn duō qián', hz: '有很多钱，', cls: 'like' },
            { py: 'wǒ jiù qù', hz: '我就去', cls: 'self' },
            { py: 'lǚxíng。', hz: '旅行。', cls: 'activity' }
          ],
          translation: 'If I have a lot of money, I will travel. / إذا كان لدي الكثير من المال، فسأسافر.'
        },
        {
          tokens: [
            { py: 'Rúguǒ nǐ', hz: '如果你', cls: 'person' },
            { py: 'xiǎng xué Zhōngwén', hz: '想学中文，', cls: 'activity' },
            { py: 'wǒ jiù', hz: '我就', cls: 'self' },
            { py: 'bāngzhù nǐ。', hz: '帮助你。', cls: 'activity' }
          ],
          translation: 'If you want to learn Chinese, I will help you. / إذا أردت تعلم الصينية، فسأساعدك.'
        },
        {
          tokens: [
            { py: 'Rúguǒ bā yuè', hz: '如果八月', cls: 'time' },
            { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营，', cls: 'activity' },
            { py: 'wǒ jiù qī yuè', hz: '我就七月', cls: 'self' },
            { py: 'qù lǚxíng。', hz: '去旅行。', cls: 'activity' }
          ],
          translation: 'If I join the summer camp in August, I will travel in July. / إذا شاركت في المخيم الصيفي في أغسطس، فسأسافر في يوليو.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会讨论夏令营',
      translation: 'Have you joined a summer camp before? I joined a summer camp once. How was it? It was very interesting, and I met many new friends. Do you want to join again this year? If I have the chance, I will join. If you join the summer camp, what do you want to do most? I want to travel and visit museums. That sounds good. Yes, I think summer camp can help me learn many things.',
      tip: 'Pair Work: Talk about summer camp, activities and plans.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐ cānjiā guo', hz: '你参加过', cls: 'activity' },
            { py: 'xiàlìngyíng ma？', hz: '夏令营吗？', cls: 'activity' }
          ],
          translation: 'Have you joined a summer camp before? / هل شاركت في مخيم صيفي من قبل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Wǒ cānjiā guo', hz: '我参加过', cls: 'activity' },
            { py: 'yí cì', hz: '一次', cls: 'time' },
            { py: 'xiàlìngyíng。', hz: '夏令营。', cls: 'activity' }
          ],
          translation: 'I joined a summer camp once. / شاركت في مخيم صيفي مرة واحدة.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐ juéde', hz: '你觉得', cls: 'self' },
            { py: 'zěnmeyàng？', hz: '怎么样？', cls: 'speaker' }
          ],
          translation: 'How was it? / كيف كان؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Hěn yǒu yìsi', hz: '很有意思，', cls: 'like' },
            { py: 'wǒ rènshi le', hz: '我认识了', cls: 'activity' },
            { py: 'hěn duō xīn péngyou。', hz: '很多新朋友。', cls: 'person' }
          ],
          translation: 'It was very interesting, and I met many new friends. / كان ممتعًا جدًا، وتعرفت إلى الكثير من الأصدقاء الجدد.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Jīnnián nǐ', hz: '今年你', cls: 'time' },
            { py: 'hái xiǎng', hz: '还想', cls: 'self' },
            { py: 'cānjiā ma？', hz: '参加吗？', cls: 'activity' }
          ],
          translation: 'Do you want to join again this year? / هل تريد المشاركة مرة أخرى هذا العام؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Rúguǒ yǒu jīhuì', hz: '如果有机会，', cls: 'speaker' },
            { py: 'wǒ jiù', hz: '我就', cls: 'self' },
            { py: 'cānjiā。', hz: '参加。', cls: 'activity' }
          ],
          translation: 'If I have the chance, I will join. / إذا أتيحت لي الفرصة، فسأشارك.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Rúguǒ nǐ', hz: '如果你', cls: 'person' },
            { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营，', cls: 'activity' },
            { py: 'nǐ zuì xiǎng', hz: '你最想', cls: 'self' },
            { py: 'zuò shénme？', hz: '做什么？', cls: 'activity' }
          ],
          translation: 'If you join the summer camp, what do you want to do most? / إذا شاركت في المخيم الصيفي، ماذا تريد أن تفعل أكثر؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
            { py: 'lǚxíng', hz: '旅行，', cls: 'activity' },
            { py: 'yě xiǎng', hz: '也想', cls: 'self' },
            { py: 'cānguān bówùguǎn。', hz: '参观博物馆。', cls: 'place' }
          ],
          translation: 'I want to travel, and I also want to visit museums. / أريد السفر، وأريد أيضًا زيارة المتاحف.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Tīng qǐlái', hz: '听起来', cls: 'speaker' },
            { py: 'búcuò。', hz: '不错。', cls: 'like' }
          ],
          translation: 'That sounds good. / يبدو ذلك جيدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Duì', hz: '对，', cls: 'speaker' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'xiàlìngyíng', hz: '夏令营', cls: 'activity' },
            { py: 'néng xué dào', hz: '能学到', cls: 'activity' },
            { py: 'hěn duō dōngxi。', hz: '很多东西。', cls: 'like' }
          ],
          translation: 'Yes, I think summer camp can help me learn many things. / نعم، أعتقد أن المخيم الصيفي يمكن أن يجعلني أتعلم أشياء كثيرة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的暑假安排',
      translation: 'Before, during holidays, I often stayed at home. This summer holiday, I want to do something different. If I join the summer camp in August, I will travel in July. If I cannot join the summer camp, I will go out with my family. I really want to meet new friends, and I also want to visit museums and famous historical places. I think joining a summer camp can not only help me learn new knowledge, but also help me understand different cultures. So I have already started looking up information. I hope this summer holiday will be full and interesting.',
      tip: 'Speaking Goal: Talk about your summer holiday arrangement using 如果……就…….',
      lines: [
        {
          tokens: [
            { py: 'Yǐqián fàngjià de shíhou', hz: '以前放假的时候，', cls: 'time' },
            { py: 'wǒ chángcháng', hz: '我常常', cls: 'self' },
            { py: 'dāi zài jiālǐ。', hz: '待在家里。', cls: 'place' }
          ],
          translation: 'Before, during holidays, I often stayed at home. / في السابق، أثناء العطلات، كنت أبقى في البيت كثيرًا.'
        },
        {
          tokens: [
            { py: 'Jīnnián shǔjià', hz: '今年暑假，', cls: 'time' },
            { py: 'wǒ xiǎng zuò', hz: '我想做', cls: 'self' },
            { py: 'yìxiē bù yíyàng de shìqing。', hz: '一些不一样的事情。', cls: 'activity' }
          ],
          translation: 'This summer holiday, I want to do something different. / في هذه العطلة الصيفية، أريد أن أفعل أشياء مختلفة.'
        },
        {
          tokens: [
            { py: 'Rúguǒ bā yuè', hz: '如果八月', cls: 'time' },
            { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营，', cls: 'activity' },
            { py: 'wǒ jiù qī yuè', hz: '我就七月', cls: 'self' },
            { py: 'qù lǚxíng。', hz: '去旅行。', cls: 'activity' }
          ],
          translation: 'If I join the summer camp in August, I will travel in July. / إذا شاركت في المخيم الصيفي في أغسطس، فسأسافر في يوليو.'
        },
        {
          tokens: [
            { py: 'Rúguǒ bù néng', hz: '如果不能', cls: 'not-like' },
            { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营，', cls: 'activity' },
            { py: 'wǒ jiù hé jiārén', hz: '我就和家人', cls: 'person' },
            { py: 'yìqǐ chūqù wán。', hz: '一起出去玩。', cls: 'activity' }
          ],
          translation: 'If I cannot join the summer camp, I will go out with my family. / إذا لم أستطع المشاركة في المخيم الصيفي، فسأخرج مع عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒ hěn xiǎng', hz: '我很想', cls: 'self' },
            { py: 'rènshi xīn de péngyou', hz: '认识新的朋友，', cls: 'person' },
            { py: 'yě xiǎng', hz: '也想', cls: 'self' },
            { py: 'cānguān bówùguǎn', hz: '参观博物馆', cls: 'place' },
            { py: 'hé míngshèng gǔjì。', hz: '和名胜古迹。', cls: 'place' }
          ],
          translation: 'I really want to meet new friends, and I also want to visit museums and famous historical places. / أريد كثيرًا التعرف إلى أصدقاء جدد، وأريد أيضًا زيارة المتاحف والمعالم التاريخية المشهورة.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营', cls: 'activity' },
            { py: 'bùjǐn néng xuéxí', hz: '不仅能学习', cls: 'activity' },
            { py: 'xīn de zhīshi', hz: '新的知识，', cls: 'like' },
            { py: 'hái néng liǎojiě', hz: '还能了解', cls: 'activity' },
            { py: 'bùtóng de wénhuà。', hz: '不同的文化。', cls: 'country' }
          ],
          translation: 'I think joining a summer camp can not only help me learn new knowledge, but also help me understand different cultures. / أعتقد أن المشاركة في المخيم الصيفي لا تساعدني فقط على تعلم معرفة جديدة، بل تساعدني أيضًا على فهم ثقافات مختلفة.'
        },
        {
          tokens: [
            { py: 'Suǒyǐ', hz: '所以，', cls: 'speaker' },
            { py: 'wǒ yǐjīng kāishǐ', hz: '我已经开始', cls: 'time' },
            { py: 'chá zīliào。', hz: '查资料。', cls: 'activity' }
          ],
          translation: 'So I have already started looking up information. / لذلك بدأت بالفعل في البحث عن المعلومات.'
        },
        {
          tokens: [
            { py: 'Wǒ xīwàng', hz: '我希望', cls: 'self' },
            { py: 'jīnnián shǔjià', hz: '今年暑假', cls: 'time' },
            { py: 'guò de chōngshí', hz: '过得充实', cls: 'like' },
            { py: 'yòu yǒu yìsi。', hz: '又有意思。', cls: 'like' }
          ],
          translation: 'I hope this summer holiday will be full and interesting. / أتمنى أن تكون هذه العطلة الصيفية مليئة وممتعة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “如果八月参加夏令营，我就七月去旅行。” 是什么意思？',
      pinyin: '“Rúguǒ bā yuè cānjiā xiàlìngyíng, wǒ jiù qī yuè qù lǚxíng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'If I join the summer camp in August, I will travel in July.', correct: true },
        { text: 'If I travel in August, I will join summer camp in July.', correct: false },
        { text: 'I do not want to join summer camp.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “summer camp”？',
      pinyin: 'Nǎ yí ge shì “summer camp”?',
      translation: 'Which one means “summer camp”?',
      choices: [
        { text: '夏令营', correct: true },
        { text: '网站', correct: false },
        { text: '大学', correct: false }
      ]
    },
    {
      question: '3. “如果有机会，我就参加夏令营。” 是什么意思？',
      pinyin: '“Rúguǒ yǒu jīhuì, wǒ jiù cānjiā xiàlìngyíng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'If I have the chance, I will join the summer camp.', correct: true },
        { text: 'If I have no time, I will sleep.', correct: false },
        { text: 'If I travel, I will not study.', correct: false }
      ]
    },
    {
      question: '4. C层中，如果不能参加夏令营，“我”会做什么？',
      pinyin: 'C céng zhōng, rúguǒ bù néng cānjiā xiàlìngyíng, “wǒ” huì zuò shénme?',
      translation: 'In Level C, if “I” cannot join the summer camp, what will “I” do?',
      choices: [
        { text: '和家人一起出去玩。', correct: true },
        { text: '每天待在家里。', correct: false },
        { text: '去大学学习。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Rúguǒ jīnnián shǔjià', hz: '如果今年暑假', cls: 'time' },
        { blank: true },
        { hz: '，' },
        { py: 'wǒ jiù', hz: '我就', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Rúguǒ wǒ cānjiā', hz: '如果我参加', cls: 'activity' },
        { py: 'xiàlìngyíng', hz: '夏令营', cls: 'activity' },
        { hz: '，' },
        { py: 'wǒ zuì xiǎng', hz: '我最想', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Rúguǒ bù néng', hz: '如果不能', cls: 'not-like' },
        { py: 'cānjiā xiàlìngyíng', hz: '参加夏令营', cls: 'activity' },
        { hz: '，' },
        { py: 'wǒ jiù', hz: '我就', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'xiàlìngyíng', hz: '夏令营', cls: 'activity' },
        { py: 'néng ràng wǒ', hz: '能让我', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'If this summer holiday ______, I will ______. If I join the summer camp, I most want to ______. If I cannot join the summer camp, I will ______. I think summer camp can help me ______.',
    tip: 'Use: 有机会、参加夏令营、参观博物馆、和家人一起出去玩、学到很多东西。'
  },

  meanings: {
    '夏令营': 'summer camp / مخيم صيفي',
    '参加': 'join; take part in / يشارك',
    '网站': 'website / موقع إلكتروني',
    '大学': 'university / جامعة',
    '如果': 'if / إذا',
    '长城': 'the Great Wall / سور الصين العظيم',
    '故宫': 'the Forbidden City / القصر الإمبراطوري',
    '名胜古迹': 'famous historical places / المعالم التاريخية المشهورة',
    '博物馆': 'museum / متحف',
    '旅行': 'travel / سفر',
    '如果八月': 'if in August / إذا في أغسطس',
    '参加夏令营': 'join the summer camp / يشارك في المخيم الصيفي',
    '我就七月': 'I then in July / فسأكون في يوليو',
    '去旅行': 'go traveling / أذهب للسفر',
    '如果八月参加夏令营，我就七月去旅行': 'if I join the summer camp in August, I will travel in July / إذا شاركت في المخيم الصيفي في أغسطس، فسأسافر في يوليو',
    '如果有机会': 'if there is a chance / إذا أتيحت الفرصة',
    '我就': 'I will then / فسوف',
    '我就参加': 'I will join / فسأشارك',
    '我想': 'I want / أريد',
    '参观': 'visit / يزور',
    '参观博物馆': 'visit museums / يزور المتاحف',
    '博物馆和名胜古迹': 'museums and famous historical places / المتاحف والمعالم التاريخية المشهورة',
    '我觉得': 'I think / أعتقد',
    '能学到': 'can learn / يمكن أن يتعلم',
    '很多东西': 'many things / أشياء كثيرة',
    '如果今天': 'if today / إذا اليوم',
    '有时间': 'have time / لديه وقت',
    '我就去': 'I will go / سأذهب',
    '图书馆': 'library / مكتبة',
    '如果周末': 'if on the weekend / إذا في عطلة نهاية الأسبوع',
    '天气好': 'the weather is good / الطقس جيد',
    '我们就去': 'we will go / سنذهب',
    '公园': 'park / حديقة',
    '如果我': 'if I / إذا أنا',
    '有很多钱': 'have a lot of money / لديه الكثير من المال',
    '如果你': 'if you / إذا أنت',
    '想学中文': 'want to learn Chinese / يريد تعلم الصينية',
    '帮助你': 'help you / أساعدك',
    '你参加过': 'have you joined / هل شاركت',
    '夏令营吗': 'summer camp? / مخيم صيفي؟',
    '我参加过': 'I have joined / شاركت',
    '一次': 'once / مرة واحدة',
    '你觉得': 'you think / أنت تعتقد',
    '怎么样': 'how is it / كيف كان',
    '很有意思': 'very interesting / ممتع جدًا',
    '我认识了': 'I met / تعرفت إلى',
    '很多新朋友': 'many new friends / الكثير من الأصدقاء الجدد',
    '今年你': 'this year you / أنت هذا العام',
    '还想': 'still want / ما زلت تريد',
    '参加吗': 'join? / تشارك؟',
    '如果你': 'if you / إذا أنت',
    '你最想': 'you most want / أكثر ما تريد',
    '做什么': 'do what / ماذا تفعل',
    '也想': 'also want / يريد أيضًا',
    '听起来': 'sounds / يبدو',
    '不错': 'not bad; good / جيد',
    '以前放假的时候': 'before, during holidays / في السابق أثناء العطلات',
    '我常常': 'I often / أنا غالبًا',
    '待在家里': 'stay at home / أبقى في البيت',
    '今年暑假': 'this summer holiday / هذه العطلة الصيفية',
    '我想做': 'I want to do / أريد أن أفعل',
    '一些不一样的事情': 'some different things / بعض الأشياء المختلفة',
    '如果不能': 'if cannot / إذا لم أستطع',
    '我就和家人': 'I will with family / سأكون مع عائلتي',
    '一起出去玩': 'go out together for fun / نخرج معًا للترفيه',
    '我很想': 'I really want / أريد كثيرًا',
    '认识新的朋友': 'meet new friends / أتعرف إلى أصدقاء جدد',
    '不仅能学习': 'not only can learn / لا يستطيع فقط أن يتعلم',
    '新的知识': 'new knowledge / معرفة جديدة',
    '还能了解': 'can also understand / يمكنه أيضًا فهم',
    '不同的文化': 'different cultures / ثقافات مختلفة',
    '所以': 'so / لذلك',
    '我已经开始': 'I have already started / بدأت بالفعل',
    '查资料': 'look up information / يبحث عن المعلومات',
    '我希望': 'I hope / أتمنى',
    '过得充实': 'spend it fully / أقضيها بشكل مثمر',
    '又有意思': 'and interesting / وممتعة'
  }
};