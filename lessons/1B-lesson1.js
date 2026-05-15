window.LESSONS = window.LESSONS || {};

window.LESSONS['1B-lesson1'] = {
  id: '1B-lesson1',
  book: '1B',
  lesson: 'Lesson 1',
  title: '她是我妹妹。',
  theme: 'Family Members',
  goal: 'Introduce family members and ask who someone is.',
  heroTranslation: 'She is my younger sister.',
  titleTokens: [
    { py: 'Tā shì', hz: '她是', cls: 'person' },
    { py: 'wǒ mèimei', hz: '我妹妹', cls: 'person' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👨', pinyin: 'bàba', text: '爸爸', translation: 'dad / الأب' },
    { emoji: '👩', pinyin: 'māma', text: '妈妈', translation: 'mom / الأم' },
    { emoji: '👴', pinyin: 'yéye', text: '爷爷', translation: 'grandpa / الجد' },
    { emoji: '👵', pinyin: 'nǎinai', text: '奶奶', translation: 'grandma / الجدة' },
    { emoji: '👦', pinyin: 'gēge', text: '哥哥', translation: 'older brother / الأخ الأكبر' },
    { emoji: '👧', pinyin: 'jiějie', text: '姐姐', translation: 'older sister / الأخت الكبرى' },
    { emoji: '👦', pinyin: 'dìdi', text: '弟弟', translation: 'younger brother / الأخ الصغير' },
    { emoji: '👧', pinyin: 'mèimei', text: '妹妹', translation: 'younger sister / الأخت الصغيرة' },
    { emoji: '❓', pinyin: 'shéi', text: '谁', translation: 'who / من' },
    { emoji: '🎂', pinyin: 'duō dà', text: '多大', translation: 'how old / كم العمر' },
    { emoji: '🪪', pinyin: 'míngzi', text: '名字', translation: 'name / الاسم' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Tā shì', hz: '她是', cls: 'person' },
        { py: 'wǒ mèimei', hz: '我妹妹', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'She is my younger sister. / هي أختي الصغيرة.'
    },
    {
      tokens: [
        { py: 'Tā shì shéi', hz: '她是谁', cls: 'person' },
        { hz: '？' }
      ],
      translation: 'Who is she? / من هي؟'
    },
    {
      tokens: [
        { py: 'Nǐ mèimei', hz: '你妹妹', cls: 'person' },
        { py: 'duō dà', hz: '多大', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'How old is your younger sister? / كم عمر أختك الصغيرة؟'
    },
    {
      tokens: [
        { py: 'Tā jiào', hz: '她叫', cls: 'name' },
        { py: 'Wáng Xiǎohuá', hz: '王小华', cls: 'name' },
        { hz: '。' }
      ],
      translation: 'Her name is Wang Xiaohua. / اسمها وانغ شياو هوا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会介绍家人',
      translation: 'He is my dad. She is my mom. She is my younger sister.',
      tip: 'Reading Goal: Read family words clearly and slowly.',
      lines: [
        {
          tokens: [
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'wǒ bàba', hz: '我爸爸', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He is my dad. / هو أبي.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'wǒ māma', hz: '我妈妈', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She is my mom. / هي أمي.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'wǒ gēge', hz: '我哥哥', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He is my older brother. / هو أخي الأكبر.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'wǒ mèimei', hz: '我妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She is my younger sister. / هي أختي الصغيرة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问她是谁',
      translation: 'Who is she? She is my younger sister. How old is your younger sister? She is nine years old.',
      tip: 'Pair Work: Ask and answer about family members.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā shì shéi', hz: '她是谁', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Who is she? / من هي؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'wǒ mèimei', hz: '我妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She is my younger sister. / هي أختي الصغيرة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ mèimei', hz: '你妹妹', cls: 'person' },
            { py: 'duō dà', hz: '多大', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How old is your younger sister? / كم عمر أختك الصغيرة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ mèimei', hz: '我妹妹', cls: 'person' },
            { py: 'jiǔ suì', hz: '九岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My younger sister is nine years old. / أختي الصغيرة عمرها تسع سنوات.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā jiào shénme míngzi', hz: '她叫什么名字', cls: 'name' },
            { hz: '？' }
          ],
          translation: 'What is her name? / ما اسمها؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā jiào', hz: '她叫', cls: 'name' },
            { py: 'Wáng Xiǎohuá', hz: '王小华', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Her name is Wang Xiaohua. / اسمها وانغ شياو هوا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的家人',
      translation: 'Hello, this is my family. He is my dad. She is my mom. She is my younger sister. Her name is Wang Xiaohua.',
      tip: 'Speaking Goal: Introduce one family member with name and age.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de jiā', hz: '我的家', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Hello, this is my family. / مرحبًا، هذه عائلتي.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'wǒ bàba', hz: '我爸爸', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He is my dad. / هو أبي.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'wǒ māma', hz: '我妈妈', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She is my mom. / هي أمي.'
        },
        {
          tokens: [
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'wǒ mèimei', hz: '我妹妹', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She is my younger sister. / هي أختي الصغيرة.'
        },
        {
          tokens: [
            { py: 'Tā jiào', hz: '她叫', cls: 'name' },
            { py: 'Wáng Xiǎohuá', hz: '王小华', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Her name is Wang Xiaohua. / اسمها وانغ شياو هوا.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'jiǔ suì', hz: '九岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'She is nine years old. / عمرها تسع سنوات.'
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
      question: '1. “妹妹” 是什么意思？',
      pinyin: '“Mèimei” shì shénme yìsi?',
      translation: 'What does “妹妹” mean?',
      choices: [
        { text: 'younger sister', correct: true },
        { text: 'older sister', correct: false },
        { text: 'mom', correct: false }
      ]
    },
    {
      question: '2. “她是谁？” 是什么意思？',
      pinyin: '“Tā shì shéi?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Who is she?', correct: true },
        { text: 'How old is she?', correct: false },
        { text: 'What is her name?', correct: false }
      ]
    },
    {
      question: '3. “你妹妹多大？” 是什么意思？',
      pinyin: '“Nǐ mèimei duō dà?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How old is your younger sister?', correct: true },
        { text: 'Who is your younger sister?', correct: false },
        { text: 'Where is your younger sister?', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “older brother”？',
      pinyin: 'Nǎ yí ge shì “older brother”?',
      translation: 'Which one means “older brother”?',
      choices: [
        { text: '哥哥', correct: true },
        { text: '弟弟', correct: false },
        { text: '妹妹', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Tā shì', hz: '他是', cls: 'person' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā shì', hz: '她是', cls: 'person' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā jiào', hz: '她叫', cls: 'name' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '她', cls: 'person' },
        { blank: true },
        { py: 'suì', hz: '岁', cls: 'time' },
        { hz: '。' }
      ]
    ],
    translation: 'He is ______. She is ______. Her name is ______. She is ______ years old.',
    tip: 'Use family words: 爸爸、妈妈、哥哥、姐姐、弟弟、妹妹。'
  },

  meanings: {
    '他是': 'he is / هو',
    '她是': 'she is / هي',
    '我爸爸': 'my dad / أبي',
    '我妈妈': 'my mom / أمي',
    '我哥哥': 'my older brother / أخي الأكبر',
    '我姐姐': 'my older sister / أختي الكبرى',
    '我弟弟': 'my younger brother / أخي الصغير',
    '我妹妹': 'my younger sister / أختي الصغيرة',
    '爸爸': 'dad / الأب',
    '妈妈': 'mom / الأم',
    '爷爷': 'grandpa / الجد',
    '奶奶': 'grandma / الجدة',
    '哥哥': 'older brother / الأخ الأكبر',
    '姐姐': 'older sister / الأخت الكبرى',
    '弟弟': 'younger brother / الأخ الصغير',
    '妹妹': 'younger sister / الأخت الصغيرة',
    '她是谁': 'who is she / من هي',
    '他是谁': 'who is he / من هو',
    '你妹妹': 'your younger sister / أختك الصغيرة',
    '多大': 'how old / كم العمر',
    '九岁': 'nine years old / تسع سنوات',
    '她叫什么名字': 'what is her name / ما اسمها',
    '她叫': 'her name is / اسمها',
    '王小华': 'Wang Xiaohua / وانغ شياو هوا',
    '你好': 'hello / مرحبًا',
    '这是': 'this is / هذا',
    '我的家': 'my family / عائلتي',
    '我爱': 'I love / أنا أحب'
  }
};