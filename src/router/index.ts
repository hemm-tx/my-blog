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
        path: "/tailwindcss",
        Component: lazy(() => import("@/pages/TailwindCss")),
        children: [
          {
            path: "/tailwindcss",
            Component: lazy(() => import("@/pages/TailwindCss/FontSize")),
          },
          {
            path: "/tailwindcss/font-size",
            Component: lazy(() => import("@/pages/TailwindCss/FontSize")),
          },
        ],
      },
      {
        path: "/javascript",
        Component: lazy(() => import("@/pages/JavaScript")),
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
        path: "*",
        Component: lazy(() => import("@/pages/NotFound")),
      },
    ],
  },
]);

export default routes;
