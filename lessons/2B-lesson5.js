window.LESSONS = window.LESSONS || {};

window.LESSONS['2B-lesson5'] = {
  id: '2B-lesson5',
  book: '2B',
  lesson: 'Lesson 5',
  title: '请问你们要什么？',
  theme: 'Ordering food in a restaurant',
  goal: 'Order food and drinks with “要 / 不要”.',
  heroTranslation: 'Excuse me, what would you like?',
  titleTokens: [
    { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
    { py: 'nǐmen', hz: '你们', cls: 'person' },
    { py: 'yào', hz: '要', cls: 'activity' },
    { py: 'shénme', hz: '什么', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🙏', pinyin: 'qǐngwèn', text: '请问', translation: 'excuse me / من فضلك' },
    { emoji: '✅', pinyin: 'yào', text: '要', translation: 'want / order / يريد' },
    { emoji: '🚫', pinyin: 'bú yào', text: '不要', translation: 'do not want / لا يريد' },
    { emoji: '🥟', pinyin: 'jiǎozi', text: '饺子', translation: 'dumplings / فطائر صينية' },
    { emoji: '🥟', pinyin: 'bāozi', text: '包子', translation: 'steamed buns / كعك محشو' },
    { emoji: '🍲', pinyin: 'tāng', text: '汤', translation: 'soup / شوربة' },
    { emoji: '🧃', pinyin: 'guǒzhī', text: '果汁', translation: 'juice / عصير' },
    { emoji: '☕', pinyin: 'kāfēi', text: '咖啡', translation: 'coffee / قهوة' },
    { emoji: '🍽️', pinyin: 'yì pán', text: '一盘', translation: 'one plate / طبق واحد' },
    { emoji: '🥤', pinyin: 'yì bēi', text: '一杯', translation: 'one cup / كوب واحد' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
        { py: 'nǐmen', hz: '你们', cls: 'person' },
        { py: 'yào shénme', hz: '要什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Excuse me, what would you like? / من فضلكم، ماذا تريدون؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yào', hz: '要', cls: 'activity' },
        { py: 'yì pán jiǎozi', hz: '一盘饺子', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I would like one plate of dumplings. / أريد طبقًا من الفطائر الصينية.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bú yào', hz: '不要', cls: 'not-like' },
        { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I do not want coffee. / لا أريد القهوة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说要和不要',
      translation: 'I want steamed buns. I want juice. I do not want coffee. Excuse me, what would you like?',
      tip: 'Reading Goal: Read “我要……” and “我不要……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'bāozi', hz: '包子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want steamed buns. / أريد كعكًا محشوًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'guǒzhī', hz: '果汁', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want juice. / أريد عصيرًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bú yào', hz: '不要', cls: 'not-like' },
            { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not want coffee. / لا أريد القهوة.'
        },
        {
          tokens: [
            { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
            { py: 'nǐ', hz: '你', cls: 'person' },
            { py: 'yào shénme', hz: '要什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Excuse me, what would you like? / من فضلك، ماذا تريد؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会在餐厅点餐',
      translation: 'Excuse me, what would you like? I would like one plate of dumplings. Do you want coffee? No, I want juice. Okay.',
      tip: 'Pair Work: Role-play a restaurant order.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👩‍🍳', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
            { py: 'nǐ', hz: '你', cls: 'person' },
            { py: 'yào shénme', hz: '要什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Excuse me, what would you like? / من فضلك، ماذا تريد؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'yì pán jiǎozi', hz: '一盘饺子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I would like one plate of dumplings. / أريد طبقًا من الفطائر الصينية.'
        },
        {
          tokens: [
            { py: '', hz: '👩‍🍳', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'kāfēi ma', hz: '咖啡吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you want coffee? / هل تريد القهوة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bú yào', hz: '不要', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'guǒzhī', hz: '果汁', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'No, I want juice. / لا، أريد عصيرًا.'
        },
        {
          tokens: [
            { py: '', hz: '👩‍🍳', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo de', hz: '好的', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'Okay. / حسنًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的点餐单',
      translation: 'Today my friend and I go to a restaurant. I would like one plate of dumplings. I would like one cup of juice. I do not want coffee. My friend wants a hamburger and milk. We are very happy.',
      tip: 'Speaking Goal: Say your restaurant order with “要 / 不要”.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'péngyou', hz: '朋友', cls: 'person' },
            { py: 'qù fàndiàn', hz: '去饭店', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Today my friend and I go to a restaurant. / اليوم أذهب أنا وصديقي إلى المطعم.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'yì pán jiǎozi', hz: '一盘饺子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I would like one plate of dumplings. / أريد طبقًا من الفطائر الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'yì bēi guǒzhī', hz: '一杯果汁', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I would like one cup of juice. / أريد كوبًا من العصير.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bú yào', hz: '不要', cls: 'not-like' },
            { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not want coffee. / لا أريد القهوة.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'yào', hz: '要', cls: 'activity' },
            { py: 'hànbǎobāo', hz: '汉堡包', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'niúnǎi', hz: '牛奶', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend wants a hamburger and milk. / صديقي يريد همبرغر وحليبًا.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'person' },
            { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'We are very happy. / نحن سعداء جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “要” 是什么意思？',
      pinyin: '“Yào” shì shénme yìsi?',
      translation: 'What does “要” mean?',
      choices: [
        { text: 'want / order / يريد', correct: true },
        { text: 'do not want / لا يريد', correct: false },
        { text: 'drink / يشرب', correct: false }
      ]
    },
    {
      question: '2. “我不要咖啡。” 是什么意思？',
      pinyin: '“Wǒ bú yào kāfēi.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I do not want coffee.', correct: true },
        { text: 'I want coffee.', correct: false },
        { text: 'I like coffee.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '请问你要什么？',
      promptPinyin: 'Qǐngwèn nǐ yào shénme?',
      choices: [
        { text: '我要一盘饺子。', pinyin: 'Wǒ yào yì pán jiǎozi.', correct: true },
        { text: '我现在在家。', pinyin: 'Wǒ xiànzài zài jiā.', correct: false }
      ]
    },
    {
      question: '4. “一杯果汁” 是什么意思？',
      pinyin: '“Yì bēi guǒzhī” shì shénme yìsi?',
      translation: 'What does “一杯果汁” mean?',
      choices: [
        { text: 'one cup of juice', correct: true },
        { text: 'one plate of dumplings', correct: false },
        { text: 'one bowl of soup', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yào', hz: '要', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yào', hz: '要', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bú yào', hz: '不要', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'yào', hz: '要', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I want ______. I want ______. I do not want ______. My friend wants ______.',
    tip: 'Use food and drink words: 饺子、包子、汉堡包、果汁、牛奶、咖啡、茶。Use quantity words: 一盘、一杯、一碗。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '你们': 'you all / أنتم',
    '我们': 'we / نحن',
    '朋友': 'friend / صديق',
    '我的朋友': 'my friend / صديقي',
    '请问': 'excuse me / من فضلك',
    '要': 'want / order / يريد',
    '不要': 'do not want / لا يريد',
    '要什么': 'want what / ماذا يريد',
    '请问你要什么': 'Excuse me, what would you like? / من فضلك، ماذا تريد؟',
    '饺子': 'dumplings / فطائر صينية',
    '包子': 'steamed buns / كعك محشو',
    '汤': 'soup / شوربة',
    '鸡蛋汤': 'egg soup / شوربة البيض',
    '果汁': 'juice / عصير',
    '咖啡': 'coffee / قهوة',
    '牛奶': 'milk / حليب',
    '茶': 'tea / شاي',
    '汉堡包': 'hamburger / همبرغر',
    '饭店': 'restaurant / مطعم',
    '去饭店': 'go to a restaurant / يذهب إلى المطعم',
    '一盘': 'one plate / طبق واحد',
    '一杯': 'one cup / كوب واحد',
    '一碗': 'one bowl / وعاء واحد',
    '一盘饺子': 'one plate of dumplings / طبق من الفطائر الصينية',
    '一杯果汁': 'one cup of juice / كوب من العصير',
    '服务员': 'waiter / نادل',
    '菜单': 'menu / قائمة الطعام',
    '好的': 'okay / حسنًا',
    '谢谢': 'thank you / شكرًا',
    '很开心': 'very happy / سعيد جدًا'
  }
};