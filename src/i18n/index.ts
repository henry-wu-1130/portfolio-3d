import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import en from './locales/en';
import zh from './locales/zh';
import _get from 'lodash/get';

type Language = 'en' | 'zh';

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const locales = {
  en,
  zh,
};

export const useI18n = create<I18nStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      t: (key) => {
        const language = get().language;
        //const keys = key.split('.');
        const value = locales[language];

        // for (const k of keys) {
        //   if (value && typeof value === 'object' && k in value) {
        //     value = value[k as keyof typeof value];
        //   } else {
        //     console.warn(`Translation key not found: ${key}`);
        //     return key;
        //   }
        // }

        return _get(value, key);
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
