window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson2'] = {
  id: '4A-lesson2',
  book: '4A',
  lesson: 'Lesson 2',
  title: '北边是体育馆。',
  theme: 'Directions and School Map',
  goal: 'Introduce places around a school using 东边 / 西边 / 南边 / 北边.',
  heroTranslation: 'The gym is on the north side.',

  titleTokens: [
    { py: 'Běibiān', hz: '北边', cls: 'place' },
    { py: 'shì', hz: '是', cls: 'self' },
    { py: 'tǐyùguǎn', hz: '体育馆', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '⬆️', pinyin: 'běibiān', text: '北边', translation: 'north side / الجهة الشمالية' },
    { emoji: '⬇️', pinyin: 'nánbiān', text: '南边', translation: 'south side / الجهة الجنوبية' },
    { emoji: '➡️', pinyin: 'dōngbiān', text: '东边', translation: 'east side / الجهة الشرقية' },
    { emoji: '⬅️', pinyin: 'xībiān', text: '西边', translation: 'west side / الجهة الغربية' },
    { emoji: '🏟️', pinyin: 'tǐyùguǎn', text: '体育馆', translation: 'gym / صالة رياضية' },
    { emoji: '📚', pinyin: 'túshūguǎn', text: '图书馆', translation: 'library / مكتبة' },
    { emoji: '🍽️', pinyin: 'shítáng', text: '食堂', translation: 'canteen / مقصف' },
    { emoji: '🕌', pinyin: 'qīngzhēnsì', text: '清真寺', translation: 'mosque / مسجد' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Xuéxiào de běibiān', hz: '学校的北边', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'self' },
        { py: 'tǐyùguǎn', hz: '体育馆', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'The gym is on the north side of the school. / الصالة الرياضية في شمال المدرسة.'
    },
    {
      tokens: [
        { py: 'Xuéxiào de dōngbiān', hz: '学校的东边', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'self' },
        { py: 'túshūguǎn', hz: '图书馆', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'The library is on the east side of the school. / المكتبة في شرق المدرسة.'
    },
    {
      tokens: [
        { py: 'Tǐyùguǎn', hz: '体育馆', cls: 'activity' },
        { py: 'zài xuéxiào de běibiān', hz: '在学校的北边', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'The gym is north of the school. / الصالة الرياضية تقع شمال المدرسة.'
    },
    {
      tokens: [
        { py: 'Túshūguǎn', hz: '图书馆', cls: 'activity' },
        { py: 'zài nǎr', hz: '在哪儿', cls: 'place' },
        { hz: '？' }
      ],
      translation: 'Where is the library? / أين المكتبة؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说学校的方向',
      translation: 'The gym is on the north side of the school. The library is on the east side of the school. The canteen is on the south side of the school. The mosque is on the west side of the school.',
      tip: 'Reading Goal: Say four directions around a school.',
      lines: [
        {
          tokens: [
            { py: 'Xuéxiào de běibiān', hz: '学校的北边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'tǐyùguǎn', hz: '体育馆', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The gym is on the north side of the school. / الصالة الرياضية في شمال المدرسة.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de dōngbiān', hz: '学校的东边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The library is on the east side of the school. / المكتبة في شرق المدرسة.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de nánbiān', hz: '学校的南边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'shítáng', hz: '食堂', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The canteen is on the south side of the school. / المقصف في جنوب المدرسة.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de xībiān', hz: '学校的西边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'qīngzhēnsì', hz: '清真寺', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The mosque is on the west side of the school. / المسجد في غرب المدرسة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会看学校地图',
      translation: 'Where is the gym? The gym is on the north side of the school. Where is the library? The library is on the east side of the school. Where is the mosque? The mosque is on the west side of the school. Where is the canteen? The canteen is on the south side of the school.',
      tip: 'Pair Work: Ask and answer about places on a school map.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tǐyùguǎn', hz: '体育馆', cls: 'activity' },
            { py: 'zài nǎr', hz: '在哪儿', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where is the gym? / أين الصالة الرياضية؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tǐyùguǎn', hz: '体育馆', cls: 'activity' },
            { py: 'zài xuéxiào de běibiān', hz: '在学校的北边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The gym is north of the school. / الصالة الرياضية تقع شمال المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'activity' },
            { py: 'zài nǎr', hz: '在哪儿', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where is the library? / أين المكتبة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'activity' },
            { py: 'zài xuéxiào de dōngbiān', hz: '在学校的东边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The library is east of the school. / المكتبة تقع شرق المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qīngzhēnsì', hz: '清真寺', cls: 'activity' },
            { py: 'zài nǎr', hz: '在哪儿', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where is the mosque? / أين المسجد؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qīngzhēnsì', hz: '清真寺', cls: 'activity' },
            { py: 'zài xuéxiào de xībiān', hz: '在学校的西边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The mosque is west of the school. / المسجد يقع غرب المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shítáng', hz: '食堂', cls: 'activity' },
            { py: 'zài nǎr', hz: '在哪儿', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where is the canteen? / أين المقصف؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shítáng', hz: '食堂', cls: 'activity' },
            { py: 'zài xuéxiào de nánbiān', hz: '在学校的南边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The canteen is south of the school. / المقصف يقع جنوب المدرسة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的学校',
      translation: 'This is my school. My school is very big. The gym is on the north side of the school. The library is on the east side of the school. The canteen is on the south side of the school. The mosque is on the west side of the school. After class, many classmates go to the gym to exercise. Some classmates go to the library to read books. I often go to the library to study Chinese. I like my school.',
      tip: 'Speaking Goal: Introduce your school with directions and places.',
      lines: [
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'self' },
            { py: 'wǒ de xuéxiào', hz: '我的学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This is my school. / هذه مدرستي.'
        },
        {
          tokens: [
            { py: 'Wǒ de xuéxiào', hz: '我的学校', cls: 'place' },
            { py: 'hěn dà', hz: '很大', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'My school is very big. / مدرستي كبيرة جدًا.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de běibiān', hz: '学校的北边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'tǐyùguǎn', hz: '体育馆', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The gym is on the north side of the school. / الصالة الرياضية في شمال المدرسة.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de dōngbiān', hz: '学校的东边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'túshūguǎn', hz: '图书馆', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The library is on the east side of the school. / المكتبة في شرق المدرسة.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de nánbiān', hz: '学校的南边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'shítáng', hz: '食堂', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The canteen is on the south side of the school. / المقصف في جنوب المدرسة.'
        },
        {
          tokens: [
            { py: 'Xuéxiào de xībiān', hz: '学校的西边', cls: 'place' },
            { py: 'shì', hz: '是', cls: 'self' },
            { py: 'qīngzhēnsì', hz: '清真寺', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The mosque is on the west side of the school. / المسجد في غرب المدرسة.'
        },
        {
          tokens: [
            { py: 'Xiàkè yǐhòu', hz: '下课以后', cls: 'time' },
            { hz: '，' },
            { py: 'hěn duō tóngxué', hz: '很多同学', cls: 'person' },
            { py: 'qù tǐyùguǎn yùndòng', hz: '去体育馆运动', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After class, many classmates go to the gym to exercise. / بعد الحصة، يذهب كثير من الطلاب إلى الصالة الرياضية للرياضة.'
        },
        {
          tokens: [
            { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'qù túshūguǎn kànshū', hz: '去图书馆看书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some classmates go to the library to read books. / بعض الطلاب يذهبون إلى المكتبة لقراءة الكتب.'
        },
        {
          tokens: [
            { py: 'Wǒ chángcháng', hz: '我常常', cls: 'self' },
            { py: 'qù túshūguǎn', hz: '去图书馆', cls: 'activity' },
            { py: 'xué Zhōngwén', hz: '学中文', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I often go to the library to study Chinese. / أنا غالبًا أذهب إلى المكتبة لدراسة الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'wǒ de xuéxiào', hz: '我的学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I like my school. / أحب مدرستي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “北边是体育馆。” 是什么意思？',
      pinyin: '“Běibiān shì tǐyùguǎn.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The gym is on the north side.', correct: true },
        { text: 'The library is on the east side.', correct: false },
        { text: 'The canteen is on the south side.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “east side”？',
      pinyin: 'Nǎ yí ge shì “east side”?',
      translation: 'Which one means “east side”?',
      choices: [
        { text: '东边', correct: true },
        { text: '西边', correct: false },
        { text: '北边', correct: false }
      ]
    },
    {
      question: '3. “图书馆在学校的东边。” 是什么意思？',
      pinyin: '“Túshūguǎn zài xuéxiào de dōngbiān.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The library is east of the school.', correct: true },
        { text: 'The mosque is west of the school.', correct: false },
        { text: 'The gym is north of the school.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “mosque”？',
      pinyin: 'Nǎ yí ge shì “mosque”?',
      translation: 'Which one means “mosque”?',
      choices: [
        { text: '清真寺', correct: true },
        { text: '食堂', correct: false },
        { text: '体育馆', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhè shì', hz: '这是', cls: 'self' },
        { py: 'wǒ de xuéxiào', hz: '我的学校', cls: 'place' },
        { hz: '。' }
      ],
      [
        { py: 'Xuéxiào de běibiān', hz: '学校的北边', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xuéxiào de dōngbiān', hz: '学校的东边', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xuéxiào de nánbiān', hz: '学校的南边', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xuéxiào de xībiān', hz: '学校的西边', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ chángcháng', hz: '我常常', cls: 'self' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { py: 'xué Zhōngwén', hz: '学中文', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'This is my school. The north side of the school is ______. The east side of the school is ______. The south side of the school is ______. The west side of the school is ______. I often go to ______ to study Chinese.',
    tip: 'Use: 体育馆、图书馆、食堂、清真寺、公园、教室。'
  },

  meanings: {
    '东边': 'east side / الجهة الشرقية',
    '西边': 'west side / الجهة الغربية',
    '南边': 'south side / الجهة الجنوبية',
    '北边': 'north side / الجهة الشمالية',
    '体育馆': 'gym / صالة رياضية',
    '图书馆': 'library / مكتبة',
    '食堂': 'canteen / مقصف',
    '清真寺': 'mosque / مسجد',
    '学校': 'school / مدرسة',
    '我的学校': 'my school / مدرستي',
    '学校的北边': 'north side of the school / شمال المدرسة',
    '学校的东边': 'east side of the school / شرق المدرسة',
    '学校的南边': 'south side of the school / جنوب المدرسة',
    '学校的西边': 'west side of the school / غرب المدرسة',
    '北边是体育馆': 'the gym is on the north side / الصالة الرياضية في الشمال',
    '在学校的北边': 'north of the school / شمال المدرسة',
    '在学校的东边': 'east of the school / شرق المدرسة',
    '在学校的南边': 'south of the school / جنوب المدرسة',
    '在学校的西边': 'west of the school / غرب المدرسة',
    '在哪儿': 'where / أين',
    '体育馆在哪儿': 'where is the gym / أين الصالة الرياضية',
    '图书馆在哪儿': 'where is the library / أين المكتبة',
    '清真寺在哪儿': 'where is the mosque / أين المسجد',
    '食堂在哪儿': 'where is the canteen / أين المقصف',
    '很大': 'very big / كبير جدًا',
    '下课以后': 'after class / بعد الحصة',
    '很多同学': 'many classmates / كثير من الزملاء',
    '去体育馆运动': 'go to the gym to exercise / يذهب إلى الصالة الرياضية للرياضة',
    '有的同学': 'some classmates / بعض الزملاء',
    '去图书馆看书': 'go to the library to read books / يذهب إلى المكتبة لقراءة الكتب',
    '我常常': 'I often / أنا غالبًا',
    '去图书馆': 'go to the library / يذهب إلى المكتبة',
    '学中文': 'study Chinese / يدرس الصينية',
    '我喜欢': 'I like / أحب',
    '教室': 'classroom / فصل دراسي',
    '公园': 'park / حديقة'
  }
};