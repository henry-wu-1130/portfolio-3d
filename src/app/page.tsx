'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { useI18n } from '@/i18n';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { profile } from '@/config/profile';
import FeaturedPosts from '@/components/FeaturedPosts';

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 transform-gpu transition-transform duration-500 hover:scale-105">
        <div className="container mx-auto max-w-5xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {profile.greeting[language]}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            {profile.description[language]}
          </p>
          <div className="max-w-2xl mx-auto mb-8 space-y-4 text-gray-400 text-lg leading-relaxed">
            {profile.about[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-4 text-lg text-gray-400">
            <div className="flex gap-6">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${profile.socialLinks.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <MdEmail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Posts */}
      {/* <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('featured.title') || '精選文章 / Featured Posts'}
          </h2>
          <FeaturedPosts />
        </div>
      </section> */}
    </main>
  );
}
