window.LESSONS = window.LESSONS || {};

window.LESSONS['1C-lesson3'] = {
  id: '1C-lesson3',
  book: '1C',
  lesson: 'Lesson 3',
  title: '我的一天。',
  theme: 'My Day',
  goal: 'Introduce a simple daily routine with “每天”.',
  heroTranslation: 'My day.',
  titleTokens: [
    { py: 'Wǒ de', hz: '我的', cls: 'self' },
    { py: 'yì tiān', hz: '一天', cls: 'time' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📅', pinyin: 'měi tiān', text: '每天', translation: 'every day / كل يوم' },
    { emoji: '👦', pinyin: 'zhōngxuéshēng', text: '中学生', translation: 'middle school student / طالب في المرحلة المتوسطة' },
    { emoji: '🎒', pinyin: 'niánjí', text: '年级', translation: 'grade / الصف' },
    { emoji: '📝', pinyin: 'zuò zuòyè', text: '做作业', translation: 'do homework / يعمل الواجب' },
    { emoji: '⚽', pinyin: 'zuò yùndòng', text: '做运动', translation: 'do sports / يمارس الرياضة' },
    { emoji: '🏫', pinyin: 'fàngxué', text: '放学', translation: 'finish school / ينتهي الدوام المدرسي' },
    { emoji: '🎸', pinyin: 'tán jítā', text: '弹吉他', translation: 'play guitar / يعزف الجيتار' },
    { emoji: '📖', pinyin: 'shàng', text: '上', translation: 'study in / be in / في' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'zhōngxuéshēng', hz: '中学生', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'I am a middle school student. / أنا طالب في المرحلة المتوسطة.'
    },
    {
      tokens: [
        { py: 'Wǒ shàng', hz: '我上', cls: 'self' },
        { py: 'qī niánjí', hz: '七年级', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I am in Grade 7. / أنا في الصف السابع.'
    },
    {
      tokens: [
        { py: 'Wǒ měi tiān', hz: '我每天', cls: 'time' },
        { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
        { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Every day I get up at six thirty. / أستيقظ كل يوم الساعة السادسة والنصف.'
    },
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'wǒ de yì tiān', hz: '我的一天', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'This is my day. / هذا يومي.'
    }
  ],

    readings: {
    A: {
      label: 'Level A 初级｜我会说谁几点做什么',
      translation: 'I get up at six thirty every day. I go to school at seven o’clock every day. I sleep at nine o’clock every day.',
      tip: 'Reading Goal: Read “someone + time + activity” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I get up at six thirty every day. / أستيقظ كل يوم الساعة السادسة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I go to school at seven o’clock every day. / أذهب إلى المدرسة كل يوم الساعة السابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'jiǔ diǎn', hz: '九点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sleep at nine o’clock every day. / أنام كل يوم الساعة التاسعة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问每天几点做什么',
      translation: 'What time do you get up every day? I get up at six thirty every day. What time do you go to school every day? I go to school at seven o’clock every day.',
      tip: 'Pair Work: Ask and answer with “你每天几点……？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ měi tiān', hz: '你每天', cls: 'person' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What time do you get up every day? / في أي ساعة تستيقظ كل يوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I get up at six thirty every day. / أستيقظ كل يوم الساعة السادسة والنصف.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ měi tiān', hz: '你每天', cls: 'person' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What time do you go to school every day? / في أي ساعة تذهب إلى المدرسة كل يوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I go to school at seven o’clock every day. / أذهب إلى المدرسة كل يوم الساعة السابعة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ měi tiān', hz: '你每天', cls: 'person' },
            { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What time do you sleep every day? / في أي ساعة تنام كل يوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'jiǔ diǎn', hz: '九点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sleep at nine o’clock every day. / أنام كل يوم الساعة التاسعة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的一天',
      translation: 'Hello everyone. My name is Hassan. I am a middle school student. I am in Grade 7. I get up at six thirty every day. I go to school at seven o’clock every day. I finish school at two o’clock every day. I do sports at four o’clock every day. I sleep at nine o’clock every day. This is my day.',
      tip: 'Speaking Goal: Use “someone + time + activity” to introduce a day.',
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
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'zhōngxuéshēng', hz: '中学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I am a middle school student. / أنا طالب في المرحلة المتوسطة.'
        },
        {
          tokens: [
            { py: 'Wǒ shàng', hz: '我上', cls: 'self' },
            { py: 'qī niánjí', hz: '七年级', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am in Grade 7. / أنا في الصف السابع.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'liù diǎn bàn', hz: '六点半', cls: 'time' },
            { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I get up at six thirty every day. / أستيقظ كل يوم الساعة السادسة والنصف.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'qī diǎn', hz: '七点', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I go to school at seven o’clock every day. / أذهب إلى المدرسة كل يوم الساعة السابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
            { py: 'fàngxué', hz: '放学', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I finish school at two o’clock every day. / أنهي المدرسة كل يوم الساعة الثانية.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'sì diǎn', hz: '四点', cls: 'time' },
            { py: 'zuò yùndòng', hz: '做运动', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do sports at four o’clock every day. / أمارس الرياضة كل يوم الساعة الرابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'self' },
            { py: 'jiǔ diǎn', hz: '九点', cls: 'time' },
            { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sleep at nine o’clock every day. / أنام كل يوم الساعة التاسعة.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de yì tiān', hz: '我的一天', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This is my day. / هذا يومي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “每天” 是什么意思？',
      pinyin: '“Měi tiān” shì shénme yìsi?',
      translation: 'What does “每天” mean?',
      choices: [
        { text: 'every day', correct: true },
        { text: 'today', correct: false },
        { text: 'birthday', correct: false }
      ]
    },
    {
      question: '2. “中学生” 是什么意思？',
      pinyin: '“Zhōngxuéshēng” shì shénme yìsi?',
      translation: 'What does “中学生” mean?',
      choices: [
        { text: 'middle school student', correct: true },
        { text: 'teacher', correct: false },
        { text: 'doctor', correct: false }
      ]
    },
    {
      question: '3. “我上七年级。” 是什么意思？',
      pinyin: '“Wǒ shàng qī niánjí.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am in Grade 7.', correct: true },
        { text: 'I am seven years old.', correct: false },
        { text: 'I go to school at seven.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “do sports”？',
      pinyin: 'Nǎ yí ge shì “do sports”?',
      translation: 'Which one means “do sports”?',
      choices: [
        { text: '做运动', correct: true },
        { text: '做作业', correct: false },
        { text: '放学', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Dàjiā hǎo', hz: '大家好', cls: 'greeting' },
        { hz: '！' }
      ],
      [
        { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'zhōngxuéshēng', hz: '中学生', cls: 'person' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ shàng', hz: '我上', cls: 'self' },
        { blank: true },
        { py: 'niánjí', hz: '年级', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ měi tiān', hz: '我每天', cls: 'time' },
        { blank: true },
        { py: 'qǐchuáng', hz: '起床', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ měi tiān', hz: '我每天', cls: 'time' },
        { blank: true },
        { py: 'shuìjiào', hz: '睡觉', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'wǒ de yì tiān', hz: '我的一天', cls: 'time' },
        { hz: '。' }
      ]
    ],
    translation: 'Hello everyone! My name is _____. I am a middle school student. I am in Grade _____. Every day I get up at _____. Every day I sleep at _____. This is my day.',
    tip: 'Use time and activity words: 六点半、七点、九点、起床、睡觉、上学。'
  },

  meanings: {
    '我的': 'my / لي',
    '一天': 'one day / يوم واحد',
    '我的一天': 'my day / يومي',
    '每天': 'every day / كل يوم',
    '我每天': 'I every day / أنا كل يوم',
    '中学生': 'middle school student / طالب في المرحلة المتوسطة',
    '我是': 'I am / أنا',
    '我上': 'I am in / أنا في',
    '几年级': 'which grade / أي صف',
    '七年级': 'Grade 7 / الصف السابع',
    '年级': 'grade / الصف',
    '上': 'study in / be in / في',
    '上学': 'go to school / يذهب إلى المدرسة',
    '我上学': 'I go to school / أذهب إلى المدرسة',
    '放学': 'finish school / ينتهي الدوام المدرسي',
    '我放学': 'I finish school / أنهي المدرسة',
    '做运动': 'do sports / يمارس الرياضة',
    '我做运动': 'I do sports / أمارس الرياضة',
    '做作业': 'do homework / يعمل الواجب',
    '弹吉他': 'play guitar / يعزف الجيتار',
    '起床': 'get up / يستيقظ',
    '睡觉': 'sleep / ينام',
    '我睡觉': 'I sleep / أنام',
    '六点半': 'six thirty / الساعة السادسة والنصف',
    '七点': 'seven o’clock / الساعة السابعة',
    '两点': 'two o’clock / الساعة الثانية',
    '四点': 'four o’clock / الساعة الرابعة',
    '九点': 'nine o’clock / الساعة التاسعة',
    '下午': 'afternoon / بعد الظهر',
    '晚上': 'evening / مساء',
    '这是': 'this is / هذا',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن'
  }
};