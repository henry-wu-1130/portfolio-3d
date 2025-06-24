'use client';

import { useI18n } from '@/i18n';
import { profile } from '@/config/profile';
import ExperienceSection from '@/components/ExperienceSection';

export default function ExperiencePage() {
  const { t, language } = useI18n();

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center py-10 px-2 mt-20">
      {/* PDF Download Button */}
      <div className="w-full max-w-[800px] flex justify-end mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
          onClick={() => alert('PDF export coming soon!')}
        >
          Download PDF
        </button>
      </div>

      {/* Resume Card */}
      <section
        className="bg-white shadow-2xl rounded-2xl max-w-[800px] w-full p-10 mb-8 print:shadow-none print:rounded-none print:p-0"
        style={{ minHeight: '1123px', width: '800px' }} // A4 1:1 px
      >
        {/* Name & Title */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{profile.name}</h1>
          <h2 className="text-2xl font-semibold text-blue-700 mb-1">{profile.title[language]}</h2>
          <div className="text-lg text-gray-500 mb-2">{profile.location[language]}</div>
        </div>
        {/* About/Summary */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{t('about.title')}</h3>
          <div className="space-y-3 text-gray-700 text-base">
            {profile.about[language].map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
        {/* Experience Section */}
        <div className="mt-8">
          <ExperienceSection />
        </div>
      </section>
    </main>
  );
}

