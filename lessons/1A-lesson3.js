window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson3'] = {
  id: '1A-lesson3',
  book: '1A',
  lesson: 'Lesson 3',
  title: '我叫哈桑。',
  theme: 'Introduce your name',
  goal: 'Ask and answer names in Chinese.',
  heroTranslation: 'My name is Hassan. / What is your name?',
  titleTokens: [
    { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
    { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👋', pinyin: 'nǐhǎo', text: '你好', translation: 'hello / مرحبًا' },
    { emoji: '🗣️', pinyin: 'wǒ jiào', text: '我叫', translation: 'my name is / اسمي' },
    { emoji: '❓', pinyin: 'nǐ jiào', text: '你叫', translation: 'you are called / اسمك' },
    { emoji: '📛', pinyin: 'shénme míngzi', text: '什么名字', translation: 'what name / ما الاسم' },
    { emoji: '👦', pinyin: 'Hāsāng', text: '哈桑', translation: 'Hassan / حسن' },
    { emoji: '👦', pinyin: 'Wáng Xiǎolóng', text: '王小龙', translation: 'Wang Xiaolong / وانغ شياولونغ' },
    { emoji: '👦', pinyin: 'Ālǐ', text: '阿里', translation: 'Ali / علي' },
    { emoji: '😊', pinyin: 'hěn gāoxìng', text: '很高兴', translation: 'very happy / سعيد جدًا' },
    { emoji: '🤝', pinyin: 'rènshi nǐ', text: '认识你', translation: 'to know you / أن أعرفك' }
  ],

  keySentences: [
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
        { py: 'Nǐ jiào', hz: '你叫', cls: 'person' },
        { py: 'shénme míngzi', hz: '什么名字', cls: 'name' },
        { hz: '？' }
      ],
      translation: 'What is your name? / ما اسمك؟'
    },
    {
      tokens: [
        { py: 'Tā jiào', hz: '他叫', cls: 'person' },
        { py: 'Wáng Xiǎolóng', hz: '王小龙', cls: 'name' },
        { hz: '。' }
      ],
      translation: 'His name is Wang Xiaolong. / اسمه وانغ شياولونغ.'
    },
    {
      tokens: [
        { py: 'Hěn gāoxìng', hz: '很高兴', cls: 'like' },
        { py: 'rènshi nǐ', hz: '认识你', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'Nice to meet you. / سعيد بمعرفتك.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读名字',
      translation: 'Hello. My name is Hassan. My name is Wang Xiaolong. My name is Ali. / مرحبًا. اسمي حسن. اسمي وانغ شياولونغ. اسمي علي.',
      tip: 'Reading Goal: Read slowly. Point to yourself and say “我叫……”。',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '。' }
          ],
          translation: 'Hello. / مرحبًا.'
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
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Wáng Xiǎolóng', hz: '王小龙', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Wang Xiaolong. / اسمي وانغ شياولونغ.'
        },
        {
          tokens: [
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Ālǐ', hz: '阿里', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Ali. / اسمي علي.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会简单问答',
      translation: 'Hello. Hello. What is your name? My name is Hassan. And you? My name is Wang Xiaolong. / مرحبًا. مرحبًا. ما اسمك؟ اسمي حسن. وأنت؟ اسمي وانغ شياولونغ.',
      tip: 'Pair Work: One student asks, one student answers. Then change names.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '。' }
          ],
          translation: 'Hello. / مرحبًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '。' }
          ],
          translation: 'Hello. / مرحبًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ jiào', hz: '你叫', cls: 'person' },
            { py: 'shénme míngzi', hz: '什么名字', cls: 'name' },
            { hz: '？' }
          ],
          translation: 'What is your name? / ما اسمك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Hassan. / اسمي حسن.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'And you? / وأنت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Wáng Xiǎolóng', hz: '王小龙', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Wang Xiaolong. / اسمي وانغ شياولونغ.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍自己和朋友',
      translation: 'Hello. My name is Hassan. His name is Wang Xiaolong. His name is Ali. What is your name? / مرحبًا. اسمي حسن. اسمه وانغ شياولونغ. اسمه علي. ما اسمك؟',
      tip: 'Speaking Goal: Introduce yourself, introduce two friends, then ask another student’s name.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '。' }
          ],
          translation: 'Hello. / مرحبًا.'
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
            { py: 'Tā jiào', hz: '他叫', cls: 'person' },
            { py: 'Wáng Xiǎolóng', hz: '王小龙', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'His name is Wang Xiaolong. / اسمه وانغ شياولونغ.'
        },
        {
          tokens: [
            { py: 'Tā jiào', hz: '他叫', cls: 'person' },
            { py: 'Ālǐ', hz: '阿里', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'His name is Ali. / اسمه علي.'
        },
        {
          tokens: [
            { py: 'Nǐ jiào', hz: '你叫', cls: 'person' },
            { py: 'shénme míngzi', hz: '什么名字', cls: 'name' },
            { hz: '？' }
          ],
          translation: 'What is your name? / ما اسمك؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我叫哈桑。” 是什么意思？',
      pinyin: '“Wǒ jiào Hāsāng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'My name is Hassan.', correct: true },
        { text: 'What is your name?', correct: false },
        { text: 'Good morning.', correct: false }
      ]
    },
    {
      question: '2. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你叫什么名字？',
      promptPinyin: 'Nǐ jiào shénme míngzi?',
      choices: [
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: true },
        { text: '你好。', pinyin: 'Nǐhǎo.', correct: false }
      ]
    },
    {
      question: '3. “他叫王小龙。” 是什么意思？',
      pinyin: '“Tā jiào Wáng Xiǎolóng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'His name is Wang Xiaolong.', correct: true },
        { text: 'My name is Wang Xiaolong.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā jiào', hz: '他叫', cls: 'person' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ jiào', hz: '你叫', cls: 'person' },
        { py: 'shénme míngzi', hz: '什么名字', cls: 'name' },
        { hz: '？' }
      ]
    ],
    translation: 'Hello. My name is ______. His name is ______. What is your name? / مرحبًا. اسمي ______. اسمه ______. ما اسمك؟',
    tip: 'Use your real name and your friend’s name. Keep it short and clear.'
  },

  meanings: {
    '你好': 'hello / مرحبًا',
    '你': 'you / أنت',
    '我': 'I / أنا',
    '他': 'he / هو',
    '叫': 'be called / يُدعى',
    '我叫': 'my name is / اسمي',
    '你叫': 'you are called / اسمك',
    '他叫': 'his name is / اسمه',
    '什么': 'what / ماذا',
    '名字': 'name / اسم',
    '什么名字': 'what name / ما الاسم',
    '你叫什么名字': 'what is your name / ما اسمك',
    '你呢': 'and you / وأنت',
    '哈桑': 'Hassan / حسن',
    '王小龙': 'Wang Xiaolong / وانغ شياولونغ',
    '阿里': 'Ali / علي',
    '我叫哈桑': 'My name is Hassan. / اسمي حسن.',
    '我叫王小龙': 'My name is Wang Xiaolong. / اسمي وانغ شياولونغ.',
    '我叫阿里': 'My name is Ali. / اسمي علي.',
    '他叫王小龙': 'His name is Wang Xiaolong. / اسمه وانغ شياولونغ.',
    '他叫阿里': 'His name is Ali. / اسمه علي.',
    '很高兴': 'very happy / سعيد جدًا',
    '认识你': 'to know you / أن أعرفك',
    '很高兴认识你': 'Nice to meet you. / سعيد بمعرفتك.',
    '对不起': 'sorry / آسف',
    '没关系': 'no problem / لا بأس',
    '早上好': 'good morning / صباح الخير',
    '我不是': 'I am not / أنا لست',
    '工': 'work / عمل'
  }
};