'use client';

import { useI18n } from '@/i18n';
import { skills } from '@/config/skills';

export default function SkillsSection() {
  const { t, language } = useI18n();

  return (
    <section id="skills" className="relative min-h-screen flex items-center px-6 py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('nav.skills')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category]) => (
            <div 
              key={key} 
              className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title[language]}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
