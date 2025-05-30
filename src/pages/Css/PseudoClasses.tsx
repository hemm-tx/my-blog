import { Template, ContentCard, DeclarationCard } from "@/components";

const PseudoClasses = () => {
  return (
    <Template id="css-pseudo-classes">
      <Template.Content id="css-pseudo-classes-content">
        <ContentCard title="伪类，伪元素选择器">
          <ContentCard.Text>
            CSS 伪类和伪元素是 CSS 的高级功能，它们允许你为某些选择器添加特殊的效果。伪类用于向某些元素添加特殊的效果，如 :hover、:active、:focus
            等；伪元素用于创建出类似于元素的效果，如 ::before、::after 等。
          </ContentCard.Text>
          <ContentCard.Paragraph id="css-pseudo-classes-pseudo-classes">伪类</ContentCard.Paragraph>
          <ContentCard.Text>
            伪类用于向某些元素添加特殊的效果，如 :hover、:active、:focus 等。这些伪类会在用户对元素做出特定行为时触发，如悬停、点击、聚焦等。 常用的伪类有：
          </ContentCard.Text>
          <ContentCard.List
            list={[
              ":active：当用户激活元素时触发，如按钮被点击、输入框获得焦点等。",
              ":focus：当元素获得焦点时触发，如输入框获得焦点、按钮获得焦点等。",
              ":hover：当用户将鼠标悬停在元素上时触发，如链接、按钮等。",
              ":link：当用户未访问页面时触发，如未被访问的链接。",
              ":visited：当用户访问页面时触发，如已被访问的链接。",
              ":first-child：选择元素的第一个子元素。",
              ":last-child：选择元素的最后一个子元素。",
              ":nth-child(n)：选择元素的第 n 个子元素。",
              ":nth-last-child(n)：选择元素的倒数第 n 个子元素。",
              ":first-of-type：选择元素的第一个同类型子元素。",
              ":last-of-type：选择元素的最后一个同类型子元素。",
              ":nth-of-type(n)：选择元素的第 n 个同类型子元素。",
              ":nth-last-of-type(n)：选择元素的倒数第 n 个同类型子元素。",
              ":only-child：选择元素的唯一子元素。",
              ":only-of-type：选择元素的唯一同类型子元素。",
              ":empty：选择没有子元素的元素。",
              ":target：选择当前活动的目标元素（锚点）。",
              ":enabled：选择启用的表单元素。",
              ":disabled：选择禁用的表单元素。",
              ":checked：选择选中的表单元素。",
              ":not(selector)：选择不匹配指定选择器的元素。",
            ]}
          />
          <ContentCard.Paragraph id="css-pseudo-classes-pseudo-elements">伪元素</ContentCard.Paragraph>
          <ContentCard.Text>
            伪元素用于创建出类似于元素的效果，如 ::before、::after 等。这些伪元素可以用来为元素的某些部分添加样式，如插入内容、创建边框、背景等。
            常用的伪元素有：
          </ContentCard.Text>
          <ContentCard.List
            list={[
              "::before：在元素之前插入内容。",
              "::after：在元素之后插入内容。",
              "::first-line：选择元素的第一行。",
              "::first-letter：选择元素的第一个字母。",
              "::selection：选择用户选中元素的部分。",
              "::backdrop：选择背景的部分。",
            ]}
          />
          <ContentCard.Text>
            除了上面介绍的伪类和伪元素，CSS 还提供了其他伪类和伪元素，如 :lang、:not、:nth-child、:nth-last-child
            等。这些伪类和伪元素的用法和用途各不相同，需要根据具体的场景和需求来选择使用。
          </ContentCard.Text>
        </ContentCard>
        <DeclarationCard
          title="文章声明"
          importForm={[
            { text: "内容借鉴： CSS 选择器，一篇就够了。", href: "https://segmentfault.com/a/1190000013424772" },
            { text: "内容借鉴： 相邻兄弟选择器（+）、子选择器（>）、兄弟选择器（~）等用法。", href: "https://segmentfault.com/a/1190000016563980#item-11-3" },
          ]}
        />
      </Template.Content>
    </Template>
  );
};

export default PseudoClasses;
