import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('@/i18n', () => ({
  useI18n: () => ({ t: (k: string) => k, language: 'en' }),
}));
jest.mock('@/config/projects', () => ({
  projects: {
    reactStream: {
      title: 'React Stream',
      implementation: {
        title: { language: 'Implementation' },
        points: { en: ['Point1'], zh: ['點1'] },
      },
      highlights: {
        title: { language: 'Highlights' },
        points: { en: ['Point2'], zh: ['點2'] },
      },
      breakthroughs: {
        title: { language: 'Breakthroughs' },
        points: { en: ['Point3'], zh: ['點3'] },
      },
    },
  },
}));

describe('ProjectSection', () => {
  it('renders project details', () => {
    const ProjectSection = require('./ProjectSection').default;
    render(<ProjectSection />);
    expect(screen.getByText('nav.projects')).toBeInTheDocument();
    expect(screen.getByText('React Stream')).toBeInTheDocument();
    expect(screen.getByText('Implementation')).toBeInTheDocument();
    expect(screen.getByText('Highlights')).toBeInTheDocument();
    expect(screen.getByText('Breakthroughs')).toBeInTheDocument();
    expect(screen.getByText('Point1')).toBeInTheDocument();
    expect(screen.getByText('Point2')).toBeInTheDocument();
    expect(screen.getByText('Point3')).toBeInTheDocument();
  });
});
