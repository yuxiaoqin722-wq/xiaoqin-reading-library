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
  id: '2C-lesson3',
  book: '2C',
  lesson: 'Lesson 3',
  title: '苹果多少钱一斤？',
  pinyin: 'Píngguǒ duōshǎo qián yì jīn?',
  description: 'Theme: Buying fruit. Learn “多少钱一斤”, fruit words, 斤 / 块, and simple fruit shopping expressions.',
  icon: '🍎',
  status: 'Ready'
},
{
  id: '2C-lesson4',
  book: '2C',
  lesson: 'Lesson 4',
  title: '我坐校车去学校。',
  pinyin: 'Wǒ zuò xiàochē qù xuéxiào.',
  description: 'Theme: Transportation and weekend activities. Learn “坐 / 骑 / 开 + transportation + 去 + place”.',
  icon: '🚌',
  status: 'Ready'
},
{
  id: '2C-lesson5',
  book: '2C',
  lesson: 'Lesson 5',
  title: '我家在学校的旁边。',
  pinyin: 'Wǒ jiā zài xuéxiào de pángbiān.',
  description: 'Theme: Home, school, and transportation. Learn “在……旁边”, “离……近/远”, and “怎么来学校”.',
  icon: '🏠',
  status: 'Ready'
},
{
  id: '2C-lesson6',
  book: '2C',
  lesson: 'Lesson 6',
  title: '我们是坐火车去的。',
  pinyin: 'Wǒmen shì zuò huǒchē qù de.',
  description: 'Theme: Transportation and travel experiences. Learn to describe when, how, and with whom someone traveled using 是……的.',
  icon: '🚆',
  status: 'Ready'
},
{
  id: '3A-lesson1',
  book: '3A',
  lesson: 'Lesson 1',
  title: '你周末常常做什么？',
  pinyin: 'Nǐ zhōumò chángcháng zuò shénme?',
  description: 'Theme: Weekend activities and habits. Learn to ask and describe what someone often does on weekends using 常常 and verb reduplication.',
  icon: '🏃',
  status: 'Ready'
},
{
  id: '3A-lesson2',
  book: '3A',
  lesson: 'Lesson 2',
  title: '洗手间在图书馆里边。',
  pinyin: 'Xǐshǒujiān zài túshūguǎn lǐbian.',
  description: 'Theme: School navigation and location. Learn to ask where places are and describe locations using 在……里边 / 前边 / 后边.',
  icon: '📍',
  status: 'Ready'
},
{
  id: '3A-lesson3',
  book: '3A',
  lesson: 'Lesson 3',
  title: '请问，去地铁站怎么走？',
  pinyin: 'Qǐngwèn, qù dìtiězhàn zěnme zǒu?',
  description: 'Theme: Asking for directions and giving directions. Learn to ask where places are and describe routes using 往前走 / 往左转 / 往右转 / 第一个路口.',
  icon: '🗺️',
  status: 'Ready'
},
{
  id: '3A-lesson4',
  book: '3A',
  lesson: 'Lesson 4',
  title: '我想去上海旅行。',
  pinyin: 'Wǒ xiǎng qù Shànghǎi lǚxíng.',
  description: 'Theme: Travel and comparison. Learn to compare cities, weather and things using 比 and 没有.',
  icon: '🧳',
  status: 'Ready'
},
{
  id: '3A-lesson5',
  book: '3A',
  lesson: 'Lesson 5',
  title: '这件比那件贵100块。',
  pinyin: 'Zhè jiàn bǐ nà jiàn guì yì bǎi kuài.',
  description: 'Theme: Shopping and comparison. Learn to compare prices and make choices using 比, 更 and price expressions.',
  icon: '🛍️',
  status: 'Ready'
},
{
  id: '3A-lesson6',
  book: '3A',
  lesson: 'Lesson 6',
  title: '你们看过《功夫熊猫》吗？',
  pinyin: 'Nǐmen kànguo “Gōngfu Xióngmāo” ma?',
  description: 'Theme: Movie experience and culture. Learn to talk about experiences using 过 and express times using 遍.',
  icon: '🐼',
  status: 'Ready'
},
{
  id: '3A-lesson7',
  book: '3A',
  lesson: 'Lesson 7',
  title: '动物园里有两只熊猫。',
  pinyin: 'Dòngwùyuán lǐ yǒu liǎng zhī xióngmāo.',
  description: 'Theme: Animals and locations. Learn to describe what is in a place using 有 and measure words.',
  icon: '🐼',
  status: 'Ready'
},
{
  id: '3A-lesson8',
  book: '3A',
  lesson: 'Lesson 8',
  title: '它的眼睛很大。',
  pinyin: 'Tā de yǎnjing hěn dà.',
  description: 'Theme: Animal body parts and description. Learn to describe animals using 它的……很…… and 它的……是……色的.',
  icon: '👀',
  status: 'Ready'
},
{
  id: '3A-lesson9',
  book: '3A',
  lesson: 'Lesson 9',
  title: '我头疼。',
  pinyin: 'Wǒ tóu téng.',
  description: 'Theme: Health and advice. Learn to talk about feeling sick and give simple advice using 应该.',
  icon: '🤕',
  status: 'Ready'
},
{
  id: '3B-lesson1',
  book: '3B',
  lesson: 'Lesson 1',
  title: '你弹得真好！',
  pinyin: 'Nǐ tán de zhēn hǎo!',
  description: 'Theme: Skills and compliments. Learn to talk about skills and describe how well someone does something using 得.',
  icon: '🎹',
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
{
  id: '3B-lesson3',
  book: '3B',
  lesson: 'Lesson 3',
  title: '别担心，我帮你复习。',
  pinyin: 'Bié dānxīn, wǒ bāng nǐ fùxí.',
  description: 'Theme: Care and help. Learn to express worry or difficulty, comfort others, and offer help using 别 and 帮.',
  icon: '🤝',
  status: 'Ready'
},
{
  id: '3B-lesson4',
  book: '3B',
  lesson: 'Lesson 4',
  title: '我们一起去哈利法塔吧。',
  pinyin: 'Wǒmen yìqǐ qù Hālìfǎ Tǎ ba.',
  description: 'Theme: Landmarks and invitations. Learn to introduce famous places and invite others using 一起……吧 and 虽然……但是.',
  icon: '🏙️',
  status: 'Ready'
},
{
  id: '3B-lesson5',
  book: '3B',
  lesson: 'Lesson 5',
  title: '哈利法塔晚上最漂亮。',
  pinyin: 'Hālìfǎ Tǎ wǎnshang zuì piàoliang.',
  description: 'Theme: Sequence and reasons. Learn to describe order with 先……再…… and explain reasons with 因为……所以…….',
  icon: '🌃',
  status: 'Ready'
},
{
  id: '3B-lesson6',
  book: '3B',
  lesson: 'Lesson 6',
  title: '春节要到了。',
  pinyin: 'Chūnjié yào dào le.',
  description: 'Theme: Festival preparation. Learn to talk about festivals and things that are going to happen using 要……了.',
  icon: '🧧',
  status: 'Ready'
},
{
  id: '3C-lesson1',
  book: '3C',
  lesson: 'Lesson 1',
  title: '熊猫胖胖的、圆圆的。',
  pinyin: 'Xióngmāo pàngpàng de, yuányuán de.',
  description: 'Theme: Gifts and descriptions. Learn to introduce gifts, describe their appearance using AA 的, and explain why you choose a gift.',
  icon: '🐼',
  status: 'Ready'
},
{
  id: '3C-lesson2',
  book: '3C',
  lesson: 'Lesson 2',
  title: '我们参观了三个小时。',
  pinyin: 'Wǒmen cānguān le sān ge xiǎoshí.',
  description: 'Theme: Activities and duration. Learn to talk about how long an activity lasted using 动作 + 了 + 时间段.',
  icon: '⏰',
  status: 'Ready'
},
{
  id: '3C-lesson3',
  book: '3C',
  lesson: 'Lesson 3',
  title: '能便宜一点儿吗？',
  pinyin: 'Néng piányi yìdiǎnr ma?',
  description: 'Theme: Shopping and comparison. Learn to compare items and ask for a lower price.',
  icon: '🛍️',
  status: 'Ready'
},
{
  id: '3C-lesson4',
  book: '3C',
  lesson: 'Lesson 4',
  title: '我找到了！',
  pinyin: 'Wǒ zhǎodào le!',
  description: 'Theme: Results and encouragement. Learn to talk about results after actions using 动词 + 到 / 完 / 错 / 会.',
  icon: '🔍',
  status: 'Ready'
},
{
  id: '3C-lesson5',
  book: '3C',
  lesson: 'Lesson 5',
  title: '你怎么才来？',
  pinyin: 'Nǐ zěnme cái lái?',
  description: 'Theme: Time, punctuality and movement. Learn to use 就 / 才 and 上来 / 下去 / 上去 / 下来 in real situations.',
  icon: '⏰',
  status: 'Ready'
},
{
  id: '3C-lesson6',
  book: '3C',
  lesson: 'Lesson 6',
  title: '我穿着红色的上衣。',
  pinyin: 'Wǒ chuānzhe hóngsè de shàngyī.',
  description: 'Theme: Clothes and describing people. Learn to describe what someone is wearing or holding using 动词 + 着.',
  icon: '👕',
  status: 'Ready'
},
{
  id: '4A-lesson1',
  book: '4A',
  lesson: 'Lesson 1',
  title: '大家都很棒！',
  pinyin: 'Dàjiā dōu hěn bàng!',
  description: 'Theme: Class introduction and talents. Learn to introduce a group and describe different talents using 有的……有的…….',
  icon: '⭐',
  status: 'Ready'
},
{
  id: '4A-lesson2',
  book: '4A',
  lesson: 'Lesson 2',
  title: '北边是体育馆。',
  pinyin: 'Běibiān shì tǐyùguǎn.',
  description: 'Theme: Directions and school map. Learn to introduce places using 东边 / 西边 / 南边 / 北边.',
  icon: '🧭',
  status: 'Ready'
},
{
  id: '4A-lesson3',
  book: '4A',
  lesson: 'Lesson 3',
  title: '我可以借一下你的铅笔吗？',
  pinyin: 'Wǒ kěyǐ jiè yíxià nǐ de qiānbǐ ma?',
  description: 'Theme: Polite requests and school supplies. Learn to borrow things politely using 可以借一下……吗.',
  icon: '✏️',
  status: 'Ready'
},
{
  id: '4A-lesson4',
  book: '4A',
  lesson: 'Lesson 4',
  title: '我请你来我家吃饭。',
  pinyin: 'Wǒ qǐng nǐ lái wǒ jiā chī fàn.',
  description: 'Theme: Invitations and visiting friends. Learn to invite someone and ask about free time using 请 / 有空 / 有事.',
  icon: '🍽️',
  status: 'Ready'
},
{
  id: '4A-lesson5',
  book: '4A',
  lesson: 'Lesson 5',
  title: '欢迎你！快进来吧。',
  pinyin: 'Huānyíng nǐ! Kuài jìnlái ba.',
  description: 'Theme: Welcoming guests and introducing rooms. Learn to welcome someone and describe rooms at home.',
  icon: '🏠',
  status: 'Ready'
},
{
  id: '4A-lesson6',
  book: '4A',
  lesson: 'Lesson 6',
  title: '又酸又甜，味道很好。',
  pinyin: 'Yòu suān yòu tián, wèidào hěn hǎo.',
  description: 'Theme: Food and taste. Learn to describe food using 又……又…… and 味道怎么样.',
  icon: '🍽️',
  status: 'Ready'
},
{
  id: '4A-lesson7',
  book: '4A',
  lesson: 'Lesson 7',
  title: '老师会通知我们。',
  pinyin: 'Lǎoshī huì tōngzhī wǒmen.',
  description: 'Theme: School trip and future plans. Learn to talk about future arrangements using 会 / 通知 / 不用.',
  icon: '🏛️',
  status: 'Ready'
},
{
  id: '4A-lesson8',
  book: '4A',
  lesson: 'Lesson 8',
  title: '我们一边参观一边拍照。',
  pinyin: 'Wǒmen yìbiān cānguān yìbiān pāizhào.',
  description: 'Theme: Museum visit and recording experiences. Learn to describe doing two actions at the same time using 一边……一边…….',
  icon: '📸',
  status: 'Ready'
},
{
  id: '4A-lesson9',
  book: '4A',
  lesson: 'Lesson 9',
  title: '你的汉语越来越好了。',
  pinyin: 'Nǐ de Hànyǔ yuè lái yuè hǎo le.',
  description: 'Theme: Progress and encouragement. Learn to describe gradual change using 越来越…….',
  icon: '🌱',
  status: 'Ready'
},
{
  id: '4B-lesson1',
  book: '4B',
  lesson: 'Lesson 1',
  title: '他拍的短视频酷极了！',
  pinyin: 'Tā pāi de duǎn shìpín kù jí le!',
  description: 'Theme: Short videos and strong evaluation. Learn to praise something using 形容词 + 极了.',
  icon: '🎬',
  status: 'Ready'
},
{
  id: '4B-lesson2',
  book: '4B',
  lesson: 'Lesson 2',
  title: '我正在看他拍的微电影呢。',
  pinyin: 'Wǒ zhèngzài kàn tā pāi de wēi diànyǐng ne.',
  description: 'Theme: Watching and making micro films. Learn to express ongoing actions using 正在……呢 and give examples using 比如.',
  icon: '🎥',
  status: 'Ready'
},
{
  id: '4B-lesson3',
  book: '4B',
  lesson: 'Lesson 3',
  title: '你们在迪拜还是阿布扎比？',
  pinyin: 'Nǐmen zài Dí bài háishi Ābùzhābǐ?',
  description: 'Theme: Choices and cultural introduction. Learn to ask choices using 还是 and give alternatives using 或者.',
  icon: '🇦🇪',
  status: 'Ready'
},
{
  id: '4B-lesson4',
  book: '4B',
  lesson: 'Lesson 4',
  title: '写汉字跟画画一样有趣。',
  pinyin: 'Xiě Hànzì gēn huàhuà yíyàng yǒuqù.',
  description: 'Theme: Chinese characters and comparison. Learn to compare things using 跟……一样…….',
  icon: '🖌️',
  status: 'Ready'
},
{
  id: '4B-lesson5',
  book: '4B',
  lesson: 'Lesson 5',
  title: '只要你努力，就一定能学好。',
  pinyin: 'Zhǐyào nǐ nǔlì, jiù yídìng néng xuéhǎo.',
  description: 'Theme: Learning methods and progress. Learn to express conditions using 只要……就…….',
  icon: '💪',
  status: 'Ready'
},
{
  id: '4B-lesson6',
  book: '4B',
  lesson: 'Lesson 6',
  title: '有空的时候我也看看。',
  pinyin: 'Yǒu kòng de shíhou wǒ yě kànkan.',
  description: 'Theme: Reading habits and free time. Learn to talk about habits using ……的时候.',
  icon: '📖',
  status: 'Ready'
},
{
  id: '4C-lesson1',
  book: '4C',
  lesson: 'Lesson 1',
  title: '我们不但是同学，而且是最好的朋友。',
  pinyin: 'Wǒmen búdàn shì tóngxué, érqiě shì zuì hǎo de péngyou.',
  description: 'Theme: Friendship and describing people. Learn to express progression using 不但……而且…….',
  icon: '🤝',
  status: 'Ready'
},
{
  id: '4C-lesson2',
  book: '4C',
  lesson: 'Lesson 2',
  title: '孩子送的礼物妈妈都喜欢吧？',
  pinyin: 'Háizi sòng de lǐwù māma dōu xǐhuan ba?',
  description: 'Theme: Gifts and gratitude. Learn to express guessing and confirmation using 吧.',
  icon: '🎁',
  status: 'Ready'
},
{
  id: '4C-lesson3',
  book: '4C',
  lesson: 'Lesson 3',
  title: '我们从早到晚都在一起。',
  pinyin: 'Wǒmen cóng zǎo dào wǎn dōu zài yìqǐ.',
  description: 'Theme: Living environment and moving house. Learn to describe places, distance and changes using 从……到…….',
  icon: '🏘️',
  status: 'Ready'
},
{
  id: '4C-lesson4',
  book: '4C',
  lesson: 'Lesson 4',
  title: '我们一到假期就去旅行。',
  pinyin: 'Wǒmen yí dào jiàqī jiù qù lǚxíng.',
  description: 'Theme: Holiday plans and travel. Learn to express immediate sequence using 一……就…….',
  icon: '✈️',
  status: 'Ready'
},
{
  id: '4C-lesson5',
  book: '4C',
  lesson: 'Lesson 5',
  title: '如果八月参加夏令营，我就七月去旅行。',
  pinyin: 'Rúguǒ bā yuè cānjiā xiàlìngyíng, wǒ jiù qī yuè qù lǚxíng.',
  description: 'Theme: Summer camp and holiday plans. Learn to express conditions using 如果……就…….',
  icon: '🏕️',
  status: 'Ready'
},
{
  id: '4C-lesson6',
  book: '4C',
  lesson: 'Lesson 6',
  title: '为我们的理想加油！',
  pinyin: 'Wèi wǒmen de lǐxiǎng jiāyóu!',
  description: 'Theme: Dreams and future goals. Learn to express purpose and contribution using 为…….',
  icon: '🎯',
  status: 'Ready'
},
];
