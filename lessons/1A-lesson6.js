window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson6'] = {
  id: '1A-lesson6',
  book: '1A',
  lesson: 'Lesson 6',
  title: '今天星期四。',
  theme: 'Days of the week',
  goal: 'Ask and answer what day it is today.',
  heroTranslation: 'Today is Thursday.',
  titleTokens: [
    { py: 'Jīntiān', hz: '今天', cls: 'time' },
    { py: 'Xīngqīsì', hz: '星期四', cls: 'time' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📅', pinyin: 'jīntiān', text: '今天', translation: 'today / اليوم' },
    { emoji: '📅', pinyin: 'zuótiān', text: '昨天', translation: 'yesterday / أمس' },
    { emoji: '📅', pinyin: 'míngtiān', text: '明天', translation: 'tomorrow / غدًا' },
    { emoji: '1️⃣', pinyin: 'Xīngqīyī', text: '星期一', translation: 'Monday / الاثنين' },
    { emoji: '2️⃣', pinyin: 'Xīngqīèr', text: '星期二', translation: 'Tuesday / الثلاثاء' },
    { emoji: '3️⃣', pinyin: 'Xīngqīsān', text: '星期三', translation: 'Wednesday / الأربعاء' },
    { emoji: '4️⃣', pinyin: 'Xīngqīsì', text: '星期四', translation: 'Thursday / الخميس' },
    { emoji: '5️⃣', pinyin: 'Xīngqīwǔ', text: '星期五', translation: 'Friday / الجمعة' },
    { emoji: '6️⃣', pinyin: 'Xīngqīliù', text: '星期六', translation: 'Saturday / السبت' },
    { emoji: '☀️', pinyin: 'Xīngqītiān', text: '星期天', translation: 'Sunday / الأحد' },
    { emoji: '❓', pinyin: 'xīngqī jǐ', text: '星期几', translation: 'what day / أي يوم' },
    { emoji: '🏫', pinyin: 'shàngkè', text: '上课', translation: 'have class / يحضر الدرس' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'xīngqī jǐ', hz: '星期几', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'What day is it today? / أي يوم اليوم؟'
    },
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'Xīngqīsì', hz: '星期四', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'Today is Thursday. / اليوم الخميس.'
    },
    {
      tokens: [
        { py: 'Míngtiān', hz: '明天', cls: 'time' },
        { py: 'Xīngqīwǔ', hz: '星期五', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'Tomorrow is Friday. / غدًا الجمعة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读星期',
      translation: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
      tip: 'Reading Goal: Read the days slowly and clearly.',
      lines: [
        {
          tokens: [
            { py: 'Xīngqīyī', hz: '星期一', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Monday. / الاثنين.'
        },
        {
          tokens: [
            { py: 'Xīngqīèr', hz: '星期二', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Tuesday. / الثلاثاء.'
        },
        {
          tokens: [
            { py: 'Xīngqīsān', hz: '星期三', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Wednesday. / الأربعاء.'
        },
        {
          tokens: [
            { py: 'Xīngqīsì', hz: '星期四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Thursday. / الخميس.'
        },
        {
          tokens: [
            { py: 'Xīngqīwǔ', hz: '星期五', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Friday. / الجمعة.'
        },
        {
          tokens: [
            { py: 'Xīngqīliù', hz: '星期六', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Saturday. / السبت.'
        },
        {
          tokens: [
            { py: 'Xīngqītiān', hz: '星期天', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Sunday. / الأحد.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问今天星期几',
      translation: 'What day is it today? Today is Thursday. Tomorrow is Friday.',
      tip: 'Pair Work: One student asks “今天星期几？”, one student answers.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'xīngqī jǐ', hz: '星期几', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What day is it today? / أي يوم اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'Xīngqīsì', hz: '星期四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is Thursday. / اليوم الخميس.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Míngtiān', hz: '明天', cls: 'time' },
            { py: 'xīngqī jǐ', hz: '星期几', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What day is it tomorrow? / أي يوم غدًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Míngtiān', hz: '明天', cls: 'time' },
            { py: 'Xīngqīwǔ', hz: '星期五', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Tomorrow is Friday. / غدًا الجمعة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会说昨天今天明天',
      translation: 'Yesterday was Wednesday. Today is Thursday. Tomorrow is Friday. What day is it today?',
      tip: 'Speaking Goal: Say yesterday, today and tomorrow. Then ask your friend.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Hello, my name is Fatima. / مرحبًا، اسمي فاطمة.'
        },
        {
          tokens: [
            { py: 'Zuótiān', hz: '昨天', cls: 'time' },
            { py: 'Xīngqīsān', hz: '星期三', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Yesterday was Wednesday. / أمس كان الأربعاء.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'Xīngqīsì', hz: '星期四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is Thursday. / اليوم الخميس.'
        },
        {
          tokens: [
            { py: 'Míngtiān', hz: '明天', cls: 'time' },
            { py: 'Xīngqīwǔ', hz: '星期五', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Tomorrow is Friday. / غدًا الجمعة.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'shàngkè', hz: '上课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Today I have class. / اليوم لدي درس.'
        },
        {
          tokens: [
            { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
            { hz: '？' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'xīngqī jǐ', hz: '星期几', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'And you? What day is it today? / وأنت؟ أي يوم اليوم؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “今天星期几？” 是什么意思？',
      pinyin: '“Jīntiān xīngqī jǐ?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What day is it today?', correct: true },
        { text: 'How old are you?', correct: false },
        { text: 'What is your name?', correct: false }
      ]
    },
    {
      question: '2. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '今天星期几？',
      promptPinyin: 'Jīntiān xīngqī jǐ?',
      choices: [
        { text: '今天星期四。', pinyin: 'Jīntiān Xīngqīsì.', correct: true },
        { text: '我十二岁。', pinyin: 'Wǒ shíèr suì.', correct: false }
      ]
    },
    {
      question: '3. “明天” 是什么意思？',
      pinyin: '“Míngtiān” shì shénme yìsi?',
      translation: 'What does “明天” mean?',
      choices: [
        { text: 'tomorrow', correct: true },
        { text: 'today', correct: false },
        { text: 'yesterday', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 Friday？',
      pinyin: 'Nǎ yí ge shì Friday?',
      translation: 'Which one is Friday?',
      choices: [
        { text: '星期五', pinyin: 'Xīngqīwǔ', correct: true },
        { text: '星期四', pinyin: 'Xīngqīsì', correct: false },
        { text: '星期六', pinyin: 'Xīngqīliù', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zuótiān', hz: '昨天', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Míngtiān', hz: '明天', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'xīngqī jǐ', hz: '星期几', cls: 'time' },
        { hz: '？' }
      ]
    ],
    translation: 'Today is ______. Yesterday was ______. Tomorrow is ______. What day is it today?',
    tip: 'Use the real day. Then ask your classmate.'
  },

  meanings: {
    '你好': 'hello / مرحبًا',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '今天': 'today / اليوم',
    '昨天': 'yesterday / أمس',
    '明天': 'tomorrow / غدًا',
    '星期几': 'what day / أي يوم',
    '今天星期几': 'what day is it today / أي يوم اليوم',
    '星期一': 'Monday / الاثنين',
    '星期二': 'Tuesday / الثلاثاء',
    '星期三': 'Wednesday / الأربعاء',
    '星期四': 'Thursday / الخميس',
    '星期五': 'Friday / الجمعة',
    '星期六': 'Saturday / السبت',
    '星期日': 'Sunday / الأحد',
    '星期天': 'Sunday / الأحد',
    '今天星期四': 'today is Thursday / اليوم الخميس',
    '昨天星期三': 'yesterday was Wednesday / أمس كان الأربعاء',
    '明天星期五': 'tomorrow is Friday / غدًا الجمعة',
    '上课': 'have class / يحضر الدرس',
    '我上课': 'I have class / لدي درس',
    '不上课': 'do not have class / لا يوجد درس',
    '今天我上课': 'today I have class / اليوم لدي درس',
    '你呢': 'and you / وأنت',
    '人': 'person / شخص'
  }
};