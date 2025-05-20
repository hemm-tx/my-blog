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
    ],
  },
]);

export default routes;
