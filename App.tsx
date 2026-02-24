import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import AISkills from './pages/AISkills';
import About from './pages/About';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: '首页', isExternal: false },
    { path: '/projects', label: '项目', isExternal: false },
    { path: 'https://klaypeter.github.io/', label: '博客', isExternal: true },
    { path: 'https://klaypeter.github.io/learning-share/', label: '笔记', isExternal: true },
    { path: '/ai', label: 'AI技能', isExternal: false },
  ];

  return (
    <nav
      className={`fixed top-6 left-0 right-0 z-50 px-6 transition-all duration-500`}
    >
      <div
        className={`max-w-5xl mx-auto rounded-full glass transition-all duration-500 ${scrolled ? 'py-2 px-6 scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white/70' : 'py-3 px-8 bg-white/40'}`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black group-hover:bg-blue-600 transition-all duration-500 transform group-hover:rotate-12">
              V
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 hidden sm:block">
              MMX<span className="text-blue-600">.dev</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center bg-slate-200/30 p-1 rounded-full border border-white/50 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                !link.isExternal && location.pathname === link.path
              const LinkComponent = link.isExternal ? 'a' : Link
              const linkProps = link.isExternal
                ? {
                    href: link.path,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : { to: link.path }

              return (
                <LinkComponent
                  key={link.path}
                  {...linkProps}
                  className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-slate-900 rounded-full z-0 shadow-lg"></div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </LinkComponent>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="glow-button px-6 py-2.5 bg-blue-600 text-white text-xs font-black rounded-full shadow-lg shadow-blue-200"
            >
              联系我
            </Link>
            <button className="md:hidden p-2 text-slate-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
};

const Footer: React.FC = () => (
  <footer className="relative mt-40 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-[4rem] bg-slate-900 border border-slate-800 p-12 md:p-24 shadow-2xl relative overflow-hidden group">
        {/* 背景光晕装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full group-hover:opacity-100 transition-opacity"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
          <div className="lg:col-span-6">
            <h3 className="text-6xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
              用代码 <br />
              <span className="text-gradient-vibrant">创造价值</span>
            </h3>
            <div className="flex flex-wrap gap-4 mb-12">
              {['GitHub', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-12 border-l border-white/5 pl-0 lg:pl-12">
            <div>
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-10">
                网站地图
              </h4>
              <ul className="space-y-5">
                {['首页', '项目', '博客', '笔记', 'AI技能'].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-slate-400 font-bold hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-10">
                状态
              </h4>
              <div className="space-y-8">
                <div>
                  <p className="text-white font-black text-xl tracking-tighter">
                    kt_mmxyy2377@qq.com
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    2026应届生 · 求职中
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  可随时到岗
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
        <p className="text-[10px] font-black tracking-[0.2em] uppercase">
          © 2025 MMX.dev. mmx个人网站
        </p>
        <div className="flex items-center gap-12 text-[10px] font-black tracking-[0.2em]">
          <a href="#" className="hover:text-slate-900 transition-colors">
            隐私政策
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            使用条款
          </a>
        </div>
      </div>
    </div>
  </footer>
)

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col pt-24 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow page-enter" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/ai" element={<AISkills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;