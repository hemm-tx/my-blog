import { lazy } from "react";

export const IconComponents = {
  HomeIcon: lazy(() => import("@/assets/icons/HomeIcon")),
  HtmlIcon: lazy(() => import("@/assets/icons/HtmlIcon")),
  CssIcon: lazy(() => import("@/assets/icons/CssIcon")),
  TailwindCssIcon: lazy(() => import("@/assets/icons/TailwindCssIcon")),
  JsIcon: lazy(() => import("@/assets/icons/JsIcon")),
  VueIcon: lazy(() => import("@/assets/icons/VueIcon")),
  ReactIcon: lazy(() => import("@/assets/icons/ReactIcon")),
  EchartsIcon: lazy(() => import("@/assets/icons/EchartsIcon")),
  PythonIcon: lazy(() => import("@/assets/icons/PythonIcon")),
  FastapiIcon: lazy(() => import("@/assets/icons/FastapiIcon")),
  RustIcon: lazy(() => import("@/assets/icons/RustIcon")),
  Threejs: lazy(() => import("@/assets/icons/ThreejsIcon")),
  Vitejs: lazy(() => import("@/assets/icons/ViteIcon")),
};

export type IconType = keyof typeof IconComponents;
