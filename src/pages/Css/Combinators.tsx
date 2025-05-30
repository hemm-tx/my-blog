import { Template, ContentCard, DeclarationCard } from "@/components";

const Combinators = () => {
  return (
    <Template id="css-combinators">
      <Template.Content id="combinators">
        <ContentCard title="css 组合选择器">
          <ContentCard.Text>
            CSS 组合选择器是一种基于选择器的技术，它允许你将多个选择器组合在一起，形成一个更大的选择器。
            组合选择器可以帮助你更精确地控制元素的样式，并减少代码量。 常见的 CSS 组合选择器有以下几种：
          </ContentCard.Text>
          <ContentCard.List
            list={[
              "后代选择器（Descendant Selector）：（空格键） 允许您选择嵌套在另一个元素中的某个元素（不一定是直接的后代）",
              "子选择器（Child Selector）：（>） 允许您选择某个元素的直接子元素",
              "相邻兄弟选择器（Adjacent Sibling Selector）：（+） 允许您选择紧接着另一个元素的某个元素",
              "通用兄弟选择器（General Sibling Selector）：（~） 允许您选择某个元素之后的所有同级元素",
            ]}
          />
          <ContentCard.Note>
            注：相邻兄弟选择器和通用兄弟选择器只会
            <code className="text-red-500">
              <strong> 向后 </strong>
            </code>
            选择，DOM结构靠前的兄弟元素不在选择范围内。
          </ContentCard.Note>
          <ContentCard.Paragraph mt id="descendant-selector">
            后代选择器
          </ContentCard.Paragraph>
          <ContentCard.Code language="css" title="后代选择器" code={[".parent .child {", "  /* 样式 */", "}"]} />
          <ContentCard.Paragraph mt id="child-selector">
            子选择器
          </ContentCard.Paragraph>
          <ContentCard.Code language="css" title="子选择器" code={[".parent > .child {", "  /* 样式 */", "}"]} />
          <ContentCard.Paragraph mt id="adjacent-sibling-selector">
            相邻兄弟选择器
          </ContentCard.Paragraph>
          <ContentCard.Code language="css" title="相邻兄弟选择器" code={[".sibling + .sibling {", "  /* 样式 */", "}"]} />
          <ContentCard.Paragraph mt id="general-sibling-selector">
            通用兄弟选择器
          </ContentCard.Paragraph>
          <ContentCard.Code language="css" title="通用兄弟选择器" code={[".sibling ~ .sibling {", "  /* 样式 */", "}"]} />
        </ContentCard>
        <DeclarationCard title="文章声明" />
      </Template.Content>
    </Template>
  );
};

export default Combinators;
