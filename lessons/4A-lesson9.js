window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson9'] = {
  id: '4A-lesson9',
  book: '4A',
  lesson: 'Lesson 9',
  title: '你的汉语越来越好了。',
  theme: 'Progress and Encouragement',
  goal: 'Describe gradual change and progress using 越来越…….',
  heroTranslation: 'Your Chinese is getting better and better.',

  titleTokens: [
    { py: 'Nǐ de Hànyǔ', hz: '你的汉语', cls: 'person' },
    { py: 'yuè lái yuè hǎo le', hz: '越来越好了', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '📈', pinyin: 'yuè lái yuè', text: '越来越', translation: 'more and more / أكثر فأكثر' },
    { emoji: '💪', pinyin: 'nǔlì', text: '努力', translation: 'work hard / يجتهد' },
    { emoji: '🤝', pinyin: 'bāngzhù', text: '帮助', translation: 'help / يساعد' },
    { emoji: '🌟', pinyin: 'jīhuì', text: '机会', translation: 'chance / فرصة' },
    { emoji: '📝', pinyin: 'zuòwén', text: '作文', translation: 'composition / موضوع تعبير' },
    { emoji: '🗣️', pinyin: 'shuō de qīngchu', text: '说得清楚', translation: 'speak clearly / يتحدث بوضوح' },
    { emoji: '📚', pinyin: 'Hànyǔ', text: '汉语', translation: 'Chinese language / اللغة الصينية' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ de Hànyǔ', hz: '你的汉语', cls: 'person' },
        { py: 'yuè lái yuè hǎo le', hz: '越来越好了', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Your Chinese is getting better and better. / لغتك الصينية تتحسن أكثر فأكثر.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yuè lái yuè xǐhuan', hz: '越来越喜欢', cls: 'like' },
        { py: 'Zhōngwén le', hz: '中文了', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I like Chinese more and more. / أنا أحب الصينية أكثر فأكثر.'
    },
    {
      tokens: [
        { py: 'Wǒ měitiān', hz: '我每天', cls: 'time' },
        { py: 'nǔlì xuéxí', hz: '努力学习', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I study hard every day. / أدرس بجد كل يوم.'
    },
    {
      tokens: [
        { py: 'Lǎoshī', hz: '老师', cls: 'person' },
        { py: 'chángcháng bāngzhù wǒ', hz: '常常帮助我', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'The teacher often helps me. / تساعدني المعلمة كثيرًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说进步',
      translation: 'My Chinese is getting better and better. I like Chinese more and more. I study hard every day. The teacher often helps me.',
      tip: 'Reading Goal: Use 越来越…… to talk about progress.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ de Hànyǔ', hz: '我的汉语', cls: 'self' },
            { py: 'yuè lái yuè hǎo le', hz: '越来越好了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'My Chinese is getting better and better. / لغتي الصينية تتحسن أكثر فأكثر.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yuè lái yuè xǐhuan', hz: '越来越喜欢', cls: 'like' },
            { py: 'Zhōngwén le', hz: '中文了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I like Chinese more and more. / أنا أحب الصينية أكثر فأكثر.'
        },
        {
          tokens: [
            { py: 'Wǒ měitiān', hz: '我每天', cls: 'time' },
            { py: 'nǔlì xuéxí', hz: '努力学习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I study hard every day. / أدرس بجد كل يوم.'
        },
        {
          tokens: [
            { py: 'Lǎoshī', hz: '老师', cls: 'person' },
            { py: 'chángcháng bāngzhù wǒ', hz: '常常帮助我', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The teacher often helps me. / تساعدني المعلمة كثيرًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会鼓励同学',
      translation: 'Your Chinese is getting better and better. Really? Thank you. Now you speak more and more clearly. Because the teacher often helps me, and I also study hard every day. You will definitely get better and better. I hope I will have a chance to go to China in the future.',
      tip: 'Pair Work: Encourage a classmate and talk about progress.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ de Hànyǔ', hz: '你的汉语', cls: 'person' },
            { py: 'yuè lái yuè hǎo le', hz: '越来越好了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Your Chinese is getting better and better. / لغتك الصينية تتحسن أكثر فأكثر.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhēn de ma', hz: '真的吗', cls: 'speaker' },
            { hz: '，' },
            { py: 'Xièxie nǐ', hz: '谢谢你', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'Really? Thank you. / حقًا؟ شكرًا لك.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ xiànzài', hz: '你现在', cls: 'person' },
            { py: 'shuō de yuè lái yuè qīngchu le', hz: '说得越来越清楚了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Now you speak more and more clearly. / الآن تتحدثين بوضوح أكثر فأكثر.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Yīnwèi lǎoshī', hz: '因为老师', cls: 'person' },
            { py: 'chángcháng bāngzhù wǒ', hz: '常常帮助我', cls: 'activity' },
            { hz: '。' },
            { py: 'wǒ yě měitiān', hz: '我也每天', cls: 'time' },
            { py: 'nǔlì xuéxí', hz: '努力学习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Because the teacher often helps me, and I also study hard every day. / لأن المعلمة تساعدني كثيرًا، وأنا أيضًا أدرس بجد كل يوم.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yídìng', hz: '你一定', cls: 'person' },
            { py: 'huì yuè lái yuè hǎo', hz: '会越来越好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'You will definitely get better and better. / بالتأكيد ستصبحين أفضل فأفضل.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ xīwàng yǐhòu', hz: '我希望以后', cls: 'like' },
            { py: 'yǒu jīhuì', hz: '有机会', cls: 'activity' },
            { py: 'qù Zhōngguó', hz: '去中国', cls: 'country' },
            { hz: '。' }
          ],
          translation: 'I hope I will have a chance to go to China in the future. / أتمنى أن تتاح لي فرصة للذهاب إلى الصين في المستقبل.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲自己的中文进步',
      translation: 'This semester, I feel that my Chinese is getting better and better. Before, I could only say very short sentences. Now, I can introduce my school and also talk about a museum visit experience. The teacher often helps me, and my classmates also give me many chances to practice. I work hard to read Chinese every day, and I also work hard to write Chinese characters. Slowly, I like Chinese more and more. I hope I will have a chance to go to China in the future and use Chinese to communicate with others.',
      tip: 'Speaking Goal: Tell a complete story about your learning progress.',
      lines: [
        {
          tokens: [
            { py: 'Zhè ge xuéqī', hz: '这个学期', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'wǒ de Hànyǔ', hz: '我的汉语', cls: 'self' },
            { py: 'yuè lái yuè hǎo le', hz: '越来越好了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This semester, I feel that my Chinese is getting better and better. / في هذا الفصل، أشعر أن لغتي الصينية تتحسن أكثر فأكثر.'
        },
        {
          tokens: [
            { py: 'Yǐqián', hz: '以前', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ zhǐ huì shuō', hz: '我只会说', cls: 'self' },
            { py: 'hěn duǎn de jùzi', hz: '很短的句子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Before, I could only say very short sentences. / في السابق، كنت أستطيع قول جمل قصيرة فقط.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ kěyǐ', hz: '我可以', cls: 'self' },
            { py: 'jièshào wǒ de xuéxiào', hz: '介绍我的学校', cls: 'activity' },
            { hz: '，' },
            { py: 'yě kěyǐ jiǎng', hz: '也可以讲', cls: 'activity' },
            { py: 'yí cì cānguān bówùguǎn de jīnglì', hz: '一次参观博物馆的经历', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Now, I can introduce my school and also talk about a museum visit experience. / الآن أستطيع أن أعرّف بمدرستي، وأستطيع أيضًا أن أتحدث عن تجربة زيارة متحف.'
        },
        {
          tokens: [
            { py: 'Lǎoshī', hz: '老师', cls: 'person' },
            { py: 'chángcháng bāngzhù wǒ', hz: '常常帮助我', cls: 'activity' },
            { hz: '，' },
            { py: 'tóngxué yě gěi wǒ', hz: '同学也给我', cls: 'person' },
            { py: 'hěn duō jīhuì liànxí', hz: '很多机会练习', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The teacher often helps me, and my classmates also give me many chances to practice. / تساعدني المعلمة كثيرًا، ويعطيني زملائي أيضًا فرصًا كثيرة للتدرب.'
        },
        {
          tokens: [
            { py: 'Wǒ měitiān', hz: '我每天', cls: 'time' },
            { py: 'nǔlì dú Zhōngwén', hz: '努力读中文', cls: 'activity' },
            { hz: '，' },
            { py: 'yě nǔlì', hz: '也努力', cls: 'activity' },
            { py: 'xiě Hànzì', hz: '写汉字', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I work hard to read Chinese every day, and I also work hard to write Chinese characters. / أجتهد في قراءة الصينية كل يوم، وأجتهد أيضًا في كتابة الحروف الصينية.'
        },
        {
          tokens: [
            { py: 'Mànmàn de', hz: '慢慢地', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'yuè lái yuè xǐhuan', hz: '越来越喜欢', cls: 'like' },
            { py: 'Zhōngwén le', hz: '中文了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Slowly, I like Chinese more and more. / ببطء، أصبحت أحب الصينية أكثر فأكثر.'
        },
        {
          tokens: [
            { py: 'Wǒ xīwàng yǐhòu', hz: '我希望以后', cls: 'like' },
            { py: 'yǒu jīhuì', hz: '有机会', cls: 'activity' },
            { py: 'qù Zhōngguó', hz: '去中国', cls: 'country' },
            { hz: '，' },
            { py: 'yòng Hànyǔ', hz: '用汉语', cls: 'activity' },
            { py: 'hé biérén jiāoliú', hz: '和别人交流', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'I hope I will have a chance to go to China in the future and use Chinese to communicate with others. / أتمنى أن تتاح لي فرصة للذهاب إلى الصين وأن أستخدم الصينية للتواصل مع الآخرين.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “你的汉语越来越好了。” 是什么意思？',
      pinyin: '“Nǐ de Hànyǔ yuè lái yuè hǎo le.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Your Chinese is getting better and better.', correct: true },
        { text: 'Your Chinese is very difficult.', correct: false },
        { text: 'You do not like Chinese.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “work hard”？',
      pinyin: 'Nǎ yí ge shì “work hard”?',
      translation: 'Which one means “work hard”?',
      choices: [
        { text: '努力', correct: true },
        { text: '机会', correct: false },
        { text: '作文', correct: false }
      ]
    },
    {
      question: '3. “我越来越喜欢中文了。” 是什么意思？',
      pinyin: '“Wǒ yuè lái yuè xǐhuan Zhōngwén le.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I like Chinese more and more.', correct: true },
        { text: 'I went to China before.', correct: false },
        { text: 'I do not study Chinese.', correct: false }
      ]
    },
    {
      question: '4. “老师常常帮助我。” 是什么意思？',
      pinyin: '“Lǎoshī chángcháng bāngzhù wǒ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'The teacher often helps me.', correct: true },
        { text: 'The teacher goes home.', correct: false },
        { text: 'The teacher writes a diary.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Wǒ de Hànyǔ', hz: '我的汉语', cls: 'self' },
        { py: 'yuè lái yuè', hz: '越来越', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'yuè lái yuè xǐhuan', hz: '越来越喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Lǎoshī', hz: '老师', cls: 'person' },
        { py: 'chángcháng', hz: '常常', cls: 'time' },
        { blank: true },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ měitiān', hz: '我每天', cls: 'time' },
        { py: 'nǔlì', hz: '努力', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xīwàng', hz: '我希望', cls: 'like' },
        { py: 'yǒu jīhuì', hz: '有机会', cls: 'activity' },
        { py: 'qù', hz: '去', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'My Chinese is getting more and more ______. I like ______ more and more. The teacher often ______ me. I work hard to ______ every day. I hope I will have a chance to go to ______.',
    tip: 'Use: 好、中文、帮助、学习、读中文、写汉字、中国。'
  },

  meanings: {
    '越来越': 'more and more / أكثر فأكثر',
    '越来越好了': 'getting better and better / يتحسن أكثر فأكثر',
    '你的汉语': 'your Chinese / لغتك الصينية',
    '你的汉语越来越好了': 'your Chinese is getting better and better / لغتك الصينية تتحسن أكثر فأكثر',
    '我的汉语': 'my Chinese / لغتي الصينية',
    '我的汉语越来越好了': 'my Chinese is getting better and better / لغتي الصينية تتحسن أكثر فأكثر',
    '努力': 'work hard / يجتهد',
    '努力学习': 'study hard / يدرس بجد',
    '帮助': 'help / يساعد',
    '帮助我': 'help me / يساعدني',
    '常常帮助我': 'often helps me / يساعدني كثيرًا',
    '机会': 'chance / فرصة',
    '有机会': 'have a chance / لديه فرصة',
    '作文': 'composition / موضوع تعبير',
    '汉语': 'Chinese language / اللغة الصينية',
    '中文': 'Chinese / الصينية',
    '越来越喜欢': 'like more and more / يحب أكثر فأكثر',
    '越来越喜欢中文了': 'like Chinese more and more / يحب الصينية أكثر فأكثر',
    '说得清楚': 'speak clearly / يتحدث بوضوح',
    '说得越来越清楚了': 'speak more and more clearly / يتحدث بوضوح أكثر فأكثر',
    '真的吗': 'really / حقًا',
    '谢谢你': 'thank you / شكرًا لك',
    '你现在': 'you now / أنت الآن',
    '因为老师': 'because the teacher / لأن المعلمة',
    '我也每天': 'I also every day / أنا أيضًا كل يوم',
    '你一定': 'you definitely / أنت بالتأكيد',
    '会越来越好': 'will get better and better / سيتحسن أكثر فأكثر',
    '我希望以后': 'I hope in the future / أتمنى في المستقبل',
    '去中国': 'go to China / يذهب إلى الصين',
    '这个学期': 'this semester / هذا الفصل',
    '我觉得': 'I feel / أشعر',
    '以前': 'before / سابقًا',
    '我只会说': 'I could only say / كنت أستطيع فقط أن أقول',
    '很短的句子': 'very short sentences / جمل قصيرة جدًا',
    '现在': 'now / الآن',
    '我可以': 'I can / أستطيع',
    '介绍我的学校': 'introduce my school / أعرّف بمدرستي',
    '也可以讲': 'also can talk about / أستطيع أيضًا أن أتحدث عن',
    '一次参观博物馆的经历': 'a museum visit experience / تجربة زيارة متحف',
    '同学也给我': 'classmates also give me / زملائي يعطونني أيضًا',
    '很多机会练习': 'many chances to practice / فرصًا كثيرة للتدرب',
    '我每天': 'I every day / أنا كل يوم',
    '努力读中文': 'work hard to read Chinese / يجتهد في قراءة الصينية',
    '也努力': 'also work hard / يجتهد أيضًا',
    '写汉字': 'write Chinese characters / يكتب الحروف الصينية',
    '慢慢地': 'slowly / ببطء',
    '用汉语': 'use Chinese / يستخدم الصينية',
    '和别人交流': 'communicate with others / يتواصل مع الآخرين'
  }
};