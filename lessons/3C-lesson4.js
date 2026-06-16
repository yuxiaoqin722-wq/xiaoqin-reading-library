window.LESSONS = window.LESSONS || {};

window.LESSONS['3C-lesson4'] = {
  id: '3C-lesson4',
  book: '3C',
  lesson: 'Lesson 4',
  title: '我找到了！',
  theme: 'Results and Encouragement',
  goal: 'Talk about results after actions using 动词 + 到 / 完 / 错 / 会.',
  heroTranslation: 'I found it!',

  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'zhǎodào le', hz: '找到了', cls: 'activity' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '🔍', pinyin: 'zhǎo', text: '找', translation: 'look for / يبحث عن' },
    { emoji: '✅', pinyin: 'zhǎodào', text: '找到', translation: 'find / يجد' },
    { emoji: '✍️', pinyin: 'xiěwán', text: '写完', translation: 'finish writing / ينهي الكتابة' },
    { emoji: '❌', pinyin: 'xiěcuò', text: '写错', translation: 'write incorrectly / يكتب خطأ' },
    { emoji: '🎓', pinyin: 'xuéhuì', text: '学会', translation: 'learn how to / يتعلم' },
    { emoji: '🎤', pinyin: 'màikèfēng', text: '麦克风', translation: 'microphone / ميكروفون' },
    { emoji: '🎭', pinyin: 'biǎoyǎn', text: '表演', translation: 'performance / عرض' },
    { emoji: '💪', pinyin: 'jiāyóu', text: '加油', translation: 'come on / شجع نفسك' },
    { emoji: '👍', pinyin: 'yídìng', text: '一定', translation: 'certainly / بالتأكيد' },
    { emoji: '📦', pinyin: 'zhǔnbèi hǎo', text: '准备好', translation: 'be ready / يستعد' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zhǎodào le', hz: '找到了', cls: 'activity' },
        { hz: '！' }
      ],
      translation: 'I found it! / وجدته!'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xiěwán le', hz: '写完了', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I finished writing. / أنهيت الكتابة.'
    },
    {
      tokens: [
        { py: 'Zhè ge zì', hz: '这个字', cls: 'activity' },
        { py: 'xiěcuò le', hz: '写错了', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'This character was written incorrectly. / هذا الحرف كُتب بشكل خاطئ.'
    },
    {
      tokens: [
        { py: 'Jiāyóu', hz: '加油', cls: 'like' },
        { hz: '，' },
        { py: 'nǐ yídìng xíng', hz: '你一定行', cls: 'person' },
        { hz: '！' }
      ],
      translation: 'Come on, you can do it! / هيا، أنت تستطيع بالتأكيد!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说结果',
      translation: 'I found it. I finished writing. I wrote it wrong. He learned it. We are ready.',
      tip: 'Reading Goal: Say the result after an action.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhǎodào le', hz: '找到了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I found it. / وجدته.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiěwán le', hz: '写完了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I finished writing. / أنهيت الكتابة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiěcuò le', hz: '写错了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I wrote it wrong. / كتبتها خطأ.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'xuéhuì le', hz: '学会了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He learned it. / لقد تعلم.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'zhǔnbèi hǎo le', hz: '准备好了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We are ready. / نحن مستعدون.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会准备文化日',
      translation: 'Did you see the microphone? I did not see it. Maybe it is over there. I will look for it. I found it! Are you ready? Not yet. I have not learned the Chinese song yet. Come on, you can do it!',
      tip: 'Pair Work: Ask about preparation and encourage your friend.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ kànjiàn', hz: '你看见', cls: 'person' },
            { py: 'màikèfēng le ma', hz: '麦克风了吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Did you see the microphone? / هل رأيت الميكروفون؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ méi kànjiàn', hz: '我没看见', cls: 'self' },
            { hz: '，' },
            { py: 'kěnéng zài nàbiān', hz: '可能在那边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I did not see it. Maybe it is over there. / لم أره، ربما هو هناك.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zhǎozhao', hz: '我找找', cls: 'self' },
            { hz: '。' },
          ],
          translation: 'I will look for it. / سأبحث عنه.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zhǎodào le', hz: '我找到了', cls: 'activity' },
            { hz: '！' }
          ],
          translation: 'I found it! / وجدته!'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zhǔnbèi hǎo le ma', hz: '准备好了吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Are you ready? / هل أنت مستعد؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hái méi yǒu', hz: '还没有', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ hái méi xuéhuì', hz: '我还没学会', cls: 'self' },
            { py: 'Zhōngwén gē', hz: '中文歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Not yet. I have not learned the Chinese song yet. / ليس بعد. لم أتعلم الأغنية الصينية بعد.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jiāyóu', hz: '加油', cls: 'like' },
            { hz: '，' },
            { py: 'nǐ yídìng xíng', hz: '你一定行', cls: 'person' },
            { hz: '！' }
          ],
          translation: 'Come on, you can do it! / هيا، أنت تستطيع بالتأكيد!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲文化日准备',
      translation: 'Tomorrow, our school has Chinese Culture Day. My classmates and I are preparing a performance. We want to sing a Chinese song. But I could not find the microphone. I looked for it for a long time. Finally, I found the microphone. My friend had not learned the song yet. I said to him: Come on, you can do it! Finally, we were ready. I was very happy.',
      tip: 'Speaking Goal: Tell a short story about preparation and results.',
      lines: [
        {
          tokens: [
            { py: 'Míngtiān', hz: '明天', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen xuéxiào', hz: '我们学校', cls: 'place' },
            { py: 'yǒu Zhōngguó Wénhuà Rì', hz: '有中国文化日', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Tomorrow, our school has Chinese Culture Day. / غدًا، في مدرستنا يوم الثقافة الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ hé tóngxué', hz: '我和同学', cls: 'self' },
            { py: 'zhèngzài zhǔnbèi', hz: '正在准备', cls: 'activity' },
            { py: 'biǎoyǎn', hz: '表演', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My classmates and I are preparing a performance. / أنا وزملائي نستعد لعرض.'
        },
        {
          tokens: [
            { py: 'Wǒmen yào', hz: '我们要', cls: 'self' },
            { py: 'chàng Zhōngwén gē', hz: '唱中文歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We want to sing a Chinese song. / نريد أن نغني أغنية صينية.'
        },
        {
          tokens: [
            { py: 'Dànshì', hz: '但是', cls: 'not-like' },
            { py: 'wǒ zhǎo bù dào', hz: '我找不到', cls: 'self' },
            { py: 'màikèfēng', hz: '麦克风', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'But I could not find the microphone. / لكنني لم أستطع العثور على الميكروفون.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhǎo le hěn jiǔ', hz: '找了很久', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I looked for it for a long time. / بحثت عنه لمدة طويلة.'
        },
        {
          tokens: [
            { py: 'Zuìhòu', hz: '最后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ zhǎodào le', hz: '我找到了', cls: 'activity' },
            { py: 'màikèfēng', hz: '麦克风', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Finally, I found the microphone. / أخيرًا، وجدت الميكروفون.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'hái méi xuéhuì', hz: '还没学会', cls: 'not-like' },
            { py: 'Zhōngwén gē', hz: '中文歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My friend had not learned the Chinese song yet. / صديقي لم يتعلم الأغنية الصينية بعد.'
        },
        {
          tokens: [
            { py: 'Wǒ duì tā shuō', hz: '我对他说', cls: 'self' },
            { hz: '：' },
            { py: 'Jiāyóu', hz: '加油', cls: 'like' },
            { hz: '，' },
            { py: 'nǐ yídìng xíng', hz: '你一定行', cls: 'person' },
            { hz: '！' }
          ],
          translation: 'I said to him: Come on, you can do it! / قلت له: هيا، أنت تستطيع بالتأكيد!'
        },
        {
          tokens: [
            { py: 'Zuìhòu', hz: '最后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'zhǔnbèi hǎo le', hz: '准备好了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Finally, we were ready. / أخيرًا، أصبحنا مستعدين.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'hěn kāixīn', hz: '很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I was very happy. / كنت سعيدًا جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我找到了！” 是什么意思？',
      pinyin: '“Wǒ zhǎodào le!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I found it!', correct: true },
        { text: 'I lost it!', correct: false },
        { text: 'I bought it!', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “finish writing”？',
      pinyin: 'Nǎ yí ge shì “finish writing”?',
      translation: 'Which one means “finish writing”?',
      choices: [
        { text: '写完', correct: true },
        { text: '写错', correct: false },
        { text: '找到', correct: false }
      ]
    },
    {
      question: '3. “你一定行！” 是什么意思？',
      pinyin: '“Nǐ yídìng xíng!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'You can do it!', correct: true },
        { text: 'You are late!', correct: false },
        { text: 'You are wrong!', correct: false }
      ]
    },
    {
      question: '4. “我还没学会。” 是什么意思？',
      pinyin: '“Wǒ hái méi xuéhuì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I have not learned it yet.', correct: true },
        { text: 'I finished writing it.', correct: false },
        { text: 'I found the microphone.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Míngtiān', hz: '明天', cls: 'time' },
        { hz: '，' },
        { py: 'wǒmen xuéxiào', hz: '我们学校', cls: 'place' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ hé tóngxué', hz: '我和同学', cls: 'self' },
        { py: 'zhèngzài zhǔnbèi', hz: '正在准备', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Dànshì', hz: '但是', cls: 'not-like' },
        { py: 'wǒ zhǎo bù dào', hz: '我找不到', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zuìhòu', hz: '最后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ zhǎodào le', hz: '我找到了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'hái méi xuéhuì', hz: '还没学会', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ duì tā shuō', hz: '我对他说', cls: 'self' },
        { hz: '：' },
        { py: 'Jiāyóu', hz: '加油', cls: 'like' },
        { hz: '，' },
        { py: 'nǐ yídìng xíng', hz: '你一定行', cls: 'person' },
        { hz: '！' }
      ]
    ],
    translation: 'Tomorrow, our school has ______. My classmates and I are preparing ______. But I cannot find ______. Finally, I found ______. My friend has not learned ______ yet. I said to him/her: Come on, you can do it!',
    tip: 'Use: 中国文化日、表演、中文歌、麦克风、舞蹈、汉字、画画、写完了、找到了、学会了、准备好了。'
  },

  meanings: {
    '找': 'look for / يبحث عن',
    '找到': 'find / يجد',
    '找到了': 'found it / وجدته',
    '我找到了': 'I found it / وجدته',
    '写完': 'finish writing / ينهي الكتابة',
    '写完了': 'finished writing / أنهى الكتابة',
    '写错': 'write incorrectly / يكتب خطأ',
    '写错了': 'wrote it wrong / كتبها خطأ',
    '学会': 'learn how to / يتعلم',
    '学会了': 'learned it / تعلم',
    '还没学会': 'have not learned yet / لم يتعلم بعد',
    '准备好': 'be ready / يستعد',
    '准备好了': 'ready / مستعد',
    '准备好了吗': 'are you ready / هل أنت مستعد',
    '麦克风': 'microphone / ميكروفون',
    '麦克风了吗': 'the microphone / الميكروفون',
    '看见': 'see / يرى',
    '你看见': 'did you see / هل رأيت',
    '我没看见': 'I did not see it / لم أره',
    '可能': 'maybe / ربما',
    '在那边': 'over there / هناك',
    '可能在那边': 'maybe it is over there / ربما هو هناك',
    '我找找': 'I will look for it / سأبحث عنه',
    '中文歌': 'Chinese song / أغنية صينية',
    '唱中文歌': 'sing a Chinese song / يغني أغنية صينية',
    '表演': 'performance / عرض',
    '准备表演': 'prepare a performance / يستعد لعرض',
    '正在准备': 'is preparing / يستعد الآن',
    '中国文化日': 'Chinese Culture Day / يوم الثقافة الصينية',
    '有中国文化日': 'has Chinese Culture Day / يوجد يوم الثقافة الصينية',
    '加油': 'come on / هيا',
    '一定': 'certainly / بالتأكيد',
    '你一定行': 'you can do it / أنت تستطيع',
    '明天': 'tomorrow / غدًا',
    '我们学校': 'our school / مدرستنا',
    '我和同学': 'my classmates and I / أنا وزملائي',
    '我们要': 'we want to / نريد أن',
    '但是': 'but / لكن',
    '我找不到': 'I cannot find / لا أستطيع أن أجد',
    '找了很久': 'looked for a long time / بحث لمدة طويلة',
    '最后': 'finally / أخيرًا',
    '我的朋友': 'my friend / صديقي',
    '我对他说': 'I said to him / قلت له',
    '我们': 'we / نحن',
    '我很开心': 'I am very happy / أنا سعيد جدًا',
    '还没有': 'not yet / ليس بعد',
    '舞蹈': 'dance / رقصة',
    '汉字': 'Chinese characters / حروف صينية',
    '画画': 'draw / يرسم'
  }
};