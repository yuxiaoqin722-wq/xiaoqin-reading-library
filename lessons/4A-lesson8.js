window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson8'] = {
  id: '4A-lesson8',
  book: '4A',
  lesson: 'Lesson 8',
  title: '我们一边参观一边拍照。',
  theme: 'Museum Visit and Recording Experiences',
  goal: 'Describe doing two actions at the same time using 一边……一边…….',
  heroTranslation: 'We visit while taking photos.',

  titleTokens: [
    { py: 'Wǒmen', hz: '我们', cls: 'self' },
    { py: 'yìbiān cānguān', hz: '一边参观', cls: 'activity' },
    { py: 'yìbiān pāizhào', hz: '一边拍照', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏛️', pinyin: 'bówùguǎn', text: '博物馆', translation: 'museum / متحف' },
    { emoji: '👀', pinyin: 'cānguān', text: '参观', translation: 'visit / يزور' },
    { emoji: '📖', pinyin: 'jièshào', text: '介绍', translation: 'introduce / يعرّف' },
    { emoji: '📝', pinyin: 'jìlù', text: '记录', translation: 'record / يسجل' },
    { emoji: '📚', pinyin: 'zhīshi', text: '知识', translation: 'knowledge / معرفة' },
    { emoji: '📔', pinyin: 'rìjì', text: '日记', translation: 'diary / يوميات' },
    { emoji: '📄', pinyin: 'piān', text: '篇', translation: 'measure word for writing / أداة عدّ للمقالات' },
    { emoji: '📤', pinyin: 'fā gěi', text: '发给', translation: 'send to / يرسل إلى' },
    { emoji: '✅', pinyin: 'rènzhēn', text: '认真', translation: 'carefully / بجدية' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'qù bówùguǎn', hz: '去博物馆', cls: 'place' },
        { py: 'cānguān', hz: '参观', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'We went to visit a museum. / ذهبنا لزيارة متحف.'
    },
    {
      tokens: [
        { py: 'Lǎoshī', hz: '老师', cls: 'person' },
        { py: 'yìbiān jièshào', hz: '一边介绍', cls: 'activity' },
        { py: 'yìbiān jiǎng gùshi', hz: '一边讲故事', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'The teacher introduced things while telling stories. / كانت المعلمة تشرح وتروي القصص في الوقت نفسه.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yìbiān tīng', hz: '一边听', cls: 'activity' },
        { py: 'yìbiān jìlù', hz: '一边记录', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I listened while recording notes. / كنت أستمع وأسجل في الوقت نفسه.'
    },
    {
      tokens: [
        { py: 'Wǒ xiě le', hz: '我写了', cls: 'self' },
        { py: 'yì piān rìjì', hz: '一篇日记', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I wrote a diary entry. / كتبت يومية واحدة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说参观和记录',
      translation: 'We went to visit a museum. The teacher introduced things while telling stories. I listened while recording notes. After I went home, I wrote a diary entry.',
      tip: 'Reading Goal: Use 一边……一边…… to talk about two actions.',
      lines: [
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'qù bówùguǎn', hz: '去博物馆', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We went to visit a museum. / ذهبنا لزيارة متحف.'
        },
        {
          tokens: [
            { py: 'Lǎoshī', hz: '老师', cls: 'person' },
            { py: 'yìbiān jièshào', hz: '一边介绍', cls: 'activity' },
            { py: 'yìbiān jiǎng gùshi', hz: '一边讲故事', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The teacher introduced things while telling stories. / كانت المعلمة تشرح وتروي القصص في الوقت نفسه.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yìbiān tīng', hz: '一边听', cls: 'activity' },
            { py: 'yìbiān jìlù', hz: '一边记录', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I listened while recording notes. / كنت أستمع وأسجل في الوقت نفسه.'
        },
        {
          tokens: [
            { py: 'Huí jiā yǐhòu', hz: '回家以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ xiě le', hz: '我写了', cls: 'self' },
            { py: 'yì piān rìjì', hz: '一篇日记', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After I went home, I wrote a diary entry. / بعد أن عدت إلى البيت، كتبت يومية واحدة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会说参观经历',
      translation: 'Today we went to visit a museum. Was it fun? It was very fun. The teacher introduced many interesting things. What did you learn? I learned a lot of knowledge. After I went home, I also wrote a diary entry.',
      tip: 'Pair Work: Talk about a museum visit naturally.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒmen qù bówùguǎn', hz: '我们去博物馆', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Today we went to visit a museum. / اليوم ذهبنا لزيارة متحف.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo wán ma', hz: '好玩吗', cls: 'like' },
            { hz: '？' }
          ],
          translation: 'Was it fun? / هل كان ممتعًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn hǎo wán', hz: '很好玩', cls: 'like' },
            { hz: '，' },
            { py: 'lǎoshī jièshào le', hz: '老师介绍了', cls: 'person' },
            { py: 'hěn duō yǒuyìsi de dōngxi', hz: '很多有意思的东西', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It was very fun. The teacher introduced many interesting things. / كان ممتعًا جدًا، وعرّفتنا المعلمة على أشياء كثيرة ممتعة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xué dào le shénme', hz: '你学到了什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What did you learn? / ماذا تعلمت؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xué dào le', hz: '我学到了', cls: 'self' },
            { py: 'hěn duō zhīshi', hz: '很多知识', cls: 'activity' },
            { hz: '，' },
            { py: 'huí jiā yǐhòu', hz: '回家以后', cls: 'time' },
            { py: 'hái xiě le', hz: '还写了', cls: 'activity' },
            { py: 'yì piān rìjì', hz: '一篇日记', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I learned a lot of knowledge. After going home, I also wrote a diary entry. / تعلمت كثيرًا من المعرفة، وبعد العودة إلى البيت كتبت يومية أيضًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲参观后的记录',
      translation: 'Yesterday, the school took us to visit a museum. The teacher asked us to look carefully and also asked us to record important knowledge. During the visit, I listened while recording notes. I also visited while taking photos. After I went home, I wrote a diary entry. I sent the diary and photos to my mother. My mother read my diary carefully and also said that this visit was very interesting.',
      tip: 'Speaking Goal: Tell a complete story about visiting, recording and sharing.',
      lines: [
        {
          tokens: [
            { py: 'Zuótiān', hz: '昨天', cls: 'time' },
            { hz: '，' },
            { py: 'xuéxiào dài wǒmen', hz: '学校带我们', cls: 'place' },
            { py: 'qù bówùguǎn', hz: '去博物馆', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Yesterday, the school took us to visit a museum. / أمس أخذتنا المدرسة لزيارة متحف.'
        },
        {
          tokens: [
            { py: 'Lǎoshī ràng wǒmen', hz: '老师让我们', cls: 'person' },
            { py: 'rènzhēn kàn', hz: '认真看', cls: 'activity' },
            { hz: '，' },
            { py: 'yě ràng wǒmen', hz: '也让我们', cls: 'self' },
            { py: 'jìlù zhòngyào de zhīshi', hz: '记录重要的知识', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The teacher asked us to look carefully and also record important knowledge. / طلبت منا المعلمة أن ننظر بعناية وأن نسجل المعرفة المهمة.'
        },
        {
          tokens: [
            { py: 'Cānguān de shíhou', hz: '参观的时候', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'yìbiān tīng', hz: '一边听', cls: 'activity' },
            { py: 'yìbiān jìlù', hz: '一边记录', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'During the visit, I listened while recording notes. / أثناء الزيارة، كنت أستمع وأسجل في الوقت نفسه.'
        },
        {
          tokens: [
            { py: 'Wǒ hái', hz: '我还', cls: 'self' },
            { py: 'yìbiān cānguān', hz: '一边参观', cls: 'activity' },
            { py: 'yìbiān pāizhào', hz: '一边拍照', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also visited while taking photos. / كنت أيضًا أزور وألتقط الصور في الوقت نفسه.'
        },
        {
          tokens: [
            { py: 'Huí jiā yǐhòu', hz: '回家以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ xiě le', hz: '我写了', cls: 'self' },
            { py: 'yì piān rìjì', hz: '一篇日记', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After I went home, I wrote a diary entry. / بعد أن عدت إلى البيت، كتبت يومية واحدة.'
        },
        {
          tokens: [
            { py: 'Wǒ bǎ rìjì hé zhàopiàn', hz: '我把日记和照片', cls: 'self' },
            { py: 'fā gěi māma', hz: '发给妈妈', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I sent the diary and photos to my mother. / أرسلت اليوميات والصور إلى أمي.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'rènzhēn kàn le', hz: '认真看了', cls: 'activity' },
            { py: 'wǒ de rìjì', hz: '我的日记', cls: 'activity' },
            { hz: '。' },
            { py: 'hái shuō zhè cì cānguān', hz: '还说这次参观', cls: 'activity' },
            { py: 'hěn yǒuyìsi', hz: '很有意思', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'My mother read my diary carefully and said this visit was very interesting. / قرأت أمي يومياتي بعناية وقالت إن هذه الزيارة كانت ممتعة جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “一边参观一边拍照” 是什么意思？',
      pinyin: '“Yìbiān cānguān yìbiān pāizhào” shì shénme yìsi?',
      translation: 'What does this phrase mean?',
      choices: [
        { text: 'visit while taking photos', correct: true },
        { text: 'buy tickets while eating', correct: false },
        { text: 'sleep while reading', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “diary”？',
      pinyin: 'Nǎ yí ge shì “diary”?',
      translation: 'Which one means “diary”?',
      choices: [
        { text: '日记', correct: true },
        { text: '知识', correct: false },
        { text: '博物馆', correct: false }
      ]
    },
    {
      question: '3. “我一边听一边记录。” 是什么意思？',
      pinyin: '“Wǒ yìbiān tīng yìbiān jìlù.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I listen while recording notes.', correct: true },
        { text: 'I write while eating.', correct: false },
        { text: 'I sleep while walking.', correct: false }
      ]
    },
    {
      question: '4. “我写了一篇日记。” 是什么意思？',
      pinyin: '“Wǒ xiě le yì piān rìjì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I wrote a diary entry.', correct: true },
        { text: 'I took a photo.', correct: false },
        { text: 'I visited a museum.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { py: 'cānguān', hz: '参观', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Lǎoshī', hz: '老师', cls: 'person' },
        { py: 'yìbiān', hz: '一边', cls: 'activity' },
        { blank: true },
        { py: 'yìbiān', hz: '一边', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yìbiān', hz: '一边', cls: 'activity' },
        { blank: true },
        { py: 'yìbiān', hz: '一边', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Huí jiā yǐhòu', hz: '回家以后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ xiě le', hz: '我写了', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ bǎ rìjì', hz: '我把日记', cls: 'self' },
        { py: 'fā gěi', hz: '发给', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'We went to visit ______. The teacher ______ while ______. I ______ while ______. After I went home, I wrote ______. I sent the diary to ______.',
    tip: 'Use: 博物馆、介绍、讲故事、听、记录、一篇日记、妈妈、爸爸、老师。'
  },

  meanings: {
    '博物馆': 'museum / متحف',
    '参观': 'visit / يزور',
    '介绍': 'introduce / يعرّف',
    '记录': 'record / يسجل',
    '知识': 'knowledge / معرفة',
    '日记': 'diary / يوميات',
    '篇': 'measure word for writing / أداة عدّ للمقالات',
    '一篇日记': 'a diary entry / يومية واحدة',
    '发给': 'send to / يرسل إلى',
    '认真': 'carefully / بجدية',
    '认真看': 'look carefully / ينظر بعناية',
    '拍照': 'take photos / يلتقط الصور',
    '照片': 'photo / صورة',
    '一边': 'while; at the same time / في الوقت نفسه',
    '一边参观': 'while visiting / أثناء الزيارة',
    '一边拍照': 'while taking photos / أثناء التقاط الصور',
    '一边介绍': 'while introducing / أثناء الشرح',
    '一边讲故事': 'while telling stories / أثناء رواية القصص',
    '一边听': 'while listening / أثناء الاستماع',
    '一边记录': 'while recording / أثناء التسجيل',
    '去博物馆': 'go to the museum / يذهب إلى المتحف',
    '去博物馆参观': 'go to visit a museum / يذهب لزيارة متحف',
    '老师介绍了': 'the teacher introduced / عرّفت المعلمة',
    '很多有意思的东西': 'many interesting things / أشياء كثيرة ممتعة',
    '学到了': 'learned / تعلم',
    '很多知识': 'a lot of knowledge / كثير من المعرفة',
    '回家以后': 'after going home / بعد العودة إلى البيت',
    '我写了': 'I wrote / كتبت',
    '写了一篇日记': 'wrote a diary entry / كتب يومية واحدة',
    '学校带我们': 'the school took us / أخذتنا المدرسة',
    '老师让我们': 'the teacher asked us / طلبت منا المعلمة',
    '也让我们': 'also asked us / طلبت منا أيضًا',
    '记录重要的知识': 'record important knowledge / يسجل المعرفة المهمة',
    '参观的时候': 'during the visit / أثناء الزيارة',
    '我还': 'I also / أنا أيضًا',
    '我把日记和照片': 'I took the diary and photos / أخذت اليوميات والصور',
    '发给妈妈': 'send to mom / يرسل إلى الأم',
    '认真看了': 'read carefully / قرأ بعناية',
    '我的日记': 'my diary / يومياتي',
    '还说这次参观': 'also said this visit / قال أيضًا إن هذه الزيارة',
    '很有意思': 'very interesting / ممتع جدًا'
  }
};