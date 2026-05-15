window.LESSONS = window.LESSONS || {};

window.LESSONS['1B-lesson4'] = {
  id: '1B-lesson4',
  book: '1B',
  lesson: 'Lesson 4',
  title: '现在几点？',
  theme: 'Time',
  goal: 'Ask and answer about time.',
  heroTranslation: 'What time is it now?',
  titleTokens: [
    { py: 'Xiànzài', hz: '现在', cls: 'time' },
    { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '⏰', pinyin: 'xiànzài', text: '现在', translation: 'now / الآن' },
    { emoji: '🕐', pinyin: 'diǎn', text: '点', translation: 'o’clock / الساعة' },
    { emoji: '⏱️', pinyin: 'fēn', text: '分', translation: 'minute / دقيقة' },
    { emoji: '🌞', pinyin: 'shàngwǔ', text: '上午', translation: 'morning / صباح' },
    { emoji: '☀️', pinyin: 'zhōngwǔ', text: '中午', translation: 'noon / ظهر' },
    { emoji: '🌤️', pinyin: 'xiàwǔ', text: '下午', translation: 'afternoon / بعد الظهر' },
    { emoji: '🌙', pinyin: 'wǎnshang', text: '晚上', translation: 'evening / مساء' },
    { emoji: '🌓', pinyin: 'bàn', text: '半', translation: 'half / نصف' },
    { emoji: '🕓', pinyin: 'sì diǎn', text: '四点', translation: 'four o’clock / الساعة الرابعة' },
    { emoji: '🕗', pinyin: 'bā diǎn', text: '八点', translation: 'eight o’clock / الساعة الثامنة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'What time is it now? / كم الساعة الآن؟'
    },
    {
      tokens: [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { py: 'bā diǎn', hz: '八点', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'It is eight o’clock now. / الساعة الآن الثامنة.'
    },
    {
      tokens: [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { py: 'liǎng diǎn bàn', hz: '两点半', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'It is two thirty now. / الساعة الآن الثانية والنصف.'
    },
    {
      tokens: [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { py: 'sì diǎn sānshí fēn', hz: '四点三十分', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'It is four thirty now. / الساعة الآن الرابعة والنصف.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说时间',
      translation: 'What time is it now? It is eight o’clock now. It is four o’clock now. It is two thirty now.',
      tip: 'Reading Goal: Say simple times clearly.',
      lines: [
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What time is it now? / كم الساعة الآن؟'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'bā diǎn', hz: '八点', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It is eight o’clock now. / الساعة الآن الثامنة.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'sì diǎn', hz: '四点', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It is four o’clock now. / الساعة الآن الرابعة.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'liǎng diǎn bàn', hz: '两点半', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It is two thirty now. / الساعة الآن الثانية والنصف.'
        }
      ]
    },

     B: {
      label: 'Level B 中级｜我会问现在几点',
      translation: 'Hello. What time is it now? It is seven o’clock now. What time is it now? It is eight thirty now.',
      tip: 'Pair Work: Ask and answer “现在几点？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: ',' },
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Hello! What time is it now? / مرحبًا! كم الساعة الآن؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It is seven o’clock now. / الساعة الآن السابعة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What time is it now? / كم الساعة الآن؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'bā diǎn bàn', hz: '八点半', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It is eight thirty now. / الساعة الآن الثامنة والنصف.'
        }
      ]
    },

      C: {
      label: 'Level C 高级｜我会说祷告时间',
      translation: 'Hello everyone. My name is Fatima. I pray at five o’clock. I pray at twelve thirty. I pray at three thirty. I pray at six o’clock. I pray at eight o’clock.',
      tip: 'Speaking Goal: Say five prayer times with “我……点祷告”.',
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
            { py: 'wǔ diǎn', hz: '五点', cls: 'time' },
            { py: 'dǎogào', hz: '祷告', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I pray at five o’clock. / أصلّي الساعة الخامسة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shí èr diǎn bàn', hz: '十二点半', cls: 'time' },
            { py: 'dǎogào', hz: '祷告', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I pray at twelve thirty. / أصلّي الساعة الثانية عشرة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'sān diǎn bàn', hz: '三点半', cls: 'time' },
            { py: 'dǎogào', hz: '祷告', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I pray at three thirty. / أصلّي الساعة الثالثة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'liù diǎn', hz: '六点', cls: 'time' },
            { py: 'dǎogào', hz: '祷告', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I pray at six o’clock. / أصلّي الساعة السادسة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bā diǎn', hz: '八点', cls: 'time' },
            { py: 'dǎogào', hz: '祷告', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I pray at eight o’clock. / أصلّي الساعة الثامنة.'
        }
      ]
    },
  },

  practice: [
    {
      question: '1. “几点” 是什么意思？',
      pinyin: '“Jǐ diǎn” shì shénme yìsi?',
      translation: 'What does “几点” mean?',
      choices: [
        { text: 'what time', correct: true },
        { text: 'today', correct: false },
        { text: 'how many people', correct: false }
      ]
    },
    {
      question: '2. “半” 是什么意思？',
      pinyin: '“Bàn” shì shénme yìsi?',
      translation: 'What does “半” mean?',
      choices: [
        { text: 'half', correct: true },
        { text: 'night', correct: false },
        { text: 'morning', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “7:30”？',
      pinyin: 'Nǎ yí ge shì “7:30”?',
      translation: 'Which one means 7:30?',
      choices: [
        { text: '七点半', correct: true },
        { text: '七点', correct: false },
        { text: '八点半', correct: false }
      ]
    },
    {
      question: '4. “下午” 是什么意思？',
      pinyin: '“Xiàwǔ” shì shénme yìsi?',
      translation: 'What does “下午” mean?',
      choices: [
        { text: 'afternoon', correct: true },
        { text: 'morning', correct: false },
        { text: 'evening', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { blank: true },
        { hz: '？' }
      ],
      [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Shàngwǔ', hz: '上午', cls: 'time' },
        { blank: true },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xiàwǔ', hz: '下午', cls: 'time' },
        { blank: true },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'What time is it now? It is ____ now. In the morning I ____. In the afternoon I ____.',
    tip: 'Use time words: 七点、八点半、上午、下午。'
  },

  meanings: {
    '现在': 'now / الآن',
    '几点': 'what time / كم الساعة',
    '点': 'o’clock / الساعة',
    '分': 'minute / دقيقة',
    '上午': 'morning / صباح',
    '中午': 'noon / ظهر',
    '下午': 'afternoon / بعد الظهر',
    '晚上': 'evening / مساء',
    '半': 'half / نصف',
    '现在几点': 'what time is it now / كم الساعة الآن',
    '八点': 'eight o’clock / الساعة الثامنة',
    '四点': 'four o’clock / الساعة الرابعة',
    '两点半': 'two thirty / الثانية والنصف',
    '四点三十分': 'four thirty / الرابعة والنصف',
    '七点半': 'seven thirty / السابعة والنصف',
    '是': 'is / يكون',
    '还是': 'or / أم',
    '你呢': 'and you / وأنت',
    '我现在': 'I now / أنا الآن',
    '上汉语课': 'have Chinese class / أدرس اللغة الصينية',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن',
    '我起床': 'I get up / أستيقظ',
    '我去学校': 'I go to school / أذهب إلى المدرسة',
    '我回家': 'I go home / أعود إلى البيت',
    '我睡觉': 'I sleep / أنام',
    '十点半': 'ten thirty / العاشرة والنصف',
    '十点': 'ten o’clock / الساعة العاشرة',
    '七点': 'seven o’clock / الساعة السابعة',
    '八点半': 'eight thirty / الثامنة والنصف',
    '十二点': 'twelve o’clock / الساعة الثانية عشرة',
    '四点半': 'four thirty / الرابعة والنصف',
    '祷告': 'pray / يصلي',
    '五点': 'five o’clock / الساعة الخامسة',
    '十二点半': 'twelve thirty / الثانية عشرة والنصف',
    '三点半': 'three thirty / الثالثة والنصف',
    '六点': 'six o’clock / الساعة السادسة'
  }
};