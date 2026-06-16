window.LESSONS = window.LESSONS || {};

window.LESSONS['4B-lesson3'] = {
  id: '4B-lesson3',
  book: '4B',
  lesson: 'Lesson 3',
  title: '你们在迪拜还是阿布扎比？',
  theme: 'Choices and Cultural Introduction',
  goal: 'Ask choices using 还是 and give alternatives using 或者.',
  heroTranslation: 'Are you in Dubai or Abu Dhabi?',

  titleTokens: [
    { py: 'Nǐmen', hz: '你们', cls: 'person' },
    { py: 'zài Dí bài', hz: '在迪拜', cls: 'place' },
    { py: 'háishi', hz: '还是', cls: 'speaker' },
    { py: 'Ābùzhābǐ', hz: '阿布扎比', cls: 'place' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🏙️', pinyin: 'Dí bài', text: '迪拜', translation: 'Dubai / دبي' },
    { emoji: '🕌', pinyin: 'Ābùzhābǐ', text: '阿布扎比', translation: 'Abu Dhabi / أبوظبي' },
    { emoji: '🏛️', pinyin: 'shǒudū', text: '首都', translation: 'capital / عاصمة' },
    { emoji: '🎭', pinyin: 'wénhuà', text: '文化', translation: 'culture / ثقافة' },
    { emoji: '💡', pinyin: 'liǎojiě', text: '了解', translation: 'understand / يفهم' },
    { emoji: '🎬', pinyin: 'shìpín', text: '视频', translation: 'video / فيديو' },
    { emoji: '💬', pinyin: 'pínglùn', text: '评论', translation: 'comment / تعليق' },
    { emoji: '👍', pinyin: 'diǎnzàn', text: '点赞', translation: 'like / إعجاب' },
    { emoji: '❓', pinyin: 'háishi', text: '还是', translation: 'or; choice question / أم' },
    { emoji: '🔸', pinyin: 'huòzhě', text: '或者', translation: 'or; alternative / أو' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
        { py: 'chá', hz: '茶', cls: 'activity' },
        { py: 'háishi', hz: '还是', cls: 'speaker' },
        { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Do you like tea or coffee? / هل تحب الشاي أم القهوة؟'
    },
    {
      tokens: [
        { py: 'Āliánqiú de shǒudū', hz: '阿联酋的首都', cls: 'place' },
        { py: 'shì Dí bài', hz: '是迪拜', cls: 'place' },
        { py: 'háishi Ābùzhābǐ', hz: '还是阿布扎比', cls: 'place' },
        { hz: '？' }
      ],
      translation: 'Is the capital of the UAE Dubai or Abu Dhabi? / هل عاصمة الإمارات دبي أم أبوظبي؟'
    },
    {
      tokens: [
        { py: 'Wǒ xiǎng pāi', hz: '我想拍', cls: 'self' },
        { py: 'yí ge shìpín', hz: '一个视频', cls: 'activity' },
        { hz: '，' },
        { py: 'jièshào Ābùzhābǐ', hz: '介绍阿布扎比', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'I want to make a video to introduce Abu Dhabi. / أريد أن أصوّر فيديو للتعريف بأبوظبي.'
    },
    {
      tokens: [
        { py: 'Zhè ge shìpín', hz: '这个视频', cls: 'activity' },
        { py: 'kěyǐ bāngzhù dàjiā', hz: '可以帮助大家', cls: 'activity' },
        { py: 'liǎojiě Āliánqiú', hz: '了解阿联酋', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'This video can help everyone understand the UAE. / هذا الفيديو يمكن أن يساعد الجميع على فهم الإمارات.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会问选择',
      translation: 'Do you like tea or coffee? Do you like cats or dogs? Is the capital of the UAE Dubai or Abu Dhabi? I want to make a video to introduce Abu Dhabi. This video can help everyone understand the UAE.',
      tip: 'Reading Goal: Use 还是 to ask a choice question.',
      lines: [
        {
          tokens: [
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'chá', hz: '茶', cls: 'activity' },
            { py: 'háishi', hz: '还是', cls: 'speaker' },
            { py: 'kāfēi', hz: '咖啡', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you like tea or coffee? / هل تحب الشاي أم القهوة؟'
        },
        {
          tokens: [
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'māo', hz: '猫', cls: 'activity' },
            { py: 'háishi', hz: '还是', cls: 'speaker' },
            { py: 'gǒu', hz: '狗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you like cats or dogs? / هل تحب القطط أم الكلاب؟'
        },
        {
          tokens: [
            { py: 'Āliánqiú de shǒudū', hz: '阿联酋的首都', cls: 'place' },
            { py: 'shì Dí bài', hz: '是迪拜', cls: 'place' },
            { py: 'háishi Ābùzhābǐ', hz: '还是阿布扎比', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Is the capital of the UAE Dubai or Abu Dhabi? / هل عاصمة الإمارات دبي أم أبوظبي؟'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng pāi', hz: '我想拍', cls: 'self' },
            { py: 'yí ge shìpín', hz: '一个视频', cls: 'activity' },
            { hz: '，' },
            { py: 'jièshào Ābùzhābǐ', hz: '介绍阿布扎比', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I want to make a video to introduce Abu Dhabi. / أريد أن أصوّر فيديو للتعريف بأبوظبي.'
        },
        {
          tokens: [
            { py: 'Zhè ge shìpín', hz: '这个视频', cls: 'activity' },
            { py: 'kěyǐ bāngzhù dàjiā', hz: '可以帮助大家', cls: 'activity' },
            { py: 'liǎojiě Āliánqiú', hz: '了解阿联酋', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This video can help everyone understand the UAE. / هذا الفيديو يمكن أن يساعد الجميع على فهم الإمارات.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会讨论城市介绍视频',
      translation: 'What video do you want to make? I want to make a video introducing the UAE. Will you introduce Dubai or Abu Dhabi? I want to introduce Abu Dhabi. Why? Because Abu Dhabi is the capital of the UAE. This idea is good. This way, everyone can understand UAE culture.',
      tip: 'Pair Work: Talk about making a video to introduce a city.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xiǎng pāi', hz: '你想拍', cls: 'person' },
            { py: 'shénme shìpín', hz: '什么视频', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What video do you want to make? / ما الفيديو الذي تريد تصويره؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xiǎng pāi', hz: '我想拍', cls: 'self' },
            { py: 'yí ge jièshào Āliánqiú de shìpín', hz: '一个介绍阿联酋的视频', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I want to make a video introducing the UAE. / أريد أن أصوّر فيديو للتعريف بالإمارات.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jièshào Dí bài', hz: '介绍迪拜', cls: 'place' },
            { py: 'háishi Ābùzhābǐ', hz: '还是阿布扎比', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Will you introduce Dubai or Abu Dhabi? / هل ستعرّفين بدبي أم أبوظبي؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'jièshào Ābùzhābǐ', hz: '介绍阿布扎比', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I want to introduce Abu Dhabi. / أريد أن أعرّف بأبوظبي.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wèishénme', hz: '为什么', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Why? / لماذا؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yīnwèi Ābùzhābǐ', hz: '因为阿布扎比', cls: 'place' },
            { py: 'shì Āliánqiú de shǒudū', hz: '是阿联酋的首都', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Because Abu Dhabi is the capital of the UAE. / لأن أبوظبي هي عاصمة الإمارات.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè ge zhǔyi', hz: '这个主意', cls: 'activity' },
            { py: 'bùcuò', hz: '不错', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This is a good idea. / هذه فكرة جيدة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhèyàng', hz: '这样', cls: 'speaker' },
            { py: 'dàjiā kěyǐ', hz: '大家可以', cls: 'person' },
            { py: 'liǎojiě Āliánqiú wénhuà', hz: '了解阿联酋文化', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This way, everyone can understand UAE culture. / بهذه الطريقة يمكن للجميع فهم ثقافة الإمارات.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲视频带来的了解',
      translation: 'Recently, I watched a video introducing the UAE. In the video, there was Dubai and also Abu Dhabi. Before, I thought Dubai was the capital of the UAE. Later, I learned that Abu Dhabi is the capital of the UAE. Through this video, I learned a lot about UAE culture. In the future, I also want to make a video, for example introducing my school or introducing my city.',
      tip: 'Speaking Goal: Explain how a video helps people understand a place.',
      lines: [
        {
          tokens: [
            { py: 'Zuìjìn', hz: '最近', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ kàn le', hz: '我看了', cls: 'self' },
            { py: 'yí ge jièshào Āliánqiú de shìpín', hz: '一个介绍阿联酋的视频', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Recently, I watched a video introducing the UAE. / مؤخرًا شاهدت فيديو يعرّف بالإمارات.'
        },
        {
          tokens: [
            { py: 'Shìpín lǐ', hz: '视频里', cls: 'activity' },
            { py: 'yǒu Dí bài', hz: '有迪拜', cls: 'place' },
            { hz: '，' },
            { py: 'yě yǒu Ābùzhābǐ', hz: '也有阿布扎比', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'In the video, there was Dubai and also Abu Dhabi. / في الفيديو توجد دبي، وتوجد أبوظبي أيضًا.'
        },
        {
          tokens: [
            { py: 'Yǐqián', hz: '以前', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ yǐwéi', hz: '我以为', cls: 'self' },
            { py: 'Dí bài', hz: '迪拜', cls: 'place' },
            { py: 'shì Āliánqiú de shǒudū', hz: '是阿联酋的首都', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Before, I thought Dubai was the capital of the UAE. / في السابق كنت أظن أن دبي هي عاصمة الإمارات.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { py: 'wǒ cái zhīdào', hz: '我才知道', cls: 'self' },
            { hz: '，' },
            { py: 'Ābùzhābǐ cái shì', hz: '阿布扎比才是', cls: 'place' },
            { py: 'Āliánqiú de shǒudū', hz: '阿联酋的首都', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Later, I learned that Abu Dhabi is the capital of the UAE. / بعد ذلك عرفت أن أبوظبي هي عاصمة الإمارات.'
        },
        {
          tokens: [
            { py: 'Tōngguò zhè ge shìpín', hz: '通过这个视频', cls: 'activity' },
            { hz: '，' },
            { py: 'wǒ liǎojiě le', hz: '我了解了', cls: 'self' },
            { py: 'hěn duō Āliánqiú wénhuà', hz: '很多阿联酋文化', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Through this video, I learned a lot about UAE culture. / من خلال هذا الفيديو، فهمت كثيرًا من ثقافة الإمارات.'
        },
        {
          tokens: [
            { py: 'Yǐhòu', hz: '以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ yě xiǎng', hz: '我也想', cls: 'self' },
            { py: 'pāi yí ge shìpín', hz: '拍一个视频', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'In the future, I also want to make a video. / في المستقبل، أريد أيضًا أن أصوّر فيديو.'
        },
        {
          tokens: [
            { py: 'Bǐrú', hz: '比如', cls: 'speaker' },
            { py: 'jièshào wǒ de xuéxiào', hz: '介绍我的学校', cls: 'place' },
            { hz: '，' },
            { py: 'huòzhě jièshào', hz: '或者介绍', cls: 'activity' },
            { py: 'wǒ de chéngshì', hz: '我的城市', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'For example, introducing my school or introducing my city. / مثلًا، أعرّف بمدرستي أو أعرّف بمدينتي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “你喜欢茶还是咖啡？” 是什么意思？',
      pinyin: '“Nǐ xǐhuan chá háishi kāfēi?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Do you like tea or coffee?', correct: true },
        { text: 'Do you want to make tea?', correct: false },
        { text: 'Is coffee expensive?', correct: false }
      ]
    },
    {
      question: '2. 阿联酋的首都是哪里？',
      pinyin: 'Āliánqiú de shǒudū shì nǎlǐ?',
      translation: 'What is the capital of the UAE?',
      choices: [
        { text: '阿布扎比', correct: true },
        { text: '迪拜', correct: false },
        { text: '上海', correct: false }
      ]
    },
    {
      question: '3. “或者” 一般用在哪里？',
      pinyin: '“Huòzhě” yìbān yòng zài nǎlǐ?',
      translation: 'Where is 或者 usually used?',
      choices: [
        { text: '陈述句里的选择', correct: true },
        { text: '只能用于问句', correct: false },
        { text: '只能表示时间', correct: false }
      ]
    },
    {
      question: '4. “这个视频可以帮助大家了解阿联酋。” 是什么意思？',
      pinyin: '“Zhè ge shìpín kěyǐ bāngzhù dàjiā liǎojiě Āliánqiú.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'This video can help everyone understand the UAE.', correct: true },
        { text: 'This video is very short.', correct: false },
        { text: 'Everyone wants to go to Dubai.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
        { blank: true },
        { py: 'háishi', hz: '还是', cls: 'speaker' },
        { blank: true },
        { hz: '？' }
      ],
      [
        { py: 'Āliánqiú de shǒudū', hz: '阿联酋的首都', cls: 'place' },
        { py: 'shì', hz: '是', cls: 'speaker' },
        { blank: true },
        { py: 'háishi', hz: '还是', cls: 'speaker' },
        { blank: true },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ xiǎng pāi', hz: '我想拍', cls: 'self' },
        { py: 'yí ge shìpín', hz: '一个视频', cls: 'activity' },
        { hz: '，' },
        { py: 'jièshào', hz: '介绍', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zhè ge shìpín', hz: '这个视频', cls: 'activity' },
        { py: 'kěyǐ bāngzhù dàjiā', hz: '可以帮助大家', cls: 'activity' },
        { py: 'liǎojiě', hz: '了解', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Do you like ______ or ______? Is the capital of the UAE ______ or ______? I want to make a video to introduce ______. This video can help everyone understand ______.',
    tip: 'Use: 茶、咖啡、迪拜、阿布扎比、阿联酋、阿联酋文化、我的学校、我的城市。'
  },

  meanings: {
    '迪拜': 'Dubai / دبي',
    '阿布扎比': 'Abu Dhabi / أبوظبي',
    '阿联酋': 'the UAE / الإمارات',
    '阿联酋的首都': 'the capital of the UAE / عاصمة الإمارات',
    '首都': 'capital / عاصمة',
    '文化': 'culture / ثقافة',
    '阿联酋文化': 'UAE culture / ثقافة الإمارات',
    '了解': 'understand / يفهم',
    '了解阿联酋': 'understand the UAE / يفهم الإمارات',
    '了解阿联酋文化': 'understand UAE culture / يفهم ثقافة الإمارات',
    '视频': 'video / فيديو',
    '评论': 'comment / تعليق',
    '点赞': 'like / إعجاب',
    '还是': 'or in a choice question / أم',
    '或者': 'or; alternative / أو',
    '你喜欢': 'you like / أنت تحب',
    '茶': 'tea / شاي',
    '咖啡': 'coffee / قهوة',
    '猫': 'cat / قطة',
    '狗': 'dog / كلب',
    '你喜欢茶还是咖啡': 'do you like tea or coffee / هل تحب الشاي أم القهوة',
    '你喜欢猫还是狗': 'do you like cats or dogs / هل تحب القطط أم الكلاب',
    '是迪拜还是阿布扎比': 'is it Dubai or Abu Dhabi / هل هي دبي أم أبوظبي',
    '介绍': 'introduce / يعرّف',
    '介绍阿布扎比': 'introduce Abu Dhabi / يعرّف بأبوظبي',
    '介绍阿联酋': 'introduce the UAE / يعرّف بالإمارات',
    '介绍我的学校': 'introduce my school / يعرّف بمدرستي',
    '介绍我的城市': 'introduce my city / يعرّف بمدينتي',
    '我想拍': 'I want to make; film / أريد أن أصوّر',
    '一个视频': 'a video / فيديو واحد',
    '我想拍一个视频': 'I want to make a video / أريد أن أصوّر فيديو',
    '可以帮助大家': 'can help everyone / يمكن أن يساعد الجميع',
    '这个视频可以帮助大家': 'this video can help everyone / هذا الفيديو يمكن أن يساعد الجميع',
    '你想拍什么视频': 'what video do you want to make / ما الفيديو الذي تريد تصويره',
    '介绍迪拜还是阿布扎比': 'introduce Dubai or Abu Dhabi / أعرّف بدبي أم أبوظبي',
    '为什么': 'why / لماذا',
    '因为阿布扎比': 'because Abu Dhabi / لأن أبوظبي',
    '是阿联酋的首都': 'is the capital of the UAE / هي عاصمة الإمارات',
    '这个主意': 'this idea / هذه الفكرة',
    '不错': 'good; not bad / جيد',
    '这样': 'this way / بهذه الطريقة',
    '大家可以': 'everyone can / يستطيع الجميع',
    '最近': 'recently / مؤخرًا',
    '我看了': 'I watched / شاهدت',
    '视频里': 'in the video / في الفيديو',
    '有迪拜': 'there is Dubai / توجد دبي',
    '也有阿布扎比': 'there is also Abu Dhabi / توجد أبوظبي أيضًا',
    '以前': 'before / سابقًا',
    '我以为': 'I thought / كنت أظن',
    '后来': 'later / بعد ذلك',
    '我才知道': 'then I learned / عندها عرفت',
    '阿布扎比才是': 'Abu Dhabi is actually / أبوظبي هي بالفعل',
    '通过这个视频': 'through this video / من خلال هذا الفيديو',
    '我了解了': 'I learned; understood / فهمت',
    '很多阿联酋文化': 'a lot of UAE culture / كثير من ثقافة الإمارات',
    '以后': 'in the future / في المستقبل',
    '我也想': 'I also want / أريد أيضًا',
    '拍一个视频': 'make a video / أصوّر فيديو',
    '比如': 'for example / مثلًا',
    '我的学校': 'my school / مدرستي',
    '我的城市': 'my city / مدينتي'
  }
};