import { Display } from "@/components";

const items = [
  {
    label: "开始使用",
    key: "",
  },
  {
    label: "伪类 & 伪元素",
    key: "pseudo-class",
  },
  {
    label: "样式化子元素",
    key: "style-child-element",
  },
  {
    label: "自定义变体",
    key: "custom-variant",
  },
  {
    label: "font-size",
    key: "font-size",
  },
  {
    label: "transition",
    key: "transition",
  },
];

export default function TailWindCss() {
  return <Display parentPath="tailwindcss" items={items} />;
}
