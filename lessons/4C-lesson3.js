window.LESSONS = window.LESSONS || {};

window.LESSONS['4C-lesson3'] = {
  id: '4C-lesson3',
  book: '4C',
  lesson: 'Lesson 3',
  title: '我们从早到晚都在一起。',
  theme: 'Living Environment and Moving House',
  goal: 'Describe living environments, distance and changes using 从……到…….',
  heroTranslation: 'We are together from morning to night.',

  titleTokens: [
    { py: 'Wǒmen', hz: '我们', cls: 'self' },
    { py: 'cóng zǎo dào wǎn', hz: '从早到晚', cls: 'time' },
    { py: 'dōu zài yìqǐ', hz: '都在一起', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏙️', pinyin: 'shì zhōngxīn', text: '市中心', translation: 'city center / وسط المدينة' },
    { emoji: '📍', pinyin: 'fùjìn', text: '附近', translation: 'nearby / بالقرب' },
    { emoji: '🛒', pinyin: 'chāoshì', text: '超市', translation: 'supermarket / سوبرماركت' },
    { emoji: '🍜', pinyin: 'fàndiàn', text: '饭店', translation: 'restaurant / مطعم' },
    { emoji: '👍', pinyin: 'fāngbiàn', text: '方便', translation: 'convenient / مريح' },
    { emoji: '📦', pinyin: 'bānjiā', text: '搬家', translation: 'move house / الانتقال من المنزل' },
    { emoji: '🌳', pinyin: 'ānjìng', text: '安静', translation: 'quiet / هادئ' },
    { emoji: '🔊', pinyin: 'chǎo', text: '吵', translation: 'noisy / مزعج' },
    { emoji: '☀️', pinyin: 'rèqíng', text: '热情', translation: 'warm-hearted / ودود ومتحمس' },
    { emoji: '🏠', pinyin: 'línjū', text: '邻居', translation: 'neighbor / جار' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Xiànzài zhù de dìfang', hz: '现在住的地方', cls: 'place' },
        { py: 'búdàn ānjìng', hz: '不但安静', cls: 'like' },
        { hz: '，' },
        { py: 'érqiě shàngxué', hz: '而且上学', cls: 'activity' },
        { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'The place where I live now is not only quiet, but also convenient for going to school. / المكان الذي أعيش فيه الآن ليس هادئًا فقط، بل الذهاب إلى المدرسة منه مريح أيضًا.'
    },
    {
      tokens: [
        { py: 'Cóng wǒ jiā', hz: '从我家', cls: 'place' },
        { py: 'dào tā jiā', hz: '到她家', cls: 'place' },
        { hz: '，' },
        { py: 'zǒulù shí fēnzhōng', hz: '走路十分钟', cls: 'time' },
        { py: 'jiù dào le', hz: '就到了', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'From my home to her home, it takes only ten minutes on foot. / من بيتي إلى بيتها، أصل مشيًا خلال عشر دقائق فقط.'
    },
    {
      tokens: [
        { py: 'Línjūmen', hz: '邻居们', cls: 'person' },
        { py: 'dōu hěn rèqíng', hz: '都很热情', cls: 'like' },
        { hz: '，' },
        { py: 'chángcháng', hz: '常常', cls: 'time' },
        { py: 'bāngzhù wǒmen', hz: '帮助我们', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'The neighbors are all warm-hearted and often help us. / الجيران جميعهم ودودون وغالبًا يساعدوننا.'
    },
    {
      tokens: [
        { py: 'Fùjìn yǒu', hz: '附近有', cls: 'place' },
        { py: 'hěn duō shāngdiàn', hz: '很多商店', cls: 'place' },
        { hz: '，' },
        { py: 'fàndiàn', hz: '饭店', cls: 'place' },
        { py: 'hé chāoshì', hz: '和超市', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'There are many shops, restaurants and supermarkets nearby. / يوجد بالقرب الكثير من المتاجر والمطاعم والسوبرماركت.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会描述以前和现在住的地方',
      translation: 'I used to live in the city center. There were many shops, restaurants and supermarkets nearby. Living in that place was very convenient. But it was far from school, so we moved. The place where we live now is not only quiet, but also convenient for going to school.',
      tip: 'Reading Goal: Describe a living environment and explain why it changed.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ yǐqián', hz: '我以前', cls: 'time' },
            { py: 'zhù zài', hz: '住在', cls: 'place' },
            { py: 'shì zhōngxīn', hz: '市中心', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I used to live in the city center. / كنت أعيش سابقًا في وسط المدينة.'
        },
        {
          tokens: [
            { py: 'Fùjìn yǒu', hz: '附近有', cls: 'place' },
            { py: 'hěn duō shāngdiàn', hz: '很多商店', cls: 'place' },
            { hz: '，' },
            { py: 'fàndiàn', hz: '饭店', cls: 'place' },
            { py: 'hé chāoshì', hz: '和超市', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'There were many shops, restaurants and supermarkets nearby. / كان هناك بالقرب الكثير من المتاجر والمطاعم والسوبرماركت.'
        },
        {
          tokens: [
            { py: 'Zài zhè ge dìfang', hz: '在这个地方', cls: 'place' },
            { py: 'shēnghuó', hz: '生活', cls: 'activity' },
            { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Living in this place was very convenient. / كانت الحياة في هذا المكان مريحة جدًا.'
        },
        {
          tokens: [
            { py: 'Dànshì', hz: '但是', cls: 'speaker' },
            { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
            { py: 'hěn yuǎn', hz: '很远', cls: 'not-like' },
            { hz: '，' },
            { py: 'suǒyǐ wǒmen', hz: '所以我们', cls: 'self' },
            { py: 'bān jiā le', hz: '搬家了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'But it was far from school, so we moved. / لكن كان بعيدًا عن المدرسة، لذلك انتقلنا من المنزل.'
        },
        {
          tokens: [
            { py: 'Xiànzài zhù de dìfang', hz: '现在住的地方', cls: 'place' },
            { py: 'búdàn ānjìng', hz: '不但安静', cls: 'like' },
            { hz: '，' },
            { py: 'érqiě shàngxué', hz: '而且上学', cls: 'activity' },
            { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The place where we live now is not only quiet, but also convenient for going to school. / المكان الذي نعيش فيه الآن ليس هادئًا فقط، بل الذهاب إلى المدرسة منه مريح أيضًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会采访居住环境',
      translation: 'Where did you live before? I used to live in the city center. What was it like there? There were many shops, restaurants and supermarkets nearby. Life was very convenient. Then why did you move? Because it was too far from school. What is the place where you live now like? The place where I live now is not only quiet, but also convenient for going to school. Are the neighbors nice? Yes, the neighbors are all warm-hearted and friendly.',
      tip: 'Pair Work: Ask your partner about where they lived before and where they live now.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǐqián', hz: '你以前', cls: 'time' },
            { py: 'zhù zài nǎlǐ', hz: '住在哪里', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where did you live before? / أين كنت تعيش من قبل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yǐqián', hz: '我以前', cls: 'time' },
            { py: 'zhù zài', hz: '住在', cls: 'place' },
            { py: 'shì zhōngxīn', hz: '市中心', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I used to live in the city center. / كنت أعيش سابقًا في وسط المدينة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nàlǐ', hz: '那里', cls: 'place' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What was it like there? / كيف كان ذلك المكان؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Fùjìn yǒu', hz: '附近有', cls: 'place' },
            { py: 'hěn duō shāngdiàn', hz: '很多商店', cls: 'place' },
            { hz: '，' },
            { py: 'fàndiàn', hz: '饭店', cls: 'place' },
            { py: 'hé chāoshì', hz: '和超市', cls: 'place' },
            { hz: '，' },
            { py: 'shēnghuó', hz: '生活', cls: 'activity' },
            { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'There were many shops, restaurants and supermarkets nearby, and life was very convenient. / كان هناك بالقرب الكثير من المتاجر والمطاعم والسوبرماركت، وكانت الحياة مريحة جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nà nǐmen', hz: '那你们', cls: 'self' },
            { py: 'wèishénme', hz: '为什么', cls: 'speaker' },
            { py: 'bān jiā le', hz: '搬家了', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Then why did you move? / إذن لماذا انتقلتم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yīnwèi', hz: '因为', cls: 'speaker' },
            { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
            { py: 'tài yuǎn le', hz: '太远了', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Because it was too far from school. / لأنه كان بعيدًا جدًا عن المدرسة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài zhù de dìfang', hz: '现在住的地方', cls: 'place' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What is the place where you live now like? / كيف هو المكان الذي تعيش فيه الآن؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xiànzài zhù de dìfang', hz: '现在住的地方', cls: 'place' },
            { py: 'búdàn ānjìng', hz: '不但安静', cls: 'like' },
            { hz: '，' },
            { py: 'érqiě shàngxué', hz: '而且上学', cls: 'activity' },
            { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The place where I live now is not only quiet, but also convenient for going to school. / المكان الذي أعيش فيه الآن ليس هادئًا فقط، بل الذهاب إلى المدرسة منه مريح أيضًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Línjū', hz: '邻居', cls: 'person' },
            { py: 'hǎo ma', hz: '好吗', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'Are the neighbors nice? / هل الجيران طيبون؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn hǎo', hz: '很好', cls: 'like' },
            { hz: '，' },
            { py: 'línjūmen', hz: '邻居们', cls: 'person' },
            { py: 'dōu hěn rèqíng', hz: '都很热情', cls: 'like' },
            { hz: '，' },
            { py: 'yě hěn yǒuhǎo', hz: '也很友好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'They are very nice. The neighbors are warm-hearted and friendly. / إنهم طيبون جدًا. الجيران ودودون ومتحمسون.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍居住环境的变化',
      translation: 'Before, my family and I lived in the city center. There were many shops, restaurants and supermarkets nearby, so life was very convenient. But that place was also a little noisy, and it was far from school. Every day, going to school took a long time. So, we moved. Now, the place where we live is not only quiet, but also convenient for going to school. The neighbors are warm-hearted and often help us. What makes me even happier is that my new friend lives very close to my home. From my home to her home, it takes only ten minutes on foot. On weekends, we often study together and play together.',
      tip: 'Speaking Goal: Compare where you lived before and where you live now.',
      lines: [
        {
          tokens: [
            { py: 'Yǐqián', hz: '以前', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ hé jiārén', hz: '我和家人', cls: 'person' },
            { py: 'zhù zài', hz: '住在', cls: 'place' },
            { py: 'shì zhōngxīn', hz: '市中心', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Before, my family and I lived in the city center. / من قبل، كنت أنا وعائلتي نعيش في وسط المدينة.'
        },
        {
          tokens: [
            { py: 'Fùjìn yǒu', hz: '附近有', cls: 'place' },
            { py: 'hěn duō shāngdiàn', hz: '很多商店', cls: 'place' },
            { hz: '，' },
            { py: 'fàndiàn', hz: '饭店', cls: 'place' },
            { py: 'hé chāoshì', hz: '和超市', cls: 'place' },
            { hz: '，' },
            { py: 'suǒyǐ shēnghuó', hz: '所以生活', cls: 'activity' },
            { py: 'hěn fāngbiàn', hz: '很方便', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'There were many shops, restaurants and supermarkets nearby, so life was very convenient. / كان هناك بالقرب الكثير من المتاجر والمطاعم والسوبرماركت، لذلك كانت الحياة مريحة جدًا.'
        },
        {
          tokens: [
            { py: 'Dànshì', hz: '但是', cls: 'speaker' },
            { py: 'nà ge dìfang', hz: '那个地方', cls: 'place' },
            { py: 'yě yǒu diǎnr chǎo', hz: '也有点儿吵', cls: 'not-like' },
            { hz: '，' },
            { py: 'érqiě lí xuéxiào', hz: '而且离学校', cls: 'place' },
            { py: 'hěn yuǎn', hz: '很远', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'But that place was also a little noisy, and it was far from school. / لكن ذلك المكان كان مزعجًا قليلًا، وكان بعيدًا عن المدرسة.'
        },
        {
          tokens: [
            { py: 'Měi tiān', hz: '每天', cls: 'time' },
            { py: 'shàngxué', hz: '上学', cls: 'activity' },
            { py: 'xūyào', hz: '需要', cls: 'speaker' },
            { py: 'hěn cháng shíjiān', hz: '很长时间', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Every day, going to school took a long time. / كل يوم كان الذهاب إلى المدرسة يحتاج وقتًا طويلًا.'
        },
        {
          tokens: [
            { py: 'Suǒyǐ', hz: '所以', cls: 'speaker' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'bān jiā le', hz: '搬家了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'So, we moved. / لذلك انتقلنا من المنزل.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen zhù de dìfang', hz: '我们住的地方', cls: 'place' },
            { py: 'búdàn ānjìng', hz: '不但安静', cls: 'like' },
            { hz: '，' },
            { py: 'érqiě shàngxué', hz: '而且上学', cls: 'activity' },
            { py: 'hěn fāngbiàn', hz: '很方便。', cls: 'like' },
           
          ],
          translation: 'Now, the place where we live is not only quiet, but also convenient for going to school. / الآن، المكان الذي نعيش فيه ليس هادئًا فقط، بل الذهاب إلى المدرسة منه مريح أيضًا.'
        },
        {
          tokens: [
            { py: 'Línjūmen', hz: '邻居们', cls: 'person' },
            { py: 'dōu hěn rèqíng', hz: '都很热情', cls: 'like' },
            { hz: '，' },
            { py: 'chángcháng', hz: '常常', cls: 'time' },
            { py: 'bāngzhù wǒmen', hz: '帮助我们', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The neighbors are warm-hearted and often help us. / الجيران ودودون وغالبًا يساعدوننا.'
        },
        {
          tokens: [
            { py: 'Gèng kāixīn de shì', hz: '更开心的是', cls: 'like' },
            { hz: '，' },
            { py: 'wǒ de xīn péngyou', hz: '我的新朋友', cls: 'person' },
            { py: 'zhù de lí wǒ jiā', hz: '住得离我家', cls: 'place' },
            { py: 'hěn jìn', hz: '很近', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'What makes me even happier is that my new friend lives very close to my home. / الأمر الأكثر سعادة هو أن صديقتي الجديدة تسكن قريبة جدًا من بيتي.'
        },
        {
          tokens: [
            { py: 'Cóng wǒ jiā', hz: '从我家', cls: 'place' },
            { py: 'dào tā jiā', hz: '到她家', cls: 'place' },
            { hz: '，' },
            { py: 'zǒulù shí fēnzhōng', hz: '走路十分钟', cls: 'time' },
            { py: 'jiù dào le', hz: '就到了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'From my home to her home, it takes only ten minutes on foot. / من بيتي إلى بيتها، أصل مشيًا خلال عشر دقائق فقط.'
        },
        {
          tokens: [
            { py: 'Zhōumò', hz: '周末', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen chángcháng', hz: '我们常常', cls: 'self' },
            { py: 'yìqǐ xuéxí', hz: '一起学习', cls: 'activity' },
            { hz: '，' },
            { py: 'yìqǐ wán', hz: '一起玩', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'On weekends, we often study together and play together. / في عطلة نهاية الأسبوع، غالبًا ندرس معًا ونلعب معًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我们从早到晚都在一起。” 是什么意思？',
      pinyin: '“Wǒmen cóng zǎo dào wǎn dōu zài yìqǐ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We are together from morning to night.', correct: true },
        { text: 'We only meet in the morning.', correct: false },
        { text: 'We do not live nearby.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “city center”？',
      pinyin: 'Nǎ yí ge shì “city center”?',
      translation: 'Which one means “city center”?',
      choices: [
        { text: '市中心', correct: true },
        { text: '邻居', correct: false },
        { text: '安静', correct: false }
      ]
    },
    {
      question: '3. “现在住的地方不但安静，而且上学很方便。” 是什么意思？',
      pinyin: '“Xiànzài zhù de dìfang búdàn ānjìng, érqiě shàngxué hěn fāngbiàn.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The place where I live now is quiet and convenient for school.', correct: true },
        { text: 'The place where I live now is noisy and far away.', correct: false },
        { text: 'I do not like my new home.', correct: false }
      ]
    },
    {
      question: '4. C层中，为什么“我们”搬家了？',
      pinyin: 'C céng zhōng, wèishénme “wǒmen” bān jiā le?',
      translation: 'In Level C, why did “we” move house?',
      choices: [
        { text: '因为以前住的地方离学校很远。', correct: true },
        { text: '因为附近没有朋友。', correct: false },
        { text: '因为邻居不友好。', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ yǐqián', hz: '我以前', cls: 'time' },
        { py: 'zhù zài', hz: '住在', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Fùjìn yǒu', hz: '附近有', cls: 'place' },
        { blank: true },
        { hz: '，' },
        { py: 'shēnghuó', hz: '生活', cls: 'activity' },
        { py: 'hěn', hz: '很', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Dànshì', hz: '但是', cls: 'speaker' },
        { py: 'lí xuéxiào', hz: '离学校', cls: 'place' },
        { blank: true },
        { hz: '，' },
        { py: 'suǒyǐ wǒmen', hz: '所以我们', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Xiànzài zhù de dìfang', hz: '现在住的地方', cls: 'place' },
        { py: 'búdàn', hz: '不但', cls: 'speaker' },
        { blank: true },
        { hz: '，' },
        { py: 'érqiě', hz: '而且', cls: 'speaker' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Cóng wǒ jiā', hz: '从我家', cls: 'place' },
        { py: 'dào xuéxiào', hz: '到学校', cls: 'place' },
        { hz: '，' },
        { blank: true },
        { py: 'jiù dào le', hz: '就到了', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'I used to live in ______. There are ______ nearby, and life is very ______. But it is ______ from school, so we ______. The place where I live now is not only ______, but also ______. From my home to school, ______ and I arrive.',
    tip: 'Use: 市中心、很多商店、方便、很远、搬家了、安静、上学很方便、坐车十五分钟。'
  },

  meanings: {
    '市中心': 'city center / وسط المدينة',
    '附近': 'nearby / بالقرب',
    '附近有': 'there is/are nearby / يوجد بالقرب',
    '超市': 'supermarket / سوبرماركت',
    '饭店': 'restaurant / مطعم',
    '商店': 'shop / متجر',
    '很多商店': 'many shops / الكثير من المتاجر',
    '饭店和超市': 'restaurants and supermarkets / المطاعم والسوبرماركت',
    '方便': 'convenient / مريح',
    '很方便': 'very convenient / مريح جدًا',
    '搬家': 'move house / الانتقال من المنزل',
    '搬家了': 'moved house / انتقلنا من المنزل',
    '安静': 'quiet / هادئ',
    '不但安静': 'not only quiet / ليس هادئًا فقط',
    '吵': 'noisy / مزعج',
    '有点儿吵': 'a little noisy / مزعج قليلًا',
    '热情': 'warm-hearted / ودود ومتحمس',
    '都很热情': 'all warm-hearted / جميعهم ودودون',
    '邻居': 'neighbor / جار',
    '邻居们': 'neighbors / الجيران',
    '友好': 'friendly / ودود',
    '也很友好': 'also friendly / ودود أيضًا',
    '我以前': 'I before / أنا من قبل',
    '以前': 'before / من قبل',
    '现在': 'now / الآن',
    '住在': 'live in / يعيش في',
    '住在哪里': 'live where / يعيش أين',
    '我以前住在市中心': 'I used to live in the city center / كنت أعيش سابقًا في وسط المدينة',
    '在那里': 'there / هناك',
    '那个地方': 'that place / ذلك المكان',
    '在这个地方': 'in this place / في هذا المكان',
    '现在住的地方': 'the place where I live now / المكان الذي أعيش فيه الآن',
    '生活': 'life; live / الحياة',
    '生活很方便': 'life is very convenient / الحياة مريحة جدًا',
    '但是': 'but / لكن',
    '离学校': 'from school / عن المدرسة',
    '很远': 'very far / بعيد جدًا',
    '太远了': 'too far / بعيد جدًا',
    '所以': 'so / لذلك',
    '所以我们': 'so we / لذلك نحن',
    '上学': 'go to school / الذهاب إلى المدرسة',
    '而且上学': 'and going to school / وأيضًا الذهاب إلى المدرسة',
    '上学很方便': 'going to school is convenient / الذهاب إلى المدرسة مريح',
    '不但安静，而且上学很方便': 'not only quiet, but also convenient for going to school / ليس هادئًا فقط، بل الذهاب إلى المدرسة منه مريح أيضًا',
    '你以前': 'you before / أنت من قبل',
    '那里怎么样': 'what was it like there / كيف كان ذلك المكان',
    '为什么': 'why / لماذا',
    '那你们为什么搬家了': 'then why did you move / إذن لماذا انتقلتم',
    '邻居好吗': 'are the neighbors nice / هل الجيران طيبون',
    '很好': 'very good / جيد جدًا',
    '帮助我们': 'help us / يساعدوننا',
    '常常帮助我们': 'often help us / غالبًا يساعدوننا',
    '我和家人': 'my family and I / أنا وعائلتي',
    '所以生活': 'so life / لذلك الحياة',
    '每天': 'every day / كل يوم',
    '需要': 'need / يحتاج',
    '很长时间': 'a long time / وقت طويل',
    '我的新朋友': 'my new friend / صديقتي الجديدة',
    '更开心的是': 'what makes me even happier is / الأمر الأكثر سعادة هو',
    '住得离我家': 'lives from my home / تسكن من بيتي',
    '很近': 'very close / قريب جدًا',
    '从我家': 'from my home / من بيتي',
    '到她家': 'to her home / إلى بيتها',
    '从我家到她家': 'from my home to her home / من بيتي إلى بيتها',
    '走路十分钟': 'ten minutes on foot / عشر دقائق مشيًا',
    '就到了': 'then arrive / يصل',
    '周末': 'weekend / عطلة نهاية الأسبوع',
    '我们常常': 'we often / نحن غالبًا',
    '一起学习': 'study together / ندرس معًا',
    '一起玩': 'play together / نلعب معًا',
    '从早到晚': 'from morning to night / من الصباح إلى المساء',
    '都在一起': 'all together / معًا طوال الوقت',
    '我们从早到晚都在一起': 'we are together from morning to night / نحن معًا من الصباح إلى المساء'
  }
};