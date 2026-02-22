'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/i18n';
import { navigationItems } from '@/config/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const renderNavItems = (isMobile = false) =>
    navigationItems.map(({ key, href, translationKey }) => (
      <Link
        key={key}
        href={href}
        className="hover:text-blue-400 transition-colors"
        onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
      >
        {t(translationKey)}
      </Link>
    ));

  const renderLanguageToggle = (isMobile = false) => (
    <button
      onClick={toggleLanguage}
      className={`px-3 py-1 rounded border border-white/20 hover:bg-white/10 transition-colors ${
        isMobile ? 'w-fit' : ''
      }`}
    >
      {t(`language.${language === 'en' ? 'zh' : 'en'}`)}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60 border-b border-gray-200/30 dark:border-gray-700/30">
      <nav className="flex flex-col justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm"
          >
            Logo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map(({ key, href, translationKey }) => (
              <Link
                key={key}
                href={href}
                className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-2 py-1 rounded transition-colors"
              >
                {t(translationKey)}
              </Link>
            ))}
            {renderLanguageToggle()}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {renderNavItems(true)}
              {renderLanguageToggle(true)}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
