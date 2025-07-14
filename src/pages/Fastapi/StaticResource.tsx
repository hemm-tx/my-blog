import { Template, ContentCard, DeclarationCard } from "@/components";

const StaticResource = () => {
  return (
    <Template id="static-resource">
      <Template.Content id="static-resource-content">
        <ContentCard title="静态资源路径">
          <ContentCard.Paragraph title="基础用法" id="basic-usage">
            <ContentCard.Text>fastapi 项目中，使用 app.mount() 方法为项目添加静态资源路径，具体方法如下：</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="main.py"
              code={[
                "from fastapi import FastAPI",
                "from fastapi.staticfiles import StaticFiles",
                "",
                "app = FastAPI()",
                "",
                "# /static 为访问路径，即 127.0.0.1:8000/static",
                "# directory 为静态资源的路径（需要确保文件路径确实能访问到，尤其是使用 docker 打包的环境下）",
                "app.mount('/static', StaticFiles(directory='static'), name='static')",
                "",
                "if __name__ == '__main__':",
                "    import uvicorn",
                "    uvicorn.run(app, host='127.0.0.1', port=8000)",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="自定义静态文件服务类" id="custom-static-file-service-class">
            <ContentCard.Text>
              在部分场景中，可能需要在静态资源中添加 .js .css 等资源文件，这时可以使用自定义静态文件服务类来处理这些文件，确保相关文件使用正确的 MIME 类型。
            </ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="main.py"
              code={[
                "from fastapi import FastAPI",
                "from fastapi.staticfiles import StaticFiles",
                "from starlette.responses import FileResponse",
                "",
                "app = FastAPI()",
                "",
                "class CustomStaticFiles(StaticFiles):",
                "    async def get_response(self, path: str, scope):",
                "        response = await super().get_response(path, scope)",
                "",
                "        # 确保 PDF.js 相关文件使用正确的 MIME 类型",
                '        if path.endswith(".js") or path.endswith(".mjs"):',
                '            response.headers["Content-Type"] = "application/javascript"',
                '        elif path.endswith(".css"):',
                '            response.headers["Content-Type"] = "text/css"',
                '        elif path.endswith(".wasm"):',
                '            response.headers["Content-Type"] = "application/wasm"',
                "",
                "         # 添加安全头",
                '         response.headers["X-Content-Type-Options"] = "nosniff"',
                '         response.headers["Content-Disposition"] = "inline"',
                "         return response",
                "",
                "app.mount('/static', CustomStaticFiles(directory='static'), name='static')",
                "",
                "if __name__ == '__main__':",
                "    import uvicorn",
                "    uvicorn.run(app, host='127.0.0.1', port=8000)",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="静态资源路径的限制" id="static-resource-path-limitation">
            <ContentCard.Text>限制 static 目录下的文件类型，可以防止恶意文件上传，例如只允许上传图片、视频等文件。</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="main.py"
              code={[
                "from fastapi import FastAPI, HTTPException, status as HTTPStatus",
                "from fastapi.staticfiles import StaticFiles",
                "from fastapi.middleware.cors import CORSMiddleware",
                "",
                "app = FastAPI()",
                "",
                "app.add_middleware(",
                "    CORSMiddleware,",
                "    allow_origins=['*'],",
                "    allow_credentials=True,",
                "    allow_methods=['*'],",
                "    allow_headers=['*'],",
                ")",
                "",
                "class CustomStaticFiles(StaticFiles):",
                "    async def get_response(self, path: str, scope):",
                "        response = await super().get_response(path, scope)",
                "",
                "        # 限制上传文件类型",
                '        if not (path.endswith(".jpg") or path.endswith(".jpeg") or path.endswith(".png") or path.endswith(".gif")):',
                '            raise HTTPException(status_code=HTTPStatus.HTTP_403_FORBIDDEN, detail="Forbidden")',
                "",
                "         # 添加安全头",
                '         response.headers["X-Content-Type-Options"] = "nosniff"',
                '         response.headers["Content-Disposition"] = "inline"',
                "         return response",
                "",
                "app.mount('/static', CustomStaticFiles(directory='static'), name='static')",
                "",
                "if __name__ == '__main__':",
                "    import uvicorn",
                "    uvicorn.run(app, host='127.0.0.1', port=8000)",
              ]}
            />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default StaticResource;
