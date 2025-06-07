import { ContentCard, DeclarationCard, Template } from "@/components";

const Pyinstaller = () => {
  return (
    <Template id="python-pyinstaller">
      <Template.Content id="python-pyinstaller-content">
        <ContentCard title="安装、使用 Pyinstaller">
          <ContentCard.Text>
            PyInstaller 将 Python 应用程序及其所有依赖项捆绑到一个包中。 用户可以运行打包的应用程序，而无需安装 Python 解释器或任何模块。 PyInstaller 支持
            Python 3.8 及更高版本，并正确捆绑了许多主要的 Python 包 例如 numpy、matplotlib、PyQt、wxPython 等。
          </ContentCard.Text>
          <ContentCard.Paragraph title="安装 Pyinstaller" id="python-pyinstaller-content-install">
            <ContentCard.Text>在控制台中运行以下命令安装 Pyinstaller：</ContentCard.Text>
            <ContentCard.ShellCode code={["pip install pyinstaller"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="打包 python 程序" id="python-pyinstaller-content-usage">
            <ContentCard.Text>在控制台中运行以下命令打包 python 程序：</ContentCard.Text>
            <ContentCard.ShellCode code={["pyinstaller your_python_file.py"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="生成的文件" id="python-pyinstaller-content-result">
            <ContentCard.Text>Pyinstaller 会在当前目录下生成一个 dist 文件夹，里面包含打包好的可执行文件。</ContentCard.Text>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="python-pyinstaller-example">
        <ContentCard title="示例">
          <ContentCard.Text>假设 Python 项目目录结构如下：</ContentCard.Text>
          <ContentCard.Code
            code={[
              "project/",
              "├── app.py               # 主程序文件",
              "├── src/                 # 源代码文件夹",
              "│   ├── data/            # 存放附件",
              "│   │   └── config.json  # 配置文件",
              "│   └── assets/          # 资源文件夹",
              "│       └── app.ico      # 应用程序图标",
              "└── requirements.txt     # 依赖文件",
            ]}
          />
          <ContentCard.Paragraph title="最基础打包命令" id="python-pyinstaller-example-basic">
            <ContentCard.Text>使用 Pyinstaller 打包 app.py：</ContentCard.Text>
            <ContentCard.ShellCode code={["pyinstaller --onefile app.py"]} />
            <ContentCard.Note>--onefile 参数告诉 PyInstaller 将所有内容打包到一个独立的二进制文件中。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="添加图标" id="python-pyinstaller-example-add-icon">
            <ContentCard.Text>使用 Pyinstaller 打包 app.py，并添加图标：</ContentCard.Text>
            <ContentCard.ShellCode code={['pyinstaller --onefile --icon="src/assets/app.ico app.py"']} />
            <ContentCard.Note>--icon 参数指定图标文件路径和名称。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="添加数据文件" id="python-pyinstaller-example-add-data">
            <ContentCard.Text>使用 Pyinstaller 打包 app.py，并添加附件文件 config.json：</ContentCard.Text>
            <ContentCard.ShellCode code={['pyinstaller --onefile --add-data="src/data/config.json;src/data" app.py']} />
            <ContentCard.Note>--add-data 参数指定源路径和目标路径。</ContentCard.Note>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="添加所有文件" id="python-pyinstaller-example-add-all">
            <ContentCard.Text>使用 Pyinstaller 打包 app.py，并添加所有文件：</ContentCard.Text>
            <ContentCard.ShellCode code={['pyinstaller --onefile --add-data="src;src" --icon="src/assets/app.ico app.py" app.py']} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="注意" id="python-pyinstaller-example-note">
            <ContentCard.List
              list={[
                "-n， --name 要分配给捆绑应用程序和 spec 文件的名称。",
                "--onefile：打包成单个二进制文件。",
                "--add-data：添加附件文件。",
                "--icon：添加图标文件。",
                "在 windows 中，源路径和目标路径使用分号 ; 分隔。",
                "在 Linux 和 macOS 中，使用冒号 : 分隔。",
                "-F 创建一个绑定的可执行文件。",
                "-w 打包成一个无控制台窗口的可执行文件。",
                " --hidden-import， --hiddenimport 隐藏导入的模块。",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard
        importForm={[
          {
            text: "更多参数请参考官方文档。",
            href: "https://pyinstaller.org/en/stable/usage.html",
          },
        ]}
      />
    </Template>
  );
};

export default Pyinstaller;
