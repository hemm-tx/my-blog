import { Template, ContentCard, DeclarationCard } from "@/components";
import { Table } from "antd";
import type { FC } from "react";

interface TransitionProperty {
  class_name: string;
  styles: string[];
}

const transition_default_other_style = [
  "transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */",
  "transition-duration: var(--default-transition-duration); /* 150ms */",
];
const transition_property_classes_list = [
  {
    class_name: "transition",
    styles: [
      "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;",
      ...transition_default_other_style,
    ],
  },
  {
    class_name: "transition-all",
    styles: ["transition-property: all;", ...transition_default_other_style],
  },
  {
    class_name: "transition-colors",
    styles: [
      "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;",
      ...transition_default_other_style,
    ],
  },
  {
    class_name: "transition-opacity",
    styles: ["transition-property: opacity;", ...transition_default_other_style],
  },
  {
    class_name: "transition-shadow",
    styles: ["transition-property: box-shadow;", ...transition_default_other_style],
  },
  {
    class_name: "transition-transform",
    styles: ["transition-property: transform, translate, scale, rotate;", ...transition_default_other_style],
  },
  {
    class_name: "transition-none",
    styles: ["transition-property: none;"],
  },
  {
    class_name: "transition-(<custom-property>)",
    styles: ["transition-property: var(<custom-property>);", ...transition_default_other_style],
  },
  {
    class_name: "transition-[<value>]",
    styles: ["transition-property: <value>;", ...transition_default_other_style],
  },
];

const transition_behavior_classes_list = [
  { class_name: "transition-normal", styles: ["transition-behavior: normal;"] },
  { class_name: "transition-discrete", styles: ["transition-behavior: allow-discrete;"] },
];

const transition_duration_classes_list = [
  { class_name: "duration-<number>", styles: ["transition-duration: <number>ms;"] },
  { class_name: "duration-initial", styles: ["transition-duration: initial;"] },
  { class_name: "duration-(<custom-property>)", styles: ["transition-duration: var(<custom-property>);"] },
  { class_name: "duration-[<value>]", styles: ["transition-duration: <value>;"] },
];

const transition_timing_function_classes_list = [
  { class_name: "ease-linear", styles: ["transition-timing-function: linear;"] },
  { class_name: "ease-in", styles: ["transition-timing-function: var(--ease-in); /* cubic-bezier(0.4, 0, 1, 1) */"] },
  { class_name: "ease-out", styles: ["transition-timing-function: var(--ease-out); /* cubic-bezier(0, 0, 0.2, 1) */"] },
  { class_name: "ease-in-out", styles: ["transition-timing-function: var(--ease-in-out); /* cubic-bezier(0.4, 0, 0.2, 1) */"] },
  { class_name: "ease-initial", styles: ["transition-timing-function: initial;"] },
  { class_name: "ease-(<custom-property>)", styles: ["transition-timing-function: var(<custom-property>);"] },
  { class_name: "ease-[<value>]", styles: ["transition-timing-function: <value>;"] },
];

const CreateTable: FC<{ data_list: TransitionProperty[] }> = ({ data_list }) => {
  const { Column } = Table;
  return (
    <Table className="w-full" pagination={false} dataSource={data_list} rowKey="class_name" scroll={{ x: "max-content", y: "350px" }}>
      <Column title="类名" fixed="left" dataIndex="class_name" key="class_name" width={300} />
      <Column
        title="样式"
        dataIndex="styles"
        key="styles"
        render={(styles: string[]) => (
          <div>
            {styles.map((style, index) => (
              <span className="whitespace-pre" key={index}>
                {style}
                <br />
              </span>
            ))}
          </div>
        )}
      />
    </Table>
  );
};

