'use client';

import { useI18n } from '@/i18n';
import { experiences } from '@/config/experience';
import dynamic from 'next/dynamic';

const LeetCodeCount = dynamic(() => import('./LeetCodeCount'), {
  ssr: false,
  loading: () => <>95+</>,
});

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="ml-6 relative before:content-[''] before:block before:w-2 before:h-2 before:bg-blue-400 before:rounded-full before:absolute before:-left-6 before:top-2">
    {children}
  </li>
);

export default function ExperienceSection() {
  const { t, language } = useI18n();

  const renderDescription = (text: string) => {
    // 使用正則表達式匹配 <LeetCodeCount /> 標籤
    return text.split(/(<LeetCodeCount\s*\/>)/).map((part, index) => {
      if (part === '<LeetCodeCount />') {
        return <LeetCodeCount key={index} />;
      }
      return part;
    });
  };

  const renderProject = (project: typeof experiences[0]['projects'][0]) => (
    <ListItem key={project.key}>
      <h4 className="font-bold mb-2">{project.title[language]}</h4>
      {project.description ? (
        <p>{renderDescription(project.description[language])}</p>
      ) : project.achievements ? (
        <ul className="list-disc ml-4 space-y-2">
          {project.achievements[language].map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      ) : null}
    </ListItem>
  );

  const renderAchievement = (achievement: typeof experiences[1]['achievements'][0]) => (
    <ListItem key={achievement.key}>
      <h4 className="font-bold mb-2">{achievement.title[language]}</h4>
      <p>{renderDescription(achievement.description[language])}</p>
    </ListItem>
  );

  return (
    <section id="experience" className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('nav.experience')}</h2>
        
        {experiences.map((experience, index) => (
          <div key={experience.key} className={index < experiences.length - 1 ? 'mb-16' : ''}>
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-2 mb-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-2xl font-bold text-blue-400">
                  {experience.position[language]}
                </h3>
                <span className="text-2xl font-bold text-blue-400">•</span>
                <h3 className="text-2xl font-bold text-blue-400">
                  {experience.company[language]}
                </h3>
              </div>
              <p className="text-gray-400 whitespace-nowrap">{experience.period} | {experience.location}</p>
            </div>
            
            <ul className="space-y-4 text-gray-300">
              {experience.projects ? (
                experience.projects.map(project => renderProject(project))
              ) : experience.achievements ? (
                experience.achievements.map(achievement => renderAchievement(achievement))
              ) : null}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
