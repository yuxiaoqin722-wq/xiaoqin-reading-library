window.LESSONS = window.LESSONS || {};

window.LESSONS['2B-lesson1'] = {
  id: '2B-lesson1',
  book: '2B',
  lesson: 'Lesson 1',
  title: '你们想喝什么？',
  theme: 'Drinks and preferences',
  goal: 'Talk about what you want to drink.',
  heroTranslation: 'What would you like to drink?',
  titleTokens: [
    { py: 'Nǐmen', hz: '你们', cls: 'person' },
    { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
    { py: 'shénme', hz: '什么', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '💧', pinyin: 'shuǐ', text: '水', translation: 'water / ماء' },
    { emoji: '☕', pinyin: 'kāfēi', text: '咖啡', translation: 'coffee / قهوة' },
    { emoji: '🍵', pinyin: 'chá', text: '茶', translation: 'tea / شاي' },
    { emoji: '🥤', pinyin: 'kělè', text: '可乐', translation: 'cola / كولا' },
    { emoji: '🥛', pinyin: 'niúnǎi', text: '牛奶', translation: 'milk / حليب' },
    { emoji: '🧃', pinyin: 'guǒzhī', text: '果汁', translation: 'juice / عصير' },
    { emoji: '🥤', pinyin: 'nǎichá', text: '奶茶', translation: 'milk tea / شاي بالحليب' },
    { emoji: '💭', pinyin: 'xiǎng hē', text: '想喝', translation: 'want to drink / يريد أن يشرب' },
    { emoji: '🥛', pinyin: 'yì bēi', text: '一杯', translation: 'one cup / كوب واحد' },
    { emoji: '🧴', pinyin: 'yì píng', text: '一瓶', translation: 'one bottle / زجاجة واحدة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
        { py: 'shénme', hz: '什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What would you like to drink? / ماذا تريد أن تشرب؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
        { py: 'kělè', hz: '可乐', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I would like to drink cola. / أريد أن أشرب كولا.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
        { py: 'yì bēi shuǐ', hz: '一杯水', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I would like to drink a cup of water. / أريد أن أشرب كوب ماء.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说想喝什么',
      translation: 'I want to drink water. I want to drink milk. I want to drink juice. What would you like to drink?',
      tip: 'Reading Goal: Read “我想喝……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'shuǐ', hz: '水', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to drink water. / أريد أن أشرب ماء.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'niúnǎi', hz: '牛奶', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to drink milk. / أريد أن أشرب حليبًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'guǒzhī', hz: '果汁', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to drink juice. / أريد أن أشرب عصيرًا.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What would you like to drink? / ماذا تريد أن تشرب؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会点饮料',
      translation: 'What would you like to drink? I would like a cup of juice. Do you like coffee? I do not like coffee. I like milk.',
      tip: 'Pair Work: Ask and answer about drinks.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What would you like to drink? / ماذا تريد أن تشرب؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'yì bēi guǒzhī', hz: '一杯果汁', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I would like a cup of juice. / أريد كوبًا من العصير.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xǐhuan hē', hz: '喜欢喝', cls: 'like' },
            { py: 'kāfēi ma', hz: '咖啡吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you like drinking coffee? / هل تحب شرب القهوة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bù xǐhuan hē', hz: '不喜欢喝', cls: 'not-like' },
            { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not like drinking coffee. / لا أحب شرب القهوة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan hē', hz: '喜欢喝', cls: 'like' },
            { py: 'niúnǎi', hz: '牛奶', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like drinking milk. / أحب شرب الحليب.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yě', hz: '也', cls: 'self' },
            { py: 'xǐhuan hē', hz: '喜欢喝', cls: 'like' },
            { py: 'niúnǎi', hz: '牛奶', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also like drinking milk. / أنا أيضًا أحب شرب الحليب.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我喜欢喝什么',
      translation: 'I like drinking juice. I like drinking milk. I do not like drinking coffee. It is very hot today. I would like to drink a cup of water.',
      tip: 'Speaking Goal: Talk about your real drink preferences.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan hē', hz: '喜欢喝', cls: 'like' },
            { py: 'guǒzhī', hz: '果汁', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like drinking juice. / أحب شرب العصير.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan hē', hz: '喜欢喝', cls: 'like' },
            { py: 'niúnǎi', hz: '牛奶', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like drinking milk. / أحب شرب الحليب.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bù xǐhuan hē', hz: '不喜欢喝', cls: 'not-like' },
            { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not like drinking coffee. / لا أحب شرب القهوة.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn rè', hz: '很热', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It is very hot today. / الجو حار جدًا اليوم.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
            { py: 'yì bēi shuǐ', hz: '一杯水', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I would like to drink a cup of water. / أريد أن أشرب كوب ماء.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “水” 是什么意思？',
      pinyin: '“Shuǐ” shì shénme yìsi?',
      translation: 'What does “水” mean?',
      choices: [
        { text: 'water / ماء', correct: true },
        { text: 'coffee / قهوة', correct: false },
        { text: 'milk / حليب', correct: false }
      ]
    },
    {
      question: '2. “我想喝可乐。” 是什么意思？',
      pinyin: '“Wǒ xiǎng hē kělè.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I want to drink cola.', correct: true },
        { text: 'I like drinking milk.', correct: false },
        { text: 'I do not like coffee.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你想喝什么？',
      promptPinyin: 'Nǐ xiǎng hē shénme?',
      choices: [
        { text: '我想喝水。', pinyin: 'Wǒ xiǎng hē shuǐ.', correct: true },
        { text: '我今天很忙。', pinyin: 'Wǒ jīntiān hěn máng.', correct: false }
      ]
    },
    {
      question: '4. “一杯水” 是什么意思？',
      pinyin: '“Yì bēi shuǐ” shì shénme yìsi?',
      translation: 'What does “一杯水” mean?',
      choices: [
        { text: 'a cup of water', correct: true },
        { text: 'a bottle of cola', correct: false },
        { text: 'a cup of coffee', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan hē', hz: '喜欢喝', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bù xǐhuan hē', hz: '不喜欢喝', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'hěn rè', hz: '很热', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiǎng hē', hz: '想喝', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I like drinking ______. I do not like drinking ______. It is very hot today. I would like to drink ______.',
    tip: 'Use drink words: 水、牛奶、果汁、可乐、茶、咖啡、奶茶。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '你们': 'you all / أنتم',
    '想喝': 'want to drink / يريد أن يشرب',
    '什么': 'what / ماذا',
    '水': 'water / ماء',
    '咖啡': 'coffee / قهوة',
    '茶': 'tea / شاي',
    '可乐': 'cola / كولا',
    '牛奶': 'milk / حليب',
    '果汁': 'juice / عصير',
    '奶茶': 'milk tea / شاي بالحليب',
    '红茶': 'black tea / شاي أسود',
    '绿茶': 'green tea / شاي أخضر',
    '热巧克力': 'hot chocolate / شوكولاتة ساخنة',
    '一杯': 'one cup / كوب واحد',
    '一瓶': 'one bottle / زجاجة واحدة',
    '一杯水': 'a cup of water / كوب ماء',
    '一杯果汁': 'a cup of juice / كوب عصير',
    '喜欢喝': 'like drinking / يحب أن يشرب',
    '不喜欢喝': 'do not like drinking / لا يحب أن يشرب',
    '今天': 'today / اليوم',
    '很热': 'very hot / حار جدًا',
    '你想喝什么': 'What would you like to drink? / ماذا تريد أن تشرب؟',
    '我想喝可乐': 'I want to drink cola / أريد أن أشرب كولا'
  }
};