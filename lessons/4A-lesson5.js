window.LESSONS = window.LESSONS || {};

window.LESSONS['4A-lesson5'] = {
  id: '4A-lesson5',
  book: '4A',
  lesson: 'Lesson 5',
  title: '欢迎你！快进来吧。',
  theme: 'Welcoming Guests and Introducing Rooms',
  goal: 'Welcome guests and introduce rooms at home using 进来 / 客厅 / 餐厅 / 卧室 / 书房.',
  heroTranslation: 'Welcome! Come in quickly.',

  titleTokens: [
    { py: 'Huānyíng nǐ', hz: '欢迎你', cls: 'like' },
    { hz: '！' },
    { py: 'Kuài jìnlái ba', hz: '快进来吧', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👋', pinyin: 'huānyíng', text: '欢迎', translation: 'welcome / مرحبًا' },
    { emoji: '➡️', pinyin: 'jìnlái', text: '进来', translation: 'come in / ادخل' },
    { emoji: '⬅️', pinyin: 'chūqù', text: '出去', translation: 'go out / اخرج' },
    { emoji: '🏠', pinyin: 'fángzi', text: '房子', translation: 'house / بيت' },
    { emoji: '🛋️', pinyin: 'kètīng', text: '客厅', translation: 'living room / غرفة المعيشة' },
    { emoji: '🍽️', pinyin: 'cāntīng', text: '餐厅', translation: 'dining room / غرفة الطعام' },
    { emoji: '🛏️', pinyin: 'wòshì', text: '卧室', translation: 'bedroom / غرفة النوم' },
    { emoji: '📚', pinyin: 'shūfáng', text: '书房', translation: 'study room / غرفة الدراسة' },
    { emoji: '🍳', pinyin: 'chúfáng', text: '厨房', translation: 'kitchen / المطبخ' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Huānyíng nǐ', hz: '欢迎你', cls: 'like' },
        { hz: '，' },
        { py: 'kuài jìnlái ba', hz: '快进来吧', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Welcome, come in quickly. / مرحبًا، تفضل بالدخول.'
    },
    {
      tokens: [
        { py: 'Zhè shì', hz: '这是', cls: 'self' },
        { py: 'wǒ jiā', hz: '我家', cls: 'place' },
        { hz: '。' }
      ],
      translation: 'This is my home. / هذا بيتي.'
    },
    {
      tokens: [
        { py: 'Bàba hé māma', hz: '爸爸和妈妈', cls: 'person' },
        { py: 'zài kètīng', hz: '在客厅', cls: 'place' },
        { py: 'kàn diànshì', hz: '看电视', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'Dad and Mom are watching TV in the living room. / أبي وأمي يشاهدان التلفاز في غرفة المعيشة.'
    },
    {
      tokens: [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'zài cāntīng', hz: '在餐厅', cls: 'place' },
        { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'We eat in the dining room. / نحن نأكل في غرفة الطعام.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会介绍我的家',
      translation: 'Welcome, come in quickly. This is my home. Dad and Mom are watching TV in the living room. My sister and I are chatting in the bedroom. We eat in the dining room.',
      tip: 'Reading Goal: Say simple room names and family activities.',
      lines: [
        {
          tokens: [
            { py: 'Huānyíng nǐ', hz: '欢迎你', cls: 'like' },
            { hz: '，' },
            { py: 'kuài jìnlái ba', hz: '快进来吧', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Welcome, come in quickly. / مرحبًا، تفضل بالدخول.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'self' },
            { py: 'wǒ jiā', hz: '我家', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This is my home. / هذا بيتي.'
        },
        {
          tokens: [
            { py: 'Bàba hé māma', hz: '爸爸和妈妈', cls: 'person' },
            { py: 'zài kètīng', hz: '在客厅', cls: 'place' },
            { py: 'kàn diànshì', hz: '看电视', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Dad and Mom are watching TV in the living room. / أبي وأمي يشاهدان التلفاز في غرفة المعيشة.'
        },
        {
          tokens: [
            { py: 'Wǒ hé mèimei', hz: '我和妹妹', cls: 'self' },
            { py: 'zài wòshì', hz: '在卧室', cls: 'place' },
            { py: 'liáotiān', hz: '聊天', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My sister and I are chatting in the bedroom. / أنا وأختي الصغرى نتحدث في غرفة النوم.'
        },
        {
          tokens: [
            { py: 'Wǒmen', hz: '我们', cls: 'self' },
            { py: 'zài cāntīng', hz: '在餐厅', cls: 'place' },
            { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'We eat in the dining room. / نحن نأكل في غرفة الطعام.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会欢迎朋友来家里',
      translation: 'Welcome, come in quickly. Thank you, your home is very beautiful. This is the living room. Dad and Mom often watch TV here. The living room is very big. This is the dining room. We often eat here. It is very nice. Let’s go to the dining room to eat. Okay.',
      tip: 'Pair Work: Welcome a guest and introduce your home naturally.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Huānyíng nǐ', hz: '欢迎你', cls: 'like' },
            { hz: '，' },
            { py: 'kuài jìnlái ba', hz: '快进来吧', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Welcome, come in quickly. / مرحبًا، تفضل بالدخول.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '，' },
            { py: 'nǐ jiā zhēn piàoliang', hz: '你家真漂亮', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Thank you, your home is very beautiful. / شكرًا، بيتك جميل جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì kètīng', hz: '这是客厅', cls: 'place' },
            { hz: '。' },
            { py: 'bàba hé māma', hz: '爸爸和妈妈', cls: 'person' },
            { py: 'chángcháng zài zhèlǐ', hz: '常常在这里', cls: 'place' },
            { py: 'kàn diànshì', hz: '看电视', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This is the living room. Dad and Mom often watch TV here. / هذه غرفة المعيشة، أبي وأمي غالبًا يشاهدان التلفاز هنا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Kètīng', hz: '客厅', cls: 'place' },
            { py: 'hěn dà', hz: '很大', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'The living room is very big. / غرفة المعيشة كبيرة جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhè shì cāntīng', hz: '这是餐厅', cls: 'place' },
            { hz: '。' },
            { py: 'wǒmen chángcháng', hz: '我们常常', cls: 'self' },
            { py: 'zài zhèlǐ chī fàn', hz: '在这里吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'This is the dining room. We often eat here. / هذه غرفة الطعام، نحن غالبًا نأكل هنا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zhēn bùcuò', hz: '真不错', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'It is very nice. / هذا جميل جدًا.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zǒu ba', hz: '走吧', cls: 'activity' },
            { hz: '，' },
            { py: 'wǒmen qù cāntīng', hz: '我们去餐厅', cls: 'place' },
            { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Let’s go to the dining room to eat. / هيا نذهب إلى غرفة الطعام للأكل.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo a', hz: '好啊', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Okay. / حسنًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲朋友来我家做客',
      translation: 'On Saturday afternoon, my friend came to my home as a guest. I welcomed her at the door and asked her to come in quickly. This was her first time coming to my new home. I first showed her the living room. The living room was big, and we could chat there. The dining room was next to the living room, and the kitchen was also on the first floor. The second floor had bedrooms and a study room, but we did not go upstairs. Later, we ate in the dining room and talked about many school things.',
      tip: 'Speaking Goal: Tell a short story about welcoming a friend and introducing your home.',
      lines: [
        {
          tokens: [
            { py: 'Xīngqīliù xiàwǔ', hz: '星期六下午', cls: 'time' },
            { hz: '，' },
            { py: 'péngyou', hz: '朋友', cls: 'person' },
            { py: 'lái wǒ jiā zuòkè', hz: '来我家做客', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'On Saturday afternoon, my friend came to my home as a guest. / بعد ظهر السبت، جاءت صديقتي إلى بيتي ضيفة.'
        },
        {
          tokens: [
            { py: 'Wǒ zài ménkǒu', hz: '我在门口', cls: 'self' },
            { py: 'huānyíng tā', hz: '欢迎她', cls: 'like' },
            { hz: '，' },
            { py: 'qǐng tā', hz: '请她', cls: 'respect' },
            { py: 'kuài jìnlái', hz: '快进来', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I welcomed her at the door and asked her to come in quickly. / رحبت بها عند الباب وطلبت منها أن تدخل.'
        },
        {
          tokens: [
            { py: 'Zhè shì tā', hz: '这是她', cls: 'person' },
            { py: 'dì yī cì', hz: '第一次', cls: 'time' },
            { py: 'lái wǒ de xīn jiā', hz: '来我的新家', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This was her first time coming to my new home. / كانت هذه أول مرة تأتي فيها إلى بيتي الجديد.'
        },
        {
          tokens: [
            { py: 'Wǒ xiān', hz: '我先', cls: 'self' },
            { py: 'dài tā kàn', hz: '带她看', cls: 'activity' },
            { py: 'kètīng', hz: '客厅', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I first showed her the living room. / أولًا أخذتها لرؤية غرفة المعيشة.'
        },
        {
          tokens: [
            { py: 'Kètīng', hz: '客厅', cls: 'place' },
            { py: 'hěn dà', hz: '很大', cls: 'like' },
            { hz: '，' },
            { py: 'wǒmen kěyǐ', hz: '我们可以', cls: 'self' },
            { py: 'zài zhèlǐ liáotiān', hz: '在这里聊天', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The living room was big, and we could chat here. / غرفة المعيشة كبيرة، ويمكننا التحدث هنا.'
        },
        {
          tokens: [
            { py: 'Cāntīng', hz: '餐厅', cls: 'place' },
            { py: 'zài kètīng pángbiān', hz: '在客厅旁边', cls: 'place' },
            { hz: '，' },
            { py: 'chúfáng', hz: '厨房', cls: 'place' },
            { py: 'yě zài yì céng', hz: '也在一层', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'The dining room was next to the living room, and the kitchen was also on the first floor. / غرفة الطعام بجانب غرفة المعيشة، والمطبخ أيضًا في الطابق الأول.'
        },
        {
          tokens: [
            { py: 'Èr céng', hz: '二层', cls: 'place' },
            { py: 'yǒu wòshì hé shūfáng', hz: '有卧室和书房', cls: 'place' },
            { hz: '，' },
            { py: 'dànshì wǒmen', hz: '但是我们', cls: 'not-like' },
            { py: 'méiyǒu shàngqù', hz: '没有上去', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'The second floor had bedrooms and a study room, but we did not go upstairs. / في الطابق الثاني غرف نوم وغرفة دراسة، لكننا لم نصعد.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'zài cāntīng chī fàn', hz: '在餐厅吃饭', cls: 'activity' },
            { hz: '，' },
            { py: 'hái liáo le', hz: '还聊了', cls: 'activity' },
            { py: 'hěn duō xuéxiào de shì', hz: '很多学校的事', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Later, we ate in the dining room and talked about many school things. / بعد ذلك أكلنا في غرفة الطعام وتحدثنا عن كثير من أمور المدرسة.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “欢迎你，快进来吧。” 是什么意思？',
      pinyin: '“Huānyíng nǐ, kuài jìnlái ba.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'Welcome, come in quickly.', correct: true },
        { text: 'Go out quickly.', correct: false },
        { text: 'Please go upstairs.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “living room”？',
      pinyin: 'Nǎ yí ge shì “living room”?',
      translation: 'Which one means “living room”?',
      choices: [
        { text: '客厅', correct: true },
        { text: '卧室', correct: false },
        { text: '厨房', correct: false }
      ]
    },
    {
      question: '3. “我们在餐厅吃饭。” 是什么意思？',
      pinyin: '“Wǒmen zài cāntīng chī fàn.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'We eat in the dining room.', correct: true },
        { text: 'We sleep in the bedroom.', correct: false },
        { text: 'We read in the study room.', correct: false }
      ]
    },
    {
      question: '4. 哪一个是 “come in”？',
      pinyin: 'Nǎ yí ge shì “come in”?',
      translation: 'Which one means “come in”?',
      choices: [
        { text: '进来', correct: true },
        { text: '出去', correct: false },
        { text: '卧室', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Huānyíng nǐ', hz: '欢迎你', cls: 'like' },
        { hz: '，' },
        { py: 'kuài', hz: '快', cls: 'time' },
        { blank: true },
        { py: 'ba', hz: '吧', cls: 'speaker' },
        { hz: '。' }
      ],
      [
        { py: 'Zhè shì', hz: '这是', cls: 'self' },
        { py: 'wǒ de', hz: '我的', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Yì céng', hz: '一层', cls: 'place' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'yě yǒu', hz: '也有', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Èr céng', hz: '二层', cls: 'place' },
        { py: 'yǒu', hz: '有', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'yě yǒu', hz: '也有', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒmen', hz: '我们', cls: 'self' },
        { py: 'zài', hz: '在', cls: 'place' },
        { blank: true },
        { py: 'chī fàn', hz: '吃饭', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'Welcome, quickly ______. This is my ______. The first floor has ______ and ______. The second floor has ______ and ______. We eat in ______.',
    tip: 'Use: 进来、家、客厅、餐厅、卧室、书房、厨房。'
  },

  meanings: {
    '欢迎': 'welcome / مرحبًا',
    '欢迎你': 'welcome you / مرحبًا بك',
    '进来': 'come in / ادخل',
    '快进来吧': 'come in quickly / تفضل بالدخول',
    '出去': 'go out / اخرج',
    '房子': 'house / بيت',
    '家': 'home / بيت',
    '我家': 'my home / بيتي',
    '新家': 'new home / بيت جديد',
    '客厅': 'living room / غرفة المعيشة',
    '餐厅': 'dining room / غرفة الطعام',
    '卧室': 'bedroom / غرفة النوم',
    '书房': 'study room / غرفة الدراسة',
    '厨房': 'kitchen / المطبخ',
    '一层': 'first floor / الطابق الأول',
    '二层': 'second floor / الطابق الثاني',
    '在客厅': 'in the living room / في غرفة المعيشة',
    '在卧室': 'in the bedroom / في غرفة النوم',
    '在餐厅': 'in the dining room / في غرفة الطعام',
    '在这里': 'here / هنا',
    '爸爸和妈妈': 'dad and mom / أبي وأمي',
    '看电视': 'watch TV / يشاهد التلفاز',
    '聊天': 'chat / يتحدث',
    '吃饭': 'eat a meal / يأكل',
    '我和妹妹': 'my younger sister and I / أنا وأختي الصغرى',
    '你家真漂亮': 'your home is very beautiful / بيتك جميل جدًا',
    '这是客厅': 'this is the living room / هذه غرفة المعيشة',
    '常常在这里': 'often here / غالبًا هنا',
    '很大': 'very big / كبير جدًا',
    '这是餐厅': 'this is the dining room / هذه غرفة الطعام',
    '在这里吃饭': 'eat here / يأكل هنا',
    '真不错': 'very nice / جميل جدًا',
    '走吧': 'let’s go / هيا بنا',
    '去餐厅': 'go to the dining room / يذهب إلى غرفة الطعام',
    '朋友': 'friend / صديق',
    '来我家做客': 'come to my home as a guest / يأتي إلى بيتي ضيفًا',
    '门口': 'doorway / عند الباب',
    '我在门口': 'I am at the door / أنا عند الباب',
    '欢迎她': 'welcome her / أرحب بها',
    '请她': 'invite her; ask her / أدعوها',
    '第一次': 'first time / أول مرة',
    '来我的新家': 'come to my new home / تأتي إلى بيتي الجديد',
    '我先': 'I first / أنا أولًا',
    '带她看': 'show her / أريها',
    '我们可以': 'we can / نحن نستطيع',
    '在这里聊天': 'chat here / نتحدث هنا',
    '在客厅旁边': 'next to the living room / بجانب غرفة المعيشة',
    '也在一层': 'also on the first floor / أيضًا في الطابق الأول',
    '有卧室和书房': 'has bedrooms and a study room / فيه غرف نوم وغرفة دراسة',
    '没有上去': 'did not go upstairs / لم نصعد',
    '后来': 'later / بعد ذلك',
    '在餐厅吃饭': 'eat in the dining room / يأكل في غرفة الطعام',
    '还聊了': 'also talked about / تحدث أيضًا عن',
    '很多学校的事': 'many school things / كثير من أمور المدرسة'
  }
};