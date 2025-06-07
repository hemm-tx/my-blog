import { Template, ContentCard, DeclarationCard } from "@/components";

const IteratorAndGenerator = () => {
  return (
    <Template id="python-IteratorAndGenerator">
      <Template.Content id="python-IteratorAndGenerator-content">
        <ContentCard title="Python 迭代器与生成器">
          <ContentCard.Paragraph title="迭代器" id="python-IteratorAndGenerator-iterators">
            <ContentCard.Text>迭代器是一个可以记住遍历的位置的对象。</ContentCard.Text>
            <ContentCard.Text>迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。迭代器只能往前不会后退。</ContentCard.Text>
            <ContentCard.Text>迭代器有两个基本的方法：iter() 和 next()。</ContentCard.Text>
            <ContentCard.Text>使用 iter() 方法可以获取一个迭代器对象，而使用 next() 方法可以访问迭代器的下一个元素。</ContentCard.Text>
            <ContentCard.Text>Python 的内置函数 iter() 可以用来获取一个迭代器对象。</ContentCard.Text>
            <ContentCard.Text>Python 的 for 循环本质上就是通过不断调用 next() 方法来实现迭代。</ContentCard.Text>
            <ContentCard.Text>迭代器的好处是可以实现惰性计算，只有在需要计算下一个元素时才会计算，节省内存。</ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={[
                "# 创建数组并获取迭代器对象",
                "numbers = [1, 2, 3, 4, 5]",
                "it = iter(numbers)",
                "",
                "# 直接创建迭代器对象",
                "# numbers = range(1, 6)",
                "",
                "打印调试",
                "print(next(it)),  # Output: 1",
                "print(next(it)),  # Output: 2",
                "print(next(it)),  # Output: 3",
                "print(next(it)),  # Output: 4",
                "print(next(it)),  # Output: 5",
                "print(next(it)),  # Raises StopIteration exception",
              ]}
            />
            <ContentCard.Note>StopIteration 异常是当迭代器没有更多的值可返回时抛出的异常。</ContentCard.Note>
            <ContentCard.Text>进阶用法：</ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={[
                "student = {'name': 'John', 'key': 12345}",
                "classes = [",
                "  {'key': 12345, 'age': 18, 'score': 90},",
                "  {'key': 12346, 'age': 19, 'score': 85},",
                "  {'key': 12347, 'age': 20, 'score': 95}",
                "]",
                "",
                "# 使用 next() 方法获取学生信息",
                "student_info = next((s for s in classes if s['key'] == student['key']), None)",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="生成器" id="python-IteratorAndGenerator-generators">
            <ContentCard.Text>在 Python 中，使用了 yield 的函数被称为生成器（generator）。</ContentCard.Text>
            <ContentCard.Text>
              yield 是一个关键字，用于定义生成器函数，生成器函数是一种特殊的函数，可以在迭代过程中逐步产生值，而不是一次性返回所有结果。
            </ContentCard.Text>
            <ContentCard.Text>当在生成器函数中使用 yield 语句时，函数的执行将会暂停，并将 yield 后面的表达式作为当前迭代的值返回。</ContentCard.Text>
            <ContentCard.Text>
              每次调用生成器的 next() 方法或使用 for 循环进行迭代时，函数会从上次暂停的地方继续执行，直到再次遇到 yield
              语句。这样，生成器函数可以逐步产生值，而不需要一次性计算并返回所有结果。
            </ContentCard.Text>
            <ContentCard.Code
              language="python"
              code={[
                "def my_generator(n):",
                "  i = 0",
                "  while i < n:",
                "    yield i**2",
                "    i += 2",
                "",
                "for i in my_generator(5):",
                "  print(i)",
                "",
                "# yield 后面的表达式作为当前迭代的值返回，但是 yield 下面的表达式会在下一次迭代时执行",
                "# Output: 0",
                "# Output: 4",
                "# Output: 16",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
        <DeclarationCard />
      </Template.Content>
    </Template>
  );
};

export default IteratorAndGenerator;
