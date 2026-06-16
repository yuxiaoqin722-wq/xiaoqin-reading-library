window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson8'] = {
  id: '3A-lesson8',
  book: '3A',
  lesson: 'Lesson 8',
  title: '它的眼睛很大。',
  theme: 'Animal Body Parts and Description',
  goal: 'Describe animal body parts using 它的……很…… and 它的……是……色的.',
  heroTranslation: 'Its eyes are big.',
  titleTokens: [
    { py: 'Tā de', hz: '它的', cls: 'person' },
    { py: 'yǎnjing', hz: '眼睛', cls: 'activity' },
    { py: 'hěn dà', hz: '很大', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👀', pinyin: 'yǎnjing', text: '眼睛', translation: 'eyes / عينان' },
    { emoji: '👂', pinyin: 'ěrduo', text: '耳朵', translation: 'ears / أذنان' },
    { emoji: '👃', pinyin: 'bízi', text: '鼻子', translation: 'nose / أنف' },
    { emoji: '👄', pinyin: 'zuǐ', text: '嘴', translation: 'mouth / فم' },
    { emoji: '💪', pinyin: 'gēbo', text: '胳膊', translation: 'arm / ذراع' },
    { emoji: '🦵', pinyin: 'tuǐ', text: '腿', translation: 'leg / ساق' },
    { emoji: '🦶', pinyin: 'jiǎo', text: '脚', translation: 'foot / قدم' },
    { emoji: '💇', pinyin: 'tóufa', text: '头发', translation: 'hair / شعر' },
    { emoji: '⬆️', pinyin: 'dà', text: '大', translation: 'big / كبير' },
    { emoji: '📏', pinyin: 'cháng', text: '长', translation: 'long / طويل' },
    { emoji: '↔️', pinyin: 'duǎn', text: '短', translation: 'short / قصير' },
    { emoji: '🔴', pinyin: 'hóngsè', text: '红色', translation: 'red / أحمر' },
    { emoji: '⚫', pinyin: 'hēisè', text: '黑色', translation: 'black / أسود' },
    { emoji: '⚪', pinyin: 'báisè', text: '白色', translation: 'white / أبيض' },
    { emoji: '🟡', pinyin: 'huángsè', text: '黄色', translation: 'yellow / أصفر' },
    { emoji: '🟢', pinyin: 'lǜsè', text: '绿色', translation: 'green / أخضر' },
    { emoji: '🐾', pinyin: 'tā', text: '它', translation: 'it / هو/هي للحيوان' },
    { emoji: '1️⃣', pinyin: 'zhī', text: '只', translation: 'measure word for animals / أداة عد للحيوانات' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Tā de', hz: '它的', cls: 'person' },
        { py: 'yǎnjing', hz: '眼睛', cls: 'activity' },
        { py: 'hěn dà', hz: '很大', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Its eyes are big. / عيناه كبيرتان.'
    },
    {
      tokens: [
        { py: 'Tā de', hz: '它的', cls: 'person' },
        { py: 'ěrduo', hz: '耳朵', cls: 'activity' },
        { py: 'hěn cháng', hz: '很长', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Its ears are long. / أذناه طويلتان.'
    },
    {
      tokens: [
        { py: 'Tā de', hz: '它的', cls: 'person' },
        { py: 'yǎnjing', hz: '眼睛', cls: 'activity' },
        { py: 'shì hóngsè de', hz: '是红色的', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Its eyes are red. / عيناه حمراوان.'
    },
    {
      tokens: [
        { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
        { py: 'yì zhī tùzi', hz: '一只兔子', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I have a rabbit. / لدي أرنب.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会描述身体部位',
      translation: 'Its eyes are big. Its ears are long. Its nose is red. Its legs are short.',
      tip: 'Reading Goal: Describe animal body parts with size, length and color.',
      lines: [
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'yǎnjing', hz: '眼睛', cls: 'activity' },
            { py: 'hěn dà', hz: '很大', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its eyes are big. / عيناه كبيرتان.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'ěrduo', hz: '耳朵', cls: 'activity' },
            { py: 'hěn cháng', hz: '很长', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its ears are long. / أذناه طويلتان.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'bízi', hz: '鼻子', cls: 'activity' },
            { py: 'shì hóngsè de', hz: '是红色的', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its nose is red. / أنفه أحمر.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'tuǐ', hz: '腿', cls: 'activity' },
            { py: 'hěn duǎn', hz: '很短', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its legs are short. / ساقاه قصيرتان.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会猜动物',
      translation: 'Its eyes are black. Its ears are short. It is very cute. Is it a panda? Yes. Its nose is long. Its body is gray. Is it an elephant? Yes.',
      tip: 'Pair Work: Listen to the description and guess the animal.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'yǎnjing', hz: '眼睛', cls: 'activity' },
            { py: 'shì hēisè de', hz: '是黑色的', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its eyes are black. / عيناه سوداوان.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'ěrduo', hz: '耳朵', cls: 'activity' },
            { py: 'hěn duǎn', hz: '很短', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its ears are short. / أذناه قصيرتان.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Tā', hz: '它', cls: 'person' },
            { py: 'hěn kěài', hz: '很可爱', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is very cute. / إنه لطيف جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shì', hz: '是', cls: 'activity' },
            { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Is it a panda? / هل هو باندا؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duì', hz: '对', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Yes! / نعم!'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'bízi', hz: '鼻子', cls: 'activity' },
            { py: 'hěn cháng', hz: '很长', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its nose is long. / أنفه طويل.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'shēntǐ', hz: '身体', cls: 'activity' },
            { py: 'shì huīsè de', hz: '是灰色的', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its body is gray. / جسمه رمادي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shì', hz: '是', cls: 'activity' },
            { py: 'dàxiàng', hz: '大象', cls: 'activity' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Is it an elephant? / هل هو فيل؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duì', hz: '对', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Yes! / نعم!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍兔子',
      translation: 'I have a rabbit. Its eyes are red. Its ears are long. Its nose is small. Its mouth is also small. Its legs are short. Its body is white. It is very cute. I really like it.',
      tip: 'Speaking Goal: Describe one animal with body parts, colors and adjectives.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'yì zhī tùzi', hz: '一只兔子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have a rabbit. / لدي أرنب.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'yǎnjing', hz: '眼睛', cls: 'activity' },
            { py: 'shì hóngsè de', hz: '是红色的', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its eyes are red. / عيناه حمراوان.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'ěrduo', hz: '耳朵', cls: 'activity' },
            { py: 'hěn cháng', hz: '很长', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its ears are long. / أذناه طويلتان.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'bízi', hz: '鼻子', cls: 'activity' },
            { py: 'hěn xiǎo', hz: '很小', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its nose is small. / أنفه صغير.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'zuǐ', hz: '嘴', cls: 'activity' },
            { py: 'yě hěn xiǎo', hz: '也很小', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its mouth is also small. / فمه صغير أيضًا.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'tuǐ', hz: '腿', cls: 'activity' },
            { py: 'hěn duǎn', hz: '很短', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its legs are short. / ساقاه قصيرتان.'
        },
        {
          tokens: [
            { py: 'Tā de', hz: '它的', cls: 'person' },
            { py: 'shēntǐ', hz: '身体', cls: 'activity' },
            { py: 'shì báisè de', hz: '是白色的', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Its body is white. / جسمه أبيض.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '它', cls: 'person' },
            { py: 'hěn kěài', hz: '很可爱', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is very cute. / إنه لطيف جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ hěn xǐhuān', hz: '我很喜欢', cls: 'like' },
            { py: 'tā', hz: '它', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I really like it. / أنا أحبه كثيرًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “眼睛” 是什么意思？',
      pinyin: '“Yǎnjing” shì shénme yìsi?',
      translation: 'What does “眼睛” mean?',
      choices: [
        { text: 'eyes', correct: true },
        { text: 'ears', correct: false },
        { text: 'mouth', correct: false }
      ]
    },
    {
      question: '2. “它的耳朵很长。” 是什么意思？',
      pinyin: '“Tā de ěrduo hěn cháng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Its ears are long.', correct: true },
        { text: 'Its eyes are big.', correct: false },
        { text: 'Its legs are short.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “red”？',
      pinyin: 'Nǎ yí ge shì “red”?',
      translation: 'Which one means “red”?',
      choices: [
        { text: '红色', correct: true },
        { text: '黑色', correct: false },
        { text: '白色', correct: false }
      ]
    },
    {
      question: '4. “它的眼睛是红色的。” 是什么意思？',
      pinyin: '“Tā de yǎnjing shì hóngsè de.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Its eyes are red.', correct: true },
        { text: 'Its ears are long.', correct: false },
        { text: 'Its nose is small.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā de', hz: '它的', cls: 'person' },
        { blank: true },
        { py: 'hěn dà', hz: '很大', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Tā de', hz: '它的', cls: 'person' },
        { blank: true },
        { py: 'hěn cháng', hz: '很长', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Tā de', hz: '它的', cls: 'person' },
        { blank: true },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { py: 'sè de', hz: '色的', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '它', cls: 'person' },
        { py: 'hěn kěài', hz: '很可爱', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ hěn xǐhuān', hz: '我很喜欢', cls: 'like' },
        { py: 'tā', hz: '它', cls: 'person' },
        { hz: '。' }
      ]
    ],
    translation: 'I have ______. Its ______ is big. Its ______ is long. Its ______ is ______. It is very cute. I really like it.',
    tip: 'Use: 兔子、熊猫、猫、狗、骆驼、猎鹰、眼睛、耳朵、鼻子、嘴、腿、红、黑、白、黄、绿。'
  },

  meanings: {
    '它': 'it / هو أو هي للحيوان',
    '它的': 'its / خاصته',
    '眼睛': 'eyes / عينان',
    '耳朵': 'ears / أذنان',
    '鼻子': 'nose / أنف',
    '嘴': 'mouth / فم',
    '胳膊': 'arm / ذراع',
    '腿': 'leg / ساق',
    '脚': 'foot / قدم',
    '头发': 'hair / شعر',
    '身体': 'body / جسم',
    '很大': 'very big / كبير جدًا',
    '很长': 'very long / طويل جدًا',
    '很短': 'very short / قصير جدًا',
    '很小': 'very small / صغير جدًا',
    '也很小': 'also very small / صغير أيضًا',
    '很可爱': 'very cute / لطيف جدًا',
    '红色': 'red / أحمر',
    '黑色': 'black / أسود',
    '白色': 'white / أبيض',
    '黄色': 'yellow / أصفر',
    '绿色': 'green / أخضر',
    '是红色的': 'is red / أحمر',
    '是黑色的': 'is black / أسود',
    '是白色的': 'is white / أبيض',
    '是灰色的': 'is gray / رمادي',
    '熊猫': 'panda / باندا',
    '大象': 'elephant / فيل',
    '兔子': 'rabbit / أرنب',
    '一只兔子': 'one rabbit / أرنب واحد',
    '我有': 'I have / لدي',
    '我很喜欢': 'I really like / أنا أحب كثيرًا',
    '对': 'correct / صحيح',
    '吗': 'question particle / أداة سؤال',
    '只': 'measure word for animals / أداة عد للحيوانات',
    '色的': 'colored / بلون'
  }
};