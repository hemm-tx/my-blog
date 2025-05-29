import { Display } from "@/components";

const items = [
  {
    label: "搭建 Vite React 项目",
    key: "create-vite-react-project",
  },
  {
    label: "Axios 封装",
    key: "wrapper-axios",
  },
  {
    label: "Echarts 封装",
    key: "wrapper-echarts",
  },
];

export default function ReactPage() {
  return <Display parentPath="react" items={items} />;
}
