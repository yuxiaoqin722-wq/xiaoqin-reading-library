const BOOK_THEMES = {
  '1A': {
    color: '#6BA892',
    soft: '#e9f5ef',
    dark: '#356b58',
    icon: '🌱',
    subtitle: 'Fresh start · Basic words and simple sentences'
  },
  '1B': {
    color: '#6F8FC7',
    soft: '#edf3ff',
    dark: '#3f5f9a',
    icon: '📘',
    subtitle: 'Explore more · Questions, answers and short conversations'
  },
  '1C': {
    color: '#D88A63',
    soft: '#fff0e8',
    dark: '#8f4f32',
    icon: '🎤',
    subtitle: 'Express yourself · Hobbies, feelings and personal ideas'
  },

  '2A': {
    color: '#9B8AC7',
    soft: '#f1edff',
    dark: '#5b4a91',
    icon: '🏫',
    subtitle: 'School life · Subjects, time and daily learning'
  },
  '2B': {
    color: '#5FA8C7',
    soft: '#e8f7ff',
    dark: '#2f6f8f',
    icon: '🕒',
    subtitle: 'Daily routine · Time, schedule and simple plans'
  },
  '2C': {
    color: '#D6A84F',
    soft: '#fff6df',
    dark: '#8a651d',
    icon: '📚',
    subtitle: 'Learning more · School activities and conversations'
  },

  '3A': {
    color: '#7AA66A',
    soft: '#eef8ea',
    dark: '#456b38',
    icon: '🌿',
    subtitle: 'Growing skills · Longer sentences and personal expression'
  },
  '3B': {
    color: '#C77A9B',
    soft: '#fff0f6',
    dark: '#8a3f5f',
    icon: '🗣️',
    subtitle: 'Communication · Opinions, reasons and short talks'
  },
  '3C': {
    color: '#8A9FD6',
    soft: '#eef2ff',
    dark: '#4e6098',
    icon: '🧭',
    subtitle: 'Explore topics · Places, culture and daily life'
  },

  '4A': {
    color: '#7B7F9E',
    soft: '#f0f1f8',
    dark: '#464a68',
    icon: '🚀',
    subtitle: 'Advanced start · Paragraph reading and structured speaking'
  },
  '4B': {
    color: '#B47A5A',
    soft: '#fff1e8',
    dark: '#73462f',
    icon: '🏮',
    subtitle: 'Culture and stories · Reading with more details'
  },
  '4C': {
    color: '#4F9D8F',
    soft: '#e8f8f5',
    dark: '#2f6a60',
    icon: '🌏',
    subtitle: 'Confident reader · Projects, culture and presentation'
  }
};

