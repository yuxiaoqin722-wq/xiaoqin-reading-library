window.LESSONS = window.LESSONS || {};

window.LESSONS['2B-lesson3'] = {
  id: '2B-lesson3',
  book: '2B',
  lesson: 'Lesson 3',
  title: '你们早饭一般吃什么？',
  theme: 'Meals and daily food',
  goal: 'Talk about what people usually eat for breakfast, lunch, and dinner.',
  heroTranslation: 'What do you usually eat for breakfast?',
  titleTokens: [
    { py: 'Nǐmen', hz: '你们', cls: 'person' },
    { py: 'zǎofàn', hz: '早饭', cls: 'time' },
    { py: 'yìbān', hz: '一般', cls: 'time' },
    { py: 'chī shénme', hz: '吃什么', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🌅', pinyin: 'zǎofàn', text: '早饭', translation: 'breakfast / فطور' },
    { emoji: '☀️', pinyin: 'wǔfàn', text: '午饭', translation: 'lunch / غداء' },
    { emoji: '🌙', pinyin: 'wǎnfàn', text: '晚饭', translation: 'dinner / عشاء' },
    { emoji: '🔁', pinyin: 'yìbān', text: '一般', translation: 'usually / عادةً' },
    { emoji: '🍞', pinyin: 'miànbāo', text: '面包', translation: 'bread / خبز' },
    { emoji: '🥚', pinyin: 'jīdàn', text: '鸡蛋', translation: 'egg / بيض' },
    { emoji: '🥗', pinyin: 'shālā', text: '沙拉', translation: 'salad / سلطة' },
    { emoji: '🍚', pinyin: 'mǐfàn', text: '米饭', translation: 'rice / أرز' },
    { emoji: '🍗', pinyin: 'jīròu', text: '鸡肉', translation: 'chicken / دجاج' },
    { emoji: '🍔', pinyin: 'hànbǎobāo', text: '汉堡包', translation: 'hamburger / همبرغر' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zǎofàn', hz: '早饭', cls: 'time' },
        { py: 'yìbān', hz: '一般', cls: 'time' },
        { py: 'chī shénme', hz: '吃什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What do you usually eat for breakfast? / ماذا تأكل عادةً على الفطور؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zǎofàn', hz: '早饭', cls: 'time' },
        { py: 'yìbān', hz: '一般', cls: 'time' },
        { py: 'chī miànbāo', hz: '吃面包', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I usually eat bread for breakfast. / آكل الخبز عادةً على الفطور.'
    },
    {
      tokens: [
        { py: 'Wǔfàn ne', hz: '午饭呢', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'What about lunch? / وماذا عن الغداء؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说早饭吃什么',
      translation: 'I usually eat bread for breakfast. I usually eat eggs for breakfast. I usually eat salad for breakfast. What do you usually eat for breakfast?',
      tip: 'Reading Goal: Read “早饭一般吃……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī miànbāo', hz: '吃面包', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat bread for breakfast. / آكل الخبز عادةً على الفطور.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī jīdàn', hz: '吃鸡蛋', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat eggs for breakfast. / آكل البيض عادةً على الفطور.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī shālā', hz: '吃沙拉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat salad for breakfast. / آكل السلطة عادةً على الفطور.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī shénme', hz: '吃什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you usually eat for breakfast? / ماذا تأكل عادةً على الفطور؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问三餐吃什么',
      translation: 'What do you usually eat for breakfast? I usually eat bread and eggs for breakfast. What about lunch? I usually eat rice and chicken for lunch. What about dinner? I usually eat noodles for dinner.',
      tip: 'Pair Work: Ask about breakfast, lunch, and dinner.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī shénme', hz: '吃什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What do you usually eat for breakfast? / ماذا تأكل عادةً على الفطور؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī miànbāo', hz: '吃面包', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'jīdàn', hz: '鸡蛋', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat bread and eggs for breakfast. / آكل الخبز والبيض عادةً على الفطور.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǔfàn ne', hz: '午饭呢', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What about lunch? / وماذا عن الغداء؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'wǔfàn', hz: '午饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī mǐfàn', hz: '吃米饭', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'jīròu', hz: '鸡肉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat rice and chicken for lunch. / آكل الأرز والدجاج عادةً على الغداء.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǎnfàn ne', hz: '晚饭呢', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What about dinner? / وماذا عن العشاء؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'wǎnfàn', hz: '晚饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī miàntiáo', hz: '吃面条', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat noodles for dinner. / آكل النودلز عادةً على العشاء.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的一天菜单',
      translation: 'I usually eat eggs and bread for breakfast. I usually eat rice and chicken for lunch. I usually eat salad for dinner. Sometimes I also eat hamburgers. My friend likes eating pizza.',
      tip: 'Speaking Goal: Introduce your daily meals.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zǎofàn', hz: '早饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī jīdàn', hz: '吃鸡蛋', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'miànbāo', hz: '面包', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat eggs and bread for breakfast. / آكل البيض والخبز عادةً على الفطور.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'wǔfàn', hz: '午饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī mǐfàn', hz: '吃米饭', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'jīròu', hz: '鸡肉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat rice and chicken for lunch. / آكل الأرز والدجاج عادةً على الغداء.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'wǎnfàn', hz: '晚饭', cls: 'time' },
            { py: 'yìbān', hz: '一般', cls: 'time' },
            { py: 'chī shālā', hz: '吃沙拉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I usually eat salad for dinner. / آكل السلطة عادةً على العشاء.'
        },
        {
          tokens: [
            { py: 'Yǒu shíhou', hz: '有时候', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'yě', hz: '也', cls: 'self' },
            { py: 'chī hànbǎobāo', hz: '吃汉堡包', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Sometimes I also eat hamburgers. / أحيانًا آكل الهمبرغر أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'bǐsàbǐng', hz: '比萨饼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend likes eating pizza. / صديقي يحب أكل البيتزا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “早饭” 是什么意思？',
      pinyin: '“Zǎofàn” shì shénme yìsi?',
      translation: 'What does “早饭” mean?',
      choices: [
        { text: 'breakfast / فطور', correct: true },
        { text: 'lunch / غداء', correct: false },
        { text: 'dinner / عشاء', correct: false }
      ]
    },
    {
      question: '2. “我早饭一般吃面包。” 是什么意思？',
      pinyin: '“Wǒ zǎofàn yìbān chī miànbāo.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I usually eat bread for breakfast.', correct: true },
        { text: 'I like eating Chinese food.', correct: false },
        { text: 'I usually drink milk.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你早饭一般吃什么？',
      promptPinyin: 'Nǐ zǎofàn yìbān chī shénme?',
      choices: [
        { text: '我早饭一般吃鸡蛋。', pinyin: 'Wǒ zǎofàn yìbān chī jīdàn.', correct: true },
        { text: '我想喝水。', pinyin: 'Wǒ xiǎng hē shuǐ.', correct: false }
      ]
    },
    {
      question: '4. “午饭呢？” 是什么意思？',
      pinyin: '“Wǔfàn ne?” shì shénme yìsi?',
      translation: 'What does “午饭呢？” mean?',
      choices: [
        { text: 'What about lunch?', correct: true },
        { text: 'What do you drink?', correct: false },
        { text: 'Do you like dinner?', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zǎofàn', hz: '早饭', cls: 'time' },
        { py: 'yìbān', hz: '一般', cls: 'time' },
        { py: 'chī', hz: '吃', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'wǔfàn', hz: '午饭', cls: 'time' },
        { py: 'yìbān', hz: '一般', cls: 'time' },
        { py: 'chī', hz: '吃', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'wǎnfàn', hz: '晚饭', cls: 'time' },
        { py: 'yìbān', hz: '一般', cls: 'time' },
        { py: 'chī', hz: '吃', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yě', hz: '也', cls: 'self' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I usually eat ______ for breakfast. I usually eat ______ for lunch. I usually eat ______ for dinner. I also like eating ______.',
    tip: 'Use food words: 面包、鸡蛋、沙拉、米饭、鸡肉、面条、汉堡包、比萨饼。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '你们': 'you all / أنتم',
    '我的朋友': 'my friend / صديقي',
    '早饭': 'breakfast / فطور',
    '午饭': 'lunch / غداء',
    '晚饭': 'dinner / عشاء',
    '一般': 'usually / عادةً',
    '有时候': 'sometimes / أحيانًا',
    '吃': 'eat / يأكل',
    '吃什么': 'eat what / ماذا يأكل',
    '面包': 'bread / خبز',
    '鸡蛋': 'egg / بيض',
    '沙拉': 'salad / سلطة',
    '米饭': 'rice / أرز',
    '鸡肉': 'chicken / دجاج',
    '面条': 'noodles / نودلز',
    '汉堡包': 'hamburger / همبرغر',
    '比萨饼': 'pizza / بيتزا',
    '和': 'and / و',
    '也': 'also / أيضًا',
    '喜欢吃': 'like eating / يحب أن يأكل',
    '方便': 'convenient / مناسب',
    '或者': 'or / أو',
    '你早饭一般吃什么': 'What do you usually eat for breakfast? / ماذا تأكل عادةً على الفطور؟',
    '我早饭一般吃面包': 'I usually eat bread for breakfast / آكل الخبز عادةً على الفطور'
  }
};