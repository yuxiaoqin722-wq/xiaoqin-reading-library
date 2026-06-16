window.LESSONS = window.LESSONS || {};

window.LESSONS['4B-lesson2'] = {
  id: '4B-lesson2',
  book: '4B',
  lesson: 'Lesson 2',
  title: '我正在看他拍的微电影呢。',
  theme: 'Watching and Making Micro Films',
  goal: 'Express ongoing actions using 正在……呢 and give examples using 比如.',
  heroTranslation: 'I am watching the micro film he made.',

  titleTokens: [
    { py: 'Wǒ zhèngzài', hz: '我正在', cls: 'self' },
    { py: 'kàn', hz: '看', cls: 'activity' },
    { py: 'tā pāi de', hz: '他拍的', cls: 'person' },
    { py: 'wēi diànyǐng ne', hz: '微电影呢', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🎥', pinyin: 'wēi diànyǐng', text: '微电影', translation: 'micro film / فيلم قصير' },
    { emoji: '⏳', pinyin: 'zhèngzài', text: '正在', translation: 'be doing now /正在 حدوثه الآن' },
    { emoji: '📌', pinyin: 'nèiróng', text: '内容', translation: 'content / محتوى' },
    { emoji: '✨', pinyin: 'yǒu yìsi', text: '有意思', translation: 'interesting / ممتع' },
    { emoji: '🔹', pinyin: 'bǐrú', text: '比如', translation: 'for example / مثلًا' },
    { emoji: '📖', pinyin: 'gùshi', text: '故事', translation: 'story / قصة' },
    { emoji: '📸', pinyin: 'pāi', text: '拍', translation: 'shoot; film / يصوّر' },
    { emoji: '🏫', pinyin: 'xiàoyuán shēnghuó', text: '校园生活', translation: 'campus life / الحياة المدرسية' },
    { emoji: '🐎', pinyin: 'Huā Mùlán', text: '花木兰', translation: 'Hua Mulan / هوا مولان' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ zhèngzài', hz: '我正在', cls: 'self' },
        { py: 'kàn', hz: '看', cls: 'activity' },
        { py: 'Hāsāng pāi de', hz: '哈桑拍的', cls: 'name' },
        { py: 'wēi diànyǐng ne', hz: '微电影呢', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I am watching the micro film Hassan made. / أنا أشاهد الفيلم القصير الذي صوّره حسن.'
    },
    {
      tokens: [
        { py: 'Wǒ dú guò', hz: '我读过', cls: 'self' },
        { py: 'zhè ge gùshi', hz: '这个故事', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I have read this story. / لقد قرأت هذه القصة.'
    },
    {
      tokens: [
        { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
        { py: 'hěn duō àihào', hz: '很多爱好', cls: 'activity' },
        { hz: '，' },
        { py: 'bǐrú', hz: '比如', cls: 'speaker' },
        { py: 'huàhuà', hz: '画画', cls: 'activity' },
        { hz: '、' },
        { py: 'pāi wēi diànyǐng', hz: '拍微电影', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I have many hobbies, for example drawing and making micro films. / لدي هوايات كثيرة، مثل الرسم وتصوير الأفلام القصيرة.'
    },
    {
      tokens: [
        { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
        { py: 'hé péngyou yìqǐ', hz: '和朋友一起', cls: 'person' },
        { py: 'pāi wēi diànyǐng', hz: '拍微电影', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I want to make a micro film with my friend. / أريد أن أصوّر فيلمًا قصيرًا مع صديقي.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说正在做什么',
      translation: 'I am watching the micro film Hassan made. I have read this story. I have many hobbies, for example drawing and making micro films. I want to make a micro film with my friend.',
      tip: 'Reading Goal: Use 正在……呢 and 比如 to talk about a micro film.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ zhèngzài', hz: '我正在', cls: 'self' },
            { py: 'kàn', hz: '看', cls: 'activity' },
            { py: 'Hāsāng pāi de', hz: '哈桑拍的', cls: 'name' },
            { py: 'wēi diànyǐng ne', hz: '微电影呢', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am watching the micro film Hassan made. / أنا أشاهد الفيلم القصير الذي صوّره حسن.'
        },
        {
          tokens: [
            { py: 'Wǒ dú guò', hz: '我读过', cls: 'self' },
            { py: 'zhè ge gùshi', hz: '这个故事', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have read this story. / لقد قرأت هذه القصة.'
        },
        {
          tokens: [
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'hěn duō àihào', hz: '很多爱好', cls: 'activity' },
            { hz: '，' },
            { py: 'bǐrú', hz: '比如', cls: 'speaker' },
            { py: 'huàhuà', hz: '画画', cls: 'activity' },
            { hz: '、' },
            { py: 'pāi wēi diànyǐng', hz: '拍微电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have many hobbies, for example drawing and making micro films. / لدي هوايات كثيرة، مثل الرسم وتصوير الأفلام القصيرة.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'hé péngyou yìqǐ', hz: '和朋友一起', cls: 'person' },
            { py: 'pāi wēi diànyǐng', hz: '拍微电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to make a micro film with my friend. / أريد أن أصوّر فيلمًا قصيرًا مع صديقي.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会讨论微电影',
      translation: 'What are you doing? I am watching the micro film Hassan made. How is it? It is extremely interesting. What content does it tell? It tells the story of Hua Mulan. I also want to make a micro film. What content do you want to make? For example, Chinese stories, or we can make campus life. That is a good idea.',
      tip: 'Pair Work: Ask what someone is doing and discuss micro film content.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zài', hz: '你在', cls: 'person' },
            { py: 'zuò shénme ne', hz: '做什么呢', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What are you doing? / ماذا تفعلين؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zhèngzài', hz: '我正在', cls: 'self' },
            { py: 'kàn', hz: '看', cls: 'activity' },
            { py: 'Hāsāng pāi de', hz: '哈桑拍的', cls: 'name' },
            { py: 'wēi diànyǐng ne', hz: '微电影呢', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am watching the micro film Hassan made. / أنا أشاهد الفيلم القصير الذي صوّره حسن.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'How is it? / كيف هو؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yǒu yìsi jí le', hz: '有意思极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is extremely interesting. / إنه ممتع جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jiǎng shénme nèiróng', hz: '讲什么内容', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What content does it tell? / ما محتواه؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jiǎng', hz: '讲', cls: 'activity' },
            { py: 'Huā Mùlán de gùshi', hz: '花木兰的故事', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It tells the story of Hua Mulan. / يحكي قصة هوا مولان.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yě xiǎng', hz: '我也想', cls: 'self' },
            { py: 'pāi yí ge wēi diànyǐng', hz: '拍一个微电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also want to make a micro film. / أريد أيضًا أن أصوّر فيلمًا قصيرًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xiǎng pāi', hz: '你想拍', cls: 'person' },
            { py: 'shénme nèiróng', hz: '什么内容', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What content do you want to make? / أي محتوى تريد أن تصوّر؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bǐrú', hz: '比如', cls: 'speaker' },
            { py: 'Zhōngguó gùshi', hz: '中国故事', cls: 'country' },
            { hz: '，' },
            { py: 'yě kěyǐ pāi', hz: '也可以拍', cls: 'activity' },
            { py: 'xiàoyuán shēnghuó', hz: '校园生活', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'For example, Chinese stories, or we can also film campus life. / مثلًا، قصص صينية، ويمكن أيضًا تصوير الحياة المدرسية.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè ge zhǔyi', hz: '这个主意', cls: 'activity' },
            { py: 'bùcuò', hz: '不错', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'That is a good idea. / هذه فكرة جيدة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲看微电影后的想法',
      translation: 'This afternoon, I watched the micro film Hassan made at home. The characters in the micro film were very brave, and the story was also very interesting. I liked Hua Mulan the most. She was not afraid of difficulties and always worked hard to help others. After watching it, I thought this micro film was extremely great. I also wanted to make a micro film, for example about Chinese stories or our campus life.',
      tip: 'Speaking Goal: Talk about a micro film and your own creative idea.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān xiàwǔ', hz: '今天下午', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ zài jiā lǐ', hz: '我在家里', cls: 'place' },
            { py: 'kàn', hz: '看', cls: 'activity' },
            { py: 'Hāsāng pāi de', hz: '哈桑拍的', cls: 'name' },
            { py: 'wēi diànyǐng', hz: '微电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This afternoon, I watched the micro film Hassan made at home. / بعد ظهر اليوم، شاهدت في البيت الفيلم القصير الذي صوّره حسن.'
        },
        {
          tokens: [
            { py: 'Wēi diànyǐng lǐ de rénwù', hz: '微电影里的人物', cls: 'activity' },
            { py: 'hěn yǒnggǎn', hz: '很勇敢', cls: 'like' },
            { hz: '，' },
            { py: 'gùshi', hz: '故事', cls: 'activity' },
            { py: 'yě hěn yǒuyìsi', hz: '也很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The characters in the micro film were very brave, and the story was also very interesting. / كانت الشخصيات في الفيلم شجاعة جدًا، وكانت القصة ممتعة أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒ zuì xǐhuan', hz: '我最喜欢', cls: 'like' },
            { py: 'Huā Mùlán', hz: '花木兰', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I liked Hua Mulan the most. / أكثر شخصية أحبها هي هوا مولان.'
        },
        {
          tokens: [
            { py: 'Tā bù pà', hz: '她不怕', cls: 'person' },
            { py: 'kùnnan', hz: '困难', cls: 'not-like' },
            { hz: '，' },
            { py: 'yìzhí nǔlì', hz: '一直努力', cls: 'activity' },
            { py: 'bāngzhù biérén', hz: '帮助别人', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She was not afraid of difficulties and always worked hard to help others. / لم تكن تخاف من الصعوبات، وكانت تجتهد دائمًا في مساعدة الآخرين.'
        },
        {
          tokens: [
            { py: 'Kàn wán yǐhòu', hz: '看完以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'zhè ge wēi diànyǐng', hz: '这个微电影', cls: 'activity' },
            { py: 'bàng jí le', hz: '棒极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'After watching it, I thought this micro film was extremely great. / بعد مشاهدته، شعرت أن هذا الفيلم القصير ممتاز جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ yě xiǎng', hz: '我也想', cls: 'self' },
            { py: 'pāi yí ge wēi diànyǐng', hz: '拍一个微电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also wanted to make a micro film. / أردت أيضًا أن أصوّر فيلمًا قصيرًا.'
        },
        {
          tokens: [
            { py: 'Bǐrú', hz: '比如', cls: 'speaker' },
            { py: 'pāi Zhōngguó gùshi', hz: '拍中国故事', cls: 'country' },
            { hz: '，' },
            { py: 'huòzhě pāi', hz: '或者拍', cls: 'activity' },
            { py: 'wǒmen de xiàoyuán shēnghuó', hz: '我们的校园生活', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'For example, filming Chinese stories or our campus life. / مثلًا، تصوير قصص صينية أو حياتنا المدرسية.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我正在看微电影呢。” 是什么意思？',
      pinyin: '“Wǒ zhèngzài kàn wēi diànyǐng ne.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am watching a micro film.', correct: true },
        { text: 'I watched a micro film yesterday.', correct: false },
        { text: 'I want to make a micro film.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “for example”？',
      pinyin: 'Nǎ yí ge shì “for example”?',
      translation: 'Which one means “for example”?',
      choices: [
        { text: '比如', correct: true },
        { text: '正在', correct: false },
        { text: '内容', correct: false }
      ]
    },
    {
      question: '3. “我读过这个故事。” 是什么意思？',
      pinyin: '“Wǒ dú guò zhè ge gùshi.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I have read this story.', correct: true },
        { text: 'I am writing this story.', correct: false },
        { text: 'I am filming this story.', correct: false }
      ]
    },
    {
      question: '4. “我想和朋友一起拍微电影。” 是什么意思？',
      pinyin: '“Wǒ xiǎng hé péngyou yìqǐ pāi wēi diànyǐng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I want to make a micro film with my friend.', correct: true },
        { text: 'I want to watch a film alone.', correct: false },
        { text: 'I want to read a story with my teacher.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ zhèngzài', hz: '我正在', cls: 'self' },
        { py: 'kàn', hz: '看', cls: 'activity' },
        { blank: true },
        { py: 'ne', hz: '呢', cls: 'speaker' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ dú guò', hz: '我读过', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ yǒu hěn duō', hz: '我有很多', cls: 'self' },
        { py: 'àihào', hz: '爱好', cls: 'activity' },
        { hz: '，' },
        { py: 'bǐrú', hz: '比如', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
        { py: 'hé péngyou yìqǐ', hz: '和朋友一起', cls: 'person' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I am watching ______. I have read ______. I have many hobbies, for example ______. I want to ______ with my friend.',
    tip: 'Use: 哈桑拍的微电影、这个故事、画画、拍微电影、学习中文、去博物馆。'
  },

  meanings: {
    '微电影': 'micro film / فيلم قصير',
    '正在': 'be doing now /正在 حدوثه الآن',
    '我正在': 'I am doing / أنا أقوم الآن',
    '正在看': 'am watching / يشاهد الآن',
    '正在看微电影呢': 'am watching a micro film / يشاهد فيلمًا قصيرًا الآن',
    '内容': 'content / محتوى',
    '有意思': 'interesting / ممتع',
    '有意思极了': 'extremely interesting / ممتع جدًا',
    '比如': 'for example / مثلًا',
    '故事': 'story / قصة',
    '这个故事': 'this story / هذه القصة',
    '我读过': 'I have read / لقد قرأت',
    '我读过这个故事': 'I have read this story / لقد قرأت هذه القصة',
    '拍': 'shoot; film / يصوّر',
    '拍微电影': 'make a micro film / يصوّر فيلمًا قصيرًا',
    '拍一个微电影': 'make a micro film / يصوّر فيلمًا قصيرًا',
    '校园生活': 'campus life / الحياة المدرسية',
    '花木兰': 'Hua Mulan / هوا مولان',
    '哈桑': 'Hassan / حسن',
    '哈桑拍的': 'Hassan made / الذي صوّره حسن',
    '哈桑拍的微电影': 'the micro film Hassan made / الفيلم القصير الذي صوّره حسن',
    '画画': 'draw / يرسم',
    '很多爱好': 'many hobbies / هوايات كثيرة',
    '我有很多爱好': 'I have many hobbies / لدي هوايات كثيرة',
    '和朋友一起': 'with a friend / مع صديق',
    '我想和朋友一起拍微电影': 'I want to make a micro film with my friend / أريد أن أصوّر فيلمًا قصيرًا مع صديقي',
    '你在': 'you are / أنت الآن',
    '做什么呢': 'what are you doing / ماذا تفعل',
    '怎么样': 'how is it / كيف هو',
    '讲什么内容': 'what content does it tell / ما محتواه',
    '讲': 'tell / يحكي',
    '花木兰的故事': 'the story of Hua Mulan / قصة هوا مولان',
    '我也想': 'I also want to / أريد أيضًا',
    '你想拍': 'you want to film / تريد أن تصوّر',
    '什么内容': 'what content / أي محتوى',
    '中国故事': 'Chinese stories / قصص صينية',
    '也可以拍': 'can also film / يمكن أيضًا تصوير',
    '这个主意': 'this idea / هذه الفكرة',
    '不错': 'not bad; good / جيد',
    '今天下午': 'this afternoon / بعد ظهر اليوم',
    '我在家里': 'I am at home / أنا في البيت',
    '微电影里的人物': 'characters in the micro film / الشخصيات في الفيلم القصير',
    '很勇敢': 'very brave / شجاع جدًا',
    '也很有意思': 'also very interesting / ممتع أيضًا',
    '我最喜欢': 'I like the most / أحب أكثر شيء',
    '她不怕': 'she is not afraid of / هي لا تخاف من',
    '困难': 'difficulty / صعوبة',
    '一直努力': 'always works hard / يجتهد دائمًا',
    '帮助别人': 'help others / يساعد الآخرين',
    '看完以后': 'after watching / بعد المشاهدة',
    '我觉得': 'I think / أعتقد',
    '这个微电影': 'this micro film / هذا الفيلم القصير',
    '棒极了': 'extremely great / ممتاز جدًا',
    '或者拍': 'or film / أو يصوّر',
    '我们的校园生活': 'our campus life / حياتنا المدرسية'
  }
};