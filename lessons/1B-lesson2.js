window.LESSONS = window.LESSONS || {};

window.LESSONS['1B-lesson2'] = {
  id: '1B-lesson2',
  book: '1B',
  lesson: 'Lesson 2',
  title: '我有两个哥哥。',
  theme: 'Have and Do Not Have',
  goal: 'Use “有” and “没有” to talk about family members.',
  heroTranslation: 'I have two older brothers.',
  titleTokens: [
    { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
    { py: 'liǎng ge', hz: '两个', cls: 'time' },
    { py: 'gēge', hz: '哥哥', cls: 'person' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '✅', pinyin: 'yǒu', text: '有', translation: 'have / لديه' },
    { emoji: '🚫', pinyin: 'méiyǒu', text: '没有', translation: 'do not have / ليس لديه' },
    { emoji: '1️⃣', pinyin: 'yí ge', text: '一个', translation: 'one / واحد' },
    { emoji: '2️⃣', pinyin: 'liǎng ge', text: '两个', translation: 'two / اثنان' },
    { emoji: '➕', pinyin: 'hé', text: '和', translation: 'and / و' },
    { emoji: '👦', pinyin: 'gēge', text: '哥哥', translation: 'older brother / الأخ الأكبر' },
    { emoji: '👧', pinyin: 'jiějie', text: '姐姐', translation: 'older sister / الأخت الكبرى' },
    { emoji: '👦', pinyin: 'dìdi', text: '弟弟', translation: 'younger brother / الأخ الصغير' },
    { emoji: '👧', pinyin: 'mèimei', text: '妹妹', translation: 'younger sister / الأخت الصغيرة' },
    { emoji: '🇦🇪', pinyin: 'Āliánqiú rén', text: '阿联酋人', translation: 'Emirati / إماراتي' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
        { py: 'gēge', hz: '哥哥', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'I have an older brother. / لدي أخ أكبر.'
    },
    {
      tokens: [
        { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
        { py: 'mèimei', hz: '妹妹', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'I do not have a younger sister. / ليس لدي أخت صغيرة.'
    },
    {
      tokens: [
        { py: 'Tā yǒu', hz: '他有', cls: 'person' },
        { py: 'jiějie', hz: '姐姐', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'He has an older sister. / لديه أخت كبرى.'
    },
    {
      tokens: [
        { py: 'Tā méiyǒu', hz: '他没有', cls: 'not-like' },
        { py: 'dìdi', hz: '弟弟', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'He does not have a younger brother. / ليس لديه أخ صغير.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说“有”和“没有”',
      translation: 'I have an older brother. I do not have a younger sister. He has an older sister. He does not have a younger brother.',
      tip: 'Reading Goal: Read “有 / 没有” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have an older brother. / لدي أخ أكبر.'
        },
        {
          tokens: [
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
            { py: 'mèimei', hz: '妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I do not have a younger sister. / ليس لدي أخت صغيرة.'
        },
        {
          tokens: [
            { py: 'Tā yǒu', hz: '他有', cls: 'person' },
            { py: 'jiějie', hz: '姐姐', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He has an older sister. / لديه أخت كبرى.'
        },
        {
          tokens: [
            { py: 'Tā méiyǒu', hz: '他没有', cls: 'not-like' },
            { py: 'dìdi', hz: '弟弟', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He does not have a younger brother. / ليس لديه أخ صغير.'
        },
        {
          tokens: [
            { py: 'Tā yǒu', hz: '她有', cls: 'person' },
            { py: 'mèimei', hz: '妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She has a younger sister. / لديها أخت صغيرة.'
        },
        {
          tokens: [
            { py: 'Tā méiyǒu', hz: '她没有', cls: 'not-like' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She does not have an older brother. / ليس لديها أخ أكبر.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问答“你有……吗？”',
      translation: 'Do you have an older brother? Yes, I have an older brother. Do you have a younger sister? No, I do not have a younger sister.',
      tip: 'Pair Work: Ask and answer with “你有……吗？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
            { py: 'gēge ma', hz: '哥哥吗', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Do you have an older brother? / هل لديك أخ أكبر؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have an older brother. / لدي أخ أكبر.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
            { py: 'mèimei ma', hz: '妹妹吗', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Do you have a younger sister? / هل لديك أخت صغيرة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
            { py: 'mèimei', hz: '妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I do not have a younger sister. / ليس لدي أخت صغيرة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
            { py: 'dìdi ma', hz: '弟弟吗', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Do you have a younger brother? / هل لديك أخ صغير؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'yí ge', hz: '一个', cls: 'time' },
            { py: 'dìdi', hz: '弟弟', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have one younger brother. / لدي أخ صغير واحد.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
            { py: 'jiějie ma', hz: '姐姐吗', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Do you have an older sister? / هل لديك أخت كبرى؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
            { py: 'jiějie', hz: '姐姐', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I do not have an older sister. / ليس لدي أخت كبرى.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍自己和家人',
      translation: 'Hello, my name is Hassan. I am nine years old. I am Emirati. I have two older sisters. I have one younger brother. I do not have a younger sister.',
      tip: 'Speaking Goal: Introduce yourself, nationality, age and family.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Hello, my name is Hassan. / مرحبًا، اسمي حسن.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jiǔ suì', hz: '九岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am nine years old. / عمري تسع سنوات.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتي.'
        },
        {
          tokens: [
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'liǎng ge', hz: '两个', cls: 'time' },
            { py: 'jiějie', hz: '姐姐', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have two older sisters. / لدي أختان كبيرتان.'
        },
        {
          tokens: [
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'yí ge', hz: '一个', cls: 'time' },
            { py: 'dìdi', hz: '弟弟', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have one younger brother. / لدي أخ صغير واحد.'
        },
        {
          tokens: [
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
            { py: 'mèimei', hz: '妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I do not have a younger sister. / ليس لدي أخت صغيرة.'
        },
        {
          tokens: [
            { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
            { py: 'wǒ de jiā', hz: '我的家', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I love my family. / أنا أحب عائلتي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “有” 是什么意思？',
      pinyin: '“Yǒu” shì shénme yìsi?',
      translation: 'What does “有” mean?',
      choices: [
        { text: 'have', correct: true },
        { text: 'do not have', correct: false },
        { text: 'name', correct: false }
      ]
    },
    {
      question: '2. “没有” 是什么意思？',
      pinyin: '“Méiyǒu” shì shénme yìsi?',
      translation: 'What does “没有” mean?',
      choices: [
        { text: 'do not have', correct: true },
        { text: 'and', correct: false },
        { text: 'two', correct: false }
      ]
    },
    {
      question: '3. “我没有妹妹。” 是什么意思？',
      pinyin: '“Wǒ méiyǒu mèimei.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I do not have a younger sister.', correct: true },
        { text: 'I have a younger sister.', correct: false },
        { text: 'I have an older sister.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “I have an older brother”？',
      pinyin: 'Nǎ yí ge shì “I have an older brother”?',
      translation: 'Which one means “I have an older brother”?',
      choices: [
        { text: '我有哥哥。', correct: true },
        { text: '我没有哥哥。', correct: false },
        { text: '我有妹妹。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
        { hz: '，' },
        { py: 'wǒ jiào', hz: '我叫', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'suì', hz: '岁', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Hello, my name is _____. I am _____ years old. I am Emirati. I have _____. I do not have _____.',
    tip: 'Use family words: 哥哥、姐姐、弟弟、妹妹。'
  },

  meanings: {
    '有': 'have / لديه',
    '没有': 'do not have / ليس لديه',
    '我有': 'I have / لدي',
    '你有': 'you have / لديك',
    '他有': 'he has / لديه',
    '她有': 'she has / لديها',
    '我没有': 'I do not have / ليس لدي',
    '他没有': 'he does not have / ليس لديه',
    '她没有': 'she does not have / ليس لديها',
    '哥哥': 'older brother / الأخ الأكبر',
    '姐姐': 'older sister / الأخت الكبرى',
    '弟弟': 'younger brother / الأخ الصغير',
    '妹妹': 'younger sister / الأخت الصغيرة',
    '哥哥吗': 'older brother? / هل لديك أخ أكبر؟',
    '姐姐吗': 'older sister? / هل لديك أخت كبرى؟',
    '弟弟吗': 'younger brother? / هل لديك أخ صغير؟',
    '妹妹吗': 'younger sister? / هل لديك أخت صغيرة؟',
    '一个': 'one / واحد',
    '两个': 'two / اثنان',
    '个': 'measure word / كلمة قياس',
    '一个弟弟': 'one younger brother / أخ صغير واحد',
    '两个姐姐': 'two older sisters / أختان كبيرتان',
    '你好': 'hello / مرحبًا',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن',
    '九岁': 'nine years old / تسع سنوات',
    '我是': 'I am / أنا',
    '阿联酋人': 'Emirati / إماراتي',
    '我爱': 'I love / أنا أحب',
    '我的家': 'my family / عائلتي'
  }
};