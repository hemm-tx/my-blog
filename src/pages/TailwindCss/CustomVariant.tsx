import { Template, ContentCard, DeclarationCard } from "@/components";

const CustomVariant = () => {
  return (
    <Template id="tailwindcss-custom-variant">
      <Template.Content id="tailwindcss-custom-variant-content">
        <ContentCard title="自定义变体">
          <ContentCard.Paragraph title="使用任意变体" id="tailwindcss-custom-variant-using-custom-variants">
            <ContentCard.Text>任意变体是表示选择器的格式字符串，用方括号括起来</ContentCard.Text>
            <ContentCard.Code
              language="html"
              code={[
                "<!-- 当 span 元素具有 primary 类时，将其文本颜色设置为蓝色 -->",
                "<div>",
                '  <span class="[&.primary]:text-[#0077cc] primary">This is a with primary class</span>',
                '  <span class="[&.primary]:text-[#0077cc]">This is a normal span</span>',
                "</div>",
                "",
                "<!-- 通过使用 > 来设置子元素样式 -->",
                '<div class="[&>span.primary]:text-[#0077cc]">',
                '  <span class="primary">This is a span with primary class</span>',
                "  <span>This is a normal span</span>",
                "</div>",
                "",
                "<!-- 通过使用 _ 来表示（空格键）设置所有后代元素 -->",
                '<div class="[&_span]:text-[#0077cc]">',
                "  <span>This is a span with primary class</span>",
                "  <div>",
                "    <span>This is a primary class span in a div</span>",
                "  </div>",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="自定义变体" id="tailwindcss-custom-variant-custom-variants">
            <ContentCard.Text>注册自定义变体可以让我们在 Tailwind CSS 中自定义自己的类名，并在不同的地方使用它们。</ContentCard.Text>
            <ContentCard.Text>使用 @custom-variant 指令创建自定义变体</ContentCard.Text>
            <ContentCard.Code language="css" code={['@custom-variant theme-midnight (&:where([data-theme="midnight"] *));']} />
            <ContentCard.Text>在 html 中使用 theme-midnight:&lt;utility&gt; 变体</ContentCard.Text>
            <ContentCard.Code
              code={['<div data-theme="midnight">', '  <div class="theme-midnight:bg-gray-900">This is a div with midnight theme</div>', "</div>"]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
        <DeclarationCard
          importForm={[
            {
              text: "内容借鉴出处：tailwindcss 官网文档",
              href: "https://tailwind.org.cn/docs/hover-focus-and-other-states#attribute-selectors",
            },
            {
              text: "tailwindcss 官方文档《添加自定义变体文档》",
              href: "https://tailwind.org.cn/docs/adding-custom-styles#adding-custom-variants",
            },
          ]}
        />
      </Template.Content>
    </Template>
  );
};

export default CustomVariant;
