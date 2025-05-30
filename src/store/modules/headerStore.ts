// 导入创建 store 的方法
import { createSlice } from "@reduxjs/toolkit";
import { type IconType } from "@/components";

interface IHeaderMenu {
  label: string;
  key: string;
  icon: IconType;
  children?: (IHeaderMenu & { description: string })[];
}

const items: IHeaderMenu[] = [
  {
    label: "Home",
    icon: "HomeIcon",
    key: "home",
  },
  {
    label: "HTML / CSS",
    icon: "HtmlIcon",
    key: "HTML-CSS",
    children: [
      {
        label: "HTML",
        icon: "HtmlIcon",
        key: "html",
        description: "HTML 超文本标记语言（Hyper Text Markup Language）",
      },
      {
        label: "CSS",
        icon: "CssIcon",
        key: "css",
        description: "CSS 样式表语言（Cascading Style Sheets）",
      },
      {
        label: "Tailwind CSS",
        icon: "TailwindCssIcon",
        key: "tailwindcss",
        description: "Tailwind CSS 是一个基于 CSS 的高级样式解决方案，它可以轻松地创建复杂的网站，而不需要复杂的 CSS 代码。",
      },
    ],
  },
  {
    label: "JavaScript",
    icon: "JsIcon",
    key: "JAVASCRIPT",
    children: [
      {
        label: "JavaScript",
        icon: "JsIcon",
        key: "javascript",
        description: "JavaScript 一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。",
      },
      {
        label: "Vue",
        icon: "VueIcon",
        key: "vue",
        description: "Vue.js 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。",
      },
      {
        label: "React",
        icon: "ReactIcon",
        key: "react",
        description: "React 是一个用于构建用户界面的 JavaScript 库。它可以用于创建单页应用，也可以用于构建复杂的 UI 组件。",
      },
      {
        label: "Echarts",
        icon: "EchartsIcon",
        key: "echarts",
        description: "ECharts 是一款基于 JavaScript 的开源可视化库，提供了直观，生动，可交互，可个性化定制的数据可视化图表。",
      },
      {
        label: "Threejs",
        icon: "Threejs",
        key: "threejs",
        description: "Three.js 是一款基于 WebGL 的 3D 引擎，它可以快速、高效地渲染 3D 场景。",
      },
      {
        label: "Vitejs",
        icon: "Vitejs",
        key: "vitejs",
        description:
          "Vite 是一款新型前端构建工具，它能显著提升前端开发体验。它使用原生 ES 模块，并提供丰富的内置功能，如零配置的 HMR（热模块替换），以及开箱即用的 CSS 预处理和压缩。",
      },
    ],
  },
  {
    label: "Python",
    icon: "PythonIcon",
    key: "PYTHON",
    children: [
      {
        label: "Python",
        icon: "PythonIcon",
        key: "python",
        description: "Python 是一种解释型、面向对象、动态数据类型的高级编程语言。",
      },
      {
        label: "Fastapi",
        icon: "FastapiIcon",
        key: "fastapi",
        description: "FastAPI 是一个基于 Python 3.6+ 异步的 Web 框架，它是一个用于构建高性能、可伸缩的 RESTful API 的框架。",
      },
    ],
  },
  {
    label: "Rust",
    icon: "RustIcon",
    key: "RUST",
    children: [
      {
        label: "Rust",
        icon: "RustIcon",
        key: "rust",
        description: "Rust 是一种多范式编程语言，支持过程式、面向对象、函数式编程。",
      },
    ],
  },
];

const headerStore = createSlice({
  name: "headerMenu",

  // 初始状态数据
  initialState: {
    menuData: items,
  },

  // 修改数据 - 同步方法
  reducers: {},
});

// 以默认导出的方式导出 reducer函数
export default headerStore.reducer;
