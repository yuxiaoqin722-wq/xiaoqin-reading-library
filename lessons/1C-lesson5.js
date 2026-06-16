window.LESSONS = window.LESSONS || {};

window.LESSONS['1C-lesson5'] = {
  id: '1C-lesson5',
  book: '1C',
  lesson: 'Lesson 5',
  title: '你的爱好是什么？',
  theme: 'Hobbies',
  goal: 'Ask and answer about hobbies with “你的爱好是什么？”.',
  heroTranslation: 'What is your hobby?',
  titleTokens: [
    { py: 'Nǐ de àihào', hz: '你的爱好', cls: 'like' },
    { py: 'shì shénme', hz: '是什么', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '❤️', pinyin: 'àihào', text: '爱好', translation: 'hobby / هواية' },
    { emoji: '⚽', pinyin: 'tī zúqiú', text: '踢足球', translation: 'play football / يلعب كرة القدم' },
    { emoji: '🎬', pinyin: 'kàn diànyǐng', text: '看电影', translation: 'watch movies / يشاهد فيلمًا' },
    { emoji: '🎧', pinyin: 'tīng yīnyuè', text: '听音乐', translation: 'listen to music / يستمع إلى الموسيقى' },
    { emoji: '📖', pinyin: 'kàn shū', text: '看书', translation: 'read books / يقرأ كتابًا' },
    { emoji: '🏀', pinyin: 'dǎ lánqiú', text: '打篮球', translation: 'play basketball / يلعب كرة السلة' },
    { emoji: '👕', pinyin: 'mǎi yīfu', text: '买衣服', translation: 'buy clothes / يشتري ملابس' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ de àihào', hz: '你的爱好', cls: 'like' },
        { py: 'shì shénme', hz: '是什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What is your hobby? / ما هي هوايتك؟'
    },
    {
      tokens: [
        { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { py: 'tī zúqiú', hz: '踢足球', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'My hobby is playing football. / هوايتي هي لعب كرة القدم.'
    },
    {
      tokens: [
        { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { py: 'kàn shū', hz: '看书', cls: 'activity' },
        { py: 'hé', hz: '和', cls: 'activity' },
        { py: 'tīng yīnyuè', hz: '听音乐', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'My hobbies are reading books and listening to music. / هواياتي هي قراءة الكتب والاستماع إلى الموسيقى.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说我的爱好',
      translation: 'My hobby is playing football. My hobby is watching movies. My hobby is listening to music. My hobby is reading books.',
      tip: 'Reading Goal: Read “我的爱好是……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'tī zúqiú', hz: '踢足球', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobby is playing football. / هوايتي هي لعب كرة القدم.'
        },
        {
          tokens: [
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'kàn diànyǐng', hz: '看电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobby is watching movies. / هوايتي هي مشاهدة الأفلام.'
        },
        {
          tokens: [
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'tīng yīnyuè', hz: '听音乐', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobby is listening to music. / هوايتي هي الاستماع إلى الموسيقى.'
        },
        {
          tokens: [
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'kàn shū', hz: '看书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobby is reading books. / هوايتي هي قراءة الكتب.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问爱好',
      translation: 'What is your hobby? My hobby is playing football. What about you? My hobby is listening to music.',
      tip: 'Pair Work: Ask and answer “你的爱好是什么？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ de àihào', hz: '你的爱好', cls: 'like' },
            { py: 'shì shénme', hz: '是什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What is your hobby? / ما هي هوايتك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'tī zúqiú', hz: '踢足球', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobby is playing football. / هوايتي هي لعب كرة القدم.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'What about you? / وأنت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'tīng yīnyuè', hz: '听音乐', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobby is listening to music. / هوايتي هي الاستماع إلى الموسيقى.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'kàn shū ma', hz: '看书吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you like reading books? / هل تحبين قراءة الكتب؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'kàn shū', hz: '看书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like reading books. / أحب قراءة الكتب.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的爱好',
      translation: 'Hello everyone. My name is Fatima. I am a middle school student. My hobby is reading books and listening to music. I also like watching movies. What is your hobby?',
      tip: 'Speaking Goal: Introduce one or two hobbies.',
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
            { hz: '。' }
          ],
          translation: 'My name is Fatima. / اسمي فاطمة.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'zhōngxuéshēng', hz: '中学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I am a middle school student. / أنا طالبة في المرحلة المتوسطة.'
        },
        {
          tokens: [
            { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
            { py: 'shì', hz: '是', cls: 'activity' },
            { py: 'kàn shū', hz: '看书', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'tīng yīnyuè', hz: '听音乐', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My hobbies are reading books and listening to music. / هواياتي هي قراءة الكتب والاستماع إلى الموسيقى.'
        },
        {
          tokens: [
            { py: 'Wǒ yě xǐhuan', hz: '我也喜欢', cls: 'like' },
            { py: 'kàn diànyǐng', hz: '看电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also like watching movies. / أحب أيضًا مشاهدة الأفلام.'
        },
        {
          tokens: [
            { py: 'Nǐ de àihào', hz: '你的爱好', cls: 'like' },
            { py: 'shì shénme', hz: '是什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What is your hobby? / ما هي هوايتك؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “爱好” 是什么意思？',
      pinyin: '“Àihào” shì shénme yìsi?',
      translation: 'What does “爱好” mean?',
      choices: [
        { text: 'hobby', correct: true },
        { text: 'job', correct: false },
        { text: 'birthday', correct: false }
      ]
    },
    {
      question: '2. “你的爱好是什么？” 是什么意思？',
      pinyin: '“Nǐ de àihào shì shénme?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What is your hobby?', correct: true },
        { text: 'What is your job?', correct: false },
        { text: 'What time do you get up?', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “watch movies”？',
      pinyin: 'Nǎ yí ge shì “watch movies”?',
      translation: 'Which one means “watch movies”?',
      choices: [
        { text: '看电影', correct: true },
        { text: '听音乐', correct: false },
        { text: '看书', correct: false }
      ]
    },
    {
      question: '4. “我的爱好是踢足球。” 是什么意思？',
      pinyin: '“Wǒ de àihào shì tī zúqiú.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'My hobby is playing football.', correct: true },
        { text: 'I like basketball.', correct: false },
        { text: 'I watch a movie.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ de àihào', hz: '你的爱好', cls: 'like' },
        { py: 'shì shénme', hz: '是什么', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de àihào', hz: '我的爱好', cls: 'like' },
        { py: 'shì', hz: '是', cls: 'activity' },
        { blank: true },
        { py: 'hé', hz: '和', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ yě xǐhuan', hz: '我也喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'What is your hobby? My hobby is _____. My hobbies are _____ and _____. I also like _____.',
    tip: 'Use hobby words: 踢足球、看电影、听音乐、看书、打篮球、买衣服。'
  },

  meanings: {
    '爱好': 'hobby / هواية',
    '你的爱好': 'your hobby / هوايتك',
    '我的爱好': 'my hobby / هوايتي',
    '你的爱好是什么': 'what is your hobby / ما هي هوايتك',
    '是什么': 'what is / ما هو',
    '是': 'is / يكون',
    '踢足球': 'play football / يلعب كرة القدم',
    '看电影': 'watch movies / يشاهد الأفلام',
    '听音乐': 'listen to music / يستمع إلى الموسيقى',
    '看书': 'read books / يقرأ الكتب',
    '打篮球': 'play basketball / يلعب كرة السلة',
    '买衣服': 'buy clothes / يشتري ملابس',
    '你呢': 'what about you / وأنت',
    '你喜欢': 'you like / تحب',
    '我喜欢': 'I like / أحب',
    '我也喜欢': 'I also like / أحب أيضًا',
    '看书吗': 'reading books? / قراءة الكتب؟',
    '和': 'and / و',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '我是': 'I am / أنا',
    '中学生': 'middle school student / طالب في المرحلة المتوسطة'
  }
};