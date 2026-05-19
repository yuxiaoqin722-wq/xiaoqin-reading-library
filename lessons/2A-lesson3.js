window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson3'] = {
  id: '2A-lesson3',
  book: '2A',
  lesson: 'Lesson 3',
  title: '北京的秋天非常美。',
  theme: 'Seasons',
  goal: 'Talk about four seasons and simple weather.',
  heroTranslation: 'Autumn in Beijing is very beautiful.',
  titleTokens: [
    { py: 'Běijīng de', hz: '北京的', cls: 'place' },
    { py: 'qiūtiān', hz: '秋天', cls: 'time' },
    { py: 'fēicháng měi', hz: '非常美', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🌸', pinyin: 'chūntiān', text: '春天', translation: 'spring / الربيع' },
    { emoji: '☀️', pinyin: 'xiàtiān', text: '夏天', translation: 'summer / الصيف' },
    { emoji: '🍂', pinyin: 'qiūtiān', text: '秋天', translation: 'autumn / الخريف' },
    { emoji: '❄️', pinyin: 'dōngtiān', text: '冬天', translation: 'winter / الشتاء' },
    { emoji: '📅', pinyin: 'jìjié', text: '季节', translation: 'season / فصل' },
    { emoji: '🌤️', pinyin: 'nuǎnhuo', text: '暖和', translation: 'warm / دافئ' },
    { emoji: '🍃', pinyin: 'liángkuai', text: '凉快', translation: 'cool / لطيف البرودة' },
    { emoji: '🔥', pinyin: 'rè', text: '热', translation: 'hot / حار' },
    { emoji: '🥶', pinyin: 'lěng', text: '冷', translation: 'cold / بارد' },
    { emoji: '🌟', pinyin: 'fēicháng měi', text: '非常美', translation: 'very beautiful / جميل جدًا' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Yì nián', hz: '一年', cls: 'time' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { py: 'sì ge jìjié', hz: '四个季节', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'There are four seasons in a year. / في السنة أربعة فصول.'
    },
    {
      tokens: [
        { py: 'Qiūtiān', hz: '秋天', cls: 'time' },
        { py: 'hěn liángkuai', hz: '很凉快', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Autumn is cool. / الخريف لطيف البرودة.'
    },
    {
      tokens: [
        { py: 'Běijīng de', hz: '北京的', cls: 'place' },
        { py: 'qiūtiān', hz: '秋天', cls: 'time' },
        { py: 'fēicháng měi', hz: '非常美', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Autumn in Beijing is very beautiful. / الخريف في بكين جميل جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说四个季节',
      translation: 'There are four seasons in a year. Spring is warm. Summer is hot. Autumn is cool. Winter is cold.',
      tip: 'Reading Goal: Read four seasons and simple weather words.',
      lines: [
        {
          tokens: [
            { py: 'Yì nián', hz: '一年', cls: 'time' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'sì ge jìjié', hz: '四个季节', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'There are four seasons in a year. / في السنة أربعة فصول.'
        },
        {
          tokens: [
            { py: 'Chūntiān', hz: '春天', cls: 'time' },
            { py: 'hěn nuǎnhuo', hz: '很暖和', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Spring is warm. / الربيع دافئ.'
        },
        {
          tokens: [
            { py: 'Xiàtiān', hz: '夏天', cls: 'time' },
            { py: 'hěn rè', hz: '很热', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Summer is hot. / الصيف حار.'
        },
        {
          tokens: [
            { py: 'Qiūtiān', hz: '秋天', cls: 'time' },
            { py: 'hěn liángkuai', hz: '很凉快', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Autumn is cool. / الخريف لطيف البرودة.'
        },
        {
          tokens: [
            { py: 'Dōngtiān', hz: '冬天', cls: 'time' },
            { py: 'hěn lěng', hz: '很冷', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Winter is cold. / الشتاء بارد.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问季节',
      translation: 'Which season is this? This is autumn. How is the weather in autumn? Autumn is cool. Do you like autumn? I like autumn.',
      tip: 'Pair Work: Ask and answer about seasons.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'nǎ ge jìjié', hz: '哪个季节', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Which season is this? / أي فصل هذا؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'qiūtiān', hz: '秋天', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This is autumn. / هذا هو الخريف.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qiūtiān', hz: '秋天', cls: 'time' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the weather in autumn? / كيف الطقس في الخريف؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qiūtiān', hz: '秋天', cls: 'time' },
            { py: 'hěn liángkuai', hz: '很凉快', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Autumn is cool. / الخريف لطيف البرودة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'qiūtiān ma', hz: '秋天吗', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Do you like autumn? / هل تحبين الخريف؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'qiūtiān', hz: '秋天', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I like autumn. / أحب الخريف.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会比较阿联酋和北京的季节',
      translation: 'Hello everyone. My name is Fatima. I am in the UAE. Summer in the UAE is very hot. Winter is very comfortable. I like winter. Autumn in Beijing is very beautiful.',
      tip: 'Speaking Goal: Compare UAE seasons and Beijing autumn simply.',
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
            { py: 'Wǒ zài', hz: '我在', cls: 'self' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am in the UAE. / أنا في الإمارات.'
        },
        {
          tokens: [
            { py: 'Āliánqiú de', hz: '阿联酋的', cls: 'country' },
            { py: 'xiàtiān', hz: '夏天', cls: 'time' },
            { py: 'hěn rè', hz: '很热', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Summer in the UAE is very hot. / الصيف في الإمارات حار جدًا.'
        },
        {
          tokens: [
            { py: 'Dōngtiān', hz: '冬天', cls: 'time' },
            { py: 'hěn shūfu', hz: '很舒服', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Winter is very comfortable. / الشتاء مريح جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'dōngtiān', hz: '冬天', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I like winter. / أحب الشتاء.'
        },
        {
          tokens: [
            { py: 'Běijīng de', hz: '北京的', cls: 'place' },
            { py: 'qiūtiān', hz: '秋天', cls: 'time' },
            { py: 'fēicháng měi', hz: '非常美', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Autumn in Beijing is very beautiful. / الخريف في بكين جميل جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “春天” 是什么意思？',
      pinyin: '“Chūntiān” shì shénme yìsi?',
      translation: 'What does “春天” mean?',
      choices: [
        { text: 'spring', correct: true },
        { text: 'summer', correct: false },
        { text: 'winter', correct: false }
      ]
    },
    {
      question: '2. “秋天” 是什么意思？',
      pinyin: '“Qiūtiān” shì shénme yìsi?',
      translation: 'What does “秋天” mean?',
      choices: [
        { text: 'autumn', correct: true },
        { text: 'summer', correct: false },
        { text: 'spring', correct: false }
      ]
    },
    {
      question: '3. “北京的秋天非常美。” 是什么意思？',
      pinyin: '“Běijīng de qiūtiān fēicháng měi.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Autumn in Beijing is very beautiful.', correct: true },
        { text: 'Winter in Beijing is very cold.', correct: false },
        { text: 'Summer in the UAE is very hot.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “very beautiful”？',
      pinyin: 'Nǎ yí ge shì “very beautiful”?',
      translation: 'Which one means “very beautiful”?',
      choices: [
        { text: '非常美', correct: true },
        { text: '很热', correct: false },
        { text: '很冷', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Yì nián', hz: '一年', cls: 'time' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { blank: true },
        { py: 'ge jìjié', hz: '个季节', cls: 'time' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'hěn rè', hz: '很热', cls: 'not-like' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'hěn lěng', hz: '很冷', cls: 'not-like' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'de qiūtiān', hz: '的秋天', cls: 'time' },
        { py: 'fēicháng měi', hz: '非常美', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'There are ____ seasons in a year. ____ is hot. ____ is cold. I like _____. Autumn in _____ is very beautiful.',
    tip: 'Use words: 春天、夏天、秋天、冬天、北京、阿联酋。'
  },

  meanings: {
    '春天': 'spring / الربيع',
    '夏天': 'summer / الصيف',
    '秋天': 'autumn / الخريف',
    '冬天': 'winter / الشتاء',
    '季节': 'season / فصل',
    '四个季节': 'four seasons / أربعة فصول',
    '一年': 'one year / سنة واحدة',
    '一年有四个季节': 'there are four seasons in a year / في السنة أربعة فصول',
    '暖和': 'warm / دافئ',
    '很暖和': 'very warm / دافئ جدًا',
    '凉快': 'cool / لطيف البرودة',
    '很凉快': 'very cool / لطيف البرودة جدًا',
    '热': 'hot / حار',
    '很热': 'very hot / حار جدًا',
    '冷': 'cold / بارد',
    '很冷': 'very cold / بارد جدًا',
    '舒服': 'comfortable / مريح',
    '很舒服': 'very comfortable / مريح جدًا',
    '非常': 'very / جدًا',
    '美': 'beautiful / جميل',
    '非常美': 'very beautiful / جميل جدًا',
    '北京': 'Beijing / بكين',
    '北京的': 'Beijing’s / في بكين',
    '北京的秋天': 'autumn in Beijing / الخريف في بكين',
    '北京的秋天非常美': 'autumn in Beijing is very beautiful / الخريف في بكين جميل جدًا',
    '阿联酋': 'the UAE / الإمارات',
    '阿联酋的': 'the UAE’s / في الإمارات',
    '哪个季节': 'which season / أي فصل',
    '这是': 'this is / هذا',
    '天气': 'weather / الطقس',
    '怎么样': 'how is it / كيف',
    '你喜欢': 'you like / تحب',
    '我喜欢': 'I like / أحب',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '我在': 'I am in / أنا في',
    '有': 'have / يوجد'
  }
};