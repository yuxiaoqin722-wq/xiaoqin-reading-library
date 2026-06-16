window.LESSONS = window.LESSONS || {};

window.LESSONS['1B-lesson5'] = {
  id: '1B-lesson5',
  book: '1B',
  lesson: 'Lesson 5',
  title: '今天二月一号。',
  theme: 'Date',
  goal: 'Ask and answer the date with “今天几月几号？”.',
  heroTranslation: 'Today is February 1st.',
  titleTokens: [
    { py: 'Jīntiān', hz: '今天', cls: 'time' },
    { py: 'èr yuè', hz: '二月', cls: 'time' },
    { py: 'yī hào', hz: '一号', cls: 'time' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📅', pinyin: 'jīntiān', text: '今天', translation: 'today / اليوم' },
    { emoji: '📅', pinyin: 'jǐ yuè', text: '几月', translation: 'which month / أي شهر' },
    { emoji: '📅', pinyin: 'jǐ hào', text: '几号', translation: 'which date / أي يوم' },
    { emoji: '🌙', pinyin: 'yuè', text: '月', translation: 'month / شهر' },
    { emoji: '🔢', pinyin: 'hào', text: '号', translation: 'date / تاريخ' },
    { emoji: '1️⃣', pinyin: 'yī yuè', text: '一月', translation: 'January / يناير' },
    { emoji: '2️⃣', pinyin: 'èr yuè', text: '二月', translation: 'February / فبراير' },
    { emoji: '3️⃣', pinyin: 'sān yuè', text: '三月', translation: 'March / مارس' },
    { emoji: '🎂', pinyin: 'shēngrì', text: '生日', translation: 'birthday / عيد ميلاد' },
    { emoji: '🎉', pinyin: 'jiérì', text: '节日', translation: 'festival / عيد' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'What is the date today? / ما تاريخ اليوم؟'
    },
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'èr yuè', hz: '二月', cls: 'time' },
        { py: 'yī hào', hz: '一号', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'Today is February 1st. / اليوم هو الأول من فبراير.'
    },
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'Today is my birthday. / اليوم عيد ميلادي.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说日期',
      translation: 'Today is February 1st. Today is March 1st. Today is May 2nd.',
      tip: 'Reading Goal: Read “今天 + 月 + 号” slowly.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'èr yuè', hz: '二月', cls: 'time' },
            { py: 'yī hào', hz: '一号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is February 1st. / اليوم هو الأول من فبراير.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'sān yuè', hz: '三月', cls: 'time' },
            { py: 'yī hào', hz: '一号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is March 1st. / اليوم هو الأول من مارس.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǔ yuè', hz: '五月', cls: 'time' },
            { py: 'èr hào', hz: '二号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is May 2nd. / اليوم هو الثاني من مايو.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'jiǔ yuè', hz: '九月', cls: 'time' },
            { py: 'shí hào', hz: '十号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is September 10th. / اليوم هو العاشر من سبتمبر.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问今天几月几号',
      translation: 'Hello. What is the date today? Today is February 1st. Is today your birthday? No, today is not my birthday.',
      tip: 'Pair Work: Ask and answer “今天几月几号？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: ',' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Hello! What is the date today? / مرحبًا! ما تاريخ اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'èr yuè', hz: '二月', cls: 'time' },
            { py: 'yī hào', hz: '一号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is February 1st. / اليوم هو الأول من فبراير.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'nǐ de shēngrì ma', hz: '你的生日吗', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Is today your birthday? / هل اليوم عيد ميلادك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bù shì', hz: '不是', cls: 'not-like' },
            { hz: '，' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'bú shì', hz: '不是', cls: 'not-like' },
            { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'No, today is not my birthday. / لا، اليوم ليس عيد ميلادي.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ de shēngrì', hz: '你的生日', cls: 'time' },
            { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What is your birthday date? / ما تاريخ عيد ميلادك؟'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍今天和生日',
      translation: 'Hello everyone. My name is Fatima. Today is February 1st. I am Emirati. My birthday is May 2nd. I like my birthday.',
      tip: 'Speaking Goal: Say today’s date and your birthday.',
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
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'èr yuè', hz: '二月', cls: 'time' },
            { py: 'yī hào', hz: '一号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is February 1st. / اليوم هو الأول من فبراير.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتية.'
        },
        {
          tokens: [
            { py: 'Wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'wǔ yuè', hz: '五月', cls: 'time' },
            { py: 'èr hào', hz: '二号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My birthday is May 2nd. / عيد ميلادي في الثاني من مايو.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I like my birthday. / أحب عيد ميلادي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “今天几月几号？” 是什么意思？',
      pinyin: '“Jīntiān jǐ yuè jǐ hào?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What is the date today?', correct: true },
        { text: 'What time is it now?', correct: false },
        { text: 'How old are you?', correct: false }
      ]
    },
    {
      question: '2. “二月一号” 是什么意思？',
      pinyin: '“Èr yuè yī hào” shì shénme yìsi?',
      translation: 'What does “二月一号” mean?',
      choices: [
        { text: 'February 1st', correct: true },
        { text: 'January 2nd', correct: false },
        { text: 'March 1st', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “birthday”？',
      pinyin: 'Nǎ yí ge shì “birthday”?',
      translation: 'Which one means “birthday”?',
      choices: [
        { text: '生日', correct: true },
        { text: '今天', correct: false },
        { text: '月份', correct: false }
      ]
    },
    {
      question: '4. “今天是我的生日。” 是什么意思？',
      pinyin: '“Jīntiān shì wǒ de shēngrì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Today is my birthday.', correct: true },
        { text: 'Today is February.', correct: false },
        { text: 'My family has five people.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
        { hz: '？' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { blank: true },
        { py: 'yuè', hz: '月', cls: 'time' },
        { blank: true },
        { py: 'hào', hz: '号', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de shēngrì', hz: '我的生日', cls: 'time' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { py: 'yuè', hz: '月', cls: 'time' },
        { blank: true },
        { py: 'hào', hz: '号', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
        { hz: '。' }
      ]
    ],
    translation: 'What is the date today? Today is _____ month _____ date. My birthday is _____ month _____ date. I like my birthday.',
    tip: 'Use months and dates: 一月、二月、三月、五月、一号、二号、十号。'
  },

  meanings: {
    '今天': 'today / اليوم',
    '几月': 'which month / أي شهر',
    '几号': 'which date / أي يوم',
    '几月几号': 'which month and date / أي شهر وأي يوم',
    '今天几月几号': 'what is the date today / ما تاريخ اليوم',
    '月': 'month / شهر',
    '号': 'date / تاريخ',
    '一月': 'January / يناير',
    '二月': 'February / فبراير',
    '三月': 'March / مارس',
    '五月': 'May / مايو',
    '九月': 'September / سبتمبر',
    '一号': 'first day / اليوم الأول',
    '二号': 'second day / اليوم الثاني',
    '十号': 'tenth day / اليوم العاشر',
    '二月一号': 'February 1st / الأول من فبراير',
    '三月一号': 'March 1st / الأول من مارس',
    '五月二号': 'May 2nd / الثاني من مايو',
    '九月十号': 'September 10th / العاشر من سبتمبر',
    '是': 'is / يكون',
    '不是': 'is not / ليس',
    '生日': 'birthday / عيد ميلاد',
    '我的生日': 'my birthday / عيد ميلادي',
    '你的生日吗': 'your birthday? / عيد ميلادك؟',
    '今天是我的生日': 'today is my birthday / اليوم عيد ميلادي',
    '我喜欢': 'I like / أنا أحب',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '我是': 'I am / أنا',
    '阿联酋人': 'Emirati / إماراتي',
    '节日': 'festival / عيد',
    '春节': 'Spring Festival / عيد الربيع',
    '开斋节': 'Eid al-Fitr / عيد الفطر'
  }
};