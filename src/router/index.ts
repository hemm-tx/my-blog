import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

//引入懒加载的形式:
const App = lazy(() => import("@/App.tsx"));

const routes = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      //xxx  多级路由配置
      {
        index: true,
        path: "",
        Component: lazy(() => import("@/pages/Home")),
      },
      {
        path: "/home",
        Component: lazy(() => import("@/pages/Home")),
      },
      {
        path: "/css",
        Component: lazy(() => import("@/pages/Css")),
        children: [
          {
            path: "/css",
            Component: lazy(() => import("@/pages/Css/FoundationSelector")),
          },
          {
            path: "/css/foundation-selector",
            Component: lazy(() => import("@/pages/Css/FoundationSelector")),
          },
          {
            path: "/css/combinators",
            Component: lazy(() => import("@/pages/Css/Combinators")),
          },
          {
            path: "/css/pseudo-classes",
            Component: lazy(() => import("@/pages/Css/PseudoClasses")),
          },
        ],
      },
      {
        path: "/tailwindcss",
        Component: lazy(() => import("@/pages/TailwindCss")),
        children: [
          {
            path: "/tailwindcss",
            Component: lazy(() => import("@/pages/TailwindCss/Start")),
          },
          {
            path: "/tailwindcss/font-size",
            Component: lazy(() => import("@/pages/TailwindCss/FontSize")),
          },
          {
            path: "/tailwindcss/pseudo-class",
            Component: lazy(() => import("@/pages/TailwindCss/PseudoClass")),
          },
          {
            path: "/tailwindcss/style-child-element",
            Component: lazy(() => import("@/pages/TailwindCss/StyleChildElement")),
          },
          {
            path: "/tailwindcss/custom-variant",
            Component: lazy(() => import("@/pages/TailwindCss/CustomVariant")),
          },
          {
            path: "/tailwindcss/transition",
            Component: lazy(() => import("@/pages/TailwindCss/Transition")),
          },
        ],
      },
      {
        path: "/javascript",
        Component: lazy(() => import("@/pages/JavaScript")),
        children: [
          { path: "/javascript", Component: lazy(() => import("@/pages/JavaScript/CommonFunctions")) },
          { path: "/javascript/common-functions", Component: lazy(() => import("@/pages/JavaScript/CommonFunctions")) },
        ],
      },
      {
        path: "/react",
        Component: lazy(() => import("@/pages/React")),
        children: [
          {
            path: "/react",
            Component: lazy(() => import("@/pages/React/CreateViteReactProject")),
          },
          {
            path: "/react/create-vite-react-project",
            Component: lazy(() => import("@/pages/React/CreateViteReactProject")),
          },
          {
            path: "/react/reduxjs-toolkit",
            Component: lazy(() => import("@/pages/React/ReduxjsToolkit")),
          },
          {
            path: "/react/wrapper-axios",
            Component: lazy(() => import("@/pages/React/WrapperAxios")),
          },
          {
            path: "/react/wrapper-echarts",
            Component: lazy(() => import("@/pages/React/WrapperEcharts")),
          },
        ],
      },
      {
        path: "/vitejs",
        Component: lazy(() => import("@/pages/Vite")),
        children: [
          {
            path: "/vitejs",
            Component: lazy(() => import("@/pages/Vite/CreateViteProject")),
          },
          {
            path: "/vitejs/create-vite-project",
            Component: lazy(() => import("@/pages/Vite/CreateViteProject")),
          },
          {
            path: "/vitejs/vite-env",
            Component: lazy(() => import("@/pages/Vite/ViteEnv")),
          },
        ],
      },
      {
        path: "/vue",
        Component: lazy(() => import("@/pages/Vue")),
        children: [
          {
            path: "/vue",
            Component: lazy(() => import("@/pages/Vue/CreateViteProject")),
          },
          {
            path: "/vue/create-vue-project",
            Component: lazy(() => import("@/pages/Vue/CreateViteProject")),
          },
        ],
      },
      {
        path: "/python",
        Component: lazy(() => import("@/pages/Python")),
        children: [
          { path: "/python", Component: lazy(() => import("@/pages/Python/Pyinstaller")) },
          { path: "/python/pyinstaller", Component: lazy(() => import("@/pages/Python/Pyinstaller")) },
          { path: "/python/requirements-txt", Component: lazy(() => import("@/pages/Python/CreateRequirements")) },
          { path: "/python/lambda-anonymous-function", Component: lazy(() => import("@/pages/Python/Lambda")) },
          { path: "/python/iterator-and-generator", Component: lazy(() => import("@/pages/Python/IteratorAndGenerator")) },
          { path: "/python/decorator", Component: lazy(() => import("@/pages/Python/Decorator")) },
        ],
      },
      {
        path: "/fastapi",
        Component: lazy(() => import("@/pages/Fastapi")),
        children: [
          { path: "/fastapi", Component: lazy(() => import("@/pages/Fastapi/CreateFastapiProject")) },
          { path: "/fastapi/create-fastapi-project", Component: lazy(() => import("@/pages/Fastapi/CreateFastapiProject")) },
          { path: "/fastapi/environment-variables", Component: lazy(() => import("@/pages/Fastapi/EnvironmentVariables")) },
          { path: "/fastapi/static-resource", Component: lazy(() => import("@/pages/Fastapi/StaticResource")) },
        ],
      },
      {
        path: "/mysql",
        Component: lazy(() => import("@/pages/Mysql")),
        children: [
          { path: "/mysql", Component: lazy(() => import("@/pages/Mysql/Start")) },
          { path: "/mysql/start", Component: lazy(() => import("@/pages/Mysql/Start")) },
          { path: "/mysql/ddl-statement", Component: lazy(() => import("@/pages/Mysql/DDLStatement")) },
          { path: "/mysql/dml-statement", Component: lazy(() => import("@/pages/Mysql/DMLStatement")) },
          { path: "/mysql/dcl-statement", Component: lazy(() => import("@/pages/Mysql/DCLStatement")) },
          { path: "/mysql/dql-statement", Component: lazy(() => import("@/pages/Mysql/DQLStatement")) },
          // { path: "/mysql/decorator", Component: lazy(() => import("@/pages/Mysql/Decorator")) },
        ],
      },
      {
        path: "/project-share",
        Component: lazy(() => import("@/pages/Other/ProjectShare")),
        children: [
          { path: "/project-share", Component: lazy(() => import("@/pages/Other/ProjectShare/HikvisionCamera")) },
          { path: "/project-share/push-hikvision-camera", Component: lazy(() => import("@/pages/Other/ProjectShare/HikvisionCamera")) },
        ],
      },
      {
        path: "*",
        Component: lazy(() => import("@/pages/NotFound")),
      },
    ],
  },
]);

export default routes;
