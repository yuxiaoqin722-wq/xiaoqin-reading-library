window.LESSONS = window.LESSONS || {};

window.LESSONS['2B-lesson4'] = {
  id: '2B-lesson4',
  book: '2B',
  lesson: 'Lesson 4',
  title: '我现在在家上课。',
  theme: 'Places, jobs, and online class',
  goal: 'Talk about where people work, study, and have class.',
  heroTranslation: 'I am having class at home now.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'xiànzài', hz: '现在', cls: 'time' },
    { py: 'zài jiā', hz: '在家', cls: 'place' },
    { py: 'shàngkè', hz: '上课', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏠', pinyin: 'jiā', text: '家', translation: 'home / البيت' },
    { emoji: '🏫', pinyin: 'xuéxiào', text: '学校', translation: 'school / مدرسة' },
    { emoji: '🏥', pinyin: 'yīyuàn', text: '医院', translation: 'hospital / مستشفى' },
    { emoji: '📚', pinyin: 'túshūguǎn', text: '图书馆', translation: 'library / مكتبة' },
    { emoji: '👩‍🏫', pinyin: 'lǎoshī', text: '老师', translation: 'teacher / معلم' },
    { emoji: '👩‍⚕️', pinyin: 'yīshēng', text: '医生', translation: 'doctor / طبيب' },
    { emoji: '🍳', pinyin: 'chúshī', text: '厨师', translation: 'chef / طباخ' },
    { emoji: '👮', pinyin: 'jǐngchá', text: '警察', translation: 'police officer / شرطي' },
    { emoji: '💻', pinyin: 'wǎngkè', text: '网课', translation: 'online class / درس عبر الإنترنت' },
    { emoji: '❓', pinyin: 'zài nǎlǐ', text: '在哪里', translation: 'where / أين' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiànzài', hz: '现在', cls: 'time' },
        { py: 'zài jiā', hz: '在家', cls: 'place' },
        { py: 'shàngkè', hz: '上课', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I am having class at home now. / أنا أحضر الدرس في البيت الآن.'
    },
    {
      tokens: [
        { py: 'Tā', hz: '她', cls: 'person' },
        { py: 'zài xuéxiào', hz: '在学校', cls: 'place' },
        { py: 'gōngzuò', hz: '工作', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'She works at school. / هي تعمل في المدرسة.'
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'xiànzài', hz: '现在', cls: 'time' },
        { py: 'zài nǎlǐ', hz: '在哪里', cls: 'place' },
        { hz: '？' }
      ],
      translation: 'Where are you now? / أين أنت الآن؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说在哪里做什么',
      translation: 'I am having class at home. I study at school. I read books in the library. Where are you now?',
      tip: 'Reading Goal: Read “在 + place + activity” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zài jiā', hz: '在家', cls: 'place' },
            { py: 'shàngkè', hz: '上课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am having class at home. / أنا أحضر الدرس في البيت.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zài xuéxiào', hz: '在学校', cls: 'place' },
            { py: 'xuéxí', hz: '学习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I study at school. / أنا أدرس في المدرسة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zài túshūguǎn', hz: '在图书馆', cls: 'place' },
            { py: 'kàn shū', hz: '看书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I read books in the library. / أقرأ الكتب في المكتبة.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'xiànzài', hz: '现在', cls: 'time' },
            { py: 'zài nǎlǐ', hz: '在哪里', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where are you now? / أين أنت الآن؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问家人的工作',
      translation: 'What does your mother do? My mother is a teacher. Where does she work? She works at school. What about your father? My father is a doctor. He works at a hospital.',
      tip: 'Pair Work: Ask about family jobs and workplaces.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ māma', hz: '你妈妈', cls: 'person' },
            { py: 'zuò shénme gōngzuò', hz: '做什么工作', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What does your mother do? / ما عمل والدتك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
            { py: 'shì', hz: '是' },
            { py: 'lǎoshī', hz: '老师', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My mother is a teacher. / أمي معلمة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'zài nǎlǐ', hz: '在哪里', cls: 'place' },
            { py: 'gōngzuò', hz: '工作', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Where does she work? / أين تعمل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'zài xuéxiào', hz: '在学校', cls: 'place' },
            { py: 'gōngzuò', hz: '工作', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She works at school. / هي تعمل في المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ bàba ne', hz: '你爸爸呢', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'What about your father? / وماذا عن والدك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
            { py: 'shì', hz: '是' },
            { py: 'yīshēng', hz: '医生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My father is a doctor. / أبي طبيب.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'zài yīyuàn', hz: '在医院', cls: 'place' },
            { py: 'gōngzuò', hz: '工作', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He works at a hospital. / هو يعمل في المستشفى.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍家人在哪里工作',
      translation: 'My mother is a teacher. She works at school. My father is a doctor. He works at a hospital. I am having online class at home now. My friend is reading books in the library.',
      tip: 'Speaking Goal: Introduce family jobs, workplaces, and your current activity.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
            { py: 'shì', hz: '是' },
            { py: 'lǎoshī', hz: '老师', cls: 'person' },
            { hz: '，' },
            { py: 'tā', hz: '她', cls: 'person' },
            { py: 'zài xuéxiào', hz: '在学校', cls: 'place' },
            { py: 'gōngzuò', hz: '工作', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My mother is a teacher, and she works at school. / أمي معلمة، وهي تعمل في المدرسة.'
        },
        {
          tokens: [
            { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
            { py: 'shì', hz: '是' },
            { py: 'yīshēng', hz: '医生', cls: 'person' },
            { hz: '，' },
            { py: 'tā', hz: '他', cls: 'person' },
            { py: 'zài yīyuàn', hz: '在医院', cls: 'place' },
            { py: 'gōngzuò', hz: '工作', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My father is a doctor, and he works at a hospital. / أبي طبيب، وهو يعمل في المستشفى.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiànzài', hz: '现在', cls: 'time' },
            { py: 'zài jiā', hz: '在家', cls: 'place' },
            { py: 'shàng wǎngkè', hz: '上网课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am having online class at home now. / أنا أحضر درسًا عبر الإنترنت في البيت الآن.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'zài túshūguǎn', hz: '在图书馆', cls: 'place' },
            { py: 'kàn shū', hz: '看书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend is reading books in the library. / صديقي يقرأ الكتب في المكتبة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “医院” 是什么意思？',
      pinyin: '“Yīyuàn” shì shénme yìsi?',
      translation: 'What does “医院” mean?',
      choices: [
        { text: 'hospital / مستشفى', correct: true },
        { text: 'school / مدرسة', correct: false },
        { text: 'library / مكتبة', correct: false }
      ]
    },
    {
      question: '2. “我现在在家上课。” 是什么意思？',
      pinyin: '“Wǒ xiànzài zài jiā shàngkè.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am having class at home now.', correct: true },
        { text: 'My mother works at school.', correct: false },
        { text: 'I read books in the library.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你现在在哪里？',
      promptPinyin: 'Nǐ xiànzài zài nǎlǐ?',
      choices: [
        { text: '我现在在家。', pinyin: 'Wǒ xiànzài zài jiā.', correct: true },
        { text: '我喜欢吃米饭。', pinyin: 'Wǒ xǐhuan chī mǐfàn.', correct: false }
      ]
    },
    {
      question: '4. “老师在学校工作。” 是什么意思？',
      pinyin: '“Lǎoshī zài xuéxiào gōngzuò.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The teacher works at school.', correct: true },
        { text: 'The doctor works at a hospital.', correct: false },
        { text: 'The student studies at home.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
        { py: 'shì', hz: '是' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '她', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'place' },
        { blank: true },
        { py: 'gōngzuò', hz: '工作', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
        { py: 'shì', hz: '是' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '他', cls: 'person' },
        { py: 'zài', hz: '在', cls: 'place' },
        { blank: true },
        { py: 'gōngzuò', hz: '工作', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiànzài', hz: '现在', cls: 'time' },
        { py: 'zài', hz: '在', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'My mother is ______. She works at ______. My father is ______. He works at ______. I am at ______ now.',
    tip: 'Use job words: 老师、医生、厨师、警察。Use place words: 学校、医院、饭店、家、图书馆。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '他': 'he / هو',
    '她': 'she / هي',
    '我妈妈': 'my mother / أمي',
    '我爸爸': 'my father / أبي',
    '你妈妈': 'your mother / والدتك',
    '你爸爸呢': 'what about your father / وماذا عن والدك',
    '我的朋友': 'my friend / صديقي',
    '现在': 'now / الآن',
    '在': 'at / in / في',
    '在家': 'at home / في البيت',
    '在学校': 'at school / في المدرسة',
    '在医院': 'at a hospital / في المستشفى',
    '在图书馆': 'in the library / في المكتبة',
    '在哪里': 'where / أين',
    '家': 'home / البيت',
    '学校': 'school / مدرسة',
    '医院': 'hospital / مستشفى',
    '图书馆': 'library / مكتبة',
    '饭店': 'restaurant / مطعم',
    '公司': 'company / شركة',
    '教室': 'classroom / فصل دراسي',
    '老师': 'teacher / معلم',
    '医生': 'doctor / طبيب',
    '厨师': 'chef / طباخ',
    '警察': 'police officer / شرطي',
    '是': 'is / يكون',
    '工作': 'work / يعمل',
    '做什么工作': 'what job / ما العمل',
    '上课': 'have class / يحضر الدرس',
    '网课': 'online class / درس عبر الإنترنت',
    '上网课': 'have online class / يحضر درسًا عبر الإنترنت',
    '学习': 'study / يدرس',
    '看书': 'read books / يقرأ الكتب',
    '我现在在家上课': 'I am having class at home now / أنا أحضر الدرس في البيت الآن',
    '妈妈在医院工作': 'Mom works at a hospital / أمي تعمل في المستشفى'
  }
};