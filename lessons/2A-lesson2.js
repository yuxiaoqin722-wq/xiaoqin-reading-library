window.LESSONS = window.LESSONS || {};

window.LESSONS['2A-lesson2'] = {
  id: '2A-lesson2',
  book: '2A',
  lesson: 'Lesson 2',
  title: '今天下雨。',
  theme: 'Weather',
  goal: 'Talk about UAE daily weather with “今天……”.',
  heroTranslation: 'It is raining today.',
  titleTokens: [
    { py: 'Jīntiān', hz: '今天', cls: 'time' },
    { py: 'xià yǔ', hz: '下雨', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '☀️', pinyin: 'qíngtiān', text: '晴天', translation: 'sunny day / يوم مشمس' },
    { emoji: '⛅', pinyin: 'duōyún', text: '多云', translation: 'cloudy / غائم' },
    { emoji: '🌧️', pinyin: 'xià yǔ', text: '下雨', translation: 'rain / تمطر' },
    { emoji: '🌬️', pinyin: 'guā fēng', text: '刮风', translation: 'windy / عاصف' },
    { emoji: '☂️', pinyin: 'sǎn', text: '伞', translation: 'umbrella / مظلة' },
    { emoji: '✅', pinyin: 'hǎo de', text: '好的', translation: 'okay / حسنًا' },
    { emoji: '🇦🇪', pinyin: 'Díbài', text: '迪拜', translation: 'Dubai / دبي' },
    { emoji: '🇦🇪', pinyin: 'Shājiā', text: '沙迦', translation: 'Sharjah / الشارقة' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'tiānqì', hz: '天气', cls: 'time' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'How is the weather today? / كيف الطقس اليوم؟'
    },
    {
      tokens: [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'xià yǔ', hz: '下雨', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'It is raining today. / تمطر اليوم.'
    },
    {
      tokens: [
        { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
        { py: 'sǎn ma', hz: '伞吗', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'Do you have an umbrella? / هل لديك مظلة؟'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说今天的天气',
      translation: 'How is the weather today? Today is sunny. Today is very hot. Today is cloudy. It is raining today.',
      tip: 'Reading Goal: Read “今天 + weather” clearly.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the weather today? / كيف الطقس اليوم؟'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'qíngtiān', hz: '晴天', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Today is sunny. / اليوم مشمس.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn rè', hz: '很热', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Today is very hot. / اليوم حار جدًا.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'duōyún', hz: '多云', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is cloudy. / اليوم غائم.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'xià yǔ', hz: '下雨', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It is raining today. / تمطر اليوم.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会说学校天气对话',
      translation: 'How is the weather today? It is raining today. Do you have an umbrella? I have an umbrella. Okay, let’s go to school.',
      tip: 'Pair Work: Talk about rain and going to school.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'tiānqì', hz: '天气', cls: 'time' },
            { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'How is the weather today? / كيف الطقس اليوم؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'xià yǔ', hz: '下雨', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'It is raining today. / تمطر اليوم.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yǒu', hz: '你有', cls: 'person' },
            { py: 'sǎn ma', hz: '伞吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you have an umbrella? / هل لديك مظلة؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
            { py: 'sǎn', hz: '伞', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have an umbrella. / لدي مظلة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo de', hz: '好的', cls: 'thanks' },
            { hz: '，' },
            { py: 'wǒmen', hz: '我们', cls: 'self' },
            { py: 'qù xuéxiào ba', hz: '去学校吧', cls: 'activity' },
            { hz: '！' }
          ],
          translation: 'Okay, let’s go to school! / حسنًا، لنذهب إلى المدرسة!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会做阿联酋天气报告',
      translation: 'Hello everyone. My name is Hassan. I am in Dubai. Dubai is thirty-five degrees today. Today is very hot. Today is cloudy. I like sunny days. This is my weather report.',
      tip: 'Speaking Goal: Give a simple UAE weather report.',
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
            { py: 'Hāsāng', hz: '哈桑', cls: 'name' },
            { hz: '。' }
          ],
          translation: 'My name is Hassan. / اسمي حسن.'
        },
        {
          tokens: [
            { py: 'Wǒ zài', hz: '我在', cls: 'self' },
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'I am in Dubai. / أنا في دبي.'
        },
        {
          tokens: [
            { py: 'Díbài', hz: '迪拜', cls: 'place' },
            { py: 'jīntiān', hz: '今天', cls: 'time' },
            { py: 'sān shí wǔ dù', hz: '三十五度', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Dubai is thirty-five degrees today. / دبي اليوم خمس وثلاثون درجة.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'hěn rè', hz: '很热', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'Today is very hot. / اليوم حار جدًا.'
        },
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'duōyún', hz: '多云', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'Today is cloudy. / اليوم غائم.'
        },
        {
          tokens: [
            { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
            { py: 'qíngtiān', hz: '晴天', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I like sunny days. / أحب الأيام المشمسة.'
        },
        {
          tokens: [
            { py: 'Zhè shì', hz: '这是', cls: 'activity' },
            { py: 'wǒ de tiānqì bàogào', hz: '我的天气报告', cls: 'time' },
            { hz: '。' }
          ],
          translation: 'This is my weather report. / هذا تقرير الطقس الخاص بي.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “下雨” 是什么意思？',
      pinyin: '“Xià yǔ” shì shénme yìsi?',
      translation: 'What does “下雨” mean?',
      choices: [
        { text: 'rain', correct: true },
        { text: 'sunny', correct: false },
        { text: 'cold', correct: false }
      ]
    },
    {
      question: '2. “伞” 是什么意思？',
      pinyin: '“Sǎn” shì shénme yìsi?',
      translation: 'What does “伞” mean?',
      choices: [
        { text: 'umbrella', correct: true },
        { text: 'school', correct: false },
        { text: 'weather', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “cloudy”？',
      pinyin: 'Nǎ yí ge shì “cloudy”?',
      translation: 'Which one means “cloudy”?',
      choices: [
        { text: '多云', correct: true },
        { text: '晴天', correct: false },
        { text: '下雨', correct: false }
      ]
    },
    {
      question: '4. “今天下雨。” 是什么意思？',
      pinyin: '“Jīntiān xià yǔ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'It is raining today.', correct: true },
        { text: 'Today is sunny.', correct: false },
        { text: 'Today is very hot.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'tiānqì', hz: '天气', cls: 'time' },
        { py: 'zěnmeyàng', hz: '怎么样', cls: 'activity' },
        { hz: '？' }
      ],
      [
        { py: 'Wǒ zài', hz: '我在', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { blank: true },
        { py: 'dù', hz: '度', cls: 'time' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ yǒu', hz: '我有', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ xǐhuan', hz: '我喜欢', cls: 'like' },
        { blank: true },
        { hz: '。' }
      ]
    ],
    translation: 'How is the weather today? I am in _____. Today is _____. Today is _____ degrees. I have _____. I like _____.',
    tip: 'Use UAE places and weather: 迪拜、沙迦、晴天、多云、下雨、伞。'
  },

  meanings: {
    '晴天': 'sunny day / يوم مشمس',
    '多云': 'cloudy / غائم',
    '下雨': 'rain / تمطر',
    '下雪': 'snow / تثلج',
    '刮风': 'windy / عاصف',
    '伞': 'umbrella / مظلة',
    '伞吗': 'umbrella? / مظلة؟',
    '好的': 'okay / حسنًا',
    '今天': 'today / اليوم',
    '天气': 'weather / الطقس',
    '怎么样': 'how is it / كيف',
    '今天天气怎么样': 'how is the weather today / كيف الطقس اليوم',
    '很热': 'very hot / حار جدًا',
    '三十五度': 'thirty-five degrees / خمس وثلاثون درجة',
    '你有': 'do you have / هل لديك',
    '我有': 'I have / لدي',
    '我们': 'we / نحن',
    '去学校吧': 'let’s go to school / لنذهب إلى المدرسة',
    '我在': 'I am in / أنا في',
    '迪拜': 'Dubai / دبي',
    '沙迦': 'Sharjah / الشارقة',
    '我喜欢': 'I like / أحب',
    '天气报告': 'weather report / تقرير الطقس',
    '我的天气报告': 'my weather report / تقرير الطقس الخاص بي',
    '这是': 'this is / هذا',
    '大家好': 'hello everyone / مرحبًا بالجميع',
    '我叫': 'my name is / اسمي',
    '哈桑': 'Hassan / حسن'
  }
};