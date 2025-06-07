import { Display } from "@/components";

const items = [
  {
    label: "常用函数",
    key: "common-functions",
  },
  //   {
  //     label: "生成 requirements.txt 文件",
  //     key: "requirements-txt",
  //   },
  //   {
  //     label: "Lambda 匿名函数",
  //     key: "lambda-anonymous-function",
  //   },
  //   {
  //     label: "迭代器和生成器",
  //     key: "iterator-and-generator",
  //   },
  //   {
  //     label: "装饰器",
  //     key: "decorator",
  //   },
];

export default function JavaScriptPage() {
  return <Display parentPath="javascript" items={items} />;
}
