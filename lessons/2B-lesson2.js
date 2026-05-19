window.LESSONS = window.LESSONS || {};

window.LESSONS['2B-lesson2'] = {
  id: '2B-lesson2',
  book: '2B',
  lesson: 'Lesson 2',
  title: '我喜欢吃中国菜。',
  theme: 'Food and preferences',
  goal: 'Talk about food preferences with “喜欢吃 / 不喜欢吃”.',
  heroTranslation: 'I like eating Chinese food.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
    { py: 'Zhōngguó cài', hz: '中国菜', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🍚', pinyin: 'mǐfàn', text: '米饭', translation: 'rice / أرز' },
    { emoji: '🍜', pinyin: 'miàntiáo', text: '面条', translation: 'noodles / نودلز' },
    { emoji: '🥟', pinyin: 'jiǎozi', text: '饺子', translation: 'dumplings / فطائر صينية' },
    { emoji: '🥟', pinyin: 'bāozi', text: '包子', translation: 'steamed bun / كعكة محشوة' },
    { emoji: '🍗', pinyin: 'jīròu', text: '鸡肉', translation: 'chicken / دجاج' },
    { emoji: '🍽️', pinyin: 'Zhōngguó cài', text: '中国菜', translation: 'Chinese food / الطعام الصيني' },
    { emoji: '🍽️', pinyin: 'Ālābó cài', text: '阿拉伯菜', translation: 'Arabic food / الطعام العربي' },
    { emoji: '😋', pinyin: 'hǎochī', text: '好吃', translation: 'delicious / لذيذ' },
    { emoji: '❤️', pinyin: 'xǐhuan chī', text: '喜欢吃', translation: 'like eating / يحب أن يأكل' },
    { emoji: '🚫', pinyin: 'bù xǐhuan chī', text: '不喜欢吃', translation: 'do not like eating / لا يحب أن يأكل' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { py: 'shénme', hz: '什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What do you like eating? / ماذا تحب أن تأكل؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { py: 'Zhōngguó cài', hz: '中国菜', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I like eating Chinese food. / أحب أكل الطعام الصيني.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bù xǐhuan chī', hz: '不喜欢吃', cls: 'not-like' },
        { py: 'là de cài', hz: '辣的菜', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I do not like eating spicy food. / لا أحب أكل الطعام الحار.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说喜欢吃什么',
      translation: 'I like eating rice. I like eating noodles. I like eating steamed buns. What do you like eating?',
      tip: 'Reading Goal: Read “我喜欢吃……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'mǐfàn', hz: '米饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating rice. / أحب أكل الأرز.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'miàntiáo', hz: '面条', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating noodles. / أحب أكل النودلز.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'bāozi', hz: '包子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating steamed buns. / أحب أكل الكعك المحشو.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you like eating? / ماذا تحب أن تأكل؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问喜欢和不喜欢',
      translation: 'What do you like eating? I like eating rice. What do you not like eating? I do not like eating fried noodles. Do you like eating Chinese food? Yes, Chinese food is delicious.',
      tip: 'Pair Work: Ask and answer with “喜欢吃 / 不喜欢吃”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you like eating? / ماذا تحب أن تأكل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'mǐfàn', hz: '米饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating rice. / أحب أكل الأرز.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'bù xǐhuan chī', hz: '不喜欢吃', cls: 'not-like' },
            { py: 'shénme', hz: '什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you not like eating? / ماذا لا تحب أن تأكل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bù xǐhuan chī', hz: '不喜欢吃', cls: 'not-like' },
            { py: 'chǎomiàn', hz: '炒面', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not like eating fried noodles. / لا أحب أكل النودلز المقلية.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'Zhōngguó cài ma', hz: '中国菜吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you like eating Chinese food? / هل تحب أكل الطعام الصيني؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xǐhuan', hz: '喜欢', cls: 'like' },
            { hz: '，' },
            { py: 'Zhōngguó cài', hz: '中国菜', cls: 'activity' },
            { py: 'hěn hǎochī', hz: '很好吃', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Yes, Chinese food is very delicious. / نعم، الطعام الصيني لذيذ جدًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我喜欢吃什么',
      translation: 'I like eating rice. I like eating chicken. I also like eating noodles. I do not like eating spicy food. My friend likes eating Arabic food, but I like eating Chinese food. Chinese food is very delicious.',
      tip: 'Speaking Goal: Talk about your real food preferences and your friend’s preference.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'mǐfàn', hz: '米饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating rice. / أحب أكل الأرز.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'jīròu', hz: '鸡肉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating chicken. / أحب أكل الدجاج.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yě', hz: '也', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'miàntiáo', hz: '面条', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also like eating noodles. / أنا أيضًا أحب أكل النودلز.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bù xǐhuan chī', hz: '不喜欢吃', cls: 'not-like' },
            { py: 'là de cài', hz: '辣的菜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not like eating spicy food. / لا أحب أكل الطعام الحار.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'Ālābó cài', hz: '阿拉伯菜', cls: 'activity' },
            { hz: '，' },
            { py: 'dànshì', hz: '但是' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'Zhōngguó cài', hz: '中国菜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend likes eating Arabic food, but I like eating Chinese food. / صديقي يحب أكل الطعام العربي، لكنني أحب أكل الطعام الصيني.'
        },
        {
          tokens: [
            { py: 'Zhōngguó cài', hz: '中国菜', cls: 'activity' },
            { py: 'hěn hǎochī', hz: '很好吃', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Chinese food is very delicious. / الطعام الصيني لذيذ جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “米饭” 是什么意思？',
      pinyin: '“Mǐfàn” shì shénme yìsi?',
      translation: 'What does “米饭” mean?',
      choices: [
        { text: 'rice / أرز', correct: true },
        { text: 'noodles / نودلز', correct: false },
        { text: 'coffee / قهوة', correct: false }
      ]
    },
    {
      question: '2. “我喜欢吃中国菜。” 是什么意思？',
      pinyin: '“Wǒ xǐhuan chī Zhōngguó cài.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I like eating Chinese food.', correct: true },
        { text: 'I want to drink Chinese tea.', correct: false },
        { text: 'I do not like noodles.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你喜欢吃什么？',
      promptPinyin: 'Nǐ xǐhuan chī shénme?',
      choices: [
        { text: '我喜欢吃米饭。', pinyin: 'Wǒ xǐhuan chī mǐfàn.', correct: true },
        { text: '我想喝水。', pinyin: 'Wǒ xiǎng hē shuǐ.', correct: false }
      ]
    },
    {
      question: '4. “不喜欢吃” 是什么意思？',
      pinyin: '“Bù xǐhuan chī” shì shénme yìsi?',
      translation: 'What does “不喜欢吃” mean?',
      choices: [
        { text: 'do not like eating', correct: true },
        { text: 'like drinking', correct: false },
        { text: 'want to eat', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yě', hz: '也', cls: 'self' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bù xǐhuan chī', hz: '不喜欢吃', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { blank: true },
        { hz: '，' },
        { py: 'dànshì', hz: '但是' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I like eating ______. I also like eating ______. I do not like eating ______. My friend likes eating ______, but I like eating ______.',
    tip: 'Use food words: 米饭、面条、鸡肉、包子、中国菜、阿拉伯菜、辣的菜。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '我们': 'we / نحن',
    '我的朋友': 'my friend / صديقي',
    '喜欢': 'like / يحب',
    '喜欢吃': 'like eating / يحب أن يأكل',
    '不喜欢吃': 'do not like eating / لا يحب أن يأكل',
    '吃': 'eat / يأكل',
    '什么': 'what / ماذا',
    '米饭': 'rice / أرز',
    '面条': 'noodles / نودلز',
    '炒饭': 'fried rice / أرز مقلي',
    '炒面': 'fried noodles / نودلز مقلية',
    '包子': 'steamed bun / كعكة محشوة',
    '饺子': 'dumplings / فطائر صينية',
    '鸡肉': 'chicken / دجاج',
    '中国菜': 'Chinese food / الطعام الصيني',
    '阿拉伯菜': 'Arabic food / الطعام العربي',
    '辣的菜': 'spicy food / الطعام الحار',
    '好吃': 'delicious / لذيذ',
    '很好吃': 'very delicious / لذيذ جدًا',
    '也': 'also / أيضًا',
    '但是': 'but / لكن',
    '你喜欢吃什么': 'What do you like eating? / ماذا تحب أن تأكل؟',
    '我喜欢吃中国菜': 'I like eating Chinese food / أحب أكل الطعام الصيني'
  }
};