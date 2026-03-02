import React from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from '../constants'
import Card from '../components/Card'
import { AI_SKILLS } from '../data/aiSkills'

const AISkills: React.FC = () => {
  const iconMap = {
    Vibe: ICONS.Vibe,
    LLM: ICONS.LLM,
    Agent: ICONS.Agent,
    Prompt: ICONS.Prompt,
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
          AI 技能
          <br />
          <span className="text-gradient-vibrant">经验分享</span>
        </h1>
        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          真实使用 AI 工具的经验与认知，不是教程，是踩坑之后的总结。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {AI_SKILLS.map((skill) => (
          <Link key={skill.id} to={`/ai-detail/${skill.id}`} className="group block">
            <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${skill.bgColor} ${skill.color}`}
              >
                {iconMap[skill.iconKey]}
              </div>

              <h2 className="text-xl font-black text-slate-900 mb-3 leading-tight">
                {skill.title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {skill.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {skill.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`px-3 py-1 text-[10px] font-black rounded-lg uppercase tracking-widest ${skill.bgColor} ${skill.color}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div
                className={`flex items-center text-sm font-bold ${skill.color} group-hover:gap-2 transition-all`}
              >
                查看详情
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-32 p-16 md:p-24 rounded-[4rem] bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px]"></div>
        <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">
          准备好共创未来了吗？
        </h2>
        <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          我正在寻找实习或应届生岗位，期待应用我的 AI 专业知识。
        </p>
        <Link
          to="/about"
          className="inline-block px-12 py-5 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/50 uppercase tracking-widest text-sm"
        >
          联系我
        </Link>
      </section>
    </div>
  )
}

export default AISkills
