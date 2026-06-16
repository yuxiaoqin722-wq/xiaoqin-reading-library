window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson2'] = {
  id: '3A-lesson2',
  book: '3A',
  lesson: 'Lesson 2',
  title: '洗手间在图书馆里边。',
  theme: 'School Navigation and Location',
  goal: 'Ask and describe locations using 在……里边 / 前边 / 后边.',
  heroTranslation: 'The bathroom is inside the library.',
  titleTokens: [
    { py: 'Xǐshǒujiān', hz: '洗手间', cls: 'place' },
    { py: 'zài', hz: '在', cls: 'location' },
    { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
    { py: 'lǐ bian', hz: '里边。', cls: 'location' }
  ],

  keyWords: [
    { emoji: '🚻', pinyin: 'xǐshǒujiān', text: '洗手间', translation: 'bathroom / الحمام' },
    { emoji: '📚', pinyin: 'túshūguǎn', text: '图书馆', translation: 'library / المكتبة' },
    { emoji: '🏫', pinyin: 'xuéxiào', text: '学校', translation: 'school / المدرسة' },
    { emoji: '🕌', pinyin: 'lǐbàishì', text: '礼拜室', translation: 'prayer room / غرفة الصلاة' },
    { emoji: '⬅️', pinyin: 'zuǒbian', text: '左边', translation: 'left side / اليسار' },
    { emoji: '➡️', pinyin: 'yòubian', text: '右边', translation: 'right side / اليمين' },
    { emoji: '⬆️', pinyin: 'qiánbian', text: '前边', translation: 'front / الأمام' },
    { emoji: '⬇️', pinyin: 'hòubian', text: '后边', translation: 'behind / الخلف' },
    { emoji: '📍', pinyin: 'lǐbian', text: '里边', translation: 'inside / في الداخل' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Xǐshǒujiān', hz: '洗手间', cls: 'place' },
        { py: 'zài   nǎ lǐ', hz: '在哪里？', cls: 'location' }
      ],
      translation: 'Where is the bathroom? / أين الحمام؟'
    },
    {
      tokens: [
        { py: 'Xǐshǒujiān', hz: '洗手间', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
        { py: 'lǐ  bian', hz: '里边。', cls: 'location' }
      ],
      translation: 'The bathroom is inside the library. / الحمام داخل المكتبة.'
    },
    {
      tokens: [
        { py: 'Túshūguǎn', hz: '图书馆', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'xuéxiào', hz: '学校', cls: 'place' },
        { py: 'qiánbian', hz: '前边。', cls: 'location' }
      ],
      translation: 'The library is in front of the school. / المكتبة أمام المدرسة.'
    },
    {
      tokens: [
        { py: 'Lǐbàishì', hz: '礼拜室', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
        { py: 'yòubian', hz: '右边。', cls: 'location' }
      ],
      translation: 'The prayer room is on the right side of the library. / غرفة الصلاة على يمين المكتبة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说位置',
      translation: 'Where is the bathroom? The bathroom is inside the library.',
      tip: 'Reading Goal: Read location words clearly.',
      lines: [
        {
          tokens: [
            { py: 'Xǐshǒujiān', hz: '洗手间', cls: 'place' },
            { py: 'zài  nǎ lǐ', hz: '在哪里？', cls: 'location' }
          ],
          translation: 'Where is the bathroom? / أين الحمام؟'
        },
        {
          tokens: [
            { py: 'Xǐshǒujiān', hz: '洗手间', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'lǐ  bian', hz: '里边。', cls: 'location' }
          ],
          translation: 'The bathroom is inside the library. / الحمام داخل المكتبة.'
        },
        {
          tokens: [
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'zài  nǎ lǐ', hz: '在哪里？', cls: 'location' }
          ],
          translation: 'Where is the library? / أين المكتبة؟'
        },
        {
          tokens: [
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào', hz: '学校', cls: 'place' },
            { py: 'lǐ  bian', hz: '里边。', cls: 'location' }
          ],
          translation: 'The library is inside the school. / المكتبة داخل المدرسة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问路',
      translation: 'Excuse me, where is the library? The library is in front of the school. The bathroom is inside the library.',
      tip: 'Pair Work: Ask and answer about places in school.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qǐngwèn', hz: '请问，', cls: 'respect' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'zài  nǎ lǐ', hz: '在哪里？', cls: 'location' }
          ],
          translation: 'Excuse me, where is the library? / عذرًا، أين المكتبة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào', hz: '学校', cls: 'place' },
            { py: 'qiánbian', hz: '前边。', cls: 'location' }
          ],
          translation: 'The library is in front of the school. / المكتبة أمام المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Xǐshǒujiān', hz: '洗手间', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'lǐ  bian', hz: '里边。', cls: 'location' }
          ],
          translation: 'The bathroom is inside the library. / الحمام داخل المكتبة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xièxie', hz: '谢谢！', cls: 'thanks' }
          ],
          translation: 'Thank you! / شكرًا!'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bú kèqi', hz: '不客气！', cls: 'thanks' }
          ],
          translation: 'You are welcome! / على الرحب والسعة!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍学校的位置',
      translation: 'My school is big. The library is inside the school. The prayer room is on the right side of the library. The playground is behind the school.',
      tip: 'Speaking Goal: Describe places in your school with location words.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ de xuéxiào', hz: '我的学校', cls: 'place' },
            { py: 'hěn dà', hz: '很大。', cls: 'like' }
          ],
          translation: 'My school is big. / مدرستي كبيرة.'
        },
        {
          tokens: [
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào', hz: '学校', cls: 'place' },
            { py: 'lǐ  bian', hz: '里边。', cls: 'location' }
          ],
          translation: 'The library is inside the school. / المكتبة داخل المدرسة.'
        },
        {
          tokens: [
            { py: 'Lǐbàishì', hz: '礼拜室', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'yòubian', hz: '右边。', cls: 'location' }
          ],
          translation: 'The prayer room is on the right side of the library. / غرفة الصلاة على يمين المكتبة.'
        },
        {
          tokens: [
            { py: 'Cāochǎng', hz: '操场', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào', hz: '学校', cls: 'place' },
            { py: 'hòubian', hz: '后边。', cls: 'location' }
          ],
          translation: 'The playground is behind the school. / الملعب خلف المدرسة.'
        },
        {
          tokens: [
            { py: 'Wǒ chángcháng', hz: '我常常', cls: 'time' },
            { py: 'hé péngyou', hz: '和朋友', cls: 'person' },
            { py: 'qù  túshūguǎn', hz: '去图书馆。', cls: 'activity' }
          ],
          translation: 'I often go to the library with friends. / غالبًا أذهب إلى المكتبة مع أصدقائي.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuān', hz: '我喜欢', cls: 'like' },
            { py: 'wǒ de xuéxiào', hz: '我的学校。', cls: 'place' }
          ],
          translation: 'I like my school. / أحب مدرستي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “洗手间” 是什么意思？',
      pinyin: '“Xǐshǒujiān” shì shénme yìsi?',
      translation: 'What does “洗手间” mean?',
      choices: [
        { text: 'bathroom', correct: true },
        { text: 'library', correct: false },
        { text: 'school', correct: false }
      ]
    },
    {
      question: '2. “洗手间在图书馆里边。” 是什么意思？',
      pinyin: '“Xǐshǒujiān zài túshūguǎn lǐbian.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The bathroom is inside the library.', correct: true },
        { text: 'The library is behind the bathroom.', correct: false },
        { text: 'The school is outside the library.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “left side”？',
      pinyin: 'Nǎ yí ge shì “left side”?',
      translation: 'Which one means “left side”?',
      choices: [
        { text: '左边', correct: true },
        { text: '右边', correct: false },
        { text: '后边', correct: false }
      ]
    },
    {
      question: '4. “请问，图书馆在哪里？” 是什么意思？',
      pinyin: '“Qǐngwèn, túshūguǎn zài nǎlǐ?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Excuse me, where is the library?', correct: true },
        { text: 'Thank you, this is the library.', correct: false },
        { text: 'The library is very big.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Qǐngwèn', hz: '请问，', cls: 'respect' },
        { blank: true },
        { py: 'zài nǎ lǐ', hz: '在哪里？', cls: 'location' }
      ],
      [
        { blank: true },
        { py: 'zài', hz: '在', cls: 'location' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de xuéxiào', hz: '我的学校', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Excuse me, where is ____? ____ is at/in/on ____. My school is ____.',
    tip: 'Use: 图书馆、洗手间、礼拜室、前边、后边、左边、右边、里边。'
  },

  meanings: {
    '洗手间': 'bathroom / الحمام',
    '图书馆': 'library / المكتبة',
    '学校': 'school / المدرسة',
    '礼拜室': 'prayer room / غرفة الصلاة',
    '操场': 'playground / الملعب',
    '在哪里？': 'where is it / أين هو؟',
    '在': 'at / in / on / في',
    '里　边。': 'inside / في الداخل',
    '前　边。': 'in front / أمام',
    '后　边。': 'behind / خلف',
    '右　边。': 'right side / اليمين',
    '左　边': 'left side / اليسار',
    '右　边': 'right side / اليمين',
    '前　边': 'front / الأمام',
    '后　边': 'behind / الخلف',
    '里　边': 'inside / في الداخل',
    '外　边': 'outside / في الخارج',
    '请问，': 'excuse me / عذرًا',
    '谢谢！': 'thank you / شكرًا',
    '不客气！': 'you are welcome / على الرحب والسعة',
    '我的学校': 'my school / مدرستي',
    '很大。': 'very big / كبير جدًا',
    '我常常': 'I often / أنا غالبًا',
    '和朋友': 'with friends / مع الأصدقاء',
    '去图书馆。': 'go to the library / أذهب إلى المكتبة',
    '我喜欢': 'I like / أحب',
    '我的学校。': 'my school / مدرستي',
    '左边': 'left side / اليسار',
    '右边': 'right side / اليمين',
    '前边': 'front / الأمام',
    '后边': 'behind / الخلف',
    '里边': 'inside / في الداخل',
    '外边': 'outside / في الخارج'
  }
};