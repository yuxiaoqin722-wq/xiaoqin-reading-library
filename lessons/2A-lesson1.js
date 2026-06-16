window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson1'] = {
  id: '2A-lesson1',
  book: '2A',
  lesson: 'Lesson 1',
  title: '今天太热了！',
  theme: 'Weather',
  goal: 'Ask about weather and temperature with “今天天气怎么样？”.',
  heroTranslation: 'Today is too hot!',
  titleTokens: [
    { py: 'Jīntiān', hz: '今天', cls: 'time' },
    { py: 'tài rè le', hz: '太热了', cls: 'not-like' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '📅', pinyin: 'jīntiān', text: '今天', translation: 'today / اليوم' },
    { emoji: '🌤️', pinyin: 'tiānqì', text: '天气', translation: 'weather / الطقس' },
    { emoji: '❓', pinyin: 'zěnmeyàng', text: '怎么样', translation: 'how is it / كيف' },
    { emoji: '🔥', pinyin: 'rè', text: '热', translation: 'hot / حار' },
    { emoji: '🥶', pinyin: 'lěng', text: '冷', translation: 'cold / بارد' },
    { emoji: '😌', pinyin: 'shūfu', text: '舒服', translation: 'comfortable / مريح' },
    { emoji: '🌡️', pinyin: 'duōshao dù', text: '多少度', translation: 'how many degrees / كم درجة' },
    { emoji: '🌡️', pinyin: 'dù', text: '度', translation: 'degree / درجة' },
    { emoji: '🇦🇪', pinyin: 'Díbài', text: '迪拜', translation: 'Dubai / دبي' },
    { emoji: '🇨🇳', pinyin: 'Běijīng', text: '北京', translation: 'Beijing / بكين' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'tiānqì', hz: '天气', cls: 'time' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How is the weather today? / كيف الطقس اليوم؟'
    },
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'tài rè le', hz: '太热了', cls: 'not-like' },
        { hz: '！' }
      ],
      translation: 'Today is too hot! / اليوم حار جدًا!'
    },
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'hěn shūfu', hz: '很舒服', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Today is very comfortable. / اليوم مريح جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说天气',
      translation: 'How is the weather today? Today is too hot. Today is very hot. Today is very comfortable. Today is not cold.',
      tip: 'Reading Goal: Read simple weather sentences.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the weather today? / كيف الطقس اليوم؟'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tài rè le', hz: '太热了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Today is too hot. / اليوم حار جدًا.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn rè', hz: '很热', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Today is very hot. / اليوم حار.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn shūfu', hz: '很舒服', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today is very comfortable. / اليوم مريح جدًا.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'bù lěng', hz: '不冷', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today is not cold. / اليوم ليس باردًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问天气和温度',
      translation: 'How is the weather today? Today is too hot! How many degrees is it today? Today is forty degrees. How is the weather in Beijing? Beijing is not cold and not hot. It is very comfortable.',
      tip: 'Pair Work: Ask and answer about weather and temperature.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the weather today? / كيف الطقس اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tài rè le', hz: '太热了', cls: 'not-like' },
            { hz: '！' }
          ],
          translation: 'Today is too hot! / اليوم حار جدًا!'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'duōshao dù', hz: '多少度', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How many degrees is it today? / كم درجة الحرارة اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'sì shí dù', hz: '四十度', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is forty degrees. / اليوم أربعون درجة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the weather in Beijing? / كيف الطقس في بكين؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'bù lěng bù rè', hz: '不冷不热', cls: 'like' },
            { hz: '，' },
            { py: 'hěn shūfu', hz: '很舒服', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Beijing is not cold and not hot. It is very comfortable. / بكين ليست باردة ولا حارة، إنها مريحة جدًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍两个地方的天气',
      translation: 'Hello everyone. My name is Hassan. I am in Dubai. Dubai is forty degrees today. Today is too hot! Beijing is twenty degrees today. Beijing is not cold and not hot. It is very comfortable.',
      tip: 'Speaking Goal: Introduce weather in two places.',
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
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Hassan. / اسمي حسن.'
        },
        {
          tokens: [
            { py: 'Wǒ zài', hz: '我在', cls: 'self' },
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I am in Dubai. / أنا في دبي.'
        },
        {
          tokens: [
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'sì shí dù', hz: '四十度', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Dubai is forty degrees today. / دبي اليوم أربعون درجة.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tài rè le', hz: '太热了', cls: 'not-like' },
            { hz: '！' }
          ],
          translation: 'Today is too hot! / اليوم حار جدًا!'
        },
        {
          tokens: [
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'èr shí dù', hz: '二十度', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Beijing is twenty degrees today. / بكين اليوم عشرون درجة.'
        },
        {
          tokens: [
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'bù lěng bù rè', hz: '不冷不热', cls: 'like' },
            { hz: '，' },
            { py: 'hěn shūfu', hz: '很舒服', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Beijing is not cold and not hot. It is very comfortable. / بكين ليست باردة ولا حارة، إنها مريحة جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “天气” 是什么意思？',
      pinyin: '“Tiānqì” shì shénme yìsi?',
      translation: 'What does “天气” mean?',
      choices: [
        { text: 'weather', correct: true },
        { text: 'birthday', correct: false },
        { text: 'hobby', correct: false }
      ]
    },
    {
      question: '2. “今天太热了！” 是什么意思？',
      pinyin: '“Jīntiān tài rè le!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Today is too hot!', correct: true },
        { text: 'Today is too cold!', correct: false },
        { text: 'Today is very comfortable.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “cold”？',
      pinyin: 'Nǎ yí ge shì “cold”?',
      translation: 'Which one means “cold”?',
      choices: [
        { text: '冷', correct: true },
        { text: '热', correct: false },
        { text: '舒服', correct: false }
      ]
    },
    {
      question: '4. “今天多少度？” 是什么意思？',
      pinyin: '“Jīntiān duōshao dù?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How many degrees is it today?', correct: true },
        { text: 'How is the weather today?', correct: false },
        { text: 'Where are you today?', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'tiānqì', hz: '天气', cls: 'time' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'duōshao dù', hz: '多少度', cls: 'time' },
        { hz: '？' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { blank: true },
        { py: 'dù', hz: '度', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'tài', hz: '太', cls: 'not-like' },
        { blank: true },
        { py: 'le', hz: '了', cls: 'not-like' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { blank: true },
        { py: 'dù', hz: '度', cls: 'time' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'bù lěng bù rè', hz: '不冷不热', cls: 'like' },
        { hz: '，' },
        { py: 'hěn shūfu', hz: '很舒服', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'How is the weather today? How many degrees is it today? Today is _____ degrees. Today is too _____. _____ is _____ degrees today. _____ is not cold and not hot, very comfortable.',
    tip: 'Use weather words: 热、冷、舒服。Use places: 迪拜、北京。'
  },

  meanings: {
    '今天': 'today / اليوم',
    '天气': 'weather / الطقس',
    '怎么样': 'how is it / كيف',
    '今天天气怎么样': 'how is the weather today / كيف الطقس اليوم',
    '太': 'too / جدًا',
    '热': 'hot / حار',
    '冷': 'cold / بارد',
    '太热了': 'too hot / حار جدًا',
    '太冷了': 'too cold / بارد جدًا',
    '很热': 'very hot / حار',
    '很冷': 'very cold / بارد جدًا',
    '舒服': 'comfortable / مريح',
    '很舒服': 'very comfortable / مريح جدًا',
    '不冷': 'not cold / ليس باردًا',
    '不热': 'not hot / ليس حارًا',
    '不冷不热': 'not cold and not hot / ليس باردًا ولا حارًا',
    '多少度': 'how many degrees / كم درجة',
    '今天多少度': 'how many degrees is it today / كم درجة الحرارة اليوم',
    '度': 'degree / درجة',
    '四十度': 'forty degrees / أربعون درجة',
    '二十度': 'twenty degrees / عشرون درجة',
    '迪拜': 'Dubai / دبي',
    '北京': 'Beijing / بكين',
    '我在': 'I am in / أنا في',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن'
  }
};