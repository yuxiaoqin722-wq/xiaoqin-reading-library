window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson6'] = {
  id: '4A-lesson6',
  book: '4A',
  lesson: 'Lesson 6',
  title: '又酸又甜，味道很好。',
  theme: 'Food and Taste',
  goal: 'Describe food taste using 又……又…… and 味道怎么样.',
  heroTranslation: 'It is both sour and sweet, and it tastes very good.',

  titleTokens: [
    { py: 'Yòu suān', hz: '又酸', cls: 'not-like' },
    { py: 'yòu tián', hz: '又甜', cls: 'like' },
    { hz: '，' },
    { py: 'wèidào hěn hǎo', hz: '味道很好', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🍋', pinyin: 'suān', text: '酸', translation: 'sour / حامض' },
    { emoji: '🍯', pinyin: 'tián', text: '甜', translation: 'sweet / حلو' },
    { emoji: '☕', pinyin: 'kǔ', text: '苦', translation: 'bitter / مُرّ' },
    { emoji: '🌶️', pinyin: 'là', text: '辣', translation: 'spicy / حار' },
    { emoji: '👅', pinyin: 'wèidào', text: '味道', translation: 'taste / نكهة' },
    { emoji: '🐟', pinyin: 'tángcùyú', text: '糖醋鱼', translation: 'sweet and sour fish / سمك حلو وحامض' },
    { emoji: '🥢', pinyin: 'cháng yi cháng', text: '尝一尝', translation: 'try a taste / تذوق' },
    { emoji: '🍚', pinyin: 'cài', text: '菜', translation: 'dish; food / طبق' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wèidào', hz: '味道', cls: 'activity' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
        { hz: '？' }
      ],
      translation: 'How does it taste? / كيف طعمه؟'
    },
    {
      tokens: [
        { py: 'Yòu suān', hz: '又酸', cls: 'not-like' },
        { py: 'yòu tián', hz: '又甜', cls: 'like' },
        { hz: '，' },
        { py: 'wèidào hěn hǎo', hz: '味道很好', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'It is both sour and sweet, and it tastes very good. / إنه حامض وحلو في الوقت نفسه، وطعمه جيد جدًا.'
    },
    {
      tokens: [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { py: 'chī tángcùyú', hz: '吃糖醋鱼', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I like eating sweet and sour fish. / أحب أكل السمك الحلو والحامض.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'cháng yi cháng', hz: '尝一尝', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I will try a taste. / سأجرب التذوق.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说味道',
      translation: 'How is this orange? It is both sour and sweet. It tastes very good. This dish is a little spicy. I like eating it.',
      tip: 'Reading Goal: Describe simple tastes.',
      lines: [
        {
          tokens: [
            { py: 'Zhè ge chéngzi', hz: '这个橙子', cls: 'activity' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'How is this orange? / كيف هذه البرتقالة؟'
        },
        {
          tokens: [
            { py: 'Yòu suān', hz: '又酸', cls: 'not-like' },
            { py: 'yòu tián', hz: '又甜', cls: 'like' },
            { hz: '，' },
            { py: 'wèidào hěn hǎo', hz: '味道很好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is both sour and sweet, and it tastes very good. / إنها حامضة وحلوة في الوقت نفسه، وطعمها جيد جدًا.'
        },
        {
          tokens: [
            { py: 'Zhè ge cài', hz: '这个菜', cls: 'activity' },
            { py: 'yǒu yìdiǎnr là', hz: '有一点儿辣', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'This dish is a little spicy. / هذا الطبق حار قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'chī', hz: '吃', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating it. / أحب أكله.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会介绍菜的味道',
      translation: 'This is the dish my mother made. How does it taste? This dish is both sour and sweet, and it tastes very good. I will try a taste. It is really delicious. Do you like it? I like it. I want to eat a little more.',
      tip: 'Pair Work: Ask about food taste and respond politely.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'self' },
            { py: 'wǒ māma zuò de cài', hz: '我妈妈做的菜', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'This is the dish my mother made. / هذا الطبق أعدته أمي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wèidào', hz: '味道', cls: 'activity' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'How does it taste? / كيف طعمه؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè ge cài', hz: '这个菜', cls: 'activity' },
            { py: 'yòu suān', hz: '又酸', cls: 'not-like' },
            { py: 'yòu tián', hz: '又甜', cls: 'like' },
            { hz: '，' },
            { py: 'wèidào hěn hǎo', hz: '味道很好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This dish is both sour and sweet, and it tastes very good. / هذا الطبق حامض وحلو في الوقت نفسه، وطعمه جيد جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'cháng yi cháng', hz: '尝一尝', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I will try a taste. / سأجرب التذوق.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhēn hǎochī', hz: '真好吃', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'It is really delicious! / إنه لذيذ حقًا!'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan ma', hz: '你喜欢吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Do you like it? / هل يعجبك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xǐhuan', hz: '喜欢', cls: 'like' },
            { hz: '，' },
            { py: 'wǒ hái xiǎng', hz: '我还想', cls: 'self' },
            { py: 'chī yìdiǎnr', hz: '吃一点儿', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like it. I want to eat a little more. / يعجبني، وأريد أن آكل قليلًا بعد.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲朋友来我家吃饭',
      translation: 'On Saturday evening, my friend came to my home for dinner. Mom made many dishes. Some dishes were sweet, and some dishes were a little spicy. I liked sweet and sour fish the most. Sweet and sour fish is both sour and sweet, and it tastes very good. After my friend ate it, she also liked it. She said Chinese food was really delicious.',
      tip: 'Speaking Goal: Tell a short story about eating together and describing taste.',
      lines: [
        {
          tokens: [
            { py: 'Xīngqīliù wǎnshang', hz: '星期六晚上', cls: 'time' },
            { hz: '，' },
            { py: 'péngyou', hz: '朋友', cls: 'person' },
            { py: 'lái wǒ jiā chī fàn', hz: '来我家吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'On Saturday evening, my friend came to my home for dinner. / مساء السبت، جاءت صديقتي إلى بيتي لتناول العشاء.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'zuò le hěn duō cài', hz: '做了很多菜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Mom made many dishes. / أعدت أمي كثيرًا من الأطباق.'
        },
        {
          tokens: [
            { py: 'Yǒu de cài', hz: '有的菜', cls: 'activity' },
            { py: 'shì tián de', hz: '是甜的', cls: 'like' },
            { hz: '，' },
            { py: 'yǒu de cài', hz: '有的菜', cls: 'activity' },
            { py: 'yǒu yìdiǎnr là', hz: '有一点儿辣', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Some dishes were sweet, and some dishes were a little spicy. / بعض الأطباق كانت حلوة، وبعضها كان حارًا قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ zuì xǐhuan', hz: '我最喜欢', cls: 'like' },
            { py: 'tángcùyú', hz: '糖醋鱼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I liked sweet and sour fish the most. / أحببت السمك الحلو والحامض أكثر شيء.'
        },
        {
          tokens: [
            { py: 'Tángcùyú', hz: '糖醋鱼', cls: 'activity' },
            { py: 'yòu suān', hz: '又酸', cls: 'not-like' },
            { py: 'yòu tián', hz: '又甜', cls: 'like' },
            { hz: '，' },
            { py: 'wèidào hěn hǎo', hz: '味道很好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Sweet and sour fish is both sour and sweet, and it tastes very good. / السمك الحلو والحامض حامض وحلو في الوقت نفسه، وطعمه جيد جدًا.'
        },
        {
          tokens: [
            { py: 'Péngyou chī le yǐhòu', hz: '朋友吃了以后', cls: 'person' },
            { py: 'yě hěn xǐhuan', hz: '也很喜欢', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'After my friend ate it, she also liked it. / بعد أن أكلته صديقتي، أعجبها أيضًا.'
        },
        {
          tokens: [
            { py: 'Tā shuō', hz: '她说', cls: 'person' },
            { hz: '，' },
            { py: 'Zhōngguó cài', hz: '中国菜', cls: 'country' },
            { py: 'zhēn hǎochī', hz: '真好吃', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'She said Chinese food was really delicious. / قالت إن الطعام الصيني لذيذ حقًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “又酸又甜” 是什么意思？',
      pinyin: '“Yòu suān yòu tián” shì shénme yìsi?',
      translation: 'What does this phrase mean?',
      choices: [
        { text: 'both sour and sweet', correct: true },
        { text: 'both bitter and spicy', correct: false },
        { text: 'very salty', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “spicy”？',
      pinyin: 'Nǎ yí ge shì “spicy”?',
      translation: 'Which one means “spicy”?',
      choices: [
        { text: '辣', correct: true },
        { text: '甜', correct: false },
        { text: '苦', correct: false }
      ]
    },
    {
      question: '3. “味道怎么样？” 是什么意思？',
      pinyin: '“Wèidào zěnmeyàng?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How does it taste?', correct: true },
        { text: 'Where is the dish?', correct: false },
        { text: 'Who cooked it?', correct: false }
      ]
    },
    {
      question: '4. “我尝一尝。” 是什么意思？',
      pinyin: '“Wǒ cháng yi cháng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I will try a taste.', correct: true },
        { text: 'I want to drink water.', correct: false },
        { text: 'I do not like it.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhè ge cài', hz: '这个菜', cls: 'activity' },
        { py: 'wèidào', hz: '味道', cls: 'activity' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
        { hz: '？' }
      ],
      [
        { py: 'Yòu', hz: '又', cls: 'activity' },
        { blank: true },
        { py: 'yòu', hz: '又', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'wèidào hěn hǎo', hz: '味道很好', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'cháng yi cháng', hz: '尝一尝', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { py: 'chī', hz: '吃', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'How does this dish taste? It is both ______ and ______, and it tastes very good. I will try a taste. I like eating ______.',
    tip: 'Use: 酸、甜、苦、辣、糖醋鱼、橙子、中国菜。'
  },

  meanings: {
    '酸': 'sour / حامض',
    '甜': 'sweet / حلو',
    '苦': 'bitter / مر',
    '辣': 'spicy / حار',
    '味道': 'taste / نكهة',
    '味道很好': 'tastes very good / طعمه جيد جدًا',
    '味道怎么样': 'how does it taste / كيف طعمه',
    '又酸': 'also sour / حامض أيضًا',
    '又甜': 'also sweet / حلو أيضًا',
    '又酸又甜': 'both sour and sweet / حامض وحلو في الوقت نفسه',
    '有一点儿辣': 'a little spicy / حار قليلًا',
    '糖醋鱼': 'sweet and sour fish / سمك حلو وحامض',
    '尝一尝': 'try a taste / تذوق',
    '我尝一尝': 'I will try a taste / سأجرب التذوق',
    '菜': 'dish; food / طبق',
    '这个菜': 'this dish / هذا الطبق',
    '这个橙子': 'this orange / هذه البرتقالة',
    '怎么样': 'how is it / كيف هو',
    '吃': 'eat / يأكل',
    '吃糖醋鱼': 'eat sweet and sour fish / يأكل السمك الحلو والحامض',
    '真好吃': 'really delicious / لذيذ حقًا',
    '你喜欢吗': 'do you like it / هل يعجبك',
    '喜欢': 'like / يعجبني',
    '我还想': 'I also want to / أريد أيضًا',
    '吃一点儿': 'eat a little / آكل قليلًا',
    '我妈妈做的菜': 'the dish my mother made / الطبق الذي أعدته أمي',
    '妈妈': 'mom / أمي',
    '做了很多菜': 'made many dishes / أعدت كثيرًا من الأطباق',
    '有的菜': 'some dishes / بعض الأطباق',
    '是甜的': 'is sweet / حلو',
    '我最喜欢': 'I like the most / أحب أكثر شيء',
    '朋友吃了以后': 'after my friend ate it / بعد أن أكلته صديقتي',
    '也很喜欢': 'also liked it / أعجبها أيضًا',
    '她说': 'she said / قالت',
    '中国菜': 'Chinese food / الطعام الصيني'
  }
};