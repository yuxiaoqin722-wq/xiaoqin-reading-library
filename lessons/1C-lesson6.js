window.LESSONS = window.LESSONS || {};

window.LESSONS['1C-lesson6'] = {
  id: '1C-lesson6',
  book: '1C',
  lesson: 'Lesson 6',
  title: '我会说汉语。',
  theme: 'Languages and Abilities',
  goal: 'Talk about languages and abilities with “会”.',
  heroTranslation: 'I can speak Chinese.',
  titleTokens: [
    { py: 'Wǒ huì', hz: '我会', cls: 'self' },
    { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '✅', pinyin: 'huì', text: '会', translation: 'can / يستطيع' },
    { emoji: '🚫', pinyin: 'bú huì', text: '不会', translation: 'cannot / لا يستطيع' },
    { emoji: '🗣️', pinyin: 'shuō', text: '说', translation: 'speak / يتحدث' },
    { emoji: '✍️', pinyin: 'xiě', text: '写', translation: 'write / يكتب' },
    { emoji: '🇨🇳', pinyin: 'Hànyǔ', text: '汉语', translation: 'Chinese / اللغة الصينية' },
    { emoji: '🇦🇪', pinyin: 'Ālābóyǔ', text: '阿拉伯语', translation: 'Arabic / اللغة العربية' },
    { emoji: '🇬🇧', pinyin: 'Yīngyǔ', text: '英语', translation: 'English / اللغة الإنجليزية' },
    { emoji: '🈶', pinyin: 'Hànzì', text: '汉字', translation: 'Chinese characters / الحروف الصينية' },
    { emoji: '📚', pinyin: 'xuéxí', text: '学习', translation: 'study / يتعلم' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ huì', hz: '我会', cls: 'self' },
        { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I can speak Chinese. / أستطيع أن أتحدث الصينية.'
    },
    {
      tokens: [
        { py: 'Nǐ huì', hz: '你会', cls: 'person' },
        { py: 'shuō Hànyǔ ma', hz: '说汉语吗', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Can you speak Chinese? / هل تستطيع أن تتحدث الصينية؟'
    },
    {
      tokens: [
        { py: 'Wǒ bú huì', hz: '我不会', cls: 'not-like' },
        { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I cannot write Chinese characters. / لا أستطيع كتابة الحروف الصينية.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说语言',
      translation: 'I can speak Chinese. I can speak Arabic. I can speak English. I can write Chinese characters.',
      tip: 'Reading Goal: Read “我会……” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can speak Chinese. / أستطيع أن أتحدث الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'shuō Ālābóyǔ', hz: '说阿拉伯语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can speak Arabic. / أستطيع أن أتحدث العربية.'
        },
        {
          tokens: [
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'shuō Yīngyǔ', hz: '说英语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can speak English. / أستطيع أن أتحدث الإنجليزية.'
        },
        {
          tokens: [
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can write Chinese characters. / أستطيع كتابة الحروف الصينية.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会问会不会',
      translation: 'Can you speak Chinese? I can speak Chinese. Can you write Chinese characters? I cannot write Chinese characters. I am studying Chinese.',
      tip: 'Pair Work: Ask and answer with “你会……吗？”.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ huì', hz: '你会', cls: 'person' },
            { py: 'shuō Hànyǔ ma', hz: '说汉语吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Can you speak Chinese? / هل تستطيع أن تتحدث الصينية؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'shuō Hànyǔ', hz: '说汉语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can speak Chinese. / أستطيع أن أتحدث الصينية.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ huì', hz: '你会', cls: 'person' },
            { py: 'xiě Hànzì ma', hz: '写汉字吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Can you write Chinese characters? / هل تستطيعين كتابة الحروف الصينية؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ bú huì', hz: '我不会', cls: 'not-like' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I cannot write Chinese characters. / لا أستطيع كتابة الحروف الصينية.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ zài', hz: '我在', cls: 'self' },
            { py: 'xuéxí Hànyǔ', hz: '学习汉语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am studying Chinese. / أنا أتعلم اللغة الصينية.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍我的语言能力',
      translation: 'Hello everyone. My name is Fatima. I am Emirati. I am a middle school student. I can speak Arabic and English. I am studying Chinese. I can speak some Chinese. I cannot write many Chinese characters. I like Chinese.',
      tip: 'Speaking Goal: Introduce your language ability with “会 / 不会”.',
      lines: [
        {
          tokens: [
            { py: 'Dàjiā hǎo', hz: '大家好', cls: 'greeting' },
            { hz: '！' }
          ],
          translation: 'Hello everyone! / مرحبًا بالجميع!'
        },
        {
          tokens: [
            { py: 'Wǒ jiào', hz: '我叫', cls: 'self' },
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Fatima. / اسمي فاطمة.'
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
            { py: 'Wǒ shì', hz: '我是', cls: 'self' },
            { py: 'zhōngxuéshēng', hz: '中学生', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I am a middle school student. / أنا طالبة في المرحلة المتوسطة.'
        },
        {
          tokens: [
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'shuō Ālābóyǔ', hz: '说阿拉伯语', cls: 'activity' },
            { py: 'hé', hz: '和', cls: 'activity' },
            { py: 'Yīngyǔ', hz: '英语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can speak Arabic and English. / أستطيع أن أتحدث العربية والإنجليزية.'
        },
        {
          tokens: [
            { py: 'Wǒ zài', hz: '我在', cls: 'self' },
            { py: 'xuéxí Hànyǔ', hz: '学习汉语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am studying Chinese. / أنا أتعلم اللغة الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ huì', hz: '我会', cls: 'self' },
            { py: 'shuō yìdiǎnr Hànyǔ', hz: '说一点儿汉语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can speak a little Chinese. / أستطيع أن أتحدث قليلًا من الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ bú huì', hz: '我不会', cls: 'not-like' },
            { py: 'xiě hěn duō Hànzì', hz: '写很多汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I cannot write many Chinese characters. / لا أستطيع كتابة الكثير من الحروف الصينية.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'Hànyǔ', hz: '汉语', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like Chinese. / أحب اللغة الصينية.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “会” 是什么意思？',
      pinyin: '“Huì” shì shénme yìsi?',
      translation: 'What does “会” mean?',
      choices: [
        { text: 'can', correct: true },
        { text: 'do not have', correct: false },
        { text: 'like', correct: false }
      ]
    },
    {
      question: '2. “我会说汉语。” 是什么意思？',
      pinyin: '“Wǒ huì shuō Hànyǔ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I can speak Chinese.', correct: true },
        { text: 'I can write Chinese.', correct: false },
        { text: 'I like Chinese food.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “English”？',
      pinyin: 'Nǎ yí ge shì “English”?',
      translation: 'Which one means “English”?',
      choices: [
        { text: '英语', correct: true },
        { text: '汉语', correct: false },
        { text: '阿拉伯语', correct: false }
      ]
    },
    {
      question: '4. “我不会写汉字。” 是什么意思？',
      pinyin: '“Wǒ bú huì xiě Hànzì.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I cannot write Chinese characters.', correct: true },
        { text: 'I can speak Chinese.', correct: false },
        { text: 'I am studying English.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Nǐ huì', hz: '你会', cls: 'person' },
        { py: 'shuō nǎxiē yǔyán', hz: '说哪些语言', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ huì', hz: '我会', cls: 'self' },
        { py: 'shuō', hz: '说', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ huì', hz: '我会', cls: 'self' },
        { py: 'shuō', hz: '说', cls: 'activity' },
        { blank: true },
        { py: 'hé', hz: '和', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ bú huì', hz: '我不会', cls: 'not-like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ zài', hz: '我在', cls: 'self' },
        { py: 'xuéxí Hànyǔ', hz: '学习汉语', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'What languages can you speak? I can speak _____. I can speak _____ and _____. I cannot _____. I am studying Chinese.',
    tip: 'Use language words: 汉语、阿拉伯语、英语。Use ability words: 会、不会、说、写。'
  },

  meanings: {
    '会': 'can / يستطيع',
    '不会': 'cannot / لا يستطيع',
    '我会': 'I can / أستطيع',
    '你会': 'you can / تستطيع',
    '我不会': 'I cannot / لا أستطيع',
    '说': 'speak / يتحدث',
    '写': 'write / يكتب',
    '说汉语': 'speak Chinese / يتحدث الصينية',
    '说阿拉伯语': 'speak Arabic / يتحدث العربية',
    '说英语': 'speak English / يتحدث الإنجليزية',
    '写汉字': 'write Chinese characters / يكتب الحروف الصينية',
    '汉语': 'Chinese / اللغة الصينية',
    '阿拉伯语': 'Arabic / اللغة العربية',
    '英语': 'English / اللغة الإنجليزية',
    '汉字': 'Chinese characters / الحروف الصينية',
    '学习': 'study / يتعلم',
    '学习汉语': 'study Chinese / يتعلم اللغة الصينية',
    '我在': 'I am / أنا',
    '说哪些语言': 'speak which languages / ما اللغات التي تتحدثها',
    '语言': 'language / لغة',
    '哪些': 'which / أي',
    '一点儿': 'a little / قليلًا',
    '说一点儿汉语': 'speak a little Chinese / يتحدث قليلًا من الصينية',
    '很多': 'many / كثير',
    '写很多汉字': 'write many Chinese characters / يكتب الكثير من الحروف الصينية',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '法蒂玛': 'Fatima / فاطمة',
    '我是': 'I am / أنا',
    '阿联酋人': 'Emirati / إماراتي',
    '中学生': 'middle school student / طالب في المرحلة المتوسطة',
    '我喜欢': 'I like / أحب'
  }
};