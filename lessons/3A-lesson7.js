window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson7'] = {
  id: '3A-lesson7',
  book: '3A',
  lesson: 'Lesson 7',
  title: '动物园里有两只熊猫。',
  theme: 'Animals and Locations',
  goal: 'Describe what is in a place using 有 and measure words.',
  heroTranslation: 'There are two pandas in the zoo.',
  titleTokens: [
    { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
    { py: 'yǒu', hz: '有', cls: 'activity' },
    { py: 'liǎng zhī', hz: '两只', cls: 'time' },
    { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🦁', pinyin: 'dòngwùyuán', text: '动物园', translation: 'zoo / حديقة الحيوان' },
    { emoji: '🐾', pinyin: 'dòngwù', text: '动物', translation: 'animal / حيوان' },
    { emoji: '🐼', pinyin: 'xióngmāo', text: '熊猫', translation: 'panda / باندا' },
    { emoji: '🐪', pinyin: 'luòtuo', text: '骆驼', translation: 'camel / جمل' },
    { emoji: '🦅', pinyin: 'lièyīng', text: '猎鹰', translation: 'falcon / صقر' },
    { emoji: '2️⃣', pinyin: 'liǎng zhī', text: '两只', translation: 'two animals / اثنان من الحيوانات' },
    { emoji: '🔢', pinyin: 'hěn duō', text: '很多', translation: 'many / كثير' },
    { emoji: '📷', pinyin: 'zhàopiàn', text: '照片', translation: 'photo / صورة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
        { py: 'yǒu shénme', hz: '有什么', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What is there in the zoo? / ماذا يوجد في حديقة الحيوان؟'
    },
    {
      tokens: [
        { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { py: 'liǎng zhī xióngmāo', hz: '两只熊猫', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'There are two pandas in the zoo. / يوجد اثنان من الباندا في حديقة الحيوان.'
    },
    {
      tokens: [
        { py: 'Shāmò lǐ', hz: '沙漠里', cls: 'place' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { py: 'hěn duō luòtuo', hz: '很多骆驼', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'There are many camels in the desert. / يوجد الكثير من الجمال في الصحراء.'
    },
    {
      tokens: [
        { py: 'Wǒ zuì xǐhuān', hz: '我最喜欢', cls: 'like' },
        { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I like pandas the most. / أنا أحب الباندا أكثر شيء.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说哪里有什么',
      translation: 'There are two pandas in the zoo. There is one bird in the tree. There is one dog in the car. There are many camels in the desert.',
      tip: 'Reading Goal: Understand place + 有 + animal.',
      lines: [
        {
          tokens: [
            { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'liǎng zhī xióngmāo', hz: '两只熊猫', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are two pandas in the zoo. / يوجد اثنان من الباندا في حديقة الحيوان.'
        },
        {
          tokens: [
            { py: 'Shù shàng', hz: '树上', cls: 'location' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'yì zhī niǎo', hz: '一只鸟', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There is one bird in the tree. / يوجد طائر واحد على الشجرة.'
        },
        {
          tokens: [
            { py: 'Chē lǐ', hz: '车里', cls: 'location' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'yì zhī gǒu', hz: '一只狗', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There is one dog in the car. / يوجد كلب واحد في السيارة.'
        },
        {
          tokens: [
            { py: 'Shāmò lǐ', hz: '沙漠里', cls: 'place' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'hěn duō luòtuo', hz: '很多骆驼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are many camels in the desert. / يوجد الكثير من الجمال في الصحراء.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会聊动物园',
      translation: 'What is there in the zoo? There are two pandas in the zoo. There are also lions, tigers and birds. What animal do you like? I like pandas because pandas are very cute.',
      tip: 'Pair Work: Ask and answer about animals in the zoo.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
            { py: 'yǒu shénme', hz: '有什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What is there in the zoo? / ماذا يوجد في حديقة الحيوان؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'liǎng zhī xióngmāo', hz: '两只熊猫', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are two pandas in the zoo. / يوجد اثنان من الباندا في حديقة الحيوان.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hái yǒu', hz: '还有', cls: 'activity' },
            { py: 'shénme dòngwù', hz: '什么动物', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What other animals are there? / ما الحيوانات الأخرى الموجودة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hái yǒu', hz: '还有', cls: 'activity' },
            { py: 'shīzi', hz: '狮子', cls: 'activity' },
            { hz: '、' },
            { py: 'lǎohǔ', hz: '老虎', cls: 'activity' },
            { py: 'hé niǎo', hz: '和鸟', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are also lions, tigers and birds. / يوجد أيضًا أسود ونمور وطيور.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xǐhuān', hz: '你喜欢', cls: 'like' },
            { py: 'shénme dòngwù', hz: '什么动物', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What animal do you like? / ما الحيوان الذي تحبه؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xǐhuān', hz: '我喜欢', cls: 'like' },
            { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like pandas. / أنا أحب الباندا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wèishénme', hz: '为什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Why? / لماذا؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
            { py: 'hěn kěài', hz: '很可爱', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because pandas are very cute. / لأن الباندا لطيفة جدًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲动物园经历',
      translation: 'On the weekend, I went to the zoo. There are two pandas in the zoo. There is one bird in the tree. There are also lions and tigers in the zoo. I like pandas the most because pandas are very cute. I took many photos.',
      tip: 'Speaking Goal: Talk about a zoo visit using 有.',
      lines: [
        {
          tokens: [
            { py: 'Zhōumò', hz: '周末', cls: 'time' },
            { py: 'wǒ qù le', hz: '我去了', cls: 'self' },
            { py: 'dòngwùyuán', hz: '动物园', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'On the weekend, I went to the zoo. / في عطلة نهاية الأسبوع، ذهبت إلى حديقة الحيوان.'
        },
        {
          tokens: [
            { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'liǎng zhī xióngmāo', hz: '两只熊猫', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are two pandas in the zoo. / يوجد اثنان من الباندا في حديقة الحيوان.'
        },
        {
          tokens: [
            { py: 'Shù shàng', hz: '树上', cls: 'location' },
            { py: 'yǒu', hz: '有', cls: 'activity' },
            { py: 'yì zhī niǎo', hz: '一只鸟', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There is one bird in the tree. / يوجد طائر واحد على الشجرة.'
        },
        {
          tokens: [
            { py: 'Dòngwùyuán lǐ', hz: '动物园里', cls: 'place' },
            { py: 'hái yǒu', hz: '还有', cls: 'activity' },
            { py: 'shīzi hé lǎohǔ', hz: '狮子和老虎', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are also lions and tigers in the zoo. / يوجد أيضًا أسود ونمور في حديقة الحيوان.'
        },
        {
          tokens: [
            { py: 'Wǒ zuì xǐhuān', hz: '我最喜欢', cls: 'like' },
            { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like pandas the most. / أنا أحب الباندا أكثر شيء.'
        },
        {
          tokens: [
            { py: 'Yīnwèi', hz: '因为', cls: 'time' },
            { py: 'xióngmāo', hz: '熊猫', cls: 'activity' },
            { py: 'hěn kěài', hz: '很可爱', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Because pandas are very cute. / لأن الباندا لطيفة جدًا.'
        },
        {
          tokens: [
            { py: 'Wǒ pāi le', hz: '我拍了', cls: 'self' },
            { py: 'hěn duō zhàopiàn', hz: '很多照片', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I took many photos. / التقطت الكثير من الصور.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “动物园” 是什么意思？',
      pinyin: '“Dòngwùyuán” shì shénme yìsi?',
      translation: 'What does “动物园” mean?',
      choices: [
        { text: 'zoo', correct: true },
        { text: 'school', correct: false },
        { text: 'mall', correct: false }
      ]
    },
    {
      question: '2. “动物园里有两只熊猫。” 是什么意思？',
      pinyin: '“Dòngwùyuán lǐ yǒu liǎng zhī xióngmāo.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'There are two pandas in the zoo.', correct: true },
        { text: 'There is one bird in the tree.', correct: false },
        { text: 'There are many camels in the desert.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “camel”？',
      pinyin: 'Nǎ yí ge shì “camel”?',
      translation: 'Which one means “camel”?',
      choices: [
        { text: '骆驼', correct: true },
        { text: '熊猫', correct: false },
        { text: '鸟', correct: false }
      ]
    },
    {
      question: '4. “很可爱” 是什么意思？',
      pinyin: '“Hěn kěài” shì shénme yìsi?',
      translation: 'What does “很可爱” mean?',
      choices: [
        { text: 'very cute', correct: true },
        { text: 'very expensive', correct: false },
        { text: 'very far', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ qù le', hz: '我去了', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'lǐ yǒu', hz: '里有', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'shàng yǒu', hz: '上有', cls: 'location' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuān', hz: '我喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yīnwèi', hz: '因为', cls: 'time' },
        { blank: true },
        { py: 'hěn kěài', hz: '很可爱', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'I went to ______. There is/are ______ in ______. There is/are ______ on ______. I like ______ because ______ is very cute.',
    tip: 'Use: 动物园、公园、沙漠、树、熊猫、骆驼、猎鹰、鸟、狗、猫、两只、很多。'
  },

  meanings: {
    '动物园': 'zoo / حديقة الحيوان',
    '动物园里': 'in the zoo / في حديقة الحيوان',
    '动物': 'animal / حيوان',
    '有什么': 'what is there / ماذا يوجد',
    '有': 'there is; there are / يوجد',
    '两只': 'two animals / اثنان من الحيوانات',
    '两只熊猫': 'two pandas / اثنان من الباندا',
    '熊猫': 'panda / باندا',
    '骆驼': 'camel / جمل',
    '猎鹰': 'falcon / صقر',
    '很多': 'many / كثير',
    '很多骆驼': 'many camels / الكثير من الجمال',
    '照片': 'photo / صورة',
    '很多照片': 'many photos / الكثير من الصور',
    '树上': 'in the tree; on the tree / على الشجرة',
    '一只鸟': 'one bird / طائر واحد',
    '车里': 'in the car / في السيارة',
    '一只狗': 'one dog / كلب واحد',
    '沙漠里': 'in the desert / في الصحراء',
    '还有': 'also have / يوجد أيضًا',
    '什么动物': 'what animal / أي حيوان',
    '狮子': 'lion / أسد',
    '老虎': 'tiger / نمر',
    '鸟': 'bird / طائر',
    '狮子和老虎': 'lions and tigers / أسود ونمور',
    '和鸟': 'and birds / وطيور',
    '你喜欢': 'you like / أنت تحب',
    '我喜欢': 'I like / أنا أحب',
    '我最喜欢': 'I like the most / أحب أكثر شيء',
    '为什么': 'why / لماذا',
    '因为': 'because / لأن',
    '很可爱': 'very cute / لطيف جدًا',
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '我去了': 'I went to / ذهبت إلى',
    '我拍了': 'I took / التقطت',
    '里有': 'inside there is / يوجد في',
    '上有': 'on there is / يوجد على'
  }
};