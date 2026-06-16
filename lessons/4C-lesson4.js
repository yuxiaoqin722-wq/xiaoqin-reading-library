window.LESSONS = window.LESSONS || {};

window.LESSONS['4C-lesson4'] = {
  id: '4C-lesson4',
  book: '4C',
  lesson: 'Lesson 4',
  title: '我们一到假期就去旅行。',
  theme: 'Holiday Plans and Travel',
  goal: 'Use 一……就…… to express that one action happens immediately after another.',
  heroTranslation: 'As soon as the holiday starts, we go traveling.',

  titleTokens: [
    { py: 'Wǒmen', hz: '我们', cls: 'self' },
    { py: 'yí dào jiàqī', hz: '一到假期', cls: 'time' },
    { py: 'jiù qù lǚxíng。', hz: '就去旅行。', cls: 'activity' }
  ],

  keyWords: [
    { emoji: '🏖️', pinyin: 'jiàqī', text: '假期', translation: 'holiday / عطلة' },
    { emoji: '✈️', pinyin: 'lǚxíng', text: '旅行', translation: 'travel / سفر' },
    { emoji: '📋', pinyin: 'jìhuà', text: '计划', translation: 'plan / خطة' },
    { emoji: '✅', pinyin: 'quèdìng', text: '确定', translation: 'confirm; be sure / يتأكد' },
    { emoji: '❤️', pinyin: 'xiǎngniàn', text: '想念', translation: 'miss / يشتاق' },
    { emoji: '💌', pinyin: 'wènhòu', text: '问候', translation: 'send greetings / يرسل التحيات' },
    { emoji: '👨‍👩‍👧‍👦', pinyin: 'qīnrén', text: '亲人', translation: 'relatives; loved ones / الأقارب' },
    { emoji: '🌍', pinyin: 'Ōuzhōu', text: '欧洲', translation: 'Europe / أوروبا' },
    { emoji: '🎫', pinyin: 'jīpiào', text: '机票', translation: 'flight ticket / تذكرة طيران' },
    { emoji: '🚆', pinyin: 'chūfā', text: '出发', translation: 'set off; depart / ينطلق' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Jiàqī kuài dào le', hz: '假期快到了', cls: 'time' },
        { py: 'nǐ yǒu shénme jìhuà？', hz: '你有什么计划？', cls: 'speaker' }
      ],
      translation: 'The holiday is coming soon. What plans do you have? / العطلة قادمة قريبًا، ما خططك؟'
    },
    {
      tokens: [
        { py: 'Wǒ dǎsuàn', hz: '我打算', cls: 'self' },
        { py: 'yí fàngjià', hz: '一放假', cls: 'time' },
        { py: 'jiù huí Zhōngguó。', hz: '就回中国。', cls: 'activity' }
      ],
      translation: 'I plan to return to China as soon as the holiday starts. / أخطط للعودة إلى الصين بمجرد أن تبدأ العطلة.'
    },
    {
      tokens: [
        { py: 'Wǒ hěn xiǎngniàn', hz: '我很想念', cls: 'like' },
        { py: 'wǒ de qīnrén。', hz: '我的亲人。', cls: 'person' }
      ],
      translation: 'I miss my relatives very much. / أشتاق إلى أقاربي كثيرًا.'
    },
    {
      tokens: [
        { py: 'Rúguǒ jiàn dào tāmen', hz: '如果见到他们', cls: 'speaker' },
        { py: 'qǐng dài wǒ', hz: '请代我', cls: 'respect' },
        { py: 'wènhòu tāmen。', hz: '问候他们。', cls: 'activity' }
      ],
      translation: 'If you see them, please send them my greetings. / إذا رأيتهم، أرجو أن تنقل لهم تحياتي.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会用“一……就……”说动作',
      translation: 'As soon as school ends, I go home. As soon as the weekend comes, I sleep. As soon as I have time, I read books. As soon as I finish my homework, I play games. As soon as the holiday starts, we go traveling.',
      tip: 'Reading Goal: Use 一……就…… to show that one action happens right after another.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yí fàngxué', hz: '一放学', cls: 'time' },
            { py: 'jiù huí jiā。', hz: '就回家。', cls: 'activity' }
          ],
          translation: 'As soon as school ends, I go home. / بمجرد أن تنتهي المدرسة، أعود إلى البيت.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yí dào zhōumò', hz: '一到周末', cls: 'time' },
            { py: 'jiù shuìjiào。', hz: '就睡觉。', cls: 'activity' }
          ],
          translation: 'As soon as the weekend comes, I sleep. / بمجرد أن تأتي عطلة نهاية الأسبوع، أنام.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yì yǒu shíjiān', hz: '一有时间', cls: 'time' },
            { py: 'jiù kàn shū。', hz: '就看书。', cls: 'activity' }
          ],
          translation: 'As soon as I have time, I read books. / بمجرد أن يكون لدي وقت، أقرأ الكتب.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yí zuò wán zuòyè', hz: '一做完作业', cls: 'activity' },
            { py: 'jiù wán yóuxì。', hz: '就玩游戏。', cls: 'activity' }
          ],
          translation: 'As soon as I finish my homework, I play games. / بمجرد أن أنهي واجبي، ألعب الألعاب.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'yí dào jiàqī', hz: '一到假期', cls: 'time' },
            { py: 'jiù qù lǚxíng。', hz: '就去旅行。', cls: 'activity' }
          ],
          translation: 'As soon as the holiday starts, we go traveling. / بمجرد أن تبدأ العطلة، نذهب للسفر.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会谈假期旅行和亲人',
      translation: 'The holiday is coming soon. What plans do you have? I want to travel to Europe with my family. Really? When will you set off? We will set off as soon as the holiday starts. Why do you want to go to Europe? Because my relatives live there. You must miss them very much, right? Yes. I have not seen them for a long time. If you see them, please send them my greetings. Okay, thank you.',
      tip: 'Pair Work: Talk about holiday travel plans, relatives and greetings.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Jiàqī kuài dào le', hz: '假期快到了', cls: 'time' },
            { py: 'nǐ yǒu shénme jìhuà？', hz: '你有什么计划？', cls: 'speaker' }
          ],
          translation: 'The holiday is coming soon. What plans do you have? / العطلة قادمة قريبًا، ما خططك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Wǒ xiǎng hé jiārén', hz: '我想和家人', cls: 'person' },
            { py: 'yìqǐ qù Ōuzhōu', hz: '一起去欧洲', cls: 'place' },
            { py: 'lǚxíng。', hz: '旅行。', cls: 'activity' }
          ],
          translation: 'I want to travel to Europe with my family. / أريد أن أسافر إلى أوروبا مع عائلتي.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Zhēn de ma？', hz: '真的吗？', cls: 'speaker' },
            { py: 'Shénme shíhou', hz: '什么时候', cls: 'time' },
            { py: 'chūfā？', hz: '出发？', cls: 'activity' }
          ],
          translation: 'Really? When will you set off? / حقًا؟ متى ستنطلقون؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'yí dào jiàqī', hz: '一到假期', cls: 'time' },
            { py: 'jiù chūfā。', hz: '就出发。', cls: 'activity' }
          ],
          translation: 'We will set off as soon as the holiday starts. / سننطلق بمجرد أن تبدأ العطلة.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐ wèishénme', hz: '你为什么', cls: 'speaker' },
            { py: 'xiǎng qù Ōuzhōu？', hz: '想去欧洲？', cls: 'place' }
          ],
          translation: 'Why do you want to go to Europe? / لماذا تريد الذهاب إلى أوروبا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Yīnwèi wǒ de qīnrén', hz: '因为我的亲人', cls: 'person' },
            { py: 'zhù zài nàlǐ。', hz: '住在那里。', cls: 'place' }
          ],
          translation: 'Because my relatives live there. / لأن أقاربي يعيشون هناك.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐ yídìng', hz: '你一定', cls: 'speaker' },
            { py: 'hěn xiǎngniàn tāmen ba？', hz: '很想念他们吧？', cls: 'like' }
          ],
          translation: 'You must miss them very much, right? / لا بد أنك تشتاق إليهم كثيرًا، أليس كذلك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Duì', hz: '对', cls: 'speaker' },
            { py: 'wǒ yǐjīng hěn jiǔ', hz: '我已经很久', cls: 'time' },
            { py: 'méi yǒu jiàn dào tāmen le。', hz: '没有见到他们了。', cls: 'not-like' }
          ],
          translation: 'Yes. I have not seen them for a long time. / نعم. لم أرهم منذ وقت طويل.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Rúguǒ jiàn dào tāmen', hz: '如果见到他们', cls: 'speaker' },
            { py: 'qǐng dài wǒ', hz: '请代我', cls: 'respect' },
            { py: 'wènhòu tāmen。', hz: '问候他们。', cls: 'activity' }
          ],
          translation: 'If you see them, please send them my greetings. / إذا رأيتهم، أرجو أن تنقل لهم تحياتي.'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Hǎo de', hz: '好的', cls: 'speaker' },
            { py: 'xièxie nǐ。', hz: '谢谢你。', cls: 'thanks' }
          ],
          translation: 'Okay, thank you. / حسنًا، شكرًا لك.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的暑假计划',
      translation: 'The summer holiday is coming soon. My family and I are planning a trip. This summer holiday, we want to travel to China. Because I really like Chinese culture, I want to see China’s famous historical places and taste Chinese food. For this trip, I have already started making a plan. Every day, I look up information and see which places are the most interesting. Dad is responsible for buying the flight tickets, and Mom is responsible for preparing the luggage. I also want to help them, so I will organize my own things. As soon as the holiday starts, I will set off with my family. I hope this trip can help me learn a lot of new knowledge, and I also hope to meet more friends.',
      tip: 'Speaking Goal: Introduce a holiday travel plan with reasons, preparation and hopes.',
      lines: [
        {
          tokens: [
            { py: 'Shǔjià kuài dào le', hz: '暑假快到了', cls: 'time' },
            { py: 'wǒ hé jiārén', hz: '我和家人', cls: 'person' },
            { py: 'zhèngzài jìhuà', hz: '正在计划', cls: 'activity' },
            { py: 'yí cì lǚxíng。', hz: '一次旅行。', cls: 'activity' }
          ],
          translation: 'The summer holiday is coming soon. My family and I are planning a trip. / العطلة الصيفية قادمة قريبًا، وأنا وعائلتي نخطط لرحلة.'
        },
        {
          tokens: [
            { py: 'Jīnnián shǔjià', hz: '今年暑假', cls: 'time' },
            { py: 'wǒmen xiǎng qù', hz: '我们想去', cls: 'self' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { py: 'lǚxíng。', hz: '旅行。', cls: 'activity' }
          ],
          translation: 'This summer holiday, we want to travel to China. / في هذه العطلة الصيفية، نريد السفر إلى الصين.'
        },
        {
          tokens: [
            { py: 'Yīnwèi wǒ hěn xǐhuan', hz: '因为我很喜欢', cls: 'like' },
            { py: 'Zhōngguó wénhuà', hz: '中国文化', cls: 'country' },
            { py: 'suǒyǐ wǒ hěn xiǎng', hz: '所以我很想', cls: 'self' },
            { py: 'kànkan Zhōngguó de', hz: '看看中国的', cls: 'activity' },
            { py: 'míngshèng gǔjì', hz: '名胜古迹', cls: 'place' },
            { py: 'yě xiǎng pǐncháng', hz: '也想品尝', cls: 'activity' },
            { py: 'Zhōngguó měishí。', hz: '中国美食。', cls: 'activity' }
          ],
          translation: 'Because I really like Chinese culture, I want to see China’s famous historical places and taste Chinese food. / لأنني أحب الثقافة الصينية كثيرًا، أريد أن أرى المعالم التاريخية المشهورة في الصين وأتذوق الطعام الصيني.'
        },
        {
          tokens: [
            { py: 'Wèile zhè cì lǚxíng', hz: '为了这次旅行', cls: 'activity' },
            { py: 'wǒ yǐjīng kāishǐ', hz: '我已经开始', cls: 'time' },
            { py: 'zuò jìhuà le。', hz: '做计划了。', cls: 'activity' }
          ],
          translation: 'For this trip, I have already started making a plan. / من أجل هذه الرحلة، بدأت بالفعل في إعداد الخطة.'
        },
        {
          tokens: [
            { py: 'Wǒ měi tiān', hz: '我每天', cls: 'time' },
            { py: 'dōu huì chá zīliào', hz: '都会查资料', cls: 'activity' },
            { py: 'kànkan nǎxiē dìfang', hz: '看看哪些地方', cls: 'place' },
            { py: 'zuì yǒu yìsi。', hz: '最有意思。', cls: 'like' }
          ],
          translation: 'Every day, I look up information and see which places are the most interesting. / كل يوم أبحث عن المعلومات وأرى أي الأماكن أكثر إثارة للاهتمام.'
        },
        {
          tokens: [
            { py: 'Bàba fùzé', hz: '爸爸负责', cls: 'person' },
            { py: 'mǎi jīpiào', hz: '买机票', cls: 'activity' },
            { py: 'māma fùzé', hz: '妈妈负责', cls: 'person' },
            { py: 'zhǔnbèi xíngli。', hz: '准备行李。', cls: 'activity' }
          ],
          translation: 'Dad is responsible for buying the flight tickets, and Mom is responsible for preparing the luggage. / أبي مسؤول عن شراء تذاكر الطيران، وأمي مسؤولة عن تجهيز الأمتعة.'
        },
        {
          tokens: [
            { py: 'Wǒ yě xiǎng', hz: '我也想', cls: 'self' },
            { py: 'bāngzhù tāmen', hz: '帮助他们', cls: 'activity' },
            { py: 'suǒyǐ wǒ huì', hz: '所以我会', cls: 'self' },
            { py: 'zhěnglǐ zìjǐ de dōngxi。', hz: '整理自己的东西。', cls: 'activity' }
          ],
          translation: 'I also want to help them, so I will organize my own things. / أريد أيضًا أن أساعدهم، لذلك سأرتب أغراضي بنفسي.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yí dào jiàqī', hz: '一到假期', cls: 'time' },
            { py: 'jiù huì hé jiārén', hz: '就会和家人', cls: 'person' },
            { py: 'chūfā。', hz: '出发。', cls: 'activity' }
          ],
          translation: 'As soon as the holiday starts, I will set off with my family. / بمجرد أن تبدأ العطلة، سأنطلق مع عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒ xīwàng', hz: '我希望', cls: 'self' },
            { py: 'zhè cì lǚxíng', hz: '这次旅行', cls: 'activity' },
            { py: 'néng ràng wǒ', hz: '能让我', cls: 'self' },
            { py: 'xué dào hěn duō', hz: '学到很多', cls: 'activity' },
            { py: 'xīn de zhīshi。', hz: '新的知识。', cls: 'like' }
          ],
          translation: 'I hope this trip can help me learn a lot of new knowledge. / أتمنى أن تساعدني هذه الرحلة على تعلم الكثير من المعرفة الجديدة.'
        },
        {
          tokens: [
            { py: 'Wǒ yě xīwàng', hz: '我也希望', cls: 'self' },
            { py: 'rènshi', hz: '认识', cls: 'activity' },
            { py: 'gèng duō péngyou。', hz: '更多朋友。', cls: 'person' }
          ],
          translation: 'I also hope to meet more friends. / وأتمنى أيضًا أن أتعرف إلى المزيد من الأصدقاء.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我们一到假期就去旅行。” 是什么意思？',
      pinyin: '“Wǒmen yí dào jiàqī jiù qù lǚxíng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'As soon as the holiday starts, we go traveling.', correct: true },
        { text: 'We do not travel during the holiday.', correct: false },
        { text: 'We only study during the holiday.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “travel”？',
      pinyin: 'Nǎ yí ge shì “travel”?',
      translation: 'Which one means “travel”?',
      choices: [
        { text: '旅行', correct: true },
        { text: '确定', correct: false },
        { text: '问候', correct: false }
      ]
    },
    {
      question: '3. “我很想念我的亲人。” 是什么意思？',
      pinyin: '“Wǒ hěn xiǎngniàn wǒ de qīnrén.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I miss my relatives very much.', correct: true },
        { text: 'I want to buy flight tickets.', correct: false },
        { text: 'I do not have any plan.', correct: false }
      ]
    },
    {
      question: '4. B层中，为什么“我”想去欧洲旅行？',
      pinyin: 'B céng zhōng, wèishénme “wǒ” xiǎng qù Ōuzhōu lǚxíng?',
      translation: 'In Level B, why does “I” want to travel to Europe?',
      choices: [
        { text: '因为我的亲人住在那里。', correct: true },
        { text: '因为我想买机票。', correct: false },
        { text: '因为我想玩游戏。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jiàqī kuài dào le', hz: '假期快到了', cls: 'time' },
        { py: 'wǒ yǒu', hz: '我有', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ dǎsuàn', hz: '我打算', cls: 'self' },
        { py: 'yí fàngjià', hz: '一放假', cls: 'time' },
        { py: 'jiù', hz: '就', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yīnwèi', hz: '因为', cls: 'speaker' },
        { blank: true },
        { hz: '，' },
        { py: 'suǒyǐ wǒ xiǎng', hz: '所以我想', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Rúguǒ jiàn dào tāmen', hz: '如果见到他们', cls: 'speaker' },
        { py: 'qǐng dài wǒ', hz: '请代我', cls: 'respect' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'The holiday is coming soon. I have ______. I plan to ______ as soon as the holiday starts. Because ______, I want to ______. If you see them, please ______ for me.',
    tip: 'Use: 一个计划、回中国、我很想念亲人、去欧洲旅行、问候他们。'
  },

  meanings: {
    '假期': 'holiday / عطلة',
    '旅行': 'travel / سفر',
    '计划': 'plan / خطة',
    '确定': 'confirm; be sure / يتأكد',
    '想念': 'miss / يشتاق',
    '问候': 'send greetings / يرسل التحيات',
    '亲人': 'relatives; loved ones / الأقارب',
    '欧洲': 'Europe / أوروبا',
    '机票': 'flight ticket / تذكرة طيران',
    '出发': 'set off; depart / ينطلق',
    '我们': 'we / نحن',
    '一到假期': 'as soon as the holiday starts / بمجرد أن تبدأ العطلة',
    '就去旅行': 'then go traveling / نذهب للسفر',
    '我们一到假期就去旅行': 'as soon as the holiday starts, we go traveling / بمجرد أن تبدأ العطلة، نذهب للسفر',
    '假期快到了': 'the holiday is coming soon / العطلة قادمة قريبًا',
    '你有什么计划': 'what plans do you have / ما خططك',
    '我打算': 'I plan to / أخطط أن',
    '一放假': 'as soon as the holiday starts / بمجرد أن تبدأ العطلة',
    '就回中国': 'then return to China / أعود إلى الصين',
    '我很想念': 'I miss very much / أشتاق كثيرًا إلى',
    '我的亲人': 'my relatives / أقاربي',
    '如果见到他们': 'if you see them / إذا رأيتهم',
    '请代我': 'please for me / أرجو أن تنقل عني',
    '问候他们': 'send them greetings / انقل لهم التحيات',
    '我一放学就回家': 'as soon as school ends, I go home / بمجرد أن تنتهي المدرسة، أعود إلى البيت',
    '一放学': 'as soon as school ends / بمجرد انتهاء المدرسة',
    '就回家': 'then go home / أعود إلى البيت',
    '一到周末': 'as soon as the weekend comes / بمجرد أن تأتي عطلة نهاية الأسبوع',
    '就睡觉': 'then sleep / أنام',
    '一有时间': 'as soon as there is time / بمجرد أن يكون لدي وقت',
    '就看书': 'then read books / أقرأ الكتب',
    '一做完作业': 'as soon as homework is finished / بمجرد أن أنهي الواجب',
    '就玩游戏': 'then play games / ألعب الألعاب',
    '我想和家人': 'I want to with family / أريد مع عائلتي',
    '一起去欧洲': 'go to Europe together / نذهب إلى أوروبا معًا',
    '真的吗': 'really / حقًا',
    '什么时候': 'when / متى',
    '我们一到假期就出发': 'we set off as soon as the holiday starts / ننطلق بمجرد أن تبدأ العطلة',
    '你为什么': 'why do you / لماذا أنت',
    '想去欧洲': 'want to go to Europe / تريد الذهاب إلى أوروبا',
    '因为我的亲人': 'because my relatives / لأن أقاربي',
    '住在那里': 'live there / يعيشون هناك',
    '你一定': 'you must / لا بد أنك',
    '很想念他们吧': 'miss them very much, right / تشتاق إليهم كثيرًا، أليس كذلك',
    '我已经很久': 'I already for a long time / أنا منذ وقت طويل',
    '没有见到他们了': 'have not seen them / لم أرهم',
    '暑假快到了': 'summer holiday is coming soon / العطلة الصيفية قادمة قريبًا',
    '我和家人': 'my family and I / أنا وعائلتي',
    '正在计划': 'are planning / نخطط',
    '一次旅行': 'one trip / رحلة واحدة',
    '今年暑假': 'this summer holiday / هذه العطلة الصيفية',
    '我们想去': 'we want to go / نريد الذهاب',
    '中国': 'China / الصين',
    '中国文化': 'Chinese culture / الثقافة الصينية',
    '名胜古迹': 'famous historical places / المعالم التاريخية المشهورة',
    '中国美食': 'Chinese food / الطعام الصيني',
    '为了这次旅行': 'for this trip / من أجل هذه الرحلة',
    '我已经开始': 'I have already started / بدأت بالفعل',
    '做计划了': 'making a plan / إعداد الخطة',
    '查资料': 'look up information / يبحث عن المعلومات',
    '爸爸负责': 'Dad is responsible for / أبي مسؤول عن',
    '买机票': 'buy flight tickets / شراء تذاكر الطيران',
    '妈妈负责': 'Mom is responsible for / أمي مسؤولة عن',
    '准备行李': 'prepare luggage / تجهيز الأمتعة',
    '帮助他们': 'help them / أساعدهم',
    '整理自己的东西': 'organize my own things / أرتب أغراضي بنفسي',
    '就会和家人': 'then will with family / سأكون مع عائلتي',
    '我希望': 'I hope / أتمنى',
    '这次旅行': 'this trip / هذه الرحلة',
    '新的知识': 'new knowledge / معرفة جديدة',
    '更多朋友': 'more friends / المزيد من الأصدقاء'
  }
};