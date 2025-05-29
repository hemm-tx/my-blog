import { Display } from "@/components";

const items = [
  {
    label: "搭建 Vite 项目",
    key: "create-vite-project",
  },
  {
    label: "Vite 环境变量",
    key: "vite-env",
  },
];

export default function VitejsPage() {
  return <Display parentPath="vitejs" items={items} />;
}
