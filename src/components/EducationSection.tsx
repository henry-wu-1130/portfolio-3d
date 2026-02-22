'use client';

import { useI18n } from '@/i18n';
import { education } from '@/config/education';

export default function EducationSection() {
  const { t, language } = useI18n();

  return (
    <section id="education" className="py-20 bg-black/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12">{t('nav.education')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic Background */}
          <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              {education.academic.title[language]}
            </h3>
            {education.academic.schools.map((school) => (
              <div key={school.name[language]} className="mb-4">
                <h4 className="font-bold mb-1">{school.name[language]}</h4>
                <p className="text-gray-400 mb-1">{school.major[language]}</p>
                <p className="text-gray-400">{school.period}</p>
              </div>
            ))}
          </div>

          {/* Language Skills */}
          <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              {education.languages.title[language]}
            </h3>
            <div className="space-y-4">
              {education.languages.skills.map((skill) => (
                <div key={skill.name[language]}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">{skill.name[language]}</span>
                    <span className="text-gray-400">{skill.level[language]}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: `${skill.proficiency * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
