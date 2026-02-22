import { render } from '@testing-library/react';
import React from 'react';

let setLanguage: jest.Mock;
let getItem: jest.Mock;
const mockNavigator = { languages: ['zh-TW'], language: 'zh-TW' };

describe('LanguageDetector', () => {
  beforeEach(() => {
    setLanguage = jest.fn();
    getItem = jest.fn();
    jest.resetModules();
    jest.doMock('@/i18n', () => ({
      useI18n: () => ({ language: 'en', setLanguage }),
    }));
    (global as any).window = Object.create(window);
    Object.defineProperty(window, 'localStorage', {
      value: { getItem }, configurable: true });
    Object.defineProperty(window, 'navigator', { value: mockNavigator, configurable: true });
    getItem.mockReturnValueOnce(null);
    setLanguage.mockClear();
  });
  beforeEach(() => {
    setLanguage = jest.fn();
    getItem = jest.fn();
    (global as any).window = Object.create(window);
    Object.defineProperty(window, 'localStorage', {
      value: { getItem }, configurable: true });
    Object.defineProperty(window, 'navigator', { value: mockNavigator, configurable: true });
    getItem.mockReturnValueOnce(null);
    setLanguage.mockClear();
  });
  it('detects and sets browser language if not already set', () => {
    const LanguageDetector = require('./LanguageDetector').default;
    render(<LanguageDetector />);
    expect(setLanguage).toHaveBeenCalledWith('zh');
  });
  it('does not overwrite if already set', () => {
    getItem.mockReturnValueOnce('en');
    const LanguageDetector = require('./LanguageDetector').default;
    render(<LanguageDetector />);
    expect(setLanguage).not.toHaveBeenCalled();
  });
});
