window.LESSONS = window.LESSONS || {};

window.LESSONS['3C-lesson2'] = {
  id: '3C-lesson2',
  book: '3C',
  lesson: 'Lesson 2',
  title: '我们参观了三个小时。',
  theme: 'Activities and Duration',
  goal: 'Talk about how long an activity lasted using 动作 + 了 + 时间段.',
  heroTranslation: 'We visited for three hours.',

  titleTokens: [
    { py: 'Wǒmen', hz: '我们', cls: 'self' },
    { py: 'cānguān le', hz: '参观了', cls: 'activity' },
    { py: 'sān ge xiǎoshí', hz: '三个小时', cls: 'time' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '⏰', pinyin: 'xiǎoshí', text: '小时', translation: 'hour / ساعة' },
    { emoji: '➡️', pinyin: 'yǐhòu', text: '以后', translation: 'after / بعد' },
    { emoji: '👀', pinyin: 'cānguān', text: '参观', translation: 'visit / يزور' },
    { emoji: '📷', pinyin: 'pāizhào', text: '拍照', translation: 'take photos / يلتقط الصور' },
    { emoji: '☕', pinyin: 'xiūxi', text: '休息', translation: 'rest / يستريح' },
    { emoji: '🎭', pinyin: 'biǎoyǎn', text: '表演', translation: 'performance / عرض' },
    { emoji: '😊', pinyin: 'kāixīn', text: '开心', translation: 'happy / سعيد' },
    { emoji: '🌸', pinyin: 'huāyuán', text: '花园', translation: 'garden / حديقة' },
    { emoji: '💃', pinyin: 'tiàowǔ', text: '跳舞', translation: 'dance / يرقص' },
    { emoji: '🕒', pinyin: 'shíjiān', text: '时间', translation: 'time / وقت' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'cānguān le', hz: '参观了', cls: 'activity' },
        { py: 'sān ge xiǎoshí', hz: '三个小时', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'We visited for three hours. / زرنا لمدة ثلاث ساعات.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'tiàowǔ tiào le', hz: '跳舞跳了', cls: 'activity' },
        { py: 'yí ge xiǎoshí', hz: '一个小时', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I danced for one hour. / رقصت لمدة ساعة واحدة.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'xuéxí le', hz: '学习了', cls: 'activity' },
        { py: 'liǎng ge xiǎoshí', hz: '两个小时', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'I studied for two hours. / درست لمدة ساعتين.'
    },
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'xiūxi le', hz: '休息了', cls: 'activity' },
        { py: 'bàn ge xiǎoshí', hz: '半个小时', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'We rested for half an hour. / استرحنا لمدة نصف ساعة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说做了多久',
      translation: 'I studied for one hour. She drew for half an hour. He played basketball for one hour. We visited for three hours. I rested for twenty minutes.',
      tip: 'Reading Goal: Say how long an activity lasted.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xuéxí le', hz: '学习了', cls: 'activity' },
            { py: 'yí ge xiǎoshí', hz: '一个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I studied for one hour. / درست لمدة ساعة واحدة.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'huàhuà huà le', hz: '画画画了', cls: 'activity' },
            { py: 'bàn ge xiǎoshí', hz: '半个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'She drew for half an hour. / رسمت لمدة نصف ساعة.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'dǎ lánqiú dǎ le', hz: '打篮球打了', cls: 'activity' },
            { py: 'yí ge xiǎoshí', hz: '一个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'He played basketball for one hour. / لعب كرة السلة لمدة ساعة واحدة.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'cānguān le', hz: '参观了', cls: 'activity' },
            { py: 'sān ge xiǎoshí', hz: '三个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'We visited for three hours. / زرنا لمدة ثلاث ساعات.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xiūxi le', hz: '休息了', cls: 'activity' },
            { py: 'èrshí fēnzhōng', hz: '二十分钟', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I rested for twenty minutes. / استرحت لمدة عشرين دقيقة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问多长时间',
      translation: 'After school yesterday, what did you do? I went dancing. How long did you dance? I danced for one hour. Did you study last night? Yes, I did. How long did you study? I studied for two hours.',
      tip: 'Pair Work: Ask what someone did and how long it took.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zuótiān fàngxué yǐhòu', hz: '昨天放学以后', cls: 'time' },
            { hz: '，' },
            { py: 'nǐ qù zuò shénme le', hz: '你去做什么了', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'After school yesterday, what did you do? / بعد المدرسة أمس، ماذا فعلت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ qù', hz: '我去', cls: 'self' },
            { py: 'tiàowǔ le', hz: '跳舞了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I went dancing. / ذهبت للرقص.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ tiàowǔ', hz: '你跳舞', cls: 'person' },
            { py: 'tiào le duō cháng shíjiān', hz: '跳了多长时间', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How long did you dance? / كم من الوقت رقصت؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ tiào le', hz: '我跳了', cls: 'self' },
            { py: 'yí ge xiǎoshí', hz: '一个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I danced for one hour. / رقصت لمدة ساعة واحدة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ zuótiān wǎnshang', hz: '你昨天晚上', cls: 'person' },
            { py: 'xuéxí le ma', hz: '学习了吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Did you study last night? / هل درستِ ليلة أمس؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xuéxí le', hz: '学习了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Yes, I did. / نعم، درست.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xuéxí le', hz: '你学习了', cls: 'person' },
            { py: 'duō cháng shíjiān', hz: '多长时间', cls: 'time' },
            { hz: '？' }
          ],
          translation: 'How long did you study? / كم من الوقت درستِ؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xuéxí le', hz: '我学习了', cls: 'self' },
            { py: 'liǎng ge xiǎoshí', hz: '两个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I studied for two hours. / درست لمدة ساعتين.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲地球村的一天',
      translation: 'On Saturday, I went to Global Village with my family. We first visited the China Pavilion. The China Pavilion was very beautiful. We took many photos. We visited for three hours. Later, we watched a performance. The performance lasted for one hour. Today I was very happy.',
      tip: 'Speaking Goal: Tell a short day story and say how long activities lasted.',
      lines: [
        {
          tokens: [
            { py: 'Xīngqīliù', hz: '星期六', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ hé jiārén', hz: '我和家人', cls: 'self' },
            { py: 'qù le Dìqiúcūn', hz: '去了地球村', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'On Saturday, I went to Global Village with my family. / يوم السبت، ذهبت إلى القرية العالمية مع عائلتي.'
        },
        {
          tokens: [
            { py: 'Wǒmen xiān', hz: '我们先', cls: 'self' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { py: 'Zhōngguó Guǎn', hz: '中国馆', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'We first visited the China Pavilion. / زرنا الجناح الصيني أولًا.'
        },
        {
          tokens: [
            { py: 'Zhōngguó Guǎn', hz: '中国馆', cls: 'place' },
            { py: 'hěn piàoliang', hz: '很漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The China Pavilion was very beautiful. / كان الجناح الصيني جميلًا جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'pāi le', hz: '拍了', cls: 'activity' },
            { py: 'hěn duō zhàopiàn', hz: '很多照片', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We took many photos. / التقطنا الكثير من الصور.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'cānguān le', hz: '参观了', cls: 'activity' },
            { py: 'sān ge xiǎoshí', hz: '三个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'We visited for three hours. / زرنا لمدة ثلاث ساعات.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen kàn le', hz: '我们看了', cls: 'self' },
            { py: 'biǎoyǎn', hz: '表演', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Later, we watched a performance. / لاحقًا، شاهدنا عرضًا.'
        },
        {
          tokens: [
            { py: 'Biǎoyǎn', hz: '表演', cls: 'activity' },
            { py: 'biǎoyǎn le', hz: '表演了', cls: 'activity' },
            { py: 'yí ge xiǎoshí', hz: '一个小时', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'The performance lasted for one hour. / استمر العرض لمدة ساعة واحدة.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ hěn kāixīn', hz: '我很开心', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today I was very happy. / اليوم كنت سعيدًا جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我们参观了三个小时。” 是什么意思？',
      pinyin: '“Wǒmen cānguān le sān ge xiǎoshí.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We visited for three hours.', correct: true },
        { text: 'We rested for three days.', correct: false },
        { text: 'We went home at three o’clock.', correct: false }
      ]
    },
    {
      question: '2. “半个小时” 是什么意思？',
      pinyin: '“Bàn ge xiǎoshí” shì shénme yìsi?',
      translation: 'What does “半个小时” mean?',
      choices: [
        { text: 'half an hour', correct: true },
        { text: 'one day', correct: false },
        { text: 'one week', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “take photos”？',
      pinyin: 'Nǎ yí ge shì “take photos”?',
      translation: 'Which one means “take photos”?',
      choices: [
        { text: '拍照', correct: true },
        { text: '休息', correct: false },
        { text: '表演', correct: false }
      ]
    },
    {
      question: '4. “你跳舞跳了多长时间？” 是什么意思？',
      pinyin: '“Nǐ tiàowǔ tiào le duō cháng shíjiān?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'How long did you dance?', correct: true },
        { text: 'Where did you dance?', correct: false },
        { text: 'Why did you dance?', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zuótiān', hz: '昨天', cls: 'time' },
        { blank: true },
        { py: 'yǐhòu', hz: '以后', cls: 'time' },
        { hz: '，' }
      ],
      [
        { py: 'wǒ qù le', hz: '我去了', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'le', hz: '了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ hái', hz: '我还', cls: 'self' },
        { blank: true },
        { py: 'le', hz: '了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zuìhòu', hz: '最后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'Yesterday after ______, I went to ______. I ______ for ______. I also ______ for ______. Finally, I felt ______.',
    tip: 'Use: 放学、吃饭、公园、地球村、商场、学习、跳舞、打篮球、参观、拍照、休息、一个小时、半个小时、二十分钟、很开心、很累。'
  },

  meanings: {
    '小时': 'hour / ساعة',
    '一个小时': 'one hour / ساعة واحدة',
    '两个小时': 'two hours / ساعتان',
    '三个小时': 'three hours / ثلاث ساعات',
    '半个小时': 'half an hour / نصف ساعة',
    '二十分钟': 'twenty minutes / عشرون دقيقة',
    '以后': 'after / بعد',
    '昨天放学以后': 'after school yesterday / بعد المدرسة أمس',
    '参观': 'visit / يزور',
    '参观了': 'visited for / زار لمدة',
    '拍照': 'take photos / يلتقط الصور',
    '拍了': 'took / التقط',
    '休息': 'rest / يستريح',
    '休息了': 'rested for / استراح لمدة',
    '表演': 'performance / عرض',
    '表演了': 'performed for / قدم عرضًا لمدة',
    '开心': 'happy / سعيد',
    '花园': 'garden / حديقة',
    '跳舞': 'dance / يرقص',
    '跳舞了': 'danced / رقص',
    '跳了': 'danced for / رقص لمدة',
    '时间': 'time / وقت',
    '多长时间': 'how long / كم من الوقت',
    '学习了': 'studied for / درس لمدة',
    '画画画了': 'drew for / رسم لمدة',
    '打篮球打了': 'played basketball for / لعب كرة السلة لمدة',
    '你去做什么了': 'what did you do / ماذا فعلت',
    '你跳舞': 'you dance / أنت ترقص',
    '你昨天晚上': 'you last night / أنت ليلة أمس',
    '学习了吗': 'did you study / هل درست',
    '我学习了': 'I studied for / درست لمدة',
    '地球村': 'Global Village / القرية العالمية',
    '中国馆': 'China Pavilion / الجناح الصيني',
    '星期六': 'Saturday / السبت',
    '我和家人': 'my family and I / أنا وعائلتي',
    '去了地球村': 'went to Global Village / ذهب إلى القرية العالمية',
    '我们先': 'we first / نحن أولًا',
    '很漂亮': 'very beautiful / جميل جدًا',
    '很多照片': 'many photos / الكثير من الصور',
    '后来': 'later / لاحقًا',
    '我们看了': 'we watched / شاهدنا',
    '今天': 'today / اليوم',
    '我很开心': 'I am very happy / أنا سعيد جدًا',
    '昨天': 'yesterday / أمس',
    '我去了': 'I went to / ذهبت إلى',
    '我还': 'I also / أنا أيضًا',
    '最后': 'finally / أخيرًا',
    '我觉得': 'I think; I felt / أعتقد؛ شعرت',
    '放学': 'after school / انتهاء المدرسة',
    '吃饭': 'eat / يأكل',
    '公园': 'park / حديقة',
    '商场': 'mall / مركز تجاري',
    '很累': 'very tired / متعب جدًا'
  }
};