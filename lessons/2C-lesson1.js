window.LESSONS = window.LESSONS || {};

window.LESSONS['2C-lesson1'] = {
  id: '2C-lesson1',
  book: '2C',
  lesson: 'Lesson 1',
  title: '我想买一双鞋子。',
  theme: 'Shopping for clothes',
  goal: 'Talk about buying clothes with “想买” and measure words.',
  heroTranslation: 'I want to buy a pair of shoes.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
    { py: 'yì shuāng xiézi', hz: '一双鞋子', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👟', pinyin: 'yì shuāng xiézi', text: '一双鞋子', translation: 'a pair of shoes / زوج من الأحذية' },
    { emoji: '🧦', pinyin: 'yì shuāng wàzi', text: '一双袜子', translation: 'a pair of socks / زوج من الجوارب' },
    { emoji: '👕', pinyin: 'yí jiàn shàngyī', text: '一件上衣', translation: 'a top / قطعة ملابس علوية' },
    { emoji: '👖', pinyin: 'yì tiáo kùzi', text: '一条裤子', translation: 'a pair of pants / بنطال' },
    { emoji: '🥻', pinyin: 'yì tiáo chángpáo', text: '一条长袍', translation: 'a robe / عباءة' },
    { emoji: '🧕', pinyin: 'yì tiáo tóujīn', text: '一条头巾', translation: 'a headscarf / حجاب' },
    { emoji: '🛍️', pinyin: 'xiǎng mǎi', text: '想买', translation: 'want to buy / يريد أن يشتري' },
    { emoji: '👗', pinyin: 'chuānzhe', text: '穿着', translation: 'wearing / يرتدي' },
    { emoji: '🤍', pinyin: 'báisè de', text: '白色的', translation: 'white / أبيض' },
    { emoji: '✅', pinyin: 'héshì', text: '合适', translation: 'suitable / مناسب' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
        { py: 'yì shuāng xiézi', hz: '一双鞋子', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I want to buy a pair of shoes. / أريد أن أشتري زوجًا من الأحذية.'
    },
    {
      tokens: [
        { py: 'Tā', hz: '她', cls: 'person' },
        { py: 'chuānzhe', hz: '穿着', cls: 'activity' },
        { py: 'yì shuāng báisè de wàzi', hz: '一双白色的袜子', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'She is wearing a pair of white socks. / هي ترتدي زوجًا من الجوارب البيضاء.'
    },
    {
      tokens: [
        { py: 'Chuān qǐlái', hz: '穿起来', cls: 'activity' },
        { py: 'héshì ma', hz: '合适吗', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Does it fit well when you wear it? / هل هو مناسب عند ارتدائه؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说想买和穿着',
      translation: 'I want to buy a pair of shoes. I want to buy a top. She is wearing a pair of white socks. He is wearing a pair of black pants. What do you want to buy?',
      tip: 'Reading Goal: Read “想买” and “穿着” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'yì shuāng xiézi', hz: '一双鞋子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy a pair of shoes. / أريد أن أشتري زوجًا من الأحذية.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'yí jiàn shàngyī', hz: '一件上衣', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy a top. / أريد أن أشتري قطعة ملابس علوية.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'chuānzhe', hz: '穿着', cls: 'activity' },
            { py: 'yì shuāng báisè de wàzi', hz: '一双白色的袜子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She is wearing a pair of white socks. / هي ترتدي زوجًا من الجوارب البيضاء.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'chuānzhe', hz: '穿着', cls: 'activity' },
            { py: 'yì tiáo hēisè de kùzi', hz: '一条黑色的裤子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He is wearing a pair of black pants. / هو يرتدي بنطالًا أسود.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you want to buy? / ماذا تريد أن تشتري؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会在商店买鞋子',
      translation: 'Hello, what do you want to buy? I want to buy a pair of shoes. How about this pair of white shoes? They look very nice. Do they fit well when you wear them? They fit very well.',
      tip: 'Pair Work: Role-play shopping for shoes.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ hǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'nǐ', hz: '你', cls: 'person' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Hello, what do you want to buy? / مرحبًا، ماذا تريد أن تشتري؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'yì shuāng xiézi', hz: '一双鞋子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy a pair of shoes. / أريد أن أشتري زوجًا من الأحذية.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shuāng báisè de xiézi', hz: '这双白色的鞋子', cls: 'activity' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How about this pair of white shoes? / ما رأيك في هذا الزوج من الأحذية البيضاء؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn hǎokàn', hz: '很好看', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'They look very nice. / تبدو جميلة جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Chuān qǐlái', hz: '穿起来', cls: 'activity' },
            { py: 'héshì ma', hz: '合适吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do they fit well when you wear them? / هل هي مناسبة عند ارتدائها؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn héshì', hz: '很合适', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'They fit very well. / إنها مناسبة جدًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍明天想买什么',
      translation: 'Tomorrow my mother and I want to go to a shop. I want to buy a pair of shoes, a top, and a pair of pants. My mother wants to buy a robe and a headscarf. We are looking forward to tomorrow.',
      tip: 'Speaking Goal: Talk about what you and your family want to buy tomorrow.',
      lines: [
        {
          tokens: [
            { py: 'Míngtiān', hz: '明天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { py: 'xiǎng qù shāngdiàn', hz: '想去商店', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Tomorrow my mother and I want to go to a shop. / غدًا أنا وأمي نريد الذهاب إلى المتجر.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'yì shuāng xiézi', hz: '一双鞋子', cls: 'activity' },
            { hz: '、' },
            { py: 'yí jiàn shàngyī', hz: '一件上衣', cls: 'activity' },
            { py: 'hái yǒu', hz: '还有', cls: 'activity' },
            { py: 'yì tiáo kùzi', hz: '一条裤子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy a pair of shoes, a top, and a pair of pants. / أريد أن أشتري زوجًا من الأحذية، وقطعة ملابس علوية، وبنطالًا.'
        },
        {
          tokens: [
            { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
            { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
            { py: 'yì tiáo chángpáo', hz: '一条长袍', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'yì tiáo tóujīn', hz: '一条头巾', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My mother wants to buy a robe and a headscarf. / أمي تريد أن تشتري عباءة وحجابًا.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'person' },
            { py: 'hěn qīdài', hz: '很期待', cls: 'like' },
            { py: 'míngtiān', hz: '明天', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'We are looking forward to tomorrow. / نحن نتطلع إلى الغد.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “鞋子” 是什么意思？',
      pinyin: '“Xiézi” shì shénme yìsi?',
      translation: 'What does “鞋子” mean?',
      choices: [
        { text: 'shoes / أحذية', correct: true },
        { text: 'pants / بنطال', correct: false },
        { text: 'headscarf / حجاب', correct: false }
      ]
    },
    {
      question: '2. “我想买一双鞋子。” 是什么意思？',
      pinyin: '“Wǒ xiǎng mǎi yì shuāng xiézi.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I want to buy a pair of shoes.', correct: true },
        { text: 'I bought one mobile phone.', correct: false },
        { text: 'I am wearing black pants.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你想买什么？',
      promptPinyin: 'Nǐ xiǎng mǎi shénme?',
      choices: [
        { text: '我想买一双鞋子。', pinyin: 'Wǒ xiǎng mǎi yì shuāng xiézi.', correct: true },
        { text: '我早饭一般吃面包。', pinyin: 'Wǒ zǎofàn yìbān chī miànbāo.', correct: false }
      ]
    },
    {
      question: '4. “很合适” 是什么意思？',
      pinyin: '“Hěn héshì” shì shénme yìsi?',
      translation: 'What does “很合适” mean?',
      choices: [
        { text: 'very suitable / fits well', correct: true },
        { text: 'very busy', correct: false },
        { text: 'very hungry', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Míngtiān', hz: '明天', cls: 'time' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'xiǎng qù', hz: '想去', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
        { py: 'xiǎng mǎi', hz: '想买', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { py: 'hěn hǎokàn', hz: '很好看', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'Tomorrow I want to go to ______. I want to buy ______. My mother wants to buy ______. I think ______ looks very nice.',
    tip: 'Use clothing words: 一双鞋子、一双袜子、一件上衣、一条裤子、一条长袍、一条头巾。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '她': 'she / هي',
    '他': 'he / هو',
    '我们': 'we / نحن',
    '妈妈': 'mother / أم',
    '我妈妈': 'my mother / أمي',
    '明天': 'tomorrow / غدًا',
    '想': 'want / يريد',
    '买': 'buy / يشتري',
    '想买': 'want to buy / يريد أن يشتري',
    '想去': 'want to go / يريد أن يذهب',
    '想去商店': 'want to go to the shop / يريد الذهاب إلى المتجر',
    '商店': 'shop / متجر',
    '穿着': 'wearing / يرتدي',
    '穿起来': 'when wearing / عند الارتداء',
    '怎么样': 'how about / ما رأيك',
    '合适': 'suitable / مناسب',
    '很合适': 'fits very well / مناسب جدًا',
    '好看': 'nice-looking / جميل',
    '很好看': 'very nice-looking / جميل جدًا',
    '期待': 'look forward to / يتطلع إلى',
    '很期待': 'look forward to very much / يتطلع بشدة',
    '白色的': 'white / أبيض',
    '黑色的': 'black / أسود',
    '鞋子': 'shoes / أحذية',
    '袜子': 'socks / جوارب',
    '上衣': 'top / ملابس علوية',
    '裤子': 'pants / بنطال',
    '长袍': 'robe / عباءة',
    '头巾': 'headscarf / حجاب',
    '一双鞋子': 'a pair of shoes / زوج من الأحذية',
    '一双袜子': 'a pair of socks / زوج من الجوارب',
    '一件上衣': 'a top / قطعة ملابس علوية',
    '一条裤子': 'a pair of pants / بنطال',
    '一条长袍': 'a robe / عباءة',
    '一条头巾': 'a headscarf / حجاب',
    '一双白色的袜子': 'a pair of white socks / زوج من الجوارب البيضاء',
    '一条黑色的裤子': 'a pair of black pants / بنطال أسود',
    '和': 'and / و',
    '还有': 'also / and also / وكذلك'
  }
};