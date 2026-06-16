window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson4'] = {
  id: '2A-lesson4',
  book: '2A',
  lesson: 'Lesson 4',
  title: '你喜欢什么颜色？',
  theme: 'Colors',
  goal: 'Ask and answer favorite colors with “你喜欢什么颜色？”.',
  heroTranslation: 'What color do you like?',
  titleTokens: [
    { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
    { py: 'shénme yánsè', hz: '什么颜色', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🎨', pinyin: 'yánsè', text: '颜色', translation: 'color / لون' },
    { emoji: '🔴', pinyin: 'hóngsè', text: '红色', translation: 'red / أحمر' },
    { emoji: '🟡', pinyin: 'huángsè', text: '黄色', translation: 'yellow / أصفر' },
    { emoji: '🟢', pinyin: 'lǜsè', text: '绿色', translation: 'green / أخضر' },
    { emoji: '⚪', pinyin: 'báisè', text: '白色', translation: 'white / أبيض' },
    { emoji: '⚫', pinyin: 'hēisè', text: '黑色', translation: 'black / أسود' },
    { emoji: '🌸', pinyin: 'huā', text: '花', translation: 'flower / زهرة' },
    { emoji: '✨', pinyin: 'piàoliang', text: '漂亮', translation: 'beautiful / جميل' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
        { py: 'shénme yánsè', hz: '什么颜色', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What color do you like? / أي لون تحب؟'
    },
    {
      tokens: [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { py: 'hóngsè', hz: '红色', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I like red. / أحب اللون الأحمر.'
    },
    {
      tokens: [
        { py: 'Wǒ bù xǐhuan', hz: '我不喜欢', cls: 'not-like' },
        { py: 'hēisè', hz: '黑色', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'I do not like black. / لا أحب اللون الأسود.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说颜色',
      translation: 'This is red. This is yellow. This is green. I like red. I do not like black.',
      tip: 'Reading Goal: Read colors and “我喜欢……”.',
      lines: [
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'hóngsè', hz: '红色', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This is red. / هذا لون أحمر.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'huángsè', hz: '黄色', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This is yellow. / هذا لون أصفر.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'lǜsè', hz: '绿色', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is green. / هذا لون أخضر.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'hóngsè', hz: '红色', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I like red. / أحب اللون الأحمر.'
        },
        {
          tokens: [
            { py: 'Wǒ bù xǐhuan', hz: '我不喜欢', cls: 'not-like' },
            { py: 'hēisè', hz: '黑色', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I do not like black. / لا أحب اللون الأسود.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问喜欢什么颜色',
      translation: 'What color do you like? I like red. What color do you not like? I do not like black. Do you like green? I like green.',
      tip: 'Pair Work: Ask and answer favorite colors.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'shénme yánsè', hz: '什么颜色', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What color do you like? / أي لون تحب؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'hóngsè', hz: '红色', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I like red. / أحب اللون الأحمر.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ bù xǐhuan', hz: '你不喜欢', cls: 'not-like' },
            { py: 'shénme yánsè', hz: '什么颜色', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What color do you not like? / أي لون لا تحب؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ bù xǐhuan', hz: '我不喜欢', cls: 'not-like' },
            { py: 'hēisè', hz: '黑色', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I do not like black. / لا أحب اللون الأسود.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'lǜsè ma', hz: '绿色吗', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'Do you like green? / هل تحب اللون الأخضر؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'lǜsè', hz: '绿色', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I like green. / أحب اللون الأخضر.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我喜欢的颜色',
      translation: 'Hello everyone. My name is Fatima. I like green and white. The UAE flag has green, white, black and red. I like the UAE flag. In China, red is a happy color.',
      tip: 'Speaking Goal: Talk about favorite colors and UAE flag colors.',
      lines: [
        {
          tokens: [
            { py: 'Dàjiā hǎo', hz: '大家好', cls: 'greeting' },
            { hz: '！' }
          ],
          translation: 'Hello everyone! / مرحبًا بالجميع!'
        },
        {
          tokens: [
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Fatima. / اسمي فاطمة.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'lǜsè', hz: '绿色', cls: 'country' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'báisè', hz: '白色', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I like green and white. / أحب اللون الأخضر والأبيض.'
        },
        {
          tokens: [
            { py: 'Āliánqiú guóqí', hz: '阿联酋国旗', cls: 'country' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'lǜsè', hz: '绿色', cls: 'country' },
            { hz: '、' },
            { py: 'báisè', hz: '白色', cls: 'like' },
            { hz: '、' },
            { py: 'hēisè', hz: '黑色', cls: 'not-like' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'hóngsè', hz: '红色', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The UAE flag has green, white, black and red. / علم الإمارات فيه الأخضر والأبيض والأسود والأحمر.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'Āliánqiú guóqí', hz: '阿联酋国旗', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I like the UAE flag. / أحب علم الإمارات.'
        },
        {
          tokens: [
            { py: 'Zài Zhōngguó', hz: '在中国', cls: 'country' },
            { hz: '，' },
            { py: 'hóngsè', hz: '红色', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'kuàilè de yánsè', hz: '快乐的颜色', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'In China, red is a happy color. / في الصين، الأحمر لون سعيد.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “颜色” 是什么意思？',
      pinyin: '“Yánsè” shì shénme yìsi?',
      translation: 'What does “颜色” mean?',
      choices: [
        { text: 'color', correct: true },
        { text: 'season', correct: false },
        { text: 'weather', correct: false }
      ]
    },
    {
      question: '2. “红色” 是什么意思？',
      pinyin: '“Hóngsè” shì shénme yìsi?',
      translation: 'What does “红色” mean?',
      choices: [
        { text: 'red', correct: true },
        { text: 'white', correct: false },
        { text: 'black', correct: false }
      ]
    },
    {
      question: '3. “你喜欢什么颜色？” 是什么意思？',
      pinyin: '“Nǐ xǐhuan shénme yánsè?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What color do you like?', correct: true },
        { text: 'What season do you like?', correct: false },
        { text: 'What is your hobby?', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “green”？',
      pinyin: 'Nǎ yí ge shì “green”?',
      translation: 'Which one means “green”?',
      choices: [
        { text: '绿色', correct: true },
        { text: '黄色', correct: false },
        { text: '白色', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
        { py: 'shénme yánsè', hz: '什么颜色', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ bù xǐhuan', hz: '我不喜欢', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Āliánqiú guóqí', hz: '阿联酋国旗', cls: 'country' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { blank: true },
        { hz: '、' },
        { blank: true },
        { hz: '、' },
        { blank: true },
        { py: 'hé', hz: '和', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { py: 'Āliánqiú guóqí', hz: '阿联酋国旗', cls: 'country' },
        { hz: '。' }
      ]
    ],
    translation: 'What color do you like? I like _____. I do not like _____. The UAE flag has _____, _____, _____ and _____. I like the UAE flag.',
    tip: 'Use colors: 红色、绿色、白色、黑色、黄色。'
  },

  meanings: {
    '颜色': 'color / لون',
    '什么颜色': 'what color / أي لون',
    '你喜欢什么颜色': 'what color do you like / أي لون تحب',
    '红色': 'red / أحمر',
    '黄色': 'yellow / أصفر',
    '绿色': 'green / أخضر',
    '白色': 'white / أبيض',
    '黑色': 'black / أسود',
    '花': 'flower / زهرة',
    '漂亮': 'beautiful / جميل',
    '这是': 'this is / هذا',
    '你喜欢': 'you like / تحب',
    '我喜欢': 'I like / أحب',
    '你不喜欢': 'you do not like / لا تحب',
    '我不喜欢': 'I do not like / لا أحب',
    '绿色吗': 'green? / اللون الأخضر؟',
    '和': 'and / و',
    '有': 'has / يوجد',
    '阿联酋国旗': 'UAE flag / علم الإمارات',
    '在中国': 'in China / في الصين',
    '快乐的颜色': 'happy color / لون سعيد',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة'
  }
};