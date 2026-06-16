window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson3'] = {
  id: '3A-lesson3',
  book: '3A',
  lesson: 'Lesson 3',
  title: '请问，去地铁站怎么走？',
  theme: 'Asking for Directions and Giving Directions',
  goal: 'Ask for directions and give simple directions using 往前走、往左转、往右转 and 路口.',
  heroTranslation: 'Excuse me, how do I get to the metro station?',
  titleTokens: [
    { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
    { hz: '，' },
    { py: 'qù dìtiězhàn', hz: '去地铁站', cls: 'place' },
    { py: 'zěnme zǒu', hz: '怎么走', cls: 'activity' },
    { hz: '？' }
  ],

  keyWords: [
    { emoji: '🚇', pinyin: 'dìtiězhàn', text: '地铁站', translation: 'metro station / محطة المترو' },
    { emoji: '🛣️', pinyin: 'lùkǒu', text: '路口', translation: 'intersection / تقاطع' },
    { emoji: '⬆️', pinyin: 'wǎng qián zǒu', text: '往前走', translation: 'go straight / امشِ إلى الأمام' },
    { emoji: '⬅️', pinyin: 'wǎng zuǒ zhuǎn', text: '往左转', translation: 'turn left / انعطف يسارًا' },
    { emoji: '➡️', pinyin: 'wǎng yòu zhuǎn', text: '往右转', translation: 'turn right / انعطف يمينًا' },
    { emoji: '1️⃣', pinyin: 'dì yī ge', text: '第一个', translation: 'the first / الأول' },
    { emoji: '🔁', pinyin: 'zài', text: '再', translation: 'then; again / ثم؛ مرة أخرى' },
    { emoji: '⏱️', pinyin: 'wǔ fēnzhōng', text: '五分钟', translation: 'five minutes / خمس دقائق' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
        { hz: '，' },
        { py: 'qù dìtiězhàn', hz: '去地铁站', cls: 'place' },
        { py: 'zěnme zǒu', hz: '怎么走', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Excuse me, how do I get to the metro station? / عذرًا، كيف أذهب إلى محطة المترو؟'
    },
    {
      tokens: [
        { py: 'Nǐ xiān', hz: '你先', cls: 'person' },
        { py: 'wǎng qián zǒu', hz: '往前走', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Go straight first. / امشِ إلى الأمام أولًا.'
    },
    {
      tokens: [
        { py: 'Zài dì yī ge lùkǒu', hz: '在第一个路口', cls: 'place' },
        { py: 'wǎng zuǒ zhuǎn', hz: '往左转', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Turn left at the first intersection. / انعطف يسارًا عند أول تقاطع.'
    },
    {
      tokens: [
        { py: 'Zǒulù', hz: '走路', cls: 'activity' },
        { py: 'wǔ fēnzhōng', hz: '五分钟', cls: 'time' },
        { hz: '。' }
      ],
      translation: 'It takes five minutes on foot. / يستغرق المشي خمس دقائق.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会看懂路线',
      translation: 'The metro station is next to the school. The library is in front of the mall. The mosque is behind the park.',
      tip: 'Reading Goal: Understand place and direction sentences.',
      lines: [
        {
          tokens: [
            { py: 'Dìtiězhàn', hz: '地铁站', cls: 'place' },
            { py: 'zài xuéxiào de pángbiān', hz: '在学校的旁边', cls: 'location' },
            { hz: '。' }
          ],
          translation: 'The metro station is next to the school. / محطة المترو بجانب المدرسة.'
        },
        {
          tokens: [
            { py: 'Túshūguǎn', hz: '图书馆', cls: 'place' },
            { py: 'zài shāngchǎng de qiánbiān', hz: '在商场的前边', cls: 'location' },
            { hz: '。' }
          ],
          translation: 'The library is in front of the mall. / المكتبة أمام المركز التجاري.'
        },
        {
          tokens: [
            { py: 'Qīngzhēnsì', hz: '清真寺', cls: 'place' },
            { py: 'zài gōngyuán de hòubiān', hz: '在公园的后边', cls: 'location' },
            { hz: '。' }
          ],
          translation: 'The mosque is behind the park. / المسجد خلف الحديقة.'
        },
        {
          tokens: [
            { py: 'Qù dìtiězhàn', hz: '去地铁站', cls: 'place' },
            { py: 'yào wǎng qián zǒu', hz: '要往前走', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'To go to the metro station, you need to go straight. / للذهاب إلى محطة المترو، عليك أن تمشي إلى الأمام.'
        },
        {
          tokens: [
            { py: 'Qù túshūguǎn', hz: '去图书馆', cls: 'place' },
            { py: 'yào wǎng zuǒ zhuǎn', hz: '要往左转', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'To go to the library, you need to turn left. / للذهاب إلى المكتبة، عليك أن تنعطف يسارًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问路',
      translation: 'Excuse me, how do I get to the metro station? Go straight first. Turn left at the first intersection. It is not far.',
      tip: 'Pair Work: One student asks for directions. One student gives directions.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Qǐngwèn', hz: '请问', cls: 'respect' },
            { hz: '，' },
            { py: 'qù dìtiězhàn', hz: '去地铁站', cls: 'place' },
            { py: 'zěnme zǒu', hz: '怎么走', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Excuse me, how do I get to the metro station? / عذرًا، كيف أذهب إلى محطة المترو؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xiān', hz: '你先', cls: 'person' },
            { py: 'wǎng qián zǒu', hz: '往前走', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Go straight first. / امشِ إلى الأمام أولًا.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Zài dì yī ge lùkǒu', hz: '在第一个路口', cls: 'place' },
            { py: 'wǎng zuǒ zhuǎn', hz: '往左转', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Turn left at the first intersection. / انعطف يسارًا عند أول تقاطع.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Lí zhèlǐ', hz: '离这里', cls: 'location' },
            { py: 'yuǎn ma', hz: '远吗', cls: 'location' },
            { hz: '？' }
          ],
          translation: 'Is it far from here? / هل هو بعيد من هنا؟'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bù yuǎn', hz: '不远', cls: 'location' },
            { hz: ',' },
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Zǒulù', hz: '走路', cls: 'activity' },
            { py: 'wǔ fēnzhōng', hz: '五分钟', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It is not far.It takes five minutes on foot. / ليس بعيدًا. يستغرق المشي خمس دقائق.'
        },
        
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '！' }
          ],
          translation: 'Thank you! / شكرًا!'
        },
        {
          tokens: [
            { py: '', hz: '👨', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bú kèqi', hz: '不客气', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'You are welcome. / على الرحب والسعة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会给别人指路',
      translation: 'If you want to go to the mosque, I can help you. Go straight first. Turn right at the second intersection. Then go straight again. The mosque is on the left.',
      tip: 'Speaking Goal: Give directions to another person. You can change 清真寺 to 图书馆、商场 or 公园.',
      lines: [
        {
          tokens: [
            { py: 'Rúguǒ nǐ', hz: '如果你', cls: 'person' },
            { py: 'yào qù qīngzhēnsì', hz: '要去清真寺', cls: 'place' },
            { hz: '，' },
            { py: 'wǒ kěyǐ bāngzhù nǐ', hz: '我可以帮助你', cls: 'self' },
            { hz: '。' }
          ],
          translation: 'If you want to go to the mosque, I can help you. / إذا كنت تريد الذهاب إلى المسجد، يمكنني مساعدتك.'
        },
        {
          tokens: [
            { py: 'Nǐ xiān', hz: '你先', cls: 'person' },
            { py: 'wǎng qián zǒu', hz: '往前走', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Go straight first. / امشِ إلى الأمام أولًا.'
        },
        {
          tokens: [
            { py: 'Zài dì èr ge lùkǒu', hz: '在第二个路口', cls: 'place' },
            { py: 'wǎng yòu zhuǎn', hz: '往右转', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Turn right at the second intersection. / انعطف يمينًا عند التقاطع الثاني.'
        },
        {
          tokens: [
            { py: 'Zài', hz: '再', cls: 'time' },
            { py: 'wǎng qián zǒu', hz: '往前走', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Then go straight again. / ثم امشِ إلى الأمام مرة أخرى.'
        },
        {
          tokens: [
            { py: 'Qīngzhēnsì', hz: '清真寺', cls: 'place' },
            { py: 'jiù zài zuǒbiān', hz: '就在左边', cls: 'location' },
            { hz: '。' }
          ],
          translation: 'The mosque is right on the left. / المسجد على اليسار مباشرة.'
        },
        {
          tokens: [
            { py: 'Bù yuǎn', hz: '不远', cls: 'location' },
            { hz: '，' },
            { py: 'zǒulù', hz: '走路', cls: 'activity' },
            { py: 'wǔ fēnzhōng', hz: '五分钟', cls: 'time' },
            { py: 'jiù dào le', hz: '就到了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It is not far. You will arrive in five minutes on foot. / ليس بعيدًا. ستصل خلال خمس دقائق مشيًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “往前走” 是什么意思？',
      pinyin: '“Wǎng qián zǒu” shì shénme yìsi?',
      translation: 'What does “往前走” mean?',
      choices: [
        { text: 'go straight', correct: true },
        { text: 'turn left', correct: false },
        { text: 'turn right', correct: false }
      ]
    },
    {
      question: '2. “请问，去地铁站怎么走？” 是什么意思？',
      pinyin: '“Qǐngwèn, qù dìtiězhàn zěnme zǒu?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Excuse me, how do I get to the metro station?', correct: true },
        { text: 'Where is my school?', correct: false },
        { text: 'I like the metro station.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “turn right”？',
      pinyin: 'Nǎ yí ge shì “turn right”?',
      translation: 'Which one means “turn right”?',
      choices: [
        { text: '往右转', correct: true },
        { text: '往左转', correct: false },
        { text: '往前走', correct: false }
      ]
    },
    {
      question: '4. “走路五分钟” 表示什么？',
      pinyin: '“Zǒulù wǔ fēnzhōng” biǎoshì shénme?',
      translation: 'What does “走路五分钟” mean?',
      choices: [
        { text: 'It takes five minutes on foot.', correct: true },
        { text: 'It takes five hours by car.', correct: false },
        { text: 'It is very far.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Rúguǒ nǐ', hz: '如果你', cls: 'person' },
        { py: 'yào qù', hz: '要去', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'wǒ kěyǐ bāngzhù nǐ', hz: '我可以帮助你', cls: 'self' },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ xiān', hz: '你先', cls: 'person' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zài dì', hz: '在第', cls: 'place' },
        { blank: true },
        { py: 'ge lùkǒu', hz: '个路口', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zài', hz: '再', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'jiù zài', hz: '就在', cls: 'location' },
        { blank: true },
        { py: 'biān', hz: '边', cls: 'location' },
        { hz: '。' }
      ]
    ],
    translation: 'If you want to go to ______, I can help you. First, ______. At the ______ intersection, ______. Then ______. ______ is on the ______ side.',
    tip: 'Use: 清真寺、图书馆、商场、公园、往前走、往左转、往右转、第一个、第二个、左、右。'
  },

  meanings: {
    '请问': 'excuse me / عذرًا',
    '去地铁站': 'go to the metro station / الذهاب إلى محطة المترو',
    '怎么走': 'how to get there / كيف أذهب',
    '地铁站': 'metro station / محطة المترو',
    '在学校的旁边': 'next to the school / بجانب المدرسة',
    '图书馆': 'library / مكتبة',
    '在商场的前边': 'in front of the mall / أمام المركز التجاري',
    '清真寺': 'mosque / مسجد',
    '在公园的后边': 'behind the park / خلف الحديقة',
    '去图书馆': 'go to the library / الذهاب إلى المكتبة',
    '要往前走': 'need to go straight / يجب أن تمشي إلى الأمام',
    '要往左转': 'need to turn left / يجب أن تنعطف يسارًا',
    '你先': 'you first / أنت أولًا',
    '往前走': 'go straight / امشِ إلى الأمام',
    '在第一个路口': 'at the first intersection / عند أول تقاطع',
    '在第二个路口': 'at the second intersection / عند التقاطع الثاني',
    '往左转': 'turn left / انعطف يسارًا',
    '往右转': 'turn right / انعطف يمينًا',
    '离这里': 'from here / من هنا',
    '远吗': 'is it far / هل هو بعيد',
    '不远': 'not far / ليس بعيدًا',
    '走路': 'walk / المشي',
    '五分钟': 'five minutes / خمس دقائق',
    '谢谢': 'thank you / شكرًا',
    '不客气': 'you are welcome / على الرحب والسعة',
    '如果你': 'if you / إذا كنت',
    '要去清真寺': 'want to go to the mosque / تريد الذهاب إلى المسجد',
    '我可以帮助你': 'I can help you / يمكنني مساعدتك',
    '再': 'then; again / ثم؛ مرة أخرى',
    '就在左边': 'right on the left / على اليسار مباشرة',
    '就到了': 'then you will arrive / ستصل',
    '要去': 'want to go to / تريد الذهاب إلى',
    '就在': 'right at / يكون مباشرة في',
    '边': 'side / جانب'
  }
};