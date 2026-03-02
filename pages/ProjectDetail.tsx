import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { PROJECTS } from '../constants'
import Card from '../components/Card'

const ProjectDetail: React.FC = () => {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.id === id)

  const renderMarkdown = (content: string) => {
    return { __html: marked(content || '') }
  }

  const isGithubServerUrl = !!project?.githubUrlServer // 检查是否有githubUrlServer

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">项目未找到</h2>
        <Link to="/projects" className="text-sky-600 hover:underline">
          返回所有项目
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/projects"
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
        返回项目列表
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-sky-50 text-sky-600 text-sm font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-96 object-cover rounded-[2rem] soft-shadow mb-12"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mr-3 text-sm">
                S
              </span>
              Situation
            </h2>
            <div
              className="md-content"
              dangerouslySetInnerHTML={renderMarkdown(
                project.situation ||
                  'Background of the project and why it was started.',
              )}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mr-3 text-sm">
                T
              </span>
              Task
            </h2>
            <div
              className="md-content"
              dangerouslySetInnerHTML={renderMarkdown(
                project.task ||
                  'The specific goals and challenges faced during development.',
              )}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">
                A
              </span>
              Action
            </h2>
            <div
              className="md-content"
              dangerouslySetInnerHTML={renderMarkdown(
                project.action ||
                  'Detailed steps taken, technologies used, and architectural decisions.',
              )}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">
                R
              </span>
              Result
            </h2>
            <div
              className="md-content"
              dangerouslySetInnerHTML={renderMarkdown(
                project.result ||
                  'Outcomes, metrics, and key learnings from the project.',
              )}
            />
          </section>
        </div>

        <div className="space-y-6">
          <Card
            hoverable={false}
            className="sticky top-28 bg-slate-50 border-none shadow-none"
          >
            {(project.liveUrl || project.githubUrl) && (
              <>
                <h3 className="font-bold text-slate-800 mb-4">项目链接</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center w-full py-3 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-colors shadow-lg shadow-sky-100"
                    >
                      在线演示
                    </a>
                  )}
                  {project.githubUrl && (
                    <div>
                      {isGithubServerUrl ? (
                        <>
                          <a
                            href={project.githubUrl}
                            className="flex items-center justify-center w-full py-3 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors mb-2"
                          >
                            查看前端源码
                          </a>

                          <a
                            href={project.githubUrlServer || '#'}
                            className="flex items-center justify-center w-full py-3 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            查看后端源码
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.githubUrl}
                          className="flex items-center justify-center w-full py-3 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          查看源码
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

            {(project.liveUrl || project.githubUrl) && (
              <hr className="my-8 border-slate-200" />
            )}

            <h3 className="font-bold text-slate-800 mb-4">技术栈</h3>
            <ul className="space-y-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="flex items-center text-slate-500 text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tag}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
