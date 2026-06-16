window.LESSONS = window.LESSONS || {};

window.LESSONS['2C-lesson2'] = {
  id: '2C-lesson2',
  book: '2C',
  lesson: 'Lesson 2',
  title: '一共七百三十八元。',
  theme: 'Shopping and payment',
  goal: 'Ask prices and say the total price with “多少钱 / 一共 / 元”.',
  heroTranslation: 'Altogether it is 738 yuan.',
  titleTokens: [
    { py: 'Yígòng', hz: '一共', cls: 'activity' },
    { py: 'qībǎi sānshíbā', hz: '七百三十八', cls: 'activity' },
    { py: 'yuán', hz: '元', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '💰', pinyin: 'qián', text: '钱', translation: 'money / مال' },
    { emoji: '💴', pinyin: 'yuán', text: '元', translation: 'yuan / يوان' },
    { emoji: '💵', pinyin: 'dílāmǔ', text: '迪拉姆', translation: 'dirham / درهم' },
    { emoji: '🔢', pinyin: 'bǎi', text: '百', translation: 'hundred / مئة' },
    { emoji: '🧾', pinyin: 'yígòng', text: '一共', translation: 'altogether / الإجمالي' },
    { emoji: '❓', pinyin: 'duōshǎo qián', text: '多少钱', translation: 'how much money / كم السعر' },
    { emoji: '📱', pinyin: 'sǎomǎ zhīfù', text: '扫码支付', translation: 'scan to pay / الدفع بالمسح' },
    { emoji: '📍', pinyin: 'zhèlǐ', text: '这里', translation: 'here / هنا' },
    { emoji: '👟', pinyin: 'zhè shuāng xiézi', text: '这双鞋子', translation: 'this pair of shoes / هذا الزوج من الأحذية' },
    { emoji: '👕', pinyin: 'zhè jiàn shàngyī', text: '这件上衣', translation: 'this top / هذه القطعة العلوية' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Zhè shuāng xiézi', hz: '这双鞋子', cls: 'activity' },
        { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How much is this pair of shoes? / كم سعر هذا الزوج من الأحذية؟'
    },
    {
      tokens: [
        { py: 'Yígòng', hz: '一共', cls: 'activity' },
        { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How much is it altogether? / كم المجموع؟'
    },
    {
      tokens: [
        { py: 'Yígòng', hz: '一共', cls: 'activity' },
        { py: 'qībǎi sānshíbā', hz: '七百三十八', cls: 'activity' },
        { py: 'yuán', hz: '元', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Altogether it is 738 yuan. / المجموع 738 يوان.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会问价格',
      translation: 'How much is this pair of shoes? This top is 50 yuan. This pair of socks is 10 yuan. How much is it altogether?',
      tip: 'Reading Goal: Read “多少钱 / 元 / 一共” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Zhè shuāng xiézi', hz: '这双鞋子', cls: 'activity' },
            { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How much is this pair of shoes? / كم سعر هذا الزوج من الأحذية؟'
        },
        {
          tokens: [
            { py: 'Zhè jiàn shàngyī', hz: '这件上衣', cls: 'activity' },
            { py: 'wǔshí yuán', hz: '五十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This top is 50 yuan. / هذه القطعة العلوية بخمسين يوان.'
        },
        {
          tokens: [
            { py: 'Zhè shuāng wàzi', hz: '这双袜子', cls: 'activity' },
            { py: 'shí yuán', hz: '十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This pair of socks is 10 yuan. / هذا الزوج من الجوارب بعشرة يوان.'
        },
        {
          tokens: [
            { py: 'Yígòng', hz: '一共', cls: 'activity' },
            { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How much is it altogether? / كم المجموع؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问一共多少钱',
      translation: 'How much is this pair of shoes? It is 350 yuan. How much is this top? It is 80 yuan. How much is it altogether? Altogether it is 430 yuan.',
      tip: 'Pair Work: Ask prices and calculate the total.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shuāng xiézi', hz: '这双鞋子', cls: 'activity' },
            { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How much is this pair of shoes? / كم سعر هذا الزوج من الأحذية؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Sānbǎi wǔshí yuán', hz: '三百五十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It is 350 yuan. / السعر 350 يوان.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè jiàn shàngyī', hz: '这件上衣', cls: 'activity' },
            { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How much is this top? / كم سعر هذه القطعة العلوية؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bāshí yuán', hz: '八十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It is 80 yuan. / السعر 80 يوان.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yígòng', hz: '一共', cls: 'activity' },
            { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How much is it altogether? / كم المجموع؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yígòng', hz: '一共', cls: 'activity' },
            { py: 'sìbǎi sānshí yuán', hz: '四百三十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Altogether it is 430 yuan. / المجموع 430 يوان.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍购物和付款',
      translation: 'Today my mother and I go to a shop. I want to buy a pair of shoes and a top. My mother wants to buy a robe. My shoes are 300 yuan, the top is 80 yuan, and my mother’s robe is 350 yuan. Altogether it is 730 yuan. My mother scans with her phone to pay.',
      tip: 'Speaking Goal: Say what you want to buy, the prices, the total, and how to pay.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { py: 'qù shāngdiàn', hz: '去商店', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Today my mother and I go to a shop. / اليوم أذهب أنا وأمي إلى المتجر.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yào mǎi', hz: '要买', cls: 'activity' },
            { py: 'yì shuāng xiézi', hz: '一双鞋子', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'yí jiàn shàngyī', hz: '一件上衣', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy a pair of shoes and a top. / أريد شراء زوج من الأحذية وقطعة ملابس علوية.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'yào mǎi', hz: '要买', cls: 'activity' },
            { py: 'yì tiáo chángpáo', hz: '一条长袍', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My mother wants to buy a robe. / أمي تريد شراء عباءة.'
        },
        {
          tokens: [
            { py: 'Wǒ de xiézi', hz: '我的鞋子', cls: 'activity' },
            { py: 'sānbǎi yuán', hz: '三百元', cls: 'activity' },
            { hz: '，' },
            { py: 'shàngyī', hz: '上衣', cls: 'activity' },
            { py: 'bāshí yuán', hz: '八十元', cls: 'activity' },
            { hz: '，' },
            { py: 'māma de chángpáo', hz: '妈妈的长袍', cls: 'activity' },
            { py: 'sānbǎi wǔshí yuán', hz: '三百五十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My shoes are 300 yuan, the top is 80 yuan, and my mother’s robe is 350 yuan. / حذائي بثلاثمئة يوان، والقطعة العلوية بثمانين يوان، وعباءة أمي بثلاثمئة وخمسين يوان.'
        },
        {
          tokens: [
            { py: 'Yígòng', hz: '一共', cls: 'activity' },
            { py: 'qībǎi sānshí yuán', hz: '七百三十元', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Altogether it is 730 yuan. / المجموع 730 يوان.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'yòng shǒujī', hz: '用手机', cls: 'activity' },
            { py: 'sǎomǎ zhīfù', hz: '扫码支付', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My mother scans with her phone to pay. / أمي تستخدم الهاتف للمسح والدفع.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “多少钱” 是什么意思？',
      pinyin: '“Duōshǎo qián” shì shénme yìsi?',
      translation: 'What does “多少钱” mean?',
      choices: [
        { text: 'how much money / كم السعر', correct: true },
        { text: 'where / أين', correct: false },
        { text: 'what do you want / ماذا تريد', correct: false }
      ]
    },
    {
      question: '2. “一共七百三十元。” 是什么意思？',
      pinyin: '“Yígòng qībǎi sānshí yuán.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Altogether it is 730 yuan.', correct: true },
        { text: 'This pair of shoes is 300 yuan.', correct: false },
        { text: 'My mother wants to buy a robe.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '这双鞋子多少钱？',
      promptPinyin: 'Zhè shuāng xiézi duōshǎo qián?',
      choices: [
        { text: '三百元。', pinyin: 'Sānbǎi yuán.', correct: true },
        { text: '我喜欢吃米饭。', pinyin: 'Wǒ xǐhuan chī mǐfàn.', correct: false }
      ]
    },
    {
      question: '4. “迪拉姆” 是什么意思？',
      pinyin: '“Dílāmǔ” shì shénme yìsi?',
      translation: 'What does “迪拉姆” mean?',
      choices: [
        { text: 'dirham / درهم', correct: true },
        { text: 'yuan / يوان', correct: false },
        { text: 'hundred / مئة', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yào mǎi', hz: '要买', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zhè shuāng xiézi', hz: '这双鞋子', cls: 'activity' },
        { blank: true },
        { py: 'yuán', hz: '元', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Zhè jiàn shàngyī', hz: '这件上衣', cls: 'activity' },
        { blank: true },
        { py: 'dílāmǔ', hz: '迪拉姆', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Yígòng', hz: '一共', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I want to buy ______. This pair of shoes is ______ yuan. This top is ______ dirhams. Altogether it is ______.',
    tip: 'Use price words: 十元、五十元、八十元、三百元、三百五十元、七百三十元、迪拉姆。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '妈妈': 'mother / أم',
    '今天': 'today / اليوم',
    '和': 'and / و',
    '去商店': 'go to a shop / يذهب إلى المتجر',
    '要买': 'want to buy / يريد شراء',
    '钱': 'money / مال',
    '元': 'yuan / يوان',
    '迪拉姆': 'dirham / درهم',
    '百': 'hundred / مئة',
    '多少钱': 'how much money / كم السعر',
    '一共': 'altogether / الإجمالي',
    '一共多少钱': 'How much is it altogether? / كم المجموع؟',
    '这里': 'here / هنا',
    '支付': 'pay / يدفع',
    '扫码支付': 'scan to pay / الدفع بالمسح',
    '用手机': 'use a mobile phone / يستخدم الهاتف',
    '用手机扫码支付': 'scan with a phone to pay / يستخدم الهاتف للمسح والدفع',
    '这双鞋子': 'this pair of shoes / هذا الزوج من الأحذية',
    '这件上衣': 'this top / هذه القطعة العلوية',
    '我的鞋子': 'my shoes / حذائي',
    '妈妈的长袍': 'mother’s robe / عباءة أمي',
    '一双鞋子': 'a pair of shoes / زوج من الأحذية',
    '一件上衣': 'a top / قطعة ملابس علوية',
    '一条长袍': 'a robe / عباءة',
    '三百元': '300 yuan / ٣٠٠ يوان',
    '八十元': '80 yuan / ٨٠ يوان',
    '三百五十元': '350 yuan / ٣٥٠ يوان',
    '七百三十元': '730 yuan / ٧٣٠ يوان',
    '七百三十八元': '738 yuan / ٧٣٨ يوان',
    '请慢走': 'please take care / مع السلامة'
  }
};