export const projects = {
  logCraft: {
    title: 'log-craft',
    description: {
      zh: '一個基於 Vercel Serverless Functions 的工作日誌生成服務，能夠自動整合 Git 提交紀錄。',
      en: 'A work log generation service based on Vercel Serverless Functions, capable of integrating Git commit history.',
    },
    implementation: {
      title: {
        zh: '核心技術實現',
        en: 'Core Technical Implementation',
      },
      points: {
        zh: [
          '使用 Next.js API Routes 實現 Serverless Functions',
          '整合 GitHub API，自動擷取和分析提交紀錄',
          '實現智能的內容分類和格式化功能',
          '透過 Vercel 部署，提供穩定的 API 服務',
        ],
        en: [
          'Implemented Serverless Functions using Next.js API Routes',
          'Integrated GitHub API for automatic commit history analysis',
          'Implemented intelligent content categorization and formatting',
          'Deployed via Vercel for stable API service',
        ],
      },
    },
    highlights: {
      title: {
        zh: '工程亮點',
        en: 'Engineering Highlights',
      },
      points: {
        zh: [
          '採用模組化設計，確保程式碼的可維護性',
          '實現完整的錯誤處理和監控機制',
          '整合 Vercel Analytics 追蹤 API 使用狀況',
          '提供詳細的 API 文檔和使用範例',
        ],
        en: [
          'Adopted modular design for code maintainability',
          'Implemented comprehensive error handling and monitoring',
          'Integrated Vercel Analytics for API usage tracking',
          'Provided detailed API documentation and usage examples',
        ],
      },
    },
  },
  reactStream: {
    title: 'react-stream',
    description: {
      zh: '一個用於 React 的流程圖繪製套件，支援複雜的互動和自定義功能。',
      en: 'A React flow chart drawing library supporting complex interactions and customization features.',
    },
    implementation: {
      title: {
        zh: '核心技術實現',
        en: 'Core Technical Implementation',
      },
      points: {
        zh: [
          '使用 D3.js 實現複雜的縮放、平移和拖曳互動',
          '基於 Zustand 設計高效的狀態管理系統',
          '採用 TypeScript 提供完整的型別支援',
          '實現自定義節點和連接線系統',
        ],
        en: [
          'Implemented complex zoom, pan, and drag interactions using D3.js',
          'Designed efficient state management system with Zustand',
          'Utilized TypeScript for complete type support',
          'Implemented custom node and connection system',
        ],
      },
    },
    highlights: {
      title: {
        zh: '工程亮點',
        en: 'Engineering Highlights',
      },
      points: {
        zh: [
          '採用模組化架構設計，確保代碼的可維護性',
          '導入完整的測試方案（Jest + Testing Library）',
          '實施嚴格的程式碼品質管理',
          '發布至 npm，提供詳細的 API 文檔',
        ],
        en: [
          'Adopted modular architecture design for maintainability',
          'Implemented comprehensive testing solution (Jest + Testing Library)',
          'Enforced strict code quality management',
          'Published to npm with detailed API documentation',
        ],
      },
    },
  },
} as const;
