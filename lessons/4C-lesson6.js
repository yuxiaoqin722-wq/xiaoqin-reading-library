window.LESSONS = window.LESSONS || {};

window.LESSONS['4C-lesson6'] = {
  id: '4C-lesson6',
  book: '4C',
  lesson: 'Lesson 6',
  title: '为我们的理想加油！',
  theme: 'Dreams and Future Goals',
  goal: 'Talk about dreams, reasons, purposes and contributions using 为…….',
  heroTranslation: 'Cheer for our dreams!',

  titleTokens: [
    { py: 'Wèi wǒmen de', hz: '为我们的', cls: 'self' },
    { py: 'lǐxiǎng', hz: '理想', cls: 'like' },
    { py: 'jiāyóu！', hz: '加油！', cls: 'activity' }
  ],

  keyWords: [
    { emoji: '🎯', pinyin: 'lǐxiǎng', text: '理想', translation: 'dream; ideal / طموح' },
    { emoji: '👔', pinyin: 'dāng', text: '当', translation: 'to be; become / يصبح' },
    { emoji: '✍️', pinyin: 'zuòjiā', text: '作家', translation: 'writer / كاتب' },
    { emoji: '🌍', pinyin: 'lǚxíngjiā', text: '旅行家', translation: 'traveler / رحّالة' },
    { emoji: '🌱', pinyin: 'huánjìng', text: '环境', translation: 'environment / البيئة' },
    { emoji: '🛡️', pinyin: 'bǎohù', text: '保护', translation: 'protect / يحمي' },
    { emoji: '🤝', pinyin: 'gòngxiàn', text: '贡献', translation: 'contribution / مساهمة' },
    { emoji: '🏞️', pinyin: 'fēngjǐng', text: '风景', translation: 'scenery / منظر' },
    { emoji: '🎎', pinyin: 'fēngsú', text: '风俗', translation: 'customs / عادات وتقاليد' },
    { emoji: '🗺️', pinyin: 'gèdì', text: '各地', translation: 'different places / أماكن مختلفة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ de lǐxiǎng', hz: '你的理想', cls: 'like' },
        { py: 'shì shénme？', hz: '是什么？', cls: 'speaker' }
      ],
      translation: 'What is your dream? / ما هو طموحك؟'
    },
    {
      tokens: [
        { py: 'Wǒ de lǐxiǎng', hz: '我的理想', cls: 'like' },
        { py: 'shì dāng', hz: '是当', cls: 'speaker' },
        { py: 'yì míng lǚxíngjiā。', hz: '一名旅行家。', cls: 'activity' }
      ],
      translation: 'My dream is to become a traveler. / طموحي هو أن أصبح رحّالة.'
    },
    {
      tokens: [
        { py: 'Wèile shíxiàn', hz: '为了实现', cls: 'speaker' },
        { py: 'zhè ge lǐxiǎng', hz: '这个理想，', cls: 'like' },
        { py: 'wǒ yào nǔlì', hz: '我要努力', cls: 'self' },
        { py: 'xuéxí Zhōngwén。', hz: '学习中文。', cls: 'activity' }
      ],
      translation: 'To achieve this dream, I will study Chinese hard. / من أجل تحقيق هذا الطموح، سأجتهد في تعلم الصينية.'
    },
    {
      tokens: [
        { py: 'Wǒ xiǎng wèi', hz: '我想为', cls: 'self' },
        { py: 'bǎohù huánjìng', hz: '保护环境', cls: 'activity' },
        { py: 'zuò yìxiē shìqing。', hz: '做一些事情。', cls: 'activity' }
      ],
      translation: 'I want to do something to protect the environment. / أريد أن أفعل شيئًا من أجل حماية البيئة.'
    },
    {
      tokens: [
        { py: 'Wèi wǒmen de', hz: '为我们的', cls: 'self' },
        { py: 'lǐxiǎng', hz: '理想', cls: 'like' },
        { py: 'jiāyóu！', hz: '加油！', cls: 'activity' }
      ],
      translation: 'Cheer for our dreams! / لنشجع طموحاتنا!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说自己的理想',
      translation: 'My dream is to become a doctor. I want to help more people. My dream is to become a traveler. I want to introduce scenery and customs from different places around the world. Cheer for our dreams!',
      tip: 'Reading Goal: Say your dream and what you want to do.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ de lǐxiǎng', hz: '我的理想', cls: 'like' },
            { py: 'shì dāng', hz: '是当', cls: 'speaker' },
            { py: 'yì míng yīshēng。', hz: '一名医生。', cls: 'activity' }
          ],
          translation: 'My dream is to become a doctor. / طموحي هو أن أصبح طبيبًا.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'bāngzhù', hz: '帮助', cls: 'activity' },
            { py: 'gèng duō de rén。', hz: '更多的人。', cls: 'person' }
          ],
          translation: 'I want to help more people. / أريد أن أساعد المزيد من الناس.'
        },
        {
          tokens: [
            { py: 'Wǒ de lǐxiǎng', hz: '我的理想', cls: 'like' },
            { py: 'shì dāng', hz: '是当', cls: 'speaker' },
            { py: 'lǚxíngjiā。', hz: '旅行家。', cls: 'activity' }
          ],
          translation: 'My dream is to become a traveler. / طموحي هو أن أصبح رحّالة.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng jièshào', hz: '我想介绍', cls: 'self' },
            { py: 'shìjiè gèdì de', hz: '世界各地的', cls: 'place' },
            { py: 'fēngjǐng hé fēngsú。', hz: '风景和风俗。', cls: 'activity' }
          ],
          translation: 'I want to introduce scenery and customs from different places around the world. / أريد أن أعرّف بالمناظر والعادات في أماكن مختلفة من العالم.'
        },
        {
          tokens: [
            { py: 'Wèi wǒmen de', hz: '为我们的', cls: 'self' },
            { py: 'lǐxiǎng', hz: '理想', cls: 'like' },
            { py: 'jiāyóu！', hz: '加油！', cls: 'activity' }
          ],
          translation: 'Cheer for our dreams! / لنشجع طموحاتنا!'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会谈环保理想',
      translation: 'What is your dream? My dream is to become an environmental volunteer. Why? Because I want to protect the environment. What do you want to do? I want to plant trees and tell everyone not to waste water. This dream is very meaningful. Thank you. Cheer for our dreams!',
      tip: 'Pair Work: Ask your partner about their dream and reason.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐ de lǐxiǎng', hz: '你的理想', cls: 'like' },
            { py: 'shì shénme？', hz: '是什么？', cls: 'speaker' }
          ],
          translation: 'What is your dream? / ما هو طموحك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Wǒ de lǐxiǎng', hz: '我的理想', cls: 'like' },
            { py: 'shì dāng', hz: '是当', cls: 'speaker' },
            { py: 'huánbǎo zhìyuànzhě。', hz: '环保志愿者。', cls: 'activity' }
          ],
          translation: 'My dream is to become an environmental volunteer. / طموحي هو أن أصبح متطوعًا لحماية البيئة.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Wèishénme？', hz: '为什么？', cls: 'speaker' }
          ],
          translation: 'Why? / لماذا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Yīnwèi wǒ xiǎng', hz: '因为我想', cls: 'self' },
            { py: 'bǎohù huánjìng。', hz: '保护环境。', cls: 'activity' }
          ],
          translation: 'Because I want to protect the environment. / لأنني أريد حماية البيئة.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Nǐ xiǎng zuò', hz: '你想做', cls: 'self' },
            { py: 'shénme shìqing？', hz: '什么事情？', cls: 'activity' }
          ],
          translation: 'What do you want to do? / ماذا تريد أن تفعل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'zhòng shù', hz: '种树，', cls: 'activity' },
            { py: 'yě xiǎng gàosu dàjiā', hz: '也想告诉大家', cls: 'activity' },
            { py: 'bú yào làngfèi shuǐ。', hz: '不要浪费水。', cls: 'not-like' }
          ],
          translation: 'I want to plant trees, and I also want to tell everyone not to waste water. / أريد أن أزرع الأشجار، وأريد أيضًا أن أخبر الجميع ألا يهدروا الماء.'
        },
        {
          tokens: [
            { py: '', hz: '👧：', cls: 'speaker' },
            { py: 'Zhè ge lǐxiǎng', hz: '这个理想', cls: 'like' },
            { py: 'hěn yǒu yìyì。', hz: '很有意义。', cls: 'like' }
          ],
          translation: 'This dream is very meaningful. / هذا الطموح ذو معنى كبير.'
        },
        {
          tokens: [
            { py: '', hz: '👦：', cls: 'speaker' },
            { py: 'Xièxie', hz: '谢谢。', cls: 'thanks' },
            { py: 'Wèi wǒmen de', hz: '为我们的', cls: 'self' },
            { py: 'lǐxiǎng', hz: '理想', cls: 'like' },
            { py: 'jiāyóu！', hz: '加油！', cls: 'activity' }
          ],
          translation: 'Thank you. Cheer for our dreams! / شكرًا. لنشجع طموحاتنا!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的理想',
      translation: 'Everyone has their own dream. My dream is to become a traveler. I want to travel around the world, see different scenery, and understand different customs. I also want to introduce my travel stories in Chinese and Arabic. To achieve this dream, I must study Chinese hard and learn more about the world. I know dreams are not easy to achieve, but as long as I work hard, I will get closer and closer to my dream. Cheer for our dreams!',
      tip: 'Speaking Goal: Introduce your dream, reason and plan.',
      lines: [
        {
          tokens: [
            { py: 'Měi ge rén', hz: '每个人', cls: 'person' },
            { py: 'dōu yǒu', hz: '都有', cls: 'speaker' },
            { py: 'zìjǐ de lǐxiǎng。', hz: '自己的理想。', cls: 'like' }
          ],
          translation: 'Everyone has their own dream. / كل شخص لديه طموحه الخاص.'
        },
        {
          tokens: [
            { py: 'Wǒ de lǐxiǎng', hz: '我的理想', cls: 'like' },
            { py: 'shì dāng', hz: '是当', cls: 'speaker' },
            { py: 'yì míng lǚxíngjiā。', hz: '一名旅行家。', cls: 'activity' }
          ],
          translation: 'My dream is to become a traveler. / طموحي هو أن أصبح رحّالة.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
            { py: 'shìjiè gèdì', hz: '世界各地', cls: 'place' },
            { py: 'lǚxíng', hz: '旅行，', cls: 'activity' },
            { py: 'kànkan bùtóng de', hz: '看看不同的', cls: 'activity' },
            { py: 'fēngjǐng。', hz: '风景。', cls: 'place' }
          ],
          translation: 'I want to travel around the world and see different scenery. / أريد أن أسافر إلى أنحاء العالم وأرى مناظر مختلفة.'
        },
        {
          tokens: [
            { py: 'Wǒ yě xiǎng', hz: '我也想', cls: 'self' },
            { py: 'liǎojiě bùtóng de', hz: '了解不同的', cls: 'activity' },
            { py: 'fēngsú。', hz: '风俗。', cls: 'activity' }
          ],
          translation: 'I also want to understand different customs. / أريد أيضًا أن أفهم عادات وتقاليد مختلفة.'
        },
        {
          tokens: [
            { py: 'Wǒ hái xiǎng yòng', hz: '我还想用', cls: 'self' },
            { py: 'Zhōngwén hé Ālābóyǔ', hz: '中文和阿拉伯语', cls: 'activity' },
            { py: 'jièshào wǒ de', hz: '介绍我的', cls: 'activity' },
            { py: 'lǚxíng gùshi。', hz: '旅行故事。', cls: 'activity' }
          ],
          translation: 'I also want to introduce my travel stories in Chinese and Arabic. / أريد أيضًا أن أعرّف بقصص سفري بالصينية والعربية.'
        },
        {
          tokens: [
            { py: 'Wèile shíxiàn', hz: '为了实现', cls: 'speaker' },
            { py: 'zhè ge lǐxiǎng', hz: '这个理想，', cls: 'like' },
            { py: 'wǒ yào nǔlì', hz: '我要努力', cls: 'self' },
            { py: 'xuéxí Zhōngwén。', hz: '学习中文。', cls: 'activity' }
          ],
          translation: 'To achieve this dream, I must study Chinese hard. / من أجل تحقيق هذا الطموح، يجب أن أجتهد في تعلم الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ yě yào', hz: '我也要', cls: 'self' },
            { py: 'duō liǎojiě', hz: '多了解', cls: 'activity' },
            { py: 'shìjiè。', hz: '世界。', cls: 'place' }
          ],
          translation: 'I also need to learn more about the world. / يجب عليّ أيضًا أن أعرف المزيد عن العالم.'
        },
        {
          tokens: [
            { py: 'Wǒ zhīdào', hz: '我知道', cls: 'self' },
            { py: 'lǐxiǎng bù róngyì', hz: '理想不容易', cls: 'not-like' },
            { py: 'shíxiàn。', hz: '实现。', cls: 'activity' }
          ],
          translation: 'I know dreams are not easy to achieve. / أعرف أن تحقيق الطموحات ليس سهلاً.'
        },
        {
          tokens: [
            { py: 'Dànshì zhǐyào', hz: '但是只要', cls: 'speaker' },
            { py: 'nǔlì', hz: '努力，', cls: 'activity' },
            { py: 'jiù huì lí lǐxiǎng', hz: '就会离理想', cls: 'like' },
            { py: 'yuè lái yuè jìn。', hz: '越来越近。', cls: 'like' }
          ],
          translation: 'But as long as I work hard, I will get closer and closer to my dream. / لكن طالما أجتهد، فسأقترب أكثر فأكثر من طموحي.'
        },
        {
          tokens: [
            { py: 'Wèi wǒmen de', hz: '为我们的', cls: 'self' },
            { py: 'lǐxiǎng', hz: '理想', cls: 'like' },
            { py: 'jiāyóu！', hz: '加油！', cls: 'activity' }
          ],
          translation: 'Cheer for our dreams! / لنشجع طموحاتنا!'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “为我们的理想加油！” 是什么意思？',
      pinyin: '“Wèi wǒmen de lǐxiǎng jiāyóu!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Cheer for our dreams!', correct: true },
        { text: 'Our dream is very far.', correct: false },
        { text: 'We do not have dreams.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “dream / ideal”？',
      pinyin: 'Nǎ yí ge shì “dream / ideal”?',
      translation: 'Which one means “dream / ideal”?',
      choices: [
        { text: '理想', correct: true },
        { text: '风景', correct: false },
        { text: '环境', correct: false }
      ]
    },
    {
      question: '3. B层中，为什么“我”想当环保志愿者？',
      pinyin: 'B céng zhōng, wèishénme “wǒ” xiǎng dāng huánbǎo zhìyuànzhě?',
      translation: 'In Level B, why does “I” want to become an environmental volunteer?',
      choices: [
        { text: '因为我想保护环境。', correct: true },
        { text: '因为我想去旅行。', correct: false },
        { text: '因为我想当作家。', correct: false }
      ]
    },
    {
      question: '4. C层中，为了实现理想，“我”要做什么？',
      pinyin: 'C céng zhōng, wèile shíxiàn lǐxiǎng, “wǒ” yào zuò shénme?',
      translation: 'In Level C, to achieve the dream, what does “I” need to do?',
      choices: [
        { text: '努力学习中文，也要多了解世界。', correct: true },
        { text: '每天玩游戏。', correct: false },
        { text: '不学习中文。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ de lǐxiǎng', hz: '我的理想', cls: 'like' },
        { py: 'shì dāng', hz: '是当', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yīnwèi wǒ xiǎng', hz: '因为我想', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wèile shíxiàn', hz: '为了实现', cls: 'speaker' },
        { py: 'zhè ge lǐxiǎng', hz: '这个理想', cls: 'like' },
        { hz: '，' },
        { py: 'wǒ yào', hz: '我要', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wèi wǒmen de', hz: '为我们的', cls: 'self' },
        { py: 'lǐxiǎng', hz: '理想', cls: 'like' },
        { py: 'jiāyóu！', hz: '加油！', cls: 'activity' }
      ]
    ],
    translation: 'My dream is to become ______. Because I want to ______. To achieve this dream, I will ______. Cheer for our dreams!',
    tip: 'Use: 医生、旅行家、环保志愿者、帮助别人、保护环境、努力学习中文。'
  },

  meanings: {
    '理想': 'dream; ideal / طموح',
    '当': 'to be; become / يصبح',
    '作家': 'writer / كاتب',
    '旅行家': 'traveler / رحّالة',
    '环境': 'environment / البيئة',
    '保护': 'protect / يحمي',
    '贡献': 'contribution / مساهمة',
    '风景': 'scenery / منظر',
    '风俗': 'customs / عادات وتقاليد',
    '各地': 'different places / أماكن مختلفة',
    '为我们的理想加油': 'cheer for our dreams / لنشجع طموحاتنا',
    '你的理想': 'your dream / طموحك',
    '是什么': 'is what / ما هو',
    '我的理想': 'my dream / طموحي',
    '是当': 'is to become / هو أن أصبح',
    '一名旅行家': 'a traveler / رحّالة',
    '为了实现': 'in order to achieve / من أجل تحقيق',
    '这个理想': 'this dream / هذا الطموح',
    '我要努力': 'I will work hard / سأجتهد',
    '学习中文': 'study Chinese / تعلم الصينية',
    '我想为': 'I want to for / أريد من أجل',
    '保护环境': 'protect the environment / حماية البيئة',
    '做一些事情': 'do something / أفعل بعض الأشياء',
    '一名医生': 'a doctor / طبيب',
    '帮助': 'help / يساعد',
    '更多的人': 'more people / المزيد من الناس',
    '我想介绍': 'I want to introduce / أريد أن أعرّف',
    '世界各地的': 'from different places around the world / من أماكن مختلفة حول العالم',
    '风景和风俗': 'scenery and customs / المناظر والعادات',
    '环保志愿者': 'environmental volunteer / متطوع لحماية البيئة',
    '为什么': 'why / لماذا',
    '因为我想': 'because I want to / لأنني أريد',
    '你想做': 'you want to do / تريد أن تفعل',
    '什么事情': 'what thing / أي شيء',
    '种树': 'plant trees / يزرع الأشجار',
    '也想告诉大家': 'also want to tell everyone / أريد أيضًا أن أخبر الجميع',
    '不要浪费水': 'do not waste water / لا تهدروا الماء',
    '很有意义': 'very meaningful / ذو معنى كبير',
    '每个人': 'everyone / كل شخص',
    '都有': 'all have / لديهم جميعًا',
    '自己的理想': 'their own dream / طموحهم الخاص',
    '我想去': 'I want to go / أريد الذهاب',
    '世界各地': 'different places around the world / أنحاء العالم',
    '看看不同的': 'look at different / أرى أشياء مختلفة',
    '了解不同的': 'understand different / أفهم أشياء مختلفة',
    '我还想用': 'I also want to use / أريد أيضًا أن أستخدم',
    '中文和阿拉伯语': 'Chinese and Arabic / الصينية والعربية',
    '介绍我的': 'introduce my / أعرّف بـ',
    '旅行故事': 'travel stories / قصص السفر',
    '我也要': 'I also need to / يجب عليّ أيضًا',
    '多了解': 'learn more about / أعرف المزيد عن',
    '世界': 'world / العالم',
    '我知道': 'I know / أعرف',
    '理想不容易': 'dreams are not easy / الطموحات ليست سهلة',
    '实现': 'achieve / يحقق',
    '但是只要': 'but as long as / لكن طالما',
    '努力': 'work hard / يجتهد',
    '就会离理想': 'will be from the dream / سيكون من الطموح',
    '越来越近': 'closer and closer / أقرب فأقرب'
  }
};