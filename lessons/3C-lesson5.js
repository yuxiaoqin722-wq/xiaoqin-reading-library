window.LESSONS = window.LESSONS || {};

window.LESSONS['3C-lesson5'] = {
  id: '3C-lesson5',
  book: '3C',
  lesson: 'Lesson 5',
  title: '你怎么才来？',
  theme: 'Time, Punctuality and Movement',
  goal: 'Use 就 and 才 to talk about time, and use 上来 / 下去 / 上去 / 下来 to describe movement.',
  heroTranslation: 'Why are you only coming now?',

  titleTokens: [
    { py: 'Nǐ', hz: '你', cls: 'person' },
    { py: 'zěnme cái lái', hz: '怎么才来', cls: 'time' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '⏰', pinyin: 'jiù', text: '就', translation: 'already / بالفعل' },
    { emoji: '🕒', pinyin: 'cái', text: '才', translation: 'only then / فقط حينها' },
    { emoji: '🏃', pinyin: 'chídào', text: '迟到', translation: 'be late / يتأخر' },
    { emoji: '🎉', pinyin: 'kāishǐ', text: '开始', translation: 'start / يبدأ' },
    { emoji: '🛏️', pinyin: 'shuìjiào', text: '睡觉', translation: 'sleep / ينام' },
    { emoji: '🌅', pinyin: 'qǐchuáng', text: '起床', translation: 'get up / يستيقظ' },
    { emoji: '⬆️', pinyin: 'shànglái', text: '上来', translation: 'come up / يصعد إلى هنا' },
    { emoji: '⬇️', pinyin: 'xiàqù', text: '下去', translation: 'go down / ينزل إلى هناك' },
    { emoji: '🎤', pinyin: 'biǎoyǎn', text: '表演', translation: 'performance / عرض' },
    { emoji: '🔜', pinyin: 'lúndào', text: '轮到', translation: 'be one’s turn / يحين الدور' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zěnme cái lái', hz: '怎么才来', cls: 'time' },
        { hz: '？' }
      ],
      translation: 'Why are you only coming now? / لماذا جئت الآن فقط؟'
    },
    {
      tokens: [
        { py: 'Wénhuà Rì', hz: '文化日', cls: 'activity' },
        { py: 'jiǔ diǎn jiù kāishǐ le', hz: '九点就开始了', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'Culture Day already started at nine o’clock. / بدأ يوم الثقافة في الساعة التاسعة بالفعل.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'shí’èr diǎn cái shuìjiào', hz: '十二点才睡觉', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I only went to sleep at twelve o’clock. / لم أنم إلا في الساعة الثانية عشرة.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiànzài shànglái', hz: '现在上来', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I am coming up now. / أنا أصعد الآن.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说早和晚',
      translation: 'I got up at six o’clock already. She only came at eight o’clock. Culture Day already started at nine o’clock. I only went to sleep at twelve o’clock. I am coming up now.',
      tip: 'Reading Goal: Use 就 and 才 to talk about early and late time.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'liù diǎn jiù qǐchuáng le', hz: '六点就起床了', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I got up at six o’clock already. / استيقظت في الساعة السادسة بالفعل.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'bā diǎn cái lái', hz: '八点才来', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'She only came at eight o’clock. / جاءت في الساعة الثامنة فقط.'
        },
        {
          tokens: [
            { py: 'Wénhuà Rì', hz: '文化日', cls: 'activity' },
            { py: 'jiǔ diǎn jiù kāishǐ le', hz: '九点就开始了', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Culture Day already started at nine o’clock. / بدأ يوم الثقافة في الساعة التاسعة بالفعل.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shí’èr diǎn cái shuìjiào', hz: '十二点才睡觉', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I only went to sleep at twelve o’clock. / لم أنم إلا في الساعة الثانية عشرة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiànzài shànglái', hz: '现在上来', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am coming up now. / أنا أصعد الآن.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会打电话问迟到',
      translation: 'Where are you? I just arrived at school. Why are you only coming now? Sorry, I am late. Culture Day already started at nine o’clock. I only went to sleep at twelve o’clock yesterday, and I only got up at seven o’clock today. Where are you? We are on the second floor. Come up now. Okay, I am coming up now. Hurry up, it is almost our turn.',
      tip: 'Pair Work: Make a phone call and explain why someone is late.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zài nǎr', hz: '你在哪儿', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Where are you? / أين أنت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ gāng dào xuéxiào', hz: '我刚到学校', cls: 'self' },
            { hz: '。' }
          ],
          translation: 'I just arrived at school. / وصلت إلى المدرسة للتو.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zěnme cái lái', hz: '怎么才来', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'Why are you only coming now? / لماذا جئت الآن فقط؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duìbuqǐ', hz: '对不起', cls: 'respect' },
            { hz: '，' },
            { py: 'wǒ chídào le', hz: '我迟到了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Sorry, I am late. / آسف، تأخرت.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wénhuà Rì', hz: '文化日', cls: 'activity' },
            { py: 'jiǔ diǎn jiù kāishǐ le', hz: '九点就开始了', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Culture Day already started at nine o’clock. / بدأ يوم الثقافة في الساعة التاسعة بالفعل.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zuótiān', hz: '我昨天', cls: 'self' },
            { py: 'shí’èr diǎn cái shuìjiào', hz: '十二点才睡觉', cls: 'time' },
            { hz: '，' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'qī diǎn cái qǐchuáng', hz: '七点才起床', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Yesterday I only slept at twelve, and today I only got up at seven. / أمس لم أنم إلا في الثانية عشرة، واليوم لم أستيقظ إلا في السابعة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐmen zài nǎr', hz: '你们在哪儿', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Where are you all? / أين أنتم؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen zài èr lóu', hz: '我们在二楼', cls: 'place' },
            { hz: '，' },
            { py: 'nǐ xiànzài shànglái ba', hz: '你现在上来吧', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We are on the second floor. Come up now. / نحن في الطابق الثاني، اصعد الآن.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo', hz: '好', cls: 'like' },
            { hz: '，' },
            { py: 'wǒ xiànzài shànglái', hz: '我现在上来', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Okay, I am coming up now. / حسنًا، أنا أصعد الآن.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Kuài yìdiǎnr', hz: '快一点儿', cls: 'time' },
            { hz: '，' },
            { py: 'kuài lúndào wǒmen le', hz: '快轮到我们了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Hurry up, it is almost our turn. / أسرع قليلًا، حان دورنا تقريبًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲迟到的经历',
      translation: 'Yesterday night, I only went to sleep at twelve o’clock. This morning, I only got up at seven o’clock. I was very worried. Our school’s Chinese Culture Day already started at nine o’clock. I only arrived at school at eight fifty. My friend asked why I came so late. Our class was on the second floor. I hurried upstairs. When I got to the second floor, it was almost our turn to perform. Although I came late, I did not miss the performance.',
      tip: 'Speaking Goal: Tell a short story about being late and catching up.',
      lines: [
        {
          tokens: [
            { py: 'Zuótiān wǎnshang', hz: '昨天晚上', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'shí’èr diǎn cái shuìjiào', hz: '十二点才睡觉', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Yesterday night, I only went to sleep at twelve o’clock. / ليلة أمس لم أنم إلا في الساعة الثانية عشرة.'
        },
        {
          tokens: [
            { py: 'Jīntiān zǎoshang', hz: '今天早上', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'qī diǎn cái qǐchuáng', hz: '七点才起床', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This morning, I only got up at seven o’clock. / هذا الصباح لم أستيقظ إلا في الساعة السابعة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hěn zháojí', hz: '很着急', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I was very worried. / كنت قلقًا جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒmen xuéxiào de', hz: '我们学校的', cls: 'place' },
            { py: 'Zhōngguó Wénhuà Rì', hz: '中国文化日', cls: 'activity' },
            { py: 'jiǔ diǎn jiù kāishǐ le', hz: '九点就开始了', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Our school’s Chinese Culture Day already started at nine o’clock. / بدأ يوم الثقافة الصينية في مدرستنا في الساعة التاسعة بالفعل.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'bā diǎn wǔshí cái dào xuéxiào', hz: '八点五十才到学校', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I only arrived at school at eight fifty. / وصلت إلى المدرسة فقط في الساعة الثامنة وخمسين.'
        },
        {
          tokens: [
            { py: 'Péngyou wèn wǒ', hz: '朋友问我', cls: 'person' },
            { py: 'wèishénme lái de zhème wǎn', hz: '为什么来得这么晚', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'My friend asked why I came so late. / سألني صديقي لماذا جئت متأخرًا هكذا.'
        },
        {
          tokens: [
            { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
            { py: 'zài èr lóu', hz: '在二楼', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Our class was on the second floor. / كان صفنا في الطابق الثاني.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'gǎnjǐn pǎo shàngqù', hz: '赶紧跑上去', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I hurried upstairs. / أسرعت بالصعود إلى الأعلى.'
        },
        {
          tokens: [
            { py: 'Dào èr lóu de shíhou', hz: '到二楼的时候', cls: 'time' },
            { hz: '，' },
            { py: 'kuài lúndào wǒmen', hz: '快轮到我们', cls: 'activity' },
            { py: 'biǎoyǎn le', hz: '表演了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'When I got to the second floor, it was almost our turn to perform. / عندما وصلت إلى الطابق الثاني، كان دورنا في العرض قد اقترب.'
        },
        {
          tokens: [
            { py: 'Suīrán', hz: '虽然', cls: 'not-like' },
            { py: 'wǒ lái de wǎn', hz: '我来得晚', cls: 'time' },
            { hz: '，' },
            { py: 'dànshì', hz: '但是', cls: 'not-like' },
            { py: 'méiyǒu cuòguò biǎoyǎn', hz: '没有错过表演', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Although I came late, I did not miss the performance. / رغم أنني جئت متأخرًا، لم أُفَوّت العرض.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “你怎么才来？” 是什么意思？',
      pinyin: '“Nǐ zěnme cái lái?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Why are you only coming now?', correct: true },
        { text: 'Where are you going?', correct: false },
        { text: 'When did you sleep?', correct: false }
      ]
    },
    {
      question: '2. “文化日九点就开始了。” 里的 “就” 表示什么？',
      pinyin: '“Wénhuà Rì jiǔ diǎn jiù kāishǐ le.” lǐ de “jiù” biǎoshì shénme?',
      translation: 'What does 就 show in this sentence?',
      choices: [
        { text: 'It started earlier than expected.', correct: true },
        { text: 'It started very late.', correct: false },
        { text: 'It did not start.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “come up”？',
      pinyin: 'Nǎ yí ge shì “come up”?',
      translation: 'Which one means “come up”?',
      choices: [
        { text: '上来', correct: true },
        { text: '下去', correct: false },
        { text: '迟到', correct: false }
      ]
    },
    {
      question: '4. “我十二点才睡觉。” 是什么意思？',
      pinyin: '“Wǒ shí’èr diǎn cái shuìjiào.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I only went to sleep at twelve.', correct: true },
        { text: 'I got up at twelve.', correct: false },
        { text: 'I came at twelve.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zuótiān wǎnshang', hz: '昨天晚上', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'cái shuìjiào', hz: '才睡觉', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān zǎoshang', hz: '今天早上', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'cái qǐchuáng', hz: '才起床', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen xuéxiào de', hz: '我们学校的', cls: 'place' },
        { blank: true },
        { py: 'jiǔ diǎn jiù kāishǐ le', hz: '九点就开始了', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'cái dào xuéxiào', hz: '才到学校', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen bān', hz: '我们班', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'gǎnjǐn', hz: '赶紧', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Yesterday night, I only slept at ______. This morning, I only got up at ______. Our school’s ______ already started at nine. I only arrived at school at ______. Our class was on ______. I hurried ______.',
    tip: 'Use: 十二点、七点、八点五十、中国文化日、二楼、上去、上来、迟到、表演、九点。'
  },

  meanings: {
    '就': 'already; earlier than expected / بالفعل؛ أبكر من المتوقع',
    '才': 'only then; later than expected / فقط حينها؛ متأخر عن المتوقع',
    '迟到': 'be late / يتأخر',
    '我迟到了': 'I am late / تأخرت',
    '开始': 'start / يبدأ',
    '开始了': 'started / بدأ',
    '九点就开始了': 'already started at nine / بدأ في التاسعة بالفعل',
    '文化日': 'Culture Day / يوم الثقافة',
    '中国文化日': 'Chinese Culture Day / يوم الثقافة الصينية',
    '睡觉': 'sleep / ينام',
    '才睡觉': 'only went to sleep / نام فقط حينها',
    '十二点才睡觉': 'only went to sleep at twelve / لم ينم إلا في الثانية عشرة',
    '起床': 'get up / يستيقظ',
    '才起床': 'only got up / استيقظ فقط حينها',
    '七点才起床': 'only got up at seven / لم يستيقظ إلا في السابعة',
    '来': 'come / يأتي',
    '才来': 'only come now / جاء الآن فقط',
    '怎么才来': 'why are you only coming now / لماذا جئت الآن فقط',
    '上来': 'come up / يصعد إلى هنا',
    '上去': 'go up / يصعد إلى هناك',
    '下来': 'come down / ينزل إلى هنا',
    '下去': 'go down / ينزل إلى هناك',
    '现在上来': 'come up now / اصعد الآن',
    '我现在上来': 'I am coming up now / أنا أصعد الآن',
    '赶紧跑上去': 'hurry upstairs / أسرع بالصعود',
    '二楼': 'second floor / الطابق الثاني',
    '在二楼': 'on the second floor / في الطابق الثاني',
    '到二楼的时候': 'when arriving at the second floor / عندما وصل إلى الطابق الثاني',
    '表演': 'performance / عرض',
    '轮到': 'be one’s turn / يحين الدور',
    '快轮到我们了': 'it is almost our turn / حان دورنا تقريبًا',
    '没有错过表演': 'did not miss the performance / لم يفوت العرض',
    '你在哪儿': 'where are you / أين أنت',
    '我刚到学校': 'I just arrived at school / وصلت إلى المدرسة للتو',
    '对不起': 'sorry / آسف',
    '我昨天': 'I yesterday / أنا أمس',
    '今天': 'today / اليوم',
    '你们在哪儿': 'where are you all / أين أنتم',
    '我们在二楼': 'we are on the second floor / نحن في الطابق الثاني',
    '快一点儿': 'hurry up / أسرع قليلًا',
    '昨天晚上': 'yesterday night / ليلة أمس',
    '今天早上': 'this morning / هذا الصباح',
    '很着急': 'very worried / قلق جدًا',
    '八点五十才到学校': 'only arrived at school at eight fifty / وصل إلى المدرسة في الثامنة وخمسين فقط',
    '朋友问我': 'my friend asked me / سألني صديقي',
    '为什么来得这么晚': 'why came so late / لماذا جاء متأخرًا هكذا',
    '我们班': 'our class / صفنا',
    '虽然': 'although / رغم أن',
    '我来得晚': 'I came late / جئت متأخرًا',
    '但是': 'but / لكن'
  }
};