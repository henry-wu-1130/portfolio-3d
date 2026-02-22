import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('@/i18n', () => ({
  useI18n: () => ({ t: (k: string) => k, language: 'en' }),
}));
jest.mock('@/config/skills', () => ({
  skills: {
    frontend: {
      title: { en: 'Frontend', zh: '前端' },
      skills: ['React', 'Next.js'],
    },
  },
}));

describe('SkillsSection', () => {
  it('renders skill categories and skills', () => {
    const SkillsSection = require('./SkillsSection').default;
    render(<SkillsSection />);
    expect(screen.getByText('nav.skills')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });
});
