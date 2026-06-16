window.LESSONS = window.LESSONS || {};

window.LESSONS['1B-lesson6'] = {
  id: '1B-lesson6',
  book: '1B',
  lesson: 'Lesson 6',
  title: '祝你生日快乐！',
  theme: 'Birthday',
  goal: 'Ask about birthdays and say “祝你生日快乐！”.',
  heroTranslation: 'Happy birthday to you!',
  titleTokens: [
    { py: 'Zhù nǐ', hz: '祝你', cls: 'like' },
    { py: 'shēngrì kuàilè', hz: '生日快乐', cls: 'like' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '🎂', pinyin: 'shēngrì', text: '生日', translation: 'birthday / عيد ميلاد' },
    { emoji: '😊', pinyin: 'kuàilè', text: '快乐', translation: 'happy / سعيد' },
    { emoji: '🎉', pinyin: 'zhù nǐ', text: '祝你', translation: 'wish you / أتمنى لك' },
    { emoji: '🎁', pinyin: 'lǐwù', text: '礼物', translation: 'gift / هدية' },
    { emoji: '📅', pinyin: 'jǐ yuè jǐ hào', text: '几月几号', translation: 'which month and date / أي شهر وأي يوم' },
    { emoji: '📅', pinyin: 'sān yuè shí hào', text: '三月十号', translation: 'March 10th / العاشر من مارس' },
    { emoji: '👩', pinyin: 'māma', text: '妈妈', translation: 'mom / الأم' },
    { emoji: '✅', pinyin: 'wǒ zhīdào', text: '我知道', translation: 'I know / أعرف' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ de shēngrì', hz: '你的生日', cls: 'time' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'What is your birthday date? / ما تاريخ عيد ميلادك؟'
    },
    {
      tokens: [
        { py: 'Wǒ de shēngrì', hz: '我的生日', cls: 'time' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { py: 'sān yuè', hz: '三月', cls: 'time' },
        { py: 'shí hào', hz: '十号', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'My birthday is March 10th. / عيد ميلادي في العاشر من مارس.'
    },
    {
      tokens: [
        { py: 'Zhù nǐ', hz: '祝你', cls: 'like' },
        { py: 'shēngrì kuàilè', hz: '生日快乐', cls: 'like' },
        { hz: '！' }
      ],
      translation: 'Happy birthday to you! / عيد ميلاد سعيد لك!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说生日快乐',
      translation: 'My birthday is March 10th. Today is my birthday. Happy birthday to you.',
      tip: 'Reading Goal: Read birthday sentences clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'sān yuè', hz: '三月', cls: 'time' },
            { py: 'shí hào', hz: '十号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My birthday is March 10th. / عيد ميلادي في العاشر من مارس.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is my birthday. / اليوم عيد ميلادي.'
        },
        {
          tokens: [
            { py: 'Zhù nǐ', hz: '祝你', cls: 'like' },
            { py: 'shēngrì kuàilè', hz: '生日快乐', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Happy birthday to you! / عيد ميلاد سعيد لك!'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'nǐ de lǐwù', hz: '你的礼物', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This is your gift. / هذه هديتك.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问生日',
      translation: 'What is your birthday date? My birthday is March 10th. Is today your birthday? Yes, today is my birthday. Happy birthday to you.',
      tip: 'Pair Work: Ask and answer about birthdays.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ de shēngrì', hz: '你的生日', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What is your birthday date? / ما تاريخ عيد ميلادك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'sān yuè', hz: '三月', cls: 'time' },
            { py: 'shí hào', hz: '十号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My birthday is March 10th. / عيد ميلادي في العاشر من مارس.'
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
            { py: 'Shì', hz: '是', cls: 'activity' },
            { hz: '，' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Yes, today is my birthday. / نعم، اليوم عيد ميلادي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhù nǐ', hz: '祝你', cls: 'like' },
            { py: 'shēngrì kuàilè', hz: '生日快乐', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Happy birthday to you! / عيد ميلاد سعيد لك!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍生日',
      translation: 'Hello everyone. My name is Fatima. My birthday is March 10th. Today is my birthday. This is my gift. I am very happy. Thank you.',
      tip: 'Speaking Goal: Introduce your birthday and say thank you.',
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
            { py: 'Wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'sān yuè', hz: '三月', cls: 'time' },
            { py: 'shí hào', hz: '十号', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My birthday is March 10th. / عيد ميلادي في العاشر من مارس.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'wǒ de shēngrì', hz: '我的生日', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is my birthday. / اليوم عيد ميلادي.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de lǐwù', hz: '我的礼物', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This is my gift. / هذه هديتي.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hěn kuàilè', hz: '很快乐', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I am very happy. / أنا سعيدة جدًا.'
        },
        {
          tokens: [
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '！' }
          ],
          translation: 'Thank you! / شكرًا!'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “祝你生日快乐！” 是什么意思？',
      pinyin: '“Zhù nǐ shēngrì kuàilè!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Happy birthday to you!', correct: true },
        { text: 'What is your birthday?', correct: false },
        { text: 'This is your gift.', correct: false }
      ]
    },
    {
      question: '2. “你的生日是几月几号？” 是什么意思？',
      pinyin: '“Nǐ de shēngrì shì jǐ yuè jǐ hào?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What is your birthday date?', correct: true },
        { text: 'What time is it now?', correct: false },
        { text: 'How old are you?', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “gift”？',
      pinyin: 'Nǎ yí ge shì “gift”?',
      translation: 'Which one means “gift”?',
      choices: [
        { text: '礼物', correct: true },
        { text: '生日', correct: false },
        { text: '快乐', correct: false }
      ]
    },
    {
      question: '4. “我的生日是三月十号。” 是什么意思？',
      pinyin: '“Wǒ de shēngrì shì Sānyuè shí hào.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'My birthday is March 10th.', correct: true },
        { text: 'Today is March 10th.', correct: false },
        { text: 'My gift is March 10th.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ de shēngrì', hz: '你的生日', cls: 'time' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { py: 'jǐ yuè jǐ hào', hz: '几月几号', cls: 'time' },
        { hz: '？' }
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
        { py: 'Zhù nǐ', hz: '祝你', cls: 'like' },
        { py: 'shēngrì kuàilè', hz: '生日快乐', cls: 'like' },
        { hz: '！' }
      ],
      [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'nǐ de lǐwù', hz: '你的礼物', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'What is your birthday date? My birthday is _____ month _____ date. Happy birthday to you! This is your gift.',
    tip: 'Use dates: 一月二号、三月十号、六月十一号、十二月二十号。'
  },

  meanings: {
    '祝你': 'wish you / أتمنى لك',
    '生日': 'birthday / عيد ميلاد',
    '快乐': 'happy / سعيد',
    '生日快乐': 'happy birthday / عيد ميلاد سعيد',
    '祝你生日快乐': 'happy birthday to you / عيد ميلاد سعيد لك',
    '礼物': 'gift / هدية',
    '你的礼物': 'your gift / هديتك',
    '我的礼物': 'my gift / هديتي',
    '这是你的礼物': 'this is your gift / هذه هديتك',
    '你的生日': 'your birthday / عيد ميلادك',
    '我的生日': 'my birthday / عيد ميلادي',
    '你的生日是几月几号': 'what is your birthday date / ما تاريخ عيد ميلادك',
    '几月几号': 'which month and date / أي شهر وأي يوم',
    '三月十号': 'March 10th / العاشر من مارس',
    '一月二号': 'January 2nd / الثاني من يناير',
    '六月十一号': 'June 11th / الحادي عشر من يونيو',
    '十二月二十号': 'December 20th / العشرون من ديسمبر',
    '今天': 'today / اليوم',
    '今天是我的生日': 'today is my birthday / اليوم عيد ميلادي',
    '是': 'is / يكون',
    '我知道': 'I know / أعرف',
    '不知道': 'do not know / لا أعرف',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '我': 'I / أنا',
    '很快乐': 'very happy / سعيد جدًا',
    '谢谢': 'thank you / شكرًا',
    '妈妈': 'mom / الأم'
  }
};