window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson5'] = {
  id: '3A-lesson5',
  book: '3A',
  lesson: 'Lesson 5',
  title: '这件比那件贵100块。',
  theme: 'Shopping and Price Comparison',
  goal: 'Compare prices and make shopping choices using 比, 更 and price expressions.',
  heroTranslation: 'This one is 100 yuan more expensive than that one.',
  titleTokens: [
    { py: 'Zhè jiàn', hz: '这件', cls: 'location' },
    { py: 'bǐ nà jiàn', hz: '比那件', cls: 'location' },
    { py: 'guì yì bǎi kuài', hz: '贵100块', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🖤', pinyin: 'ābāyà', text: '阿巴亚', translation: 'abaya / عباءة' },
    { emoji: '💚', pinyin: 'lǜsè', text: '绿色', translation: 'green / أخضر' },
    { emoji: '⚫', pinyin: 'hēisè', text: '黑色', translation: 'black / أسود' },
    { emoji: '💰', pinyin: 'guì', text: '贵', translation: 'expensive / غالٍ' },
    { emoji: '🏷️', pinyin: 'piányi', text: '便宜', translation: 'cheap / رخيص' },
    { emoji: '➕', pinyin: 'gèng', text: '更', translation: 'more / أكثر' },
    { emoji: '✨', pinyin: 'piàoliang', text: '漂亮', translation: 'beautiful / جميل' },
    { emoji: '💵', pinyin: 'kuài', text: '块', translation: 'yuan / currency unit / يوان' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Zhè jiàn', hz: '这件', cls: 'location' },
        { py: 'lǜsè de ābāyà', hz: '绿色的阿巴亚', cls: 'activity' },
        { py: 'duōshao qián', hz: '多少钱', cls: 'like' },
        { hz: '？' }
      ],
      translation: 'How much is this green abaya? / كم سعر هذه العباءة الخضراء؟'
    },
    {
      tokens: [
        { py: 'Hēisè de', hz: '黑色的', cls: 'like' },
        { py: 'bǐ lǜsè de', hz: '比绿色的', cls: 'like' },
        { py: 'guì yì bǎi kuài', hz: '贵100块', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'The black one is 100 yuan more expensive than the green one. / السوداء أغلى من الخضراء بمئة يوان.'
    },
    {
      tokens: [
        { py: 'Dànshì', hz: '但是', cls: 'time' },
        { py: 'hēisè de', hz: '黑色的', cls: 'like' },
        { py: 'gèng piàoliang', hz: '更漂亮', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'But the black one is more beautiful. / لكن السوداء أجمل.'
    },
    {
      tokens: [
        { py: 'Zuìhòu', hz: '最后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ mǎi le', hz: '我买了', cls: 'self' },
        { py: 'hēisè de ābāyà', hz: '黑色的阿巴亚', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Finally, I bought the black abaya. / في النهاية، اشتريت العباءة السوداء.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会看懂价格',
      translation: 'The green abaya is 500 yuan. The black abaya is 600 yuan. The black abaya is 100 yuan more expensive than the green one. The green abaya is cheaper.',
      tip: 'Reading Goal: Understand prices and simple price comparison.',
      lines: [
        {
          tokens: [
            { py: 'Lǜsè de ābāyà', hz: '绿色的阿巴亚', cls: 'activity' },
            { py: 'wǔ bǎi kuài', hz: '500块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The green abaya is 500 yuan. / العباءة الخضراء بخمسمئة يوان.'
        },
        {
          tokens: [
            { py: 'Hēisè de ābāyà', hz: '黑色的阿巴亚', cls: 'activity' },
            { py: 'liù bǎi kuài', hz: '600块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The black abaya is 600 yuan. / العباءة السوداء بستمئة يوان.'
        },
        {
          tokens: [
            { py: 'Hēisè de ābāyà', hz: '黑色的阿巴亚', cls: 'activity' },
            { py: 'bǐ lǜsè de', hz: '比绿色的', cls: 'like' },
            { py: 'guì yì bǎi kuài', hz: '贵100块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The black abaya is 100 yuan more expensive than the green one. / العباءة السوداء أغلى من الخضراء بمئة يوان.'
        },
        {
          tokens: [
            { py: 'Lǜsè de ābāyà', hz: '绿色的阿巴亚', cls: 'activity' },
            { py: 'bǐjiào piányi', hz: '比较便宜', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The green abaya is cheaper. / العباءة الخضراء أرخص.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问价格',
      translation: 'How much is this green abaya? It is 500 yuan. What about that black abaya? It is 600 yuan. The black one is more expensive, but it is more beautiful.',
      tip: 'Pair Work: Ask prices and compare two items.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè jiàn', hz: '这件', cls: 'location' },
            { py: 'lǜsè de ābāyà', hz: '绿色的阿巴亚', cls: 'activity' },
            { py: 'duōshao qián', hz: '多少钱', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'How much is this green abaya? / كم سعر هذه العباءة الخضراء؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǔ bǎi kuài', hz: '500块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is 500 yuan. / سعرها خمسمئة يوان.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nà jiàn', hz: '那件', cls: 'location' },
            { py: 'hēisè de ābāyà', hz: '黑色的阿巴亚', cls: 'activity' },
            { py: 'ne', hz: '呢', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'What about that black abaya? / وماذا عن تلك العباءة السوداء؟'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Liù bǎi kuài', hz: '600块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is 600 yuan. / سعرها ستمئة يوان.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hēisè de', hz: '黑色的', cls: 'like' },
            { py: 'bǐ lǜsè de', hz: '比绿色的', cls: 'like' },
            { py: 'guì yì bǎi kuài', hz: '贵100块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The black one is 100 yuan more expensive than the green one. / السوداء أغلى من الخضراء بمئة يوان.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Dànshì', hz: '但是', cls: 'time' },
            { py: 'hēisè de', hz: '黑色的', cls: 'like' },
            { py: 'gèng piàoliang', hz: '更漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'But the black one is more beautiful. / لكن السوداء أجمل.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会做购物选择',
      translation: 'I want to buy an abaya. The green abaya is 500 yuan. The black abaya is 600 yuan. The black one is 100 yuan more expensive than the green one, but the black one is more beautiful. Finally, I bought the black abaya because I think it is more beautiful.',
      tip: 'Speaking Goal: Compare prices and explain your shopping choice.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ xiǎng mǎi', hz: '我想买', cls: 'self' },
            { py: 'yí jiàn ābāyà', hz: '一件阿巴亚', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to buy an abaya. / أريد أن أشتري عباءة.'
        },
        {
          tokens: [
            { py: 'Lǜsè de ābāyà', hz: '绿色的阿巴亚', cls: 'activity' },
            { py: 'wǔ bǎi kuài', hz: '500块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The green abaya is 500 yuan. / العباءة الخضراء بخمسمئة يوان.'
        },
        {
          tokens: [
            { py: 'Hēisè de ābāyà', hz: '黑色的阿巴亚', cls: 'activity' },
            { py: 'liù bǎi kuài', hz: '600块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The black abaya is 600 yuan. / العباءة السوداء بستمئة يوان.'
        },
        {
          tokens: [
            { py: 'Hēisè de', hz: '黑色的', cls: 'like' },
            { py: 'bǐ lǜsè de', hz: '比绿色的', cls: 'like' },
            { py: 'guì yì bǎi kuài', hz: '贵100块', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The black one is 100 yuan more expensive than the green one. / السوداء أغلى من الخضراء بمئة يوان.'
        },
        {
          tokens: [
            { py: 'Dànshì', hz: '但是', cls: 'time' },
            { py: 'hēisè de', hz: '黑色的', cls: 'like' },
            { py: 'gèng piàoliang', hz: '更漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'But the black one is more beautiful. / لكن السوداء أجمل.'
        },
        {
          tokens: [
            { py: 'Zuìhòu', hz: '最后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ mǎi le', hz: '我买了', cls: 'self' },
            { py: 'hēisè de ābāyà', hz: '黑色的阿巴亚', cls: 'activity' },
            { hz: '，' },
            { py: 'yīnwèi', hz: '因为', cls: 'time' },
            { py: 'wǒ juéde tā', hz: '我觉得它', cls: 'self' },
            { py: 'gèng piàoliang', hz: '更漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Finally, I bought the black abaya because I think it is more beautiful. / في النهاية، اشتريت العباءة السوداء لأنني أعتقد أنها أجمل.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “贵” 是什么意思？',
      pinyin: '“Guì” shì shénme yìsi?',
      translation: 'What does “贵” mean?',
      choices: [
        { text: 'expensive', correct: true },
        { text: 'cheap', correct: false },
        { text: 'beautiful', correct: false }
      ]
    },
    {
      question: '2. “黑色的比绿色的贵100块。” 是什么意思？',
      pinyin: '“Hēisè de bǐ lǜsè de guì yì bǎi kuài.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The black one is 100 yuan more expensive than the green one.', correct: true },
        { text: 'The green one is 100 yuan more expensive than the black one.', correct: false },
        { text: 'The black one is cheaper than the green one.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “beautiful”？',
      pinyin: 'Nǎ yí ge shì “beautiful”?',
      translation: 'Which one means “beautiful”?',
      choices: [
        { text: '漂亮', correct: true },
        { text: '便宜', correct: false },
        { text: '贵', correct: false }
      ]
    },
    {
      question: '4. “这件绿色的阿巴亚多少钱？” 是什么意思？',
      pinyin: '“Zhè jiàn lǜsè de ābāyà duōshao qián?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How much is this green abaya?', correct: true },
        { text: 'This green abaya is very beautiful.', correct: false },
        { text: 'I want to buy a black abaya.', correct: false }
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
        { py: 'Lǜsè de', hz: '绿色的', cls: 'like' },
        { blank: true },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { py: 'kuài', hz: '块', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Hēisè de', hz: '黑色的', cls: 'like' },
        { blank: true },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { py: 'kuài', hz: '块', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Hēisè de', hz: '黑色的', cls: 'like' },
        { py: 'bǐ lǜsè de', hz: '比绿色的', cls: 'like' },
        { py: 'guì', hz: '贵', cls: 'like' },
        { blank: true },
        { py: 'kuài', hz: '块', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Dànshì', hz: '但是', cls: 'time' },
        { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { py: 'gèng piàoliang', hz: '更漂亮', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Zuìhòu', hz: '最后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ mǎi le', hz: '我买了', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I want to buy ______. The green ______ is ______ yuan. The black ______ is ______ yuan. The black one is ______ yuan more expensive than the green one. But I think ______ is more beautiful. Finally, I bought ______.',
    tip: 'Use: 阿巴亚、书包、鞋、裙子、绿色的、黑色的、500、600、100、黑色的、绿色的。'
  },

  meanings: {
    '这件': 'this one / هذه القطعة',
    '比那件': 'than that one / من تلك القطعة',
    '贵100块': '100 yuan more expensive / أغلى بمئة يوان',
    '阿巴亚': 'abaya / عباءة',
    '绿色': 'green / أخضر',
    '黑色': 'black / أسود',
    '贵': 'expensive / غالٍ',
    '便宜': 'cheap / رخيص',
    '更': 'more / أكثر',
    '漂亮': 'beautiful / جميل',
    '块': 'yuan; currency unit / يوان',
    '绿色的阿巴亚': 'green abaya / عباءة خضراء',
    '黑色的阿巴亚': 'black abaya / عباءة سوداء',
    '500块': '500 yuan / خمسمئة يوان',
    '600块': '600 yuan / ستمئة يوان',
    '比绿色的': 'than the green one / من الخضراء',
    '贵100块': '100 yuan more expensive / أغلى بمئة يوان',
    '比较便宜': 'cheaper / أرخص',
    '多少钱': 'how much money / كم السعر',
    '那件': 'that one / تلك القطعة',
    '呢': 'what about / ماذا عن',
    '黑色的': 'the black one / السوداء',
    '绿色的': 'the green one / الخضراء',
    '但是': 'but / لكن',
    '更漂亮': 'more beautiful / أجمل',
    '我想买': 'I want to buy / أريد أن أشتري',
    '一件阿巴亚': 'one abaya / عباءة واحدة',
    '我买了': 'I bought / اشتريت',
    '因为': 'because / لأن',
    '我觉得它': 'I think it / أعتقد أنها',
    '最后': 'finally / في النهاية',
    '是': 'is / يكون'
  }
};