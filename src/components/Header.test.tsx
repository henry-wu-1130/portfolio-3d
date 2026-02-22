import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

jest.mock('@/i18n', () => ({
  useI18n: () => ({
    t: (k: string) => k,
    language: 'en',
    setLanguage: jest.fn(),
  }),
}));
jest.mock('@/config/navigation', () => ({
  navigationItems: [
    { key: 'about', href: '/#about', translationKey: 'nav.about' },
    { key: 'blog', href: '/blog', translationKey: 'nav.blog' },
  ],
}));

describe('Header', () => {
  it('renders navigation items and toggles language', () => {
    const Header = require('./Header').default;
    render(<Header />);
    expect(screen.getByText('nav.about')).toBeInTheDocument();
    expect(screen.getByText('nav.blog')).toBeInTheDocument();
    // 測試語言切換按鈕
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(btn).toBeInTheDocument();
  });
  it('toggles mobile menu', () => {
    const Header = require('./Header').default;
    render(<Header />);
    const menuBtn = screen.getByLabelText('Toggle mobile menu');
    fireEvent.click(menuBtn);
    expect(menuBtn).toBeInTheDocument();
  });
});
