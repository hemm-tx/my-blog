import { Template, ContentCard, DeclarationCard } from "@/components";

const Start = () => {
  return (
    <Template id="tailwindcss-start">
      <Template.Content id="tailwindcss-start-start">
        <ContentCard title="开始使用 Tailwind CSS">
          <ContentCard.Text>
            Tailwind CSS 的工作原理是扫描您的所有 HTML 文件、JavaScript 组件和任何其他模板中的类名，生成相应的样式，然后将它们写入静态 CSS 文件。
          </ContentCard.Text>
          <ContentCard.Text>它快速、灵活且可靠 — 零运行时。</ContentCard.Text>
        </ContentCard>
      </Template.Content>
      <Template.Content id="tailwindcss-start-usage">
        <ContentCard title="安装">
          <ContentCard.Paragraph id="tailwindcss-start-usage-install">安装 Tailwind CSS</ContentCard.Paragraph>
          <ContentCard.Text>在终端中运行以下命令：</ContentCard.Text>
          <ContentCard.ShellCode code={["npm install tailwindcss @tailwindcss/vite"]} />
          <ContentCard.Paragraph mt id="tailwindcss-start-usage-configure">
            配置 Vite 插件
          </ContentCard.Paragraph>
          <ContentCard.Text>将 @tailwindcss/vite 插件添加到 Vite 配置中。</ContentCard.Text>
          <ContentCard.Code
            title="vite.config.ts"
            language="typescript"
            code={[
              "import { defineConfig } from 'vite';",
              "import tailwindcss from '@tailwindcss/vite';",
              "",
              "export default defineConfig({",
              "  plugins: [",
              "    tailwindcss(),",
              "  ],",
              "});",
            ]}
          />
          <ContentCard.Paragraph mt id="tailwindcss-start-usage-import">
            导入 Tailwind CSS
          </ContentCard.Paragraph>
          <ContentCard.Text>在 index.css 文件中导入 Tailwind CSS。</ContentCard.Text>
          <ContentCard.Code title="index.css" language="css" code={['@import "tailwindcss";']} />
          <ContentCard.Paragraph mt id="tailwindcss-start-usage-use">
            使用 Tailwind CSS{" "}
          </ContentCard.Paragraph>
          <ContentCard.Text>在 HTML、JavaScript 组件或其他模板中使用 Tailwind CSS 类名。</ContentCard.Text>
          <ContentCard.Code title="index.html" language="html" code={["<div class='bg-blue-500 text-white p-4'>Hello, world!</div>"]} />
        </ContentCard>
        <DeclarationCard title="文章声明" importForm={[{ text: "文章内容摘抄自官方文档", href: "https://tailwind.org.cn/docs/installation/using-vite" }]} />
      </Template.Content>
    </Template>
  );
};

export default Start;
