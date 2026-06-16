window.LESSONS = window.LESSONS || {};

window.LESSONS['2C-lesson4'] = {
  id: '2C-lesson4',
  book: '2C',
  lesson: 'Lesson 4',
  title: '我坐校车去学校。',
  theme: 'Transportation and weekend activities',
  goal: 'Talk about transportation with “坐 / 骑 / 开”.',
  heroTranslation: 'I take the school bus to school.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
    { py: 'qù xuéxiào', hz: '去学校', cls: 'place' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🚌', pinyin: 'xiàochē', text: '校车', translation: 'school bus / حافلة مدرسية' },
    { emoji: '🚌', pinyin: 'gōnggòng qìchē', text: '公共汽车', translation: 'bus / حافلة عامة' },
    { emoji: '🚗', pinyin: 'qìchē', text: '汽车', translation: 'car / سيارة' },
    { emoji: '🚕', pinyin: 'chūzūchē', text: '出租车', translation: 'taxi / سيارة أجرة' },
    { emoji: '🚲', pinyin: 'zìxíngchē', text: '自行车', translation: 'bicycle / دراجة' },
    { emoji: '🚇', pinyin: 'dìtiě', text: '地铁', translation: 'metro / مترو' },
    { emoji: '✈️', pinyin: 'fēijī', text: '飞机', translation: 'airplane / طائرة' },
    { emoji: '🚆', pinyin: 'huǒchē', text: '火车', translation: 'train / قطار' },
    { emoji: '🚌', pinyin: 'zuò', text: '坐', translation: 'take / ride / يركب' },
    { emoji: '🚲', pinyin: 'qí', text: '骑', translation: 'ride / يركب' },
    { emoji: '🚗', pinyin: 'kāi', text: '开', translation: 'drive / يقود' },
    { emoji: '❓', pinyin: 'zěnme qù', text: '怎么去', translation: 'how to go / كيف يذهب' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
        { py: 'qù xuéxiào', hz: '去学校', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'I take the school bus to school. / أركب الحافلة المدرسية إلى المدرسة.'
    },
    {
      tokens: [
        { py: 'Bàba', hz: '爸爸', cls: 'person' },
        { py: 'kāi chē', hz: '开车', cls: 'activity' },
        { py: 'qù gōngsī', hz: '去公司', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'Dad drives to the company. / أبي يقود السيارة إلى الشركة.'
    },
    {
      tokens: [
        { py: 'Gēge', hz: '哥哥', cls: 'person' },
        { py: 'qí zìxíngchē', hz: '骑自行车', cls: 'activity' },
        { py: 'qù gōngyuán', hz: '去公园', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'Older brother rides a bicycle to the park. / أخي الأكبر يركب الدراجة إلى الحديقة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会认交通工具',
      translation: 'This is not a bus. This is a school bus. I take the school bus to school every day. My older brother rides a bicycle to the park.',
      tip: 'Reading Goal: Recognize transportation words and read “坐 / 骑”.',
      lines: [
        {
          tokens: [
            { py: 'Zhè bú shì', hz: '这不是', cls: 'not-like' },
            { py: 'gōnggòng qìchē', hz: '公共汽车', cls: 'activity' },
            { hz: '，' },
            { py: 'zhè shì', hz: '这是', cls: 'activity' },
            { py: 'xiàochē', hz: '校车', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This is not a bus. This is a school bus. / هذه ليست حافلة عامة، هذه حافلة مدرسية.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'měi tiān', hz: '每天', cls: 'time' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { py: 'qù xuéxiào', hz: '去学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I take the school bus to school every day. / أركب الحافلة المدرسية إلى المدرسة كل يوم.'
        },
        {
          tokens: [
            { py: 'Gēge', hz: '哥哥', cls: 'person' },
            { py: 'qí zìxíngchē', hz: '骑自行车', cls: 'activity' },
            { py: 'qù gōngyuán', hz: '去公园', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'My older brother rides a bicycle to the park. / أخي الأكبر يركب الدراجة إلى الحديقة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会说怎么去',
      translation: 'How do you go to school? I take the school bus to school. How does your father go to the company? Dad drives to the company. How does your older brother go to the park? He rides a bicycle to the park. Do you take the metro? No, I do not take the metro. I take a car to school.',
      tip: 'Pair Work: Ask and answer how people go to places.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zěnme qù', hz: '怎么去', cls: 'activity' },
            { py: 'xuéxiào', hz: '学校', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'How do you go to school? / كيف تذهب إلى المدرسة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { py: 'qù xuéxiào', hz: '去学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I take the school bus to school. / أركب الحافلة المدرسية إلى المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ bàba', hz: '你爸爸', cls: 'person' },
            { py: 'zěnme qù', hz: '怎么去', cls: 'activity' },
            { py: 'gōngsī', hz: '公司', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'How does your father go to the company? / كيف يذهب والدك إلى الشركة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bàba', hz: '爸爸', cls: 'person' },
            { py: 'kāi chē', hz: '开车', cls: 'activity' },
            { py: 'qù gōngsī', hz: '去公司', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Dad drives to the company. / أبي يقود السيارة إلى الشركة.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ gēge', hz: '你哥哥', cls: 'person' },
            { py: 'zěnme qù', hz: '怎么去', cls: 'activity' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'How does your older brother go to the park? / كيف يذهب أخوك الأكبر إلى الحديقة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Gēge', hz: '哥哥', cls: 'person' },
            { py: 'qí zìxíngchē', hz: '骑自行车', cls: 'activity' },
            { py: 'qù gōngyuán', hz: '去公园', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'My older brother rides a bicycle to the park. / أخي الأكبر يركب الدراجة إلى الحديقة.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zuò dìtiě', hz: '坐地铁', cls: 'activity' },
            { py: 'ma', hz: '吗' },
            { hz: '？' }
          ],
          translation: 'Do you take the metro? / هل تركب المترو؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bù', hz: '不', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'bù zuò dìtiě', hz: '不坐地铁', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'zuò qìchē', hz: '坐汽车', cls: 'activity' },
            { py: 'qù xuéxiào', hz: '去学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'No, I do not take the metro. I take a car to school. / لا، لا أركب المترو. أركب السيارة إلى المدرسة.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的周末',
      translation: 'Today is the weekend. The weather is very good, very cool, and also very comfortable. In the morning, my mother and I took a car to the shop, and we bought many things. In the evening, we rode bicycles to the park. The park was very beautiful. This is my weekend. How is your weekend?',
      tip: 'Speaking Goal: Use transportation words to describe your weekend.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'shì', hz: '是' },
            { py: 'zhōumò', hz: '周末', cls: 'time' },
            { hz: '，' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'fēicháng hǎo', hz: '非常好', cls: 'like' },
            { hz: '，' },
            { py: 'hěn liángkuai', hz: '很凉快', cls: 'like' },
            { hz: '，' },
            { py: 'yě hěn shūfu', hz: '也很舒服', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today is the weekend. The weather is very good, very cool, and also very comfortable. / اليوم عطلة نهاية الأسبوع، والطقس جيد جدًا، وبارد ومريح أيضًا.'
        },
        {
          tokens: [
            { py: 'Shàngwǔ', hz: '上午', cls: 'time' },
            { hz: '，' },
            { py: 'māma hé wǒ', hz: '妈妈和我', cls: 'person' },
            { py: 'zuò qìchē', hz: '坐汽车', cls: 'activity' },
            { py: 'qù le shāngdiàn', hz: '去了商店', cls: 'place' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'person' },
            { py: 'mǎi le', hz: '买了', cls: 'activity' },
            { py: 'hěn duō dōngxi', hz: '很多东西', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'In the morning, my mother and I took a car to the shop, and we bought many things. / في الصباح، ذهبت أمي وأنا بالسيارة إلى المتجر، واشترينا أشياء كثيرة.'
        },
        {
          tokens: [
            { py: 'Wǎnshang', hz: '晚上', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'person' },
            { py: 'qí zìxíngchē', hz: '骑自行车', cls: 'activity' },
            { py: 'qù le gōngyuán', hz: '去了公园', cls: 'place' },
            { hz: '，' },
            { py: 'gōngyuán', hz: '公园', cls: 'place' },
            { py: 'hěn piàoliang', hz: '很漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'In the evening, we rode bicycles to the park. The park was very beautiful. / في المساء، ركبنا الدراجات إلى الحديقة، وكانت الحديقة جميلة جدًا.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de zhōumò', hz: '我的周末', cls: 'time' },
            { hz: '，' },
            { py: 'nǐ de zhōumò', hz: '你的周末', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'This is my weekend. How is your weekend? / هذه عطلة نهاية الأسبوع الخاصة بي، كيف كانت عطلتك؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “校车” 是什么意思？',
      pinyin: '“Xiàochē” shì shénme yìsi?',
      translation: 'What does “校车” mean?',
      choices: [
        { text: 'school bus / حافلة مدرسية', correct: true },
        { text: 'metro / مترو', correct: false },
        { text: 'airplane / طائرة', correct: false }
      ]
    },
    {
      question: '2. “我坐校车去学校。” 是什么意思？',
      pinyin: '“Wǒ zuò xiàochē qù xuéxiào.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I take the school bus to school.', correct: true },
        { text: 'Dad drives to the company.', correct: false },
        { text: 'My brother rides a bicycle.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你怎么去学校？',
      promptPinyin: 'Nǐ zěnme qù xuéxiào?',
      choices: [
        { text: '我坐校车去学校。', pinyin: 'Wǒ zuò xiàochē qù xuéxiào.', correct: true },
        { text: '我喜欢吃水果。', pinyin: 'Wǒ xǐhuan chī shuǐguǒ.', correct: false }
      ]
    },
    {
      question: '4. “骑自行车” 是什么意思？',
      pinyin: '“Qí zìxíngchē” shì shénme yìsi?',
      translation: 'What does “骑自行车” mean?',
      choices: [
        { text: 'ride a bicycle', correct: true },
        { text: 'take the metro', correct: false },
        { text: 'drive a car', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zuò', hz: '坐', cls: 'activity' },
        { blank: true },
        { py: 'qù xuéxiào', hz: '去学校', cls: 'place' },
        { hz: '。' }
      ],
      [
        { py: 'Bàba', hz: '爸爸', cls: 'person' },
        { py: 'kāi chē', hz: '开车', cls: 'activity' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'person' },
        { py: 'qí zìxíngchē', hz: '骑自行车', cls: 'activity' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zěnme qù', hz: '怎么去', cls: 'activity' },
        { py: 'xuéxiào', hz: '学校', cls: 'place' },
        { hz: '？' }
      ]
    ],
    translation: 'I take ______ to school. Dad drives to ______. We ride bicycles to ______. How do you go to school?',
    tip: 'Use transportation words: 校车、汽车、公共汽车、地铁、出租车、自行车。Use places: 学校、公司、公园、商店。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '我们': 'we / نحن',
    '爸爸': 'dad / أبي',
    '妈妈': 'mother / أمي',
    '哥哥': 'older brother / أخي الأكبر',
    '每天': 'every day / كل يوم',
    '今天': 'today / اليوم',
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '上午': 'morning / صباحًا',
    '晚上': 'evening / مساءً',
    '天气': 'weather / الطقس',
    '非常好': 'very good / جيد جدًا',
    '很凉快': 'very cool / بارد جدًا',
    '也很舒服': 'also very comfortable / مريح أيضًا',
    '车': 'vehicle / car / مركبة',
    '校车': 'school bus / حافلة مدرسية',
    '公共汽车': 'bus / حافلة عامة',
    '汽车': 'car / سيارة',
    '出租车': 'taxi / سيارة أجرة',
    '自行车': 'bicycle / دراجة',
    '地铁': 'metro / مترو',
    '飞机': 'airplane / طائرة',
    '火车': 'train / قطار',
    '坐': 'take / ride / يركب',
    '骑': 'ride / يركب',
    '开': 'drive / يقود',
    '开车': 'drive a car / يقود السيارة',
    '坐校车': 'take the school bus / يركب الحافلة المدرسية',
    '坐汽车': 'take a car / يركب السيارة',
    '坐地铁': 'take the metro / يركب المترو',
    '不坐地铁': 'do not take the metro / لا يركب المترو',
    '骑自行车': 'ride a bicycle / يركب الدراجة',
    '怎么去': 'how to go / كيف يذهب',
    '去学校': 'go to school / يذهب إلى المدرسة',
    '去公司': 'go to the company / يذهب إلى الشركة',
    '去公园': 'go to the park / يذهب إلى الحديقة',
    '去了商店': 'went to the shop / ذهب إلى المتجر',
    '去了公园': 'went to the park / ذهب إلى الحديقة',
    '很多东西': 'many things / أشياء كثيرة',
    '公园很漂亮': 'the park is very beautiful / الحديقة جميلة جدًا',
    '我的周末': 'my weekend / عطلة نهاية الأسبوع الخاصة بي',
    '你的周末怎么样': 'How is your weekend? / كيف كانت عطلتك؟',
    '我坐校车去学校': 'I take the school bus to school / أركب الحافلة المدرسية إلى المدرسة'
  }
};