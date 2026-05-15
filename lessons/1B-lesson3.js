window.LESSONS = window.LESSONS || {};

window.LESSONS['1B-lesson3'] = {
  id: '1B-lesson3',
  book: '1B',
  lesson: 'Lesson 3',
  title: '我爱我家！',
  theme: 'My Family',
  goal: 'Introduce yourself and your family, and say “我爱我家”.',
  heroTranslation: 'I love my family!',
  titleTokens: [
    { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
    { py: 'wǒ jiā', hz: '我家', cls: 'place' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '❤️', pinyin: 'ài', text: '爱', translation: 'love / يحب' },
    { emoji: '👨‍👩‍👧‍👦', pinyin: 'jiā', text: '家', translation: 'family / عائلة' },
    { emoji: '👋', pinyin: 'dàjiā hǎo', text: '大家好', translation: 'hello everyone / مرحبًا بالجميع' },
    { emoji: '🏠', pinyin: 'yì jiā', text: '一家', translation: 'one family / عائلة واحدة' },
    { emoji: '👄', pinyin: 'kǒu', text: '口', translation: 'person in a family / فرد في العائلة' },
    { emoji: '👨', pinyin: 'bàba', text: '爸爸', translation: 'dad / الأب' },
    { emoji: '👩', pinyin: 'māma', text: '妈妈', translation: 'mom / الأم' },
    { emoji: '👧', pinyin: 'jiějie', text: '姐姐', translation: 'older sister / الأخت الكبرى' },
    { emoji: '👦', pinyin: 'gēge', text: '哥哥', translation: 'older brother / الأخ الأكبر' },
    { emoji: '🇦🇪', pinyin: 'Āliánqiú rén', text: '阿联酋人', translation: 'Emirati / إماراتي' }
  ],

  keySentences: [
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
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'wǒ de yì jiā', hz: '我的一家', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'This is my family. / هذه عائلتي.'
    },
    {
      tokens: [
        { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
        { py: 'wǒ jiā', hz: '我家', cls: 'place' },
        { hz: '！' }
      ],
      translation: 'I love my family! / أحب عائلتي!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说“我爱我家”',
      translation: 'Hello everyone. My name is Ali. This is my family. I love my family.',
      tip: 'Reading Goal: Read short sentences with “我爱”.',
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
            { py: 'Ālǐ', hz: '阿里', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Ali. / اسمي علي.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de jiā', hz: '我的家', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This is my family. / هذه عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
            { py: 'bàba', hz: '爸爸', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I love dad. / أحب أبي.'
        },
        {
          tokens: [
            { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I love mom. / أحب أمي.'
        },
        {
          tokens: [
            { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
            { py: 'wǒ jiā', hz: '我家', cls: 'place' },
            { hz: '！' }
          ],
          translation: 'I love my family! / أحب عائلتي!'
        }
      ]
    },

       B: {
      label: 'Level B 中级｜我会问家里有几口人',
      translation: 'Hello, what is your name? My name is Fatima. How many people are in your family? My family has five people. Do you have older brothers or older sisters? I have one older brother and one younger brother. I do not have an older sister.',
      tip: 'Pair Work: Ask and answer about name and family members.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'nǐ jiào shénme míngzi', hz: '你叫什么名字', cls: 'name' },
            { hz: '？' }
          ],
          translation: 'Hello, what is your name? / مرحبًا، ما اسمك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Fatima. / اسمي فاطمة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ jiā yǒu', hz: '你家有', cls: 'place' },
            { py: 'jǐ kǒu rén', hz: '几口人', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How many people are in your family? / كم فردًا في عائلتك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ jiā yǒu', hz: '我家有', cls: 'place' },
            { py: 'wǔ kǒu rén', hz: '五口人', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My family has five people. / في عائلتي خمسة أفراد.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
            { py: 'gēge jiějie ma', hz: '哥哥姐姐吗', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Do you have older brothers or older sisters? / هل لديك أخ أكبر أو أخت كبرى؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'yí ge', hz: '一个', cls: 'time' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { hz: '，' },
            { py: 'yí ge', hz: '一个', cls: 'time' },
            { py: 'dìdi', hz: '弟弟', cls: 'person' },
            { hz: '，' },
            { py: 'wǒ méiyǒu', hz: '我没有', cls: 'not-like' },
            { py: 'jiějie', hz: '姐姐', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I have one older brother and one younger brother. I do not have an older sister. / لدي أخ أكبر واحد وأخ أصغر واحد، وليس لدي أخت كبرى.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍自己和一家人',
      translation: 'Hello everyone, my name is Fatima. I am twelve years old. I am Emirati. This is my family. My family has five people: dad, mom, older sister, older brother and me. I love my family.',
      tip: 'Speaking Goal: Introduce yourself and your family.',
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
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'shí èr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My name is Fatima, and I am twelve years old. / اسمي فاطمة، وعمري اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتية.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de yì jiā', hz: '我的一家', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This is my family. / هذه عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒ jiā yǒu', hz: '我家有', cls: 'place' },
            { py: 'wǔ kǒu rén', hz: '五口人', cls: 'time' },
            { hz: '：' },
            { py: 'bàba', hz: '爸爸', cls: 'person' },
            { hz: '、' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { hz: '、' },
            { py: 'jiějie', hz: '姐姐', cls: 'person' },
            { hz: '、' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { hz: '。' }
          ],
          translation: 'My family has five people: dad, mom, older sister, older brother and me. / في عائلتي خمسة أشخاص: أبي وأمي وأختي الكبرى وأخي الأكبر وأنا.'
        },
        {
          tokens: [
            { py: 'Wǒ bàba', hz: '我爸爸', cls: 'person' },
            { py: 'sì shí suì', hz: '四十岁', cls: 'time' },
            { hz: '，' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { py: 'yě sì shí suì', hz: '也四十岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My dad is forty years old, and mom is also forty years old. / أبي عمره أربعون سنة، وأمي أيضًا عمرها أربعون سنة.'
        },
        {
          tokens: [
            { py: 'Wǒ jiějie', hz: '我姐姐', cls: 'person' },
            { py: 'shí qī suì', hz: '十七岁', cls: 'time' },
            { hz: '，' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { py: 'shí wǔ suì', hz: '十五岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My older sister is seventeen years old, and my older brother is fifteen years old. / أختي الكبرى عمرها سبعة عشر عامًا، وأخي الأكبر عمره خمسة عشر عامًا.'
        },
        {
          tokens: [
            { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
            { py: 'wǒ jiā', hz: '我家', cls: 'place' },
            { hz: '！' }
          ],
          translation: 'I love my family! / أحب عائلتي!'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我爱我家！” 是什么意思？',
      pinyin: '“Wǒ ài wǒ jiā!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I love my family!', correct: true },
        { text: 'I have a family.', correct: false },
        { text: 'This is my dad.', correct: false }
      ]
    },
    {
      question: '2. “这是我的一家。” 是什么意思？',
      pinyin: '“Zhè shì wǒ de yì jiā.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'This is my family.', correct: true },
        { text: 'I love my mom.', correct: false },
        { text: 'I am twelve years old.', correct: false }
      ]
    },
    {
      question: '3. “大家好！” 是什么意思？',
      pinyin: '“Dàjiā hǎo!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Hello everyone!', correct: true },
        { text: 'Thank you!', correct: false },
        { text: 'Goodbye!', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “love”？',
      pinyin: 'Nǎ yí ge shì “love”?',
      translation: 'Which one means “love”?',
      choices: [
        { text: '爱', correct: true },
        { text: '家', correct: false },
        { text: '口', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Dàjiā hǎo', hz: '大家好', cls: 'greeting' },
        { hz: '！' }
      ],
      [
        { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
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
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'wǒ de yì jiā', hz: '我的一家', cls: 'place' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ jiā yǒu', hz: '我家有', cls: 'place' },
        { blank: true },
        { py: 'kǒu rén', hz: '口人', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ ài', hz: '我爱', cls: 'like' },
        { py: 'wǒ jiā', hz: '我家', cls: 'place' },
        { hz: '！' }
      ]
    ],
    translation: 'Hello everyone! My name is _____. I am _____ years old. I am Emirati. This is my family. My family has _____ people. I love my family!',
    tip: 'Use family words: 爸爸、妈妈、哥哥、姐姐、弟弟、妹妹。'
  },

  meanings: {
    '爱': 'love / يحب',
    '我爱': 'I love / أحب',
    '我爱我家': 'I love my family / أحب عائلتي',
    '家': 'family / عائلة',
    '我家': 'my family / عائلتي',
    '我的家': 'my family / عائلتي',
    '我的一家': 'my family / عائلتي',
    '一家': 'one family / عائلة واحدة',
    '这是': 'this is / هذا',
    '这是我的一家': 'this is my family / هذه عائلتي',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '阿里': 'Ali / علي',
    '我': 'I / أنا',
    '十二岁': 'twelve years old / اثنتا عشرة سنة',
    '我是': 'I am / أنا',
    '阿联酋人': 'Emirati / إماراتي',
    '我家有': 'my family has / في عائلتي',
    '五口人': 'five people in the family / خمسة أشخاص في العائلة',
    '口': 'person in a family / فرد في العائلة',
    '口人': 'people in a family / أفراد في العائلة',
    '爸爸': 'dad / الأب',
    '妈妈': 'mom / الأم',
    '姐姐': 'older sister / الأخت الكبرى',
    '哥哥': 'older brother / الأخ الأكبر',
    '我爸爸': 'my dad / أبي',
    '我姐姐': 'my older sister / أختي الكبرى',
    '四十岁': 'forty years old / أربعون سنة',
    '也四十岁': 'also forty years old / أيضًا أربعون سنة',
    '十七岁': 'seventeen years old / سبعة عشر عامًا',
    '十五岁': 'fifteen years old / خمسة عشر عامًا',
    '你叫什么名字': 'what is your name / ما اسمك',
    '你的家吗': 'your family? / عائلتك؟',
    '你爱': 'do you love / هل تحب',
    '你家吗': 'your family? / عائلتك؟',
    '是': 'yes / نعم',
    '和': 'and / و',
    '你家有': 'your family has / في عائلتك',
    '几口人': 'how many people in the family / كم فردًا في العائلة',
    '五口人': 'five people in the family / خمسة أفراد في العائلة',
    '哥哥姐姐吗': 'older brother or older sister? / أخ أكبر أو أخت كبرى؟',
    '一个哥哥': 'one older brother / أخ أكبر واحد',
    '一个弟弟': 'one younger brother / أخ أصغر واحد',
    '我没有姐姐': 'I do not have an older sister / ليس لدي أخت كبرى'
  }
};