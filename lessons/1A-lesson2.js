window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson2'] = {
  id: '1A-lesson2',
  book: '1A',
  lesson: 'Lesson 2',
  title: '你好！',
  theme: 'Greetings and introductions',
  goal: 'Students can greet others, thank others, say goodbye, and introduce people.',
  heroTranslation: 'Hello! / Nice to meet you!',

  titleTokens: [
    { py: 'Nǐhǎo', hz: '你好！', cls: 'greeting' }
  ],

  keyWords: [
    { emoji: '👋', pinyin: 'nǐhǎo', text: '你好', translation: 'hello / مرحبًا' },
    { emoji: '🙏', pinyin: 'nínhǎo', text: '您好', translation: 'hello, respectful / مرحبًا باحترام' },
    { emoji: '👩‍🏫', pinyin: 'lǎoshī', text: '老师', translation: 'teacher / معلم' },
    { emoji: '👥', pinyin: 'nǐmen', text: '你们', translation: 'you all / أنتم' },
    { emoji: '🙋', pinyin: 'wǒ', text: '我', translation: 'I / أنا' },
    { emoji: '👦', pinyin: 'tā', text: '他', translation: 'he / هو' },
    { emoji: '👧', pinyin: 'tā', text: '她', translation: 'she / هي' },
    { emoji: '😊', pinyin: 'xièxie', text: '谢谢', translation: 'thank you / شكرًا' },
    { emoji: '👋', pinyin: 'zàijiàn', text: '再见', translation: 'goodbye / مع السلامة' },
    { emoji: '✨', pinyin: 'wǒ shì', text: '我是', translation: 'I am / أنا' },
    { emoji: '✨', pinyin: 'tā shì', text: '她是', translation: 'she is / هي' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐhǎo', hz: '你好！', cls: 'greeting' }
      ],
      translation: 'Hello! / مرحبًا!'
    },
    {
      tokens: [
        { py: 'Nínhǎo', hz: '您好', cls: 'respect' },
        { py: 'lǎoshī', hz: '老师！', cls: 'person' }
      ],
      translation: 'Hello, teacher! / مرحبًا يا معلم!'
    },
    {
      tokens: [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'Āyīshā', hz: '阿伊莎。', cls: 'name' }
      ],
      translation: 'I am Aisha. / أنا عائشة.'
    },
    {
      tokens: [
        { py: 'Tā shì', hz: '她是', cls: 'person' },
        { py: 'Fǎdìmǎ', hz: '法蒂玛。', cls: 'name' }
      ],
      translation: 'She is Fatima. / هي فاطمة.'
    },
    {
      tokens: [
        { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
        { py: 'lǎoshī', hz: '老师！', cls: 'person' }
      ],
      translation: 'Thank you, teacher! / شكرًا يا معلم!'
    },
    {
      tokens: [
        { py: 'Zàijiàn', hz: '再见！', cls: 'bye' }
      ],
      translation: 'Goodbye! / مع السلامة!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读',
      translation: 'Hello! Hello, teacher! Thank you, teacher! Goodbye! / مرحبًا! مرحبًا يا معلم! شكرًا يا معلم! مع السلامة!',
      tip: 'Reading Goal: Read each greeting 3 times. Use a friendly voice.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好！', cls: 'greeting' },
            { hz: '👋' }
          ],
          translation: 'Hello! / مرحبًا!'
        },
        {
          tokens: [
            { py: 'Nínhǎo', hz: '您好', cls: 'respect' },
            { py: 'lǎoshī', hz: '老师！', cls: 'person' }
          ],
          translation: 'Hello, teacher! / مرحبًا يا معلم!'
        },
        {
          tokens: [
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { py: 'lǎoshī', hz: '老师！', cls: 'person' },
            { hz: '😊' }
          ],
          translation: 'Thank you, teacher! / شكرًا يا معلم!'
        },
        {
          tokens: [
            { py: 'Zàijiàn', hz: '再见！', cls: 'bye' },
            { hz: '👋' }
          ],
          translation: 'Goodbye! / مع السلامة!'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问答',
      translation: 'Girl: Hello! Boy: Hello! Girl: I am Aisha. Boy: She is Fatima. Girl: Goodbye! / البنت: مرحبًا! الولد: مرحبًا! البنت: أنا عائشة. الولد: هي فاطمة. البنت: مع السلامة!',
      tip: 'Practice in pairs. One student reads the girl role and the other reads the boy role.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐhǎo', hz: '你好！', cls: 'greeting' }
          ],
          translation: ' Hello! / البنت: مرحبًا!'
        },
        {
          tokens: [
            { py: '', hz: '🧒：', cls: 'speaker' },
            { py: 'Nǐhǎo', hz: '你好！', cls: 'greeting' }
          ],
          translation: ' Hello! / الولد: مرحبًا!'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āyīshā', hz: '阿伊莎。', cls: 'name' }
          ],
          translation: ' I am Aisha. / البنت: أنا عائشة.'
        },
        {
          tokens: [
            { py: '', hz: '🧒：', cls: 'speaker' },
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛。', cls: 'name' }
          ],
          translation: ' She is Fatima. / الولد: هي فاطمة.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Zàijiàn', hz: '再见！', cls: 'bye' }
          ],
          translation: ' Goodbye! / البنت: مع السلامة!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会表达',
      translation: 'Hello, teacher! I am Emma. She is Fatima. Thank you, teacher! Goodbye! / مرحبًا يا معلم! أنا إيما. هي فاطمة. شكرًا يا معلم! مع السلامة!',
      tip: 'Use your own name and your friend’s name to make a short Chinese introduction.',
      lines: [
        {
          tokens: [
            { py: 'Nínhǎo', hz: '您好', cls: 'respect' },
            { py: 'lǎoshī', hz: '老师！', cls: 'person' }
          ],
          translation: 'Hello, teacher! / مرحبًا يا معلم!'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Àimǎ', hz: '艾玛。', cls: 'name' }
          ],
          translation: 'I am Emma. / أنا إيما.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛。', cls: 'name' }
          ],
          translation: 'She is Fatima. / هي فاطمة.'
        },
        {
          tokens: [
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { py: 'lǎoshī', hz: '老师！', cls: 'person' }
          ],
          translation: 'Thank you, teacher! / شكرًا يا معلم!'
        },
        {
          tokens: [
            { py: 'Zàijiàn', hz: '再见！', cls: 'bye' }
          ],
          translation: 'Goodbye! / مع السلامة!'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “你好” 是什么意思？',
      pinyin: '“Nǐhǎo” shì shénme yìsi?',
      translation: 'What does “你好” mean?',
      choices: [
        { text: 'Hello', correct: true },
        { text: 'Goodbye', correct: false },
        { text: 'Thank you', correct: false }
      ]
    },
    {
      question: '2. 哪一个是“teacher”？',
      pinyin: 'Nǎ yí ge shì “teacher”?',
      translation: 'Which one means “teacher”?',
      choices: [
        { text: '老师', pinyin: 'lǎoshī', correct: true },
        { text: '谢谢', pinyin: 'xièxie', correct: false },
        { text: '再见', pinyin: 'zàijiàn', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '您好，老师！',
      promptPinyin: 'Nínhǎo, lǎoshī!',
      choices: [
        { text: '您好！', pinyin: 'Nínhǎo!', correct: true },
        { text: '她是法蒂玛。', pinyin: 'Tā shì Fǎdìmǎ.', correct: false }
      ]
    },
    {
      question: '4. “谢谢” 是什么意思？',
      pinyin: '“Xièxie” shì shénme yìsi?',
      translation: 'What does “谢谢” mean?',
      choices: [
        { text: 'Thank you', correct: true },
        { text: 'Hello', correct: false },
        { text: 'Goodbye', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐhǎo', hz: '你好，', cls: 'greeting' },
        { py: 'wǒ shì', hz: '我是', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā shì', hz: '她是', cls: 'person' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
        { py: 'lǎoshī', hz: '老师！', cls: 'person' }
      ],
      [
        { py: 'Zàijiàn', hz: '再见！', cls: 'bye' }
      ]
    ],
    translation: 'Hello, I am ______. She is ______. Thank you, teacher! Goodbye! / مرحبًا، أنا ______. هي ______. شكرًا يا معلم! مع السلامة!',
    tip: 'Use your own name and your friend’s name to make a short greeting dialogue.'
  },

  meanings: {
    '你好': 'hello / مرحبًا',
    '你好！': 'Hello! / مرحبًا!',
    '您好': 'hello, respectful / مرحبًا باحترام',
    '您好老师': 'Hello, teacher / مرحبًا يا معلم',
    '您好老师！': 'Hello, teacher! / مرحبًا يا معلم!',
    '老师': 'teacher / معلم',
    '老师！': 'teacher! / يا معلم!',
    '你们': 'you all / أنتم',
    '我': 'I / أنا',
    '你': 'you / أنت',
    '他': 'he / هو',
    '她': 'she / هي',
    '我是': 'I am / أنا',
    '她是': 'she is / هي',
    '谢谢': 'thank you / شكرًا',
    '谢谢老师': 'Thank you, teacher / شكرًا يا معلم',
    '谢谢老师！': 'Thank you, teacher! / شكرًا يا معلم!',
    '再见': 'goodbye / مع السلامة',
    '再见！': 'Goodbye! / مع السلامة!',
    '阿伊莎': 'Aisha / عائشة',
    '阿伊莎。': 'Aisha. / عائشة.',
    '艾玛': 'Emma / إيما',
    '艾玛。': 'Emma. / إيما.',
    '法蒂玛': 'Fatima / فاطمة',
    '法蒂玛。': 'Fatima. / فاطمة.',
    '好': 'good / جيد',
    '是': 'am / is / are / يكون'
  }
};