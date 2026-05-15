window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson9'] = {
  id: '1A-lesson9',
  book: '1A',
  lesson: 'Lesson 9',
  title: '上海在中国。',
  theme: 'Cities and places',
  goal: 'Talk about where a city is and where someone is from.',
  heroTranslation: 'Shanghai is in China.',
  titleTokens: [
    { py: 'Shànghǎi', hz: '上海', cls: 'place' },
    { py: 'zài', hz: '在', cls: 'location' },
    { py: 'Zhōngguó', hz: '中国', cls: 'country' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🏙️', pinyin: 'Shànghǎi', text: '上海', translation: 'Shanghai / شنغهاي' },
    { emoji: '🏛️', pinyin: 'Běijīng', text: '北京', translation: 'Beijing / بكين' },
    { emoji: '🌆', pinyin: 'Díbài', text: '迪拜', translation: 'Dubai / دبي' },
    { emoji: '🏙️', pinyin: 'Ābùzhābǐ', text: '阿布扎比', translation: 'Abu Dhabi / أبوظبي' },
    { emoji: '🏙️', pinyin: 'Kāiluó', text: '开罗', translation: 'Cairo / القاهرة' },
    { emoji: '📍', pinyin: 'zài', text: '在', translation: 'in / في' },
    { emoji: '❓', pinyin: 'nǎlǐ', text: '哪里', translation: 'where / أين' },
    { emoji: '➡️', pinyin: 'láizì', text: '来自', translation: 'come from / من' },
    { emoji: '🇨🇳', pinyin: 'Zhōngguó', text: '中国', translation: 'China / الصين' },
    { emoji: '🇦🇪', pinyin: 'Āliánqiú', text: '阿联酋', translation: 'UAE / الإمارات' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'Zhōngguó', hz: '中国', cls: 'country' },
        { hz: '。' }
      ],
      translation: 'Shanghai is in China. / شنغهاي في الصين.'
    },
    {
      tokens: [
        { py: 'Shànghǎi', hz: '上海', cls: 'place' },
        { py: 'zài', hz: '在', cls: 'location' },
        { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
        { hz: '？' }
      ],
      translation: 'Where is Shanghai? / أين شنغهاي؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'láizì', hz: '来自', cls: 'location' },
        { py: 'Díbài', hz: '迪拜', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'I come from Dubai. / أنا من دبي.'
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'láizì', hz: '来自', cls: 'location' },
        { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
        { hz: '？' }
      ],
      translation: 'Where are you from? / من أين أنت؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说城市在哪里',
      translation: 'Shanghai is in China. Beijing is in China. Dubai is in the UAE. Abu Dhabi is in the UAE.',
      tip: 'Reading Goal: Read city names and country names clearly.',
      lines: [
        {
          tokens: [
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Shanghai is in China. / شنغهاي في الصين.'
        },
        {
          tokens: [
            { py: 'Běijīng', hz: '北京', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Beijing is in China. / بكين في الصين.'
        },
        {
          tokens: [
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Dubai is in the UAE. / دبي في الإمارات.'
        },
        {
          tokens: [
            { py: 'Ābùzhābǐ', hz: '阿布扎比', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Abu Dhabi is in the UAE. / أبوظبي في الإمارات.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问城市在哪里',
      translation: 'Where is Shanghai? Shanghai is in China. Where is Dubai? Dubai is in the UAE.',
      tip: 'Pair Work: Ask where a city is. Answer with “在……”。',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
            { hz: '？' }
          ],
          translation: 'Where is Shanghai? / أين شنغهاي؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Shanghai is in China. / شنغهاي في الصين.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
            { hz: '？' }
          ],
          translation: 'Where is Dubai? / أين دبي؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Dubai is in the UAE. / دبي في الإمارات.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'láizì', hz: '来自', cls: 'location' },
            { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
            { hz: '？' }
          ],
          translation: 'Where are you from? / من أين أنت؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'láizì', hz: '来自', cls: 'location' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I come from Dubai in the UAE. / أنا من دبي في الإمارات.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜1A 总复习介绍',
      translation: 'Hello, my name is Fatima. I am twelve years old. I am Emirati. Today is Thursday. I come from Dubai. Dubai is in the UAE. Shanghai is in China. My friend is Lili. She comes from Shanghai. Where are you from?',
      tip: 'Speaking Goal: Use what you learned in 1A to introduce yourself, your city and your friend.',
      lines: [
        {
          tokens: [
            { py: 'Nǐhǎo', hz: '你好', cls: 'greeting' },
            { hz: '，' },
            { py: 'wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'Hello, my name is Fatima. / مرحبًا، اسمي فاطمة.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shíèr suì', hz: '十二岁', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'I am twelve years old. / عمري اثنتا عشرة سنة.'
        },
        {
          tokens: [
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'Āliánqiú rén', hz: '阿联酋人', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I am Emirati. / أنا إماراتية.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'Xīngqīsì', hz: '星期四', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is Thursday. / اليوم الخميس.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'láizì', hz: '来自', cls: 'location' },
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I come from Dubai. / أنا من دبي.'
        },
        {
          tokens: [
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Dubai is in the UAE. / دبي في الإمارات.'
        },
        {
          tokens: [
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { py: 'zài', hz: '在', cls: 'location' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'Shanghai is in China. / شنغهاي في الصين.'
        },
        {
          tokens: [
            { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { py: 'jiào', hz: '叫', cls: 'name' },
            { py: 'Lìli', hz: '莉莉', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My friend is Lili. / صديقتي اسمها ليلي.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'láizì', hz: '来自', cls: 'location' },
            { py: 'Shànghǎi', hz: '上海', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'She comes from Shanghai. / هي من شنغهاي.'
        },
        {
          tokens: [
            { py: 'Nǐ ne', hz: '你呢', cls: 'person' },
            { hz: '？' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'láizì', hz: '来自', cls: 'location' },
            { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
            { hz: '？' }
          ],
          translation: 'And you? Where are you from? / وأنت؟ من أين أنت؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “上海在中国。” 是什么意思？',
      pinyin: '“Shànghǎi zài Zhōngguó.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Shanghai is in China.', correct: true },
        { text: 'Dubai is in China.', correct: false },
        { text: 'I come from Shanghai.', correct: false }
      ]
    },
    {
      question: '2. “上海在哪里？” 是什么意思？',
      pinyin: '“Shànghǎi zài nǎlǐ?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Where is Shanghai?', correct: true },
        { text: 'What country is this?', correct: false },
        { text: 'What day is it today?', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '你来自哪里？',
      promptPinyin: 'Nǐ láizì nǎlǐ?',
      choices: [
        { text: '我来自迪拜。', pinyin: 'Wǒ láizì Díbài.', correct: true },
        { text: '我是十二岁。', pinyin: 'Wǒ shì shíèr suì.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “Abu Dhabi”？',
      pinyin: 'Nǎ yí ge shì “Abu Dhabi”?',
      translation: 'Which one is Abu Dhabi?',
      choices: [
        { text: '阿布扎比', pinyin: 'Ābùzhābǐ', correct: true },
        { text: '上海', pinyin: 'Shànghǎi', correct: false },
        { text: '北京', pinyin: 'Běijīng', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'láizì', hz: '来自', cls: 'location' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { blank: true },
        { py: 'zài', hz: '在', cls: 'location' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'láizì', hz: '来自', cls: 'location' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'láizì', hz: '来自', cls: 'location' },
        { py: 'nǎlǐ', hz: '哪里', cls: 'location' },
        { hz: '？' }
      ]
    ],
    translation: 'I come from ______. ______ is in ______. My friend comes from ______. Where are you from?',
    tip: 'Use real places: 迪拜、阿布扎比、上海、北京、中国、阿联酋。'
  },

  meanings: {
    '你好': 'hello / مرحبًا',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '我': 'I / أنا',
    '你': 'you / أنت',
    '她': 'she / هي',
    '你呢': 'and you / وأنت',
    '十二岁': 'twelve years old / اثنتا عشرة سنة',
    '我是': 'I am / أنا',
    '阿联酋人': 'Emirati / إماراتي',
    '今天': 'today / اليوم',
    '星期四': 'Thursday / الخميس',
    '上海': 'Shanghai / شنغهاي',
    '北京': 'Beijing / بكين',
    '迪拜': 'Dubai / دبي',
    '阿布扎比': 'Abu Dhabi / أبوظبي',
    '开罗': 'Cairo / القاهرة',
    '阿曼': 'Oman / عُمان',
    '中国': 'China / الصين',
    '阿联酋': 'UAE / الإمارات',
    '在': 'in / في',
    '哪里': 'where / أين',
    '在哪里': 'where is it / أين',
    '上海在哪里': 'where is Shanghai / أين شنغهاي',
    '上海在中国': 'Shanghai is in China / شنغهاي في الصين',
    '迪拜在阿联酋': 'Dubai is in the UAE / دبي في الإمارات',
    '阿布扎比在阿联酋': 'Abu Dhabi is in the UAE / أبوظبي في الإمارات',
    '来自': 'come from / من',
    '来自哪里': 'come from where / من أين',
    '你来自哪里': 'where are you from / من أين أنت',
    '我来自迪拜': 'I come from Dubai / أنا من دبي',
    '我的朋友': 'my friend / صديقي',
    '叫': 'be called / يُدعى',
    '莉莉': 'Lili / ليلي',
    '月': 'moon / قمر'
  }
};
