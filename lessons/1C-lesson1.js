window.LESSONS = window.LESSONS || {};

window.LESSONS['1C-lesson1'] = {
  id: '1C-lesson1',
  book: '1C',
  lesson: 'Lesson 1',
  title: '我是学生。',
  theme: 'Jobs',
  goal: 'Ask and answer about jobs with “做什么工作？”.',
  heroTranslation: 'I am a student.',
  titleTokens: [
    { py: 'Wǒ shì', hz: '我是', cls: 'self' },
    { py: 'xuésheng', hz: '学生', cls: 'person' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👦', pinyin: 'xuésheng', text: '学生', translation: 'student / طالب' },
    { emoji: '👩‍🏫', pinyin: 'lǎoshī', text: '老师', translation: 'teacher / معلم' },
    { emoji: '👨‍⚕️', pinyin: 'yīshēng', text: '医生', translation: 'doctor / طبيب' },
    { emoji: '👮', pinyin: 'jǐngchá', text: '警察', translation: 'police officer / شرطي' },
    { emoji: '💼', pinyin: 'gōngzuò', text: '工作', translation: 'job / عمل' },
    { emoji: '🙋', pinyin: 'zuò shénme gōngzuò', text: '做什么工作', translation: 'do what job / ما العمل' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'xuésheng', hz: '学生', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'I am a student. / أنا طالب.'
    },
    {
      tokens: [
        { py: 'Nǐ bàba', hz: '你爸爸', cls: 'person' },
        { py: 'zuò shénme gōngzuò', hz: '做什么工作', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What job does your dad do? / ما عمل والدك؟'
    },
    {
      tokens: [
        { py: 'Tā shì', hz: '他是', cls: 'person' },
        { py: 'yīshēng', hz: '医生', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'He is a doctor. / هو طبيب.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说职业',
      translation: 'I am a student. My dad is a doctor. My mom is a teacher. My older brother is a police officer.',
      tip: 'Reading Goal: Read “是 + job” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'xuésheng', hz: '学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I am a student. / أنا طالب.'
        },
        {
          tokens: [
            { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'yīshēng', hz: '医生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My dad is a doctor. / أبي طبيب.'
        },
        {
          tokens: [
            { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'lǎoshī', hz: '老师', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My mom is a teacher. / أمي معلمة.'
        },
        {
          tokens: [
            { py: 'Wǒ gēge', hz: '我哥哥', cls: 'person' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'jǐngchá', hz: '警察', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My older brother is a police officer. / أخي الأكبر شرطي.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问工作',
      translation: 'What job does your dad do? He is a doctor. What about your mom? She is a teacher.',
      tip: 'Pair Work: Ask and answer with “做什么工作？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ bàba', hz: '你爸爸', cls: 'person' },
            { py: 'zuò shénme gōngzuò', hz: '做什么工作', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What job does your dad do? / ما عمل والدك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'yīshēng', hz: '医生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He is a doctor. / هو طبيب.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ māma ne', hz: '你妈妈呢', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'What about your mom? / وماذا عن والدتك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā shì', hz: '她是', cls: 'person' },
            { py: 'lǎoshī', hz: '老师', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'She is a teacher. / هي معلمة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ gēge', hz: '你哥哥', cls: 'person' },
            { py: 'zuò shénme gōngzuò', hz: '做什么工作', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What job does your older brother do? / ما عمل أخيك الأكبر؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā shì', hz: '他是', cls: 'person' },
            { py: 'jǐngchá', hz: '警察', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'He is a police officer. / هو شرطي.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍家人的工作',
      translation: 'Hello everyone. My name is Hassan. I am a student. My dad is a doctor. My mom is a teacher. My older brother is a police officer.',
      tip: 'Speaking Goal: Introduce yourself and your family members’ jobs.',
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
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Hassan. / اسمي حسن.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'xuésheng', hz: '学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I am a student. / أنا طالب.'
        },
        {
          tokens: [
            { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'yīshēng', hz: '医生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My dad is a doctor. / أبي طبيب.'
        },
        {
          tokens: [
            { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'lǎoshī', hz: '老师', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My mom is a teacher. / أمي معلمة.'
        },
        {
          tokens: [
            { py: 'Wǒ gēge', hz: '我哥哥', cls: 'person' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'jǐngchá', hz: '警察', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'My older brother is a police officer. / أخي الأكبر شرطي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “学生” 是什么意思？',
      pinyin: '“Xuésheng” shì shénme yìsi?',
      translation: 'What does “学生” mean?',
      choices: [
        { text: 'student', correct: true },
        { text: 'teacher', correct: false },
        { text: 'doctor', correct: false }
      ]
    },
    {
      question: '2. “医生” 是什么意思？',
      pinyin: '“Yīshēng” shì shénme yìsi?',
      translation: 'What does “医生” mean?',
      choices: [
        { text: 'doctor', correct: true },
        { text: 'police officer', correct: false },
        { text: 'student', correct: false }
      ]
    },
    {
      question: '3. “你爸爸做什么工作？” 是什么意思？',
      pinyin: '“Nǐ bàba zuò shénme gōngzuò?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What job does your dad do?', correct: true },
        { text: 'How old is your dad?', correct: false },
        { text: 'What is your dad’s name?', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “teacher”？',
      pinyin: 'Nǎ yí ge shì “teacher”?',
      translation: 'Which one means “teacher”?',
      choices: [
        { text: '老师', correct: true },
        { text: '医生', correct: false },
        { text: '警察', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ shì', hz: '我是', cls: 'self' },
        { py: 'xuésheng', hz: '学生', cls: 'person' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ māma', hz: '我妈妈', cls: 'person' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ bàba', hz: '你爸爸', cls: 'person' },
        { py: 'zuò shénme gōngzuò', hz: '做什么工作', cls: 'activity' },
        { hz: '？' }
      ]
    ],
    translation: 'I am a student. My dad is _____. My mom is _____. What job does your dad do?',
    tip: 'Use job words: 学生、老师、医生、警察。'
  },

  meanings: {
    '我是': 'I am / أنا',
    '学生': 'student / طالب',
    '老师': 'teacher / معلم',
    '医生': 'doctor / طبيب',
    '警察': 'police officer / شرطي',
    '工作': 'job / عمل',
    '做': 'do / يفعل',
    '做什么工作': 'do what job / ما العمل',
    '你爸爸': 'your dad / والدك',
    '你妈妈呢': 'what about your mom / ماذا عن والدتك',
    '你哥哥': 'your older brother / أخوك الأكبر',
    '你爸爸做什么工作': 'what job does your dad do / ما عمل والدك',
    '我爸爸': 'my dad / أبي',
    '我妈妈': 'my mom / أمي',
    '我哥哥': 'my older brother / أخي الأكبر',
    '他是': 'he is / هو',
    '她是': 'she is / هي',
    '是': 'is / يكون',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن'
  }
};