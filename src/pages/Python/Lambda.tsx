import { Template, ContentCard, DeclarationCard } from "@/components";

const Lambda = () => {
  return (
    <Template id="python-lambda">
      <Template.Content id="python-lambda-content">
        <ContentCard title="Python lambda 函数">
          <ContentCard.Text>Python 使用 lambda 来创建匿名函数。</ContentCard.Text>
          <ContentCard.Text>
            lambda 函数通常用于编写简单的、单行的函数，通常在需要函数作为参数传递的情况下使用，例如在 map()、filter()、reduce() 等函数中。
          </ContentCard.Text>
          <ContentCard.Paragraph title="lambda 函数的语法" id="python-lambda-syntax">
            <ContentCard.Code language="python" code={["lambda arguments: expression"]} />
            <ContentCard.List
              list={["arguments 是参数列表，可以包含零个或多个参数，但必须在冒号(:)前指定。", "expression 表达式，用于计算并返回函数的结果。"]}
            />
            <ContentCard.Text>示例：</ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={["func = lambda x: x**2", "func(2)", "输出：4", "", "func_1 = lambda x, y: x+y", "func_1(2, 3)", "输出：5"]}
            />
            <ContentCard.Text>配合 map() 函数使用：</ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={["numbers = [1, 2, 3, 4, 5]", "result = list(map(lambda x: x**2, numbers))", "print(result)", "", "输出：[1, 4, 9, 16, 25]"]}
            />
            <ContentCard.Text>配合 filter() 函数使用：</ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={["numbers = [1, 2, 3, 4, 5]", "result = list(filter(lambda x: x%2 == 0, numbers))", "print(result)", "", "输出：[2, 4]"]}
            />
            <ContentCard.Text>配合 reduce() 函数使用：</ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={[
                "from functools import reduce",
                "",
                "numbers = [1, 2, 3, 4, 5]",
                "result = reduce(lambda x, y: x+y, numbers)",
                "print(result)",
                "",
                "输出：15",
              ]}
            />
            <ContentCard.Note>注意：lambda 函数不能使用 return 语句，只能使用表达式来计算并返回结果。</ContentCard.Note>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default Lambda;
