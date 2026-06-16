window.LESSONS = window.LESSONS || {};

window.LESSONS['3B-lesson4'] = {
  id: '3B-lesson4',
  book: '3B',
  lesson: 'Lesson 4',
  title: '我们一起去哈利法塔吧。',
  theme: 'Landmarks and Invitations',
  goal: 'Introduce famous landmarks and invite others to go somewhere using 一起……吧 and 虽然……但是.',
  heroTranslation: 'Let’s go to the Burj Khalifa together.',

  titleTokens: [
    { py: 'Wǒmen', hz: '我们', cls: 'self' },
    { py: 'yìqǐ qù', hz: '一起去', cls: 'activity' },
    { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
    { py: 'ba', hz: '吧', cls: 'respect' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏙️', pinyin: 'Hālìfǎ Tǎ', text: '哈利法塔', translation: 'Burj Khalifa / برج خليفة' },
    { emoji: '🏛️', pinyin: 'Wèilái Bówùguǎn', text: '未来博物馆', translation: 'Museum of the Future / متحف المستقبل' },
    { emoji: '🧱', pinyin: 'Chángchéng', text: '长城', translation: 'Great Wall / سور الصين العظيم' },
    { emoji: '📏', pinyin: 'mǐ', text: '米', translation: 'meter / متر' },
    { emoji: '🏢', pinyin: 'céng', text: '层', translation: 'floor / طابق' },
    { emoji: '⬆️', pinyin: 'gāo', text: '高', translation: 'tall / مرتفع' },
    { emoji: '🔝', pinyin: 'zuì gāo', text: '最高', translation: 'the tallest / الأعلى' },
    { emoji: '⭐', pinyin: 'yǒumíng', text: '有名', translation: 'famous / مشهور' },
    { emoji: '👀', pinyin: 'cānguān', text: '参观', translation: 'visit / يزور' },
    { emoji: '↔️', pinyin: 'suīrán', text: '虽然', translation: 'although / رغم أن' },
    { emoji: '➡️', pinyin: 'dànshì', text: '但是', translation: 'but / لكن' },
    { emoji: '🌍', pinyin: 'shìjiè', text: '世界', translation: 'world / العالم' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
        { py: 'fēicháng yǒumíng', hz: '非常有名', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'The Burj Khalifa is very famous. / برج خليفة مشهور جدًا.'
    },
    {
      tokens: [
        { py: 'Hěn duō rén', hz: '很多人', cls: 'person' },
        { py: 'qù nàli', hz: '去那里', cls: 'place' },
        { py: 'cānguān', hz: '参观', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Many people go there to visit. / يذهب كثير من الناس إلى هناك للزيارة.'
    },
    {
      tokens: [
        { py: 'Wǒ suīrán', hz: '我虽然', cls: 'self' },
        { py: 'méi qùguo', hz: '没去过', cls: 'not-like' },
        { hz: '，' },
        { py: 'dànshì', hz: '但是', cls: 'time' },
        { py: 'zhīdào tā hěn yǒumíng', hz: '知道它很有名', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Although I have not been there, I know it is very famous. / رغم أنني لم أذهب إلى هناك، أعرف أنه مشهور جدًا.'
    },
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'yìqǐ qù ba', hz: '一起去吧', cls: 'activity' },
        { hz: '！' }
      ],
      translation: 'Let’s go together! / لنذهب معًا!'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会介绍有名的地方',
      translation: 'The Burj Khalifa is tall. The Burj Khalifa is very famous. Many people go to the Burj Khalifa to visit. The Great Wall is also very famous. The Museum of the Future is very beautiful.',
      tip: 'Reading Goal: Describe famous places with 高、有名、漂亮 and 参观.',
      lines: [
        {
          tokens: [
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'hěn gāo', hz: '很高', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The Burj Khalifa is tall. / برج خليفة مرتفع.'
        },
        {
          tokens: [
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'fēicháng yǒumíng', hz: '非常有名', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The Burj Khalifa is very famous. / برج خليفة مشهور جدًا.'
        },
        {
          tokens: [
            { py: 'Hěn duō rén', hz: '很多人', cls: 'person' },
            { py: 'qù Hālìfǎ Tǎ', hz: '去哈利法塔', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Many people go to the Burj Khalifa to visit. / يذهب كثير من الناس إلى برج خليفة للزيارة.'
        },
        {
          tokens: [
            { py: 'Chángchéng', hz: '长城', cls: 'place' },
            { py: 'yě hěn yǒumíng', hz: '也很有名', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The Great Wall is also very famous. / سور الصين العظيم مشهور أيضًا.'
        },
        {
          tokens: [
            { py: 'Wèilái Bówùguǎn', hz: '未来博物馆', cls: 'place' },
            { py: 'fēicháng piàoliang', hz: '非常漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The Museum of the Future is very beautiful. / متحف المستقبل جميل جدًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会邀请朋友一起去',
      translation: 'Have you been to the Burj Khalifa? Not yet. The Burj Khalifa is very famous. Let’s go together! Okay! Have you been to the Museum of the Future? Not yet. Many people go there to visit. Let’s go together this weekend!',
      tip: 'Pair Work: Ask about places and invite a friend.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ qùguo', hz: '你去过', cls: 'person' },
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Have you been to the Burj Khalifa? / هل ذهبت إلى برج خليفة من قبل؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hái méi', hz: '还没', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Not yet. / ليس بعد.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'fēicháng yǒumíng', hz: '非常有名', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The Burj Khalifa is very famous. / برج خليفة مشهور جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'yìqǐ qù ba', hz: '一起去吧', cls: 'activity' },
            { hz: '！' }
          ],
          translation: 'Let’s go together! / لنذهب معًا!'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo a', hz: '好啊', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Okay! / حسنًا!'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ qùguo', hz: '你去过', cls: 'person' },
            { py: 'Wèilái Bówùguǎn', hz: '未来博物馆', cls: 'place' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Have you been to the Museum of the Future? / هل ذهبت إلى متحف المستقبل من قبل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hái méi', hz: '还没', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Not yet. / ليس بعد.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hěn duō rén', hz: '很多人', cls: 'person' },
            { py: 'qù nàli', hz: '去那里', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Many people go there to visit. / يذهب كثير من الناس إلى هناك للزيارة.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhège zhōumò', hz: '这个周末', cls: 'time' },
            { py: 'wǒmen yìqǐ qù ba', hz: '我们一起去吧', cls: 'activity' },
            { hz: '！' }
          ],
          translation: 'Let’s go together this weekend! / لنذهب معًا في عطلة نهاية هذا الأسبوع!'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo', hz: '好', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'Okay! / حسنًا!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍哈利法塔',
      translation: 'The Burj Khalifa is in Dubai. It is very tall and very famous. It has 162 floors and is 828 meters tall. Many people go there to visit. Although I have not been to the Burj Khalifa, I know it is the tallest building in the world. This weekend, I want to visit it with my friend.',
      tip: 'Speaking Goal: Introduce a landmark and make a weekend plan.',
      lines: [
        {
          tokens: [
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { py: 'zài Díbài', hz: '在迪拜', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The Burj Khalifa is in Dubai. / برج خليفة في دبي.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '它', cls: 'person' },
            { py: 'fēicháng gāo', hz: '非常高', cls: 'like' },
            { hz: '，' },
            { py: 'yě fēicháng yǒumíng', hz: '也非常有名', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is very tall and also very famous. / إنه مرتفع جدًا ومشهور جدًا أيضًا.'
        },
        {
          tokens: [
            { py: 'Tā yǒu', hz: '它有', cls: 'activity' },
            { py: 'yì bǎi liùshí èr céng', hz: '162层', cls: 'time' },
            { hz: '，' },
            { py: 'bā bǎi èrshí bā mǐ', hz: '828米', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'It has 162 floors and is 828 meters tall. / يتكون من 162 طابقًا وارتفاعه 828 مترًا.'
        },
        {
          tokens: [
            { py: 'Hěn duō rén', hz: '很多人', cls: 'person' },
            { py: 'qù nàli', hz: '去那里', cls: 'place' },
            { py: 'cānguān', hz: '参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Many people go there to visit. / يذهب كثير من الناس إلى هناك للزيارة.'
        },
        {
          tokens: [
            { py: 'Wǒ suīrán', hz: '我虽然', cls: 'self' },
            { py: 'méi qùguo', hz: '没去过', cls: 'not-like' },
            { py: 'Hālìfǎ Tǎ', hz: '哈利法塔', cls: 'place' },
            { hz: '，' },
            { py: 'dànshì', hz: '但是', cls: 'time' },
            { py: 'zhīdào tā shì', hz: '知道它是', cls: 'activity' },
            { py: 'quán shìjiè zuì gāo de lóu', hz: '全世界最高的楼', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'Although I have not been to the Burj Khalifa, I know it is the tallest building in the world. / رغم أنني لم أذهب إلى برج خليفة، أعرف أنه أعلى مبنى في العالم.'
        },
        {
          tokens: [
            { py: 'Zhège zhōumò', hz: '这个周末', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ xiǎng hé péngyou', hz: '我想和朋友', cls: 'self' },
            { py: 'yìqǐ qù cānguān', hz: '一起去参观', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This weekend, I want to visit it with my friend. / في عطلة نهاية هذا الأسبوع، أريد أن أزوره مع صديقي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “哈利法塔” 是什么？',
      pinyin: '“Hālìfǎ Tǎ” shì shénme?',
      translation: 'What is the Burj Khalifa?',
      choices: [
        { text: 'A famous building in Dubai.', correct: true },
        { text: 'A school in China.', correct: false },
        { text: 'A Chinese song.', correct: false }
      ]
    },
    {
      question: '2. “我们一起去吧！” 是什么意思？',
      pinyin: '“Wǒmen yìqǐ qù ba!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Let’s go together!', correct: true },
        { text: 'I have not been there.', correct: false },
        { text: 'It is very tall.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “famous”？',
      pinyin: 'Nǎ yí ge shì “famous”?',
      translation: 'Which one means “famous”?',
      choices: [
        { text: '有名', correct: true },
        { text: '米', correct: false },
        { text: '层', correct: false }
      ]
    },
    {
      question: '4. “我虽然没去过，但是知道它很有名。” 是什么意思？',
      pinyin: '“Wǒ suīrán méi qùguo, dànshì zhīdào tā hěn yǒumíng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Although I have not been there, I know it is famous.', correct: true },
        { text: 'I went there with my friend.', correct: false },
        { text: 'Many people do not like it.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ xiǎng jièshào', hz: '我想介绍', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā zài', hz: '它在', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '它', cls: 'person' },
        { py: 'fēicháng', hz: '非常', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Hěn duō rén', hz: '很多人', cls: 'person' },
        { py: 'qù nàli', hz: '去那里', cls: 'place' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ suīrán', hz: '我虽然', cls: 'self' },
        { py: 'méi qùguo', hz: '没去过', cls: 'not-like' },
        { blank: true },
        { hz: '，' },
        { py: 'dànshì', hz: '但是', cls: 'time' },
        { py: 'zhīdào tā', hz: '知道它', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zhège zhōumò', hz: '这个周末', cls: 'time' },
        { hz: '，' },
        { py: 'wǒmen', hz: '我们', cls: 'self' },
        { py: 'yìqǐ qù', hz: '一起去', cls: 'activity' },
        { blank: true },
        { py: 'ba', hz: '吧', cls: 'respect' },
        { hz: '！' }
      ]
    ],
    translation: 'I want to introduce ______. It is in ______. It is very ______. Many people go there to ______. Although I have not been to ______, I know it ______. This weekend, let’s go to ______ together!',
    tip: 'Use: 哈利法塔、未来博物馆、长城、天坛、国家大剧院、迪拜、北京、高、有名、漂亮、参观。'
  },

  meanings: {
    '哈利法塔': 'Burj Khalifa / برج خليفة',
    '未来博物馆': 'Museum of the Future / متحف المستقبل',
    '长城': 'Great Wall / سور الصين العظيم',
    '米': 'meter / متر',
    '层': 'floor / طابق',
    '高': 'tall / مرتفع',
    '很高': 'very tall / مرتفع جدًا',
    '最高': 'the tallest / الأعلى',
    '楼': 'building / مبنى',
    '有名': 'famous / مشهور',
    '非常有名': 'very famous / مشهور جدًا',
    '参观': 'visit / يزور',
    '世界': 'world / العالم',
    '全世界': 'the whole world / العالم كله',
    '全世界最高的楼': 'the tallest building in the world / أعلى مبنى في العالم',
    '虽然': 'although / رغم أن',
    '但是': 'but / لكن',
    '我们': 'we / نحن',
    '一起去': 'go together / نذهب معًا',
    '一起去吧': 'let’s go together / لنذهب معًا',
    '你去过': 'have you been to / هل ذهبت إلى',
    '还没': 'not yet / ليس بعد',
    '很多人': 'many people / كثير من الناس',
    '去那里': 'go there / يذهب إلى هناك',
    '这个周末': 'this weekend / عطلة نهاية هذا الأسبوع',
    '好啊': 'okay / حسنًا',
    '在迪拜': 'in Dubai / في دبي',
    '它': 'it / هو أو هي لغير العاقل',
    '它有': 'it has / لديه',
    '162层': '162 floors / 162 طابقًا',
    '828米': '828 meters / 828 مترًا',
    '没去过': 'have not been to / لم يذهب إلى من قبل',
    '知道它是': 'know that it is / يعرف أنه',
    '我想和朋友': 'I want to with my friend / أريد مع صديقي',
    '一起去参观': 'go visit together / نذهب للزيارة معًا',
    '我想介绍': 'I want to introduce / أريد أن أقدم',
    '它在': 'it is in / إنه في',
    '非常': 'very / جدًا',
    '漂亮': 'beautiful / جميل',
    '天坛': 'Temple of Heaven / معبد السماء',
    '国家大剧院': 'National Centre for the Performing Arts / المركز الوطني للفنون المسرحية',
    '吧': 'suggestion particle / أداة للاقتراح'
  }
};