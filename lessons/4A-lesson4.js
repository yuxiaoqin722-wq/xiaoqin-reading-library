window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson4'] = {
  id: '4A-lesson4',
  book: '4A',
  lesson: 'Lesson 4',
  title: '我请你来我家吃饭。',
  theme: 'Invitations and Visiting Friends',
  goal: 'Invite someone and ask about free time using 请 / 有空 / 有事.',
  heroTranslation: 'I invite you to come to my home for dinner.',

  titleTokens: [
    { py: 'Wǒ qǐng nǐ', hz: '我请你', cls: 'self' },
    { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
    { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🙏', pinyin: 'qǐng', text: '请', translation: 'invite; please / يدعو؛ من فضلك' },
    { emoji: '🏠', pinyin: 'jiā', text: '家', translation: 'home / بيت' },
    { emoji: '🍽️', pinyin: 'chī fàn', text: '吃饭', translation: 'eat a meal / يأكل' },
    { emoji: '🕒', pinyin: 'yǒu kòng', text: '有空', translation: 'have free time / لديه وقت فراغ' },
    { emoji: '📌', pinyin: 'yǒu shì', text: '有事', translation: 'have something to do / لديه أمر' },
    { emoji: '📅', pinyin: 'zuìjìn', text: '最近', translation: 'recently / مؤخرًا' },
    { emoji: '📦', pinyin: 'bānjiā', text: '搬家', translation: 'move house / ينتقل إلى بيت جديد' },
    { emoji: '💬', pinyin: 'liáotiān', text: '聊天', translation: 'chat / يتحدث' },
    { emoji: '🎬', pinyin: 'kàn diànyǐng', text: '看电影', translation: 'watch a movie / يشاهد فيلمًا' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ qǐng nǐ', hz: '我请你', cls: 'self' },
        { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
        { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I invite you to come to my home for dinner. / أدعوك إلى بيتي لتناول الطعام.'
    },
    {
      tokens: [
        { py: 'Nǐ zuìjìn', hz: '你最近', cls: 'person' },
        { py: 'yǒu kòng ma', hz: '有空吗', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'Are you free recently? / هل لديك وقت فراغ مؤخرًا؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xīngqīliù xiàwǔ', hz: '星期六下午', cls: 'time' },
        { py: 'yǒu kòng', hz: '有空', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I am free on Saturday afternoon. / لدي وقت فراغ بعد ظهر يوم السبت.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'míngtiān méiyǒu kòng', hz: '明天没有空', cls: 'not-like' },
        { hz: '，' },
        { py: 'wǒ yǒu shì', hz: '我有事', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'I am not free tomorrow. I have something to do. / لست متفرغًا غدًا، لدي أمر.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会邀请朋友',
      translation: 'I invite you to come to my home for dinner. Are you free recently? I am free on Saturday afternoon. Great! I invite you to come to my home to play. I am free on Friday evening. Okay!',
      tip: 'Reading Goal: Invite someone and ask about free time.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ qǐng nǐ', hz: '我请你', cls: 'self' },
            { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
            { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I invite you to come to my home for dinner. / أدعوك إلى بيتي لتناول الطعام.'
        },
        {
          tokens: [
            { py: 'Nǐ zuìjìn', hz: '你最近', cls: 'person' },
            { py: 'yǒu kòng ma', hz: '有空吗', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Are you free recently? / هل لديك وقت فراغ مؤخرًا؟'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xīngqīliù xiàwǔ', hz: '星期六下午', cls: 'time' },
            { py: 'yǒu kòng', hz: '有空', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am free on Saturday afternoon. / لدي وقت فراغ بعد ظهر يوم السبت.'
        },
        {
          tokens: [
            { py: 'Tài hǎo le', hz: '太好了', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Great! / رائع!'
        },
        {
          tokens: [
            { py: 'Wǒ qǐng nǐ', hz: '我请你', cls: 'self' },
            { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
            { py: 'wánr', hz: '玩儿', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I invite you to come to my home to play. / أدعوك إلى بيتي للعب.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xīngqīwǔ wǎnshang', hz: '星期五晚上', cls: 'time' },
            { py: 'yǒu kòng', hz: '有空', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am free on Friday evening. / لدي وقت فراغ مساء الجمعة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会邀请朋友来家里',
      translation: 'Are you free recently? Yes, what is it? I moved house recently. I invite you to come to my home for dinner. Great! When? This Saturday afternoon, how about it? Okay! I am free on Saturday afternoon. Then see you on Saturday. Okay, see you on Saturday!',
      tip: 'Pair Work: Invite a friend, ask about time, and make a plan.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zuìjìn', hz: '你最近', cls: 'person' },
            { py: 'yǒu kòng ma', hz: '有空吗', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Are you free recently? / هل لديك وقت فراغ مؤخرًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yǒu a', hz: '有啊', cls: 'like' },
            { hz: '，' },
            { py: 'zěnme le', hz: '怎么了', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Yes. What is it? / نعم، ماذا حدث؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zuìjìn', hz: '我最近', cls: 'self' },
            { py: 'bānjiā le', hz: '搬家了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I moved house recently. / انتقلت إلى بيت جديد مؤخرًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ qǐng nǐ', hz: '我请你', cls: 'self' },
            { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
            { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I invite you to come to my home for dinner. / أدعوك إلى بيتي لتناول الطعام.'
        },
        {
  tokens: [
    { py: '', hz: '👦', cls: 'speaker' },
    { hz: '：' },
    { py: 'Tài hǎo le', hz: '太好了', cls: 'like' },
    { hz: '，' },
    { py: 'Shénme shíhou', hz: '什么时候', cls: 'time' },
    { hz: '？' }
  ],
  translation: 'Great! When? / رائع! متى؟'
},
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè ge xīngqīliù xiàwǔ', hz: '这个星期六下午', cls: 'time' },
            { hz: '，' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'This Saturday afternoon, how about it? / بعد ظهر هذا السبت، ما رأيك؟'
        },
        {
  tokens: [
    { py: '', hz: '👦', cls: 'speaker' },
    { hz: '：' },
    { py: 'Xíng', hz: '行', cls: 'like' },
    { hz: '，' },
    { py: 'Wǒ xīngqīliù xiàwǔ', hz: '我星期六下午', cls: 'time' },
    { py: 'yǒu kòng', hz: '有空', cls: 'time' },
    { hz: '。' }
  ],
  translation: 'Okay! I am free on Saturday afternoon. / حسنًا! لدي وقت فراغ بعد ظهر السبت.'
},
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nà wǒmen', hz: '那我们', cls: 'self' },
            { py: 'xīngqīliù jiàn', hz: '星期六见', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Then see you on Saturday. / إذن نراك يوم السبت.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo', hz: '好', cls: 'like' },
            { hz: '，' },
            { py: 'xīngqīliù jiàn', hz: '星期六见', cls: 'time' },
            { hz: '！' }
          ],
          translation: 'Okay, see you on Saturday! / حسنًا، نراك يوم السبت!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲邀请朋友来家里的经历',
      translation: 'Last month, we moved house. Our new home is a little bigger than before. Recently, I wanted to invite my friend to come to my home to play. On Wednesday, I asked my friend if she was free on the weekend. She said she was free on Saturday afternoon. So I invited her to come to my home for dinner. On Saturday afternoon, my friend came. We ate together, chatted together, and also watched a movie together. At six o’clock in the evening, she went home.',
      tip: 'Speaking Goal: Tell a short story about inviting a friend to your home.',
      lines: [
        {
          tokens: [
            { py: 'Shàng ge yuè', hz: '上个月', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'bānjiā le', hz: '搬家了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Last month, we moved house. / في الشهر الماضي، انتقلنا إلى بيت جديد.'
        },
        {
          tokens: [
            { py: 'Xīn jiā', hz: '新家', cls: 'place' },
            { py: 'bǐ yǐqián', hz: '比以前', cls: 'time' },
            { py: 'dà yìxiē', hz: '大一些', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Our new home is a little bigger than before. / بيتنا الجديد أكبر قليلًا من قبل.'
        },
        {
          tokens: [
            { py: 'Zuìjìn', hz: '最近', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'yāoqǐng péngyou', hz: '邀请朋友', cls: 'activity' },
            { py: 'lái jiā lǐ wánr', hz: '来家里玩儿', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Recently, I wanted to invite my friend to come to my home to play. / مؤخرًا أردت دعوة صديقتي إلى بيتي للعب.'
        },
        {
          tokens: [
            { py: 'Xīngqīsān', hz: '星期三', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ wèn péngyou', hz: '我问朋友', cls: 'self' },
            { py: 'zhōumò yǒu méiyǒu kòng', hz: '周末有没有空', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'On Wednesday, I asked my friend if she was free on the weekend. / يوم الأربعاء سألت صديقتي هل لديها وقت في عطلة نهاية الأسبوع.'
        },
        {
          tokens: [
            { py: 'Tā shuō', hz: '她说', cls: 'person' },
            { py: 'xīngqīliù xiàwǔ', hz: '星期六下午', cls: 'time' },
            { py: 'yǒu kòng', hz: '有空', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'She said she was free on Saturday afternoon. / قالت إن لديها وقتًا بعد ظهر السبت.'
        },
        {
          tokens: [
            { py: 'Yúshì', hz: '于是', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ qǐng tā', hz: '我请她', cls: 'self' },
            { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
            { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'So I invited her to come to my home for dinner. / لذلك دعوتها إلى بيتي لتناول الطعام.'
        },
        {
          tokens: [
            { py: 'Xīngqīliù xiàwǔ', hz: '星期六下午', cls: 'time' },
            { hz: '，' },
            { py: 'péngyou', hz: '朋友', cls: 'person' },
            { py: 'lái le', hz: '来了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'On Saturday afternoon, my friend came. / بعد ظهر السبت، جاءت صديقتي.'
        },
        {
          tokens: [
            { py: 'Wǒmen yìqǐ', hz: '我们一起', cls: 'self' },
            { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
            { hz: '，' },
            { py: 'yìqǐ liáotiān', hz: '一起聊天', cls: 'activity' },
            { hz: '，' },
            { py: 'hái yìqǐ', hz: '还一起', cls: 'activity' },
            { py: 'kàn diànyǐng', hz: '看电影', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We ate together, chatted together, and also watched a movie together. / أكلنا معًا، وتحدثنا معًا، وشاهدنا فيلمًا معًا أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǎnshang liù diǎn', hz: '晚上六点', cls: 'time' },
            { hz: '，' },
            { py: 'tā', hz: '她', cls: 'person' },
            { py: 'huí jiā le', hz: '回家了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'At six o’clock in the evening, she went home. / في الساعة السادسة مساءً، عادت إلى البيت.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我请你来我家吃饭。” 是什么意思？',
      pinyin: '“Wǒ qǐng nǐ lái wǒ jiā chī fàn.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I invite you to come to my home for dinner.', correct: true },
        { text: 'I go to your home for dinner.', correct: false },
        { text: 'I am busy today.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “have free time”？',
      pinyin: 'Nǎ yí ge shì “have free time”?',
      translation: 'Which one means “have free time”?',
      choices: [
        { text: '有空', correct: true },
        { text: '有事', correct: false },
        { text: '搬家', correct: false }
      ]
    },
    {
      question: '3. “你最近有空吗？” 是什么意思？',
      pinyin: '“Nǐ zuìjìn yǒu kòng ma?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Are you free recently?', correct: true },
        { text: 'Did you move house recently?', correct: false },
        { text: 'Are you eating now?', correct: false }
      ]
    },
    {
      question: '4. “我有事。” 是什么意思？',
      pinyin: '“Wǒ yǒu shì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I have something to do.', correct: true },
        { text: 'I am free.', correct: false },
        { text: 'I am at home.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ zuìjìn', hz: '我最近', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ qǐng nǐ', hz: '我请你', cls: 'self' },
        { py: 'lái wǒ jiā', hz: '来我家', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ zuìjìn', hz: '你最近', cls: 'person' },
        { py: 'yǒu kòng ma', hz: '有空吗', cls: 'time' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'yǒu kòng', hz: '有空', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen yìqǐ', hz: '我们一起', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'I recently ______. I invite you to come to my home to ______. Are you free recently? I am free ______. We ______ together.',
    tip: 'Use: 搬家了、吃饭、玩儿、星期六下午、星期五晚上、聊天、看电影。'
  },

  meanings: {
    '请': 'invite; please / يدعو؛ من فضلك',
    '家': 'home / بيت',
    '我家': 'my home / بيتي',
    '来我家': 'come to my home / يأتي إلى بيتي',
    '吃饭': 'eat a meal / يأكل',
    '我请你': 'I invite you / أدعوك',
    '我请你来我家吃饭': 'I invite you to come to my home for dinner / أدعوك إلى بيتي لتناول الطعام',
    '有空': 'have free time / لديه وقت فراغ',
    '有空吗': 'are you free / هل لديك وقت فراغ',
    '你最近有空吗': 'are you free recently / هل لديك وقت فراغ مؤخرًا',
    '有事': 'have something to do / لديه أمر',
    '我有事': 'I have something to do / لدي أمر',
    '最近': 'recently / مؤخرًا',
    '我最近': 'I recently / أنا مؤخرًا',
    '搬家': 'move house / ينتقل إلى بيت جديد',
    '搬家了': 'moved house / انتقل إلى بيت جديد',
    '我最近搬家了': 'I moved house recently / انتقلت إلى بيت جديد مؤخرًا',
    '什么时候': 'when / متى',
    '这个星期六下午': 'this Saturday afternoon / بعد ظهر هذا السبت',
    '星期六下午': 'Saturday afternoon / بعد ظهر السبت',
    '星期五晚上': 'Friday evening / مساء الجمعة',
    '星期六见': 'see you on Saturday / نراك يوم السبت',
    '怎么样': 'how about it / ما رأيك',
    '行': 'okay / حسنًا',
    '太好了': 'great / رائع',
    '玩儿': 'play / يلعب',
    '来我家玩儿': 'come to my home to play / يأتي إلى بيتي للعب',
    '聊天': 'chat / يتحدث',
    '一起聊天': 'chat together / يتحدثان معًا',
    '看电影': 'watch a movie / يشاهد فيلمًا',
    '一起看电影': 'watch a movie together / يشاهدان فيلمًا معًا',
    '上个月': 'last month / الشهر الماضي',
    '新家': 'new home / بيت جديد',
    '比以前': 'than before / من قبل',
    '大一些': 'a little bigger / أكبر قليلًا',
    '邀请朋友': 'invite a friend / يدعو صديقًا',
    '来家里玩儿': 'come home to play / يأتي إلى البيت للعب',
    '星期三': 'Wednesday / الأربعاء',
    '我问朋友': 'I asked my friend / سألت صديقتي',
    '周末有没有空': 'whether free on the weekend / هل لديها وقت في عطلة نهاية الأسبوع',
    '她说': 'she said / قالت',
    '于是': 'so / لذلك',
    '我请她': 'I invite her / أدعوها',
    '朋友来了': 'my friend came / جاءت صديقتي',
    '我们一起': 'we together / نحن معًا',
    '还一起': 'also together / أيضًا معًا',
    '晚上六点': 'six o’clock in the evening / السادسة مساءً',
    '回家了': 'went home / عاد إلى البيت'
  }
};