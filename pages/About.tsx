
import React from 'react';
import Card from '../components/Card';

const contactItems = [
  {
    label: 'GitHub',
    value: 'KlayPeter',
    href: 'https://github.com/KlayPeter',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path d="M8 7v2a4 4 0 004 4h2" />
        <path d="M8 17v-2.5" />
        <path d="M14 12h4" />
      </svg>
    ),
  },
  {
    label: '电话',
    value: '13025593963',
    href: 'tel:13025593963',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.6 3.5 9 3a1 1 0 011 .7l.6 3a1 1 0 01-.3.9l-1.5 1.5a10.5 10.5 0 005.8 5.8l1.5-1.5a1 1 0 01.9-.3l3 .6a1 1 0 01.7 1l-.5 2.5a1 1 0 01-1 .8A16.5 16.5 0 013.3 5a1 1 0 01.8-1Z" />
      </svg>
    ),
  },
  {
    label: '邮箱',
    value: 'kt_mmxyy2377@qq.com',
    href: 'mailto:kt_mmxyy2377@qq.com',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: '博客',
    value: 'klaypeter.github.io',
    href: 'https://klaypeter.github.io/',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M12 3c2.5 3.5 2.5 14.5 0 18" />
        <path d="M12 3c-2.5 3.5-2.5 14.5 0 18" />
      </svg>
    ),
  },
  {
    label: '笔记',
    value: 'learning-share',
    href: 'https://klaypeter.github.io/learning-share/',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 5h10a2 2 0 012 2v11a1 1 0 01-1 1H8.5A2.5 2.5 0 016 16.5V7.5A2.5 2.5 0 018.5 5H9" />
        <path d="M9 9h8" />
        <path d="M9 13h6" />
        <path d="M7 5v13" />
      </svg>
    ),
  },
];

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="w-full md:w-1/3">
          <img
            src="https://picsum.photos/seed/alex-profile/500/600"
            alt="Alex Chen"
            className="w-full h-auto rounded-[2rem] soft-shadow"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">麦旻轩</h1>
          <h2 className="text-xl font-semibold text-sky-600 mb-6">
            2026应届毕业生 · 前端/全栈工程师
          </h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-4">
            <p>
              我是一名软件工程专业的应届毕业生，专注于前端开发与AI应用集成，对生成式AI时代的人机交互充满热情。
            </p>
            <p>
              我的开发理念是<strong>"高效编码"</strong>
              ——利用现代框架和AI辅助工具处理繁琐的开发细节，让我能够专注于创造独特、有影响力的用户体验。
            </p>
            <p>
              我相信下一代Web应用不仅仅是静态工具，而是能够通过LLM和多模态输入理解用户意图的协作伙伴。
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            <a
              href="https://asset-mai.oss-cn-beijing.aliyuncs.com/user-resumes/%E9%BA%A6%E6%97%BB%E8%BD%A9%E7%9A%84%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86-v7.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
            >
              下载简历
            </a>
            <a
              href="mailto:kt_mmxyy2377@qq.com"
              className="px-6 py-3 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors"
            >
              联系我
            </a>
          </div>
        </div>
      </div>

      <section className="mb-20">
        <Card hoverable={false} className="bg-white/80 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-500 mb-2">Contact</p>
              <h3 className="text-2xl font-bold text-slate-900">与我取得联系</h3>
              <p className="text-slate-500 text-sm mt-2">同一视觉语言的联系入口，支持电话、邮箱、社交与博客。</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              随时欢迎交流
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white/70 px-4 py-3 hover:border-sky-200 hover:bg-sky-50/80 hover:shadow-[0_12px_30px_-12px_rgba(8,47,73,0.25)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-inner">
                    {item.icon}
                  </span>
                  <div className="leading-tight">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
                    <div className="text-slate-800 font-semibold">{item.value}</div>
                  </div>
                </div>
                <span className="text-sky-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">前往 →</span>
              </a>
            ))}
          </div>
        </Card>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Card hoverable={false} className="bg-sky-50 border-none shadow-none">
          <h3 className="text-xl font-bold text-sky-900 mb-4">教育背景</h3>
          <div className="space-y-4">
            <div>
              <div className="font-bold text-sky-800">软件工程 本科</div>
              <div className="text-sky-600 text-sm">惠州学院 • 2022 — 2026</div>
            </div>
            <div className="text-sky-700 text-sm italic">
              专注于AI应用、Web开发和用户体验设计。
            </div>
          </div>
        </Card>
        <Card hoverable={false} className="bg-teal-50 border-none shadow-none">
          <h3 className="text-xl font-bold text-teal-900 mb-4">兴趣爱好</h3>
          <ul className="space-y-2 text-teal-800 text-sm">
            <li className="flex items-center">
              <span className="mr-2">🚀</span> vibe coding
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span> 简约UI/UX设计
            </li>
            <li className="flex items-center">
              <span className="mr-2">☕</span> 咖啡与编程
            </li>
            <li className="flex items-center">
              <span className="mr-2">🕹️</span> 健身&运动
            </li>
          </ul>
        </Card>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          技术栈
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'React', level: '熟练' },
            { name: 'TypeScript', level: '熟练' },
            { name: 'Node.js', level: '熟练' },
            { name: 'Next.js', level: '熟练' },
            { name: 'Tailwind CSS', level: '熟练' },
            { name: 'Vue', level: '熟练' },
          ].map((skill) => (
            <div
              key={skill.name}
              className="text-center px-6 py-4 rounded-2xl bg-white border border-slate-100 soft-shadow min-w-[140px]"
            >
              <div className="font-bold text-slate-800">{skill.name}</div>
              <div className="text-sky-500 text-xs font-semibold uppercase tracking-widest mt-1">
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};

export default About;
