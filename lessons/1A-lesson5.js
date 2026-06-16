window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson5'] = {
  id: '1A-lesson5',
  book: '1A',
  lesson: 'Lesson 5',
  title: '我十二岁。',
  theme: 'Age',
  goal: 'Ask and answer age in Chinese.',
  heroTranslation: 'I am twelve years old.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '❓', pinyin: 'duō dà', text: '多大', translation: 'how old / كم العمر' },
    { emoji: '🎂', pinyin: 'suì', text: '岁', translation: 'years old / سنة' },
    { emoji: '1️⃣2️⃣', pinyin: 'shíèr suì', text: '十二岁', translation: 'twelve years old / اثنتا عشرة سنة' },
    { emoji: '➕', pinyin: 'yě', text: '也', translation: 'also / أيضًا' },
    { emoji: '👥', pinyin: 'dōu', text: '都', translation: 'all / كل' },
    { emoji: '❓', pinyin: 'ma', text: '吗', translation: 'question particle / أداة سؤال' },
    { emoji: '👧', pinyin: 'Lìli', text: '莉莉', translation: 'Lili / ليلي' },
    { emoji: '👧', pinyin: 'Àimǎ', text: '艾玛', translation: 'Emma / إيما' },
    { emoji: '👧', pinyin: 'Fǎdìmǎ', text: '法蒂玛', translation: 'Fatima / فاطمة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'duō dà', hz: '多大', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'How old are you? / كم عمرك؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I am twelve years old. / عمري اثنتا عشرة سنة.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yě', hz: '也', cls: 'self' },
        { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I am also twelve years old. / عمري أيضًا اثنتا عشرة سنة.'
    },
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'dōu', hz: '都', cls: 'self' },
        { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'We are all twelve years old. / نحن جميعًا في الثانية عشرة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说年龄',
      translation: 'I am twelve years old. I am eleven years old. I am thirteen years old. I am sixteen years old. / عمري اثنتا عشرة سنة. عمري إحدى عشرة سنة. عمري ثلاث عشرة سنة. عمري ست عشرة سنة.',
      tip: 'Reading Goal: Read age phrases slowly and clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am twelve years old. / عمري اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shíyī suì', hz: '十一岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am eleven years old. / عمري إحدى عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shísān suì', hz: '十三岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am thirteen years old. / عمري ثلاث عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shíliù suì', hz: '十六岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am sixteen years old. / عمري ست عشرة سنة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问年龄',
      translation: 'How old are you? I am twelve years old. Are you also twelve years old? Yes, I am also twelve years old. / كم عمرك؟ عمري اثنتا عشرة سنة. هل عمرك أيضًا اثنتا عشرة سنة؟ نعم، عمري أيضًا اثنتا عشرة سنة.',
      tip: 'Pair Work: One student asks age, one student answers.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'duō dà', hz: '多大', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How old are you? / كم عمرك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am twelve years old. / عمري اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'yě', hz: '也', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { py: 'ma', hz: '吗' },
            { hz: '？' }
          ],
          translation: 'Are you also twelve years old? / هل عمرك أيضًا اثنتا عشرة سنة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shìde', hz: '是的', cls: 'like' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'yě', hz: '也', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Yes, I am also twelve years old. / نعم، عمري أيضًا اثنتا عشرة سنة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍同学年龄',
      translation: 'Hello, my name is Fatima. I am twelve years old. Her name is Lili, and Lili is twelve years old. Her name is Emma, and Emma is also twelve years old. We are all twelve years old. And you? How old are you? / مرحبًا، اسمي فاطمة. عمري اثنتا عشرة سنة. اسمها ليلي، وليلي عمرها اثنتا عشرة سنة. اسمها إيما، وإيما عمرها أيضًا اثنتا عشرة سنة. نحن جميعًا في الثانية عشرة. وأنت؟ كم عمرك؟',
      tip: 'Speaking Goal: Introduce yourself and your friends’ ages.',
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
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am twelve years old. / عمري اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Tā jiào', hz: '她叫', cls: 'person' },
            { py: 'Lìli', hz: '莉莉', cls: 'name' },
            { hz: '，' },
            { py: 'Lìli', hz: '莉莉', cls: 'name' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Her name is Lili, and Lili is twelve years old. / اسمها ليلي، وليلي عمرها اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Tā jiào', hz: '她叫', cls: 'person' },
            { py: 'Àimǎ', hz: '艾玛', cls: 'name' },
            { hz: '，' },
            { py: 'Àimǎ', hz: '艾玛', cls: 'name' },
            { py: 'yě', hz: '也', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Her name is Emma, and Emma is also twelve years old. / اسمها إيما، وإيما عمرها أيضًا اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'dōu', hz: '都', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'We are all twelve years old. / نحن جميعًا في الثانية عشرة.'
        },
        {
          tokens: [
            { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
            { hz: '？' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'duō dà', hz: '多大', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'And you? How old are you? / وأنت؟ كم عمرك؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “你多大？” 是什么意思？',
      pinyin: '“Nǐ duō dà?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How old are you?', correct: true },
        { text: 'What is your name?', correct: false },
        { text: 'Where are you?', correct: false }
      ]
    },
    {
      question: '2. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你多大？',
      promptPinyin: 'Nǐ duō dà?',
      choices: [
        { text: '我十二岁。', pinyin: 'Wǒ shíèr suì.', correct: true },
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: false }
      ]
    },
    {
      question: '3. “我也十二岁。” 是什么意思？',
      pinyin: '“Wǒ yě shíèr suì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am also twelve years old.', correct: true },
        { text: 'I am not twelve years old.', correct: false }
      ]
    },
    {
      question: '4. “我们都十二岁。” 是什么意思？',
      pinyin: '“Wǒmen dōu shíèr suì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We are all twelve years old.', correct: true },
        { text: 'They are twelve years old.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'suì', hz: '岁', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '他/她', cls: 'person' },
        { blank: true },
        { py: 'suì', hz: '岁', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'dōu', hz: '都', cls: 'self' },
        { blank: true },
        { py: 'suì', hz: '岁', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'duō dà', hz: '多大', cls: 'time' },
        { hz: '？' }
      ]
    ],
    translation: 'I am ______ years old. He/She is ______ years old. We are all ______ years old. How old are you? / عمري ______ سنة. عمره/عمرها ______ سنة. نحن جميعًا في عمر ______ سنة. كم عمرك؟',
    tip: 'Use your real age and your friend’s age. Keep the sentences short and clear.'
  },

  meanings: {
    '你': 'you / أنت',
    '我': 'I / أنا',
    '他': 'he / هو',
    '她': 'she / هي',
    '我们': 'we / نحن',
    '多大': 'how old / كم العمر',
    '你多大': 'How old are you? / كم عمرك؟',
    '岁': 'years old / سنة',
    '十二岁': 'twelve years old / اثنتا عشرة سنة',
    '十一岁': 'eleven years old / إحدى عشرة سنة',
    '十三岁': 'thirteen years old / ثلاث عشرة سنة',
    '十六岁': 'sixteen years old / ست عشرة سنة',
    '我十二岁': 'I am twelve years old. / عمري اثنتا عشرة سنة.',
    '我也十二岁': 'I am also twelve years old. / عمري أيضًا اثنتا عشرة سنة.',
    '我们都十二岁': 'We are all twelve years old. / نحن جميعًا في الثانية عشرة.',
    '也': 'also / أيضًا',
    '都': 'all / كل',
    '吗': 'question particle / أداة سؤال',
    '是的': 'yes / نعم',
    '莉莉': 'Lili / ليلي',
    '艾玛': 'Emma / إيما',
    '法蒂玛': 'Fatima / فاطمة',
    '你好': 'hello / مرحبًا',
    '我叫': 'my name is / اسمي',
    '她叫': 'her name is / اسمها',
    '你呢': 'and you / وأنت',
    '下': 'down / تحت'
  }
};