import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, COLORS } from '../constants';
import Card from '../components/Card';

const AISkills: React.FC = () => {
  const skills = [
    {
      title: "高效编码工作流",
      icon: ICONS.Vibe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: "超越手动编码，转向智能编排。使用AI生成初始模板和复杂逻辑组件，然后优化至生产标准。我使用Cursor和Replit Agent等工具，将开发效率提升5倍。"
    },
    {
      title: "RAG知识系统",
      icon: ICONS.RAG,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      description: "将私有数据连接到大语言模型。深入理解分块策略、嵌入模型和向量数据库检索。熟练使用Pinecone和LlamaIndex构建上下文感知应用。"
    },
    {
      title: "AI智能体编排",
      icon: ICONS.Agent,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: "构建不仅能对话，更能行动的系统。设计自主循环，使用函数调用与Stripe、Slack和Google Workspace等第三方API交互。"
    },
    {
      title: "高级提示工程",
      icon: ICONS.Prompt,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      description: "设计系统化提示词。精通少样本提示、思维链和系统指令，确保关键功能中AI行为的确定性和安全性。"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">AI工程 <br/><span className="text-gradient-vibrant">技术栈</span></h1>
        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          我不仅使用AI编写代码，更构建在每一层都由AI驱动的应用程序。
        </p>
      </div>

      <div className="space-y-32">
        {skills.map((skill, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 ${skill.bgColor} ${skill.color} shadow-xl shadow-current/5`}>
                {skill.icon}
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">{skill.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {['行业标准', '生产就绪', '可扩展'].map(badge => (
                  <span key={badge} className="px-4 py-2 bg-slate-100 text-slate-500 text-[10px] font-black rounded-xl uppercase tracking-widest">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full group">
               <Card className="p-0 border-none bg-white overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] h-[400px] flex items-center justify-center group-hover:-rotate-1 transition-transform">
                  <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 ${skill.bgColor}`}></div>
                  <div className="text-center z-10">
                     <div className={`text-8xl font-black mb-2 tracking-tighter ${skill.color}`}>100%</div>
                     <div className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">效率提升</div>
                  </div>
                  <div className="absolute bottom-12 left-12 right-12 grid grid-cols-3 gap-6">
                     <div className="h-14 bg-slate-50 rounded-2xl animate-pulse"></div>
                     <div className="h-14 bg-slate-50 rounded-2xl animate-pulse delay-75"></div>
                     <div className="h-14 bg-slate-50 rounded-2xl animate-pulse delay-150"></div>
                  </div>
               </Card>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-40 p-16 md:p-24 rounded-[4rem] bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px]"></div>
        <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">准备好共创未来了吗？</h2>
        <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto leading-relaxed">我正在寻找实习或应届生岗位，期待应用我的AI专业知识。</p>
        <Link to="/about" className="inline-block px-12 py-5 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/50 uppercase tracking-widest text-sm">
          联系我
        </Link>
      </section>
    </div>
  );
};

export default AISkills;