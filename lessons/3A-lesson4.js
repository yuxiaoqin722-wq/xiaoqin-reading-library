window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson4'] = {
  id: '3A-lesson4',
  book: '3A',
  lesson: 'Lesson 4',
  title: '我想去上海旅行。',
  theme: 'Travel and Comparison',
  goal: 'Compare people, places and things using 比 and 没有.',
  heroTranslation: 'I want to travel to Shanghai.',
  titleTokens: [
    { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
    { py: 'Shànghǎi', hz: '上海', cls: 'place' },
    { py: 'lǚxíng', hz: '旅行', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '⚖️', pinyin: 'bǐ', text: '比', translation: 'compare / يقارن' },
    { emoji: '🧳', pinyin: 'lǚxíng', text: '旅行', translation: 'travel / السفر' },
    { emoji: '🔥', pinyin: 'rè', text: '热', translation: 'hot / حار' },
    { emoji: '❄️', pinyin: 'lěng', text: '冷', translation: 'cold / بارد' },
    { emoji: '🚀', pinyin: 'kuài', text: '快', translation: 'fast / سريع' },
    { emoji: '🐢', pinyin: 'màn', text: '慢', translation: 'slow / بطيء' },
    { emoji: '💰', pinyin: 'guì', text: '贵', translation: 'expensive / غالٍ' },
    { emoji: '🏷️', pinyin: 'piányi', text: '便宜', translation: 'cheap / رخيص' },
    { emoji: '🍉', pinyin: 'dà', text: '大', translation: 'big / كبير' },
    { emoji: '🍎', pinyin: 'xiǎo', text: '小', translation: 'small / صغير' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Díbài', hz: '迪拜', cls: 'place' },
        { py: 'bǐ  Shànghǎi', hz: '比 上海', cls: 'place' },
        { py: 'rè', hz: '热', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Dubai is hotter than Shanghai. / دبي أكثر حرارة من شنغهاي.'
    },
    {
      tokens: [
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'méiyǒu  Díbài', hz: '没有 迪拜', cls: 'place' },
        { py: 'rè', hz: '热', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Shanghai is not as hot as Dubai. / شنغهاي ليست حارة مثل دبي.'
    },
    {
      tokens: [
        { py: 'Fēijī', hz: '飞机', cls: 'activity' },
        { py: 'bǐ  huǒchē', hz: '比 火车', cls: 'activity' },
        { py: 'kuài', hz: '快', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'An airplane is faster than a train. / الطائرة أسرع من القطار.'
    },
    {
      tokens: [
        { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'lǚxíng', hz: '旅行', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I want to travel to Shanghai. / أريد السفر إلى شنغهاي.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会看懂比较',
      translation: 'The apple is bigger than the banana. The airplane is faster than the train. Coffee is more expensive than water. Today is colder than yesterday.',
      tip: 'Reading Goal: Understand simple comparison sentences with 比.',
      lines: [
        {
          tokens: [
            { py: 'Píngguǒ', hz: '苹果', cls: 'place' },
            { py: 'bǐ  xiāngjiāo', hz: '比 香蕉', cls: 'place' },
            { py: 'dà', hz: '大', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The apple is bigger than the banana. / التفاحة أكبر من الموزة.'
        },
        {
          tokens: [
            { py: 'Fēijī', hz: '飞机', cls: 'activity' },
            { py: 'bǐ  huǒchē', hz: '比 火车', cls: 'activity' },
            { py: 'kuài', hz: '快', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The airplane is faster than the train. / الطائرة أسرع من القطار.'
        },
        {
          tokens: [
            { py: 'Kāfēi', hz: '咖啡', cls: 'place' },
            { py: 'bǐ  shuǐ', hz: '比 水', cls: 'place' },
            { py: 'guì', hz: '贵', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Coffee is more expensive than water. / القهوة أغلى من الماء.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'bǐ  zuótiān', hz: '比 昨天', cls: 'time' },
            { py: 'lěng', hz: '冷', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today is colder than yesterday. / اليوم أبرد من أمس.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会比较城市',
      translation: 'Where do you want to travel? I want to travel to Shanghai. Is Shanghai hot? Shanghai is hot, but Shanghai is not as hot as Dubai.',
      tip: 'Pair Work: Ask and compare two cities.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xiǎng qù', hz: '你想去', cls: 'person' },
            { py: 'nǎlǐ', hz: '哪里', cls: 'place' },
            { py: 'lǚxíng', hz: '旅行', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Where do you want to travel? / أين تريد أن تسافر؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'lǚxíng', hz: '旅行', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to travel to Shanghai. / أريد السفر إلى شنغهاي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'rè ma', hz: '热吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Is Shanghai hot? / هل شنغهاي حارة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'hěn rè', hz: '很热', cls: 'like' },
            { hz: '，' }
          ],
          translation: 'Shanghai is hot. / شنغهاي حارة.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'dànshì', hz: '但是', cls: 'time' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'méiyǒu  Díbài', hz: '没有 迪拜', cls: 'place' },
            { py: 'rè', hz: '热', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'But Shanghai is not as hot as Dubai. / لكن شنغهاي ليست حارة مثل دبي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'dà ma', hz: '大吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Is Shanghai big? / هل شنغهاي كبيرة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'bǐ  wǒ de chéngshì', hz: '比 我的城市', cls: 'place' },
            { py: 'dà', hz: '大', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Shanghai is bigger than my city. / شنغهاي أكبر من مدينتي.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍想去的城市',
      translation: 'I want to travel to Shanghai. Shanghai is bigger than my city. Shanghai is hotter than my city. Shanghai has many metro lines. I think Shanghai is very interesting.',
      tip: 'Speaking Goal: Describe a city you want to visit and compare it with your city.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'lǚxíng', hz: '旅行', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to travel to Shanghai. / أريد السفر إلى شنغهاي.'
        },
        {
          tokens: [
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'bǐ  wǒ de chéngshì', hz: '比 我的城市', cls: 'place' },
            { py: 'dà', hz: '大', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Shanghai is bigger than my city. / شنغهاي أكبر من مدينتي.'
        },
        {
          tokens: [
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'bǐ  wǒ de chéngshì', hz: '比 我的城市', cls: 'place' },
            { py: 'rè', hz: '热', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Shanghai is hotter than my city. / شنغهاي أكثر حرارة من مدينتي.'
        },
        {
          tokens: [
            { py: 'Shànghǎi de dìtiě', hz: '上海的地铁', cls: 'place' },
            { py: 'hěn duō', hz: '很多', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Shanghai has many metro lines. / في شنغهاي الكثير من خطوط المترو.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think Shanghai is very interesting. / أعتقد أن شنغهاي ممتعة جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “比” 是什么意思？',
      pinyin: '“Bǐ” shì shénme yìsi?',
      translation: 'What does “比” mean?',
      choices: [
        { text: 'compare', correct: true },
        { text: 'travel', correct: false },
        { text: 'school', correct: false }
      ]
    },
    {
      question: '2. “迪拜比上海热。” 是什么意思？',
      pinyin: '“Díbài bǐ Shànghǎi rè.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Dubai is hotter than Shanghai.', correct: true },
        { text: 'Shanghai is hotter than Dubai.', correct: false },
        { text: 'Dubai is smaller than Shanghai.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “fast”？',
      pinyin: 'Nǎ yí ge shì “fast”?',
      translation: 'Which one means “fast”?',
      choices: [
        { text: '快', correct: true },
        { text: '慢', correct: false },
        { text: '贵', correct: false }
      ]
    },
    {
      question: '4. “上海没有迪拜热。” 是什么意思？',
      pinyin: '“Shànghǎi méiyǒu Díbài rè.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Shanghai is not as hot as Dubai.', correct: true },
        { text: 'Shanghai is hotter than Dubai.', correct: false },
        { text: 'Shanghai is very cold.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
        { blank: true },
        { py: 'lǚxíng', hz: '旅行', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'bǐ wǒ de chéngshì', hz: '比我的城市', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'méiyǒu Díbài', hz: '没有迪拜', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'I want to travel to ______. ______ is ______ than my city. ______ is not as ______ as Dubai. I think ______ is very interesting.',
    tip: 'Use: 上海、北京、杭州、迪拜、阿布扎比、大、小、热、冷、快、慢。'
  },

  meanings: {
    '我想去': 'I want to go to / أريد أن أذهب إلى',
    '上海': 'Shanghai / شنغهاي',
    '旅行': 'travel / السفر',
    '比': 'compare / يقارن',
    '迪拜': 'Dubai / دبي',
    '比上海': 'than Shanghai / من شنغهاي',
    '热': 'hot / حار',
    '没有迪拜': 'not as...as Dubai / ليس مثل دبي',
    '飞机': 'airplane / طائرة',
    '比火车': 'than a train / من القطار',
    '快': 'fast / سريع',
    '走路': 'walk / المشي',
    '五分钟': 'five minutes / خمس دقائق',
    '苹果': 'apple / تفاحة',
    '比香蕉': 'than a banana / من الموز',
    '大': 'big / كبير',
    '咖啡': 'coffee / قهوة',
    '比水': 'than water / من الماء',
    '贵': 'expensive / غالٍ',
    '今天': 'today / اليوم',
    '比昨天': 'than yesterday / من أمس',
    '冷': 'cold / بارد',
    '你想去': 'you want to go to / تريد أن تذهب إلى',
    '哪里': 'where / أين',
    '热吗': 'is it hot / هل هو حار',
    '很热': 'very hot / حار جدًا',
    '但是': 'but / لكن',
    '大吗': 'is it big / هل هو كبير',
    '比我的城市': 'than my city / من مدينتي',
    '上海的地铁': 'Shanghai metro / مترو شنغهاي',
    '很多': 'many / كثير',
    '我觉得': 'I think / أعتقد',
    '很有意思': 'very interesting / ممتع جدًا',
    '慢': 'slow / بطيء',
    '便宜': 'cheap / رخيص',
    '小': 'small / صغير'
  }
};