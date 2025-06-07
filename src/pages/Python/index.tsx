import { Display } from "@/components";

const items = [
  {
    label: "pyinstaller 打包工具",
    key: "pyinstaller",
  },
  {
    label: "生成 requirements.txt 文件",
    key: "requirements-txt",
  },
  {
    label: "Lambda 匿名函数",
    key: "lambda-anonymous-function",
  },
  {
    label: "迭代器和生成器",
    key: "iterator-and-generator",
  },
  {
    label: "装饰器",
    key: "decorator",
  },
];

export default function PythonPage() {
  return <Display parentPath="python" items={items} />;
}
