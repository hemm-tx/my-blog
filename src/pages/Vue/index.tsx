import { Display } from "@/components";

const items = [
  {
    label: "创建 Vite+Vue 项目",
    key: "create-vue-project",
  },
];

export default function VuePage() {
  return <Display parentPath="vue" items={items} />;
}
