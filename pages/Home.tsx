import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, BLOGS, NOTES, ICONS } from '../constants';
import Card from '../components/Card';

const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["前端工程师", "AI应用开发", "全栈开发", "应届毕业生"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const techTags = ['React', 'Vue', 'Tailwind', 'web', 'LangChain', 'RAG', 'vibe coding'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 mb-40 relative">
        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 animate-pulse"></span>
            2026应届毕业生 · 求职中
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
            你好，我是 <span className="text-blue-600">MMX</span> <br />
            <span className="text-gradient-vibrant">{roles[roleIndex]}</span>
          </h1>

          <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            应届毕业生，专注前端开发与AI应用，擅长React、Vue框架的前端开发和AI集成，正在寻找前端/全栈工程师岗位。
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-white/50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="glow-button px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-xl transition-all text-sm"
            >
              查看项目
            </Link>
            <Link
              to="/about"
              className="px-10 py-5 bg-white/50 text-slate-900 font-black rounded-2xl border border-slate-200 backdrop-blur-md hover:bg-white transition-all text-sm"
            >
              关于我
            </Link>
          </div>
        </div>

        <div className="relative w-64 h-64 lg:w-96 lg:h-96">
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-rose-400/20 blur-[80px] opacity-70"></div>
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white rotate-3">
            <img
              src="https://picsum.photos/seed/vibecoder/600/600"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. AI Skills Summary */}
      <section className="mb-40">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
            技术栈
          </h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">
            核心技能
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '前端开发',
              desc: '熟练使用React、Vue、TypeScript、Tailwind CSS构建现代化Web应用。',
              icon: ICONS.Vibe,
              color: 'text-blue-600',
              bg: 'bg-blue-50',
            },
            {
              title: 'AI应用集成',
              desc: '将LLM、RAG等AI能力集成到前端应用中，提升用户体验。',
              icon: ICONS.RAG,
              color: 'text-emerald-600',
              bg: 'bg-emerald-50',
            },
            {
              title: '全栈能力和vibe coding',
              desc: '掌握Node.js后端开发,熟悉vibe coding开发流程，能够独立完成全栈项目。',
              icon: ICONS.Prompt,
              color: 'text-rose-600',
              bg: 'bg-rose-50',
            },
          ].map((skill) => (
            <Card
              key={skill.title}
              className="p-10 flex flex-col items-start hover:bg-white/80 transition-all"
            >
              <div
                className={`w-14 h-14 ${skill.bg} ${skill.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}
              >
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {skill.title}
              </h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                {skill.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Featured Projects (3 Cards) */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-xs font-black text-purple-600 uppercase tracking-[0.4em] mb-4">
              作品集
            </h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">
              精选项目
            </h3>
          </div>
          <Link
            to="/projects"
            className="text-blue-600 font-bold text-sm hover:underline tracking-tight"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 3).map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <Card className="p-0 overflow-hidden group h-full">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.coverImage}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-500 text-[9px] font-black rounded-md uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Blogs & Notes (Side by Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
        {/* Featured Blogs */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              博客文章
            </h3>
            <a
              href="https://klaypeter.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-bold text-xs tracking-widest hover:text-blue-600 transition-colors"
            >
              查看更多
            </a>
          </div>
          <div className="space-y-6">
            {BLOGS.slice(0, 3).map((blog) => (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:bg-white/80 transition-all cursor-pointer">
                  <div className="flex gap-6 items-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                      <img
                        src={blog.coverImage}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h4>
                      <p className="text-slate-500 text-xs font-medium">
                        {blog.date} • {blog.tags[0]}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Notes */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              学习笔记
            </h3>
            <a
              href="https://klaypeter.github.io/learning-share/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-bold text-xs tracking-widest hover:text-blue-600 transition-colors"
            >
              查看全部
            </a>
          </div>
          <div className="space-y-6">
            {NOTES.slice(0, 3).map((note) => (
              <a
                key={note.id}
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-8 border-none bg-slate-100/50 hover:bg-white transition-all shadow-none">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2 py-0.5 bg-white text-blue-600 text-[8px] font-black rounded-md uppercase tracking-[0.2em] shadow-sm">
                      {note.category}
                    </span>
                    <span className="text-slate-400 text-[10px] font-bold">
                      {note.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {note.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium line-clamp-2">
                    {note.summary}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-slate-900 rounded-[4rem] p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px]"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            正在寻找工作机会
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto font-medium">
            2025应届毕业生，期望前端工程师/AI应用开发/全栈工程师岗位，可随时到岗。
          </p>
          <Link
            to="/about"
            className="inline-block px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/50 text-sm"
          >
            了解更多
          </Link>
        </div>
      </section>
    </div>
  )
};

export default Home;