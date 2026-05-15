window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson8'] = {
  id: '1A-lesson8',
  book: '1A',
  lesson: 'Lesson 8',
  title: '我是阿联酋人。',
  theme: 'Nationality',
  goal: 'Ask and answer nationality questions.',
  heroTranslation: 'I am Emirati.',
  titleTokens: [
    { py: 'Wǒ shì', hz: '我是', cls: 'self' },
    { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🇦🇪', pinyin: 'Āliánqiú rén', text: '阿联酋人', translation: 'Emirati / إماراتي' },
    { emoji: '🇨🇳', pinyin: 'Zhōngguó rén', text: '中国人', translation: 'Chinese person / صيني' },
    { emoji: '🇬🇧', pinyin: 'Yīngguó rén', text: '英国人', translation: 'British person / بريطاني' },
    { emoji: '🇸🇦', pinyin: 'Shātè rén', text: '沙特人', translation: 'Saudi person / سعودي' },
    { emoji: '🇪🇬', pinyin: 'Āijí rén', text: '埃及人', translation: 'Egyptian person / مصري' },
    { emoji: '👫', pinyin: 'péngyou', text: '朋友', translation: 'friend / صديق' },
    { emoji: '❓', pinyin: 'nǎ guó rén', text: '哪国人', translation: 'which nationality / من أي دولة' },
    { emoji: '💡', pinyin: 'zhīdào', text: '知道', translation: 'know / يعرف' },
    { emoji: '👦', pinyin: 'tā', text: '他', translation: 'he / هو' },
    { emoji: '👧', pinyin: 'tā', text: '她', translation: 'she / هي' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ shì', hz: '你是', cls: 'person' },
        { py: 'nǎ guó rén', hz: '哪国人', cls: 'country' },
        { hz: '？' }
      ],
      translation: 'What nationality are you? / من أي دولة أنت؟'
    },
    {
      tokens: [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
        { hz: '。' }
      ],
      translation: 'I am Emirati. / أنا إماراتي.'
    },
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'This is my friend. / هذا صديقي.'
    },
    {
      tokens: [
        { py: 'Nǐ zhīdào', hz: '你知道', cls: 'activity' },
        { py: 'Zhōngguó ma', hz: '中国吗', cls: 'country' },
        { hz: '？' }
      ],
      translation: 'Do you know China? / هل تعرف الصين؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说国籍',
      translation: 'I am Chinese. I am Emirati. I am British. I am Saudi.',
      tip: 'Reading Goal: Read nationality words clearly and slowly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Zhōngguó rén', hz: '中国人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Chinese. / أنا صيني.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتي.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Yīngguó rén', hz: '英国人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am British. / أنا بريطاني.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Shātè rén', hz: '沙特人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Saudi. / أنا سعودي.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问你是哪国人',
      translation: 'What nationality are you? I am Chinese. What nationality are you? I am Emirati.',
      tip: 'Pair Work: Ask and answer with different country cards.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ shì', hz: '你是', cls: 'person' },
            { py: 'nǎ guó rén', hz: '哪国人', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'What nationality are you? / من أي دولة أنت؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Zhōngguó rén', hz: '中国人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Chinese. / أنا صيني.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ shì', hz: '你是', cls: 'person' },
            { py: 'nǎ guó rén', hz: '哪国人', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'What nationality are you? / من أي دولة أنت؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zhīdào', hz: '你知道', cls: 'activity' },
            { py: 'Zhōngguó ma', hz: '中国吗', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'Do you know China? / هل تعرف الصين؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zhīdào', hz: '我知道', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I know. / أعرف.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍朋友',
      translation: 'Hello, my name is Hassan. I am Emirati. This is my friend Wang Xiaolong. He is Chinese. This is my friend Emma. She is British. What nationality are you?',
      tip: 'Speaking Goal: Introduce yourself and your friends.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Hello, my name is Hassan. / مرحبًا، اسمي حسن.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتي.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'This is my friend. / هذا صديقي.'
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
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'Zhōngguó rén', hz: '中国人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'He is Chinese. / هو صيني.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'This is my friend. / هذه صديقتي.'
        },
        {
          tokens: [
            { py: 'Tā jiào', hz: '她叫', cls: 'person' },
            { py: 'Àimǎ', hz: '艾玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Her name is Emma. / اسمها إيما.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'Yīngguó rén', hz: '英国人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'She is British. / هي بريطانية.'
        },
        {
          tokens: [
            { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
            { hz: '？' },
            { py: 'Nǐ shì', hz: '你是', cls: 'person' },
            { py: 'nǎ guó rén', hz: '哪国人', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'And you? What nationality are you? / وأنت؟ من أي دولة أنت؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “你是哪国人？” 是什么意思？',
      pinyin: '“Nǐ shì nǎ guó rén?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What nationality are you?', correct: true },
        { text: 'What is your name?', correct: false },
        { text: 'How old are you?', correct: false }
      ]
    },
    {
      question: '2. “我是阿联酋人。” 是什么意思？',
      pinyin: '“Wǒ shì Āliánqiú rén.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am Emirati.', correct: true },
        { text: 'I am Chinese.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “中国人”？',
      pinyin: 'Nǎ yí ge shì “Zhōngguó rén”?',
      translation: 'Which one means “Chinese person”?',
      choices: [
        { text: '中国人', correct: true },
        { text: '英国人', correct: false },
        { text: '阿联酋人', correct: false }
      ]
    },
    {
      question: '4. “朋友” 是什么意思？',
      pinyin: '“Péngyou” shì shénme yìsi?',
      translation: 'What does “朋友” mean?',
      choices: [
        { text: 'friend', correct: true },
        { text: 'teacher', correct: false },
        { text: 'student', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { blank: true },
        { hz: '人。' }
      ],
      [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { hz: '。' }
      ],
      [
        { py: 'Tā shì', hz: '他是', cls: 'person' },
        { blank: true },
        { hz: '人。' }
      ],
      [
        { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
        { hz: '？' }
      ]
    ],
    translation: 'I am ______. This is my friend. He is ______. And you?',
    tip: 'Use different countries: 中国、英国、阿联酋、沙特、埃及。'
  },

  meanings: {
    '我是': 'I am / أنا',
    '你是': 'you are / أنت',
    '他是': 'he is / هو',
    '她是': 'she is / هي',
    '中国人': 'Chinese person / صيني',
    '英国人': 'British person / بريطاني',
    '阿联酋人': 'Emirati / إماراتي',
    '沙特人': 'Saudi person / سعودي',
    '埃及人': 'Egyptian person / مصري',
    '哪国人': 'which nationality / من أي دولة',
    '你是哪国人': 'what nationality are you / من أي دولة أنت',
    '朋友': 'friend / صديق',
    '我的朋友': 'my friend / صديقي',
    '这是': 'this is / هذا',
    '知道': 'know / يعرف',
    '我知道': 'I know / أعرف',
    '不知道': 'do not know / لا أعرف',
    '你知道中国吗': 'do you know China / هل تعرف الصين',
    '哈桑': 'Hassan / حسن',
    '王小龙': 'Wang Xiaolong / وانغ شياولونغ',
    '艾玛': 'Emma / إيما',
    '你好': 'hello / مرحبًا',
    '我叫': 'my name is / اسمي',
    '他叫': 'his name is / اسمه',
    '她叫': 'her name is / اسمها',
    '你呢': 'and you / وأنت'
  }
};