import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('@/i18n', () => ({
  useI18n: () => ({ t: (k: string) => k, language: 'en' }),
}));
jest.mock('@/config/projects', () => ({
  projects: {
    p1: {
      title: 'P1',
      description: { en: 'desc', zh: '說明' },
      implementation: { title: { en: 'Impl', zh: '實作' }, points: { en: ['i1'], zh: ['實1'] } },
      highlights: { title: { en: 'HL', zh: '亮點' }, points: { en: ['h1'], zh: ['亮1'] } },
    },
  },
}));

describe('ProjectsSection', () => {
  it('renders all projects', () => {
    const ProjectsSection = require('./ProjectsSection').default;
    render(<ProjectsSection />);
    expect(screen.getByText('nav.projects')).toBeInTheDocument();
    expect(screen.getByText('P1')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
    expect(screen.getByText('Impl')).toBeInTheDocument();
    expect(screen.getByText('HL')).toBeInTheDocument();
    expect(screen.getByText('i1')).toBeInTheDocument();
    expect(screen.getByText('h1')).toBeInTheDocument();
  });
});
