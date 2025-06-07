import { ContentCard, DeclarationCard, Template } from "@/components";
import { Table } from "antd";

const list = [
  {
    class: "text-xs",
    styles: ["font-size: var(--text-xs);", "line-height: var(--text-xs--line-height);"],
    description: "0.75rem (12px)",
  },
  {
    class: "text-sm",
    styles: ["font-size: var(--text-sm);", "line-height: var(--text-sm--line-height);"],
    description: "0.875rem (14px)",
  },
  {
    class: "text-base",
    styles: ["font-size: var(--text-base);", "line-height: var(--text-base--line-height);"],
    description: "1rem (16px)",
  },
  {
    class: "text-lg",
    styles: ["font-size: var(--text-lg);", "line-height: var(--text-lg--line-height);"],
    description: "1.125rem (18px)",
  },
  {
    class: "text-xl",
    styles: ["font-size: var(--text-xl);", "line-height: var(--text-xl--line-height);"],
    description: "1.25rem (20px)",
  },
  {
    class: "text-2xl",
    styles: ["font-size: var(--text-2xl);", "line-height: var(--text-2xl--line-height);"],
    description: "1.5rem (24px)",
  },
  {
    class: "text-(length:<custom-property>)",
    styles: ["font-size: var(<custom-property>);"],
    description: "",
  },
  {
    class: "text-[<value>]",
    styles: ["font-size: <value>;"],
    description: "",
  },
];

const table_data = list.map((item) => ({
  className: item.class,
  style: item.styles.map((sty, idx) => (
    <div key={idx} className="text-fuchsia-500">
      <span>{sty}</span>
    </div>
  )),
  description: item.description,
}));

const FontSize = () => {
  const { Column } = Table;
  return (
    <Template id="tailwind-css-fontSize">
      <Template.Content id="tailwind-css-fontSize-container">
        <ContentCard title="Font Size">
          <ContentCard.Text>用于控制元素字体大小的实用工具。</ContentCard.Text>
          <Table dataSource={table_data} pagination={false} rowKey="className">
            <Column className="text-blue-500" width={300} title="类名" dataIndex="className" key="className" align="center" />
            <Column title="样式" dataIndex="style" key="style" align="center" />
            <Column className="text-green-500" title="描述" dataIndex="description" key="description" align="center" />
          </Table>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default FontSize;
