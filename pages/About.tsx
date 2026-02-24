
import React from 'react';
import Card from '../components/Card';

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
