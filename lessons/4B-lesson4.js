window.LESSONS = window.LESSONS || {};

window.LESSONS['4B-lesson4'] = {
  id: '4B-lesson4',
  book: '4B',
  lesson: 'Lesson 4',
  title: '写汉字跟画画一样有趣。',
  theme: 'Chinese Characters and Comparison',
  goal: 'Compare things using 跟……一样…….',
  heroTranslation: 'Writing Chinese characters is as interesting as drawing.',

  titleTokens: [
    { py: 'Xiě Hànzì', hz: '写汉字', cls: 'activity' },
    { py: 'gēn huàhuà', hz: '跟画画', cls: 'activity' },
    { py: 'yíyàng yǒuqù', hz: '一样有趣', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🈶', pinyin: 'Hànzì', text: '汉字', translation: 'Chinese characters / الحروف الصينية' },
    { emoji: '🎨', pinyin: 'huàhuà', text: '画画', translation: 'drawing / الرسم' },
    { emoji: '✨', pinyin: 'yǒuqù', text: '有趣', translation: 'interesting / ممتع' },
    { emoji: '🕰️', pinyin: 'yǐqián', text: '以前', translation: 'before / من قبل' },
    { emoji: '📍', pinyin: 'xiànzài', text: '现在', translation: 'now / الآن' },
    { emoji: '🧠', pinyin: 'jìzhù', text: '记住', translation: 'remember / يتذكر' },
    { emoji: '💭', pinyin: 'wàngjì', text: '忘记', translation: 'forget / ينسى' },
    { emoji: '🔁', pinyin: 'yìbiān', text: '一边', translation: 'while / في الوقت نفسه' },
    { emoji: '🎮', pinyin: 'yóuxì', text: '游戏', translation: 'game / لعبة' },
    { emoji: '📚', pinyin: 'xuéxí', text: '学习', translation: 'study / يدرس' },
    { emoji: '👀', pinyin: 'fāxiàn', text: '发现', translation: 'discover / يكتشف' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Xiě Hànzì', hz: '写汉字', cls: 'activity' },
        { py: 'gēn huàhuà', hz: '跟画画', cls: 'activity' },
        { py: 'yíyàng yǒuqù', hz: '一样有趣', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Writing Chinese characters is as interesting as drawing. / كتابة الحروف الصينية ممتعة مثل الرسم.'
    },
    {
      tokens: [
        { py: 'Gēge', hz: '哥哥', cls: 'person' },
        { py: 'gēn dìdi', hz: '跟弟弟', cls: 'person' },
        { py: 'yíyàng gāo', hz: '一样高', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Older brother is as tall as younger brother. / الأخ الأكبر طويل مثل الأخ الأصغر.'
    },
    {
      tokens: [
        { py: 'Yǐqián', hz: '以前', cls: 'time' },
        { py: 'wǒ bù tài xǐhuan', hz: '我不太喜欢', cls: 'not-like' },
        { py: 'Hànzì', hz: '汉字', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Before, I did not really like Chinese characters. / من قبل، لم أكن أحب الحروف الصينية كثيرًا.'
    },
    {
      tokens: [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
        { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Now, I think writing Chinese characters is very interesting. / الآن أعتقد أن كتابة الحروف الصينية ممتعة جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会比较两个东西',
      translation: 'Writing Chinese characters is as interesting as drawing. Older brother is as tall as younger brother. Today is as hot as yesterday. Before, I did not really like Chinese characters. Now, I think writing Chinese characters is very interesting. I like studying while listening to music.',
      tip: 'Reading Goal: Use 跟……一样…… to compare things.',
      lines: [
        {
          tokens: [
            { py: 'Xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'gēn huàhuà', hz: '跟画画', cls: 'activity' },
            { py: 'yíyàng yǒuqù', hz: '一样有趣', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Writing Chinese characters is as interesting as drawing. / كتابة الحروف الصينية ممتعة مثل الرسم.'
        },
        {
          tokens: [
            { py: 'Gēge', hz: '哥哥', cls: 'person' },
            { py: 'gēn dìdi', hz: '跟弟弟', cls: 'person' },
            { py: 'yíyàng gāo', hz: '一样高', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Older brother is as tall as younger brother. / الأخ الأكبر طويل مثل الأخ الأصغر.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'gēn zuótiān', hz: '跟昨天', cls: 'time' },
            { py: 'yíyàng rè', hz: '一样热', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today is as hot as yesterday. / اليوم حار مثل أمس.'
        },
        {
          tokens: [
            { py: 'Yǐqián', hz: '以前', cls: 'time' },
            { py: 'wǒ bù tài xǐhuan', hz: '我不太喜欢', cls: 'not-like' },
            { py: 'Hànzì', hz: '汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Before, I did not really like Chinese characters. / من قبل، لم أكن أحب الحروف الصينية كثيرًا.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'hěn yǒu yìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Now, I think writing Chinese characters is very interesting. / الآن أعتقد أن كتابة الحروف الصينية ممتعة جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'yìbiān tīng yīnyuè', hz: '一边听音乐', cls: 'activity' },
            { hz: '，' },
            { py: 'yìbiān xuéxí', hz: '一边学习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like studying while listening to music. / أحب أن أدرس وأستمع إلى الموسيقى في الوقت نفسه.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会说学习汉字的变化',
      translation: 'Do you like writing Chinese characters? Before, I did not really like it. Why? Because I thought Chinese characters were very difficult, and I often forgot how to write them. What about now? Now I like writing Chinese characters. Why? Because I discovered that writing Chinese characters is as interesting as drawing.',
      tip: 'Pair Work: Talk about how your feeling about Chinese characters changed.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuan', hz: '你喜欢', cls: 'like' },
            { py: 'xiě Hànzì ma', hz: '写汉字吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you like writing Chinese characters? / هل تحب كتابة الحروف الصينية؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yǐqián', hz: '以前', cls: 'time' },
            { py: 'bù tài xǐhuan', hz: '不太喜欢', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Before, I did not really like it. / من قبل، لم أكن أحبها كثيرًا.'
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
            { py: 'Yīnwèi wǒ juéde', hz: '因为我觉得', cls: 'self' },
            { py: 'Hànzì hěn nán', hz: '汉字很难', cls: 'not-like' },
            { hz: '，' },
            { py: 'chángcháng wàngjì', hz: '常常忘记', cls: 'not-like' },
            { py: 'zěnme xiě', hz: '怎么写', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Because I thought Chinese characters were very difficult, and I often forgot how to write them. / لأنني كنت أعتقد أن الحروف الصينية صعبة، وغالبًا أنسى كيف أكتبها.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nà xiànzài ne', hz: '那现在呢', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'What about now? / وماذا عن الآن؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'xiě Hànzì le', hz: '写汉字了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Now I like writing Chinese characters. / الآن أحب كتابة الحروف الصينية.'
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
            { py: 'Yīnwèi wǒ fāxiàn', hz: '因为我发现', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'gēn huàhuà', hz: '跟画画', cls: 'activity' },
            { py: 'yíyàng yǒuqù', hz: '一样有趣', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because I discovered that writing Chinese characters is as interesting as drawing. / لأنني اكتشفت أن كتابة الحروف الصينية ممتعة مثل الرسم.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲学习汉字的变化',
      translation: 'Before, I thought Chinese characters were very difficult. Sometimes I remembered them, but later I forgot them again. So, I did not really like writing Chinese characters. Now, the teacher teaches us to learn Chinese characters in an interesting way. Some Chinese characters are like pictures, and some are like stories. Slowly, I know more and more Chinese characters. Now, I think writing Chinese characters is as interesting as drawing. Sometimes, I also write Chinese characters while drawing.',
      tip: 'Speaking Goal: Tell how your feeling about Chinese characters changed.',
      lines: [
        {
          tokens: [
            { py: 'Yǐqián', hz: '以前', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Hànzì hěn nán', hz: '汉字很难', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Before, I thought Chinese characters were very difficult. / من قبل، كنت أعتقد أن الحروف الصينية صعبة جدًا.'
        },
        {
          tokens: [
            { py: 'Yǒu shíhou', hz: '有时候', cls: 'time' },
            { py: 'wǒ jìzhù le', hz: '我记住了', cls: 'self' },
            { hz: '，' },
            { py: 'hòulái', hz: '后来', cls: 'time' },
            { py: 'yòu wàngjì le', hz: '又忘记了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Sometimes I remembered them, but later I forgot them again. / أحيانًا أتذكرها، ثم أنساها مرة أخرى لاحقًا.'
        },
        {
          tokens: [
            { py: 'Suǒyǐ', hz: '所以', cls: 'speaker' },
            { hz: '，' },
            { py: 'wǒ bù tài xǐhuan', hz: '我不太喜欢', cls: 'not-like' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'So, I did not really like writing Chinese characters. / لذلك لم أكن أحب كتابة الحروف الصينية كثيرًا.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { hz: '，' },
            { py: 'lǎoshī jiāo wǒmen', hz: '老师教我们', cls: 'person' },
            { py: 'yòng yǒuqù de fāngfǎ', hz: '用有趣的方法', cls: 'like' },
            { py: 'xué Hànzì', hz: '学汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Now, the teacher teaches us to learn Chinese characters in an interesting way. / الآن تعلّمنا المعلمة الحروف الصينية بطريقة ممتعة.'
        },
        {
          tokens: [
            { py: 'Yǒu de Hànzì', hz: '有的汉字', cls: 'activity' },
            { py: 'xiàng túhuà', hz: '像图画', cls: 'like' },
            { hz: '，' },
            { py: 'yǒu de Hànzì', hz: '有的汉字', cls: 'activity' },
            { py: 'xiàng gùshi', hz: '像故事', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Some Chinese characters are like pictures, and some are like stories. / بعض الحروف الصينية تشبه الصور، وبعضها يشبه القصص.'
        },
        {
          tokens: [
            { py: 'Mànmàn de', hz: '慢慢地', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ rènshi de Hànzì', hz: '我认识的汉字', cls: 'self' },
            { py: 'yuè lái yuè duō le', hz: '越来越多了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Slowly, I know more and more Chinese characters. / ببطء، أصبحت أعرف حروفًا صينية أكثر فأكثر.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { py: 'gēn huàhuà', hz: '跟画画', cls: 'activity' },
            { py: 'yíyàng yǒuqù', hz: '一样有趣', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Now, I think writing Chinese characters is as interesting as drawing. / الآن أعتقد أن كتابة الحروف الصينية ممتعة مثل الرسم.'
        },
        {
          tokens: [
            { py: 'Yǒu shíhou', hz: '有时候', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ hái huì', hz: '我还会', cls: 'self' },
            { py: 'yìbiān xiě Hànzì', hz: '一边写汉字', cls: 'activity' },
            { hz: '，' },
            { py: 'yìbiān huàhuà', hz: '一边画画', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Sometimes, I also write Chinese characters while drawing. / أحيانًا أكتب الحروف الصينية وأرسم في الوقت نفسه.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “写汉字跟画画一样有趣。” 是什么意思？',
      pinyin: '“Xiě Hànzì gēn huàhuà yíyàng yǒuqù.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Writing Chinese characters is as interesting as drawing.', correct: true },
        { text: 'Writing Chinese characters is more difficult than drawing.', correct: false },
        { text: 'Drawing is not interesting.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “before”？',
      pinyin: 'Nǎ yí ge shì “before”?',
      translation: 'Which one means “before”?',
      choices: [
        { text: '以前', correct: true },
        { text: '现在', correct: false },
        { text: '游戏', correct: false }
      ]
    },
    {
      question: '3. “我常常忘记怎么写。” 是什么意思？',
      pinyin: '“Wǒ chángcháng wàngjì zěnme xiě.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I often forget how to write it.', correct: true },
        { text: 'I often draw pictures.', correct: false },
        { text: 'I like writing now.', correct: false }
      ]
    },
    {
      question: '4. “我发现写汉字跟画画一样有趣。” 是什么意思？',
      pinyin: '“Wǒ fāxiàn xiě Hànzì gēn huàhuà yíyàng yǒuqù.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I discovered writing Chinese characters is as interesting as drawing.', correct: true },
        { text: 'I discovered Chinese characters are very expensive.', correct: false },
        { text: 'I forgot how to write Chinese characters.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Xiě Hànzì', hz: '写汉字', cls: 'activity' },
        { py: 'gēn', hz: '跟', cls: 'speaker' },
        { blank: true },
        { py: 'yíyàng', hz: '一样', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yǐqián', hz: '以前', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ bù tài xǐhuan', hz: '我不太喜欢', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
        { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
        { py: 'hěn', hz: '很', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { py: 'yìbiān', hz: '一边', cls: 'activity' },
        { blank: true },
        { py: 'yìbiān', hz: '一边', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Writing Chinese characters is as ______ as ______. Before, I did not really like ______. Now, I think writing Chinese characters is very ______. I like ______ while ______.',
    tip: 'Use: 画画、有趣、汉字、听音乐、学习、写汉字。'
  },

  meanings: {
    '汉字': 'Chinese characters / الحروف الصينية',
    '写汉字': 'write Chinese characters / يكتب الحروف الصينية',
    '画画': 'drawing / الرسم',
    '跟': 'with; compared with / مع',
    '一样': 'the same / نفس الشيء',
    '一样有趣': 'equally interesting / ممتع بنفس القدر',
    '跟画画一样有趣': 'as interesting as drawing / ممتع مثل الرسم',
    '写汉字跟画画一样有趣': 'writing Chinese characters is as interesting as drawing / كتابة الحروف الصينية ممتعة مثل الرسم',
    '有趣': 'interesting / ممتع',
    '有意思': 'interesting / ممتع',
    '以前': 'before / من قبل',
    '现在': 'now / الآن',
    '记住': 'remember / يتذكر',
    '忘记': 'forget / ينسى',
    '常常忘记': 'often forget / غالبًا ينسى',
    '怎么写': 'how to write / كيف يكتب',
    '一边': 'while / في الوقت نفسه',
    '一边听音乐': 'while listening to music / أثناء الاستماع إلى الموسيقى',
    '一边学习': 'while studying / أثناء الدراسة',
    '一边写汉字': 'while writing Chinese characters / أثناء كتابة الحروف الصينية',
    '一边画画': 'while drawing / أثناء الرسم',
    '游戏': 'game / لعبة',
    '学习': 'study / دراسة',
    '发现': 'discover / يكتشف',
    '我发现': 'I discovered / اكتشفت',
    '你喜欢': 'do you like / هل تحب',
    '写汉字吗': 'writing Chinese characters / كتابة الحروف الصينية',
    '不太喜欢': 'do not really like / لا أحب كثيرًا',
    '为什么': 'why / لماذا',
    '因为我觉得': 'because I think / لأنني أعتقد',
    '汉字很难': 'Chinese characters are difficult / الحروف الصينية صعبة',
    '那现在呢': 'what about now / وماذا عن الآن',
    '我喜欢写汉字了': 'I like writing Chinese characters now / الآن أحب كتابة الحروف الصينية',
    '因为我发现': 'because I discovered / لأنني اكتشفت',
    '老师教我们': 'the teacher teaches us / تعلّمنا المعلمة',
    '用有趣的方法': 'use an interesting method / باستخدام طريقة ممتعة',
    '学汉字': 'learn Chinese characters / يتعلم الحروف الصينية',
    '有的汉字': 'some Chinese characters / بعض الحروف الصينية',
    '像图画': 'are like pictures / تشبه الصور',
    '像故事': 'are like stories / تشبه القصص',
    '慢慢地': 'slowly / ببطء',
    '我认识的汉字': 'the Chinese characters I know / الحروف الصينية التي أعرفها',
    '越来越多了': 'more and more / أكثر فأكثر',
    '我还会': 'I also can / أستطيع أيضًا',
    '哥哥': 'older brother / الأخ الأكبر',
    '弟弟': 'younger brother / الأخ الأصغر',
    '一样高': 'as tall as / طويل مثل',
    '今天': 'today / اليوم',
    '昨天': 'yesterday / أمس',
    '一样热': 'as hot as / حار مثل'
  }
};