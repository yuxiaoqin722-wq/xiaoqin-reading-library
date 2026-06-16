window.LESSONS = window.LESSONS || {};

window.LESSONS['2C-lesson5'] = {
  id: '2C-lesson5',
  book: '2C',
  lesson: 'Lesson 5',
  title: '我家在学校的旁边。',
  theme: 'Home, school, and transportation',
  goal: 'Talk about location and how to come to school.',
  heroTranslation: 'My home is next to the school.',
  titleTokens: [
    { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
    { py: 'zài', hz: '在', cls: 'location' },
    { py: 'xuéxiào de pángbiān', hz: '学校的旁边', cls: 'place' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏠', pinyin: 'wǒ jiā', text: '我家', translation: 'my home / بيتي' },
    { emoji: '🏫', pinyin: 'xuéxiào', text: '学校', translation: 'school / مدرسة' },
    { emoji: '🏪', pinyin: 'shāngdiàn', text: '商店', translation: 'shop / متجر' },
    { emoji: '📍', pinyin: 'pángbiān', text: '旁边', translation: 'next to / بجانب' },
    { emoji: '📏', pinyin: 'lí', text: '离', translation: 'away from / يبعد عن' },
    { emoji: '✅', pinyin: 'jìn', text: '近', translation: 'near / قريب' },
    { emoji: '↔️', pinyin: 'yuǎn', text: '远', translation: 'far / بعيد' },
    { emoji: '🚌', pinyin: 'zuò xiàochē', text: '坐校车', translation: 'take the school bus / يركب الحافلة المدرسية' },
    { emoji: '🔁', pinyin: 'měi tiān', text: '每天', translation: 'every day / كل يوم' },
    { emoji: '❓', pinyin: 'zěnme lái', text: '怎么来', translation: 'how to come / كيف يأتي' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'xuéxiào de pángbiān', hz: '学校的旁边', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'My home is next to the school. / بيتي بجانب المدرسة.'
    },
    {
      tokens: [
        { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
        { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
        { py: 'bù yuǎn', hz: '不远', cls: 'location' },
        { hz: '。' }
      ],
      translation: 'My home is not far from school. / بيتي ليس بعيدًا عن المدرسة.'
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zěnme lái', hz: '怎么来', cls: 'activity' },
        { py: 'xuéxiào', hz: '学校', cls: 'place' },
        { hz: '？' }
      ],
      translation: 'How do you come to school? / كيف تأتي إلى المدرسة؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说位置',
      translation: 'My home is next to the school. The shop is next to the school. My home is near the school.',
      tip: 'Reading Goal: Understand “在……旁边” and “离……近”.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào de pángbiān', hz: '学校的旁边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'My home is next to the school. / بيتي بجانب المدرسة.'
        },
        {
          tokens: [
            { py: 'Shāngdiàn', hz: '商店', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào de pángbiān', hz: '学校的旁边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The shop is next to the school. / المتجر بجانب المدرسة.'
        },
        {
          tokens: [
            { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
            { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
            { py: 'hěn jìn', hz: '很近', cls: 'location' },
            { hz: '。' }
          ],
          translation: 'My home is near the school. / بيتي قريب من المدرسة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问怎么来学校',
      translation: 'How do you come to school? I take the school bus to school. Is your home far from school? Not far. My home is next to the school. Do you take the school bus every day? Yes, I take the school bus to school every day.',
      tip: 'Pair Work: Ask about home location and how to come to school.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zěnme lái', hz: '怎么来', cls: 'activity' },
            { py: 'xuéxiào', hz: '学校', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'How do you come to school? / كيف تأتي إلى المدرسة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { py: 'lái xuéxiào', hz: '来学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I take the school bus to school. / أركب الحافلة المدرسية إلى المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ jiā', hz: '你家', cls: 'place' },
            { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
            { py: 'yuǎn ma', hz: '远吗', cls: 'location' },
            { hz: '？' }
          ],
          translation: 'Is your home far from school? / هل بيتك بعيد عن المدرسة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Bù yuǎn', hz: '不远', cls: 'location' },
            { hz: '，' },
            { py: 'wǒ jiā', hz: '我家', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'xuéxiào de pángbiān', hz: '学校的旁边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Not far. My home is next to the school. / ليس بعيدًا، بيتي بجانب المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👩', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'měi tiān', hz: '每天', cls: 'time' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { py: 'lái ma', hz: '来吗' },
            { hz: '？' }
          ],
          translation: 'Do you take the school bus every day? / هل تركب الحافلة المدرسية كل يوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duì', hz: '对', cls: 'like' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'měi tiān', hz: '每天', cls: 'time' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { py: 'lái xuéxiào', hz: '来学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Yes, I take the school bus to school every day. / نعم، أركب الحافلة المدرسية إلى المدرسة كل يوم.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的家和上学方式',
      translation: 'My home is not far from school. My home is next to a shop. Every morning, my older brother and I go out together. My older brother takes a car to the company, and I take the school bus to school. After school, my mother and I go to the shop to buy things. I like taking the school bus because it is very convenient.',
      tip: 'Speaking Goal: Describe where your home is and how you come to school.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
            { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
            { py: 'bù yuǎn', hz: '不远', cls: 'location' },
            { hz: '。' }
          ],
          translation: 'My home is not far from school. / بيتي ليس بعيدًا عن المدرسة.'
        },
        {
          tokens: [
            { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'shāngdiàn de pángbiān', hz: '商店的旁边', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'My home is next to a shop. / بيتي بجانب متجر.'
        },
        {
          tokens: [
            { py: 'Měi tiān zǎoshang', hz: '每天早上', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'gēge', hz: '哥哥', cls: 'person' },
            { py: 'yìqǐ chūmén', hz: '一起出门', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Every morning, my older brother and I go out together. / كل صباح أخرج أنا وأخي الأكبر معًا.'
        },
        {
          tokens: [
            { py: 'Gēge', hz: '哥哥', cls: 'person' },
            { py: 'zuò qìchē', hz: '坐汽车', cls: 'activity' },
            { py: 'qù gōngsī', hz: '去公司', cls: 'place' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { py: 'lái xuéxiào', hz: '来学校', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'My older brother takes a car to the company, and I take the school bus to school. / أخي الأكبر يركب السيارة إلى الشركة، وأنا أركب الحافلة المدرسية إلى المدرسة.'
        },
        {
          tokens: [
            { py: 'Fàngxué yǐhòu', hz: '放学以后', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'māma', hz: '妈妈', cls: 'person' },
            { py: 'qù shāngdiàn', hz: '去商店', cls: 'place' },
            { py: 'mǎi dōngxi', hz: '买东西', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After school, my mother and I go to the shop to buy things. / بعد المدرسة، أذهب أنا وأمي إلى المتجر لشراء الأشياء.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'xǐhuan', hz: '喜欢', cls: 'like' },
            { py: 'zuò xiàochē', hz: '坐校车', cls: 'activity' },
            { hz: '，' },
            { py: 'yīnwèi', hz: '因为' },
            { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I like taking the school bus because it is very convenient. / أحب ركوب الحافلة المدرسية لأنها مريحة جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “旁边” 是什么意思？',
      pinyin: '“Pángbiān” shì shénme yìsi?',
      translation: 'What does “旁边” mean?',
      choices: [
        { text: 'next to / بجانب', correct: true },
        { text: 'far / بعيد', correct: false },
        { text: 'come / يأتي', correct: false }
      ]
    },
    {
      question: '2. “我家在学校的旁边。” 是什么意思？',
      pinyin: '“Wǒ jiā zài xuéxiào de pángbiān.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'My home is next to the school.', correct: true },
        { text: 'I take the school bus to school.', correct: false },
        { text: 'My home is far from school.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你怎么来学校？',
      promptPinyin: 'Nǐ zěnme lái xuéxiào?',
      choices: [
        { text: '我坐校车来学校。', pinyin: 'Wǒ zuò xiàochē lái xuéxiào.', correct: true },
        { text: '我喜欢吃水果。', pinyin: 'Wǒ xǐhuan chī shuǐguǒ.', correct: false }
      ]
    },
    {
      question: '4. “我家离学校不远。” 是什么意思？',
      pinyin: '“Wǒ jiā lí xuéxiào bù yuǎn.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'My home is not far from school.', correct: true },
        { text: 'My home is very far from school.', correct: false },
        { text: 'The shop is next to the school.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { blank: true },
        { py: 'de pángbiān', hz: '的旁边', cls: 'place' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ jiā', hz: '我家', cls: 'place' },
        { py: 'lí', hz: '离', cls: 'location' },
        { blank: true },
        { py: 'bù yuǎn', hz: '不远', cls: 'location' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'měi tiān', hz: '每天', cls: 'time' },
        { blank: true },
        { py: 'lái xuéxiào', hz: '来学校', cls: 'place' },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zěnme lái', hz: '怎么来', cls: 'activity' },
        { py: 'xuéxiào', hz: '学校', cls: 'place' },
        { hz: '？' }
      ]
    ],
    translation: 'My home is next to ______. My home is not far from ______. I come to school by ______ every day. How do you come to school?',
    tip: 'Use words: 学校、商店、家、坐校车、坐汽车。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '妈妈': 'mother / أمي',
    '哥哥': 'older brother / أخي الأكبر',
    '我家': 'my home / بيتي',
    '你家': 'your home / بيتك',
    '学校': 'school / مدرسة',
    '商店': 'shop / متجر',
    '公司': 'company / شركة',
    '在': 'at / in / في',
    '旁边': 'next to / بجانب',
    '学校的旁边': 'next to the school / بجانب المدرسة',
    '商店的旁边': 'next to the shop / بجانب المتجر',
    '离': 'away from / يبعد عن',
    '近': 'near / قريب',
    '远': 'far / بعيد',
    '很近': 'very near / قريب جدًا',
    '不远': 'not far / ليس بعيدًا',
    '每天': 'every day / كل يوم',
    '每天早上': 'every morning / كل صباح',
    '怎么来': 'how to come / كيف يأتي',
    '来学校': 'come to school / يأتي إلى المدرسة',
    '坐校车': 'take the school bus / يركب الحافلة المدرسية',
    '坐汽车': 'take a car / يركب السيارة',
    '去公司': 'go to the company / يذهب إلى الشركة',
    '去商店': 'go to the shop / يذهب إلى المتجر',
    '买东西': 'buy things / يشتري أشياء',
    '放学以后': 'after school / بعد المدرسة',
    '一起出门': 'go out together / يخرج معًا',
    '喜欢': 'like / يحب',
    '因为': 'because / لأن',
    '很方便': 'very convenient / مريح جدًا',
    '我家在学校的旁边': 'My home is next to the school / بيتي بجانب المدرسة',
    '我家离学校不远': 'My home is not far from school / بيتي ليس بعيدًا عن المدرسة'
  }
};