import { Template, ContentCard, DeclarationCard } from "@/components";

const CssSelector = () => {
  return (
    <Template id="css-selector">
      <Template.Content id="css-selector-content">
        <ContentCard title="CSS 选择器">
          <ContentCard.Text>
            CSS 选择器是用来选择 HTML 元素的一种机制。CSS 选择器可以帮助我们快速地定位到我们想要的元素，并对其进行样式设置。CSS 选择器可以分为四种类型：
          </ContentCard.Text>
          <ContentCard.List list={["标签选择器", "类选择器", "ID 选择器", "属性选择器"]} />
          <ContentCard.Text>下面我们将介绍这四种 CSS 选择器的语法以及用法。</ContentCard.Text>
          <ContentCard.Paragraph title="标签选择器" id="css-selector-tag-selector">
            <ContentCard.Text>
              标签选择器可以选择 HTML 文档中所有具有指定标签的元素。例如，我们可以使用 <code>div</code> 标签选择器来选择所有 <code>&lt;div&gt;</code> 元素。
            </ContentCard.Text>
            <ContentCard.Code
              language="html + css"
              title="标签选择器"
              code={["{/* html */}", "<div>This is a div element</div>", "", "/* css */", "div {", "  background-color: red;", "}"]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="类选择器" id="css-selector-class-selector">
            <ContentCard.Text>
              类选择器可以选择 HTML 文档中具有指定类的元素。例如，我们可以使用 <code>.class-name</code> 类选择器来选择所有具有 <code>class="class-name"</code>{" "}
              属性的元素。
            </ContentCard.Text>
            <ContentCard.Code
              language="html + css"
              title="类选择器"
              code={[
                "{/* html */}",
                "<div class='class-name'>This is a div element with class</div>",
                "",
                "/* css */",
                ".class-name {",
                "  background-color: blue;",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="ID 选择器" id="css-selector-id-selector">
            <ContentCard.Text>
              ID 选择器可以选择 HTML 文档中具有指定 ID 的元素。例如，我们可以使用 <code>#id-name</code> ID 选择器来选择所有具有 <code>id="id-name"</code>{" "}
              属性的元素。
            </ContentCard.Text>
            <ContentCard.Code
              language="html + css"
              title="ID 选择器"
              code={["{/* html */}", "<div id='id-name'>This is a div element with id</div>", "", "/* css */", "#id-name {", "  background-color: green;", "}"]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="属性选择器" id="css-selector-attribute-selector">
            <ContentCard.Text>
              属性选择器可以选择 HTML 文档中具有指定属性的元素。例如，我们可以使用 <code>[attribute]</code> 属性选择器来选择所有具有指定属性的元素。
            </ContentCard.Text>
            <ContentCard.Code
              language="html + css"
              title="属性选择器"
              code={[
                "{/* html */}",
                "<div data-name='John'>This is a div element with data-name attribute</div>",
                "",
                "/* css */",
                "[data-name] {",
                "  background-color: yellow;",
                "}",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Text>
            除了以上四种 CSS 选择器，还有一些其他的选择器，例如子选择器、后代选择器、相邻兄弟选择器等，但这些选择器的语法和用法与以上四种选择器大体相同。
          </ContentCard.Text>
          <DeclarationCard title="文章声明" />
        </ContentCard>
      </Template.Content>
    </Template>
  );
};

export default CssSelector;
