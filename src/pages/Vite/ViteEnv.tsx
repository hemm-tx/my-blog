import { Table } from "antd";
import { ContentCard, DeclarationCard, Template } from "@/components";

const constList = [
  {
    name: "import.meta.env.MODE",
    desc: '应用运行的模式。可能的值为 "development"、"production" 或 "test"。',
    type: "string",
  },
  {
    name: "import.meta.env.BASE_URL",
    desc: "部署应用时的基本 URL。他由base 配置项决定。",
    type: "string",
  },
  {
    name: "import.meta.env.PROD",
    desc: "应用是否运行在生产环境（使用 NODE_ENV='production' 运行开发服务器或构建应用时使用 NODE_ENV='production' ）。",
    type: "boolean",
  },
  {
    name: "import.meta.env.DEV",
    desc: "应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。",
    type: "boolean",
  },
  {
    name: "import.meta.env.SSR",
    desc: "应用是否运行在 server 上。",
    type: "boolean",
  },
];

export default function ViteEnv() {
  const { Column } = Table;

  return (
    <Template id="vite-env-content-container">
      <Template.Content id="vite-env-content-custom">
        <ContentCard title="Vite 自定义环境变量">
          <ContentCard.Text>Vite 定义环境变量的方式是通过项目根目录下的.env 文件，该文件可以定义多个环境变量，然后通过 import.meta.env 获取。</ContentCard.Text>
          <ContentCard.Code
            code={[
              ".env                   # 所有情况下都会加载",
              ".env.local             # 所有情况下都会加载，但会被 git 忽略",
              ".env.[mode]            # 只在指定模式下加载",
              ".env.[mode].local      # 只在指定模式下加载，但会被 git 忽略",
            ]}
          />
        </ContentCard>
      </Template.Content>
      <Template.Content id="vite-env-content-data-type">
        <ContentCard title="Vite 定义数据类型">
          <ContentCard.Code
            title="vite-env.d.ts"
            language=".d.ts"
            code={[
              "/// <reference types='vite/client' />",
              "",
              "interface ViteTypeOptions {",
              "  // 添加这行代码，你就可以将 ImportMetaEnv 的类型设为严格模式，",
              "  // 这样就不允许有未知的键值了。",
              "  // strictImportMetaEnv: unknown",
              "}",
              "",
              "interface ImportMetaEnv {",
              "  readonly VITE_APP_TITLE: string",
              "  // 更多环境变量...",
              "}",
              "",
              "interface ImportMeta {",
              "  readonly env: ImportMetaEnv",
              "}",
            ]}
          />
        </ContentCard>
      </Template.Content>
      <Template.Content id="vite-env-content-built-in-const">
        <ContentCard title="Vite 内置常量">
          <ContentCard.Text>Vite 内置常量可以通过 import.meta.env 获取，这些常量可以帮助你在代码中使用环境变量。</ContentCard.Text>
          <Table dataSource={constList} rowKey="name" pagination={false}>
            <Column align="center" title="变量名" fixed="left" dataIndex="name" key="name" />
            <Column align="center" title="类型" dataIndex="type" key="type" />
            <Column align="center" title="描述" dataIndex="desc" key="desc" />
          </Table>
        </ContentCard>
      </Template.Content>
      <DeclarationCard
        title="文章声明"
        importForm={[{ text: "内容摘抄自： Vite 官方文档 《环境变量与模式》", href: "https://cn.vitejs.dev/guide/env-and-mode" }]}
      />
    </Template>
  );
}
