import { Template, ContentCard, DeclarationCard } from "@/components";

const Decorator = () => {
  return (
    <Template id="python-decorator">
      <Template.Content id="python-decorator-content">
        <ContentCard title="Python 装饰器">
          <ContentCard.Text>装饰器（decorators）是 Python 中的一种高级功能，它允许你动态地修改函数或类的行为。</ContentCard.Text>
          <ContentCard.Text>装饰器是一种函数，它接受一个函数作为参数，并返回一个新的函数或修改原来的函数。</ContentCard.Text>
          <ContentCard.Paragraph title="基础语法" id="python-decorator-basic-syntax">
            <ContentCard.Code
              language="python"
              code={[
                "def decorator_function(func):",
                "   def wrapper_function(*args, **kwargs):",
                "       # Do something before the function is called",
                "       result = func(*args, **kwargs)",
                "       # Do something after the function is called",
                "       return result",
                "   return wrapper_function",
                "",
                "# 使用装饰器",
                "@decorator_function",
                "def function_to_be_decorated():",
                "   pass  # Function code",
                "",
                "# 效果等同于",
                "function_to_be_decorated = decorator_function(function_to_be_decorated)",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="示例" id="python-decorator-example">
            <ContentCard.Code
              language="python"
              code={[
                "def example_decorator(func):",
                "    def wrapper(*args, **kwargs):",
                '        print("Before function call")',
                "        result = func(*args, **kwargs)",
                '        print("After function call")',
                "        return result",
                "    return wrapper",
                "",
                "@example_decorator",
                "def say_hello(name):",
                '   print("Hello, " + name + "!")',
                "",
                'print(say_hello("John"))',
                "",
                "# 输出结果",
                "# Output: Before function call",
                "# Output: Hello, John!",
                "# Output: After function call",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default Decorator;
