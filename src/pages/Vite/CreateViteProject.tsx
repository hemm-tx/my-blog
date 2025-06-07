import { ContentCard, DeclarationCard, Template } from "@/components";

const list = [
  {
    label: "npm",
    shell: "npm create vite@latest",
    templateShell: "npm create vite@latest my-vue-app -- --template vue",
  },
  {
    label: "yarn",
    shell: "yarn create vite",
    templateShell: "yarn create vite my-vue-app --template vue",
  },
  {
    label: "pnpm",
    shell: "pnpm create vite",
    templateShell: "pnpm create vite my-vue-app --template vue",
  },
  {
    label: "Bun",
    shell: "bun create vite",
    templateShell: "bun create vite my-vue-app --template vue",
  },
  {
    label: "Deno",
    shell: "deno init --npm vite",
    templateShell: "deno init --npm vite my-vue-app --template vue",
  },
];

export default function CreateViteProject() {
  const { Text } = ContentCard;
  const items = list.map((item) => ({
    label: item.label,
    key: item.label,
    code: [item.shell],
  }));

  const template_items = list.map((item) => ({
    label: item.label,
    key: item.label,
    code: [item.templateShell],
  }));

  return (
    <Template id="create-vite-project-page">
      <ContentCard title="创建 Vite 项目">
        <Text>命令函输入以下命令创建 Vite 项目，并选择模板：</Text>
        <ContentCard.TabsShellCode items={items} />
        <Text>通过附加的命令行选项直接指定项目名称和想要使用的模板</Text>
        <ContentCard.TabsShellCode items={template_items} />
      </ContentCard>
      <DeclarationCard importForm={[{ text: "内容摘抄自： Vite 官方文档 《开始》", href: "https://cn.vitejs.dev/guide/" }]} />
    </Template>
  );
}
