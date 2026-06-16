window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson7'] = {
  id: '4A-lesson7',
  book: '4A',
  lesson: 'Lesson 7',
  title: '老师会通知我们。',
  theme: 'School Trip and Future Plans',
  goal: 'Talk about future arrangements using 会 / 通知 / 不用.',
  heroTranslation: 'The teacher will notify us.',

  titleTokens: [
    { py: 'Lǎoshī', hz: '老师', cls: 'person' },
    { py: 'huì tōngzhī', hz: '会通知', cls: 'activity' },
    { py: 'wǒmen', hz: '我们', cls: 'self' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏛️', pinyin: 'bówùguǎn', text: '博物馆', translation: 'museum / متحف' },
    { emoji: '📢', pinyin: 'tōngzhī', text: '通知', translation: 'notify / يخبر' },
    { emoji: '🎫', pinyin: 'ménpiào', text: '门票', translation: 'ticket / تذكرة دخول' },
    { emoji: '✅', pinyin: 'bùyòng', text: '不用', translation: 'do not need to / لا يحتاج إلى' },
    { emoji: '📝', pinyin: 'tóngyìshū', text: '同意书', translation: 'consent form / نموذج موافقة' },
    { emoji: '🚌', pinyin: 'xiàochē', text: '校车', translation: 'school bus / حافلة مدرسية' },
    { emoji: '👀', pinyin: 'cānguān', text: '参观', translation: 'visit / يزور' },
    { emoji: '📍', pinyin: 'dìdiǎn', text: '地点', translation: 'location / مكان' },
    { emoji: '🕒', pinyin: 'shíjiān', text: '时间', translation: 'time / وقت' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Lǎoshī', hz: '老师', cls: 'person' },
        { py: 'huì tōngzhī', hz: '会通知', cls: 'activity' },
        { py: 'wǒmen', hz: '我们', cls: 'self' },
        { hz: '。' }
      ],
      translation: 'The teacher will notify us. / ستخبرنا المعلمة.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'huì qù', hz: '会去', cls: 'activity' },
        { py: 'bówùguǎn', hz: '博物馆', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'I will go to the museum. / سأذهب إلى المتحف.'
    },
    {
      tokens: [
        { py: 'Bùyòng zìjǐ', hz: '不用自己', cls: 'not-like' },
        { py: 'mǎi ménpiào', hz: '买门票', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'We do not need to buy the tickets ourselves. / لا نحتاج إلى شراء التذاكر بأنفسنا.'
    },
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'huì zuò xiàochē qù', hz: '会坐校车去', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'We will go by school bus. / سنذهب بالحافلة المدرسية.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说参观安排',
      translation: 'The teacher will notify us. The teacher will take us to the museum. We do not need to buy the tickets ourselves. We will go by school bus.',
      tip: 'Reading Goal: Use 会 / 不用 to talk about a school trip.',
      lines: [
        {
          tokens: [
            { py: 'Lǎoshī', hz: '老师', cls: 'person' },
            { py: 'huì tōngzhī', hz: '会通知', cls: 'activity' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { hz: '。' }
          ],
          translation: 'The teacher will notify us. / ستخبرنا المعلمة.'
        },
        {
          tokens: [
            { py: 'Lǎoshī', hz: '老师', cls: 'person' },
            { py: 'huì dài wǒmen', hz: '会带我们', cls: 'activity' },
            { py: 'qù bówùguǎn', hz: '去博物馆', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The teacher will take us to the museum. / ستأخذنا المعلمة إلى المتحف.'
        },
        {
          tokens: [
            { py: 'Bùyòng zìjǐ', hz: '不用自己', cls: 'not-like' },
            { py: 'mǎi ménpiào', hz: '买门票', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We do not need to buy the tickets ourselves. / لا نحتاج إلى شراء التذاكر بأنفسنا.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'huì zuò xiàochē qù', hz: '会坐校车去', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We will go by school bus. / سنذهب بالحافلة المدرسية.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会讨论学校参观',
      translation: 'The school will take us to visit a museum. Will you go? I will go. Do we need to buy tickets? No, the teacher will notify us. How will we go? We will go by school bus.',
      tip: 'Pair Work: Talk about a school museum trip.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xuéxiào yào dài wǒmen', hz: '学校要带我们', cls: 'place' },
            { py: 'qù bówùguǎn', hz: '去博物馆', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The school will take us to visit a museum. / ستأخذنا المدرسة لزيارة متحف.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'huì qù ma', hz: '会去吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Will you go? / هل ستذهب؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'huì qù', hz: '会去', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I will go. / سأذهب.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yào mǎi', hz: '要买', cls: 'activity' },
            { py: 'ménpiào ma', hz: '门票吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do we need to buy tickets? / هل نحتاج إلى شراء التذاكر؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bùyòng', hz: '不用', cls: 'not-like' },
            { hz: '，' },
            { py: 'lǎoshī', hz: '老师', cls: 'person' },
            { py: 'huì tōngzhī wǒmen', hz: '会通知我们', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'No need. The teacher will notify us. / لا نحتاج، ستخبرنا المعلمة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'zěnme qù', hz: '怎么去', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How will we go? / كيف سنذهب؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'zuò xiàochē qù', hz: '坐校车去', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We will go by school bus. / سنذهب بالحافلة المدرسية.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲学校参观安排',
      translation: 'Next week, the school will take us to visit a museum. I really want to go because I like looking at history and culture. For this activity, we do not need to buy the tickets ourselves, but we need our parents’ consent form. The teacher said she will notify us of the time and location. If the weather is good, we will go by school bus. I hope this visit will be interesting.',
      tip: 'Speaking Goal: Explain a school trip plan clearly.',
      lines: [
        {
          tokens: [
            { py: 'Xià ge xīngqī', hz: '下个星期', cls: 'time' },
            { hz: '，' },
            { py: 'xuéxiào yào dài wǒmen', hz: '学校要带我们', cls: 'place' },
            { py: 'qù bówùguǎn', hz: '去博物馆', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Next week, the school will take us to visit a museum. / الأسبوع القادم ستأخذنا المدرسة لزيارة متحف.'
        },
        {
          tokens: [
            { py: 'Wǒ hěn xiǎng qù', hz: '我很想去', cls: 'self' },
            { hz: '，' },
            { py: 'yīnwèi', hz: '因为', cls: 'speaker' },
            { py: 'wǒ xǐhuan kàn', hz: '我喜欢看', cls: 'like' },
            { py: 'lìshǐ hé wénhuà', hz: '历史和文化', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I really want to go because I like looking at history and culture. / أريد الذهاب كثيرًا لأنني أحب مشاهدة التاريخ والثقافة.'
        },
        {
          tokens: [
            { py: 'Zhè cì huódòng', hz: '这次活动', cls: 'activity' },
            { py: 'bùyòng zìjǐ', hz: '不用自己', cls: 'not-like' },
            { py: 'mǎi ménpiào', hz: '买门票', cls: 'activity' },
            { hz: '，' },
            { py: 'dànshì xūyào', hz: '但是需要', cls: 'not-like' },
            { py: 'bàba māma de tóngyìshū', hz: '爸爸妈妈的同意书', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'For this activity, we do not need to buy tickets ourselves, but we need our parents’ consent form. / في هذا النشاط لا نحتاج إلى شراء التذاكر بأنفسنا، لكننا نحتاج إلى موافقة الوالدين.'
        },
        {
          tokens: [
            { py: 'Lǎoshī shuō', hz: '老师说', cls: 'person' },
            { hz: '，' },
            { py: 'tā huì tōngzhī wǒmen', hz: '她会通知我们', cls: 'activity' },
            { py: 'shíjiān hé dìdiǎn', hz: '时间和地点', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'The teacher said she will notify us of the time and location. / قالت المعلمة إنها ستخبرنا بالوقت والمكان.'
        },
        {
          tokens: [
            { py: 'Rúguǒ tiānqì hǎo', hz: '如果天气好', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'huì zuò xiàochē qù', hz: '会坐校车去', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'If the weather is good, we will go by school bus. / إذا كان الطقس جيدًا، سنذهب بالحافلة المدرسية.'
        },
        {
          tokens: [
            { py: 'Wǒ xīwàng', hz: '我希望', cls: 'like' },
            { py: 'zhè cì cānguān', hz: '这次参观', cls: 'activity' },
            { py: 'hěn yǒuyìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I hope this visit will be interesting. / أتمنى أن تكون هذه الزيارة ممتعة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “老师会通知我们。” 是什么意思？',
      pinyin: '“Lǎoshī huì tōngzhī wǒmen.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The teacher will notify us.', correct: true },
        { text: 'The teacher will buy tickets.', correct: false },
        { text: 'The teacher will go home.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “museum”？',
      pinyin: 'Nǎ yí ge shì “museum”?',
      translation: 'Which one means “museum”?',
      choices: [
        { text: '博物馆', correct: true },
        { text: '门票', correct: false },
        { text: '校车', correct: false }
      ]
    },
    {
      question: '3. “不用自己买门票。” 是什么意思？',
      pinyin: '“Bùyòng zìjǐ mǎi ménpiào.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We do not need to buy tickets ourselves.', correct: true },
        { text: 'We need to buy food ourselves.', correct: false },
        { text: 'We will go by school bus.', correct: false }
      ]
    },
    {
      question: '4. “我们会坐校车去。” 是什么意思？',
      pinyin: '“Wǒmen huì zuò xiàochē qù.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We will go by school bus.', correct: true },
        { text: 'We will walk to school.', correct: false },
        { text: 'We will buy tickets.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Xià ge xīngqī', hz: '下个星期', cls: 'time' },
        { hz: '，' },
        { py: 'xuéxiào yào dài wǒmen', hz: '学校要带我们', cls: 'place' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { py: 'cānguān', hz: '参观', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'qù', hz: '去', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Bùyòng zìjǐ', hz: '不用自己', cls: 'not-like' },
        { py: 'mǎi', hz: '买', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Lǎoshī', hz: '老师', cls: 'person' },
        { py: 'huì tōngzhī wǒmen', hz: '会通知我们', cls: 'activity' },
        { blank: true },
        { py: 'hé', hz: '和', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'huì zuò', hz: '会坐', cls: 'activity' },
        { blank: true },
        { py: 'qù', hz: '去', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'Next week, the school will take us to visit ______. I will go. We do not need to buy ______ ourselves. The teacher will notify us of ______ and ______. We will go by ______.',
    tip: 'Use: 博物馆、会、门票、时间、地点、校车。'
  },

  meanings: {
    '博物馆': 'museum / متحف',
    '通知': 'notify / يخبر',
    '会通知': 'will notify / سيخبر',
    '老师': 'teacher / معلم',
    '老师会通知我们': 'the teacher will notify us / ستخبرنا المعلمة',
    '门票': 'ticket / تذكرة دخول',
    '买门票': 'buy tickets / يشتري التذاكر',
    '不用': 'do not need to / لا يحتاج إلى',
    '不用自己': 'do not need to by oneself / لا يحتاج بنفسه',
    '不用自己买门票': 'do not need to buy tickets ourselves / لا نحتاج إلى شراء التذاكر بأنفسنا',
    '同意书': 'consent form / نموذج موافقة',
    '爸爸妈妈的同意书': 'parents’ consent form / موافقة الوالدين',
    '校车': 'school bus / حافلة مدرسية',
    '坐校车去': 'go by school bus / يذهب بالحافلة المدرسية',
    '会坐校车去': 'will go by school bus / سيذهب بالحافلة المدرسية',
    '参观': 'visit / يزور',
    '去博物馆参观': 'go to visit a museum / يذهب لزيارة متحف',
    '地点': 'location / مكان',
    '时间': 'time / وقت',
    '时间和地点': 'time and location / الوقت والمكان',
    '学校': 'school / مدرسة',
    '学校要带我们': 'the school will take us / ستأخذنا المدرسة',
    '老师会带我们': 'the teacher will take us / ستأخذنا المعلمة',
    '会去': 'will go / سيذهب',
    '你会去吗': 'will you go / هل ستذهب',
    '我会去': 'I will go / سأذهب',
    '要买': 'need to buy / يحتاج إلى شراء',
    '门票吗': 'tickets / التذاكر',
    '怎么去': 'how to go / كيف نذهب',
    '下个星期': 'next week / الأسبوع القادم',
    '我很想去': 'I really want to go / أريد الذهاب كثيرًا',
    '因为': 'because / لأن',
    '我喜欢看': 'I like looking at / أحب مشاهدة',
    '历史和文化': 'history and culture / التاريخ والثقافة',
    '这次活动': 'this activity / هذا النشاط',
    '但是需要': 'but need / لكن يحتاج إلى',
    '老师说': 'the teacher said / قالت المعلمة',
    '她会通知我们': 'she will notify us / ستخبرنا',
    '如果天气好': 'if the weather is good / إذا كان الطقس جيدًا',
    '我希望': 'I hope / أتمنى',
    '这次参观': 'this visit / هذه الزيارة',
    '很有意思': 'interesting / ممتع'
  }
};