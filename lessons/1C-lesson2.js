window.LESSONS = window.LESSONS || {};

window.LESSONS['1C-lesson2'] = {
  id: '1C-lesson2',
  book: '1C',
  lesson: 'Lesson 2',
  title: '我六点半起床。',
  theme: 'Daily Routine',
  goal: 'Talk about daily activities with time.',
  heroTranslation: 'I get up at six thirty.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
    { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '⏰', pinyin: 'qǐchuáng', text: '起床', translation: 'get up / يستيقظ' },
    { emoji: '🍽️', pinyin: 'chī zǎofàn', text: '吃早饭', translation: 'eat breakfast / يتناول الفطور' },
    { emoji: '🏫', pinyin: 'shàngxué', text: '上学', translation: 'go to school / يذهب إلى المدرسة' },
    { emoji: '📖', pinyin: 'shàngkè', text: '上课', translation: 'have class / يحضر الدرس' },
    { emoji: '🏠', pinyin: 'huí jiā', text: '回家', translation: 'go home / يعود إلى المنزل' },
    { emoji: '😴', pinyin: 'shuìjiào', text: '睡觉', translation: 'sleep / ينام' },
    { emoji: '🙏', pinyin: 'dǎogào', text: '祷告', translation: 'pray / يصلي' },
    { emoji: '🕡', pinyin: 'liù diǎn bàn', text: '六点半', translation: 'six thirty / السادسة والنصف' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
        { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What time do you get up? / في أي ساعة تستيقظ؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
        { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I get up at six thirty. / أستيقظ الساعة السادسة والنصف.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'qī diǎn', hz: '七点', cls: 'time' },
        { py: 'chī zǎofàn', hz: '吃早饭', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I eat breakfast at seven o’clock. / أتناول الفطور الساعة السابعة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说几点做什么',
      translation: 'I get up at six thirty. I eat breakfast at seven o’clock. I go to school at seven thirty. I sleep at nine o’clock.',
      tip: 'Reading Goal: Read “time + activity” slowly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I get up at six thirty. / أستيقظ الساعة السادسة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { py: 'chī zǎofàn', hz: '吃早饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I eat breakfast at seven o’clock. / أتناول الفطور الساعة السابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qī diǎn bàn', hz: '七点半', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I go to school at seven thirty. / أذهب إلى المدرسة الساعة السابعة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jiǔ diǎn', hz: '九点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sleep at nine o’clock. / أنام الساعة التاسعة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问作息时间',
      translation: 'What time do you get up? I get up at six thirty. What time do you eat breakfast? I eat breakfast at seven o’clock.',
      tip: 'Pair Work: Ask and answer daily routine time.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What time do you get up? / في أي ساعة تستيقظ؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I get up at six thirty. / أستيقظ الساعة السادسة والنصف.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { py: 'chī zǎofàn', hz: '吃早饭', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What time do you eat breakfast? / في أي ساعة تتناولين الفطور؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { py: 'chī zǎofàn', hz: '吃早饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I eat breakfast at seven o’clock. / أتناول الفطور الساعة السابعة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What time do you sleep? / في أي ساعة تنامين؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jiǔ diǎn', hz: '九点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sleep at nine o’clock. / أنام الساعة التاسعة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的一天',
      translation: 'Hello everyone. My name is Fatima. I get up at six thirty. I eat breakfast at seven o’clock. I go to school at seven thirty. I pray at four o’clock. I sleep at nine o’clock.',
      tip: 'Speaking Goal: Introduce a simple daily routine.',
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
            { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I get up at six thirty. / أستيقظ الساعة السادسة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { py: 'chī zǎofàn', hz: '吃早饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I eat breakfast at seven o’clock. / أتناول الفطور الساعة السابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qī diǎn bàn', hz: '七点半', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I go to school at seven thirty. / أذهب إلى المدرسة الساعة السابعة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'sì diǎn', hz: '四点', cls: 'time' },
            { py: 'dǎogào', hz: '祷告', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I pray at four o’clock. / أصلّي الساعة الرابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jiǔ diǎn', hz: '九点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sleep at nine o’clock. / أنام الساعة التاسعة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “起床” 是什么意思？',
      pinyin: '“Qǐchuáng” shì shénme yìsi?',
      translation: 'What does “起床” mean?',
      choices: [
        { text: 'get up', correct: true },
        { text: 'sleep', correct: false },
        { text: 'go home', correct: false }
      ]
    },
    {
      question: '2. “吃早饭” 是什么意思？',
      pinyin: '“Chī zǎofàn” shì shénme yìsi?',
      translation: 'What does “吃早饭” mean?',
      choices: [
        { text: 'eat breakfast', correct: true },
        { text: 'have class', correct: false },
        { text: 'pray', correct: false }
      ]
    },
    {
      question: '3. “你几点起床？” 是什么意思？',
      pinyin: '“Nǐ jǐ diǎn qǐchuáng?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What time do you get up?', correct: true },
        { text: 'What time do you sleep?', correct: false },
        { text: 'What time do you pray?', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “six thirty”？',
      pinyin: 'Nǎ yí ge shì “six thirty”?',
      translation: 'Which one means “six thirty”?',
      choices: [
        { text: '六点半', correct: true },
        { text: '七点半', correct: false },
        { text: '九点', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
        { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'diǎn', hz: '点', cls: 'time' },
        { blank: true },
        { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'diǎn', hz: '点', cls: 'time' },
        { blank: true },
        { py: 'chī zǎofàn', hz: '吃早饭', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'diǎn', hz: '点', cls: 'time' },
        { blank: true },
        { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'What time do you get up? I get up at _____. I eat breakfast at _____. I sleep at _____.',
    tip: 'Use time words: 六点、六点半、七点、七点半、九点。'
  },

  meanings: {
    '起床': 'get up / يستيقظ',
    '吃早饭': 'eat breakfast / يتناول الفطور',
    '上学': 'go to school / يذهب إلى المدرسة',
    '上课': 'have class / يحضر الدرس',
    '回家': 'go home / يعود إلى المنزل',
    '睡觉': 'sleep / ينام',
    '祷告': 'pray / يصلي',
    '几点': 'what time / أي ساعة',
    '你几点起床': 'what time do you get up / في أي ساعة تستيقظ',
    '你几点吃早饭': 'what time do you eat breakfast / في أي ساعة تتناول الفطور',
    '你几点睡觉': 'what time do you sleep / في أي ساعة تنام',
    '我': 'I / أنا',
    '你': 'you / أنت',
    '六点': 'six o’clock / الساعة السادسة',
    '六点半': 'six thirty / الساعة السادسة والنصف',
    '七点': 'seven o’clock / الساعة السابعة',
    '七点半': 'seven thirty / الساعة السابعة والنصف',
    '四点': 'four o’clock / الساعة الرابعة',
    '九点': 'nine o’clock / الساعة التاسعة',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة'
  }
};