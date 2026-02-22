'use client';

import { useI18n } from '@/i18n';

export default function StatsSection() {
  const { t } = useI18n();

  const stats = [
    {
      key: 'languages',
      title: t('stats.languages'),
      content: (
        <div className="relative w-full h-[250px] md:h-[200px]">
          <iframe
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=henry-wu-1130&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=60A5FA&text_color=FFFFFF&card_width=450`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
          />
        </div>
      ),
    },
    {
      key: 'leetcode',
      title: t('stats.leetcode'),
      content: (
        <div className="relative w-full h-[300px] md:h-[200px]">
          <iframe
            src={`https://leetcard.jacoblin.cool/henry-wu-1130?theme=dark&font=rubik&ext=heatmap&border=0`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
          />
        </div>
      ),
    },
  ];

  return (
    <section id="stats" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('nav.stats')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {stats.map(({ key, title, content }) => (
            <div key={key} className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {title}
              </h3>
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
