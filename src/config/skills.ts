export const skills = {
  frontend: {
    title: {
      zh: '前端技術',
      en: 'Frontend Technologies',
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  frameworks: {
    title: {
      zh: '框架與函式庫',
      en: 'Frameworks & Libraries',
    },
    skills: ['React', 'Vue', 'Next.js', 'D3.js', 'Zustand', 'React Hook Form']
  },
  styling: {
    title: {
      zh: '樣式工具',
      en: 'Styling Tools',
    },
    skills: ['Tailwind CSS', 'Styled-Components', 'Chakra UI', 'Bootstrap']
  },
  backend: {
    title: {
      zh: '後端與全端',
      en: 'Backend & Full Stack',
    },
    skills: ['Node.js', 'Express']
  },
  stateManagement: {
    title: {
      zh: '狀態管理',
      en: 'State Management',
    },
    skills: ['Redux', 'XState', 'Zustand']
  },
  testing: {
    title: {
      zh: '測試技術',
      en: 'Testing Technologies',
    },
    skills: ['Jest', 'React Testing Library']
  },
  devTools: {
    title: {
      zh: '開發工具',
      en: 'Development Tools',
    },
    skills: ['Git', 'GitHub Actions', 'Docker', 'Vite', 'Webpack']
  }
} as const;
