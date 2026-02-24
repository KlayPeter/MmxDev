# DevOrbit - 个人作品集网站

<div align="center">

一个现代化的个人作品集网站，展示前端开发与 AI 工程技能。

[在线演示](#) | [查看项目](#) | [联系我](mailto:kt_mmxyy2377@qq.com)

</div>

---

## 📖 项目简介

DevOrbit 是一个专为 2026 应届毕业生打造的个人作品集网站，专注于展示前端开发、全栈工程和 AI 应用集成能力。网站采用现代化设计风格，提供流畅的用户体验和响应式布局。

### ✨ 核心特性

- 🎨 **现代化设计** - 采用简约风格，注重视觉层次和用户体验
- 📱 **完全响应式** - 适配各种设备尺寸，从手机到桌面端
- ⚡ **高性能** - 使用 Vite 构建，快速加载和热更新
- 🎯 **项目展示** - STAR 方法展示项目详情（Situation, Task, Action, Result）
- 🤖 **AI 技能展示** - 突出 AI 工程和大语言模型应用能力
- 🔍 **项目分类** - 支持按类别筛选项目（AI、Web、Mobile）
- 🌐 **多页面路由** - 使用 React Router 实现流畅的页面切换

---

## 🛠️ 技术栈

### 前端框架
- **React 18** - 用户界面构建
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 下一代前端构建工具

### 样式与设计
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide React** - 现代化图标库
- **自定义动画** - 流畅的过渡效果和交互

### 路由与导航
- **React Router DOM** - 客户端路由管理

### 内容处理
- **Marked** - Markdown 解析和渲染

---

## 🚀 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd DevOrbit
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**

   打开浏览器访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录中。

### 预览生产构建

```bash
npm run preview
```

---

## 📁 项目结构

```
DevOrbit/
├── src/
│   ├── components/        # 可复用组件
│   │   └── Card.tsx      # 卡片组件
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx      # 首页
│   │   ├── Projects.tsx  # 项目列表
│   │   ├── ProjectDetail.tsx  # 项目详情
│   │   ├── AISkills.tsx  # AI 技能展示
│   │   └── About.tsx     # 关于我
│   ├── data/             # 数据文件
│   │   ├── projects.ts   # 项目数据
│   │   ├── blogs.ts      # 博客数据
│   │   └── notes.ts      # 笔记数据
│   ├── constants.tsx     # 常量和配置
│   ├── App.tsx           # 应用主组件
│   ├── main.tsx          # 应用入口
│   └── index.css         # 全局样式
├── public/               # 静态资源
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── tailwind.config.js   # Tailwind CSS 配置
```

---

## 🎯 主要功能

### 1. 首页
- 个人介绍和技能概览
- 快速导航到各个板块
- 精选项目展示

### 2. 项目展示
- 项目列表展示，支持分类筛选
- 项目详情页采用 STAR 方法展示
- 技术栈标签和项目链接

### 3. AI 技能
- 展示 AI 工程相关技能
- 包括：高效编码工作流、RAG 知识系统、AI 智能体编排、高级提示工程

### 4. 关于我
- 个人信息和教育背景
- 技术栈和熟练程度
- 兴趣爱好和联系方式

---

## 🎨 设计特点

- **玻璃态效果** - 导航栏采用毛玻璃效果
- **渐变色彩** - 精心设计的色彩渐变
- **微交互** - 悬停效果和过渡动画
- **卡片设计** - 统一的卡片组件系统
- **响应式布局** - 移动端优先的设计理念

---

## 📝 自定义内容

### 修改个人信息

编辑 `src/pages/About.tsx` 文件中的个人信息：

```typescript
<h1>你的名字</h1>
<h2>你的职位</h2>
<a href="mailto:your-email@example.com">联系我</a>
```

### 添加项目

在 `src/data/projects.ts` 中添加新项目：

```typescript
{
  id: 'project-id',
  title: '项目标题',
  description: '项目简介',
  category: 'AI' | 'Web' | 'Mobile',
  tags: ['React', 'TypeScript'],
  coverImage: '图片URL',
  situation: 'Markdown 格式的背景介绍',
  task: 'Markdown 格式的任务描述',
  action: 'Markdown 格式的行动步骤',
  result: 'Markdown 格式的结果总结',
  liveUrl: '在线演示链接',
  githubUrl: 'GitHub 仓库链接'
}
```

### 修改技能展示

编辑 `src/pages/AISkills.tsx` 中的技能列表。

---

## 🔧 开发说明

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 React Hooks 最佳实践
- 组件采用函数式编程风格
- 使用 Tailwind CSS 实用类进行样式编写

### 性能优化

- 图片懒加载
- 路由代码分割
- CSS 按需加载
- 生产构建优化

---

## 📄 许可证

本项目仅用于个人作品集展示。

---

## 👤 作者

**麦旻轩**

- 职位：2026应届毕业生 · 前端/全栈工程师
- 邮箱：kt_mmxyy2377@qq.com
- 专注：前端开发、AI 应用集成、用户体验设计

---

## 🙏 致谢

感谢所有开源项目和工具的贡献者，让这个作品集网站得以实现。

---

<div align="center">

**用代码创造价值** ✨

Made with ❤️ by MMX.dev

</div>
