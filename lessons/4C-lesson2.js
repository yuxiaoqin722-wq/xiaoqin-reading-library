window.LESSONS = window.LESSONS || {};

window.LESSONS['4C-lesson2'] = {
  id: '4C-lesson2',
  book: '4C',
  lesson: 'Lesson 2',
  title: '孩子送的礼物妈妈都喜欢吧？',
  theme: 'Gifts and Gratitude',
  goal: 'Use 吧 to make guesses or ask for confirmation, and express gratitude and care.',
  heroTranslation: 'Mothers probably like all gifts from their children, right?',

  titleTokens: [
    { py: 'Háizi sòng de', hz: '孩子送的', cls: 'person' },
    { py: 'lǐwù', hz: '礼物', cls: 'activity' },
    { py: 'māma', hz: '妈妈', cls: 'person' },
    { py: 'dōu xǐhuan ba', hz: '都喜欢吧', cls: 'like' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🎁', pinyin: 'lǐwù', text: '礼物', translation: 'gift / هدية' },
    { emoji: '🎂', pinyin: 'shēngrì', text: '生日', translation: 'birthday / عيد ميلاد' },
    { emoji: '💐', pinyin: 'yí shù huā', text: '一束花', translation: 'a bunch of flowers / باقة زهور' },
    { emoji: '💌', pinyin: 'shēngrì kǎ', text: '生日卡', translation: 'birthday card / بطاقة عيد ميلاد' },
    { emoji: '💛', pinyin: 'guānxīn', text: '关心', translation: 'care / اهتمام' },
    { emoji: '🤲', pinyin: 'zhàogù', text: '照顾', translation: 'take care of / يعتني' },
    { emoji: '🙏', pinyin: 'gǎnxiè', text: '感谢', translation: 'thank; be grateful / يشكر' },
    { emoji: '🌟', pinyin: 'tèbié', text: '特别', translation: 'special / خاص' },
    { emoji: '🤔', pinyin: 'juéde', text: '觉得', translation: 'think; feel / يعتقد' },
    { emoji: '❓', pinyin: 'ba', text: '吧', translation: 'right? probably / أليس كذلك؟' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Háizi sòng de', hz: '孩子送的', cls: 'person' },
        { py: 'lǐwù', hz: '礼物', cls: 'activity' },
        { py: 'māma', hz: '妈妈', cls: 'person' },
        { py: 'dōu xǐhuan ba', hz: '都喜欢吧', cls: 'like' },
        { hz: '？' }
      ],
      translation: 'Mothers probably like all gifts from their children, right? / الأمهات غالبًا يحببن كل الهدايا التي يقدمها أطفالهن، أليس كذلك؟'
    },
    {
      tokens: [
        { py: 'Gǎnxiè māma', hz: '感谢妈妈', cls: 'person' },
        { py: 'duì wǒ de', hz: '对我的', cls: 'self' },
        { py: 'guānxīn hé zhàogù', hz: '关心和照顾', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Thank you, Mom, for your care and taking care of me. / شكرًا لأمي على اهتمامها بي ورعايتها لي.'
    },
    {
      tokens: [
        { py: 'Wǒ xiǎng sòng tā', hz: '我想送她', cls: 'self' },
        { py: 'yí ge tèbié de', hz: '一个特别的', cls: 'like' },
        { py: 'lǐwù', hz: '礼物', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I want to give her a special gift. / أريد أن أقدم لها هدية خاصة.'
    },
    {
      tokens: [
        { py: 'Yīnwèi māma', hz: '因为妈妈', cls: 'person' },
        { py: 'xǐhuan kàn shū', hz: '喜欢看书', cls: 'like' },
        { hz: '，' },
        { py: 'suǒyǐ wǒ xiǎng', hz: '所以我想', cls: 'self' },
        { py: 'sòng tā yì běn shū', hz: '送她一本书', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Because Mom likes reading, I want to give her a book. / لأن أمي تحب القراءة، لذلك أريد أن أهديها كتابًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会表达感谢和推测',
      translation: 'Mom always cares about me. She takes care of me every day. I want to thank Mom. Happy birthday, Mom! Mothers probably like all gifts from their children, right?',
      tip: 'Reading Goal: Express gratitude and use 吧 to make a guess or ask for confirmation.',
      lines: [
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'yìzhí', hz: '一直', cls: 'time' },
            { py: 'hěn guānxīn wǒ', hz: '很关心我', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Mom always cares about me. / أمي تهتم بي دائمًا.'
        },
        {
          tokens: [
            { py: 'Tā měi tiān', hz: '她每天', cls: 'time' },
            { py: 'dōu zhàogù wǒ', hz: '都照顾我', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'She takes care of me every day. / هي تعتني بي كل يوم.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'gǎnxiè māma', hz: '感谢妈妈', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I want to thank Mom. / أريد أن أشكر أمي.'
        },
        {
          tokens: [
            { py: 'Zhù māma', hz: '祝妈妈', cls: 'person' },
            { py: 'shēngrì kuàilè', hz: '生日快乐', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Happy birthday, Mom! / عيد ميلاد سعيد يا أمي!'
        },
        {
          tokens: [
            { py: 'Háizi sòng de', hz: '孩子送的', cls: 'person' },
            { py: 'lǐwù', hz: '礼物', cls: 'activity' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { py: 'dōu xǐhuan ba', hz: '都喜欢吧', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Mothers probably like all gifts from their children, right? / الأمهات غالبًا يحببن كل الهدايا التي يقدمها أطفالهن، أليس كذلك؟'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会讨论生日礼物',
      translation: 'Next week is your mom’s birthday, right? Yes. What gift are you going to prepare? I want to give her a book. Why a book? Because Mom likes reading. What else did you prepare? I also wrote a birthday card. She will like it, right? I think she will like it.',
      tip: 'Pair Work: Talk about what gift you want to give and why.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xià xīngqī', hz: '下星期', cls: 'time' },
            { py: 'shì nǐ māma de', hz: '是你妈妈的', cls: 'person' },
            { py: 'shēngrì ba', hz: '生日吧', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Next week is your mom’s birthday, right? / الأسبوع القادم عيد ميلاد والدتك، أليس كذلك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duì', hz: '对', cls: 'speaker' },
            { hz: '。' }
          ],
          translation: 'Yes. / نعم.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zhǔnbèi', hz: '你准备', cls: 'self' },
            { py: 'sòng shénme', hz: '送什么', cls: 'activity' },
            { py: 'lǐwù', hz: '礼物', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What gift are you going to prepare? / ما الهدية التي ستجهزها؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'sòng tā', hz: '送她', cls: 'activity' },
            { py: 'yì běn shū', hz: '一本书', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to give her a book. / أريد أن أهديها كتابًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wèishénme', hz: '为什么', cls: 'speaker' },
            { py: 'sòng shū', hz: '送书', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Why give her a book? / لماذا تهديها كتابًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yīnwèi māma', hz: '因为妈妈', cls: 'person' },
            { py: 'xǐhuan kàn shū', hz: '喜欢看书', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because Mom likes reading. / لأن أمي تحب القراءة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ hái zhǔnbèi le', hz: '你还准备了', cls: 'self' },
            { py: 'shénme', hz: '什么', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What else did you prepare? / ماذا جهزت أيضًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ hái xiě le', hz: '我还写了', cls: 'self' },
            { py: 'yì zhāng', hz: '一张', cls: 'speaker' },
            { py: 'shēngrì kǎ', hz: '生日卡', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also wrote a birthday card. / كتبت أيضًا بطاقة عيد ميلاد.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'huì xǐhuan ba', hz: '会喜欢吧', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Mom will like it, right? / ستعجب والدتك بها، أليس كذلك؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'huì xǐhuan', hz: '会喜欢', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think she will like it. / أعتقد أنها ستعجب بها.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会表达感谢和祝福',
      translation: 'Next week is my mom’s birthday. I want to give her a special gift. I plan to make a birthday card by myself. I also want to give her a bunch of flowers. Mom will like it, right? Because this is a gift I prepared by myself. I want to thank Mom for her care and taking care of me. I hope she is happy every day.',
      tip: 'Speaking Goal: Talk about a gift and explain the feeling behind it.',
      lines: [
        {
          tokens: [
            { py: 'Xià xīngqī', hz: '下星期', cls: 'time' },
            { py: 'shì wǒ māma de', hz: '是我妈妈的', cls: 'person' },
            { py: 'shēngrì', hz: '生日', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Next week is my mom’s birthday. / الأسبوع القادم عيد ميلاد أمي.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng sòng tā', hz: '我想送她', cls: 'self' },
            { py: 'yí ge tèbié de', hz: '一个特别的', cls: 'like' },
            { py: 'lǐwù', hz: '礼物', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to give her a special gift. / أريد أن أقدم لها هدية خاصة.'
        },
        {
          tokens: [
            { py: 'Wǒ dǎsuàn', hz: '我打算', cls: 'self' },
            { py: 'zìjǐ zuò', hz: '自己做', cls: 'activity' },
            { py: 'yì zhāng', hz: '一张', cls: 'speaker' },
            { py: 'shēngrì kǎ', hz: '生日卡', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I plan to make a birthday card by myself. / أخطط أن أصنع بطاقة عيد ميلاد بنفسي.'
        },
        {
          tokens: [
            { py: 'Wǒ hái xiǎng', hz: '我还想', cls: 'self' },
            { py: 'sòng tā', hz: '送她', cls: 'activity' },
            { py: 'yí shù huā', hz: '一束花', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also want to give her a bunch of flowers. / أريد أيضًا أن أهديها باقة زهور.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'huì xǐhuan ba', hz: '会喜欢吧', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Mom will like it, right? / ستعجب أمي بها، أليس كذلك؟'
        },
        {
          tokens: [
            { py: 'Yīnwèi zhè shì', hz: '因为这是', cls: 'speaker' },
            { py: 'wǒ zìjǐ', hz: '我自己', cls: 'self' },
            { py: 'zhǔnbèi de', hz: '准备的', cls: 'activity' },
            { py: 'lǐwù', hz: '礼物', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Because this is a gift I prepared by myself. / لأن هذه هدية جهزتها بنفسي.'
        },
        {
          tokens: [
            { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
            { py: 'gǎnxiè māma', hz: '感谢妈妈', cls: 'person' },
            { py: 'duì wǒ de', hz: '对我的', cls: 'self' },
            { py: 'guānxīn hé zhàogù', hz: '关心和照顾', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I want to thank Mom for her care and taking care of me. / أريد أن أشكر أمي على اهتمامها بي ورعايتها لي.'
        },
        {
          tokens: [
            { py: 'Wǒ xīwàng', hz: '我希望', cls: 'self' },
            { py: 'tā měi tiān', hz: '她每天', cls: 'time' },
            { py: 'dōu kāixīn', hz: '都开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I hope she is happy every day. / أتمنى أن تكون سعيدة كل يوم.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “孩子送的礼物妈妈都喜欢吧？” 是什么意思？',
      pinyin: '“Háizi sòng de lǐwù māma dōu xǐhuan ba?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Mothers probably like all gifts from their children, right?', correct: true },
        { text: 'Mothers do not like gifts from children.', correct: false },
        { text: 'Children do not send gifts.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “gift”？',
      pinyin: 'Nǎ yí ge shì “gift”?',
      translation: 'Which one means “gift”?',
      choices: [
        { text: '礼物', correct: true },
        { text: '关心', correct: false },
        { text: '照顾', correct: false }
      ]
    },
    {
      question: '3. “感谢妈妈对我的关心和照顾。” 是什么意思？',
      pinyin: '“Gǎnxiè māma duì wǒ de guānxīn hé zhàogù.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Thank Mom for her care and taking care of me.', correct: true },
        { text: 'Mom likes reading books.', correct: false },
        { text: 'I want to buy flowers.', correct: false }
      ]
    },
    {
      question: '4. B层中，为什么“我”想送妈妈一本书？',
      pinyin: 'B céng zhōng, wèishénme “wǒ” xiǎng sòng māma yì běn shū?',
      translation: 'In Level B, why does “I” want to give Mom a book?',
      choices: [
        { text: '因为妈妈喜欢看书。', correct: true },
        { text: '因为妈妈喜欢唱歌。', correct: false },
        { text: '因为妈妈喜欢运动。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ xiǎng', hz: '我想', cls: 'self' },
        { py: 'sòng tā', hz: '送她', cls: 'activity' },
        { blank: true },
        { py: 'tèbié de lǐwù', hz: '特别的礼物', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Yīnwèi māma', hz: '因为妈妈', cls: 'person' },
        { blank: true },
        { hz: '，' },
        { py: 'suǒyǐ wǒ xiǎng', hz: '所以我想', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Gǎnxiè māma', hz: '感谢妈妈', cls: 'person' },
        { py: 'duì wǒ de', hz: '对我的', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Māma', hz: '妈妈', cls: 'person' },
        { py: 'huì xǐhuan ba', hz: '会喜欢吧', cls: 'like' },
        { hz: '？' }
      ]
    ],
    translation: 'I want to give her a special gift. Because Mom ______, so I want to ______. Thank Mom for her ______. Mom will like it, right?',
    tip: 'Use: 一个、喜欢看书、送她一本书、关心和照顾。'
  },

  meanings: {
    '孩子': 'child / طفل',
    '孩子送的': 'sent by children / التي يقدمها الأطفال',
    '礼物': 'gift / هدية',
    '妈妈': 'mom / أمي',
    '都喜欢吧': 'probably all like, right / يحببن كلها، أليس كذلك',
    '孩子送的礼物妈妈都喜欢吧': 'mothers probably like all gifts from their children, right / الأمهات غالبًا يحببن كل الهدايا التي يقدمها أطفالهن، أليس كذلك',
    '生日': 'birthday / عيد ميلاد',
    '生日吧': 'birthday, right / عيد ميلاد، أليس كذلك',
    '一束花': 'a bunch of flowers / باقة زهور',
    '生日卡': 'birthday card / بطاقة عيد ميلاد',
    '关心': 'care / اهتمام',
    '照顾': 'take care of / يعتني',
    '关心和照顾': 'care and taking care / الاهتمام والرعاية',
    '感谢': 'thank; be grateful / يشكر',
    '感谢妈妈': 'thank Mom / أشكر أمي',
    '感谢妈妈对我的关心和照顾': 'thank Mom for her care and taking care of me / أشكر أمي على اهتمامها بي ورعايتها لي',
    '特别': 'special / خاص',
    '特别的礼物': 'special gift / هدية خاصة',
    '我想': 'I want / أريد',
    '我想送她': 'I want to give her / أريد أن أقدم لها',
    '一个特别的礼物': 'a special gift / هدية خاصة',
    '我想送她一个特别的礼物': 'I want to give her a special gift / أريد أن أقدم لها هدية خاصة',
    '因为': 'because / لأن',
    '所以': 'so / لذلك',
    '因为妈妈': 'because Mom / لأن أمي',
    '喜欢看书': 'likes reading / تحب القراءة',
    '因为妈妈喜欢看书，所以我想送她一本书': 'because Mom likes reading, I want to give her a book / لأن أمي تحب القراءة، لذلك أريد أن أهديها كتابًا',
    '送': 'give; send / يهدي',
    '送她': 'give her / أهديها',
    '送什么': 'give what / أهدي ماذا',
    '送书': 'give a book / يهدي كتابًا',
    '一本书': 'a book / كتاب واحد',
    '送她一本书': 'give her a book / أهديها كتابًا',
    '觉得': 'think; feel / يعتقد',
    '我觉得': 'I think / أعتقد',
    '吧': 'right? probably / أليس كذلك؟',
    '会喜欢吧': 'will like it, right / ستعجبه، أليس كذلك',
    '会喜欢': 'will like / سوف يعجب',
    '下星期': 'next week / الأسبوع القادم',
    '是你妈妈的': 'is your mom’s / هو خاص بوالدتك',
    '是我妈妈的': 'is my mom’s / هو خاص بأمي',
    '你准备': 'you prepare / أنت تجهز',
    '准备': 'prepare / يجهز',
    '你还准备了': 'what else did you prepare / ماذا جهزت أيضًا',
    '什么': 'what / ماذا',
    '为什么': 'why / لماذا',
    '为什么送书': 'why give a book / لماذا تهدي كتابًا',
    '对': 'yes; right / نعم؛ صحيح',
    '我还写了': 'I also wrote / كتبت أيضًا',
    '一张': 'one sheet; one card / بطاقة واحدة',
    '我打算': 'I plan to / أخطط أن',
    '自己做': 'make by myself / أصنع بنفسي',
    '我还想': 'I also want / أريد أيضًا',
    '因为这是': 'because this is / لأن هذه',
    '我自己': 'myself / بنفسي',
    '准备的': 'prepared / جهزت',
    '我自己准备的礼物': 'a gift I prepared by myself / هدية جهزتها بنفسي',
    '我希望': 'I hope / أتمنى',
    '她每天': 'she every day / هي كل يوم',
    '都开心': 'is happy every day / سعيدة كل يوم',
    '生日快乐': 'happy birthday / عيد ميلاد سعيد',
    '祝妈妈生日快乐': 'Happy birthday, Mom / عيد ميلاد سعيد يا أمي'
  }
};