window.LESSONS = window.LESSONS || {};

window.LESSONS['3C-lesson3'] = {
  id: '3C-lesson3',
  book: '3C',
  lesson: 'Lesson 3',
  title: '能便宜一点儿吗？',
  theme: 'Shopping and Comparison',
  goal: 'Compare clothes and ask for a lower price using 一样、更、一点儿.',
  heroTranslation: 'Can it be a little cheaper?',

  titleTokens: [
    { py: 'Néng', hz: '能', cls: 'activity' },
    { py: 'piányi yìdiǎnr', hz: '便宜一点儿', cls: 'time' },
    { py: 'ma', hz: '吗', cls: 'speaker' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '👗', pinyin: 'yīfu', text: '衣服', translation: 'clothes / ملابس' },
    { emoji: '👘', pinyin: 'Hànfú', text: '汉服', translation: 'Hanfu / هانفو' },
    { emoji: '🔵', pinyin: 'lánsè de', text: '蓝色的', translation: 'blue one / الأزرق' },
    { emoji: '🟢', pinyin: 'lǜsè de', text: '绿色的', translation: 'green one / الأخضر' },
    { emoji: '🔴', pinyin: 'hóngsè de', text: '红色的', translation: 'red one / الأحمر' },
    { emoji: '📏', pinyin: 'cháng', text: '长', translation: 'long / طويل' },
    { emoji: '📐', pinyin: 'duǎn', text: '短', translation: 'short / قصير' },
    { emoji: '💰', pinyin: 'guì', text: '贵', translation: 'expensive / غالي' },
    { emoji: '🏷️', pinyin: 'piányi', text: '便宜', translation: 'cheap / رخيص' },
    { emoji: '✅', pinyin: 'héshì', text: '合适', translation: 'suitable / مناسب' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Zhè jiàn lánsè de yīfu', hz: '这件蓝色的衣服', cls: 'activity' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
        { hz: '？' }
      ],
      translation: 'How is this blue piece of clothing? / كيف هذه الملابس الزرقاء؟'
    },
    {
      tokens: [
        { py: 'Zhè jiàn', hz: '这件', cls: 'activity' },
        { py: 'gēn lánsè de', hz: '跟蓝色的', cls: 'country' },
        { py: 'yíyàng cháng', hz: '一样长', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'This one is as long as the blue one. / هذه طويلة مثل الزرقاء.'
    },
    {
      tokens: [
        { py: 'Zhè jiàn', hz: '这件', cls: 'activity' },
        { py: 'duǎn yìdiǎnr', hz: '短一点儿', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'This one is a little shorter. / هذه أقصر قليلًا.'
    },
    {
      tokens: [
        { py: 'Tài guì le', hz: '太贵了', cls: 'not-like' },
        { hz: '，' },
        { py: 'néng piányi yìdiǎnr ma', hz: '能便宜一点儿吗', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'It is too expensive. Can it be a little cheaper? / إنها غالية جدًا. هل يمكن أن تكون أرخص قليلًا؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会比较衣服',
      translation: 'This blue clothing is very beautiful. This green clothing is very long. This red clothing is a little shorter. This clothing is very suitable. It is too expensive. Can it be a little cheaper?',
      tip: 'Reading Goal: Compare clothes using colors, length and price.',
      lines: [
        {
          tokens: [
            { py: 'Zhè jiàn lánsè de yīfu', hz: '这件蓝色的衣服', cls: 'activity' },
            { py: 'hěn hǎokàn', hz: '很好看', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This blue clothing is very beautiful. / هذه الملابس الزرقاء جميلة جدًا.'
        },
        {
          tokens: [
            { py: 'Zhè jiàn lǜsè de yīfu', hz: '这件绿色的衣服', cls: 'activity' },
            { py: 'hěn cháng', hz: '很长', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This green clothing is very long. / هذه الملابس الخضراء طويلة جدًا.'
        },
        {
          tokens: [
            { py: 'Zhè jiàn hóngsè de yīfu', hz: '这件红色的衣服', cls: 'activity' },
            { py: 'duǎn yìdiǎnr', hz: '短一点儿', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This red clothing is a little shorter. / هذه الملابس الحمراء أقصر قليلًا.'
        },
        {
          tokens: [
            { py: 'Zhè jiàn yīfu', hz: '这件衣服', cls: 'activity' },
            { py: 'hěn héshì', hz: '很合适', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This clothing is very suitable. / هذه الملابس مناسبة جدًا.'
        },
        {
          tokens: [
            { py: 'Tài guì le', hz: '太贵了', cls: 'not-like' },
            { hz: '，' },
            { py: 'néng piányi yìdiǎnr ma', hz: '能便宜一点儿吗', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'It is too expensive. Can it be a little cheaper? / إنها غالية جدًا. هل يمكن أن تكون أرخص قليلًا؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会买衣服',
      translation: 'How is this blue clothing? It is beautiful, but it is too long. How about this green one? This green one is as long as the blue one. How about this red one? This red one is a little shorter and very suitable. How much is it? Fifty dirhams. It is too expensive. Can it be a little cheaper?',
      tip: 'Pair Work: Compare different clothes clearly by color.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè jiàn lánsè de yīfu', hz: '这件蓝色的衣服', cls: 'activity' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'How is this blue clothing? / كيف هذه الملابس الزرقاء؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn hǎokàn', hz: '很好看', cls: 'like' },
            { hz: '，' },
            { py: 'dànshì tài cháng le', hz: '但是太长了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'It is beautiful, but it is too long. / إنها جميلة، لكنها طويلة جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè jiàn lǜsè de ne', hz: '这件绿色的呢', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How about this green one? / وماذا عن هذه الخضراء؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè jiàn lǜsè de', hz: '这件绿色的', cls: 'activity' },
            { py: 'gēn lánsè de', hz: '跟蓝色的', cls: 'country' },
            { py: 'yíyàng cháng', hz: '一样长', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This green one is as long as the blue one. / هذه الخضراء طويلة مثل الزرقاء.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nà zhè jiàn hóngsè de ne', hz: '那这件红色的呢', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Then how about this red one? / إذن ماذا عن هذه الحمراء؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè jiàn hóngsè de', hz: '这件红色的', cls: 'activity' },
            { py: 'duǎn yìdiǎnr', hz: '短一点儿', cls: 'time' },
            { hz: '，' },
            { py: 'yě hěn héshì', hz: '也很合适', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This red one is a little shorter and also very suitable. / هذه الحمراء أقصر قليلًا ومناسبة جدًا أيضًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duōshao qián', hz: '多少钱', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How much is it? / كم سعرها؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǔshí dílāmǔ', hz: '五十迪拉姆', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Fifty dirhams. / خمسون درهمًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tài guì le', hz: '太贵了', cls: 'not-like' },
            { hz: '，' },
            { py: 'néng piányi yìdiǎnr ma', hz: '能便宜一点儿吗', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'It is too expensive. Can it be a little cheaper? / إنها غالية جدًا. هل يمكن أن تكون أرخص قليلًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo ba', hz: '好吧', cls: 'like' },
            { hz: '，' },
            { py: 'sìshí dílāmǔ', hz: '四十迪拉姆', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Okay, forty dirhams. / حسنًا، أربعون درهمًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲买汉服的经历',
      translation: 'Next week, our school has Chinese Culture Day. I want to buy one piece of Hanfu. I first looked at a blue Hanfu. I like blue very much, but this one was too long. Later, I looked at a green Hanfu. This one was as long as the blue one. Finally, I looked at a red Hanfu. This one was a little shorter and very suitable. It was fifty dirhams. I thought it was a little expensive. I asked the shop assistant if it could be a little cheaper. Finally, I bought this red Hanfu. I was very happy.',
      tip: 'Speaking Goal: Tell a short shopping story with comparison and price.',
      lines: [
        {
          tokens: [
            { py: 'Xià zhōu', hz: '下周', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen xuéxiào', hz: '我们学校', cls: 'place' },
            { py: 'yǒu Zhōngguó Wénhuà Rì', hz: '有中国文化日', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Next week, our school has Chinese Culture Day. / الأسبوع القادم، في مدرستنا يوم الثقافة الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng mǎi', hz: '我想买', cls: 'self' },
            { py: 'yí jiàn Hànfú', hz: '一件汉服', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy one piece of Hanfu. / أريد أن أشتري هانفو.'
        },
        {
          tokens: [
            { py: 'Wǒ xiān kàn le', hz: '我先看了', cls: 'self' },
            { py: 'yí jiàn lánsè de Hànfú', hz: '一件蓝色的汉服', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I first looked at a blue Hanfu. / أولًا رأيت هانفو أزرق.'
        },
        {
          tokens: [
            { py: 'Wǒ hěn xǐhuan lánsè', hz: '我很喜欢蓝色', cls: 'like' },
            { hz: '，' },
            { py: 'dànshì zhè jiàn', hz: '但是这件', cls: 'activity' },
            { py: 'tài cháng le', hz: '太长了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I like blue very much, but this one was too long. / أحب اللون الأزرق كثيرًا، لكن هذه كانت طويلة جدًا.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ kàn le', hz: '我看了', cls: 'self' },
            { py: 'yí jiàn lǜsè de Hànfú', hz: '一件绿色的汉服', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Later, I looked at a green Hanfu. / بعد ذلك، رأيت هانفو أخضر.'
        },
        {
          tokens: [
            { py: 'Zhè jiàn', hz: '这件', cls: 'activity' },
            { py: 'gēn lánsè de', hz: '跟蓝色的', cls: 'country' },
            { py: 'yíyàng cháng', hz: '一样长', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This one was as long as the blue one. / هذه كانت طويلة مثل الزرقاء.'
        },
        {
          tokens: [
            { py: 'Zuìhòu', hz: '最后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ kàn le', hz: '我看了', cls: 'self' },
            { py: 'yí jiàn hóngsè de Hànfú', hz: '一件红色的汉服', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Finally, I looked at a red Hanfu. / أخيرًا، رأيت هانفو أحمر.'
        },
        {
          tokens: [
            { py: 'Zhè jiàn', hz: '这件', cls: 'activity' },
            { py: 'duǎn yìdiǎnr', hz: '短一点儿', cls: 'time' },
            { hz: '，' },
            { py: 'yě hěn héshì', hz: '也很合适', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This one was a little shorter and also very suitable. / هذه كانت أقصر قليلًا ومناسبة جدًا أيضًا.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '它', cls: 'person' },
            { py: 'wǔshí dílāmǔ', hz: '五十迪拉姆', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It was fifty dirhams. / كان سعرها خمسين درهمًا.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'yǒu yìdiǎnr guì', hz: '有一点儿贵', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I thought it was a little expensive. / شعرت أنها غالية قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ wèn diànyuán', hz: '我问店员', cls: 'self' },
            { hz: '，' },
            { py: 'néng bù néng', hz: '能不能', cls: 'activity' },
            { py: 'piányi yìdiǎnr', hz: '便宜一点儿', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I asked the shop assistant if it could be a little cheaper. / سألت البائعة هل يمكن أن تكون أرخص قليلًا.'
        },
        {
          tokens: [
            { py: 'Zuìhòu', hz: '最后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ mǎi le', hz: '我买了', cls: 'self' },
            { py: 'zhè jiàn hóngsè de Hànfú', hz: '这件红色的汉服', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Finally, I bought this red Hanfu. / أخيرًا، اشتريت هذا الهانفو الأحمر.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I was very happy. / كنت سعيدة جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “能便宜一点儿吗？” 是什么意思？',
      pinyin: '“Néng piányi yìdiǎnr ma?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Can it be a little cheaper?', correct: true },
        { text: 'Can it be longer?', correct: false },
        { text: 'Can I buy two?', correct: false }
      ]
    },
    {
      question: '2. “这件跟蓝色的一样长。” 是什么意思？',
      pinyin: '“Zhè jiàn gēn lánsè de yíyàng cháng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'This one is as long as the blue one.', correct: true },
        { text: 'This one is more expensive than the blue one.', correct: false },
        { text: 'This one is cheaper than the blue one.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “suitable”？',
      pinyin: 'Nǎ yí ge shì “suitable”?',
      translation: 'Which one means “suitable”?',
      choices: [
        { text: '合适', correct: true },
        { text: '贵', correct: false },
        { text: '长', correct: false }
      ]
    },
    {
      question: '4. “这件红色的短一点儿。” 是什么意思？',
      pinyin: '“Zhè jiàn hóngsè de duǎn yìdiǎnr.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'This red one is a little shorter.', correct: true },
        { text: 'This red one is very expensive.', correct: false },
        { text: 'This red one is very long.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ xiǎng mǎi', hz: '我想买', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xiān kàn le', hz: '我先看了', cls: 'self' },
        { blank: true },
        { hz: '，' },
        { py: 'dànshì', hz: '但是', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Hòulái', hz: '后来', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ kàn le', hz: '我看了', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zhè jiàn', hz: '这件', cls: 'activity' },
        { py: 'gēn', hz: '跟', cls: 'country' },
        { blank: true },
        { py: 'yíyàng', hz: '一样', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zuìhòu', hz: '最后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ mǎi le', hz: '我买了', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { hz: '，' },
        { py: 'wǒ hěn kāixīn', hz: '我很开心', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'I want to buy ______. I first looked at ______, but ______. Later, I looked at ______. This one is the same as ______ in ______. Finally, I bought ______. I think ______, and I am very happy.',
    tip: 'Use: 汉服、衣服、蓝色的、绿色的、红色的、太长了、太贵了、长、短、合适、便宜一点儿。'
  },

  meanings: {
    '能': 'can / يستطيع',
    '能不能': 'can or cannot / هل يمكن',
    '便宜': 'cheap / رخيص',
    '便宜一点儿': 'a little cheaper / أرخص قليلًا',
    '能便宜一点儿吗': 'Can it be a little cheaper? / هل يمكن أن يكون أرخص قليلًا؟',
    '衣服': 'clothes / ملابس',
    '汉服': 'Hanfu / هانفو',
    '一件汉服': 'one piece of Hanfu / قطعة هانفو واحدة',
    '这件衣服': 'this piece of clothing / هذه الملابس',
    '这件蓝色的衣服': 'this blue clothing / هذه الملابس الزرقاء',
    '这件绿色的衣服': 'this green clothing / هذه الملابس الخضراء',
    '这件红色的衣服': 'this red clothing / هذه الملابس الحمراء',
    '蓝色的': 'blue one / الأزرق',
    '绿色的': 'green one / الأخضر',
    '红色的': 'red one / الأحمر',
    '一件蓝色的汉服': 'one blue Hanfu / هانفو أزرق',
    '一件绿色的汉服': 'one green Hanfu / هانفو أخضر',
    '一件红色的汉服': 'one red Hanfu / هانفو أحمر',
    '长': 'long / طويل',
    '短': 'short / قصير',
    '短一点儿': 'a little shorter / أقصر قليلًا',
    '太长了': 'too long / طويل جدًا',
    '贵': 'expensive / غالي',
    '太贵了': 'too expensive / غالي جدًا',
    '有一点儿贵': 'a little expensive / غالي قليلًا',
    '合适': 'suitable / مناسب',
    '很合适': 'very suitable / مناسب جدًا',
    '很好看': 'very beautiful / جميل جدًا',
    '怎么样': 'how is it / كيف هو',
    '这件绿色的呢': 'how about this green one / ماذا عن هذه الخضراء',
    '那这件红色的呢': 'then how about this red one / ماذا عن هذه الحمراء',
    '跟蓝色的': 'with the blue one / مع الزرقاء',
    '一样长': 'as long as / بنفس الطول',
    '这件跟蓝色的一样长': 'this one is as long as the blue one / هذه بطول الزرقاء',
    '多少钱': 'how much money / كم السعر',
    '五十迪拉姆': 'fifty dirhams / خمسون درهمًا',
    '四十迪拉姆': 'forty dirhams / أربعون درهمًا',
    '店员': 'shop assistant / بائعة',
    '我问店员': 'I asked the shop assistant / سألت البائعة',
    '我想买': 'I want to buy / أريد أن أشتري',
    '我先看了': 'I first looked at / رأيت أولًا',
    '后来': 'later / بعد ذلك',
    '最后': 'finally / أخيرًا',
    '我看了': 'I looked at / رأيت',
    '我买了': 'I bought / اشتريت',
    '这件红色的汉服': 'this red Hanfu / هذا الهانفو الأحمر',
    '下周': 'next week / الأسبوع القادم',
    '我们学校': 'our school / مدرستنا',
    '中国文化日': 'Chinese Culture Day / يوم الثقافة الصينية',
    '有中国文化日': 'has Chinese Culture Day / يوجد يوم الثقافة الصينية',
    '我很喜欢蓝色': 'I really like blue / أحب اللون الأزرق كثيرًا',
    '但是这件': 'but this one / لكن هذه',
    '我觉得': 'I think; I feel / أعتقد؛ أشعر',
    '我很开心': 'I am very happy / أنا سعيد جدًا',
    '好吧': 'okay / حسنًا'
  }
};