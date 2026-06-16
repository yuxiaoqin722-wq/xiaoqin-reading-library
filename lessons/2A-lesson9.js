window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson9'] = {
  id: '2A-lesson9',
  book: '2A',
  lesson: 'Lesson 9',
  title: '我今天很忙。',
  theme: 'My busy day',
  goal: 'Talk about feelings, classes, and daily activities.',
  heroTranslation: 'I am very busy today.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'jīntiān', hz: '今天', cls: 'time' },
    { py: 'hěn', hz: '很' },
    { py: 'máng', hz: '忙', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📅', pinyin: 'jīntiān', text: '今天', translation: 'today / اليوم' },
    { emoji: '🧠', pinyin: 'máng', text: '忙', translation: 'busy / مشغول' },
    { emoji: '😴', pinyin: 'lèi', text: '累', translation: 'tired / متعب' },
    { emoji: '😊', pinyin: 'gāoxìng', text: '高兴', translation: 'happy / سعيد' },
    { emoji: '🍽️', pinyin: 'è', text: '饿', translation: 'hungry / جائع' },
    { emoji: '🥤', pinyin: 'kě', text: '渴', translation: 'thirsty / عطشان' },
    { emoji: '❓', pinyin: 'shénme shíhou', text: '什么时候', translation: 'when / متى' },
    { emoji: '📖', pinyin: 'zěnme dú', text: '怎么读', translation: 'how to read / كيف يُقرأ' },
    { emoji: '📘', pinyin: 'Zhōngwén kè', text: '中文课', translation: 'Chinese class / درس اللغة الصينية' },
    { emoji: '🏃', pinyin: 'tǐyù kè', text: '体育课', translation: 'PE class / درس الرياضة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'máng ma', hz: '忙吗', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Are you busy today? / هل أنت مشغول اليوم؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'hěn máng', hz: '很忙', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I am very busy today. / أنا مشغول جدًا اليوم.'
    },
    {
      tokens: [
        { py: 'Zhège Hànzì', hz: '这个汉字', cls: 'activity' },
        { py: 'zěnme dú', hz: '怎么读', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How do you read this Chinese character? / كيف يُقرأ هذا الحرف الصيني؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读感受',
      translation: 'I am busy today. I am tired today. I am happy today. Are you busy today?',
      tip: 'Reading Goal: Read simple feeling sentences.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn máng', hz: '很忙', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am very busy today. / أنا مشغول جدًا اليوم.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn lèi', hz: '很累', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am very tired today. / أنا متعب جدًا اليوم.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn gāoxìng', hz: '很高兴', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I am very happy today. / أنا سعيد جدًا اليوم.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'máng ma', hz: '忙吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Are you busy today? / هل أنت مشغول اليوم؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会说今天的课',
      translation: 'Are you busy today? I am very busy today. I have English class in the morning. I have Chinese class and PE class in the afternoon.',
      tip: 'Pair Work: Ask about classes and feelings.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'máng ma', hz: '忙吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Are you busy today? / هل أنت مشغول اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn máng', hz: '很忙', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am very busy today. / أنا مشغول جدًا اليوم.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'yǒu shénme kè', hz: '有什么课', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What classes do you have today? / ما الدروس التي لديك اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shàngwǔ', hz: '上午', cls: 'time' },
            { py: 'yǒu', hz: '有' },
            { py: 'Yīngyǔ kè', hz: '英语课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have English class in the morning. / لدي درس إنجليزي في الصباح.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiàwǔ', hz: '下午', cls: 'time' },
            { py: 'yǒu', hz: '有' },
            { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
            { py: 'hé', hz: '和' },
            { py: 'tǐyù kè', hz: '体育课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have Chinese class and PE class in the afternoon. / لدي درس صيني ودرس رياضة بعد الظهر.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ de kè', hz: '你的课', cls: 'activity' },
            { py: 'duō ma', hz: '多吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you have many classes? / هل لديك دروس كثيرة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ de kè', hz: '我的课', cls: 'activity' },
            { py: 'hěn duō', hz: '很多', cls: 'activity' },
            { hz: '，' },
            { py: 'suǒyǐ', hz: '所以' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hěn lèi', hz: '很累', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have many classes, so I am very tired. / لدي دروس كثيرة، لذلك أنا متعب جدًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的一天',
      translation: 'I have English class in the morning. I have Chinese class and science class in the afternoon. I have PE class at two o’clock. I am very busy today, but I am very happy.',
      tip: 'Speaking Goal: Introduce your day with time, classes, and feelings.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shàngwǔ', hz: '上午', cls: 'time' },
            { py: 'yǒu', hz: '有' },
            { py: 'Yīngyǔ kè', hz: '英语课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have English class in the morning. / لدي درس إنجليزي في الصباح.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiàwǔ', hz: '下午', cls: 'time' },
            { py: 'yǒu', hz: '有' },
            { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
            { hz: '，' },
            { py: 'hái yǒu', hz: '还有' },
            { py: 'kēxué kè', hz: '科学课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have Chinese class and science class in the afternoon. / لدي درس صيني ودرس علوم بعد الظهر.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
            { py: 'yǒu', hz: '有' },
            { py: 'tǐyù kè', hz: '体育课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: "I have PE class at two o'clock. / لدي درس رياضة في الساعة الثانية."
        },
        {
          tokens: [
            { py: 'Wǒ de kè', hz: '我的课', cls: 'activity' },
            { py: 'hěn duō', hz: '很多', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have many classes. / لدي دروس كثيرة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn máng', hz: '很忙', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am very busy today. / أنا مشغول جدًا اليوم.'
        },
        {
          tokens: [
            { py: 'Dànshì', hz: '但是' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hěn gāoxìng', hz: '很高兴', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'But I am very happy. / لكنني سعيد جدًا.'
        },
      ]
    }
  },

  practice: [
    {
      question: '1. “忙” 是什么意思？',
      pinyin: '“Máng” shì shénme yìsi?',
      translation: 'What does “忙” mean?',
      choices: [
        { text: 'busy / مشغول', correct: true },
        { text: 'happy / سعيد', correct: false },
        { text: 'hungry / جائع', correct: false }
      ]
    },
    {
      question: '2. “我今天很忙。” 是什么意思？',
      pinyin: '“Wǒ jīntiān hěn máng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am very busy today.', correct: true },
        { text: 'I have Chinese class today.', correct: false },
        { text: 'I am very hungry today.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你今天忙吗？',
      promptPinyin: 'Nǐ jīntiān máng ma?',
      choices: [
        { text: '我今天很忙。', pinyin: 'Wǒ jīntiān hěn máng.', correct: true },
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: false }
      ]
    },
    {
      question: '4. “什么时候” 是什么意思？',
      pinyin: '“Shénme shíhou” shì shénme yìsi?',
      translation: 'What does “什么时候” mean?',
      choices: [
        { text: 'when / متى', correct: true },
        { text: 'what class / أي درس', correct: false },
        { text: 'how to read / كيف يُقرأ', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'shàngwǔ', hz: '上午', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiàwǔ', hz: '下午', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de kè', hz: '我的课', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'hěn', hz: '很' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Dànshì', hz: '但是' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'hěn', hz: '很' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I have ______ in the morning. I have ______ in the afternoon. My classes are ______. I am very ______ today. But I am very ______.',
    tip: 'Use your real timetable. Say your classes and your feeling today.'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '我们': 'we / نحن',
    '今天': 'today / اليوم',
    '上午': 'morning / صباحًا',
    '下午': 'afternoon / بعد الظهر',
    '两点': "two o'clock / الساعة الثانية",
    '有': 'have / لديه',
    '还有': 'also have / لديه أيضًا',
    '很': 'very / جدًا',
    '忙': 'busy / مشغول',
    '很忙': 'very busy / مشغول جدًا',
    '累': 'tired / متعب',
    '很累': 'very tired / متعب جدًا',
    '饿': 'hungry / جائع',
    '渴': 'thirsty / عطشان',
    '高兴': 'happy / سعيد',
    '很高兴': 'very happy / سعيد جدًا',
    '忙吗': 'busy? / هل أنت مشغول؟',
    '什么课': 'what class / أي درس',
    '有什么课': 'what classes do you have / ما الدروس التي لديك',
    '什么时候': 'when / متى',
    '怎么读': 'how to read / كيف يُقرأ',
    '这个汉字': 'this Chinese character / هذا الحرف الصيني',
    '去吃饭': 'go to eat / نذهب لتناول الطعام',
    '中文课': 'Chinese class / درس اللغة الصينية',
    '英语课': 'English class / درس اللغة الإنجليزية',
    '科学课': 'science class / درس العلوم',
    '体育课': 'PE class / درس الرياضة',
    '你的课': 'your classes / دروسك',
    '我的课': 'my classes / دروسي',
    '多吗': 'many? / هل هي كثيرة؟',
    '很多': 'many / كثير جدًا',
    '所以': 'so / لذلك',
    '但是': 'but / لكن'
  }
};