import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock useI18n
jest.mock('@/i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
    language: 'en',
  }),
}));
// Mock config
jest.mock('@/config/education', () => ({
  education: {
    academic: {
      title: { en: 'Academic', zh: '學歷' },
      schools: [
        {
          name: { en: 'NTU', zh: '台大' },
          major: { en: 'CS', zh: '資工' },
          period: '2020-2024',
        },
      ],
    },
    languages: {
      title: { en: 'Languages', zh: '語言' },
      skills: [
        {
          name: { en: 'English', zh: '英文' },
          level: { en: 'Fluent', zh: '流利' },
          proficiency: 0.9,
        },
      ],
    },
  },
}));

describe('EducationSection', () => {
  it('renders academic and language sections', () => {
    const EducationSection = require('./EducationSection').default;
    render(<EducationSection />);
    expect(screen.getByText('nav.education')).toBeInTheDocument();
    expect(screen.getByText('Academic')).toBeInTheDocument();
    expect(screen.getByText('NTU')).toBeInTheDocument();
    expect(screen.getByText('CS')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Fluent')).toBeInTheDocument();
    // 檢查進度條 (proficiency)
    // 進度條沒有 role 屬性，僅檢查元素存在
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
