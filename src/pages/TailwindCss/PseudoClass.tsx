import { Template, ContentCard, DeclarationCard } from "@/components";
const PseudoClass = () => {
  return (
    <Template id="tailwindcss-pseudo-class">
      <Template.Content id="tailwindcss-pseudo-class-content">
        <ContentCard title="伪类 伪元素">
          <ContentCard.Paragraph id="tailwindcss-pseudo-class-content-pseudo-class">伪类</ContentCard.Paragraph>
          <ContentCard.Text>伪类选择器是指那些以:开头的选择器，用于描述文档中某些元素的状态或行为，常见的伪类有：</ContentCard.Text>
          <ContentCard.List
            list={[
              "active: 鼠标按下时",
              "focus: 获得焦点时",
              "hover: 鼠标悬停时",
              "disabled: 禁用状态",
              "checked: 选中状态",
              "nth-child(n): 选择第n个子元素",
              "nth-last-child(n): 选择倒数第n个子元素",
              "first-child: 选择第一个子元素",
              "last-child: 选择最后一个子元素",
              "not(selector): 选择不匹配selector的元素",
            ]}
          />
        </ContentCard>
        <ContentCard.Code
          language="html"
          title="HTML"
          code={[
            "{ /* :hover */ }",
            '<a href="#" class="text-blue-500 hover:text-blue-800">Hover over me</a>',
            "",
            "{ /* :focus */ }",
            '<input type="text" class="focus:outline-none" placeholder="Focus me">',
            "",
            "{ /* :disabled */ }",
            '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50">Disabled button</button>',
            "",
            "{ /* :nth-child(n) */ }",
            '<ul class="list-disc pl-8 nth-[2n+1]:bg-gray-200">',
            "  <li>Item 1</li>",
            "  <li>Item 2</li>",
            "  <li>Item 3</li>",
            "  <li>Item 4</li>",
            "  <li>Item 5</li>",
            "</ul>",
          ]}
        />
        <ContentCard.Paragraph mt id="tailwindcss-pseudo-class-content-pseudo-element">
          伪元素
        </ContentCard.Paragraph>
        <ContentCard.Text>伪元素选择器是指那些以::开头的选择器，用于描述文档中某些元素的子元素的状态或行为，常见的伪元素有：</ContentCard.Text>
        <ContentCard.List
          list={[
            "before: 在元素之前插入内容",
            "after: 在元素之后插入内容",
            "first-line: 选择第一行内容",
            "first-letter: 选择第一个字母",
            "selection: 选择被选中的内容",
          ]}
        />
        <ContentCard.Code
          language="html"
          title="HTML"
          code={[
            "{ /* ::before */ }",
            '<div className="flex flex-row items-center before:bg-red-200 before:p-2 before:rounded-md before:shadow-md before:w-4 before:h-2 before:m-2 before:content-center before:text-center before:font-bold before:text-lg before:text-gray-500">',
            "  This is a paragraph with a before pseudo-element.",
            "</div>",
            "",
            "{ /* ::after */ }",
            '<div className="flex flex-row items-center after:bg-red-200 after:p-2 after:rounded-md after:shadow-md after:w-4 after:h-2 after:m-2 after:content-center after:text-center after:font-bold after:text-lg after:text-gray-500">',
            "  This is a paragraph with a after pseudo-element.",
            "</div>",
            "",
            "{ /* ::first-line */ }",
            '<p class="first-line:text-red-500 first-line:text-2xl">',
            "  This is a paragraph with a first line pseudo-element.",
            "  <br/>",
            "  This is the second line of the paragraph.",
            "</p>",
            "",
            "{ /* ::first-letter */ }",
            '<p class="first-letter:text-red-500 first-letter:uppercase">this is a paragraph with a first letter pseudo-element.</p>',
            "",
            "{ /* ::selection */ }",
            '<p class="text-gray-500">This is a paragraph with a selection pseudo-element.</p>',
            '<p class="selection:text-gray-500 selection:bg-amber-500">This is a paragraph with a selection pseudo-element.</p>',
          ]}
        />
      </Template.Content>
      <DeclarationCard title="文章声明" />
    </Template>
  );
};

export default PseudoClass;
