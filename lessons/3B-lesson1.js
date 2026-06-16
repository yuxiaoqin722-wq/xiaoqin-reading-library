window.LESSONS = window.LESSONS || {};

window.LESSONS['3B-lesson1'] = {
  id: '3B-lesson1',
  book: '3B',
  lesson: 'Lesson 1',
  title: '你弹得真好！',
  theme: 'Skills and Compliments',
  goal: 'Talk about skills and describe how well someone does something using 得.',
  heroTranslation: 'You play really well!',

  titleTokens: [
    { py: 'Nǐ', hz: '你', cls: 'person' },
    { py: 'tán de', hz: '弹得', cls: 'activity' },
    { py: 'zhēn hǎo', hz: '真好', cls: 'like' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '🏀', pinyin: 'dǎ lánqiú', text: '打篮球', translation: 'play basketball / لعب كرة السلة' },
    { emoji: '🎾', pinyin: 'dǎ wǎngqiú', text: '打网球', translation: 'play tennis / لعب التنس' },
    { emoji: '🏓', pinyin: 'dǎ pīngpāngqiú', text: '打乒乓球', translation: 'play table tennis / لعب تنس الطاولة' },
    { emoji: '🏊', pinyin: 'yóuyǒng', text: '游泳', translation: 'swim / السباحة' },
    { emoji: '🎨', pinyin: 'huàhuà', text: '画画', translation: 'draw / الرسم' },
    { emoji: '🎹', pinyin: 'tán gāngqín', text: '弹钢琴', translation: 'play the piano / العزف على البيانو' },
    { emoji: '🎤', pinyin: 'chànggē', text: '唱歌', translation: 'sing / الغناء' },
    { emoji: '✅', pinyin: 'huì', text: '会', translation: 'can / يستطيع' },
    { emoji: '➕', pinyin: 'hái huì', text: '还会', translation: 'also can / يستطيع أيضًا' },
    { emoji: '👍', pinyin: 'zhēn hǎo', text: '真好', translation: 'really good / جيد جدًا' },
    { emoji: '⭐', pinyin: 'hěn hǎo', text: '很好', translation: 'very good / جيد جدًا' },
    { emoji: '👌', pinyin: 'yìbān', text: '一般', translation: 'so-so / عادي' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'huì', hz: '会', cls: 'activity' },
        { py: 'chànggē', hz: '唱歌', cls: 'activity' },
        { py: 'ma', hz: '吗', cls: 'respect' },
        { hz: '？' }
      ],
      translation: 'Can you sing? / هل تستطيع الغناء؟'
    },
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'tán de', hz: '弹得', cls: 'activity' },
        { py: 'zhēn hǎo', hz: '真好', cls: 'like' },
        { hz: '！' }
      ],
      translation: 'You play really well! / أنت تعزف بشكل رائع!'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'chànggē', hz: '唱歌', cls: 'activity' },
        { py: 'chàng de', hz: '唱得', cls: 'activity' },
        { py: 'yìbān', hz: '一般', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I sing so-so. / أنا أغني بشكل عادي.'
    },
    {
      tokens: [
        { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
        { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
        { hz: '，' },
        { py: 'hái huì', hz: '还会', cls: 'activity' },
        { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Fatima can sing and can also play the piano. / تستطيع فاطمة الغناء وتستطيع أيضًا العزف على البيانو.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说大家会什么',
      translation: 'Ali can play basketball. Mariam can draw. Fatima can swim. Fatima can sing and can also play the piano. We can all sing.',
      tip: 'Reading Goal: Talk about different people and their skills.',
      lines: [
        {
          tokens: [
            { py: 'Ālǐ', hz: '阿里', cls: 'name' },
            { py: 'huì', hz: '会', cls: 'activity' },
            { py: 'dǎ lánqiú', hz: '打篮球', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Ali can play basketball. / يستطيع علي لعب كرة السلة.'
        },
        {
          tokens: [
            { py: 'Mǎlìyàmǔ', hz: '玛丽亚姆', cls: 'name' },
            { py: 'huì', hz: '会', cls: 'activity' },
            { py: 'huàhuà', hz: '画画', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Mariam can draw. / تستطيع مريم الرسم.'
        },
        {
          tokens: [
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { py: 'huì', hz: '会', cls: 'activity' },
            { py: 'yóuyǒng', hz: '游泳', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Fatima can swim. / تستطيع فاطمة السباحة.'
        },
        {
          tokens: [
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
            { hz: '，' },
            { py: 'hái huì', hz: '还会', cls: 'activity' },
            { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Fatima can sing and can also play the piano. / تستطيع فاطمة الغناء وتستطيع أيضًا العزف على البيانو.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'dōu huì', hz: '都会', cls: 'activity' },
            { py: 'chànggē', hz: '唱歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We can all sing. / نحن جميعًا نستطيع الغناء.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会评价技能',
      translation: 'Did you play the piano just now? Yes, I did. You played really well! Thank you. Can you sing? I can sing. How well do you sing? I sing so-so, but I really like singing.',
      tip: 'Pair Work: Ask about skills and describe how well someone does them.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ gāngcái', hz: '你刚才', cls: 'person' },
            { py: 'tán gāngqín le ma', hz: '弹钢琴了吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Did you play the piano just now? / هل عزفت على البيانو قبل قليل؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tán le', hz: '弹了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Yes, I did. / نعم، عزفت.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'tán de', hz: '弹得', cls: 'activity' },
            { py: 'zhēn hǎo', hz: '真好', cls: 'like' },
            { hz: '！' }
          ],
          translation: 'You played really well! / لقد عزفت بشكل رائع!'
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
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
            { py: 'ma', hz: '吗', cls: 'respect' },
            { hz: '？' }
          ],
          translation: 'Can you sing? / هل تستطيعين الغناء؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I can sing. / أستطيع الغناء.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'chànggē', hz: '唱歌', cls: 'activity' },
            { py: 'chàng de zěnmeyàng', hz: '唱得怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How well do you sing? / كيف تغنين؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'chànggē', hz: '唱歌', cls: 'activity' },
            { py: 'chàng de', hz: '唱得', cls: 'activity' },
            { py: 'yìbān', hz: '一般', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I sing so-so. / أنا أغني بشكل عادي.'
        },
        {
          tokens: [
            { py: '', hz: '　　', cls: 'speaker' },
            { py: 'Dànshì', hz: '但是', cls: 'time' },
            { py: 'wǒ hěn xǐhuān', hz: '我很喜欢', cls: 'like' },
            { py: 'chànggē', hz: '唱歌', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'But I really like singing. / لكنني أحب الغناء كثيرًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍同学的技能',
      translation: 'My classmates can do many activities. Mariam can draw. She draws very well. Fatima can swim. She swims very fast. Fatima can sing and can also play the piano. She plays the piano really well. I like playing the piano the most. I also want to learn to play the piano.',
      tip: 'Speaking Goal: Introduce classmates’ skills and say what you want to learn.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ de tóngxué', hz: '我的同学', cls: 'person' },
            { py: 'huì', hz: '会', cls: 'activity' },
            { py: 'hěn duō huódòng', hz: '很多活动', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My classmates can do many activities. / يستطيع زملائي القيام بالكثير من الأنشطة.'
        },
        {
          tokens: [
            { py: 'Mǎlìyàmǔ', hz: '玛丽亚姆', cls: 'name' },
            { py: 'huì', hz: '会', cls: 'activity' },
            { py: 'huàhuà', hz: '画画', cls: 'activity' },
            { hz: '，' },
            { py: 'tā', hz: '她', cls: 'person' },
            { py: 'huà de', hz: '画得', cls: 'activity' },
            { py: 'hěn hǎo', hz: '很好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Mariam can draw. She draws very well. / تستطيع مريم الرسم. هي ترسم جيدًا جدًا.'
        },
        {
          tokens: [
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { py: 'huì', hz: '会', cls: 'activity' },
            { py: 'yóuyǒng', hz: '游泳', cls: 'activity' },
            { hz: '，' },
            { py: 'tā', hz: '她', cls: 'person' },
            { py: 'yóu de', hz: '游得', cls: 'activity' },
            { py: 'hěn kuài', hz: '很快', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Fatima can swim. She swims very fast. / تستطيع فاطمة السباحة. هي تسبح بسرعة كبيرة.'
        },
        {
          tokens: [
            { py: 'Fǎdìmǎ', hz: '法蒂玛', cls: 'name' },
            { py: 'huì chànggē', hz: '会唱歌', cls: 'activity' },
            { hz: '，' },
            { py: 'hái huì', hz: '还会', cls: 'activity' },
            { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Fatima can sing and can also play the piano. / تستطيع فاطمة الغناء وتستطيع أيضًا العزف على البيانو.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
            { py: 'tán de', hz: '弹得', cls: 'activity' },
            { py: 'zhēn hǎo', hz: '真好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'She plays the piano really well. / هي تعزف على البيانو بشكل رائع.'
        },
        {
          tokens: [
            { py: 'Wǒ zuì xǐhuān', hz: '我最喜欢', cls: 'like' },
            { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like playing the piano the most. / أنا أحب العزف على البيانو أكثر شيء.'
        },
        {
          tokens: [
            { py: 'Wǒ yě xiǎng xué', hz: '我也想学', cls: 'self' },
            { py: 'tán gāngqín', hz: '弹钢琴', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I also want to learn to play the piano. / أريد أيضًا أن أتعلم العزف على البيانو.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “弹钢琴” 是什么意思？',
      pinyin: '“Tán gāngqín” shì shénme yìsi?',
      translation: 'What does “弹钢琴” mean?',
      choices: [
        { text: 'play the piano', correct: true },
        { text: 'play basketball', correct: false },
        { text: 'draw', correct: false }
      ]
    },
    {
      question: '2. “你弹得真好！” 是什么意思？',
      pinyin: '“Nǐ tán de zhēn hǎo!” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'You play really well!', correct: true },
        { text: 'You can swim.', correct: false },
        { text: 'You sing so-so.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “so-so”？',
      pinyin: 'Nǎ yí ge shì “so-so”?',
      translation: 'Which one means “so-so”?',
      choices: [
        { text: '一般', correct: true },
        { text: '真好', correct: false },
        { text: '很好', correct: false }
      ]
    },
    {
      question: '4. “法蒂玛会唱歌，还会弹钢琴。” 是什么意思？',
      pinyin: '“Fǎdìmǎ huì chànggē, hái huì tán gāngqín.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Fatima can sing and can also play the piano.', correct: true },
        { text: 'Fatima can only swim.', correct: false },
        { text: 'Fatima cannot sing.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ de péngyou', hz: '我的朋友', cls: 'person' },
        { py: 'jiào', hz: '叫', cls: 'name' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '他/她', cls: 'person' },
        { py: 'huì', hz: '会', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā', hz: '他/她', cls: 'person' },
        { blank: true },
        { py: 'de', hz: '得', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ yě xiǎng xué', hz: '我也想学', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'My friend is called ______. He/She can ______. He/She does it ______. I also want to learn ______.',
    tip: 'Use: 打篮球、游泳、画画、唱歌、弹钢琴、很好、真好、一般、很快。'
  },

  meanings: {
    '你': 'you / أنت',
    '我': 'I / أنا',
    '他': 'he / هو',
    '她': 'she / هي',
    '我们': 'we / نحن',
    '我的同学': 'my classmates / زملائي',
    '我的朋友': 'my friend / صديقي / صديقتي',
    '阿里': 'Ali / علي',
    '玛丽亚姆': 'Mariam / مريم',
    '法蒂玛': 'Fatima / فاطمة',
    '会': 'can / يستطيع',
    '都会': 'all can / يستطيعون جميعًا',
    '还会': 'also can / يستطيع أيضًا',
    '打篮球': 'play basketball / لعب كرة السلة',
    '打网球': 'play tennis / لعب التنس',
    '打乒乓球': 'play table tennis / لعب تنس الطاولة',
    '游泳': 'swim / السباحة',
    '画画': 'draw / الرسم',
    '弹钢琴': 'play the piano / العزف على البيانو',
    '唱歌': 'sing / الغناء',
    '会唱歌': 'can sing / يستطيع الغناء',
    '很多活动': 'many activities / الكثير من الأنشطة',
    '你刚才': 'you just now / أنت قبل قليل',
    '弹钢琴了吗': 'did you play the piano / هل عزفت على البيانو',
    '弹了': 'played / عزفت',
    '弹得': 'play...well / يعزف بطريقة',
    '弹得真好': 'play really well / يعزف بشكل رائع',
    '真好': 'really good / جيد جدًا',
    '谢谢': 'thank you / شكرًا',
    '会唱歌吗': 'can you sing / هل تستطيع الغناء',
    '唱得怎么样': 'how well do you sing / كيف تغني',
    '唱得': 'sing... / يغني بطريقة',
    '唱得一般': 'sing so-so / يغني بشكل عادي',
    '一般': 'so-so / عادي',
    '但是': 'but / لكن',
    '我很喜欢': 'I really like / أنا أحب كثيرًا',
    '画得': 'draw... / يرسم بطريقة',
    '画得很好': 'draw very well / يرسم جيدًا جدًا',
    '游得': 'swim... / يسبح بطريقة',
    '游得很快': 'swim very fast / يسبح بسرعة كبيرة',
    '很快': 'very fast / سريع جدًا',
    '很好': 'very good / جيد جدًا',
    '我最喜欢': 'I like the most / أحب أكثر شيء',
    '我也想学': 'I also want to learn / أريد أيضًا أن أتعلم',
    '叫': 'be called / اسمه'
  }
};