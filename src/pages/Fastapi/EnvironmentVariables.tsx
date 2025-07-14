import { Template, ContentCard, DeclarationCard } from "@/components";

const EnvironmentVariables = () => {
  return (
    <Template id="EnvironmentVariables">
      <Template.Content id="EnvironmentVariables-content">
        <ContentCard title="环境变量">
          <ContentCard.Paragraph title="定义环境变量" id="define-environment-variables">
            <ContentCard.Text>在项目的 根目录下创建 .env 文件，并在其中添加环境变量。</ContentCard.Text>
            <ContentCard.Code
              language="bash"
              title=".env"
              code={["PORT=8000", "DATABASE_URL=mysql://user:password@localhost/database", "SECRET_KEY=secret_key_here"]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="加载环境变量" id="load-environment-variables">
            <ContentCard.Text>在 src/setting.py 文件中，使用 dotenv 库加载环境变量，并通过创建 Setting 类统一导出。</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="src/setting.py"
              code={[
                "import os",
                "from dotenv import load_dotenv",
                "",
                "load_dotenv()",
                "",
                "class Setting:",
                "    PORT = os.getenv('PORT')",
                "    DATABASE_URL = os.getenv('DATABASE_URL')",
                "    SECRET_KEY = os.getenv('SECRET_KEY')",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="使用环境变量" id="use-environment-variables">
            <ContentCard.Text>在项目的其他文件中，通过导入 Setting 类，即可使用环境变量。</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="main.py"
              code={[
                "from fastapi import FastAPIg",
                "from src.setting import Setting",
                "",
                "app = FastAPI()",
                "cfg = Setting()",
                "",
                "if __name__ == '__main__':",
                "    import uvicorn",
                "    uvicorn.run(app, host='127.0.0.1', port=cfg.PORT)",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default EnvironmentVariables;
