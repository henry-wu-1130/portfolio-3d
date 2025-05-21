export const education = {
  academic: {
    title: {
      zh: '學歷',
      en: 'Education',
    },
    schools: [
      {
        name: {
          zh: '國立清華大學',
          en: 'National Tsing Hua University',
        },
        major: {
          zh: '哲學學程 & 政治經濟學程',
          en: 'Philosophy & Political Economy Program',
        },
        period: '2013 - 2018',
      },
    ],
  },
  languages: {
    title: {
      zh: '語言能力',
      en: 'Language Skills',
    },
    skills: [
      {
        name: {
          zh: '中文',
          en: 'Chinese',
        },
        level: {
          zh: '精通',
          en: 'Native',
        },
        proficiency: 1, // 100%
      },
      {
        name: {
          zh: '英文',
          en: 'English',
        },
        level: {
          zh: '通過 GEPT 中高級',
          en: 'GEPT High-Intermediate',
        },
        proficiency: 0.8, // 80%
      },
    ],
  },
} as const;
