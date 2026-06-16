window.LESSONS = window.LESSONS || {};

window.LESSONS['3B-lesson5'] = {
  id: '3B-lesson5',
  book: '3B',
  lesson: 'Lesson 5',
  title: '哈利法塔晚上最漂亮。',
  theme: 'Sequence and Reasons',
  goal: 'Describe sequence with 先……再…… and explain reasons with 因为……所以…….',
  heroTranslation: 'The Burj Khalifa is most beautiful at night.',

  titleTokens: [
    { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
    { py: 'wǎnshang', hz: '晚上', cls: 'time' },
    { py: 'zuì piàoliang', hz: '最漂亮', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '💡', pinyin: 'yīnwèi', text: '因为', translation: 'because / لأن' },
    { emoji: '➡️', pinyin: 'suǒyǐ', text: '所以', translation: 'so / لذلك' },
    { emoji: '1️⃣', pinyin: 'xiān', text: '先', translation: 'first / أولًا' },
    { emoji: '2️⃣', pinyin: 'zài', text: '再', translation: 'then / ثم' },
    { emoji: '🔦', pinyin: 'dēng', text: '灯', translation: 'light / ضوء' },
    { emoji: '🌈', pinyin: 'wǔyán-liùsè', text: '五颜六色', translation: 'colorful / ملون' },
    { emoji: '✨', pinyin: 'piàoliang', text: '漂亮', translation: 'beautiful / جميل' },
    { emoji: '👀', pinyin: 'cānguān', text: '参观', translation: 'visit / يزور' },
    { emoji: '📷', pinyin: 'zhàopiàn', text: '照片', translation: 'photo / صورة' },
    { emoji: '😊', pinyin: 'gāoxìng', text: '高兴', translation: 'happy / سعيد' },
    { emoji: '🗓️', pinyin: 'zhōumò', text: '周末', translation: 'weekend / عطلة نهاية الأسبوع' },
    { emoji: '🌙', pinyin: 'wǎnshang', text: '晚上', translation: 'evening / night / مساء' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Yīnwèi', hz: '因为', cls: 'time' },
        { py: 'wǎnshang', hz: '晚上', cls: 'time' },
        { py: 'yǒu wǔyán-liùsè de dēng', hz: '有五颜六色的灯', cls: 'activity' },
        { hz: '，' },
        { py: 'suǒyǐ', hz: '所以', cls: 'time' },
        { py: 'tèbié piàoliang', hz: '特别漂亮', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Because there are colorful lights at night, it is especially beautiful. / لأنه توجد أضواء ملونة في الليل، فهو جميل جدًا.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiān chīfàn', hz: '先吃饭', cls: 'activity' },
        { hz: '，' },
        { py: 'zài qù cānguān', hz: '再去参观', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I eat first, then go visit. / آكل أولًا، ثم أذهب للزيارة.'
    },
    {
      tokens: [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
        { py: 'wǎnshang', hz: '晚上', cls: 'time' },
        { py: 'zuì piàoliang', hz: '最漂亮', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I think the Burj Khalifa is most beautiful at night. / أعتقد أن برج خليفة يكون أجمل في الليل.'
    },
    {
      tokens: [
        { py: 'Yīnwèi', hz: '因为', cls: 'time' },
        { py: 'tiānqì hěn hǎo', hz: '天气很好', cls: 'like' },
        { hz: '，' },
        { py: 'suǒyǐ', hz: '所以', cls: 'time' },
        { py: 'wǒmen qù gōngyuán', hz: '我们去公园', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Because the weather is good, we go to the park. / لأن الطقس جيد، نذهب إلى الحديقة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说顺序和原因',
      translation: 'I eat first, then do homework. I study first, then exercise. Because today is the weekend, I am very happy. Because the weather is good, we go to the park. Because there are colorful lights at night, it is especially beautiful.',
      tip: 'Reading Goal: Use 先……再…… and 因为……所以…….',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiān chīfàn', hz: '先吃饭', cls: 'activity' },
            { hz: '，' },
            { py: 'zài zuò zuòyè', hz: '再做作业', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I eat first, then do homework. / آكل أولًا، ثم أعمل الواجب.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiān xuéxí', hz: '先学习', cls: 'activity' },
            { hz: '，' },
            { py: 'zài yùndòng', hz: '再运动', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I study first, then exercise. / أدرس أولًا، ثم أمارس الرياضة.'
        },
        {
          tokens: [
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'jīntiān shì zhōumò', hz: '今天是周末', cls: 'time' },
            { hz: '，' },
            { py: 'suǒyǐ', hz: '所以', cls: 'time' },
            { py: 'wǒ hěn gāoxìng', hz: '我很高兴', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because today is the weekend, I am very happy. / لأن اليوم عطلة نهاية الأسبوع، أنا سعيد جدًا.'
        },
        {
          tokens: [
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'tiānqì hěn hǎo', hz: '天气很好', cls: 'like' },
            { hz: '，' },
            { py: 'suǒyǐ', hz: '所以', cls: 'time' },
            { py: 'wǒmen qù gōngyuán', hz: '我们去公园', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Because the weather is good, we go to the park. / لأن الطقس جيد، نذهب إلى الحديقة.'
        },
        {
          tokens: [
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'wǎnshang', hz: '晚上', cls: 'time' },
            { py: 'yǒu wǔyán-liùsè de dēng', hz: '有五颜六色的灯', cls: 'activity' },
            { hz: '，' },
            { py: 'suǒyǐ', hz: '所以', cls: 'time' },
            { py: 'tèbié piàoliang', hz: '特别漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because there are colorful lights at night, it is especially beautiful. / لأنه توجد أضواء ملونة في الليل، فهو جميل جدًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会计划去哈利法塔',
      translation: 'When do you think the Burj Khalifa is most beautiful? I think it is most beautiful at night. Why? Because there are colorful lights at night, so it is especially beautiful. What do you want to do tomorrow evening? I want to visit the Burj Khalifa. What time shall we go? We eat first at six, then go visit.',
      tip: 'Pair Work: Ask when, explain why, and make a plan.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ juéde', hz: '你觉得', cls: 'person' },
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'shénme shíhou', hz: '什么时候', cls: 'time' },
            { py: 'zuì piàoliang', hz: '最漂亮', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'When do you think the Burj Khalifa is most beautiful? / متى تعتقد أن برج خليفة يكون أجمل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'wǎnshang', hz: '晚上', cls: 'time' },
            { py: 'zuì piàoliang', hz: '最漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think it is most beautiful at night. / أعتقد أنه يكون أجمل في الليل.'
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
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'wǎnshang', hz: '晚上', cls: 'time' },
            { py: 'yǒu wǔyán-liùsè de dēng', hz: '有五颜六色的灯', cls: 'activity' },
            { hz: '，' },
            { py: 'suǒyǐ', hz: '所以', cls: 'time' },
            { py: 'tèbié piàoliang', hz: '特别漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because there are colorful lights at night, so it is especially beautiful. / لأنه توجد أضواء ملونة في الليل، لذلك هو جميل جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Míngtiān wǎnshang', hz: '明天晚上', cls: 'time' },
            { py: 'nǐ xiǎng zuò shénme', hz: '你想做什么', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'What do you want to do tomorrow evening? / ماذا تريدين أن تفعلي مساء الغد؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xiǎng qù', hz: '我想去', cls: 'self' },
            { py: 'cānguān Hālìfǎ Tǎ', hz: '参观哈利法塔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I want to visit the Burj Khalifa. / أريد أن أزور برج خليفة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'jǐ diǎn qù', hz: '几点去', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What time shall we go? / في أي وقت نذهب؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'liù diǎn', hz: '六点', cls: 'time' },
            { py: 'xiān chīfàn', hz: '先吃饭', cls: 'activity' },
            { hz: '，' },
            { py: 'zài qù cānguān', hz: '再去参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We eat first at six, then go visit. / نأكل أولًا في الساعة السادسة، ثم نذهب للزيارة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo a', hz: '好啊', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Okay! / حسنًا!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲我的迪拜之夜',
      translation: 'On Friday evening, I went to Dubai with my family. We ate first at six, then visited the Burj Khalifa. I think the Burj Khalifa is most beautiful at night. Because there are colorful lights at night, it is especially beautiful. After the visit, we took many photos together. Today I am very happy.',
      tip: 'Speaking Goal: Tell a short story with time order and reasons.',
      lines: [
        {
          tokens: [
            { py: 'Xīngqīwǔ wǎnshang', hz: '星期五晚上', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ hé jiārén', hz: '我和家人', cls: 'self' },
            { py: 'yìqǐ qù Díbài', hz: '一起去迪拜', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'On Friday evening, I went to Dubai with my family. / مساء الجمعة، ذهبت إلى دبي مع عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'liù diǎn', hz: '六点', cls: 'time' },
            { py: 'xiān chīfàn', hz: '先吃饭', cls: 'activity' },
            { hz: '，' },
            { py: 'zài qù cānguān', hz: '再去参观', cls: 'activity' },
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'We ate first at six, then visited the Burj Khalifa. / أكلنا أولًا في الساعة السادسة، ثم زرنا برج خليفة.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'wǎnshang', hz: '晚上', cls: 'time' },
            { py: 'zuì piàoliang', hz: '最漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think the Burj Khalifa is most beautiful at night. / أعتقد أن برج خليفة يكون أجمل في الليل.'
        },
        {
          tokens: [
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'wǎnshang', hz: '晚上', cls: 'time' },
            { py: 'yǒu wǔyán-liùsè de dēng', hz: '有五颜六色的灯', cls: 'activity' },
            { hz: '，' },
            { py: 'suǒyǐ', hz: '所以', cls: 'time' },
            { py: 'tèbié piàoliang', hz: '特别漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because there are colorful lights at night, it is especially beautiful. / لأنه توجد أضواء ملونة في الليل، فهو جميل جدًا.'
        },
        {
          tokens: [
            { py: 'Cānguān yǐhòu', hz: '参观以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen yìqǐ', hz: '我们一起', cls: 'self' },
            { py: 'pāi le hěn duō zhàopiàn', hz: '拍了很多照片', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After the visit, we took many photos together. / بعد الزيارة، التقطنا الكثير من الصور معًا.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ hěn gāoxìng', hz: '我很高兴', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today I am very happy. / اليوم أنا سعيد جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “因为” 是什么意思？',
      pinyin: '“Yīnwèi” shì shénme yìsi?',
      translation: 'What does “因为” mean?',
      choices: [
        { text: 'because', correct: true },
        { text: 'then', correct: false },
        { text: 'first', correct: false }
      ]
    },
    {
      question: '2. “我先学习，再运动。” 是什么意思？',
      pinyin: '“Wǒ xiān xuéxí, zài yùndòng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I study first, then exercise.', correct: true },
        { text: 'I exercise first, then study.', correct: false },
        { text: 'I do not study today.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “colorful”？',
      pinyin: 'Nǎ yí ge shì “colorful”?',
      translation: 'Which one means “colorful”?',
      choices: [
        { text: '五颜六色', correct: true },
        { text: '照片', correct: false },
        { text: '周末', correct: false }
      ]
    },
    {
      question: '4. “因为晚上有五颜六色的灯，所以特别漂亮。” 是什么意思？',
      pinyin: '“Yīnwèi wǎnshang yǒu wǔyán-liùsè de dēng, suǒyǐ tèbié piàoliang.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Because there are colorful lights at night, it is especially beautiful.', correct: true },
        { text: 'Because it is hot, I want to eat.', correct: false },
        { text: 'I first eat, then visit.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Xīngqī', hz: '星期', cls: 'time' },
        { blank: true },
        { hz: '，' }
      ],
      [
        { py: 'wǒ hé', hz: '我和', cls: 'self' },
        { blank: true },
        { py: 'yìqǐ qù', hz: '一起去', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'xiān', hz: '先', cls: 'time' },
        { blank: true },
        { hz: '，' },
        { py: 'zài', hz: '再', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yīnwèi', hz: '因为', cls: 'time' },
        { blank: true },
        { hz: '，' },
        { py: 'suǒyǐ', hz: '所以', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'wǒ hěn', hz: '我很', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'On ______, I went to ______ with ______. We first ______, then ______. Because ______, so ______. Today I am very ______.',
    tip: 'Use: 五、家人、朋友、迪拜、哈利法塔、未来博物馆、吃饭、参观、拍照、天气很好、晚上有灯、漂亮、高兴。'
  },

  meanings: {
    '因为': 'because / لأن',
    '所以': 'so / لذلك',
    '先': 'first / أولًا',
    '再': 'then / ثم',
    '灯': 'light / ضوء',
    '五颜六色': 'colorful / ملون',
    '五颜六色的灯': 'colorful lights / أضواء ملونة',
    '漂亮': 'beautiful / جميل',
    '最漂亮': 'most beautiful / الأجمل',
    '特别漂亮': 'especially beautiful / جميل جدًا',
    '参观': 'visit / يزور',
    '照片': 'photo / صورة',
    '很多照片': 'many photos / الكثير من الصور',
    '高兴': 'happy / سعيد',
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '晚上': 'evening; night / مساء',
    '星期五晚上': 'Friday evening / مساء الجمعة',
    '哈利法塔': 'Burj Khalifa / برج خليفة',
    '你觉得': 'you think / أنت تعتقد',
    '我觉得': 'I think / أعتقد',
    '什么时候': 'when / متى',
    '为什么': 'why / لماذا',
    '明天晚上': 'tomorrow evening / مساء الغد',
    '你想做什么': 'what do you want to do / ماذا تريد أن تفعل',
    '我想去': 'I want to go / أريد أن أذهب',
    '参观哈利法塔': 'visit the Burj Khalifa / زيارة برج خليفة',
    '几点去': 'what time to go / في أي وقت نذهب',
    '六点': 'six o’clock / الساعة السادسة',
    '先吃饭': 'eat first / يأكل أولًا',
    '再去参观': 'then go visit / ثم يذهب للزيارة',
    '好啊': 'okay / حسنًا',
    '我和家人': 'my family and I / أنا وعائلتي',
    '一起去迪拜': 'go to Dubai together / نذهب إلى دبي معًا',
    '参观以后': 'after visiting / بعد الزيارة',
    '我们一起': 'we together / نحن معًا',
    '拍了很多照片': 'took many photos / التقط الكثير من الصور',
    '今天': 'today / اليوم',
    '未来博物馆': 'Museum of the Future / متحف المستقبل',
    '拍照': 'take photos / يلتقط صورًا',
    '天气很好': 'the weather is good / الطقس جيد'
  }
};