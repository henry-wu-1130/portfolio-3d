import type { Experiences } from '../types/experience';

export const experiences: Experiences = [
  {
    key: 'chasing',
    company: {
      zh: '契星科技股份有限公司',
      en: 'CRUXOVER CO.,LTD',
    },
    position: {
      zh: '前端工程師',
      en: 'Frontend Engineer',
    },
    period: 'Feb 2021 – Present',
    location: 'Taipei, Taiwan',
    projects: [
      {
        key: 'website',
        title: {
          zh: '契星科技官網',
          en: 'Company Website',
        },
        description: {
          zh: '使用 Next.js 建置官網，整合 Notion Data API 作為輕量 CMS，讓非工程背景成員也能輕鬆更新內容。',
          en: 'Built company website using Next.js, integrated Notion Data API as a lightweight CMS, enabling non-technical team members to update content easily.',
        },
      },
      {
        key: 'datawiki',
        title: {
          zh: 'DataWiki 數據治理產品',
          en: 'DataWiki Data Governance Product',
        },
        achievements: {
          zh: [
            '基於 D3.js 設計並開發互動式資料血緣流程圖庫，支援拖拉、縮放、平移、動態連線。',
            '將專案重構為 Vite 專案，大幅提升開發啟動速度與 HMR 效能。',
            '導入 React Testing Library，建立可靠測試套件，提升專案長期維護性。',
          ],
          en: [
            'Designed and developed an interactive data lineage flow chart library based on D3.js, supporting drag-and-drop, zoom, pan, and dynamic connections.',
            'Refactored the project to Vite, significantly improving development startup speed and HMR performance.',
            'Introduced React Testing Library, establishing reliable test suites to enhance long-term maintainability.',
          ],
        },
      },
      {
        key: 'others',
        title: {
          zh: '其他貢獻',
          en: 'Other Contributions',
        },
        achievements: {
          zh: [
            '指導一名初級前端工程師，分享 React、TypeScript 及程式可維護性最佳實踐。',
            '規範 Git commit 流程，推行 conventional commit 並自動版本化，提升管理透明度。',
            '研究與評估各專案第三方函式庫，考量學習曲線、無頭架構與依賴風險。',
            '自行開發「log-craft」Git 整合工具，簡化每日工作日誌生成流程。',
          ],
          en: [
            'Mentored a junior frontend engineer, sharing best practices in React, TypeScript, and code maintainability.',
            'Standardized Git commit process, implementing conventional commits and automated versioning for improved management transparency.',
            'Researched and evaluated third-party libraries, considering learning curves, headless architecture, and dependency risks.',
            'Developed "log-craft" Git integration tool to streamline daily work log generation process.',
          ],
        },
      },
    ],
  },
  {
    key: 'yotta',
    company: {
      zh: '耀想創意科技有限公司',
      en: 'Think x Technology Co., Ltd.',
    },
    position: {
      zh: '前端工程師',
      en: 'Frontend Engineer',
    },
    period: 'May 2020 – Jan 2021',
    location: 'Taipei, Taiwan',
    achievements: [
      {
        key: 'pms',
        title: {
          zh: '成功專案經驗',
          en: 'Project Success',
        },
        description: {
          zh: '獨立完成 PMS 旅宿管理系統的前端產品原型設計與開發，從零到一打造完整使用流程。',
          en: 'Independently completed frontend product prototype design and development of PMS hotel management system, building a complete user flow from scratch.',
        },
      },
      {
        key: 'uiux',
        title: {
          zh: 'UI/UX 實務應用',
          en: 'UI/UX Practice',
        },
        description: {
          zh: '在缺乏完整設計稿的情況下，主動統整元件風格、制定 Style 規範，並著重於元件切換與操作流暢度，以提升整體使用者體驗。',
          en: 'Proactively unified component styles and established style guidelines without complete design specs, focusing on component transitions and operation smoothness to enhance overall user experience.',
        },
      },
      {
        key: 'communication',
        title: {
          zh: '跨部門溝通與協作',
          en: 'Cross-department Communication',
        },
        description: {
          zh: '主動協助後端設計 API 結構與規格，撰寫 API 文件，並協助設定跨域請求的 HTTP Headers，確保前後端整合順暢。',
          en: 'Actively assisted in backend API structure design and specifications, wrote API documentation, and helped configure CORS headers to ensure smooth frontend-backend integration.',
        },
      },
      {
        key: 'leetcode',
        title: {
          zh: 'LeetCode',
          en: 'LeetCode',
        },
        description: {
          zh: '系統性練習 <LeetCodeCount /> 題 LeetCode，涵蓋陣列、字串、樹、圖、DFS、BFS等常見主題',
          en: 'Systematically practiced <LeetCodeCount /> LeetCode problems, covering common topics like arrays, strings, trees, graphs, DFS, and BFS',
        },
      },
      {
        key: 'engineering',
        title: {
          zh: '軟體工程實力',
          en: 'Software Engineering',
        },
        description: {
          zh: '建立分層式架構，推動程式碼模組化與封裝，提升維護性與可讀性。',
          en: 'Established layered architecture, promoted code modularization and encapsulation to improve maintainability and readability.',
        },
      },
      {
        key: 'tooling',
        title: {
          zh: '工具導入與開發效率提升',
          en: 'Tool Integration',
        },
        description: {
          zh: '透過 Webpack 根據環境進行優化（如壓縮程式碼、去除註解），結合 ESLint 控制程式風格，並使用 VSCode 套件自動格式化程式碼，有效提升開發品質與效率。',
          en: 'Optimized development through Webpack based on environment (e.g., code minification, comment removal), combined with ESLint for code style control and VSCode extensions for automatic formatting, effectively improving development quality and efficiency.',
        },
      },
    ],
  },
] as const;
