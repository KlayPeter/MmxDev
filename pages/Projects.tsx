
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Card from '../components/Card';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'全部' | 'AI' | 'Web' | 'Mobile'>('全部');

  const filteredProjects = filter === '全部'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">项目作品集</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          专注于 AI 与直观前端设计结合的实验性项目和精品应用合集。
        </p>
      </div>

      <div className="flex justify-center space-x-2 mb-12">
        {['全部', 'AI', 'Web', 'Mobile'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-200'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <Card className="overflow-hidden p-0 group h-full flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sky-600 text-xs font-bold rounded-lg uppercase tracking-tight">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
