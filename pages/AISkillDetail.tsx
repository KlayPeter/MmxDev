import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { ICONS } from '../constants'
import { AI_SKILLS } from '../data/aiSkills'

const AISkillDetail: React.FC = () => {
  const { id } = useParams()
  const skill = AI_SKILLS.find((s) => s.id === id)

  const iconMap = {
    Vibe: ICONS.Vibe,
    LLM: ICONS.LLM,
    Agent: ICONS.Agent,
    Prompt: ICONS.Prompt,
  }

  const renderMarkdown = (content: string) => {
    return { __html: marked(content || '') }
  }

  if (!skill) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">内容未找到</h2>
        <Link to="/ai" className="text-sky-600 hover:underline">
          返回 AI 技能
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/ai"
        className="inline-flex items-center text-slate-500 hover:text-sky-600 mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        返回 AI 技能
      </Link>

      <div className="mb-12">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${skill.bgColor} ${skill.color}`}
        >
          {iconMap[skill.iconKey]}
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          {skill.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {skill.badges.map((badge) => (
            <span
              key={badge}
              className={`px-4 py-1.5 text-xs font-bold rounded-full ${skill.bgColor} ${skill.color}`}
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-slate-200 pl-5">
          {skill.summary}
        </p>
      </div>

      <div
        className="md-content"
        dangerouslySetInnerHTML={renderMarkdown(skill.content)}
      />
    </div>
  )
}

export default AISkillDetail
