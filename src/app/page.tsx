'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { useI18n } from '@/i18n';
import { profile } from '@/config/profile';
import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import StatsSection from '@/components/StatsSection';

const SceneManager = dynamic(() => import('@/components/canvas/SceneManager'), {
  ssr: false,
});

export default function Home() {
  const { t, language } = useI18n();

  return (
    <main className="relative w-full min-h-screen bg-black text-white">
      {/* 3D Scene */}
      <div className="fixed inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <SceneManager />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 transform-gpu transition-transform duration-500 hover:scale-105">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{profile.name}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            {profile.title[language]}
          </p>
          <div className="space-y-4 text-lg text-gray-400">
            <p>{profile.subtitle[language]}</p>
            <p>{profile.location[language]}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 py-32 transform-gpu transition-transform duration-500 hover:scale-105">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('nav.about')}</h2>
          <div className="space-y-6 text-gray-300">
            {profile.about[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      
      <ExperienceSection />

      <ProjectsSection />

      <StatsSection />
      
      <EducationSection />

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center px-6 py-32 transform-gpu transition-transform duration-500 hover:scale-105">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('nav.contact')}</h2>
          <div className="space-y-4">
            <p className="text-xl">
              {t('contact.phone')}: {profile.contact.phone}
            </p>
            <p className="text-xl">
              {t('contact.email')}: {profile.contact.email}
            </p>
            <a 
              href={profile.contact.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xl text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
