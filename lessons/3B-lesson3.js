window.LESSONS = window.LESSONS || {};

window.LESSONS['3B-lesson3'] = {
  id: '3B-lesson3',
  book: '3B',
  lesson: 'Lesson 3',
  title: '别担心，我帮你复习。',
  theme: 'Care and Help',
  goal: 'Express worry or difficulty, comfort others, and offer help using 别 and 帮.',
  heroTranslation: 'Don’t worry. I will help you review.',

  titleTokens: [
    { py: 'Bié dānxīn', hz: '别担心', cls: 'not-like' },
    { hz: '，' },
    { py: 'wǒ bāng nǐ', hz: '我帮你', cls: 'self' },
    { py: 'fùxí', hz: '复习', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '😟', pinyin: 'dānxīn', text: '担心', translation: 'worry / قلق' },
    { emoji: '🚫', pinyin: 'bié', text: '别', translation: 'don’t / لا' },
    { emoji: '🤝', pinyin: 'bāng', text: '帮', translation: 'help / يساعد' },
    { emoji: '📖', pinyin: 'fùxí', text: '复习', translation: 'review / يراجع' },
    { emoji: '✍️', pinyin: 'liànxí', text: '练习', translation: 'practice / يتدرب' },
    { emoji: '📝', pinyin: 'kǎoshì', text: '考试', translation: 'exam / اختبار' },
    { emoji: '😴', pinyin: 'kùn', text: '困', translation: 'sleepy / نعسان' },
    { emoji: '🌙', pinyin: 'wǎn', text: '晚', translation: 'late / متأخر' },
    { emoji: '✅', pinyin: 'róngyì', text: '容易', translation: 'easy / سهل' },
    { emoji: '😵', pinyin: 'nán', text: '难', translation: 'difficult / صعب' },
    { emoji: '➕', pinyin: 'yǒudiǎnr', text: '有点儿', translation: 'a little / قليلًا' },
    { emoji: '🤒', pinyin: 'bù shūfu', text: '不舒服', translation: 'not feeling well / غير مرتاح' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'Hànyǔ', hz: '汉语', cls: 'activity' },
        { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'I think Chinese is a little difficult. / أعتقد أن الصينية صعبة قليلًا.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yǒudiǎnr dānxīn', hz: '有点儿担心', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'I am a little worried. / أنا قلقة قليلًا.'
    },
    {
      tokens: [
        { py: 'Bié dānxīn', hz: '别担心', cls: 'not-like' },
        { hz: '！' }
      ],
      translation: 'Don’t worry! / لا تقلق!'
    },
    {
      tokens: [
        { py: 'Wǒ bāng nǐ', hz: '我帮你', cls: 'self' },
        { py: 'fùxí', hz: '复习', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I will help you review. / سأساعدك في المراجعة.'
    },
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'yìqǐ liànxí ba', hz: '一起练习吧', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Let’s practice together. / لنتدرب معًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说学习感受',
      translation: 'I think Chinese is a little difficult. I think writing Chinese characters is a little difficult. I think this exam is a little difficult. I am a little worried. Don’t worry!',
      tip: 'Reading Goal: Say what feels difficult and express worry.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Hànyǔ', hz: '汉语', cls: 'activity' },
            { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I think Chinese is a little difficult. / أعتقد أن الصينية صعبة قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I think writing Chinese characters is a little difficult. / أعتقد أن كتابة الحروف الصينية صعبة قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'zhè cì kǎoshì', hz: '这次考试', cls: 'activity' },
            { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I think this exam is a little difficult. / أعتقد أن هذا الاختبار صعب قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yǒudiǎnr dānxīn', hz: '有点儿担心', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I am a little worried. / أنا قلقة قليلًا.'
        },
        {
          tokens: [
            { py: 'Bié dānxīn', hz: '别担心', cls: 'not-like' },
            { hz: '！' }
          ],
          translation: 'Don’t worry! / لا تقلق!'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会安慰朋友',
      translation: 'What is wrong? I am a little worried. Why? There is a Chinese exam next week. Don’t worry. I will help you review. Thank you. What do you think about writing Chinese characters? I think it is a little difficult. Don’t worry. Let’s practice together.',
      tip: 'Pair Work: Comfort a friend and offer help.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zěnme le', hz: '怎么了', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What is wrong? / ما بك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yǒudiǎnr dānxīn', hz: '有点儿担心', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I am a little worried. / أنا قلق قليلًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wèishénme', hz: '为什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Why? / لماذا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xià ge xīngqī', hz: '下个星期', cls: 'time' },
            { py: 'yǒu Hànyǔ kǎoshì', hz: '有汉语考试', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There is a Chinese exam next week. / يوجد اختبار صيني الأسبوع القادم.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bié dānxīn', hz: '别担心', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ bāng nǐ', hz: '我帮你', cls: 'self' },
            { py: 'fùxí', hz: '复习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Don’t worry. I will help you review. / لا تقلق. سأساعدك في المراجعة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xièxie nǐ', hz: '谢谢你', cls: 'thanks' },
            { hz: '！' }
          ],
          translation: 'Thank you! / شكرًا لك!'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ juéde', hz: '你觉得', cls: 'person' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'What do you think about writing Chinese characters? / ما رأيك في كتابة الحروف الصينية؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I think it is a little difficult. / أعتقد أنها صعبة قليلًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bié dānxīn', hz: '别担心', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Don’t worry. / لا تقلقي.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'yìqǐ liànxí ba', hz: '一起练习吧', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Let’s practice together. / لنتدرب معًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo a', hz: '好啊', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Okay! / حسنًا!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲考试前的帮助',
      translation: 'There is a Chinese exam next week. I think writing Chinese characters is a little difficult. Last night, I practiced writing Chinese characters and slept very late. Today, I am a little sleepy and a little worried. My friend said to me, “Don’t worry. I will help you review.” After school, we practiced Chinese characters together. Now, I think Chinese is not that difficult.',
      tip: 'Speaking Goal: Tell a short story about worry, help and progress.',
      lines: [
        {
          tokens: [
            { py: 'Xià ge xīngqī', hz: '下个星期', cls: 'time' },
            { py: 'yǒu Hànyǔ kǎoshì', hz: '有汉语考试', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There is a Chinese exam next week. / يوجد اختبار صيني الأسبوع القادم.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I think writing Chinese characters is a little difficult. / أعتقد أن كتابة الحروف الصينية صعبة قليلًا.'
        },
        {
          tokens: [
            { py: 'Zuótiān wǎnshang', hz: '昨天晚上', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ liànxí', hz: '我练习', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { hz: '，' },
            { py: 'shuì de hěn wǎn', hz: '睡得很晚', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Last night, I practiced writing Chinese characters and slept very late. / البارحة ليلًا تدربت على كتابة الحروف الصينية ونمت متأخرًا جدًا.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ yǒudiǎnr kùn', hz: '我有点儿困', cls: 'self' },
            { hz: '，' },
            { py: 'yě yǒudiǎnr dānxīn', hz: '也有点儿担心', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Today, I am a little sleepy and a little worried. / اليوم أنا نعسان قليلًا وقلق قليلًا أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'duì wǒ shuō', hz: '对我说', cls: 'activity' },
            { hz: '：“' },
            { py: 'Bié dānxīn', hz: '别担心', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ bāng nǐ', hz: '我帮你', cls: 'self' },
            { py: 'fùxí', hz: '复习', cls: 'activity' },
            { hz: '。”' }
          ],
          translation: 'My friend said to me, “Don’t worry. I will help you review.” / قال لي صديقي: “لا تقلق، سأساعدك في المراجعة.”'
        },
        {
          tokens: [
            { py: 'Fàngxué yǐhòu', hz: '放学以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'yìqǐ liànxí', hz: '一起练习', cls: 'activity' },
            { py: 'Hànzì', hz: '汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After school, we practiced Chinese characters together. / بعد المدرسة، تدربنا على الحروف الصينية معًا.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Hànyǔ', hz: '汉语', cls: 'activity' },
            { py: 'méiyǒu nàme nán le', hz: '没有那么难了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Now, I think Chinese is not that difficult anymore. / الآن أعتقد أن الصينية لم تعد صعبة إلى هذا الحد.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “别担心” 是什么意思？',
      pinyin: '“Bié dānxīn” shì shénme yìsi?',
      translation: 'What does “别担心” mean?',
      choices: [
        { text: 'Don’t worry.', correct: true },
        { text: 'I am sleepy.', correct: false },
        { text: 'It is difficult.', correct: false }
      ]
    },
    {
      question: '2. “我帮你复习。” 是什么意思？',
      pinyin: '“Wǒ bāng nǐ fùxí.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I will help you review.', correct: true },
        { text: 'I think it is easy.', correct: false },
        { text: 'I am worried.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “difficult”？',
      pinyin: 'Nǎ yí ge shì “difficult”?',
      translation: 'Which one means “difficult”?',
      choices: [
        { text: '难', correct: true },
        { text: '容易', correct: false },
        { text: '晚', correct: false }
      ]
    },
    {
      question: '4. “我觉得写汉字有点儿难。” 是什么意思？',
      pinyin: '“Wǒ juéde xiě Hànzì yǒudiǎnr nán.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I think writing Chinese characters is a little difficult.', correct: true },
        { text: 'I help you review Chinese.', correct: false },
        { text: 'I am not worried.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'yǒudiǎnr', hz: '有点儿', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā juéde', hz: '他/她觉得', cls: 'person' },
        { blank: true },
        { py: 'yǒudiǎnr nán', hz: '有点儿难', cls: 'not-like' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ shuō', hz: '我说', cls: 'self' },
        { hz: '：“' },
        { py: 'Bié', hz: '别', cls: 'not-like' },
        { blank: true },
        { hz: '，' },
        { py: 'wǒ bāng nǐ', hz: '我帮你', cls: 'self' },
        { blank: true },
        { hz: '。”' }
      ],
      [
        { py: 'Hòulái', hz: '后来', cls: 'time' },
        { hz: '，' },
        { py: 'wǒmen', hz: '我们', cls: 'self' },
        { py: 'yìqǐ', hz: '一起', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'My friend is a little ______. He/She thinks ______ is a little difficult. I said, “Don’t ______. I will help you ______.” Later, we ______ together.',
    tip: 'Use: 担心、紧张、害怕、汉语、写汉字、阿拉伯语、数学、复习、练习、学习。'
  },

  meanings: {
    '担心': 'worry / قلق',
    '别': 'do not / لا',
    '帮': 'help / يساعد',
    '复习': 'review / يراجع',
    '练习': 'practice / يتدرب',
    '考试': 'exam / اختبار',
    '困': 'sleepy / نعسان',
    '晚': 'late / متأخر',
    '容易': 'easy / سهل',
    '难': 'difficult / صعب',
    '有点儿': 'a little / قليلًا',
    '不舒服': 'not feeling well / غير مرتاح',
    '我觉得': 'I think / أعتقد',
    '你觉得': 'you think / أنت تعتقد',
    '汉语': 'Chinese language / اللغة الصينية',
    '写汉字': 'write Chinese characters / كتابة الحروف الصينية',
    '这次考试': 'this exam / هذا الاختبار',
    '有点儿难': 'a little difficult / صعب قليلًا',
    '有点儿担心': 'a little worried / قلق قليلًا',
    '你怎么了': 'what is wrong / ما بك',
    '为什么': 'why / لماذا',
    '下个星期': 'next week / الأسبوع القادم',
    '有汉语考试': 'there is a Chinese exam / يوجد اختبار صيني',
    '我帮你': 'I help you / أساعدك',
    '谢谢你': 'thank you / شكرًا لك',
    '怎么样': 'how / كيف',
    '一起练习吧': 'let us practice together / لنتدرب معًا',
    '好啊': 'okay / حسنًا',
    '昨天晚上': 'last night / البارحة ليلًا',
    '我练习': 'I practice / أنا أتدرب',
    '睡得很晚': 'sleep very late / ينام متأخرًا جدًا',
    '今天': 'today / اليوم',
    '我有点儿困': 'I am a little sleepy / أنا نعسان قليلًا',
    '也有点儿担心': 'also a little worried / قلق أيضًا قليلًا',
    '我的朋友': 'my friend / صديقي / صديقتي',
    '对我说': 'said to me / قال لي',
    '放学以后': 'after school / بعد المدرسة',
    '一起练习': 'practice together / يتدربان معًا',
    '汉字': 'Chinese characters / الحروف الصينية',
    '现在': 'now / الآن',
    '没有那么难了': 'not that difficult anymore / لم يعد صعبًا إلى هذا الحد',
    '紧张': 'nervous / متوتر',
    '害怕': 'afraid / خائف',
    '后来': 'later / لاحقًا',
    '一起': 'together / معًا'
  }
};