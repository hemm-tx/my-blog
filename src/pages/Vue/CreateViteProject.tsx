import { Template, DeclarationCard, ContentCard } from "@/components";

const { Text, Code, ShellCode } = ContentCard;

const CreateViteProject = () => {
  return (
    <Template id="create-vite-vue-project">
      <Template.Content id="create-vite-vue-project-content">
        <ContentCard title="创建 Vite + Vue 项目">
          <Text>使用 Vite 创建 Vue 项目</Text>
          <ShellCode code={["pnpm create vite"]} />
          <Text>回车后，根据提示输入项目名称 my-app 、框架 Vue ，选择 TypeScript ，即可创建项目</Text>
          <Text>项目创建完成后，进入项目目录，运行以下命令安装依赖：</Text>
          <ShellCode code={["cd my-app", "npm install", "npm run dev"]} />
          <ContentCard.Paragraph title="项目结构" id="project-structure">
            <Code
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
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="configure-project">
        <ContentCard title="配置项目">
          <ContentCard.Paragraph title="安装依赖" id="install-dependencies">
            <Text>安装 vue-router pinia 组件库</Text>
            <ShellCode code={["pnpm install vue-router pinia pinia-plugin-persistedstate"]} />
            <Text>安装 sass 预处理器</Text>
            <ShellCode code={["pnpm install sass sass-loader --save-dev"]} />
            <Text>安装 tailwindcss 样式库</Text>
            <ShellCode code={["pnpm install tailwindcss @tailwindcss/vite"]} />
            <Text>安装 vue-jsx 支持</Text>
            <ShellCode code={["pnpm install @vitejs/plugin-vue-jsx"]} />
            <Text>安装 element-plus UI库和图标库</Text>
            <ShellCode code={["pnpm install element-plus @element-plus/icons-vue"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="更新配置文件" id="update-config-file">
            <Text>更新 vite.config.js 文件，添加以下内容：</Text>
            <Code
              title="vite.config.ts"
              language="typescript"
              code={[
                'import { defineConfig } from "vite";',
                'import vue from "@vitejs/plugin-vue";',
                'import vueJsx from "@vitejs/plugin-vue-jsx";',
                'import tailwindcss from "@tailwindcss/vite";',
                'import path from "path";',
                "",
                "// 如果遇到 path 模块找不到，报错的情况，可以尝试安装 @types/node 类型声明",
                "// 如果遇到 pnpm 装不上 @types/node的情况",
                '// 可以在 package.json 文件 devDependencies 配置下添加 @types/node 依赖，指定版本后，在命令提示符中运行 pnpm install 即可安装"',
                "// https://vite.dev/config/",
                "export default defineConfig({",
                "  clearScreen: false,",
                '  base: "./",',
                "  plugins: [vue(), vueJsx(), tailwindcss()],",
                "  resolve: {",
                "    alias: [",
                "      {",
                '        find: "@",',
                '        replacement: path.resolve(__dirname, "./src"),',
                "      },",
                "      {",
                '        find: "@public",',
                '        replacement: path.resolve(__dirname, "./public"),',
                "      },",
                "    ],",
                "  },",
                "  css: {",
                "    preprocessorOptions: {",
                "      // 添加 scss 预处理文件，没有文件记得注释掉这段",
                "      scss: {",
                '        api: "modern-compiler",',
                "        additionalData: '@use \"@/assets/style/mixin.scss\" as *;',",
                "      },",
                "    },",
                "  },",
                "  server: {",
                "    strictPort: true,",
                "    host: false,",
                "    port: 5174,",
                "  },",
                "});",
              ]}
            />
            <Text>在 tsconfig.app.json 文件中配置路径映射</Text>
            <Code
              language="json"
              title="tsconfig.app.json"
              code={[
                "{",
                '  "compilerOptions": {',
                '    "jsx": "preserve",',
                '    "jsxImportSource": "vue",',
                '    "baseUrl": ".",',
                '    "paths": {',
                '      "@/*": ["src/*"]',
                '      "@public/*": ["public/*"]',
                "    }",
                "  }",
                '  "include": [',
                '    "src/**/*.ts",',
                '    "src/**/*.tsx",',
                '    "src/**/*.vue",',
                '    "typings/**/*.d.ts",',
                '    "src/router/index.ts",',
                "  ]",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建项目目录" id="create-project-directory">
            <Text>删除 components 文件夹的 HelloWorld.vue 文件</Text>
            <Text>删除 App.vue 文件中的无用内容</Text>
            <Text>在 style.css 文件中导入 tailwindcss 样式文件</Text>
            <Code language="css" title="style.css" code={["@import 'tailwindcss';"]} />
            <Text>运行命令创建项目所需文件夹和文件</Text>
            <ShellCode code={["cd src", "md routes", "md pages", "md components", "md store", "md assets", "md api", "cd pages", "cd . > Home.tsx"]} />
            <Text>编辑 Home.tsx 文件，添加以下内容：</Text>
            <Code
              language="tsx"
              title="src/pages/Home.tsx"
              code={[
                "import { defineComponent } from 'vue';",
                "",
                "export default defineComponent({",
                "  name: 'Home',",
                "  setup() {",
                '    return () => <div class="w-screen h-screen flex place-content-center place-items-center font-bold text-4xl">Home</div>;',
                "  },",
                "});",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建路由" id="create-router">
            <Text>在 src/router/index.ts 文件中添加以下内容：</Text>
            <Code
              language="typescript"
              title="src/router/index.ts"
              code={[
                'import { createRouter, createWebHashHistory } from "vue-router";',
                "",
                "const router = createRouter({",
                "  history: createWebHashHistory(),",
                "  routes: [",
                '    { path: "/", component: () => import("@/pages/Home.tsx") },',
                "    // 其他路由配置",
                "  ]",
                "});",
                "",
                "// 添加路由守卫",
                "router.beforeEach((to, from, next) => {",
                "  // 路由守卫代码",
                "  next();",
                "});",
                "",
                "export default router;",
              ]}
            />
            <Text>修改 App.vue 文件，添加路由视图：</Text>
            <Code
              language="vue"
              title="src/App.vue"
              code={[
                '<script setup lang="ts">',
                'import {RouterView} from "vue-router";',
                "</script>",
                "",
                "<template>",
                "  <router-view />",
                "</template>",
                "",
                "<style scoped>",
                "</style>",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="添加状态管理" id="add-state-management">
            <Text>在 store 文件夹下创建 counter.ts 文件，添加以下内容：</Text>
            <Code
              language="typescript"
              title="src/store/counter.ts"
              code={[
                "import { defineStore } from 'pinia';",
                "import { reactive } from 'vue';",
                "",
                "// defineStore 第一个参数不能重复",
                "// defineStore 第三个 persist 参数用来持久化存储",
                "export const useCounterStore = defineStore(",
                "'counterStore',",
                " () => {",
                "    const state = reactive({",
                "      count: 0,",
                "    }),",
                "",
                "    const increment = () => {",
                "      state.count++;",
                "    },",
                "",
                "    return {",
                "      state,",
                "      increment,",
                "    };",
                "  },",
                "  // { persist: true }",
                ");",
              ]}
            />
            <Text>在 store/index.ts 文件中导出 useCounterStore ：</Text>
            <Code language="typescript" title="src/store/index.ts" code={["export { useCounterStore } from './counter';"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="整合项目" id="integrate-project">
            <Text>在 main.ts 文件中导入并使用 router 和 store ：</Text>
            <Code
              language="typescript"
              title="main.ts"
              code={[
                'import { createApp } from "vue";',
                'import { createPinia } from "pinia";',
                'import piniaPluginPersistedstate from "pinia-plugin-persistedstate";',
                'import router from "@/routes";',
                'import ElementPlus from "element-plus";',
                'import "element-plus/dist/index.css";',
                'import "./style.css";',
                'import App from "./App.vue";',
                "",
                "const app = createApp(App);",
                "const pinia = createPinia();",
                "",
                "// 重写 $reset 方法，用来重置 store 状态",
                "pinia.use(({ store }) => {",
                "  const initialState = JSON.parse(JSON.stringify(store.$state));",
                "  store.$reset = () => store.$patch(initialState);",
                "});",
                "",
                "pinia.use(piniaPluginPersistedstate);",
                "app.use(pinia);",
                "app.use(router);",
                "app.use(ElementPlus);",
                "",
                'app.mount("#app");',
              ]}
            />
            <Text>修改一下 Home.tsx 文件，添加计数器功能：</Text>
            <Code
              language="tsx"
              title="src/pages/Home.tsx"
              code={[
                'import { ElButton } from "element-plus";',
                'import { defineComponent } from "vue";',
                'import { useCounterStore } from "@/store";',
                "",
                "export default defineComponent({",
                '  name: "Home",',
                "  setup() {",
                "    const counterStore = useCounterStore();",
                "",
                "    const handleClick = () => {",
                "      counterStore.increment();",
                "    };",
                "",
                "    return () => (",
                '      <div class="w-screen h-screen flex flex-col place-content-center place-items-center font-bold text-4xl">',
                '        <span class="py-3">Welcome to my app!</span>',
                '        <span class="pb-3">count: {counterStore.state.count}</span>',
                "        <ElButton onClick={handleClick}>Click me add count</ElButton>",
                "      </div>",
                "    );",
                "  },",
                "});",
              ]}
            />
            <Text>运行项目，访问 http://localhost:5174 即可看到效果</Text>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="版本信息" id="version-info">
            <Code
              language="json"
              title="package.json"
              code={[
                '"dependencies": {',
                '  "@tailwindcss/vite": "^4.1.11",',
                '  "@vitejs/plugin-vue-jsx": "^5.0.1",',
                '  "element-plus": "^2.10.5",',
                '  "pinia": "^2.3.1",',
                '  "pinia-plugin-persistedstate": "^4.4.1",',
                '  "tailwindcss": "^4.1.11",',
                '  "vue": "^3.5.18",',
                '  "vue-router": "^4.5.1"',
                "},",
                '"devDependencies": {',
                '  "@types/node": "^22.17.0",',
                '  "@vitejs/plugin-vue": "^6.0.1",',
                '  "@vue/tsconfig": "^0.7.0",',
                '  "sass": "^1.89.2",',
                '  "sass-loader": "^16.0.5",',
                '  "typescript": "~5.8.3",',
                '  "vite": "^7.0.6",',
                '  "vue-tsc": "^2.2.12"',
                "}",
              ]}
            />
            ',
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default CreateViteProject;
