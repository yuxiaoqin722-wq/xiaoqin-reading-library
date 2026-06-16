window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson1'] = {
  id: '4A-lesson1',
  book: '4A',
  lesson: 'Lesson 1',
  title: '大家都很棒！',
  theme: 'Class Introduction and Talents',
  goal: 'Introduce a group and describe different talents using 有的……有的…….',
  heroTranslation: 'Everyone is great!',

  titleTokens: [
    { py: 'Dàjiā', hz: '大家', cls: 'person' },
    { py: 'dōu hěn bàng', hz: '都很棒', cls: 'like' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '🏫', pinyin: 'bān', text: '班', translation: 'class / صف' },
    { emoji: '👦', pinyin: 'nánshēng', text: '男生', translation: 'boy student / طالب' },
    { emoji: '👧', pinyin: 'nǚshēng', text: '女生', translation: 'girl student / طالبة' },
    { emoji: '🌍', pinyin: 'bù tóng', text: '不同', translation: 'different / مختلف' },
    { emoji: '🎤', pinyin: 'chànggē', text: '唱歌', translation: 'sing / يغني' },
    { emoji: '💃', pinyin: 'tiàowǔ', text: '跳舞', translation: 'dance / يرقص' },
    { emoji: '🎹', pinyin: 'tán gāngqín', text: '弹钢琴', translation: 'play piano / يعزف البيانو' },
    { emoji: '🎻', pinyin: 'lā èrhú', text: '拉二胡', translation: 'play erhu / يعزف الأرهو' },
    { emoji: '🎨', pinyin: 'huàhuà', text: '画画', translation: 'draw / يرسم' },
    { emoji: '⭐', pinyin: 'bàng', text: '棒', translation: 'great / رائع' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
        { py: 'yǒu hěn duō xuésheng', hz: '有很多学生', cls: 'person' },
        { hz: '。' }
      ],
      translation: 'There are many students in our class. / يوجد كثير من الطلاب في صفنا.'
    },
    {
      tokens: [
        { py: 'Yǒu de xuésheng', hz: '有的学生', cls: 'person' },
        { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Some students can sing. / بعض الطلاب يستطيعون الغناء.'
    },
    {
      tokens: [
        { py: 'Yǒu de xuésheng', hz: '有的学生', cls: 'person' },
        { py: 'huì tiàowǔ', hz: '会跳舞', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Some students can dance. / بعض الطلاب يستطيعون الرقص.'
    },
    {
      tokens: [
        { py: 'Dàjiā', hz: '大家', cls: 'person' },
        { py: 'dōu hěn bàng', hz: '都很棒', cls: 'like' },
        { hz: '！' }
      ],
      translation: 'Everyone is great! / الجميع رائعون!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会介绍班级',
      translation: 'There are many students in our class. Some students can sing. Some students can dance. Some students can draw. Everyone is great!',
      tip: 'Reading Goal: Introduce classmates with 有的……有的…….',
      lines: [
        {
          tokens: [
            { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
            { py: 'yǒu hěn duō xuésheng', hz: '有很多学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'There are many students in our class. / يوجد كثير من الطلاب في صفنا.'
        },
        {
          tokens: [
            { py: 'Yǒu de xuésheng', hz: '有的学生', cls: 'person' },
            { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some students can sing. / بعض الطلاب يستطيعون الغناء.'
        },
        {
          tokens: [
            { py: 'Yǒu de xuésheng', hz: '有的学生', cls: 'person' },
            { py: 'huì tiàowǔ', hz: '会跳舞', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some students can dance. / بعض الطلاب يستطيعون الرقص.'
        },
        {
          tokens: [
            { py: 'Yǒu de xuésheng', hz: '有的学生', cls: 'person' },
            { py: 'huì huàhuà', hz: '会画画', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some students can draw. / بعض الطلاب يستطيعون الرسم.'
        },
        {
          tokens: [
            { py: 'Dàjiā', hz: '大家', cls: 'person' },
            { py: 'dōu hěn bàng', hz: '都很棒', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Everyone is great! / الجميع رائعون!'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会介绍我们的班',
      translation: 'How many students are there in your class? There are twenty-five students in our class. Where are they from? Some are from the UAE, and some are from China. What can they do? Some students can sing, and some students can dance. Everyone is great!',
      tip: 'Pair Work: Ask and answer about your class and classmates.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐmen bān', hz: '你们班', cls: 'place' },
            { py: 'yǒu duōshao ge xuésheng', hz: '有多少个学生', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'How many students are there in your class? / كم طالبًا في صفكم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
            { py: 'yǒu èrshíwǔ ge xuésheng', hz: '有二十五个学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'There are twenty-five students in our class. / يوجد خمسة وعشرون طالبًا في صفنا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tāmen', hz: '他们', cls: 'person' },
            { py: 'lái zì nǎge guójiā', hz: '来自哪个国家', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'Which countries are they from? / من أي دول هم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'lái zì Āliánqiú', hz: '来自阿联酋', cls: 'country' },
            { hz: '，' },
            { py: 'yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'lái zì Zhōngguó', hz: '来自中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Some classmates are from the UAE, and some are from China. / بعض الزملاء من الإمارات، وبعضهم من الصين.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tāmen', hz: '他们', cls: 'person' },
            { py: 'huì shénme', hz: '会什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What can they do? / ماذا يستطيعون أن يفعلوا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yǒu de rén', hz: '有的人', cls: 'person' },
            { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
            { hz: '，' },
            { py: 'yǒu de rén', hz: '有的人', cls: 'person' },
            { py: 'huì tiàowǔ', hz: '会跳舞', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some people can sing, and some people can dance. / بعضهم يستطيع الغناء، وبعضهم يستطيع الرقص.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Dàjiā', hz: '大家', cls: 'person' },
            { py: 'dōu hěn bàng', hz: '都很棒', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Everyone is great! / الجميع رائعون!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我们的表演团队',
      translation: 'Our class will join Chinese Culture Day. There are many classmates in our class. Some classmates can sing Chinese songs. Some classmates can dance. Some classmates can play the piano. Some classmates can draw. Everyone can do different things. Although our talents are different, everyone works very hard. I think everyone is great.',
      tip: 'Speaking Goal: Introduce a group and describe different talents.',
      lines: [
        {
          tokens: [
            { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
            { py: 'yào cānjiā', hz: '要参加', cls: 'activity' },
            { py: 'Zhōngguó Wénhuà Rì', hz: '中国文化日', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Our class will join Chinese Culture Day. / سيشارك صفنا في يوم الثقافة الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
            { py: 'yǒu hěn duō tóngxué', hz: '有很多同学', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'There are many classmates in our class. / يوجد كثير من الزملاء في صفنا.'
        },
        {
          tokens: [
            { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'huì chàng Zhōngwén gē', hz: '会唱中文歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some classmates can sing Chinese songs. / بعض الزملاء يستطيعون غناء الأغاني الصينية.'
        },
        {
          tokens: [
            { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'huì tiàowǔ', hz: '会跳舞', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some classmates can dance. / بعض الزملاء يستطيعون الرقص.'
        },
        {
          tokens: [
            { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'huì tán gāngqín', hz: '会弹钢琴', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some classmates can play the piano. / بعض الزملاء يستطيعون عزف البيانو.'
        },
        {
          tokens: [
            { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
            { py: 'huì huàhuà', hz: '会画画', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Some classmates can draw. / بعض الزملاء يستطيعون الرسم.'
        },
        {
          tokens: [
            { py: 'Dàjiā', hz: '大家', cls: 'person' },
            { py: 'huì de dōngxi', hz: '会的东西', cls: 'activity' },
            { py: 'bù yíyàng', hz: '不一样', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Everyone can do different things. / كل شخص يستطيع فعل أشياء مختلفة.'
        },
        {
          tokens: [
            { py: 'Suīrán', hz: '虽然', cls: 'not-like' },
            { py: 'dàjiā de tècháng', hz: '大家的特长', cls: 'like' },
            { py: 'bù tóng', hz: '不同', cls: 'not-like' },
            { hz: '，' },
            { py: 'dànshì', hz: '但是', cls: 'not-like' },
            { py: 'dàjiā dōu hěn nǔlì', hz: '大家都很努力', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Although everyone’s talents are different, everyone works hard. / رغم أن مواهب الجميع مختلفة، فإن الجميع مجتهدون.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'dàjiā', hz: '大家', cls: 'person' },
            { py: 'dōu hěn bàng', hz: '都很棒', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think everyone is great. / أعتقد أن الجميع رائعون.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “大家都很棒！” 是什么意思？',
      pinyin: '“Dàjiā dōu hěn bàng!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Everyone is great!', correct: true },
        { text: 'Everyone is tired.', correct: false },
        { text: 'Everyone is late.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “some people”？',
      pinyin: 'Nǎ yí ge shì “some people”?',
      translation: 'Which one means “some people”?',
      choices: [
        { text: '有的人', correct: true },
        { text: '大家', correct: false },
        { text: '不同', correct: false }
      ]
    },
    {
      question: '3. “有的人会唱歌，有的人会跳舞。” 是什么意思？',
      pinyin: '“Yǒu de rén huì chànggē, yǒu de rén huì tiàowǔ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Some people can sing, and some people can dance.', correct: true },
        { text: 'Everyone can play basketball.', correct: false },
        { text: 'Some people are from China.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “different”？',
      pinyin: 'Nǎ yí ge shì “different”?',
      translation: 'Which one means “different”?',
      choices: [
        { text: '不同', correct: true },
        { text: '很棒', correct: false },
        { text: '班', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { blank: true },
        { py: 'ge tóngxué', hz: '个同学', cls: 'person' },
        { hz: '。' }
      ],
      [
        { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
        { py: 'huì', hz: '会', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
        { py: 'huì', hz: '会', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yǒu de tóngxué', hz: '有的同学', cls: 'person' },
        { py: 'lái zì', hz: '来自', cls: 'country' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Suīrán', hz: '虽然', cls: 'not-like' },
        { py: 'dàjiā', hz: '大家', cls: 'person' },
        { py: 'bù yíyàng', hz: '不一样', cls: 'not-like' },
        { hz: '，' },
        { py: 'dànshì', hz: '但是', cls: 'not-like' },
        { py: 'dàjiā dōu hěn bàng', hz: '大家都很棒', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'There are ______ classmates in our class. Some classmates can ______. Some classmates can ______. Some classmates are from ______. Although everyone is different, everyone is great.',
    tip: 'Use: 二十五、唱歌、跳舞、画画、弹钢琴、拉二胡、阿联酋、中国、沙特、埃及。'
  },

  meanings: {
    '大家': 'everyone / الجميع',
    '都很棒': 'all are great / كلهم رائعون',
    '大家都很棒': 'everyone is great / الجميع رائعون',
    '班': 'class / صف',
    '我们班': 'our class / صفنا',
    '学生': 'student / طالب',
    '同学': 'classmate / زميل',
    '有很多学生': 'has many students / يوجد كثير من الطلاب',
    '有很多同学': 'has many classmates / يوجد كثير من الزملاء',
    '男生': 'boy student / طالب',
    '女生': 'girl student / طالبة',
    '不同': 'different / مختلف',
    '不一样': 'not the same / مختلف',
    '有的': 'some / بعض',
    '有的人': 'some people / بعض الناس',
    '有的学生': 'some students / بعض الطلاب',
    '有的同学': 'some classmates / بعض الزملاء',
    '会': 'can / يستطيع',
    '会什么': 'can do what / ماذا يستطيع أن يفعل',
    '会唱歌': 'can sing / يستطيع الغناء',
    '会跳舞': 'can dance / يستطيع الرقص',
    '会画画': 'can draw / يستطيع الرسم',
    '会弹钢琴': 'can play piano / يستطيع عزف البيانو',
    '会拉二胡': 'can play erhu / يستطيع عزف الأرهو',
    '唱中文歌': 'sing Chinese songs / يغني الأغاني الصينية',
    '弹钢琴': 'play piano / يعزف البيانو',
    '拉二胡': 'play erhu / يعزف الأرهو',
    '来自': 'come from / يأتي من',
    '来自阿联酋': 'come from the UAE / من الإمارات',
    '来自中国': 'come from China / من الصين',
    '来自哪个国家': 'come from which country / من أي دولة',
    '国家': 'country / دولة',
    '阿联酋': 'the UAE / الإمارات',
    '中国': 'China / الصين',
    '沙特': 'Saudi Arabia / السعودية',
    '埃及': 'Egypt / مصر',
    '要参加': 'will join / سيشارك',
    '中国文化日': 'Chinese Culture Day / يوم الثقافة الصينية',
    '特长': 'talent / موهبة',
    '大家的特长': 'everyone’s talents / مواهب الجميع',
    '努力': 'hardworking / مجتهد',
    '大家都很努力': 'everyone works hard / الجميع مجتهدون',
    '虽然': 'although / رغم أن',
    '但是': 'but / لكن',
    '我觉得': 'I think / أعتقد'
  }
};