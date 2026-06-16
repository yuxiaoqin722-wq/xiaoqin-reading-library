window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson1'] = {
  id: '3A-lesson1',
  book: '3A',
  lesson: 'Lesson 1',
  title: '你周末常常做什么？',
  theme: 'Weekend Activities and Habits',
  goal: 'Ask and describe weekend habits using 常常 and verb reduplication.',
  heroTranslation: 'What do you often do on weekends?',
  titleTokens: [
    { py: 'Nǐ zhōumò', hz: '你周末', cls: 'time' },
    { py: 'chángcháng', hz: '常常', cls: 'time' },
    { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🔁', pinyin: 'chángcháng', text: '常常', translation: 'often / غالبًا' },
    { emoji: '🏬', pinyin: 'guàng jiē', text: '逛街', translation: 'go shopping / التسوق' },
    { emoji: '💬', pinyin: 'liáotiānr', text: '聊天儿', translation: 'chat / الدردشة' },
    { emoji: '📚', pinyin: 'kàn shū', text: '看书', translation: 'read books / قراءة الكتب' },
    { emoji: '🏃', pinyin: 'pǎobù', text: '跑步', translation: 'run / الجري' },
    { emoji: '🏞️', pinyin: 'qù gōngyuán', text: '去公园', translation: 'go to the park / الذهاب إلى الحديقة' },
    { emoji: '🥋', pinyin: 'wǔshù', text: '武术', translation: 'martial arts / الفنون القتالية' },
    { emoji: '💪', pinyin: 'liàn', text: '练', translation: 'practice / يتدرب' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ zhōumò', hz: '你周末', cls: 'time' },
        { py: 'chángcháng', hz: '常常', cls: 'time' },
        { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What do you often do on weekends? / ماذا تفعل غالبًا في عطلة نهاية الأسبوع؟'
    },
    {
      tokens: [
        { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
        { py: 'chángcháng', hz: '常常', cls: 'time' },
        { py: 'kànkan shū', hz: '看看书', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I often read books on weekends. / غالبًا أقرأ الكتب في عطلة نهاية الأسبوع.'
    },
    {
      tokens: [
        { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
        { py: 'chángcháng', hz: '常常', cls: 'time' },
        { py: 'liáo liáotiānr', hz: '聊聊天儿', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I often chat on weekends. / غالبًا أتحدث مع الآخرين في عطلة نهاية الأسبوع.'
    },
    {
      tokens: [
        { py: 'Wǒ xǐhuān', hz: '我喜欢', cls: 'like' },
        { py: 'liànliàn wǔshù', hz: '练练武术', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I like practicing martial arts. / أحب أن أتدرب على الفنون القتالية.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说周末活动',
      translation: 'I often read books. I often run. I often chat.',
      tip: 'Reading Goal: Read weekend activity words clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'kànkan shū', hz: '看看书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I often read books on weekends. / غالبًا أقرأ الكتب في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'pǎo pǎobù', hz: '跑跑步', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I often run on weekends. / غالبًا أجري في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'liáo liáotiānr', hz: '聊聊天儿', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I often chat on weekends. / غالبًا أتحدث مع الآخرين في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'qù gōngyuán', hz: '去公园', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I often go to the park on weekends. / غالبًا أذهب إلى الحديقة في عطلة نهاية الأسبوع.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问周末做什么',
      translation: 'What do you often do on weekends? I often read books and chat. Do you like running? Yes, I often run too.',
      tip: 'Pair Work: Ask and answer about weekend habits.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zhōumò', hz: '你周末', cls: 'time' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'zuò shénme', hz: '做什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you often do on weekends? / ماذا تفعل غالبًا في عطلة نهاية الأسبوع؟'
        },
{
  tokens: [
    { py: '', hz: '👦', cls: 'speaker' },
    { hz: '：' },
    { py: 'Wǒ zhōumò', hz: '我周末', cls: 'time' },
    { py: 'chángcháng', hz: '常常', cls: 'time' },
    { py: 'kànkan shū', hz: '看看书。', cls: 'activity' }
  ],
  translation: 'I often read books on weekends. / غالبًا أقرأ الكتب في عطلة نهاية الأسبوع.'
},
{
  tokens: [
    { py:'', hz:'　　', cls:'speaker' },
    { py:'Wǒ yě', hz:'我也', cls:'self' },
    { py:'chángcháng', hz:'常常', cls:'time' },
    { py:'liáo liáotiānr', hz:'聊聊天儿。', cls:'activity' }
  ],
  translation:'I also often chat.'
},
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuān', hz: '你喜欢', cls: 'like' },
            { py: 'pǎobù', hz: '跑步', cls: 'activity' },
            { hz: '吗？' }
          ],
          translation: 'Do you like running? / هل تحب الجري؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xǐhuān', hz: '喜欢', cls: 'like' },
            { hz: '，' },
            { py: 'wǒ yě', hz: '我也', cls: 'self' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'pǎo pǎobù', hz: '跑跑步', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Yes, I often run too. / نعم، غالبًا أجري أيضًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ hé péngyou', hz: '你和朋友', cls: 'person' },
            { py: 'liáotiānr', hz: '聊天儿', cls: 'activity' },
            { py: 'ma',hz: '吗？' }
          ],
          translation: 'Do you chat with friends? / هل تتحدث مع أصدقائك؟'
        },
        {
  tokens: [
    { py: '', hz: '👦', cls: 'speaker' },
    { hz: '：' },
    { py: 'Liáotiānr', hz: '聊天儿。', cls: 'activity' }
  ],
  translation: 'Yes, I chat. / نعم، أتحدث.'
},
        {
  tokens: [
    { py:'', hz:'　　', cls:'speaker' },
    { py:'Wǒ chángcháng', hz:'我常常', cls:'time' },
    { py:'hé péngyou', hz:'和朋友', cls:'person' },
    { py:'liáo liáotiānr', hz:'聊聊天儿。', cls:'activity' }
  ],
  translation:'I often chat with friends.'
}
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的周末',
      translation: 'On weekends, I often go out with my friends. I like reading books and running. Sometimes I go to the park. I think weekends are very interesting.',
      tip: 'Speaking Goal: Describe your weekend habits with 常常 and verb reduplication.',
      lines: [
        {
          tokens: [
            { py: 'Zhōumò de shíhou', hz: '周末的时候', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ chángcháng', hz: '我常常', cls: 'time' },
            { py: 'hé péngyou', hz: '和朋友', cls: 'person' },
            { py: 'yìqǐ', hz: '一起', cls: 'activity' },
            { py: 'chūqù wán', hz: '出去玩', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'On weekends, I often go out with friends. / في عطلة نهاية الأسبوع، غالبًا أخرج مع أصدقائي.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuān', hz: '我喜欢', cls: 'like' },
            { py: 'kànkan shū', hz: '看看书', cls: 'activity' },
            { hz: '，' },
            { py: 'yě xǐhuān', hz: '也喜欢', cls: 'like' },
            { py: 'pǎo pǎobù', hz: '跑跑步', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like reading books and running. / أحب قراءة الكتب والجري.'
        },
        {
          tokens: [
            { py: 'Yǒu shíhou', hz: '有时候', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'qù gōngyuán', hz: '去公园', cls: 'place' },
            { hz: '，' },
            { py: 'liáo liáotiānr', hz: '聊聊天儿。', cls: 'activity' },
          ],
          translation: 'Sometimes I go to the park and chat. / أحيانًا أذهب إلى الحديقة وأتحدث مع الآخرين.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think weekends are very interesting. / أعتقد أن عطلة نهاية الأسبوع ممتعة جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “常常” 是什么意思？',
      pinyin: '“Chángcháng” shì shénme yìsi?',
      translation: 'What does “常常” mean?',
      choices: [
        { text: 'often', correct: true },
        { text: 'never', correct: false },
        { text: 'yesterday', correct: false }
      ]
    },
    {
      question: '2. “你周末常常做什么？” 是什么意思？',
      pinyin: '“Nǐ zhōumò chángcháng zuò shénme?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What do you often do on weekends?', correct: true },
        { text: 'Where do you go today?', correct: false },
        { text: 'What do you like to eat?', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “read books”？',
      pinyin: 'Nǎ yí ge shì “read books”?',
      translation: 'Which one means “read books”?',
      choices: [
        { text: '看书', correct: true },
        { text: '跑步', correct: false },
        { text: '逛街', correct: false }
      ]
    },
    {
      question: '4. “聊聊天儿” 是什么意思？',
      pinyin: '“Liáo liáotiānr” shì shénme yìsi?',
      translation: 'What does “聊聊天儿” mean?',
      choices: [
        { text: 'chat', correct: true },
        { text: 'go hiking', correct: false },
        { text: 'practice martial arts', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhōumò de shíhou', hz: '周末的时候', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ chángcháng', hz: '我常常', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuān', hz: '我喜欢', cls: 'like' },
        { blank: true },
        { hz: '，' },
        { py: 'yě xǐhuān', hz: '也喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yǒu shíhou', hz: '有时候', cls: 'time' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'zhōumò', hz: '周末', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'On weekends, I often ______. I like ______ and ______. Sometimes I ______. I think weekends are ______.',
    tip: 'Use: 看看书、跑跑步、聊聊天儿、去公园、逛逛街、练练武术。'
  },

  meanings: {
    '你周末': 'your weekend / عطلة نهاية الأسبوع الخاصة بك',
    '我周末': 'my weekend / عطلة نهاية الأسبوع الخاصة بي',
    '周末的时候': 'on weekends / في عطلة نهاية الأسبوع',
    '常常': 'often / غالبًا',
    '做什么': 'do what / ماذا تفعل',
    '看看书': 'read books / يقرأ الكتب',
    '看书': 'read books / قراءة الكتب',
    '跑跑步': 'run / يجري',
    '跑步': 'run / الجري',
    '聊聊天儿': 'chat / يتحدث',
    '聊天儿': 'chat / الدردشة',
    '去公园': 'go to the park / الذهاب إلى الحديقة',
    '逛街': 'go shopping / التسوق',
    '逛逛街': 'go shopping / يتسوق',
    '武术': 'martial arts / الفنون القتالية',
    '练': 'practice / يتدرب',
    '练练武术': 'practice martial arts / يتدرب على الفنون القتالية',
    '你喜欢': 'you like / أنت تحب',
    '我喜欢': 'I like / أنا أحب',
    '也喜欢': 'also like / يحب أيضًا',
    '我也': 'I also / أنا أيضًا',
    '和朋友': 'with friends / مع الأصدقاء',
    '一起': 'together / معًا',
    '出去玩': 'go out for fun / يخرج للترفيه',
    '有时候': 'sometimes / أحيانًا',
    '我觉得': 'I think / أعتقد',
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '很有意思': 'very interesting / ممتع جدًا'
  }
};