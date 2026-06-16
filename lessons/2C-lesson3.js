window.LESSONS = window.LESSONS || {};

window.LESSONS['2C-lesson3'] = {
  id: '2C-lesson3',
  book: '2C',
  lesson: 'Lesson 3',
  title: '苹果多少钱一斤？',
  theme: 'Buying fruit',
  goal: 'Ask fruit prices and buy fruit with “多少钱一斤 / 斤 / 块”.',
  heroTranslation: 'How much are apples per jin?',
  titleTokens: [
    { py: 'Píngguǒ', hz: '苹果', cls: 'activity' },
    { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
    { py: 'yì jīn', hz: '一斤', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🍎', pinyin: 'píngguǒ', text: '苹果', translation: 'apple / تفاح' },
    { emoji: '🍇', pinyin: 'pútáo', text: '葡萄', translation: 'grapes / عنب' },
    { emoji: '🍌', pinyin: 'xiāngjiāo', text: '香蕉', translation: 'banana / موز' },
    { emoji: '🌴', pinyin: 'yēzǎo', text: '椰枣', translation: 'dates / تمر' },
    { emoji: '🍉', pinyin: 'xīguā', text: '西瓜', translation: 'watermelon / بطيخ' },
    { emoji: '🍊', pinyin: 'chéngzi', text: '橙子', translation: 'orange / برتقال' },
    { emoji: '🍋', pinyin: 'níngméng', text: '柠檬', translation: 'lemon / ليمون' },
    { emoji: '⚖️', pinyin: 'jīn', text: '斤', translation: 'jin / half kilo / نصف كيلو' },
    { emoji: '💰', pinyin: 'kuài', text: '块', translation: 'yuan / kuai / يوان' },
    { emoji: '🍯', pinyin: 'tián', text: '甜', translation: 'sweet / حلو' },
    { emoji: '🍇', pinyin: 'yí chuàn pútáo', text: '一串葡萄', translation: 'a bunch of grapes / عنقود عنب' },
    { emoji: '📦', pinyin: 'yì hé yēzǎo', text: '一盒椰枣', translation: 'a box of dates / علبة تمر' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Píngguǒ', hz: '苹果', cls: 'activity' },
        { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
        { py: 'yì jīn', hz: '一斤', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How much are apples per jin? / كم سعر التفاح لنصف كيلو؟'
    },
    {
      tokens: [
        { py: 'Wǔ kuài', hz: '五块', cls: 'activity' },
        { py: 'yì jīn', hz: '一斤', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Five yuan per jin. / خمسة يوان لنصف كيلو.'
    },
    {
      tokens: [
        { py: 'Jīntiān de xīguā', hz: '今天的西瓜', cls: 'activity' },
        { py: 'hěn tián', hz: '很甜', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Today’s watermelon is very sweet. / بطيخ اليوم حلو جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说水果和价格',
      translation: 'I like apples. I like bananas. Today’s watermelon is very sweet. Apples are five yuan per jin. What fruit do you like?',
      tip: 'Reading Goal: Read fruit words and simple price sentences.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
            { py: 'píngguǒ', hz: '苹果', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like apples. / أحب التفاح.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
            { py: 'xiāngjiāo', hz: '香蕉', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like bananas. / أحب الموز.'
        },
        {
          tokens: [
            { py: 'Jīntiān de xīguā', hz: '今天的西瓜', cls: 'activity' },
            { py: 'hěn tián', hz: '很甜', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today’s watermelon is very sweet. / بطيخ اليوم حلو جدًا.'
        },
        {
          tokens: [
            { py: 'Píngguǒ', hz: '苹果', cls: 'activity' },
            { py: 'wǔ kuài', hz: '五块', cls: 'activity' },
            { py: 'yì jīn', hz: '一斤', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Apples are five yuan per jin. / التفاح خمسة يوان لنصف كيلو.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
            { py: 'shénme shuǐguǒ', hz: '什么水果', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What fruit do you like? / أي فاكهة تحب؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会在水果店买水果',
      translation: 'How much are apples per jin? Five yuan per jin. Is today’s watermelon sweet? It is very sweet. I want two jin of apples and one watermelon. Okay.',
      tip: 'Pair Work: Ask fruit prices and buy fruit.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Píngguǒ', hz: '苹果', cls: 'activity' },
            { py: 'duōshǎo qián', hz: '多少钱', cls: 'activity' },
            { py: 'yì jīn', hz: '一斤', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How much are apples per jin? / كم سعر التفاح لنصف كيلو؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǔ kuài', hz: '五块', cls: 'activity' },
            { py: 'yì jīn', hz: '一斤', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Five yuan per jin. / خمسة يوان لنصف كيلو.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān de xīguā', hz: '今天的西瓜', cls: 'activity' },
            { py: 'tián ma', hz: '甜吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Is today’s watermelon sweet? / هل بطيخ اليوم حلو؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn tián', hz: '很甜', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is very sweet. / إنه حلو جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yào', hz: '我要', cls: 'activity' },
            { py: 'liǎng jīn píngguǒ', hz: '两斤苹果', cls: 'activity' },
            { hz: '，' },
            { py: 'hái yào', hz: '还要', cls: 'activity' },
            { py: 'yí ge xīguā', hz: '一个西瓜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want two jin of apples and one watermelon. / أريد جِنّين من التفاح وبطيخة واحدة أيضًا.'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo de', hz: '好的', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'Okay. / حسنًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍买水果',
      translation: 'Today my mother and I go to a fruit shop. I bought two jin of apples and a bunch of grapes. My mother bought a box of dates and one watermelon. Apples are five yuan per jin, and grapes are ten yuan per jin. Today’s watermelon is very sweet. My mother scans with her phone to pay. I like eating fruit.',
      tip: 'Speaking Goal: Talk about buying fruit, prices, and payment.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { py: 'qù shuǐguǒ diàn', hz: '去水果店', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Today my mother and I go to a fruit shop. / اليوم أذهب أنا وأمي إلى محل الفاكهة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'liǎng jīn píngguǒ', hz: '两斤苹果', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'yí chuàn pútáo', hz: '一串葡萄', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I bought two jin of apples and a bunch of grapes. / اشتريت جِنّين من التفاح وعنقودًا من العنب.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'yì hé yēzǎo', hz: '一盒椰枣', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'yí ge xīguā', hz: '一个西瓜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My mother bought a box of dates and one watermelon. / اشترت أمي علبة تمر وبطيخة واحدة.'
        },
        {
          tokens: [
            { py: 'Píngguǒ', hz: '苹果', cls: 'activity' },
            { py: 'wǔ kuài', hz: '五块', cls: 'activity' },
            { py: 'yì jīn', hz: '一斤', cls: 'activity' },
            { hz: '，' },
            { py: 'pútáo', hz: '葡萄', cls: 'activity' },
            { py: 'shí kuài', hz: '十块', cls: 'activity' },
            { py: 'yì jīn', hz: '一斤', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Apples are five yuan per jin, and grapes are ten yuan per jin. / التفاح خمسة يوان لنصف كيلو، والعنب عشرة يوان لنصف كيلو.'
        },
        {
          tokens: [
            { py: 'Jīntiān de xīguā', hz: '今天的西瓜', cls: 'activity' },
            { py: 'hěn tián', hz: '很甜', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today’s watermelon is very sweet. / بطيخ اليوم حلو جدًا.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'yòng shǒujī', hz: '用手机', cls: 'activity' },
            { py: 'sǎomǎ zhīfù', hz: '扫码支付', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My mother scans with her phone to pay. / أمي تستخدم الهاتف للمسح والدفع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
            { py: 'shuǐguǒ', hz: '水果', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like eating fruit. / أحب أكل الفاكهة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “苹果” 是什么意思？',
      pinyin: '“Píngguǒ” shì shénme yìsi?',
      translation: 'What does “苹果” mean?',
      choices: [
        { text: 'apple / تفاح', correct: true },
        { text: 'banana / موز', correct: false },
        { text: 'dates / تمر', correct: false }
      ]
    },
    {
      question: '2. “苹果多少钱一斤？” 是什么意思？',
      pinyin: '“Píngguǒ duōshǎo qián yì jīn?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How much are apples per jin?', correct: true },
        { text: 'I like eating apples.', correct: false },
        { text: 'The watermelon is very sweet.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '苹果多少钱一斤？',
      promptPinyin: 'Píngguǒ duōshǎo qián yì jīn?',
      choices: [
        { text: '五块一斤。', pinyin: 'Wǔ kuài yì jīn.', correct: true },
        { text: '我在家上课。', pinyin: 'Wǒ zài jiā shàngkè.', correct: false }
      ]
    },
    {
      question: '4. “今天的西瓜很甜。” 是什么意思？',
      pinyin: '“Jīntiān de xīguā hěn tián.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Today’s watermelon is very sweet.', correct: true },
        { text: 'Today I bought shoes.', correct: false },
        { text: 'Grapes are ten yuan per jin.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'mǎi le', hz: '买了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Píngguǒ', hz: '苹果', cls: 'activity' },
        { blank: true },
        { py: 'yì jīn', hz: '一斤', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xǐhuan chī', hz: '喜欢吃', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Today I go to ______. I bought ______. Apples are ______ per jin. I like eating ______.',
    tip: 'Use fruit words: 苹果、葡萄、香蕉、椰枣、西瓜、橙子、柠檬。Use price words: 五块一斤、十块一斤。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '妈妈': 'mother / أم',
    '今天': 'today / اليوم',
    '水果': 'fruit / فاكهة',
    '水果店': 'fruit shop / محل الفاكهة',
    '去水果店': 'go to a fruit shop / يذهب إلى محل الفاكهة',
    '苹果': 'apple / تفاح',
    '葡萄': 'grapes / عنب',
    '香蕉': 'banana / موز',
    '椰枣': 'dates / تمر',
    '橙子': 'orange / برتقال',
    '柠檬': 'lemon / ليمون',
    '西瓜': 'watermelon / بطيخ',
    '斤': 'jin / half kilo / نصف كيلو',
    '块': 'yuan / kuai / يوان',
    '一斤': 'one jin / half kilo / نصف كيلو',
    '两斤': 'two jin / one kilo / كيلو واحد',
    '多少钱': 'how much money / كم السعر',
    '多少钱一斤': 'how much per jin / كم السعر لنصف كيلو',
    '五块一斤': 'five yuan per jin / خمسة يوان لنصف كيلو',
    '十块一斤': 'ten yuan per jin / عشرة يوان لنصف كيلو',
    '甜': 'sweet / حلو',
    '很甜': 'very sweet / حلو جدًا',
    '一串葡萄': 'a bunch of grapes / عنقود عنب',
    '一盒椰枣': 'a box of dates / علبة تمر',
    '一个西瓜': 'one watermelon / بطيخة واحدة',
    '扫码支付': 'scan to pay / الدفع بالمسح',
    '用手机扫码支付': 'scan with a phone to pay / يستخدم الهاتف للمسح والدفع',
    '喜欢吃': 'like eating / يحب أن يأكل',
    '我喜欢吃水果': 'I like eating fruit / أحب أكل الفاكهة'
  }
};