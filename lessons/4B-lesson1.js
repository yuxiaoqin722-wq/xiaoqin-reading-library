window.LESSONS = window.LESSONS || {};

window.LESSONS['4B-lesson1'] = {
  id: '4B-lesson1',
  book: '4B',
  lesson: 'Lesson 1',
  title: '他拍的短视频酷极了！',
  theme: 'Short Videos and Strong Evaluation',
  goal: 'Praise a video or work using 形容词 + 极了.',
  heroTranslation: 'The short video he made is extremely cool!',

  titleTokens: [
    { py: 'Tā pāi de', hz: '他拍的', cls: 'person' },
    { py: 'duǎn shìpín', hz: '短视频', cls: 'activity' },
    { py: 'kù jí le', hz: '酷极了', cls: 'like' },
    { hz: '！' }
  ],

  keyWords: [
    { emoji: '🎬', pinyin: 'duǎn shìpín', text: '短视频', translation: 'short video / فيديو قصير' },
    { emoji: '📸', pinyin: 'pāi', text: '拍', translation: 'shoot; take / يصوّر' },
    { emoji: '😎', pinyin: 'kù', text: '酷', translation: 'cool / رائع' },
    { emoji: '🌟', pinyin: 'bàng', text: '棒', translation: 'great / ممتاز' },
    { emoji: '👀', pinyin: 'xīyǐn', text: '吸引', translation: 'attract / يجذب' },
    { emoji: '🌐', pinyin: 'wǎngshàng', text: '网上', translation: 'online / على الإنترنت' },
    { emoji: '🏫', pinyin: 'xiàoyuán', text: '校园', translation: 'campus / حرم المدرسة' },
    { emoji: '💬', pinyin: 'gàosu', text: '告诉', translation: 'tell / يخبر' },
    { emoji: '🎵', pinyin: 'yīnyuè', text: '音乐', translation: 'music / موسيقى' },
    { emoji: '🖼️', pinyin: 'huàmiàn', text: '画面', translation: 'image; visual / الصورة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Zhè ge duǎn shìpín', hz: '这个短视频', cls: 'activity' },
        { py: 'kù jí le', hz: '酷极了', cls: 'like' },
        { hz: '！' }
      ],
      translation: 'This short video is extremely cool! / هذا الفيديو القصير رائع جدًا!'
    },
    {
      tokens: [
        { py: 'Tā pāi de zhàopiàn', hz: '他拍的照片', cls: 'activity' },
        { py: 'hǎokàn jí le', hz: '好看极了', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'The photos he took are extremely beautiful. / الصور التي التقطها جميلة جدًا.'
    },
    {
      tokens: [
        { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
        { py: 'pāi de hěn bàng', hz: '拍得很棒', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Hassan filmed it very well. / صوّر حسن الفيديو بشكل ممتاز.'
    },
    {
      tokens: [
        { py: 'Zhè ge shìpín', hz: '这个视频', cls: 'activity' },
        { py: 'xīyǐn rén jí le', hz: '吸引人极了', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'This video is extremely attractive. / هذا الفيديو جذاب جدًا.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会评价作品',
      translation: 'This short video is extremely cool. The photos he took are extremely beautiful. The panda is extremely cute. This campus is extremely beautiful.',
      tip: 'Reading Goal: Use 形容词 + 极了 to give a strong evaluation.',
      lines: [
        {
          tokens: [
            { py: 'Zhè ge duǎn shìpín', hz: '这个短视频', cls: 'activity' },
            { py: 'kù jí le', hz: '酷极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This short video is extremely cool. / هذا الفيديو القصير رائع جدًا.'
        },
        {
          tokens: [
            { py: 'Tā pāi de zhàopiàn', hz: '他拍的照片', cls: 'activity' },
            { py: 'hǎokàn jí le', hz: '好看极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The photos he took are extremely beautiful. / الصور التي التقطها جميلة جدًا.'
        },
        {
          tokens: [
            { py: 'Xióngmāo', hz: '熊猫', cls: 'activity' },
            { py: 'kěài jí le', hz: '可爱极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The panda is extremely cute. / الباندا لطيفة جدًا.'
        },
        {
          tokens: [
            { py: 'Zhè ge xiàoyuán', hz: '这个校园', cls: 'place' },
            { py: 'piàoliang jí le', hz: '漂亮极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'This campus is extremely beautiful. / هذا الحرم المدرسي جميل جدًا.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会评价短视频',
      translation: 'Have you watched the museum short video Hassan made? I have watched it. It is extremely cool. What is cool about it? There are many cultural relics in the video, and there are also Chinese introductions. How did he film it? He filmed it extremely well. The visuals are very clear, and the music is also very nice. No wonder many classmates like watching it.',
      tip: 'Pair Work: Explain why a short video is good.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ kàn guò', hz: '你看过', cls: 'person' },
            { py: 'Hāsāng pāi de', hz: '哈桑拍的', cls: 'name' },
            { py: 'bówùguǎn duǎn shìpín ma', hz: '博物馆短视频吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Have you watched the museum short video Hassan made? / هل شاهدت الفيديو القصير عن المتحف الذي صوّره حسن؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Kàn guò', hz: '看过', cls: 'activity' },
            { hz: '，' },
            { py: 'kù jí le', hz: '酷极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I have watched it. It is extremely cool. / شاهدته، إنه رائع جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Kù zài nǎlǐ', hz: '酷在哪里', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'What is cool about it? / ما الشيء الرائع فيه؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Shìpín lǐ', hz: '视频里', cls: 'activity' },
            { py: 'yǒu hěn duō wénwù', hz: '有很多文物', cls: 'activity' },
            { hz: '，' },
            { py: 'hái yǒu Zhōngwén jièshào', hz: '还有中文介绍', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'There are many cultural relics in the video, and there are also Chinese introductions. / في الفيديو كثير من الآثار، وهناك أيضًا شرح باللغة الصينية.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā pāi de', hz: '他拍得', cls: 'person' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'speaker' },
            { hz: '？' }
          ],
          translation: 'How did he film it? / كيف كان تصويره؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā pāi de', hz: '他拍得', cls: 'person' },
            { py: 'bàng jí le', hz: '棒极了', cls: 'like' },
            { hz: '。' },
            { py: 'huàmiàn hěn qīngchu', hz: '画面很清楚', cls: 'like' },
            { hz: '，' },
            { py: 'yīnyuè yě hěn hǎotīng', hz: '音乐也很好听', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'He filmed it extremely well. The visuals are very clear, and the music is also very nice. / صوّره بشكل ممتاز، الصورة واضحة جدًا، والموسيقى جميلة أيضًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Guàibude', hz: '怪不得', cls: 'speaker' },
            { py: 'hěn duō tóngxué', hz: '很多同学', cls: 'person' },
            { py: 'dōu xǐhuan kàn', hz: '都喜欢看', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'No wonder many classmates like watching it. / لا عجب أن كثيرًا من الطلاب يحبون مشاهدته.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会介绍一个短视频',
      translation: 'Yesterday, Hassan showed us a short video he made. This short video was filmed in a museum. In the video, there were many beautiful cultural relics and simple Chinese introductions. The visuals were very clear, and the music was also very nice. I thought Hassan filmed it extremely well. Later, he posted the short video online. Many classmates watched it, and everyone said this short video was extremely cool.',
      tip: 'Speaking Goal: Introduce and evaluate a short video with reasons.',
      lines: [
        {
          tokens: [
            { py: 'Zuótiān', hz: '昨天', cls: 'time' },
            { hz: '，' },
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { py: 'gěi wǒmen kàn le', hz: '给我们看了', cls: 'activity' },
            { py: 'tā pāi de duǎn shìpín', hz: '他拍的短视频', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Yesterday, Hassan showed us the short video he made. / أمس أرانا حسن الفيديو القصير الذي صوّره.'
        },
        {
          tokens: [
            { py: 'Zhè ge duǎn shìpín', hz: '这个短视频', cls: 'activity' },
            { py: 'shì zài bówùguǎn pāi de', hz: '是在博物馆拍的', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This short video was filmed in a museum. / تم تصوير هذا الفيديو القصير في المتحف.'
        },
        {
          tokens: [
            { py: 'Shìpín lǐ', hz: '视频里', cls: 'activity' },
            { py: 'yǒu hěn duō piàoliang de wénwù', hz: '有很多漂亮的文物', cls: 'activity' },
            { hz: '。' },
            { py: 'hái yǒu jiǎndān de Zhōngwén jièshào', hz: '还有简单的中文介绍', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'In the video, there were many beautiful cultural relics and simple Chinese introductions. / في الفيديو كثير من الآثار الجميلة، وهناك أيضًا شرح صيني بسيط.'
        },
        {
          tokens: [
            { py: 'Huàmiàn', hz: '画面', cls: 'activity' },
            { py: 'hěn qīngchu', hz: '很清楚', cls: 'like' },
            { hz: '，' },
            { py: 'yīnyuè', hz: '音乐', cls: 'activity' },
            { py: 'yě hěn hǎotīng', hz: '也很好听', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The visuals were very clear, and the music was also very nice. / كانت الصورة واضحة جدًا، وكانت الموسيقى جميلة أيضًا.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { py: 'pāi de bàng jí le', hz: '拍得棒极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I thought Hassan filmed it extremely well. / أعتقد أن حسن صوّره بشكل ممتاز جدًا.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { hz: '，' },
            { py: 'tā bǎ duǎn shìpín', hz: '他把短视频', cls: 'person' },
            { py: 'fā dào le wǎngshàng', hz: '发到了网上', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Later, he posted the short video online. / بعد ذلك نشر الفيديو القصير على الإنترنت.'
        },
        {
          tokens: [
            { py: 'Hěn duō tóngxué', hz: '很多同学', cls: 'person' },
            { py: 'dōu kàn le', hz: '都看了', cls: 'activity' },
            { hz: '，' },
            { py: 'dàjiā dōu shuō', hz: '大家都说', cls: 'person' },
            { py: 'zhè ge duǎn shìpín', hz: '这个短视频', cls: 'activity' },
            { py: 'kù jí le', hz: '酷极了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Many classmates watched it, and everyone said this short video was extremely cool. / شاهده كثير من الطلاب، وقال الجميع إن هذا الفيديو القصير رائع جدًا.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “酷极了” 是什么意思？',
      pinyin: '“Kù jí le” shì shénme yìsi?',
      translation: 'What does this phrase mean?',
      choices: [
        { text: 'extremely cool', correct: true },
        { text: 'a little cold', correct: false },
        { text: 'very expensive', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “short video”？',
      pinyin: 'Nǎ yí ge shì “short video”?',
      translation: 'Which one means “short video”?',
      choices: [
        { text: '短视频', correct: true },
        { text: '校园', correct: false },
        { text: '网上', correct: false }
      ]
    },
    {
      question: '3. “他拍得棒极了。” 是什么意思？',
      pinyin: '“Tā pāi de bàng jí le.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'He filmed it extremely well.', correct: true },
        { text: 'He watched it online.', correct: false },
        { text: 'He told a story.', correct: false }
      ]
    },
    {
      question: '4. “发到了网上” 是什么意思？',
      pinyin: '“Fā dào le wǎngshàng” shì shénme yìsi?',
      translation: 'What does this phrase mean?',
      choices: [
        { text: 'posted online', correct: true },
        { text: 'went to school', correct: false },
        { text: 'took a photo', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Zhè ge duǎn shìpín', hz: '这个短视频', cls: 'activity' },
        { py: 'kù', hz: '酷', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā pāi de zhàopiàn', hz: '他拍的照片', cls: 'activity' },
        { py: 'hǎokàn', hz: '好看', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Shìpín lǐ', hz: '视频里', cls: 'activity' },
        { py: 'yǒu hěn duō', hz: '有很多', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Huàmiàn', hz: '画面', cls: 'activity' },
        { py: 'hěn', hz: '很', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā bǎ duǎn shìpín', hz: '他把短视频', cls: 'person' },
        { py: 'fā dào le', hz: '发到了', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'This short video is extremely cool. The photos he took are extremely beautiful. There are many ______ in the video. The visuals are very ______. He posted the short video to ______.',
    tip: 'Use: 极了、文物、中文介绍、清楚、网上。'
  },

  meanings: {
    '短视频': 'short video / فيديو قصير',
    '视频': 'video / فيديو',
    '拍': 'shoot; take / يصوّر',
    '他拍的': 'the one he filmed / الذي صوّره',
    '他拍的短视频': 'the short video he filmed / الفيديو القصير الذي صوّره',
    '酷': 'cool / رائع',
    '酷极了': 'extremely cool / رائع جدًا',
    '棒': 'great / ممتاز',
    '棒极了': 'extremely great / ممتاز جدًا',
    '拍得棒极了': 'filmed extremely well / صوّر بشكل ممتاز جدًا',
    '可爱极了': 'extremely cute / لطيف جدًا',
    '好看极了': 'extremely beautiful / جميل جدًا',
    '漂亮极了': 'extremely beautiful / جميل جدًا',
    '吸引': 'attract / يجذب',
    '吸引人': 'attractive / جذاب',
    '吸引人极了': 'extremely attractive / جذاب جدًا',
    '网上': 'online / على الإنترنت',
    '发到了网上': 'posted online / نشر على الإنترنت',
    '校园': 'campus / حرم المدرسة',
    '告诉': 'tell / يخبر',
    '哈桑': 'Hassan / حسن',
    '博物馆': 'museum / متحف',
    '博物馆短视频': 'museum short video / فيديو قصير عن المتحف',
    '看过': 'have watched / شاهد من قبل',
    '你看过': 'have you watched / هل شاهدت',
    '酷在哪里': 'what is cool about it / ما الشيء الرائع فيه',
    '视频里': 'in the video / في الفيديو',
    '文物': 'cultural relics / آثار ثقافية',
    '有很多文物': 'there are many cultural relics / يوجد كثير من الآثار',
    '中文介绍': 'Chinese introduction / شرح باللغة الصينية',
    '还有中文介绍': 'also has Chinese introductions / يوجد أيضًا شرح باللغة الصينية',
    '画面': 'visual; image / الصورة',
    '很清楚': 'very clear / واضح جدًا',
    '音乐': 'music / موسيقى',
    '很好听': 'very nice to listen to / جميل جدًا للاستماع',
    '音乐也很好听': 'the music is also very nice / الموسيقى جميلة أيضًا',
    '怪不得': 'no wonder / لا عجب',
    '很多同学': 'many classmates / كثير من الطلاب',
    '都喜欢看': 'all like watching / كلهم يحبون المشاهدة',
    '给我们看了': 'showed us / أرانا',
    '是在博物馆拍的': 'was filmed in a museum / تم تصويره في المتحف',
    '漂亮的文物': 'beautiful cultural relics / آثار جميلة',
    '简单的中文介绍': 'simple Chinese introductions / شرح صيني بسيط',
    '后来': 'later / بعد ذلك',
    '他把短视频': 'he took the short video / هو أخذ الفيديو القصير',
    '很多同学都看了': 'many classmates watched it / شاهده كثير من الطلاب',
    '大家都说': 'everyone said / قال الجميع'
  }
};