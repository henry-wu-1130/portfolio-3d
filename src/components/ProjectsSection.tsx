'use client';

import { useI18n } from '@/i18n';
import { projects } from '@/config/projects';

export default function ProjectsSection() {
  const { t, language } = useI18n();

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('nav.projects')}</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {Object.values(projects).map((project) => (
            <div key={project.title} className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{project.title}</h3>
                  <p className="text-gray-300">{project.description[language]}</p>
                </div>
              </div>

              {/* Implementation */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-blue-400 mb-4">
                  {project.implementation.title[language]}
                </h4>
                <ul className="list-disc ml-6 space-y-2 text-gray-300">
                  {project.implementation.points[language].map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-4">
                  {project.highlights.title[language]}
                </h4>
                <ul className="list-disc ml-6 space-y-2 text-gray-300">
                  {project.highlights.points[language].map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
