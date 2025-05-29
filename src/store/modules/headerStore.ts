// 导入创建 store 的方法
import { createSlice } from "@reduxjs/toolkit";
import { type IconType } from "@/components";

interface IHeaderMenu {
  label: string;
  key: string;
  icon: IconType;
  children?: IHeaderMenu[];
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
      },
      {
        label: "CSS",
        icon: "CssIcon",
        key: "css",
      },
      {
        label: "Tailwind CSS",
        icon: "TailwindCssIcon",
        key: "tailwindcss",
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
      },
      {
        label: "Vue",
        icon: "VueIcon",
        key: "vue",
      },
      {
        label: "React",
        icon: "ReactIcon",
        key: "react",
      },
      {
        label: "Echarts",
        icon: "EchartsIcon",
        key: "echarts",
      },
      {
        label: "Threejs",
        icon: "Threejs",
        key: "threejs",
      },
      {
        label: "Vitejs",
        icon: "Vitejs",
        key: "vitejs",
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
      },
      {
        label: "Fastapi",
        icon: "FastapiIcon",
        key: "fastapi",
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
