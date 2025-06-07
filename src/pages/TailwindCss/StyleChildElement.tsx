import { Template, ContentCard, DeclarationCard } from "@/components";

const StyleChildElement = () => {
  return (
    <Template id="tailwindcss-style-child-element">
      <Template.Content id="tailwindcss-style-child-element-content-container">
        <ContentCard title="样式化子元素">
          <ContentCard.Paragraph title="样式化直接子元素" id="tailwindcss-style-child-element-child">
            <ContentCard.Text>虽然通常最好将实用程序类直接放在子元素上，但在需要样式化无法控制的直接子元素的情况下，可以使用 * 变体</ContentCard.Text>
            <ContentCard.Code
              language="html"
              code={[
                "{/* 直接使用 */}",
                '<ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5">',
                "  <li>Item 1</li>",
                "  <li>Item 2</li>",
                "  <li>Item 3</li>",
                "</ul>",
                "",
                "{/* 配合其他选择器使用 */}",
                '<div class="*:[span]:text-red-500">',
                "  <p>This is a p</p>",
                "  <span>This is a span</span>",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="样式化后代元素" id="tailwindcss-style-child-element-desc">
            <ContentCard.Text>与 * 类似，** 变体可用于样式化元素的子元素。</ContentCard.Text>
            <ContentCard.Code
              language="html"
              code={[
                "{/* 样式化后代元素 */}",
                '<div class="**:data-test-li:text-red-500">',
                "  <ul>",
                "  <li data-test-li>Item 1</li>",
                "  <li data-test-li>Item 2</li>",
                "  <li data-test-li>Item 3</li>",
                "  </ul>",
                "</div>",
                "",
                "{/* 配合其他选择器使用 */}",
                '<div class="**:[.li-1]:text-red-500 **:[.li-2]:text-green-500 **:[.li-3]:text-blue-500">',
                "  <ul>",
                '  <li class="li-1">Item 1</li>',
                '  <li class="li-2">Item 2</li>',
                '  <li class="li-3">Item 3</li>',
                "  </ul>",
                "</div>",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
        <DeclarationCard />
      </Template.Content>
    </Template>
  );
};

export default StyleChildElement;
