import { render, screen } from '@testing-library/react';
import React from 'react';
import StatsSection from './StatsSection';

jest.mock('@/i18n', () => ({ useI18n: () => ({ t: (k: string) => k }) }));

describe('StatsSection', () => {
  it('renders stats section and iframes', () => {
    render(<StatsSection />);
    expect(screen.getByText('nav.stats')).toBeTruthy();
    expect(screen.getAllByTitle(/iframe/i).length >= 0).toBeTruthy();
  });
});
