import { Template, ContentCard, DeclarationCard } from "@/components";

const CreateFastapiProject = () => {
  return (
    <Template id="create-fastapi-project">
      <Template.Content id="create-fastapi-project-content">
        <ContentCard title="创建 FastAPI 项目">
          <ContentCard.Paragraph title="项目目录结构" id="project-structure">
            <ContentCard.Code
              code={[
                "my-blog/",
                "├── app/",
                "│   ├── __init__.py",
                "│   ├── main.py",
                "│   └── src/",
                "│       ├── __init__.py",
                "│       ├── db.py",
                "│       ├── models.py",
                "│       ├── routers/",
                "│       │   ├── __init__.py",
                "│       │   ├── example.py",
                "│       │   └── user.py",
                "│       └── utils/",
                "│           ├── dependencies.py",
                "│           └── __init__.py",
                "├── .dockerignore",
                "├── .env",
                "├── .gitignore",
                "├── Dockerfile",
                "├── requirements.txt",
                "└── README.md",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="main.py 文件" id="create-main-file">
            <ContentCard.Code
              language="python"
              title="app/main.py"
              code={[
                "from fastapi import FastAPI",
                "from fastapi.middleware.cors import CORSMiddleware",
                "",
                "# 导入路由",
                "from app.routers import example, user",
                "",
                "# 创建 FastAPI 实例",
                "app = FastAPI()",
                "",
                "# 配置 CORS",
                "app.add_middleware(",
                "   CORSMiddleware,",
                '   allow_origins=["*"],',
                "   allow_credentials=True,",
                '   allow_methods=["*"],',
                '   allow_headers=["*"],',
                ")",
                "",
                "# 注册路由",
                "app.include_router(example.router)",
                "app.include_router(user.router)",
                "",
                "# 主路由",
                '@app.get("/")',
                "async def root():",
                '   return {"message": "Hello World"}',
                "",
                'if __name__ == "__main__":',
                "   # 启动 FastAPI 实例",
                "   import uvicorn",
                '   uvicorn.run(app, host="0.0.0.0", port=8000)',
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建路由" id="create-router">
            <ContentCard.Text>创建 app/routers/user.py 文件</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="app/routers/user.py"
              code={[
                "from fastapi import APIRouter, status",
                "from pydantic import BaseModel",
                "",
                "# 创建路由实例",
                "# prefix: 路由前缀，即访问该 router 下的所有路由时，都必须要加上前缀",
                "# tags: 标签，用于在 OpenAPI 文档中显示",
                "# dependencies: 依赖，即该路由所依赖的其他路由",
                "# responses: 响应，用于自定义 HTTP 状态码的响应信息",
                "router = APIRouter(",
                '    prefix="/user",',
                '    tags=["user"],',
                "    dependencies=[],",
                '    responses={404: {"description": "Not found"}},',
                ")",
                "",
                "# 定义模型",
                "class UserInfo(BaseModel):",
                "    name: str",
                "    age: int",
                "",
                "# 注册路由",
                '@router.post("/")',
                "async def create_user(user: UserInfo):",
                "   # 处理创建用户逻辑",
                '   return {"status": status.HTTP_201_CREATED, "message": "User created successfully."}',
                "",
                '@router.get("/{user_id}")',
                "async def get_user(user_id: int):",
                "   # 处理获取用户逻辑",
                '   return {"status": status.HTTP_200_OK, "message": "User retrieved successfully."}',
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="添加认证用户的依赖函数" id="add-auth-dependency">
            <ContentCard.Text>创建 app/utils/dependencies.py 文件，用于处理依赖</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="app/utils/dependencies.py"
              code={[
                "from fastapi import Depends, HTTPException, status as HTTPStatus",
                "from fastapi.security import OAuth2PasswordBearer",
                "import jwt",
                "from jwt.exceptions import InvalidTokenError",
                "from pydantic import BaseModel",
                "",
                "# 定义 UserInfo 模型",
                "# 注意这里和前面 user.py 文件中的 UserInfo 模型是不同的",
                "class UserInfo(BaseModel):",
                "    username: str",
                "    password: str",
                "",
                "# 创建 Users 模拟数据库",
                "Users = [",
                '    UserInfo(username="johndoe", password="password1"),',
                '    UserInfo(username="jane", password="password2"),',
                '    UserInfo(username="admin", password="password3"),',
                "]",
                "",
                "def get_user(username: str):",
                "   # 处理获取用户逻辑",
                "   for user in Users:",
                "       if user.username == username:",
                "           return user",
                "   return None",
                "",
                "def authenticate_user(username: str, password: str):",
                "   # 处理用户认证逻辑",
                "   user = get_user(username)",
                "   if not user:",
                "       return False",
                "   if password != user.password:",
                "       return False",
                "   return user",
                "",
                "def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):",
                "   # 处理创建 token 逻辑",
                "   to_encode = data.copy()",
                "   if expires_delta:",
                "       expire = datetime.utcnow() + expires_delta",
                "   else:",
                "       expire = datetime.utcnow() + timedelta(minutes=15)",
                "   to_encode.update({'exp': expire})",
                "   encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)",
                "   return encoded_jwt",
                "",
                "# 使用 OAuth2 的 Password 流以及 Bearer 令牌（Token）。",
                '# tokenUrl="token" 指向的是暂未创建的相对 URL token。这个相对 URL 相当于 ./token。',
                "# 此设置将会要求客户端把 username 与 password 发送至 API 中指定的 URL：http://localhost:8000/token 。",
                'oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")',
                "",
                "async def get_current_user(token: str = Depends(oauth2_scheme)):",
                "   # 处理获取当前用户逻辑",
                "   credentials_exception = HTTPException(",
                "       status_code=HTTPStatus.HTTP_401_UNAUTHORIZED,",
                "       detail='Could not validate credentials',",
                "       headers={'WWW-Authenticate': 'Bearer'}",
                "   )",
                "",
                "   try:",
                "       payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])",
                "       # 在JWT 规范中，sub 键的值是令牌的主题。",
                "       username: str = payload.get('sub')",
                "       if username is None:",
                "           raise credentials_exception",
                "       token_data = TokenData(username=username)",
                "   except (InvalidTokenError, JWTError):",
                "       raise credentials_exception",
                "   user = get_user(token_data.username)",
                "   if user is None:",
                "       raise credentials_exception",
                "   return user",
              ]}
            />
            <ContentCard.Text>在 main.py 中增加 /token 路由，用于处理 OAuth2 的 Token 认证</ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="app/main.py"
              code={[
                "from fastapi import FastAPI",
                "",
                "# 导入路由",
                "from app.routers import example, user",
                "# 导入依赖",
                "from app.utils.dependencies import authenticate_user, create_access_token",
                "",
                "# 创建 FastAPI 实例",
                "app = FastAPI()",
                "",
                "# 配置 CORS",
                "app.add_middleware(",
                "   CORSMiddleware,",
                '   allow_origins=["*"],',
                "   allow_credentials=True,",
                '   allow_methods=["*"],',
                '   allow_headers=["*"],',
                ")",
                "",
                "# 注册路由",
                "app.include_router(example.router)",
                "app.include_router(user.router)",
                "",
                "# 主路由",
                '@app.get("/")',
                "async def root():",
                '   return {"message": "Hello World"}',
                "",
                '@app.post("/token")',
                "async def login(form_data: OAuth2PasswordRequestForm = Depends()):",
                "   # 处理 OAuth2 Token 认证逻辑",
                "   user = authenticate_user(form_data.username, form_data.password)",
                "   if not user:",
                "       raise HTTPException(status_code=400, detail='Incorrect username or password')",
                "   access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)",
                "   access_token = create_access_token(data={'sub': user.username}, expires_delta=access_token_expires)",
                "   return {'access_token': access_token, 'token_type': 'bearer'}",
                "",
                'if __name__ == "__main__":',
                "   # 启动 FastAPI 实例",
                "   import uvicorn",
                '   uvicorn.run(app, host="0.0.0.0", port=8000)',
              ]}
            />
            <ContentCard.Text>
              创建 app/routers/example.py 文件，给 router 添加 dependencies 依赖，这样在每次访问 /example 路由时，都会先执行 authenticate_user
              依赖，判断用户是否已登录。
            </ContentCard.Text>
            <ContentCard.Code
              language="python"
              title="app/routers/example.py"
              code={[
                "from fastapi import APIRouter",
                "from app.src.utils.dependencies import get_current_user, UserInfo",
                "from typing import Annotated",
                "",
                "# 创建路由实例",
                "router = APIRouter(",
                '   prefix="/example"',
                '   tags=["example"],',
                "   dependencies=[Depends(get_current_user)],",
                '   responses={404: {"description": "Not found"}},',
                ")",
                "",
                "# 注册路由",
                '@router.get("/")',
                "async def get_examples(current_user: Annotated[UserInfo, Depends(get_current_user)]):",
                "   # 通过 Annotated 可以获取到当前用户的 UserInfo 模型",
                "   print(current_user)",
                "   # 处理获取示例列表逻辑",
                '   return {"message": "Examples retrieved successfully."}',
                "",
                '@router.post("/")',
                "async def create_example():",
                "   # 处理创建示例逻辑",
                '   return {"message": "Example created successfully."}',
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Text>这样配置，一个 fastapi 项目就创建完成了。</ContentCard.Text>
          <ContentCard.Text>根据不同的项目需求，可以根据需要修改代码，比如添加数据库、日志、缓存等功能。</ContentCard.Text>
          <ContentCard.Text>创建的文件中，比如 .env , db.py , models.py 等文件，由于篇幅和模块不同的原因，将在后续的章节中体现。</ContentCard.Text>
        </ContentCard>
      </Template.Content>
      <DeclarationCard />
    </Template>
  );
};

export default CreateFastapiProject;