const Transition = () => {
  return (
    <Template id="tailwindcss-transition">
      <Template.Content id="tailwindcss-transition-property">
        <ContentCard title="transition-property">
          <ContentCard.Text>transition-property 用于控制哪些 CSS 属性进行过渡。</ContentCard.Text>
          <ContentCard.Paragraph title="内置 transition-property 类" id="tailwindcss-transition-property-classes">
            <CreateTable data_list={transition_property_classes_list} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="自定义 transition-property 类" id="tailwindcss-transition-custom-property-classes">
            <ContentCard.Text>使用 transition-[&lt;value&gt;] 语法 来设置过渡属性基于完全自定义的值</ContentCard.Text>
            <ContentCard.Code
              language="html"
              code={[
                '<div class="transition-[width] duration-500 ease-in-out">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 css 变量来设置自定义属性 -->",
                '<div class="transition-(--my-custom-property) duration-500 ease-in-out">',
                "  ...",
                "</div>",
                "",
                "<!-- 响应式设计 -->",
                '<div class="transition-none md:transition-all">',
                "  ...",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="tailwindcss-transition-behavior">
        <ContentCard title="transition-behavior">
          <ContentCard.Text>transition-behavior 用于控制 CSS 过渡的行为。</ContentCard.Text>
          <ContentCard.Paragraph title="内置 transition-behavior 类" id="tailwindcss-transition-behavior-classes">
            <CreateTable data_list={transition_behavior_classes_list} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="使用 transition-behavior 类" id="tailwindcss-transition-behavior-usage-classes">
            <ContentCard.Text>使用 transition-discrete 实用程序在更改具有离散值集的属性时启动过渡，例如从 hidden 更改为 block 的元素</ContentCard.Text>
            <ContentCard.Code language="html" code={['<div class="transition-opacity transition-discrete">', "  ...", "</div>"]} />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="tailwindcss-transition-duration">
        <ContentCard title="transition-duration">
          <ContentCard.Text>transition-duration 用于控制 CSS 过渡持续时间。</ContentCard.Text>
          <ContentCard.Paragraph title="内置 transition-duration 类" id="tailwindcss-transition-duration-classes">
            <CreateTable data_list={transition_duration_classes_list} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="使用 transition-duration 类" id="tailwindcss-transition-duration-usage-classes">
            <ContentCard.Code
              language="html"
              code={[
                '<div class="transition-opacity duration-500 ease-in-out">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 duration-[<value>] 设置过渡持续时间基于完全自定义的值 -->",
                '<div class="transition-opacity duration-[500ms] ease-in-out">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 css 变量来设置自定义属性 -->",
                '<div class="transition-opacity duration-(--my-custom-property) ease-in-out">',
                "  ...",
                "</div>",
                "",
                "<!-- 响应式设计 -->",
                '<div class="transition-opacity duration-500 ease-in-out md:duration-1000">',
                "  ...",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="tailwindcss-transition-timing-function">
        <ContentCard title="transition-timing-function">
          <ContentCard.Text>transition-timing-function 用于控制 CSS 过渡的速度曲线。</ContentCard.Text>
          <ContentCard.Paragraph title="内置 transition-timing-function 类" id="tailwindcss-transition-timing-function-classes">
            <CreateTable data_list={transition_timing_function_classes_list} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="使用 transition-timing-function 类" id="tailwindcss-transition-timing-function-usage-classes">
            <ContentCard.Code
              language="html"
              code={[
                '<div class="transition-opacity duration-500 ease-in-out">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 ease-[<value>] 设置过渡速度曲线基于完全自定义的值 -->",
                '<div class="transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 css 变量来设置自定义属性 -->",
                '<div class="transition-opacity duration-500 ease-(--my-custom-property)">',
                "  ...",
                "</div>",
                "",
                "<!-- 响应式设计 -->",
                '<div class="transition-opacity duration-500 ease-in-out md:ease-out">',
                "  ...",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="tailwindcss-transition-delay">
        <ContentCard title="transition-delay">
          <ContentCard.Text>transition-delay 用于控制 CSS 过渡的延迟时间。</ContentCard.Text>
          <ContentCard.Paragraph title="使用 transition-delay 类" id="tailwindcss-transition-delay-usage-classes">
            <ContentCard.Code
              language="html"
              code={[
                '<div class="transition-opacity duration-500 ease-in-out delay-500">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 delay-[<value>] 设置过渡延迟时间基于完全自定义的值 -->",
                '<div class="transition-opacity duration-500 ease-in-out delay-[500ms]">',
                "  ...",
                "</div>",
                "",
                "<!-- 使用 css 变量来设置自定义属性 -->",
                '<div class="transition-opacity duration-500 ease-in-out delay-(--my-custom-property)">',
                "  ...",
                "</div>",
                "",
                "<!-- 响应式设计 -->",
                '<div class="transition-opacity duration-500 ease-in-out delay-500 md:delay-1000">',
                "  ...",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard
        importForm={[
          { text: "官方文档 v4.1，transition-property", href: "https://tailwind.org.cn/docs/transition-property" },
          { text: "官方文档 v4.1，transition-behavior", href: "https://tailwind.org.cn/docs/transition-behavior" },
          { text: "官方文档 v4.1，transition-duration", href: "https://tailwind.org.cn/docs/transition-duration" },
          { text: "官方文档 v4.1，transition-timing-function", href: "https://tailwind.org.cn/docs/transition-timing-function" },
          { text: "官方文档 v4.1，transition-delay", href: "https://tailwind.org.cn/docs/transition-delay" },
        ]}
      />
    </Template>
  );
};

export default Transition;
