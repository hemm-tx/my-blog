import { Display } from "@/components";

const items = [
  {
    label: "font-size",
    key: "font-size",
  },
  //   {
  //     label: "Axios 封装",
  //     key: "wrapper-axios",
  //   },
  //   {
  //     label: "Echarts 封装",
  //     key: "wrapper-echarts",
  //   },
];

export default function TailWindCss() {
  return <Display parentPath="tailwind-css" items={items} />;
}
