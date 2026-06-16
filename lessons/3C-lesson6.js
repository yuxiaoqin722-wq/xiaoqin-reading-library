window.LESSONS = window.LESSONS || {};

window.LESSONS['3C-lesson6'] = {
  id: '3C-lesson6',
  book: '3C',
  lesson: 'Lesson 6',
  title: '我穿着红色的上衣。',
  theme: 'Clothes and Describing People',
  goal: 'Describe what someone is wearing or holding using 动词 + 着.',
  heroTranslation: 'I am wearing a red top.',

  titleTokens: [
    { py: 'Wǒ', hz: '我', cls: 'self' },
    { py: 'chuānzhe', hz: '穿着', cls: 'activity' },
    { py: 'hóngsè de shàngyī', hz: '红色的上衣', cls: 'like' },
    { hz: '。' }
  ],

  keyWords: [
    { emoji: '👕', pinyin: 'chuānzhe', text: '穿着', translation: 'wearing / يرتدي' },
    { emoji: '👓', pinyin: 'dàizhe', text: '戴着', translation: 'wearing / يلبس' },
    { emoji: '📱', pinyin: 'názhe', text: '拿着', translation: 'holding / يمسك' },
    { emoji: '📄', pinyin: 'jǔzhe', text: '举着', translation: 'holding up / يرفع' },
    { emoji: '👓', pinyin: 'yǎnjìng', text: '眼镜', translation: 'glasses / نظارة' },
    { emoji: '🎩', pinyin: 'màozi', text: '帽子', translation: 'hat / قبعة' },
    { emoji: '🧾', pinyin: 'zhǐ', text: '纸', translation: 'paper / ورقة' },
    { emoji: '🛬', pinyin: 'jiē', text: '接', translation: 'pick up / يستقبل' },
    { emoji: '🤔', pinyin: 'hǎoxiàng', text: '好像', translation: 'seem / يبدو' },
    { emoji: '✅', pinyin: 'duì', text: '对', translation: 'right / صحيح' }
  ],

  keySentences: [
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'chuānzhe', hz: '穿着', cls: 'activity' },
        { py: 'hóngsè de shàngyī', hz: '红色的上衣', cls: 'like' },
        { hz: '。' }
      ],
      translation: 'I am wearing a red top. / أنا أرتدي قميصًا أحمر.'
    },
    {
      tokens: [
        { py: 'Tā', hz: '他', cls: 'person' },
        { py: 'dàizhe yǎnjìng', hz: '戴着眼镜', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'He is wearing glasses. / هو يلبس نظارة.'
    },
    {
      tokens: [
        { py: 'Tā', hz: '他', cls: 'person' },
        { py: 'názhe', hz: '拿着', cls: 'activity' },
        { py: 'hēisè de shǒujī', hz: '黑色的手机', cls: 'not-like' },
        { hz: '。' }
      ],
      translation: 'He is holding a black phone. / هو يمسك هاتفًا أسود.'
    },
    {
      tokens: [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'jǔzhe', hz: '举着', cls: 'activity' },
        { py: 'yì zhāng zhǐ', hz: '一张纸', cls: 'activity' },
        { hz: '。' }
      ],
      translation: 'I am holding up a piece of paper. / أنا أرفع ورقة.'
    }
  ],

  readings: {
    A: {
      label: 'Level A 初级｜我会描述状态',
      translation: 'I am wearing a red top. She is wearing glasses. He is holding a phone. I am holding up a piece of paper. She is wearing a hat.',
      tip: 'Reading Goal: Describe what someone is wearing or holding.',
      lines: [
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'chuānzhe', hz: '穿着', cls: 'activity' },
            { py: 'hóngsè de shàngyī', hz: '红色的上衣', cls: 'like' },
            { hz: '。' }
          ],
          translation: 'I am wearing a red top. / أنا أرتدي قميصًا أحمر.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'dàizhe yǎnjìng', hz: '戴着眼镜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She is wearing glasses. / هي تلبس نظارة.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'názhe shǒujī', hz: '拿着手机', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He is holding a phone. / هو يمسك هاتفًا.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jǔzhe', hz: '举着', cls: 'activity' },
            { py: 'yì zhāng zhǐ', hz: '一张纸', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I am holding up a piece of paper. / أنا أرفع ورقة.'
        },
        {
          tokens: [
            { py: 'Tā', hz: '她', cls: 'person' },
            { py: 'dàizhe màozi', hz: '戴着帽子', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'She is wearing a hat. / هي تلبس قبعة.'
        }
      ]
    },

    B: {
      label: 'Level B 中级｜我会在机场找人',
      translation: 'Did you see my friend? What does he look like? He is wearing glasses. What is he wearing? He is wearing a red top and black pants. Is he holding anything? He is holding a black phone. I think I saw him. Where is he? That person over there. Yes, that is him!',
      tip: 'Pair Work: Describe a person clearly and find the right person.',
      lines: [
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nǐ kànjiàn', hz: '你看见', cls: 'person' },
            { py: 'wǒ de péngyou le ma', hz: '我的朋友了吗', cls: 'person' },
            { hz: '？' }
          ],
          translation: 'Did you see my friend? / هل رأيت صديقي؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'cháng shénme yàng', hz: '长什么样', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What does he look like? / كيف يبدو؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā', hz: '他', cls: 'person' },
            { py: 'dàizhe yǎnjìng', hz: '戴着眼镜', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He is wearing glasses. / هو يلبس نظارة.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā chuānzhe shénme', hz: '他穿着什么', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'What is he wearing? / ماذا يرتدي؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā chuānzhe', hz: '他穿着', cls: 'activity' },
            { py: 'hóngsè de shàngyī', hz: '红色的上衣', cls: 'like' },
            { hz: '，' },
            { py: 'hēisè de kùzi', hz: '黑色的裤子', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'He is wearing a red top and black pants. / هو يرتدي قميصًا أحمر وبنطالًا أسود.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā názhe', hz: '他拿着', cls: 'activity' },
            { py: 'dōngxi ma', hz: '东西吗', cls: 'activity' },
            { hz: '？' }
          ],
          translation: 'Is he holding anything? / هل يمسك شيئًا؟'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Tā názhe', hz: '他拿着', cls: 'activity' },
            { py: 'hēisè de shǒujī', hz: '黑色的手机', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'He is holding a black phone. / هو يمسك هاتفًا أسود.'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Wǒ hǎoxiàng', hz: '我好像', cls: 'self' },
            { py: 'kànjiàn tā le', hz: '看见他了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I think I saw him. / أظن أنني رأيته.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Zài nǎr', hz: '在哪儿', cls: 'place' },
            { hz: '？' }
          ],
          translation: 'Where is he? / أين هو؟'
        },
        {
          tokens: [
            { py: '', hz: '👧', cls: 'speaker' },
            { hz: '：' },
            { py: 'Nàbiān', hz: '那边', cls: 'place' },
            { py: 'nà ge rén', hz: '那个人', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'That person over there. / ذلك الشخص هناك.'
        },
        {
          tokens: [
            { py: '', hz: '👦', cls: 'speaker' },
            { hz: '：' },
            { py: 'Duì', hz: '对', cls: 'like' },
            { hz: '，' },
            { py: 'jiù shì tā', hz: '就是他', cls: 'person' },
            { hz: '！' }
          ],
          translation: 'Yes, that is him! / نعم، هذا هو!'
        }
      ]
    },

    C: {
      label: 'Level C 高级｜我会讲机场接人的经历',
      translation: 'Today, I went to the airport to pick up my friend. This was his first time coming to the UAE. I held up a piece of paper. His name was on the paper. He said he was wearing a red top and black pants. He was also wearing glasses and holding a black phone. I looked for him at the airport for a long time. Later, I saw one person. He was wearing a red top, wearing glasses, and holding a phone. I walked over and asked. It turned out that he was my friend. Finally, I picked him up.',
      tip: 'Speaking Goal: Tell a short airport story and describe a person clearly.',
      lines: [
        {
          tokens: [
            { py: 'Jīntiān', hz: '今天', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ qù jīchǎng', hz: '我去机场', cls: 'self' },
            { py: 'jiē péngyou', hz: '接朋友', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Today, I went to the airport to pick up my friend. / اليوم ذهبت إلى المطار لاستقبال صديقي.'
        },
        {
          tokens: [
            { py: 'Zhè shì tā', hz: '这是他', cls: 'person' },
            { py: 'dì yī cì', hz: '第一次', cls: 'time' },
            { py: 'lái Āliánqiú', hz: '来阿联酋', cls: 'place' },
            { hz: '。' }
          ],
          translation: 'This was his first time coming to the UAE. / كانت هذه أول مرة يأتي فيها إلى الإمارات.'
        },
        {
          tokens: [
            { py: 'Wǒ', hz: '我', cls: 'self' },
            { py: 'jǔzhe', hz: '举着', cls: 'activity' },
            { py: 'yì zhāng zhǐ', hz: '一张纸', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I held up a piece of paper. / كنت أرفع ورقة.'
        },
        {
          tokens: [
            { py: 'Zhǐ shàng', hz: '纸上', cls: 'place' },
            { py: 'yǒu tā de míngzi', hz: '有他的名字', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'His name was on the paper. / كان اسمه على الورقة.'
        },
        {
          tokens: [
            { py: 'Tā shuō', hz: '他说', cls: 'person' },
            { hz: '，' },
            { py: 'tā chuānzhe', hz: '他穿着', cls: 'activity' },
            { py: 'hóngsè de shàngyī', hz: '红色的上衣', cls: 'like' },
            { hz: '，' },
            { py: 'hēisè de kùzi', hz: '黑色的裤子', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'He said he was wearing a red top and black pants. / قال إنه يرتدي قميصًا أحمر وبنطالًا أسود.'
        },
        {
          tokens: [
            { py: 'Tā hái', hz: '他还', cls: 'person' },
            { py: 'dàizhe yǎnjìng', hz: '戴着眼镜', cls: 'activity' },
            { hz: '，' },
            { py: 'názhe', hz: '拿着', cls: 'activity' },
            { py: 'hēisè de shǒujī', hz: '黑色的手机', cls: 'not-like' },
            { hz: '。' }
          ],
          translation: 'He was also wearing glasses and holding a black phone. / كان أيضًا يلبس نظارة ويمسك هاتفًا أسود.'
        },
        {
          tokens: [
            { py: 'Wǒ zài jīchǎng', hz: '我在机场', cls: 'place' },
            { py: 'zhǎo le hěn jiǔ', hz: '找了很久', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I looked for him at the airport for a long time. / بحثت عنه في المطار لمدة طويلة.'
        },
        {
          tokens: [
            { py: 'Hòulái', hz: '后来', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ kànjiàn', hz: '我看见', cls: 'self' },
            { py: 'yí ge rén', hz: '一个人', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'Later, I saw one person. / بعد ذلك، رأيت شخصًا.'
        },
        {
          tokens: [
            { py: 'Tā chuānzhe', hz: '他穿着', cls: 'activity' },
            { py: 'hóngsè de shàngyī', hz: '红色的上衣', cls: 'like' },
            { hz: '，' },
            { py: 'dàizhe yǎnjìng', hz: '戴着眼镜', cls: 'activity' },
            { hz: '，' },
            { py: 'názhe shǒujī', hz: '拿着手机', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'He was wearing a red top, wearing glasses, and holding a phone. / كان يرتدي قميصًا أحمر ويلبس نظارة ويمسك هاتفًا.'
        },
        {
          tokens: [
            { py: 'Wǒ zǒu guòqù', hz: '我走过去', cls: 'self' },
            { py: 'wèn le wèn', hz: '问了问', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'I walked over and asked. / مشيت إليه وسألت.'
        },
        {
          tokens: [
            { py: 'Yuánlái', hz: '原来', cls: 'time' },
            { py: 'tā jiù shì', hz: '他就是', cls: 'person' },
            { py: 'wǒ de péngyou', hz: '我的朋友', cls: 'person' },
            { hz: '。' }
          ],
          translation: 'It turned out that he was my friend. / اتضح أنه صديقي.'
        },
        {
          tokens: [
            { py: 'Zuìhòu', hz: '最后', cls: 'time' },
            { hz: '，' },
            { py: 'wǒ', hz: '我', cls: 'self' },
            { py: 'jiēdào tā le', hz: '接到他了', cls: 'activity' },
            { hz: '。' }
          ],
          translation: 'Finally, I picked him up. / أخيرًا استقبلته.'
        }
      ]
    }
  },

  practice: [
    {
      question: '1. “我穿着红色的上衣。” 是什么意思？',
      pinyin: '“Wǒ chuānzhe hóngsè de shàngyī.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am wearing a red top.', correct: true },
        { text: 'I am buying a red top.', correct: false },
        { text: 'I am washing a red top.', correct: false }
      ]
    },
    {
      question: '2. 哪一个是 “holding a phone”？',
      pinyin: 'Nǎ yí ge shì “holding a phone”?',
      translation: 'Which one means “holding a phone”?',
      choices: [
        { text: '拿着手机', correct: true },
        { text: '戴着眼镜', correct: false },
        { text: '穿着上衣', correct: false }
      ]
    },
    {
      question: '3. “他戴着眼镜。” 是什么意思？',
      pinyin: '“Tā dàizhe yǎnjìng.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'He is wearing glasses.', correct: true },
        { text: 'He is holding paper.', correct: false },
        { text: 'He is wearing a hat.', correct: false }
      ]
    },
    {
      question: '4. “我举着一张纸。” 是什么意思？',
      pinyin: '“Wǒ jǔzhe yì zhāng zhǐ.” shì shénme yìsi?',
      translation: 'What does this sentence mean?',
      choices: [
        { text: 'I am holding up a piece of paper.', correct: true },
        { text: 'I am wearing glasses.', correct: false },
        { text: 'I am holding a phone.', correct: false }
      ]
    }
  ],

  challenge: {
    lines: [
      [
        { py: 'Jīntiān', hz: '今天', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ qù', hz: '我去', cls: 'self' },
        { blank: true },
        { py: 'jiē péngyou', hz: '接朋友', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ', hz: '我', cls: 'self' },
        { py: 'jǔzhe', hz: '举着', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā chuānzhe', hz: '他穿着', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Tā hái', hz: '他还', cls: 'person' },
        { py: 'dàizhe', hz: '戴着', cls: 'activity' },
        { blank: true },
        { hz: '，' },
        { py: 'názhe', hz: '拿着', cls: 'activity' },
        { blank: true },
        { hz: '。' }
      ],
      [
        { py: 'Wǒ zài', hz: '我在', cls: 'place' },
        { blank: true },
        { py: 'zhǎo le hěn jiǔ', hz: '找了很久', cls: 'activity' },
        { hz: '。' }
      ],
      [
        { py: 'Zuìhòu', hz: '最后', cls: 'time' },
        { hz: '，' },
        { py: 'wǒ', hz: '我', cls: 'self' },
        { py: 'jiēdào tā le', hz: '接到他了', cls: 'activity' },
        { hz: '。' }
      ]
    ],
    translation: 'Today, I went to ______ to pick up my friend. I held up ______. He was wearing ______. He was also wearing ______ and holding ______. I looked for him at ______ for a long time. Finally, I picked him up.',
    tip: 'Use: 机场、一张纸、红色的上衣、黑色的裤子、眼镜、帽子、手机、书包。'
  },

  meanings: {
    '穿着': 'wearing / يرتدي',
    '戴着': 'wearing / يلبس',
    '拿着': 'holding / يمسك',
    '举着': 'holding up / يرفع',
    '眼镜': 'glasses / نظارة',
    '帽子': 'hat / قبعة',
    '纸': 'paper / ورقة',
    '一张纸': 'one piece of paper / ورقة واحدة',
    '接': 'pick up / يستقبل',
    '接朋友': 'pick up a friend / يستقبل صديقًا',
    '接到他了': 'picked him up / استقبله',
    '好像': 'seem / يبدو',
    '对': 'right / صحيح',
    '就是他': 'that is him / هذا هو',
    '上衣': 'top / قميص',
    '裤子': 'pants / بنطال',
    '手机': 'phone / هاتف',
    '红色的上衣': 'red top / قميص أحمر',
    '黑色的裤子': 'black pants / بنطال أسود',
    '黑色的手机': 'black phone / هاتف أسود',
    '我穿着': 'I am wearing / أنا أرتدي',
    '他穿着': 'he is wearing / هو يرتدي',
    '她戴着眼镜': 'she is wearing glasses / هي تلبس نظارة',
    '戴着眼镜': 'wearing glasses / يلبس نظارة',
    '拿着手机': 'holding a phone / يمسك هاتفًا',
    '拿着黑色的手机': 'holding a black phone / يمسك هاتفًا أسود',
    '举着一张纸': 'holding up a piece of paper / يرفع ورقة',
    '你看见': 'did you see / هل رأيت',
    '我的朋友了吗': 'my friend / صديقي',
    '长什么样': 'what does he look like / كيف يبدو',
    '他穿着什么': 'what is he wearing / ماذا يرتدي',
    '东西吗': 'anything / شيئًا',
    '我好像': 'I think; it seems / أظن',
    '看见他了': 'saw him / رأيته',
    '在哪儿': 'where / أين',
    '那边': 'over there / هناك',
    '那个人': 'that person / ذلك الشخص',
    '今天': 'today / اليوم',
    '我去机场': 'I went to the airport / ذهبت إلى المطار',
    '机场': 'airport / مطار',
    '这是他': 'this was his / هذه كانت له',
    '第一次': 'first time / أول مرة',
    '来阿联酋': 'come to the UAE / يأتي إلى الإمارات',
    '纸上': 'on the paper / على الورقة',
    '有他的名字': 'has his name / عليه اسمه',
    '他说': 'he said / قال',
    '他还': 'he also / هو أيضًا',
    '我在机场': 'I was at the airport / كنت في المطار',
    '找了很久': 'looked for a long time / بحث لمدة طويلة',
    '后来': 'later / بعد ذلك',
    '我看见': 'I saw / رأيت',
    '一个人': 'one person / شخص واحد',
    '我走过去': 'I walked over / مشيت إليه',
    '问了问': 'asked / سأل',
    '原来': 'it turned out / اتضح',
    '他就是': 'he is exactly / هو نفسه',
    '我的朋友': 'my friend / صديقي',
    '最后': 'finally / أخيرًا'
  }
};