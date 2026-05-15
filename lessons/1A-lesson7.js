window.LESSONS = window.LESSONS || {};

window.LESSONS['1A-lesson7'] = {
  id: '1A-lesson7',
  book: '1A',
  lesson: 'Lesson 7',
  title: '这是阿联酋。',
  theme: 'Countries',
  goal: 'Talk about countries and ask “What country is this?”',
  heroTranslation: 'This is the UAE.',
  titleTokens: [
    { py: 'Zhè shì', hz: '这是', cls: 'activity' },
    { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🇦🇪', pinyin: 'Āliánqiú', text: '阿联酋', translation: 'UAE / الإمارات' },
    { emoji: '🇨🇳', pinyin: 'Zhōngguó', text: '中国', translation: 'China / الصين' },
    { emoji: '🇬🇧', pinyin: 'Yīngguó', text: '英国', translation: 'United Kingdom / بريطانيا' },
    { emoji: '🇪🇬', pinyin: 'Āijí', text: '埃及', translation: 'Egypt / مصر' },
    { emoji: '🇸🇦', pinyin: 'Shātè', text: '沙特', translation: 'Saudi Arabia / السعودية' },
    { emoji: '🇯🇴', pinyin: 'Yuēdàn', text: '约旦', translation: 'Jordan / الأردن' },
    { emoji: '🌍', pinyin: 'guójiā', text: '国家', translation: 'country / دولة' },
    { emoji: '👀', pinyin: 'kàn', text: '看', translation: 'look / انظر' },
    { emoji: '💡', pinyin: 'zhīdào', text: '知道', translation: 'know / يعرف' },
    { emoji: '❓', pinyin: 'shénme guójiā', text: '什么国家', translation: 'what country / أي دولة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
        { hz: '。' }
      ],
      translation: 'This is the UAE. / هذه هي الإمارات.'
    },
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'shénme guójiā', hz: '什么国家', cls: 'country' },
        { hz: '？' }
      ],
      translation: 'What country is this? / ما هذه الدولة؟'
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zhīdào', hz: '知道', cls: 'activity' },
        { py: 'ma', hz: '吗' },
        { hz: '？' }
      ],
      translation: 'Do you know? / هل تعرف؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bù zhīdào', hz: '不知道', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'I do not know. / لا أعرف.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会读国家',
      translation: 'This is China. This is the UAE. This is the UK. This is Egypt.',
      tip: 'Reading Goal: Read the country names clearly. Point to the flags or pictures.',
      lines: [
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is China. / هذه هي الصين.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is the UAE. / هذه هي الإمارات.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Yīngguó', hz: '英国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is the United Kingdom. / هذه هي بريطانيا.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Āijí', hz: '埃及', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is Egypt. / هذه هي مصر.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问这是什么国家',
      translation: 'What country is this? This is China. What country is this? This is the UAE.',
      tip: 'Pair Work: One student asks, one student answers. Then change the country card.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'shénme guójiā', hz: '什么国家', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'What country is this? / ما هذه الدولة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is China. / هذه هي الصين.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'shénme guójiā', hz: '什么国家', cls: 'country' },
            { hz: '？' }
          ],
          translation: 'What country is this? / ما هذه الدولة؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is the UAE. / هذه هي الإمارات.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zhīdào', hz: '知道', cls: 'activity' },
            { py: 'ma', hz: '吗' },
            { hz: '？' }
          ],
          translation: 'Do you know? / هل تعرف؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'zhīdào', hz: '知道', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I know. / أعرف.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍很多国家',
      translation: 'I know many countries. This is China. This is the UAE. This is the UK. This is Egypt. Do you know these countries?',
      tip: 'Speaking Goal: Introduce several countries. Try to present like a little teacher.',
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
            { py: 'zhīdào', hz: '知道', cls: 'activity' },
            { py: 'hěn duō guójiā', hz: '很多国家', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I know many countries. / أعرف دولًا كثيرة.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Zhōngguó', hz: '中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is China. / هذه هي الصين.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Āliánqiú', hz: '阿联酋', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is the UAE. / هذه هي الإمارات.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Yīngguó', hz: '英国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is the United Kingdom. / هذه هي بريطانيا.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'Āijí', hz: '埃及', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'This is Egypt. / هذه هي مصر.'
        },
        {
          tokens: [
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zhīdào', hz: '知道', cls: 'activity' },
            { py: 'zhèxiē guójiā', hz: '这些国家', cls: 'country' },
            { py: 'ma', hz: '吗' },
            { hz: '？' }
          ],
          translation: 'Do you know these countries? / هل تعرف هذه الدول؟'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “这是阿联酋。” 是什么意思？',
      pinyin: '“Zhè shì Āliánqiú.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'This is the UAE.', correct: true },
        { text: 'This is China.', correct: false },
        { text: 'This is the UK.', correct: false }
      ]
    },
    {
      question: '2. “这是什么国家？” 是什么意思？',
      pinyin: '“Zhè shì shénme guójiā?” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'What country is this?', correct: true },
        { text: 'Do you know?', correct: false },
        { text: 'I do not know.', correct: false }
      ]
    },
    {
      question: '3. 请选择正确回答。',
      pinyin: 'Qǐng xuǎnzé zhèngquè huídá.',
      translation: 'Choose the correct answer.',
      prompt: '这是什么国家？',
      promptPinyin: 'Zhè shì shénme guójiā?',
      choices: [
        { text: '这是中国。', pinyin: 'Zhè shì Zhōngguó.', correct: true },
        { text: '我十二岁。', pinyin: 'Wǒ shíèr suì.', correct: false }
      ]
    },
    {
      question: '4. “我不知道。” 是什么意思？',
      pinyin: '“Wǒ bù zhīdào.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I do not know.', correct: true },
        { text: 'I know.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Zhè shì', hz: '这是', cls: 'activity' },
        { py: 'shénme guójiā', hz: '什么国家', cls: 'country' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'zhīdào', hz: '知道', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'bù zhīdào', hz: '不知道', cls: 'not-like' },
        { hz: '。' }
      ]
    ],
    translation: 'This is ______. What country is this? I know. I do not know.',
    tip: 'Use country cards: 中国、阿联酋、英国、埃及、沙特、约旦。'
  },

  meanings: {
    '你好': 'hello / مرحبًا',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '这是': 'this is / هذه هي',
    '什么国家': 'what country / أي دولة',
    '这是什么国家': 'what country is this / ما هذه الدولة',
    '国家': 'country / دولة',
    '很多国家': 'many countries / دول كثيرة',
    '这些国家': 'these countries / هذه الدول',
    '阿联酋': 'UAE / الإمارات',
    '中国': 'China / الصين',
    '英国': 'United Kingdom / بريطانيا',
    '埃及': 'Egypt / مصر',
    '沙特': 'Saudi Arabia / السعودية',
    '约旦': 'Jordan / الأردن',
    '看': 'look / انظر',
    '你看': 'look / انظر',
    '知道': 'know / يعرف',
    '不知道': 'do not know / لا يعرف',
    '我知道': 'I know / أعرف',
    '我不知道': 'I do not know / لا أعرف',
    '你知道吗': 'do you know / هل تعرف',
    '吗': 'question particle / أداة سؤال',
    '我': 'I / أنا',
    '你': 'you / أنت',
    '谢谢': 'thank you / شكرًا',
    '谢谢你': 'thank you / شكرًا لك',
    '八': 'eight / ثمانية'
  }
};