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
  id: '1B-lesson6',
  book: '1B',
  lesson: 'Lesson 6',
  title: '祝你生日快乐！',
  pinyin: 'Zhù nǐ shēngrì kuàilè!',
  description: 'Theme: Birthday. Learn to ask birthdays and say “祝你生日快乐！”.',
  icon: '🎂',
  status: 'Ready'
},
{
  id: '1C-lesson1',
  book: '1C',
  lesson: 'Lesson 1',
  title: '我是学生。',
  pinyin: 'Wǒ shì xuésheng.',
  description: 'Theme: Jobs. Learn to ask and answer “做什么工作？”.',
  icon: '👩‍🏫',
  status: 'Ready'
},
{
  id: '1C-lesson2',
  book: '1C',
  lesson: 'Lesson 2',
  title: '我六点半起床。',
  pinyin: 'Wǒ liù diǎn bàn qǐchuáng.',
  description: 'Theme: Daily routine. Learn to say time and daily activities.',
  icon: '⏰',
  status: 'Ready'
},
{
  id: '1C-lesson3',
  book: '1C',
  lesson: 'Lesson 3',
  title: '我的一天。',
  pinyin: 'Wǒ de yì tiān.',
  description: 'Theme: My day. Learn to describe daily routine with “每天”.',
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
  id: '1C-lesson5',
  book: '1C',
  lesson: 'Lesson 5',
  title: '你的爱好是什么？',
  pinyin: 'Nǐ de àihào shì shénme?',
  description: 'Theme: Hobbies. Learn to ask and answer about hobbies.',
  icon: '⚽',
  status: 'Ready'
},
{
  id: '1C-lesson6',
  book: '1C',
  lesson: 'Lesson 6',
  title: '我会说汉语。',
  pinyin: 'Wǒ huì shuō Hànyǔ.',
  description: 'Theme: Languages and abilities. Learn to use “会 / 不会”.',
  icon: '🗣️',
  status: 'Ready'
},
{
  id: '2A-lesson1',
  book: '2A',
  lesson: 'Lesson 1',
  title: '今天太热了！',
  pinyin: 'Jīntiān tài rè le!',
  description: 'Theme: Weather. Learn to ask “今天天气怎么样？” and say “今天太热了！”.',
  icon: '☀️',
  status: 'Ready'
},
{
  id: '2A-lesson2',
  book: '2A',
  lesson: 'Lesson 2',
  title: '今天下雨。',
  pinyin: 'Jīntiān xià yǔ.',
  description: 'Theme: Weather. Learn to describe sunny, cloudy, rainy, snowy and windy weather.',
  icon: '🌧️',
  status: 'Ready'
},
{
  id: '2A-lesson3',
  book: '2A',
  lesson: 'Lesson 3',
  title: '北京的秋天非常美。',
  pinyin: 'Běijīng de qiūtiān fēicháng měi.',
  description: 'Theme: Seasons. Learn to talk about four seasons and simple weather.',
  icon: '🍂',
  status: 'Ready'
},
{
  id: '2A-lesson4',
  book: '2A',
  lesson: 'Lesson 4',
  title: '你喜欢什么颜色？',
  pinyin: 'Nǐ xǐhuan shénme yánsè?',
  description: 'Theme: Colors. Learn to ask and answer favorite colors.',
  icon: '🎨',
  status: 'Ready'
},
{
  id: '2A-lesson5',
  book: '2A',
  lesson: 'Lesson 5',
  title: '我周末去奇迹花园了。',
  pinyin: 'Wǒ zhōumò qù Qíjì Huāyuán le.',
  description: 'Theme: Weekend places. Learn to ask and answer “周末你去哪儿了？”.',
  icon: '🌸',
  status: 'Ready'
},
{
  id: '2A-lesson6',
  book: '2A',
  lesson: 'Lesson 6',
  title: '我周末去公园玩了。',
  pinyin: 'Wǒ zhōumò qù gōngyuán wán le.',
  description: 'Theme: Weekend activities. Learn “someone + time + 去 + place + activity + 了”.',
  icon: '🌳',
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
  id: '2A-lesson9',
  book: '2A',
  lesson: 'Lesson 9',
  title: '我今天很忙。',
  pinyin: 'Wǒ jīntiān hěn máng.',
  description: 'Theme: My busy day. Learn feelings and daily expressions: “someone + time + 很 + feeling” and “someone + time + 有 + class”.',
  icon: '🧠',
  status: 'Ready'
},
{
  id: '2B-lesson1',
  book: '2B',
  lesson: 'Lesson 1',
  title: '你们想喝什么？',
  pinyin: 'Nǐmen xiǎng hē shénme?',
  description: 'Theme: Drinks and preferences. Learn “someone + 想喝 + drink”, “喜欢喝 / 不喜欢喝”, and quantity words like 一杯 / 一瓶.',
  icon: '🥤',
  status: 'Ready'
},
{
  id: '2B-lesson2',
  book: '2B',
  lesson: 'Lesson 2',
  title: '我喜欢吃中国菜。',
  pinyin: 'Wǒ xǐhuan chī Zhōngguó cài.',
  description: 'Theme: Food and preferences. Learn “someone + 喜欢吃 / 不喜欢吃 + food” and compare Chinese food with Arabic food.',
  icon: '🍽️',
  status: 'Ready'
},
{
  id: '2B-lesson3',
  book: '2B',
  lesson: 'Lesson 3',
  title: '你们早饭一般吃什么？',
  pinyin: 'Nǐmen zǎofàn yìbān chī shénme?',
  description: 'Theme: Meals and daily food. Learn “someone + meal time + 一般 + 吃 + food” for breakfast, lunch, and dinner.',
  icon: '🍳',
  status: 'Ready'
},
{
  id: '2B-lesson4',
  book: '2B',
  lesson: 'Lesson 4',
  title: '我现在在家上课。',
  pinyin: 'Wǒ xiànzài zài jiā shàngkè.',
  description: 'Theme: Places, jobs, and online class. Learn “someone + 在 + place + activity” and “family member + 是 + job + 在 + place + 工作”.',
  icon: '💻',
  status: 'Ready'
},
{
  id: '2B-lesson5',
  book: '2B',
  lesson: 'Lesson 5',
  title: '请问你们要什么？',
  pinyin: 'Qǐngwèn nǐmen yào shénme?',
  description: 'Theme: Ordering food in a restaurant. Learn “要 / 不要 + food or drink” and polite restaurant expressions like 请问.',
  icon: '🍽️',
  status: 'Ready'
},
{
  id: '2B-lesson6',
  book: '2B',
  lesson: 'Lesson 6',
  title: '我买了一部手机。',
  pinyin: 'Wǒ mǎi le yí bù shǒujī.',
  description: 'Theme: Shopping and things. Learn “someone + 买了 / 还买了 + quantity + item” and common measure words.',
  icon: '📱',
  status: 'Ready'
},
{
  id: '2C-lesson1',
  book: '2C',
  lesson: 'Lesson 1',
  title: '我想买一双鞋子。',
  pinyin: 'Wǒ xiǎng mǎi yì shuāng xiézi.',
  description: 'Theme: Shopping for clothes. Learn “想买 + clothing”, “穿着 + clothing”, and measure words 件 / 条 / 双.',
  icon: '👟',
  status: 'Ready'
},
{
  id: '2C-lesson2',
  book: '2C',
  lesson: 'Lesson 2',
  title: '一共七百三十八元。',
  pinyin: 'Yígòng qībǎi sānshíbā yuán.',
  description: 'Theme: Shopping and payment. Learn “多少钱 / 一共 / 元”, prices, totals, and mobile scan payment.',
  icon: '💵',
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
