import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('@/i18n', () => ({
  useI18n: () => ({ t: (k: string) => k, language: 'en' }),
}));
jest.mock('@/config/experience', () => ({
  experiences: [
    {
      key: 'exp1',
      company: { en: 'Company', zh: '公司' },
      role: { en: 'Engineer', zh: '工程師' },
      period: '2020-2022',
      projects: [
        {
          key: 'proj1',
          title: { en: 'Proj', zh: '專案' },
          description: { en: 'desc <LeetCodeCount />', zh: '說明' },
        },
      ],
    },
  ],
}));
jest.mock('next/dynamic', () => (fn: any) => fn());
jest.mock('./LeetCodeCount', () => () => <span>95+</span>);

describe('ExperienceSection', () => {
  it('renders experience and project details', () => {
    const ExperienceSection = require('./ExperienceSection').default;
    render(<ExperienceSection />);
    expect(screen.getByText('nav.experience')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Engineer')).toBeInTheDocument();
    expect(screen.getByText('Proj')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
    expect(screen.getByText('95+')).toBeInTheDocument();
  });
});
