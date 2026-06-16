window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson6'] = {
  id: '3A-lesson6',
  book: '3A',
  lesson: 'Lesson 6',
  title: '你们看过《功夫熊猫》吗？',
  theme: 'Movie Experience and Culture',
  goal: 'Talk about experiences using 过 and express how many times using 遍.',
  heroTranslation: 'Have you watched Kung Fu Panda?',
  titleTokens: [
    { py: 'Nǐmen', hz: '你们', cls: 'person' },
    { py: 'kànguo', hz: '看过', cls: 'activity' },
    { py: 'Gōngfu Xióngmāo', hz: '《功夫熊猫》', cls: 'activity' },
    { py: 'ma', hz: '吗', cls: 'respect' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🐼', pinyin: 'Gōngfu Xióngmāo', text: '功夫熊猫', translation: 'Kung Fu Panda / كونغ فو باندا' },
    { emoji: '👀', pinyin: 'kànguo', text: '看过', translation: 'have watched / شاهد من قبل' },
    { emoji: '🌍', pinyin: 'qùguo', text: '去过', translation: 'have been to / ذهب من قبل' },
    { emoji: '🎵', pinyin: 'tīngguo', text: '听过', translation: 'have listened to / سمع من قبل' },
    { emoji: '1️⃣', pinyin: 'yí biàn', text: '一遍', translation: 'one time / مرة واحدة' },
    { emoji: '2️⃣', pinyin: 'liǎng biàn', text: '两遍', translation: 'two times / مرتان' },
    { emoji: '⭐', pinyin: 'tèbié', text: '特别', translation: 'especially / بشكل خاص' },
    { emoji: '🏮', pinyin: 'wénhuà', text: '文化', translation: 'culture / ثقافة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'kànguo', hz: '看过', cls: 'activity' },
        { py: 'Gōngfu Xióngmāo', hz: '《功夫熊猫》', cls: 'activity' },
        { py: 'ma', hz: '吗', cls: 'respect' },
        { hz: '？' }
      ],
      translation: 'Have you watched Kung Fu Panda? / هل شاهدت كونغ فو باندا من قبل؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'kànguo', hz: '看过', cls: 'activity' },
        { py: 'liǎng biàn', hz: '两遍', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I have watched it two times. / شاهدته مرتين.'
    },
    {
      tokens: [
        { py: 'Nǐ xiǎng', hz: '你想', cls: 'person' },
        { py: 'zài kàn', hz: '再看', cls: 'activity' },
        { py: 'yí biàn', hz: '一遍', cls: 'time' },
        { py: 'ma', hz: '吗', cls: 'respect' },
        { hz: '？' }
      ],
      translation: 'Do you want to watch it one more time? / هل تريد أن تشاهده مرة أخرى؟'
    },
    {
      tokens: [
        { py: 'Wǒ hěn xǐhuān', hz: '我很喜欢', cls: 'like' },
        { py: 'Zhōngguó wénhuà', hz: '中国文化', cls: 'country' },
        { hz: '。' }
      ],
      translation: 'I really like Chinese culture. / أنا أحب الثقافة الصينية كثيرًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说经历',
      translation: 'I have watched Kung Fu Panda. I have not watched Nezha. I have been to Abu Dhabi. I have not been to Japan.',
      tip: 'Reading Goal: Understand experience sentences with 过.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'kànguo', hz: '看过', cls: 'activity' },
            { py: 'Gōngfu Xióngmāo', hz: '《功夫熊猫》', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have watched Kung Fu Panda. / شاهدت كونغ فو باندا من قبل.'
        },
        {
          tokens: [
            { py: 'Wǒ méi', hz: '我没', cls: 'self' },
            { py: 'kànguo', hz: '看过', cls: 'activity' },
            { py: 'Nézhā', hz: '《哪吒》', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have not watched Nezha. / لم أشاهد نزهة من قبل.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'qùguo', hz: '去过', cls: 'activity' },
            { py: 'Ābùzhābǐ', hz: '阿布扎比', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I have been to Abu Dhabi. / ذهبت إلى أبوظبي من قبل.'
        },
        {
  tokens: [
    { py: 'Wǒ méi', hz: '我没', cls: 'self' },
    { py: 'qùguo', hz: '去过', cls: 'activity' },
    { py: 'Zhōngguó', hz: '中国', cls: 'country' },
    { hz: '。' }
  ],
  translation: 'I have not been to China. / لم أذهب إلى الصين من قبل.'
}
      ]
    },

    B: {
      label: 'Level B 中级｜我会聊电影',
      translation: 'Have you watched Kung Fu Panda? I have watched it. Is it good? It is especially good. Do you want to watch it one more time? Yes. Then let us watch it together tomorrow.',
      tip: 'Pair Work: Talk about a movie experience and invite a friend.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'kànguo', hz: '看过', cls: 'activity' },
            { py: 'Gōngfu Xióngmāo', hz: '《功夫熊猫》', cls: 'activity' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Have you watched Kung Fu Panda? / هل شاهدت كونغ فو باندا من قبل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'kànguo', hz: '看过', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have watched it. / شاهدته من قبل.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎokàn ma', hz: '好看吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Is it good? / هل هو جميل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tèbié', hz: '特别', cls: 'like' },
            { py: 'hǎokàn', hz: '好看', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is especially good. / إنه جميل جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xiǎng', hz: '你想', cls: 'person' },
            { py: 'zài kàn', hz: '再看', cls: 'activity' },
            { py: 'yí biàn', hz: '一遍', cls: 'time' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Do you want to watch it one more time? / هل تريد أن تشاهده مرة أخرى؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiǎng', hz: '想', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Yes, I want to. / نعم، أريد.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nà wǒmen', hz: '那我们', cls: 'person' },
            { py: 'míngtiān', hz: '明天', cls: 'time' },
            { py: 'yìqǐ qù kàn ba', hz: '一起去看吧', cls: 'activity' },
            { hz: '！' }
          ],
          translation: 'Then let us watch it together tomorrow! / إذن لنشاهده معًا غدًا!'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo a', hz: '好啊', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Sure! / حسنًا!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的经历',
      translation: 'I have watched Kung Fu Panda. I have watched it two times. I think it is especially good. I have also listened to Jasmine Flower. I really like Chinese culture.',
      tip: 'Speaking Goal: Talk about your experiences and say what you think.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'kànguo', hz: '看过', cls: 'activity' },
            { py: 'Gōngfu Xióngmāo', hz: '《功夫熊猫》', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have watched Kung Fu Panda. / شاهدت كونغ فو باندا من قبل.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'kànguo', hz: '看过', cls: 'activity' },
            { py: 'liǎng biàn', hz: '两遍', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I have watched it two times. / شاهدته مرتين.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'tā', hz: '它', cls: 'activity' },
            { py: 'tèbié hǎokàn', hz: '特别好看', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think it is especially good. / أعتقد أنه جميل جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ hái', hz: '我还', cls: 'self' },
            { py: 'tīngguo', hz: '听过', cls: 'activity' },
            { py: 'Mòlìhuā', hz: '《茉莉花》', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have also listened to Jasmine Flower. / استمعت أيضًا إلى أغنية زهرة الياسمين من قبل.'
        },
        {
          tokens: [
            { py: 'Wǒ hěn xǐhuān', hz: '我很喜欢', cls: 'like' },
            { py: 'Zhōngguó wénhuà', hz: '中国文化', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I really like Chinese culture. / أنا أحب الثقافة الصينية كثيرًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “看过” 是什么意思？',
      pinyin: '“Kànguo” shì shénme yìsi?',
      translation: 'What does “看过” mean?',
      choices: [
        { text: 'have watched', correct: true },
        { text: 'will watch', correct: false },
        { text: 'do not like', correct: false }
      ]
    },
    {
      question: '2. “你看过《功夫熊猫》吗？” 是什么意思？',
      pinyin: '“Nǐ kànguo Gōngfu Xióngmāo ma?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Have you watched Kung Fu Panda?', correct: true },
        { text: 'Do you want to buy a panda?', correct: false },
        { text: 'Is the panda very big?', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “two times”？',
      pinyin: 'Nǎ yí ge shì “two times”?',
      translation: 'Which one means “two times”?',
      choices: [
        { text: '两遍', correct: true },
        { text: '一遍', correct: false },
        { text: '特别', correct: false }
      ]
    },
    {
      question: '4. “特别好看” 是什么意思？',
      pinyin: '“Tèbié hǎokàn” shì shénme yìsi?',
      translation: 'What does “特别好看” mean?',
      choices: [
        { text: 'especially good to watch', correct: true },
        { text: 'very expensive', correct: false },
        { text: 'not far', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'kànguo', hz: '看过', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'kànguo', hz: '看过', cls: 'activity' },
        { blank: true },
        { py: 'biàn', hz: '遍', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'tā', hz: '它', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ hái', hz: '我还', cls: 'self' },
        { py: 'tīngguo', hz: '听过', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ hěn xǐhuān', hz: '我很喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I have watched ______. I have watched it ______ times. I think it is ______. I have also listened to ______. I really like ______.',
    tip: 'Use: 《功夫熊猫》、 《哪吒》、一、两、特别好看、有意思、《茉莉花》、中文歌、中国文化。'
  },

  meanings: {
    '你们': 'you all / أنتم',
    '你': 'you / أنت',
    '我': 'I / أنا',
    '我没': 'I have not / أنا لم',
    '看过': 'have watched / شاهد من قبل',
    '没看过': 'have not watched / لم يشاهد من قبل',
    '去过': 'have been to / ذهب من قبل',
    '没去过': 'have not been to / لم يذهب من قبل',
    '听过': 'have listened to / سمع من قبل',
    '功夫熊猫': 'Kung Fu Panda / كونغ فو باندا',
    '《功夫熊猫》': 'Kung Fu Panda / كونغ فو باندا',
    '《哪吒》': 'Nezha / نزهة',
    '阿布扎比': 'Abu Dhabi / أبوظبي',
    '中国': 'China / الصين',
    '吗': 'question particle / أداة سؤال',
    '好看吗': 'is it good to watch / هل هو جميل',
    '特别': 'especially / بشكل خاص',
    '好看': 'good to watch / جميل للمشاهدة',
    '特别好看': 'especially good to watch / جميل جدًا',
    '想': 'want / يريد',
    '你想': 'you want / أنت تريد',
    '再看': 'watch again / يشاهد مرة أخرى',
    '一遍': 'one time / مرة واحدة',
    '两遍': 'two times / مرتان',
    '遍': 'time / مرة',
    '那我们': 'then we / إذن نحن',
    '明天': 'tomorrow / غدًا',
    '一起去看吧': 'let us go watch together / لنذهب لنشاهد معًا',
    '好啊': 'sure / حسنًا',
    '我觉得': 'I think / أعتقد',
    '它': 'it / هو',
    '我还': 'I also / أنا أيضًا',
    '《茉莉花》': 'Jasmine Flower / زهرة الياسمين',
    '我很喜欢': 'I really like / أنا أحب كثيرًا',
    '中国文化': 'Chinese culture / الثقافة الصينية',
    '中文歌': 'Chinese song / أغنية صينية',
    '有意思': 'interesting / ممتع'
  }
};