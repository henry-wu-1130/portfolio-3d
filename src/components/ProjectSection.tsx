'use client';

import { useI18n } from '@/i18n';
import { projects } from '@/config/projects';

export default function ProjectSection() {
  const { t, language } = useI18n();

  return (
    <section id="projects" className="relative min-h-screen flex items-center px-6 py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('nav.projects')}</h2>
        
        {/* react-stream */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">{projects.reactStream.title}</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">{projects.reactStream.implementation.title[language]}</h4>
              <ul className="space-y-2 text-gray-300 list-disc ml-4">
                {projects.reactStream.implementation.points[language].map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{projects.reactStream.highlights.title[language]}</h4>
              <ul className="space-y-2 text-gray-300 list-disc ml-4">
                {projects.reactStream.highlights.points[language].map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{projects.reactStream.breakthroughs.title[language]}</h4>
            <ul className="space-y-2 text-gray-300 list-disc ml-4">
              {projects.reactStream.breakthroughs.points[language].map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Personal Learning */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-6">{projects.personalLearning.title[language]}</h3>
          <ul className="space-y-2 text-gray-300 list-disc ml-4">
            {projects.personalLearning.points[language].map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
