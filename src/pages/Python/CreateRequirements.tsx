import { Template, ContentCard, DeclarationCard } from "@/components";

const Requirements = () => {
  return (
    <Template id="python-requirements">
      <Template.Content id="python-requirements-content">
        <ContentCard title="requirements.txt 文件的生成与安装">
          <ContentCard.Text>
            requirements.txt是定义项目依赖的python包，可通过工具生成。工具可以生成两种依赖包定义，一是项目依赖的python包，二是所在python环境安装的python包。
          </ContentCard.Text>
        </ContentCard>
      </Template.Content>
      <Template.Content id="python-requirements-generate-requirements-txt">
        <ContentCard title="生成 requirements.txt 文件">
          <ContentCard.Paragraph title="生成项目依赖包" id="generate-project-dependencies-requirements-txt">
            <ContentCard.Text>安装 pipreqs 工具</ContentCard.Text>
            <ContentCard.ShellCode code={["pip install pipreqs"]} />
            <ContentCard.Text>在项目根目录下执行命令</ContentCard.Text>
            <ContentCard.ShellCode code={["pipreqs ./"]} />
            <ContentCard.Text>若出现编码错误，可以在命令后加上 --encoding=utf8 参数</ContentCard.Text>
            <ContentCard.ShellCode code={["pipreqs ./ --encoding=utf8"]} />
            <ContentCard.Text>若文件已存在，可以使用 --force 参数强制覆盖</ContentCard.Text>
            <ContentCard.ShellCode code={["pipreqs ./ --encoding=utf8 --force"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="生成环境安装的 python 包" id="generate-environment-python-packages-requirements-txt">
            <ContentCard.Text>在项目根目录下执行命令</ContentCard.Text>
            <ContentCard.ShellCode code={["pip freeze > requirements.txt"]} />
            <ContentCard.Text>生成的 requirements.txt 文件中包含了当前 python 环境安装的所有 python 包，包括项目依赖的包和系统依赖的包。</ContentCard.Text>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="python-requirements-install-requirements-txt">
        <ContentCard title="安装 requirements.txt 文件">
          <ContentCard.Text>在项目根目录下执行命令</ContentCard.Text>
          <ContentCard.ShellCode code={["pip install -r requirements.txt"]} />
          <ContentCard.Text>若出现依赖包版本不兼容等错误，可尝试使用 --ignore-installed 参数忽略已安装的依赖包。</ContentCard.Text>
          <ContentCard.ShellCode code={["pip install -r requirements.txt --ignore-installed"]} />
          <ContentCard.Text>若出现编码错误，可以在命令后加上 --encoding=utf8 参数</ContentCard.Text>
          <ContentCard.ShellCode code={["pip install -r requirements.txt --encoding=utf8"]} />
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default Requirements;