const LESSON_LIBRARY = [
  {
  id: '1A-lesson1',
  book: '1A',
  lesson: 'Lesson 1',
  title: '拼音与汉字',
  pinyin: 'Pīnyīn yǔ Hànzì.',
  description: 'Theme: Pinyin and Chinese characters. Learn basic sounds, tones and simple Chinese characters.',
  icon: '🔤',
  status: 'Ready'
},
  {
    id: '1A-lesson2',
    book: '1A',
    lesson: 'Lesson 2',
    title: '你好！',
    pinyin: 'Nǐ hǎo!',
    description: 'Greetings and introductions',
    icon: '👋',
    status: 'Ready'
  },
  {
    id: '1A-lesson3',
    book: '1A',
    lesson: 'Lesson 3',
    title: '我叫哈桑。',
    pinyin: 'Wǒ jiào Hāsāng.',
    description: 'Ask names and greet each other',
    icon: '🤝',
    status: 'Ready'
  },
  {
  id: '1A-lesson4',
  book: '1A',
  lesson: 'Lesson 4',
  title: '这是九。',
  pinyin: 'Zhè shì jiǔ.',
  description: 'Theme: Numbers. Learn numbers 1–10 and ask “这是几？”.',
  icon: '🔢',
  status: 'Ready'
},
{
  id: '1A-lesson5',
  book: '1A',
  lesson: 'Lesson 5',
  title: '我十二岁。',
  pinyin: 'Wǒ shíèr suì.',
  description: 'Theme: Age. Learn to ask and answer age in Chinese.',
  icon: '🎂',
  status: 'Ready'
},
{
  id: '1A-lesson6',
  book: '1A',
  lesson: 'Lesson 6',
  title: '今天星期四。',
  pinyin: 'Jīntiān Xīngqīsì.',
  description: 'Theme: Days of the week. Learn to ask and answer “今天星期几？”.',
  icon: '📅',
  status: 'Ready'
},
{
  id: '1A-lesson7',
  book: '1A',
  lesson: 'Lesson 7',
  title: '这是阿联酋。',
  pinyin: 'Zhè shì Āliánqiú.',
  description: 'Theme: Countries. Learn to say country names and ask “这是什么国家？”.',
  icon: '🌍',
  status: 'Ready'
},
{
  id: '1A-lesson8',
  book: '1A',
  lesson: 'Lesson 8',
  title: '我是阿联酋人。',
  pinyin: 'Wǒ shì Āliánqiú rén.',
  description: 'Theme: Nationalities. Learn to ask and answer “你是哪国人？”.',
  icon: '🌏',
  status: 'Ready'
},
  {
    id: '1A-lesson9',
    book: '1A',
    lesson: 'Lesson 9',
    title: '上海在中国。',
    pinyin: 'Shànghǎi zài Zhōngguó.',
    description: 'Theme: Cities and places. Learn to say where a city is and where you are from.',
    icon: '🌏',
    status: 'Ready'
  },
  {
  id: '1B-lesson1',
  book: '1B',
  lesson: 'Lesson 1',
  title: '她是我妹妹。',
  pinyin: 'Tā shì wǒ mèimei.',
  description: 'Theme: Family members. Learn to introduce family members and ask “她是谁？”.',
  icon: '👨‍👩‍👧',
  status: 'Ready'
},
{
  id: '1B-lesson2',
  book: '1B',
  lesson: 'Lesson 2',
  title: '我有两个哥哥。',
  pinyin: 'Wǒ yǒu liǎng ge gēge.',
  description: 'Theme: Family and numbers. Learn to say “我有……” and use “和”.',
  icon: '👨‍👩‍👦‍👦',
  status: 'Ready'
},
{
  id: '1B-lesson3',
  book: '1B',
  lesson: 'Lesson 3',
  title: '我爱我家！',
  pinyin: 'Wǒ ài wǒ jiā!',
  description: 'Theme: My family. Learn to introduce family and say “我爱我家！”.',
  icon: '❤️',
  status: 'Ready'
},
{
  id: '1B-lesson4',
  book: '1B',
  lesson: 'Lesson 4',
  title: '现在几点？',
  pinyin: 'Xiànzài jǐ diǎn?',
  description: 'Theme: Time. Learn to ask and answer “现在几点？”.',
  icon: '⏰',
  status: 'Ready'
},
{
  id: '1B-lesson5',
  book: '1B',
  lesson: 'Lesson 5',
  title: '今天二月一号。',
  pinyin: 'Jīntiān èr yuè yī hào.',
  description: 'Theme: Date. Learn to ask and answer “今天几月几号？”.',
  icon: '📅',
  status: 'Ready'
},
  {
    id: '1C-lesson4',
    book: '1C',
    lesson: 'Lesson 4',
    title: '我喜欢唱歌。',
    pinyin: 'Wǒ xǐhuan chànggē.',
    description: 'Theme: My hobbies. Practice “I like...” and “I don’t like...”.',
    icon: '🎤',
    status: 'Ready'
  },
  {
  id: '2A-lesson7',
  book: '2A',
  lesson: 'Lesson 7',
  title: '我在学习。',
  pinyin: 'Wǒ zài xuéxí.',
  description: 'Theme: What are you doing? Practice “我在……” and action words.',
  icon: '📚',
  status: 'Ready'
},
  {
    id: '2A-lesson8',
    book: '2A',
    lesson: 'Lesson 8',
    title: '我两点有中文课。',
    pinyin: 'Wǒ liǎng diǎn yǒu Zhōngwén kè.',
    description: 'Theme: School timetable. Learn to talk about subjects and class time.',
    icon: '🏫',
    status: 'Ready'
  },
  {
  id: '3B-lesson2',
  book: '3B',
  lesson: 'Lesson 2',
  title: '她说汉语说得很好。',
  pinyin: 'Tā shuō Hànyǔ shuō de hěn hǎo.',
  description: 'Theme: Talking about skills. Learn to describe how well someone can do something.',
  icon: '🗣️',
  status: 'Ready'
},
];
