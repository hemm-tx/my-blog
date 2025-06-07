import { ContentCard, DeclarationCard, Template } from "@/components";

const CreateViteReactProject = () => {
  return (
    <Template id="create-vite-react-project-content-container">
      <Template.Content id="create-vite-react-project">
        <ContentCard title="创建 Vite React 项目">
          <ContentCard.Text>使用 Vite 创建 React 项目</ContentCard.Text>
          <ContentCard.ShellCode code={["npm create-vite-app my-app --template react"]} />
          <ContentCard.Text>安装依赖并启动项目</ContentCard.Text>
          <ContentCard.ShellCode code={["cd my-app", "npm install", "npm run dev"]} />
        </ContentCard>
      </Template.Content>
      <Template.Content id="project-structure">
        <ContentCard title="项目结构">
          <ContentCard.Code
            code={[
              "my-app",
              "├── node_modules",
              "├── package.json",
              "├── vite.config.js",
              "├── src",
              "│   ├── api",
              "│   ├── assets",
              "│   │   ├── fonts",
              "│   │   ├── icons",
              "│   │   ├── js",
              "│   │   └── styles",
              "│   │       └── mixin.scss",
              "│   ├── components",
              "│   ├── pages",
              "│   ├── routes",
              "│   ├── store",
              "│   ├── App.tsx",
              "│   ├── index.css",
              "│   └── typings",
              "├── index.html",
              "└── package-lock.json",
            ]}
          />
        </ContentCard>
      </Template.Content>
      <Template.Content id="configure-project">
        <ContentCard title="配置项目">
          <ContentCard.Paragraph title="安装依赖" id="configure-project-0">
            <ContentCard.Text>安装 react-redux 和 react-router-dom</ContentCard.Text>
            <ContentCard.ShellCode code={["npm install react-redux react-router-dom"]} />
            <ContentCard.Text>安装 scss 预处理器</ContentCard.Text>
            <ContentCard.ShellCode code={["npm install sass sass-loader --save-dev"]} />
            <ContentCard.Text>安装 tailwindcss</ContentCard.Text>
            <ContentCard.ShellCode code={["npm install tailwindcss @tailwindcss/vite"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="更新 vite 配置文件" id="configure-project-1">
            <ContentCard.Text>编辑 vite.config.js 文件</ContentCard.Text>
            <ContentCard.Code
              language="javascript"
              title="vite.config.js"
              code={[
                "import { defineConfig } from 'vite';",
                "import react from '@vitejs/plugin-react';",
                "import tailwindcss from '@tailwindcss/vite';",
                "import path from 'path';",
                "",
                "// https://vite.dev/config/",
                "export default defineConfig({",
                "  plugins: [react(), tailwindcss()],",
                "  resolve: {",
                "    alias: [",
                "      {",
                "        find: '@',",
                "        replacement: path.resolve(__dirname, './src'),",
                "      },",
                "    ],",
                "  },",
                "  css: {",
                "    preprocessorOptions: {",
                "      scss: {",
                "        // 暂时还没有创建 scss 文件，先注释掉",
                "        // api: 'modern-compiler',",
                "        // additionalData: `@use '@/assets/styles/mixin.scss';`,",
                "      },",
                "    },",
                "  },",
                "});",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建项目文件夹和文件" id="configure-project-2">
            <ContentCard.Text>运行命令创建项目所需要的文件夹和文件</ContentCard.Text>
            <ContentCard.ShellCode code={["mkdir src/routes src/pages src/components src/store src/assets src/api", "touch src/pages/Home.tsx"]} />
            <ContentCard.Text>在 index.css 文件中导入 tailwindcss 样式文件</ContentCard.Text>
            <ContentCard.Code language="css" title="src/index.css" code={["@import 'tailwindcss';"]} />
            <ContentCard.Text>编辑 src/pages/Home.tsx 文件</ContentCard.Text>
            <ContentCard.Code
              language="tsx"
              title="src/pages/Home.tsx"
              code={[
                "export default function Home() {",
                "  return <div className='w-screen h-screen flex place-content-center place-items-center font-bold text-4xl'>Home Page</div>;",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建项目路由，使用 lazy 懒加载组件" id="configure-project-3">
            <ContentCard.Text>编辑 src/routes/index.ts 文件</ContentCard.Text>
            <ContentCard.Code
              language="typescript"
              title="src/routes/index.ts"
              code={[
                "import { createBrowserRouter } from 'react-router-dom';",
                "import { lazy } from 'react';",
                "",
                "const App = lazy(() => import('@/App.tsx'));",
                "",
                "const routes = createBrowserRouter([",
                "  {",
                "    path: '',",
                "    Component: App,",
                "    children: [",
                "      {",
                "        index: true,",
                "        path: '',",
                "        Component: lazy(() => import('@/pages/Home')),",
                "      },",
                "  },",
                "]);",
                "",
                "export default routes;",
              ]}
            />
            <ContentCard.Text>使用 @/pages/Home 导入组件会报错，需要在 tsconfig.app.json 文件中配置路径映射</ContentCard.Text>
            <ContentCard.Code
              language="json"
              title="tsconfig.app.json"
              code={[
                "{",
                "  'compilerOptions': {",
                "    // path mapping",
                "    'baseUrl': '.',",
                "    'paths': {",
                "      '@/*': ['src/*'],",
                "      '@public/*': ['public/*']",
                "    }",
                "  },",
                "  'include': [",
                "    'src/**/*.ts',",
                "    'src/**/*.tsx',",
                "    'typings/**/*.d.ts',",
                "    'src/router/index.ts'",
                "  ]",
                "}",
              ]}
            />
            <ContentCard.Text>给 App.tsx 文件添加路由组件</ContentCard.Text>
            <ContentCard.Code
              language="tsx"
              title="src/App.tsx"
              code={[
                "import { Outlet } from 'react-router-dom';",
                "import './App.scss';",
                "",
                "const App = () => {",
                "  return (",
                "    <div className='App'>",
                "      <Outlet></Outlet>",
                "    </div>",
                "  );",
                "};",
                "",
                "export default App;",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="配置 store 状态管理" id="configure-project-4">
            <ContentCard.Text>创建 src/store/index.ts 文件</ContentCard.Text>
            <ContentCard.ShellCode code={["touch src/store/index.ts"]} />
            <ContentCard.Text>创建 counter.ts 文件，导出一个 reducer 函数</ContentCard.Text>
            <ContentCard.Code
              language="typescript"
              title="src/store/counter.ts"
              code={[
                "import { createSlice } from '@reduxjs/toolkit';",
                "",
                "const counterSlice = createSlice({",
                "  name: 'counter',",
                "  initialState: {",
                "    value: 0,",
                "  },",
                "  reducers: {",
                "    increment(state) {",
                "      state.value++;",
                "    },",
                "    decrement(state) {",
                "      state.value--;",
                "    },",
                "  },",
                "});",
                "",
                "export const { increment, decrement } = counterSlice.actions;",
                "export default counterSlice.reducer;",
              ]}
            />
            <ContentCard.Text>编辑 src/store/index.ts 文件，导入 counter 函数</ContentCard.Text>
            <ContentCard.Text>创建自定义hooks：useAppDispatch 和 useAppSelector ，用于方便ts进行类型推断</ContentCard.Text>
            <ContentCard.Code
              language="typescript"
              title="src/store/index.ts"
              code={[
                "// 导入组合函数",
                "import { configureStore } from '@reduxjs/toolkit';",
                "import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';",
                "",
                "import counterSlice from './counter';",
                "",
                "const store = configureStore({",
                "  reducer: {",
                "    counter: counterSlice,",
                "  },",
                "});",
                "",
                "export default store;",
                "",
                "// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型",
                "export type RootState = ReturnType<typeof store.getState>;",
                "export type AppDispatch = typeof store.dispatch;",
                "",
                "// 导出自定义 hooks",
                "export const useAppDispatch = () => useDispatch<AppDispatch>();",
                "export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="更新 main.tsx 和 Home.tsx 文件" id="configure-project-5">
            <ContentCard.Text>修改 src/main.tsx 文件</ContentCard.Text>
            <ContentCard.Code
              language="tsx"
              title="src/main.tsx"
              code={[
                "import React from 'react';",
                "import ReactDOM from 'react-dom/client';",
                "import './index.css';",
                "",
                "import { RouterProvider } from 'react-router-dom';",
                "import router from './router';",
                "",
                "// 导入 根store",
                "import store from './store';",
                "// 导入 react-redux 的内置组件 Provider",
                "import { Provider } from 'react-redux';",
                "",
                "const root = ReactDOM.createRoot(document.getElementById('root')!);",
                "root.render(",
                "  // React.StrictMode 为整个应用启用严格模式  -- 严格模式下，组件渲染两次",
                "  <React.StrictMode>",
                "    <Provider store={store}>",
                "      {/* 使用 redux 的时候，需要用 Provider 包裹 RouterProvider */}",
                "      {/* 路由绑定，注入路由实例对象 */}",
                "      <RouterProvider router={router} />",
                "    </Provider>",
                "  </React.StrictMode>",
                ");",
              ]}
            />
            <ContentCard.Text>
              修改完成之后就可以使用 store 了，接下来修改 src/pages/Home.tsx 文件，使用 useAppDispatch 和 useAppSelector 进行状态管理
            </ContentCard.Text>
            <ContentCard.Code
              language="tsx"
              title="src/pages/Home.tsx"
              code={[
                "import { useAppDispatch, useAppSelector } from '@/store';",
                "",
                "export default function Home() {",
                "  const dispatch = useAppDispatch();",
                "  const count = useAppSelector((state) => state.counter.value);",
                "",
                "  return (",
                "    <div className='w-screen h-screen flex place-content-center place-items-center font-bold text-4xl'>",
                "      <div>",
                "        <p>Count: {count}</p>",
                "        <button onClick={() => dispatch(increment())}>+</button>",
                "        <button onClick={() => dispatch(decrement())}>-</button>",
                "      </div>",
                "    </div>",
                "  );",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Text>修改完成之后，就可以正常运行项目了！！！</ContentCard.Text>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default CreateViteReactProject;
