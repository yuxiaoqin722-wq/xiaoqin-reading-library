window.LESSONS = window.LESSONS || {};

window.LESSONS['3A-lesson9'] = {
  id: '3A-lesson9',
  book: '3A',
  lesson: 'Lesson 9',
  title: '我头疼。',
  theme: 'Health and Advice',
  goal: 'Talk about feeling sick and give simple advice using 应该.',
  heroTranslation: 'I have a headache.',
  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'tóu téng', hz: '头疼', cls: 'activity' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '🤕', pinyin: 'tóu téng', text: '头疼', translation: 'headache / صداع' },
    { emoji: '👀', pinyin: 'yǎnjing téng', text: '眼睛疼', translation: 'eyes hurt / ألم في العينين' },
    { emoji: '🌡️', pinyin: 'fāshāo', text: '发烧', translation: 'have a fever / حمى' },
    { emoji: '🧍', pinyin: 'shēntǐ', text: '身体', translation: 'body / جسم' },
    { emoji: '🤒', pinyin: 'shēngbìng', text: '生病', translation: 'be sick / مريض' },
    { emoji: '🏥', pinyin: 'yīyuàn', text: '医院', translation: 'hospital / مستشفى' },
    { emoji: '👩‍⚕️', pinyin: 'yīshēng', text: '医生', translation: 'doctor / طبيب' },
    { emoji: '💊', pinyin: 'yào', text: '药', translation: 'medicine / دواء' },
    { emoji: '✅', pinyin: 'yīnggāi', text: '应该', translation: 'should / ينبغي' },
    { emoji: '😴', pinyin: 'duō xiūxi', text: '多休息', translation: 'rest more / استرح أكثر' },
    { emoji: '💧', pinyin: 'hē shuǐ', text: '喝水', translation: 'drink water / اشرب الماء' },
    { emoji: '☕', pinyin: 'rèshuǐ', text: '热水', translation: 'hot water / ماء ساخن' },
    { emoji: '👍', pinyin: 'duì shēntǐ hǎo', text: '对身体好', translation: 'good for the body / جيد للجسم' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Nǐ', hz: '你', cls: 'person' },
        { py: 'zěnme le', hz: '怎么了', cls: 'activity' },
        { hz: '？' }
      ],
      translation: 'What is wrong? / ما بك؟'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'tóu téng', hz: '头疼', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I have a headache. / عندي صداع.'
    },
    {
      tokens: [
        { py: 'Nǐ yīnggāi', hz: '你应该', cls: 'person' },
        { py: 'duō xiūxi', hz: '多休息', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'You should rest more. / يجب أن ترتاح أكثر.'
    },
    {
      tokens: [
        { py: 'Duō hē rèshuǐ', hz: '多喝热水', cls: 'activity' },
        { py: 'duì shēntǐ hǎo', hz: '对身体好', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'Drinking more hot water is good for the body. / شرب المزيد من الماء الساخن جيد للجسم.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会说哪里不舒服',
      translation: 'I have a headache. My eyes hurt. I have a fever. My body does not feel well.',
      tip: 'Reading Goal: Say simple health problems.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'tóu téng', hz: '头疼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have a headache. / عندي صداع.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'yǎnjing téng', hz: '眼睛疼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My eyes hurt. / عيناي تؤلمانني.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'fāshāo le', hz: '发烧了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have a fever. / عندي حمى.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'shēntǐ bù hǎo', hz: '身体不好', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'My body does not feel well. / جسمي ليس بخير.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会关心朋友',
      translation: 'What is wrong? I have a headache. You should rest more. Thank you. Do you have a fever? No, my eyes just hurt. You should look at your phone less.',
      tip: 'Pair Work: Ask about health and give simple advice.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'zěnme le', hz: '怎么了', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What is wrong? / ما بك؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'tóu téng', hz: '头疼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have a headache. / عندي صداع.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yīnggāi', hz: '你应该', cls: 'person' },
            { py: 'duō xiūxi', hz: '多休息', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'You should rest more. / يجب أن ترتاحي أكثر.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'Thank you. / شكرًا.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ', hz: '你', cls: 'person' },
            { py: 'fāshāo le ma', hz: '发烧了吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Do you have a fever? / هل عندك حمى؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Méiyǒu', hz: '没有', cls: 'not-like' },
            { hz: '，' },
            { py: 'wǒ zhǐshì', hz: '我只是', cls: 'self' },
            { py: 'yǎnjing téng', hz: '眼睛疼', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'No, my eyes just hurt. / لا، فقط عيناي تؤلمانني.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ yīnggāi', hz: '你应该', cls: 'person' },
            { py: 'shǎo kàn shǒujī', hz: '少看手机', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'You should look at your phone less. / يجب أن تقللي من استخدام الهاتف.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Hǎo de', hz: '好的', cls: 'like' },
            { hz: '，' },
            { py: 'xièxie', hz: '谢谢', cls: 'thanks' },
            { hz: '。' }
          ],
          translation: 'Okay, thank you. / حسنًا، شكرًا.'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲生病经历',
      translation: 'Today I do not feel well. I have a headache and a little fever. My mother took me to the hospital. The doctor said, “You should rest more and drink more water.” The doctor also said, “You should take medicine on time.” After I went home, I drank a lot of hot water. I think resting more is good for the body. Now I feel much better.',
      tip: 'Speaking Goal: Tell a short story about being sick and getting advice.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'shēntǐ bù shūfu', hz: '身体不舒服', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Today I do not feel well. / اليوم لا أشعر أن جسمي بخير.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'tóu téng', hz: '头疼', cls: 'activity' },
            { hz: '，' },
            { py: 'yě yǒu yìdiǎnr fāshāo', hz: '也有一点儿发烧', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I have a headache and a little fever. / عندي صداع وحمى خفيفة.'
        },
        {
          tokens: [
            { py: 'Māma', hz: '妈妈', cls: 'person' },
            { py: 'dài wǒ qù', hz: '带我去', cls: 'activity' },
            { py: 'yīyuàn', hz: '医院', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'My mother took me to the hospital. / أخذتني أمي إلى المستشفى.'
        },
        {
          tokens: [
            { py: 'Yīshēng shuō', hz: '医生说', cls: 'person' },
            { hz: '：“' },
            { py: 'Nǐ yīnggāi', hz: '你应该', cls: 'person' },
            { py: 'duō xiūxi', hz: '多休息', cls: 'activity' },
            { hz: '，' },
            { py: 'duō hē shuǐ', hz: '多喝水。”', cls: 'activity' },
            { hz: '' }
          ],
          translation: 'The doctor said, “You should rest more and drink more water.” / قال الطبيب: “يجب أن ترتاح أكثر وتشرب ماءً أكثر.”'
        },
        {
          tokens: [
            { py: 'Yīshēng hái shuō', hz: '医生还说', cls: 'person' },
            { hz: '：“' },
            { py: 'Nǐ yīnggāi', hz: '你应该', cls: 'person' },
            { py: 'ànshí chī yào', hz: '按时吃药', cls: 'activity' },
            { hz: '。”' }
          ],
          translation: 'The doctor also said, “You should take medicine on time.” / قال الطبيب أيضًا: “يجب أن تتناول الدواء في الوقت المحدد.”'
        },
        {
          tokens: [
            { py: 'Huí jiā yǐhòu', hz: '回家以后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ hē le', hz: '我喝了', cls: 'self' },
            { py: 'hěn duō rèshuǐ', hz: '很多热水', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'After I went home, I drank a lot of hot water. / بعد أن عدت إلى البيت، شربت الكثير من الماء الساخن.'
        },
        {
          tokens: [
            { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
            { py: 'duō xiūxi', hz: '多休息', cls: 'activity' },
            { py: 'duì shēntǐ hǎo', hz: '对身体好', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I think resting more is good for the body. / أعتقد أن الراحة أكثر جيدة للجسم.'
        },
        {
          tokens: [
            { py: 'Xiànzài', hz: '现在', cls: 'time' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'hǎo duō le', hz: '好多了', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'Now I feel much better. / الآن أشعر بتحسن كبير.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “头疼” 是什么意思？',
      pinyin: '“Tóu téng” shì shénme yìsi?',
      translation: 'What does “头疼” mean?',
      choices: [
        { text: 'headache', correct: true },
        { text: 'fever', correct: false },
        { text: 'drink water', correct: false }
      ]
    },
    {
      question: '2. “你应该多休息。” 是什么意思？',
      pinyin: '“Nǐ yīnggāi duō xiūxi.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'You should rest more.', correct: true },
        { text: 'You should buy medicine.', correct: false },
        { text: 'You have a headache.', correct: false }
      ]
    },
    {
      question: '3. 哪一个是 “doctor”？',
      pinyin: 'Nǎ yí ge shì “doctor”?',
      translation: 'Which one means “doctor”?',
      choices: [
        { text: '医生', correct: true },
        { text: '医院', correct: false },
        { text: '身体', correct: false }
      ]
    },
    {
      question: '4. “少看手机” 是什么意思？',
      pinyin: '“Shǎo kàn shǒujī” shì shénme yìsi?',
      translation: 'What does “少看手机” mean?',
      choices: [
        { text: 'look at your phone less', correct: true },
        { text: 'drink hot water', correct: false },
        { text: 'go to the hospital', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { blank: true },
        { py: 'téng', hz: '疼', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Yīshēng shuō', hz: '医生说', cls: 'person' },
        { hz: '：“' },
        { py: 'Nǐ yīnggāi', hz: '你应该', cls: 'person' },
        { blank: true },
        { hz: '。”' }
      ],
      [
        { py: 'Wǒ juéde', hz: '我觉得', cls: 'self' },
        { blank: true },
        { py: 'duì shēntǐ hǎo', hz: '对身体好', cls: 'like' },
        { hz: '。' }
      ],
      [
        { py: 'Xiànzài', hz: '现在', cls: 'time' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'hǎo duō le', hz: '好多了', cls: 'like' },
        { hz: '。' }
      ]
    ],
    translation: 'Today I ______. My ______ hurts. The doctor said, “You should ______.” I think ______ is good for the body. Now I feel much better.',
    tip: 'Use: 身体不舒服、头、眼睛、肚子、多休息、多喝水、按时吃药、少看手机、多喝热水。'
  },

  meanings: {
    '我': 'I / أنا',
    '你': 'you / أنت',
    '头疼': 'headache / صداع',
    '眼睛疼': 'eyes hurt / ألم في العينين',
    '发烧': 'have a fever / حمى',
    '发烧了': 'have a fever / عندي حمى',
    '身体': 'body / جسم',
    '身体不好': 'body does not feel well / الجسم ليس بخير',
    '身体不舒服': 'body does not feel well / الجسم غير مرتاح',
    '生病': 'be sick / مريض',
    '药': 'medicine / دواء',
    '医院': 'hospital / مستشفى',
    '医生': 'doctor / طبيب',
    '医生说': 'the doctor said / قال الطبيب',
    '医生还说': 'the doctor also said / قال الطبيب أيضًا',
    '应该': 'should / ينبغي',
    '你应该': 'you should / يجب عليك',
    '多休息': 'rest more / استرح أكثر',
    '喝水': 'drink water / اشرب الماء',
    '多喝水': 'drink more water / اشرب ماءً أكثر',
    '热水': 'hot water / ماء ساخن',
    '很多热水': 'a lot of hot water / الكثير من الماء الساخن',
    '多喝热水': 'drink more hot water / اشرب المزيد من الماء الساخن',
    '对身体好': 'good for the body / جيد للجسم',
    '你怎么了': 'what is wrong / ما بك',
    '怎么了': 'what is wrong / ما الأمر',
    '谢谢': 'thank you / شكرًا',
    '发烧了吗': 'do you have a fever / هل عندك حمى',
    '没有': 'no; do not have / لا',
    '我只是': 'I only / أنا فقط',
    '少看手机': 'look at your phone less / قلل استخدام الهاتف',
    '好的': 'okay / حسنًا',
    '今天': 'today / اليوم',
    '也有一点儿发烧': 'also have a little fever / عندي حمى خفيفة أيضًا',
    '妈妈': 'mother / أم',
    '带我去': 'take me to / تأخذني إلى',
    '按时吃药': 'take medicine on time / تناول الدواء في الوقت المحدد',
    '回家以后': 'after going home / بعد العودة إلى البيت',
    '我喝了': 'I drank / شربت',
    '我觉得': 'I think / أعتقد',
    '现在': 'now / الآن',
    '好多了': 'much better / أفضل بكثير',
    '肚子': 'stomach / بطن',
    '疼': 'hurt / يؤلم'
  }
};