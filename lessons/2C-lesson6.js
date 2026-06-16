window.LESSONS = window.LESSONS || {};

window.LESSONS['2C-lesson6'] = {
  id: '2C-lesson6',
  book: '2C',
  lesson: 'Lesson 6',
  title: '我们是坐火车去的。',
  theme: 'Transportation and Travel Experience',
  goal: 'Describe when, how, and with whom someone traveled using 是……的.',
  heroTranslation: 'We went by train.',
  titleTokens: [
    { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
    { py: 'zuò huǒchē', hz: '坐火车', cls: 'activity' },
    { py: 'qù de', hz: '去的', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🚆', pinyin: 'huǒchē', text: '火车', translation: 'train / قطار' },
    { emoji: '✈️', pinyin: 'fēijī', text: '飞机', translation: 'airplane / طائرة' },
    { emoji: '🚗', pinyin: 'qìchē', text: '汽车', translation: 'car / سيارة' },
    { emoji: '📅', pinyin: 'qùnián', text: '去年', translation: 'last year / السنة الماضية' },
    { emoji: '📅', pinyin: 'jīnnián', text: '今年', translation: 'this year / هذه السنة' },
    { emoji: '👨‍👩‍👧', pinyin: 'yìqǐ', text: '一起', translation: 'together / معًا' },
    { emoji: '💭', pinyin: 'juéde', text: '觉得', translation: 'think / feel / يعتقد' },
    { emoji: '😊', pinyin: 'yǒu yìsi', text: '有意思', translation: 'interesting / ممتع' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
        { py: 'zuò huǒchē', hz: '坐火车', cls: 'activity' },
        { py: 'qù de', hz: '去的', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'We went by train. / ذهبنا بالقطار.'
    },
    {
      tokens: [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'qùnián', hz: '去年', cls: 'time' },
        { py: 'qù de', hz: '去的', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I went last year. / ذهبت السنة الماضية.'
    },
    {
      tokens: [
        { py: 'Nǐ shì', hz: '你是', cls: 'person' },
        { py: 'zěnme', hz: '怎么', cls: 'activity' },
        { py: 'qù de', hz: '去的', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How did you go? / كيف ذهبت؟'
    },
    {
      tokens: [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'Běijīng', hz: '北京', cls: 'place' },
        { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I think Beijing is very interesting. / أعتقد أن بكين ممتعة جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说交通方式',
      translation: 'We went by train. We went by airplane. We went by car.',
      tip: 'Reading Goal: Read transportation words clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
            { py: 'zuò huǒchē', hz: '坐火车', cls: 'activity' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We went by train. / ذهبنا بالقطار.'
        },
        {
          tokens: [
            { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
            { py: 'zuò fēijī', hz: '坐飞机', cls: 'activity' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We went by airplane. / ذهبنا بالطائرة.'
        },
        {
          tokens: [
            { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
            { py: 'zuò qìchē', hz: '坐汽车', cls: 'activity' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We went by car. / ذهبنا بالسيارة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问怎么去的',
      translation: 'When did you go? I went last year. How did you go? I went by airplane with my family.',
      tip: 'Pair Work: Ask and answer about travel time and transportation.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ shì', hz: '你是', cls: 'person' },
            { py: 'shénme shíhou', hz: '什么时候', cls: 'time' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'When did you go? / متى ذهبت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'qùnián', hz: '去年', cls: 'time' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went last year. / ذهبت السنة الماضية.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ shì', hz: '你是', cls: 'person' },
            { py: 'zěnme', hz: '怎么', cls: 'activity' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How did you go? / كيف ذهبت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'hé jiārén', hz: '和家人', cls: 'person' },
            { py: 'yìqǐ', hz: '一起', cls: 'activity' },
            { py: 'zuò fēijī', hz: '坐飞机', cls: 'activity' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went by airplane with my family. / ذهبت بالطائرة مع عائلتي.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ juéde', hz: '你觉得', cls: 'person' },
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you think of Beijing? / ما رأيك في بكين؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think Beijing is very interesting. / أعتقد أن بكين ممتعة جدًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍一次旅行',
      translation: 'Last year, I went to Beijing with my family. We went by airplane. I think Beijing is very interesting.',
      tip: 'Speaking Goal: Describe one travel experience with time, people, transportation and feeling.',
      lines: [
        {
          tokens: [
            { py: 'Qùnián', hz: '去年', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé jiārén', hz: '和家人', cls: 'person' },
            { py: 'yìqǐ', hz: '一起', cls: 'activity' },
            { py: 'qù le', hz: '去了', cls: 'activity' },
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Last year, I went to Beijing with my family. / في السنة الماضية ذهبت إلى بكين مع عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
            { py: 'zuò fēijī', hz: '坐飞机', cls: 'activity' },
            { py: 'qù de', hz: '去的', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We went by airplane. / ذهبنا بالطائرة.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think Beijing is very interesting. / أعتقد أن بكين ممتعة جدًا.'
        },
        {
          tokens: [
            { py: 'Jīnnián', hz: '今年', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng qù', hz: '想去', cls: 'activity' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This year, I want to go to Shanghai. / هذه السنة أريد أن أذهب إلى شنغهاي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “火车” 是什么意思？',
      pinyin: '“Huǒchē” shì shénme yìsi?',
      translation: 'What does “火车” mean?',
      choices: [
        { text: 'train', correct: true },
        { text: 'airplane', correct: false },
        { text: 'car', correct: false }
      ]
    },
    {
      question: '2. “我们是坐火车去的。” 是什么意思？',
      pinyin: '“Wǒmen shì zuò huǒchē qù de.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We went by train.', correct: true },
        { text: 'We went by car.', correct: false },
        { text: 'We went to school.', correct: false }
      ]
    },
    {
      question: '3. “去年” 是什么意思？',
      pinyin: '“Qùnián” shì shénme yìsi?',
      translation: 'What does “去年” mean?',
      choices: [
        { text: 'last year', correct: true },
        { text: 'this year', correct: false },
        { text: 'next year', correct: false }
      ]
    },
    {
      question: '4. “你是怎么去的？” 是什么意思？',
      pinyin: '“Nǐ shì zěnme qù de?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How did you go?', correct: true },
        { text: 'When did you go?', correct: false },
        { text: 'Where did you go?', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: '', hz: '', cls: 'time' },
        { blank: true },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'hé jiārén', hz: '和家人', cls: 'person' },
        { py: 'yìqǐ', hz: '一起', cls: 'activity' },
        { py: 'qù le', hz: '去了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen shì', hz: '我们是', cls: 'self' },
        { blank: true },
        { py: 'qù de', hz: '去的', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: '____, I went to ____ with my family. We went by ____. I think ____ is very interesting.',
    tip: 'Use: 去年、今年、北京、上海、迪拜、坐火车、坐飞机、坐汽车。'
  },

  meanings: {
    '我们是': 'we are / نحن',
    '我是': 'I am / أنا',
    '你是': 'you are / أنت',
    '坐火车': 'take the train / ركوب القطار',
    '坐飞机': 'take the airplane / ركوب الطائرة',
    '坐汽车': 'take the car / ركوب السيارة',
    '去的': 'went by / ذهب بـ',
    '去了': 'went to / ذهب إلى',
    '去年': 'last year / السنة الماضية',
    '今年': 'this year / هذه السنة',
    '什么时候': 'when / متى',
    '怎么': 'how / كيف',
    '和家人': 'with family / مع العائلة',
    '一起': 'together / معًا',
    '北京': 'Beijing / بكين',
    '上海': 'Shanghai / شنغهاي',
    '迪拜': 'Dubai / دبي',
    '你觉得': 'you think / ما رأيك',
    '我觉得': 'I think / أعتقد',
    '怎么样': 'how is it / كيف هو',
    '很有意思': 'very interesting / ممتع جدًا',
    '想去': 'want to go / يريد أن يذهب',
    '火车': 'train / قطار',
    '飞机': 'airplane / طائرة',
    '汽车': 'car / سيارة',
    '有意思': 'interesting / ممتع',
    '觉得': 'think / feel / يعتقد'
  }
};