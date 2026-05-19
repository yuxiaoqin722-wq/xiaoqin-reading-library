window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson5'] = {
  id: '2A-lesson5',
  book: '2A',
  lesson: 'Lesson 5',
  title: '我周末去奇迹花园了。',
  theme: 'Weekend Places',
  goal: 'Talk about where you went on the weekend with “我周末去……了”.',
  heroTranslation: 'I went to Miracle Garden on the weekend.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'zhōumò', hz: '周末', cls: 'time' },
    { py: 'qù', hz: '去', cls: 'activity' },
    { py: 'qíjì huāyuán', hz: '奇迹花园', cls: 'place' },
    { py: 'le', hz: '了', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🌸', pinyin: 'qíjì huāyuán', text: '奇迹花园', translation: 'Miracle Garden / حديقة المعجزة' },
    { emoji: '🌳', pinyin: 'gōngyuán', text: '公园', translation: 'park / حديقة' },
    { emoji: '🕌', pinyin: 'qīngzhēnsì', text: '清真寺', translation: 'mosque / مسجد' },
    { emoji: '🏬', pinyin: 'shāngchǎng', text: '商场', translation: 'mall / مركز تجاري' },
    { emoji: '📚', pinyin: 'túshūguǎn', text: '图书馆', translation: 'library / مكتبة' },
    { emoji: '📅', pinyin: 'zhōumò', text: '周末', translation: 'weekend / عطلة نهاية الأسبوع' },
    { emoji: '➡️', pinyin: 'qù', text: '去', translation: 'go / يذهب' },
    { emoji: '😊', pinyin: 'kāixīn', text: '开心', translation: 'happy / سعيد' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'nǐ', hz: '你', cls: 'person' },
        { py: 'Zhōumò', hz: '周末', cls: 'time' },
        { py: 'qù nǎr le', hz: '去哪儿了', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Where did you go on the weekend? / أين ذهبت في عطلة نهاية الأسبوع؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zhōumò', hz: '周末', cls: 'time' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { py: 'gōngyuán', hz: '公园', cls: 'place' },
        { py: 'le', hz: '了', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I went to the park on the weekend. / ذهبت إلى الحديقة في عطلة نهاية الأسبوع.'
    },
    {
      tokens: [
        { py: 'Gōngyuán', hz: '公园', cls: 'place' },
        { py: 'hěn piàoliang', hz: '很漂亮', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'The park is very beautiful. / الحديقة جميلة جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说我周末去哪儿了',
      translation: 'I went to the park on the weekend. I went to the library on the weekend. I went to the mall on the weekend. I went to the mosque on the weekend.',
      tip: 'Reading Goal: Read “我 + 周末 + 去 + place + 了”.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the park on the weekend. / ذهبت إلى الحديقة في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the library on the weekend. / ذهبت إلى المكتبة في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'shāngchǎng', hz: '商场', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the mall on the weekend. / ذهبت إلى المركز التجاري في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'qīngzhēnsì', hz: '清真寺', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the mosque on the weekend. / ذهبت إلى المسجد في عطلة نهاية الأسبوع.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问周末去哪儿了',
      translation: 'Where did you go on the weekend? I went to the park on the weekend. How is the park? The park is very beautiful. Do you like there? I like there.',
      tip: 'Pair Work: Ask and answer “周末你去哪儿了？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'nǐ', hz: '你', cls: 'person' },
            { py: 'Zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù nǎr le', hz: '去哪儿了', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Where did you go on the weekend? / أين ذهبت في عطلة نهاية الأسبوع؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the park on the weekend. / ذهبت إلى الحديقة في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Gōngyuán', hz: '公园', cls: 'place' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the park? / كيف الحديقة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Gōngyuán', hz: '公园', cls: 'place' },
            { py: 'hěn piàoliang', hz: '很漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The park is very beautiful. / الحديقة جميلة جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'nàli ma', hz: '那里吗', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Do you like there? / هل تحب ذلك المكان؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'nàli', hz: '那里', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I like there. / أحب ذلك المكان.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会分享我的周末',
      translation: 'Hello everyone. My name is Hassan. I went to the mosque on the weekend. I went to the park in the afternoon. The park is very beautiful. I like the park. I am very happy.',
      tip: 'Speaking Goal: Share a simple weekend with “someone + time + 去 + place + 了”.',
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
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'qīngzhēnsì', hz: '清真寺', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the mosque on the weekend. / ذهبت إلى المسجد في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiàwǔ', hz: '下午', cls: 'time' },
            { py: 'qù', hz: '去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'le', hz: '了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went to the park in the afternoon. / ذهبت إلى الحديقة بعد الظهر.'
        },
        {
          tokens: [
            { py: 'Gōngyuán', hz: '公园', cls: 'place' },
            { py: 'hěn piàoliang', hz: '很漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The park is very beautiful. / الحديقة جميلة جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I like the park. / أحب الحديقة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I am very happy. / أنا سعيد جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “周末” 是什么意思？',
      pinyin: '“Zhōumò” shì shénme yìsi?',
      translation: 'What does “周末” mean?',
      choices: [
        { text: 'weekend', correct: true },
        { text: 'today', correct: false },
        { text: 'morning', correct: false }
      ]
    },
    {
      question: '2. “公园” 是什么意思？',
      pinyin: '“Gōngyuán” shì shénme yìsi?',
      translation: 'What does “公园” mean?',
      choices: [
        { text: 'park', correct: true },
        { text: 'library', correct: false },
        { text: 'mosque', correct: false }
      ]
    },
    {
      question: '3. “我周末去公园了。” 是什么意思？',
      pinyin: '“Wǒ zhōumò qù gōngyuán le.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I went to the park on the weekend.', correct: true },
        { text: 'I like the park on the weekend.', correct: false },
        { text: 'The park is beautiful.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “mosque”？',
      pinyin: 'Nǎ yí ge shì “mosque”?',
      translation: 'Which one means “mosque”?',
      choices: [
        { text: '清真寺', correct: true },
        { text: '商场', correct: false },
        { text: '体育馆', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhōumò', hz: '周末', cls: 'time' },
        { py: 'nǐ', hz: '你', cls: 'person' },
        { py: 'qù nǎr le', hz: '去哪儿了', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zhōumò', hz: '周末', cls: 'time' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { py: 'le', hz: '了', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'hěn piàoliang', hz: '很漂亮', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'Where did you go on the weekend? I went to _____ on the weekend. _____ is very beautiful. I like _____. I am very happy.',
    tip: 'Use places: 奇迹花园、公园、清真寺、商场、图书馆、体育馆。'
  },

  meanings: {
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '去': 'go / يذهب',
    '去哪儿了': 'where did you go / أين ذهبت',
    '周末你去哪儿了': 'where did you go on the weekend / أين ذهبت في عطلة نهاية الأسبوع',
    '了': 'past action marker / علامة تدل على حدوث الفعل',
    '奇迹花园': 'Miracle Garden / حديقة المعجزة',
    '公园': 'park / حديقة',
    '清真寺': 'mosque / مسجد',
    '商场': 'mall / مركز تجاري',
    '图书馆': 'library / مكتبة',
    '体育馆': 'gym / صالة رياضية',
    '我周末去奇迹花园了': 'I went to Miracle Garden on the weekend / ذهبت إلى حديقة المعجزة في عطلة نهاية الأسبوع',
    '我周末去公园了': 'I went to the park on the weekend / ذهبت إلى الحديقة في عطلة نهاية الأسبوع',
    '我周末去清真寺了': 'I went to the mosque on the weekend / ذهبت إلى المسجد في عطلة نهاية الأسبوع',
    '我周末去商场了': 'I went to the mall on the weekend / ذهبت إلى المركز التجاري في عطلة نهاية الأسبوع',
    '我周末去图书馆了': 'I went to the library on the weekend / ذهبت إلى المكتبة في عطلة نهاية الأسبوع',
    '我下午去公园了': 'I went to the park in the afternoon / ذهبت إلى الحديقة بعد الظهر',
    '怎么样': 'how is it / كيف',
    '很漂亮': 'very beautiful / جميل جدًا',
    '那里': 'there / هناك',
    '那里吗': 'there? / هناك؟',
    '你喜欢': 'you like / تحب',
    '我喜欢': 'I like / أحب',
    '下午': 'afternoon / بعد الظهر',
    '开心': 'happy / سعيد',
    '很开心': 'very happy / سعيد جدًا',
    '我们': 'we / نحن',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن'
  }
};