import { Display } from "@/components";

const items = [
  {
    label: "基础选择器",
    key: "foundation-selector",
  },
  {
    label: "组合选择器",
    key: "combinators",
  },
  {
    label: "伪类选择器",
    key: "pseudo-classes",
  },
];

export default function CssPage() {
  return <Display parentPath="css" items={items} />;
}
