
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { PROJECTS } from '../constants';
import Card from '../components/Card';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  const renderMarkdown = (content: string) => {
    return { __html: marked(content || '') };
  };

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">项目未找到</h2>
        <Link to="/projects" className="text-sky-600 hover:underline">返回所有项目</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-sky-600 mb-8 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        返回项目列表
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{project.title}</h1>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-sky-50 text-sky-600 text-sm font-semibold rounded-full">
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
              <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mr-3 text-sm">S</span>
              Situation
            </h2>
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-4 prose-headings:mt-8
                prose-h3:text-xl prose-h3:mt-6 prose-h3:border-b prose-h3:border-slate-200 prose-h3:pb-2
                prose-h4:text-lg prose-h4:mt-4 prose-h4:text-slate-800
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-sky-700
                prose-strong:text-slate-900 prose-strong:font-semibold prose-strong:bg-slate-50 prose-strong:px-1 prose-strong:rounded
                prose-ul:my-4 prose-ul:space-y-2 prose-li:text-slate-600 prose-li:marker:text-sky-500
                prose-ol:my-4 prose-ol:space-y-2 prose-ol:marker:text-sky-600 prose-ol:marker:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-sky-50 prose-blockquote:to-transparent prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:text-slate-700 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:shadow-sm
                prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-slate-700
                prose-hr:border-slate-200 prose-hr:my-8"
              dangerouslySetInnerHTML={renderMarkdown(project.situation || "Background of the project and why it was started.")}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mr-3 text-sm">T</span>
              Task
            </h2>
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-4 prose-headings:mt-8
                prose-h3:text-xl prose-h3:mt-6 prose-h3:border-b prose-h3:border-slate-200 prose-h3:pb-2
                prose-h4:text-lg prose-h4:mt-4 prose-h4:text-slate-800
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-sky-700
                prose-strong:text-slate-900 prose-strong:font-semibold prose-strong:bg-slate-50 prose-strong:px-1 prose-strong:rounded
                prose-ul:my-4 prose-ul:space-y-2 prose-li:text-slate-600 prose-li:marker:text-sky-500
                prose-ol:my-4 prose-ol:space-y-2 prose-ol:marker:text-sky-600 prose-ol:marker:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-sky-50 prose-blockquote:to-transparent prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:text-slate-700 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:shadow-sm
                prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-slate-700
                prose-hr:border-slate-200 prose-hr:my-8"
              dangerouslySetInnerHTML={renderMarkdown(project.task || "The specific goals and challenges faced during development.")}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">A</span>
              Action
            </h2>
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-4 prose-headings:mt-8
                prose-h3:text-xl prose-h3:mt-6 prose-h3:border-b prose-h3:border-slate-200 prose-h3:pb-2
                prose-h4:text-lg prose-h4:mt-4 prose-h4:text-slate-800
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-sky-700
                prose-strong:text-slate-900 prose-strong:font-semibold prose-strong:bg-slate-50 prose-strong:px-1 prose-strong:rounded
                prose-ul:my-4 prose-ul:space-y-2 prose-li:text-slate-600 prose-li:marker:text-sky-500
                prose-ol:my-4 prose-ol:space-y-2 prose-ol:marker:text-sky-600 prose-ol:marker:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-sky-50 prose-blockquote:to-transparent prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:text-slate-700 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:shadow-sm
                prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-slate-700
                prose-table:border-collapse prose-table:w-full prose-table:my-6 prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden
                prose-th:border prose-th:border-slate-300 prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-800
                prose-td:border prose-td:border-slate-200 prose-td:p-3 prose-td:text-slate-600
                prose-hr:border-slate-200 prose-hr:my-8"
              dangerouslySetInnerHTML={renderMarkdown(project.action || "Detailed steps taken, technologies used, and architectural decisions.")}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">R</span>
              Result
            </h2>
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-4 prose-headings:mt-8
                prose-h3:text-xl prose-h3:mt-6 prose-h3:border-b prose-h3:border-slate-200 prose-h3:pb-2
                prose-h4:text-lg prose-h4:mt-4 prose-h4:text-slate-800
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-sky-700
                prose-strong:text-slate-900 prose-strong:font-semibold prose-strong:bg-slate-50 prose-strong:px-1 prose-strong:rounded
                prose-ul:my-4 prose-ul:space-y-2 prose-li:text-slate-600 prose-li:marker:text-sky-500
                prose-ol:my-4 prose-ol:space-y-2 prose-ol:marker:text-sky-600 prose-ol:marker:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-sky-50 prose-blockquote:to-transparent prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:text-slate-700 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:shadow-sm
                prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-slate-700
                prose-table:border-collapse prose-table:w-full prose-table:my-6 prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden
                prose-th:border prose-th:border-slate-300 prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-800
                prose-td:border prose-td:border-slate-200 prose-td:p-3 prose-td:text-slate-600
                prose-hr:border-slate-200 prose-hr:my-8"
              dangerouslySetInnerHTML={renderMarkdown(project.result || "Outcomes, metrics, and key learnings from the project.")}
            />
          </section>
        </div>

        <div className="space-y-6">
          <Card hoverable={false} className="sticky top-28 bg-slate-50 border-none shadow-none">
            <h3 className="font-bold text-slate-800 mb-4">项目链接</h3>
            <div className="space-y-3">
              <a
                href={project.liveUrl || "#"}
                className="flex items-center justify-center w-full py-3 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-colors shadow-lg shadow-sky-100"
              >
                在线演示
              </a>
              <a
                href={project.githubUrl || "#"}
                className="flex items-center justify-center w-full py-3 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors"
              >
                查看源码
              </a>
            </div>
            
            <hr className="my-8 border-slate-200" />

            <h3 className="font-bold text-slate-800 mb-4">技术栈</h3>
            <ul className="space-y-2">
              {project.tags.map(tag => (
                <li key={tag} className="flex items-center text-slate-500 text-sm">
                  <svg className="w-4 h-4 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {tag}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
