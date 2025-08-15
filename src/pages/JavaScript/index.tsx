import { Display } from "@/components";

const items = [
  {
    label: "常用函数",
    key: "common-functions",
  },
];

export default function JavaScriptPage() {
  return <Display parentPath="javascript" items={items} />;
}
