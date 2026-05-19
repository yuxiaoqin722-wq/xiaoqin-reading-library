window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson8'] = {
  id: '2A-lesson8',
  book: '2A',
  lesson: 'Lesson 8',
  title: '我两点有中文课。',
  theme: 'School timetable',
  goal: 'Talk about school subjects and class time.',
  heroTranslation: 'I have Chinese class at two o’clock.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
    { py: 'yǒu', hz: '有' },
    { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📘', pinyin: 'Zhōngwén kè', text: '中文课', translation: 'Chinese class / درس اللغة الصينية' },
    { emoji: '🔤', pinyin: 'Yīngyǔ kè', text: '英语课', translation: 'English class / درس اللغة الإنجليزية' },
    { emoji: '➗', pinyin: 'shùxué kè', text: '数学课', translation: 'math class / درس الرياضيات' },
    { emoji: '🔬', pinyin: 'kēxué kè', text: '科学课', translation: 'science class / درس العلوم' },
    { emoji: '🏃', pinyin: 'tǐyù kè', text: '体育课', translation: 'PE class / درس الرياضة' },
    { emoji: '🕑', pinyin: 'liǎng diǎn', text: '两点', translation: "two o'clock / الساعة الثانية" },
    { emoji: '☀️', pinyin: 'shàngwǔ', text: '上午', translation: 'morning / صباحًا' },
    { emoji: '🌤️', pinyin: 'xiàwǔ', text: '下午', translation: 'afternoon / بعد الظهر' },
    { emoji: '📅', pinyin: 'xīngqī yī', text: '星期一', translation: 'Monday / يوم الاثنين' },
    { emoji: '❓', pinyin: 'shénme kè', text: '什么课', translation: 'what class / أي درس' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { py: 'shénme kè', hz: '什么课', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What classes do you have today? / ما الدروس لديك اليوم؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
        { hz: '。' }
      ],
      translation: "I have Chinese class at two o'clock. / لدي درس صيني في الساعة الثانية."
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'shénme kè', hz: '什么课', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What class do you like? / أي درس تحب؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读简单句',
      translation: "I have Chinese class today. I have math class in the afternoon. I have Chinese class at two o'clock.",
      tip: 'Reading Goal: Read short sentences with time + class.',
      lines: [
        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'jīntiān', hz: '今天', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I have Chinese class today. / لدي درس صيني اليوم.'
        }),

        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xiàwǔ', hz: '下午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'shùxué kè', hz: '数学课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I have math class in the afternoon. / لدي درس رياضيات بعد الظهر.'
        }),

        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: "I have Chinese class at two o'clock. / لدي درس صيني في الساعة الثانية."
        }),

        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xiàwǔ', hz: '下午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'kēxué kè', hz: '科学课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I have science class in the afternoon. / لدي درس علوم بعد الظهر.'
        })
      ]
    },

    B: {
      label: 'Level B 中级｜我会问今天有什么课',
      translation: "What classes do you have today? I have Chinese class today. What time do you have Chinese class? I have Chinese class at two o'clock.",
      tip: 'Pair Work: Ask your partner about today’s classes and class time.',
      lines: [
        Object.assign([
          { hz: '👧' },
          { hz: '：' },
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'jīntiān', hz: '今天', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'shénme kè', hz: '什么课', cls: 'activity' },
          { hz: '？' }
        ], {
          translation: 'What classes do you have today? / ما الدروس لديك اليوم؟'
        }),

        Object.assign([
          { hz: '👦' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'jīntiān', hz: '今天', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I have Chinese class today. / لدي درس صيني اليوم.'
        }),

        Object.assign([
          { hz: '👧' },
          { hz: '：' },
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'jǐ diǎn', hz: '几点', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '？' }
        ], {
          translation: 'What time do you have Chinese class? / في أي ساعة لديك درس اللغة الصينية؟'
        }),

        Object.assign([
          { hz: '👦' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: "I have Chinese class at two o'clock. / لدي درس صيني في الساعة الثانية."
        }),

        Object.assign([
          { hz: '👧' },
          { hz: '：' },
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'yě', hz: '也', cls: 'self' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '！' }
        ], {
          translation: 'I also like Chinese class! / أنا أيضًا أحب درس اللغة الصينية!'
        })
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的课程表',
      translation: 'I have English class on Monday morning. I have Chinese class on Wednesday afternoon. I like Chinese class.',
      tip: 'Speaking Goal: Use your real timetable. Say the day, time, and class.',
      lines: [
        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xīngqī yī', hz: '星期一', cls: 'time' },
          { py: 'shàngwǔ', hz: '上午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Yīngyǔ kè', hz: '英语课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I have English class on Monday morning. / لدي درس إنجليزي صباح يوم الاثنين.'
        }),

        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xīngqī sān', hz: '星期三', cls: 'time' },
          { py: 'xiàwǔ', hz: '下午', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I have Chinese class on Wednesday afternoon. / لدي درس صيني بعد ظهر يوم الأربعاء.'
        }),

        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'liǎng diǎn', hz: '两点', cls: 'time' },
          { py: 'yǒu', hz: '有' },
          { py: 'tǐyù kè', hz: '体育课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: "I have PE class at two o'clock. / لدي درس رياضة في الساعة الثانية."
        }),

        Object.assign([
          { py: 'Wǒ', hz: '我', cls: 'self' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'Zhōngwén kè', hz: '中文课', cls: 'activity' },
          { hz: '。' }
        ], {
          translation: 'I like Chinese class. / أنا أحب درس اللغة الصينية.'
        }),

        Object.assign([
          { py: 'Nǐ', hz: '你', cls: 'person' },
          { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
          { py: 'shénme kè', hz: '什么课', cls: 'activity' },
          { hz: '？' }
        ], {
          translation: 'What class do you like? / أي درس تحب؟'
        })
      ]
    }
  },

  practice: [
    {
      question: '1. “中文课” 是哪一个？',
      pinyin: '“Zhōngwén kè” shì nǎ yí ge?',
      translation: 'Which one is Chinese class?',
      choices: [
        { text: '📘 中文课', pinyin: 'Zhōngwén kè', correct: true },
        { text: '➗ 数学课', pinyin: 'shùxué kè', correct: false },
        { text: '🏃 体育课', pinyin: 'tǐyù kè', correct: false }
      ]
    },
    {
      question: '2. “我两点有中文课。” 是什么意思？',
      pinyin: '“Wǒ liǎng diǎn yǒu Zhōngwén kè.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: "I have Chinese class at two o'clock.", correct: true },
        { text: 'I like Chinese class.', correct: false },
        { text: 'What class do you have?', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你今天有什么课？',
      promptPinyin: 'Nǐ jīntiān yǒu shénme kè?',
      choices: [
        { text: '我今天有中文课。', pinyin: 'Wǒ jīntiān yǒu Zhōngwén kè.', correct: true },
        { text: '我叫哈桑。', pinyin: 'Wǒ jiào Hāsāng.', correct: false }
      ]
    },
    {
      question: '4. “你喜欢什么课？” 是什么意思？',
      pinyin: '“Nǐ xǐhuan shénme kè?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What class do you like?', correct: true },
        { text: 'What is your name?', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      Object.assign([
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'jīntiān', hz: '今天', cls: 'time' },
        { py: 'yǒu', hz: '有' },
        { blank: true },
        { hz: '。' }
      ], {
        translation: 'I have ______ today. / لدي ______ اليوم.'
      }),

      Object.assign([
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'yǒu', hz: '有' },
        { blank: true },
        { hz: '。' }
      ], {
        translation: 'I have ______ at ______. / لدي ______ في ______.'
      }),

      Object.assign([
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ], {
        translation: 'I like ______. / أنا أحب ______.'
      }),

      Object.assign([
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
        { py: 'shénme kè', hz: '什么课', cls: 'activity' },
        { hz: '？' }
      ], {
        translation: 'What class do you like? / أي درس تحب؟'
      })
    ],
    translation: 'I have ______ today. / I have ______ at ______. / I like ______. / What class do you like?',
    tip: 'Use your real timetable. Say one class, one time, and one class you like.',
    wordBank: [
      '中文课',
      '英语课',
      '数学课',
      '科学课',
      '体育课',
      '两点',
      '上午',
      '下午',
      '星期一',
      '星期三'
    ]
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '有': 'have / لديه',
    '也': 'also / أيضًا',
    '今天': 'today / اليوم',
    '上午': 'morning / صباحًا',
    '下午': 'afternoon / بعد الظهر',
    '两点': "two o'clock / الساعة الثانية",
    '几点': 'what time / أي ساعة',
    '星期一': 'Monday / يوم الاثنين',
    '星期三': 'Wednesday / يوم الأربعاء',
    '什么课': 'what class / أي درس',
    '中文课': 'Chinese class / درس اللغة الصينية',
    '英语课': 'English class / درس اللغة الإنجليزية',
    '数学课': 'math class / درس الرياضيات',
    '科学课': 'science class / درس العلوم',
    '体育课': 'PE class / درس الرياضة',
    '你今天有什么课': 'what classes do you have today / ما الدروس لديك اليوم',
    '我两点有中文课': "I have Chinese class at two o'clock / لدي درس صيني في الساعة الثانية",
    '你喜欢什么课': 'what class do you like / أي درس تحب',
    '我喜欢中文课': 'I like Chinese class / أحب درس اللغة الصينية',
    '学': 'study / دراسة'
  }
};
