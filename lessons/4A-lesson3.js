window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson3'] = {
  id: '4A-lesson3',
  book: '4A',
  lesson: 'Lesson 3',
  title: '我可以借一下你的铅笔吗？',
  theme: 'Polite Requests and School Supplies',
  goal: 'Ask politely to borrow something using 可以借一下……吗.',
  heroTranslation: 'Can I borrow your pencil for a moment?',

  titleTokens: [
    { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
    { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
    { py: 'nǐ de qiānbǐ', hz: '你的铅笔', cls: 'person' },
    { py: 'ma', hz: '吗', cls: 'speaker' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '📘', pinyin: 'kèběn', text: '课本', translation: 'textbook / كتاب دراسي' },
    { emoji: '🧽', pinyin: 'xiàngpí', text: '橡皮', translation: 'eraser / ممحاة' },
    { emoji: '✏️', pinyin: 'qiānbǐ', text: '铅笔', translation: 'pencil / قلم رصاص' },
    { emoji: '📏', pinyin: 'chǐzi', text: '尺子', translation: 'ruler / مسطرة' },
    { emoji: '🎒', pinyin: 'bǐdài', text: '笔袋', translation: 'pencil case / مقلمة' },
    { emoji: '🤲', pinyin: 'jiè', text: '借', translation: 'borrow / يستعير' },
    { emoji: '👌', pinyin: 'kěyǐ', text: '可以', translation: 'can; okay / يمكن' },
    { emoji: '⏳', pinyin: 'děng yíxià', text: '等一下', translation: 'wait a moment / انتظر قليلًا' },
    { emoji: '✅', pinyin: 'méi wèntí', text: '没问题', translation: 'no problem / لا مشكلة' },
    { emoji: '🙏', pinyin: 'gěi nǐ', text: '给你', translation: 'here you are / تفضل' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'self' },
        { py: 'qiānbǐ', hz: '铅笔', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I do not have a pencil. / ليس لدي قلم رصاص.'
    },
    {
      tokens: [
        { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
        { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
        { py: 'nǐ de qiānbǐ', hz: '你的铅笔', cls: 'person' },
        { py: 'ma', hz: '吗', cls: 'speaker' },
        { hz: '？' }
      ],
      translation: 'Can I borrow your pencil for a moment? / هل يمكنني استعارة قلمك الرصاص قليلًا؟'
    },
    {
      tokens: [
        { py: 'Kěyǐ', hz: '可以', cls: 'like' },
        { hz: '，' },
        { py: 'gěi nǐ', hz: '给你', cls: 'respect' },
        { hz: '。' }
      ],
      translation: 'Okay, here you are. / نعم، تفضل.'
    },
    {
      tokens: [
        { py: 'Xiànzài bù xíng', hz: '现在不行', cls: 'not-like' },
        { hz: '，' },
        { py: 'děng yíxià', hz: '等一下', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'Not now. Wait a moment. / ليس الآن، انتظر قليلًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会借文具',
      translation: 'I do not have a pencil. Can I borrow your pencil for a moment? Okay, here you are. I do not have an eraser. Can I borrow your eraser for a moment? No problem.',
      tip: 'Reading Goal: Use 没有 + 借一下 to ask politely.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'self' },
            { py: 'qiānbǐ', hz: '铅笔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not have a pencil. / ليس لدي قلم رصاص.'
        },
        {
          tokens: [
            { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
            { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
            { py: 'nǐ de qiānbǐ', hz: '你的铅笔', cls: 'person' },
            { py: 'ma', hz: '吗', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Can I borrow your pencil for a moment? / هل يمكنني استعارة قلمك الرصاص قليلًا؟'
        },
        {
          tokens: [
            { py: 'Kěyǐ', hz: '可以', cls: 'like' },
            { hz: '，' },
            { py: 'gěi nǐ', hz: '给你', cls: 'respect' },
            { hz: '。' }
          ],
          translation: 'Okay, here you are. / نعم، تفضل.'
        },
        {
          tokens: [
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'self' },
            { py: 'xiàngpí', hz: '橡皮', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not have an eraser. / ليس لدي ممحاة.'
        },
        {
          tokens: [
            { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
            { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
            { py: 'nǐ de xiàngpí', hz: '你的橡皮', cls: 'person' },
            { py: 'ma', hz: '吗', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Can I borrow your eraser for a moment? / هل يمكنني استعارة ممحاتك قليلًا؟'
        },
        {
          tokens: [
            { py: 'Méi wèntí', hz: '没问题', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'No problem. / لا مشكلة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会在课堂上借东西',
      translation: 'Today we have Chinese class. I do not have a pencil. Can I borrow your pencil for a moment? Okay, here you are. Thank you. I also want to borrow an eraser for a moment. No problem. Can I borrow your ruler for a moment? Not now. Wait a moment. Okay, thank you.',
      tip: 'Pair Work: Borrow school supplies politely in class.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒmen yǒu Zhōngwén kè', hz: '我们有中文课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Today we have Chinese class. / اليوم لدينا حصة صينية.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'self' },
            { py: 'qiānbǐ', hz: '铅笔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I do not have a pencil. / ليس لدي قلم رصاص.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
            { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
            { py: 'nǐ de qiānbǐ', hz: '你的铅笔', cls: 'person' },
            { py: 'ma', hz: '吗', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Can I borrow your pencil for a moment? / هل يمكنني استعارة قلمك الرصاص قليلًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Kěyǐ', hz: '可以', cls: 'like' },
            { hz: '，' },
            { py: 'gěi nǐ', hz: '给你', cls: 'respect' },
            { hz: '。' }
          ],
          translation: 'Okay, here you are. / نعم، تفضل.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '！' },
            { py: 'Wǒ hái xiǎng', hz: '我还想', cls: 'self' },
            { py: 'jiè yíxià xiàngpí', hz: '借一下橡皮', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Thank you! I also want to borrow an eraser for a moment. / شكرًا! أريد أيضًا أن أستعير ممحاة قليلًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Méi wèntí', hz: '没问题', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'No problem. / لا مشكلة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
            { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
            { py: 'nǐ de chǐzi', hz: '你的尺子', cls: 'person' },
            { py: 'ma', hz: '吗', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Can I borrow your ruler for a moment? / هل يمكنني استعارة مسطرتك قليلًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài bù xíng', hz: '现在不行', cls: 'not-like' },
            { hz: '，' },
            { py: 'děng yíxià ba', hz: '等一下吧', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Not now. Wait a moment. / ليس الآن، انتظري قليلًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo de', hz: '好的', cls: 'like' },
            { hz: '，' },
            { py: 'xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'Okay, thank you. / حسنًا، شكرًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲借铅笔的经历',
      translation: 'This morning, the teacher asked us to do classroom practice. I opened my pencil case and found that I did not bring a pencil. I was a little worried. I looked at the classmate next to me. She had two pencils. I asked her if I could borrow one pencil. She quickly gave me a pencil. Later, I finished the classroom practice. When class ended, I returned the pencil to her. Then we went to the next class together.',
      tip: 'Speaking Goal: Tell a short classroom story about borrowing something politely.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān shàngwǔ', hz: '今天上午', cls: 'time' },
            { hz: '，' },
            { py: 'lǎoshī ràng wǒmen', hz: '老师让我们', cls: 'person' },
            { py: 'zuò kètáng liànxí', hz: '做课堂练习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This morning, the teacher asked us to do classroom practice. / هذا الصباح طلبت منا المعلمة أن نعمل تدريبًا صفيًا.'
        },
        {
          tokens: [
            { py: 'Wǒ dǎkāi', hz: '我打开', cls: 'self' },
            { py: 'bǐdài', hz: '笔袋', cls: 'activity' },
            { hz: '，' },
            { py: 'fāxiàn zìjǐ', hz: '发现自己', cls: 'self' },
            { py: 'méiyǒu dài qiānbǐ', hz: '没有带铅笔', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I opened my pencil case and found that I did not bring a pencil. / فتحت مقلمتي واكتشفت أنني لم أحضر قلم رصاص.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yǒu yìdiǎnr zháojí', hz: '有一点儿着急', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'I was a little worried. / كنت قلقة قليلًا.'
        },
        {
          tokens: [
            { py: 'Wǒ kàn le kan', hz: '我看了看', cls: 'self' },
            { py: 'pángbiān de tóngxué', hz: '旁边的同学', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I looked at the classmate next to me. / نظرت إلى زميلتي بجانبي.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'yǒu liǎng zhī qiānbǐ', hz: '有两支铅笔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She had two pencils. / كان لديها قلمان رصاص.'
        },
        {
          tokens: [
            { py: 'Wǒ wèn tā', hz: '我问她', cls: 'self' },
            { hz: '，' },
            { py: 'kě bù kěyǐ', hz: '可不可以', cls: 'activity' },
            { py: 'jiè wǒ yì zhī qiānbǐ', hz: '借我一支铅笔', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I asked her if she could lend me one pencil. / سألتها إن كان يمكنها أن تعيرني قلم رصاص.'
        },
        {
          tokens: [
            { py: 'Tā hěn kuài', hz: '她很快', cls: 'person' },
            { py: 'bǎ qiānbǐ gěi le wǒ', hz: '把铅笔给了我', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She quickly gave me the pencil. / أعطتني القلم بسرعة.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ wánchéng le', hz: '我完成了', cls: 'self' },
            { py: 'kètáng liànxí', hz: '课堂练习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Later, I finished the classroom practice. / بعد ذلك أنهيت التدريب الصفي.'
        },
        {
          tokens: [
            { py: 'Xiàkè de shíhou', hz: '下课的时候', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ bǎ qiānbǐ', hz: '我把铅笔', cls: 'self' },
            { py: 'huán gěi le tā', hz: '还给了她', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'When class ended, I returned the pencil to her. / عند انتهاء الحصة، أعدت القلم إليها.'
        },
        {
          tokens: [
            { py: 'Ránhòu', hz: '然后', cls: 'time' },
            { py: 'wǒmen yìqǐ', hz: '我们一起', cls: 'self' },
            { py: 'qù shàng xià yì jié kè', hz: '去上下一节课', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Then we went to the next class together. / ثم ذهبنا معًا إلى الحصة التالية.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我可以借一下你的铅笔吗？” 是什么意思？',
      pinyin: '“Wǒ kěyǐ jiè yíxià nǐ de qiānbǐ ma?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Can I borrow your pencil for a moment?', correct: true },
        { text: 'Can I buy your pencil?', correct: false },
        { text: 'Do you have a pencil case?', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “eraser”？',
      pinyin: 'Nǎ yí ge shì “eraser”?',
      translation: 'Which one means “eraser”?',
      choices: [
        { text: '橡皮', correct: true },
        { text: '铅笔', correct: false },
        { text: '尺子', correct: false }
      ]
    },
    {
      question: '3. “可以，给你。” 是什么意思？',
      pinyin: '“Kěyǐ, gěi nǐ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Okay, here you are.', correct: true },
        { text: 'Not now.', correct: false },
        { text: 'Wait a moment.', correct: false }
      ]
    },
    {
      question: '4. “现在不行，等一下。” 是什么意思？',
      pinyin: '“Xiànzài bù xíng, děng yíxià.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Not now. Wait a moment.', correct: true },
        { text: 'No problem.', correct: false },
        { text: 'Thank you.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ méiyǒu', hz: '我没有', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ kěyǐ', hz: '我可以', cls: 'self' },
        { py: 'jiè yíxià', hz: '借一下', cls: 'activity' },
        { py: 'nǐ de', hz: '你的', cls: 'person' },
        { blank: true },
        { py: 'ma', hz: '吗', cls: 'speaker' },
        { hz: '？' }
      ],
      [
        { py: 'Kěyǐ', hz: '可以', cls: 'like' },
        { hz: '，' },
        { py: 'gěi nǐ', hz: '给你', cls: 'respect' },
        { hz: '。' }
      ],
      [
        { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
        { hz: '。' }
      ],
      [
        { py: 'Xiàkè de shíhou', hz: '下课的时候', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ bǎ', hz: '我把', cls: 'self' },
        { blank: true },
        { py: 'huán gěi le tā', hz: '还给了她', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'I do not have ______. Can I borrow your ______ for a moment? Okay, here you are. Thank you. When class ended, I returned ______ to her.',
    tip: 'Use: 铅笔、橡皮、尺子、课本、笔袋。'
  },

  meanings: {
    '课本': 'textbook / كتاب دراسي',
    '橡皮': 'eraser / ممحاة',
    '笔袋': 'pencil case / مقلمة',
    '铅笔': 'pencil / قلم رصاص',
    '尺子': 'ruler / مسطرة',
    '借': 'borrow / يستعير',
    '借一下': 'borrow for a moment / يستعير قليلًا',
    '可以': 'can; okay / يمكن',
    '给你': 'here you are / تفضل',
    '没问题': 'no problem / لا مشكلة',
    '等一下': 'wait a moment / انتظر قليلًا',
    '现在不行': 'not now / ليس الآن',
    '我没有': 'I do not have / ليس لدي',
    '你的铅笔': 'your pencil / قلمك الرصاص',
    '你的橡皮': 'your eraser / ممحاتك',
    '你的尺子': 'your ruler / مسطرتك',
    '我可以借一下你的铅笔吗': 'Can I borrow your pencil for a moment? / هل يمكنني استعارة قلمك الرصاص قليلًا؟',
    '我可以借一下你的橡皮吗': 'Can I borrow your eraser for a moment? / هل يمكنني استعارة ممحاتك قليلًا؟',
    '我可以借一下你的尺子吗': 'Can I borrow your ruler for a moment? / هل يمكنني استعارة مسطرتك قليلًا؟',
    '今天': 'today / اليوم',
    '中文课': 'Chinese class / حصة الصينية',
    '我们有中文课': 'we have Chinese class / لدينا حصة صينية',
    '我还想': 'I also want to / أريد أيضًا',
    '借一下橡皮': 'borrow an eraser for a moment / يستعير ممحاة قليلًا',
    '等一下吧': 'wait a moment / انتظر قليلًا',
    '好的': 'okay / حسنًا',
    '今天上午': 'this morning / هذا الصباح',
    '老师让我们': 'the teacher asked us / طلبت منا المعلمة',
    '做课堂练习': 'do classroom practice / يعمل تدريبًا صفيًا',
    '我打开': 'I opened / فتحت',
    '发现自己': 'found that I / اكتشفت أنني',
    '没有带铅笔': 'did not bring a pencil / لم أحضر قلم رصاص',
    '有一点儿着急': 'a little worried / قلق قليلًا',
    '我看了看': 'I looked at / نظرت إلى',
    '旁边的同学': 'the classmate next to me / الزميلة بجانبي',
    '有两支铅笔': 'has two pencils / لديها قلمان رصاص',
    '我问她': 'I asked her / سألتها',
    '可不可以': 'whether can or not / هل يمكن',
    '借我一支铅笔': 'lend me one pencil / تعيرني قلم رصاص',
    '她很快': 'she quickly / هي بسرعة',
    '把铅笔给了我': 'gave me the pencil / أعطتني القلم',
    '后来': 'later / بعد ذلك',
    '我完成了': 'I finished / أنهيت',
    '课堂练习': 'classroom practice / تدريب صفي',
    '下课的时候': 'when class ended / عند انتهاء الحصة',
    '我把铅笔': 'I took the pencil / أخذت القلم',
    '还给了她': 'returned it to her / أعدته إليها',
    '然后': 'then / ثم',
    '我们一起': 'we together / نحن معًا',
    '去上下一节课': 'go to the next class / نذهب إلى الحصة التالية'
  }
};