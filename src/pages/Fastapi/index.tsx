import { Display } from "@/components";

const items = [
  {
    label: "创建 FastAPI 项目",
    key: "create-fastapi-project",
  },
  {
    label: "环境变量",
    key: "environment-variables",
  },
  {
    label: "静态资源",
    key: "static-resource",
  },
];

export default function FastapiPage() {
  return <Display parentPath="fastapi" items={items} />;
}
