import { ContentCard, DeclarationCard, Template } from "@/components";

const WrapperAxios = () => {
  return (
    <Template id="wrapper-axios-content-container">
      <Template.Content id="wrapper-axios-content">
        <ContentCard title="封装 Axios 请求">
          <ContentCard.Paragraph id="wrapper-axios-content-0">封装请求拦截器和响应拦截器</ContentCard.Paragraph>
          <ContentCard.Text>安装 axios.js 库</ContentCard.Text>
          <ContentCard.ShellCode code={["npm install axios"]} />
          <ContentCard.Text>创建 status.ts 文件，用于管理全局响应的状态码和错误信息。</ContentCard.Text>
          <ContentCard.Code
            language="typescript"
            title="status.ts"
            code={[
              "export const showMessage = (status: number | string): string => {",
              "  let message: string;",
              "  switch (status) {",
              "    case 400:",
              "      message = '请求错误(400)';",
              "      break;",
              "    case 401:",
              "      message = '未授权，请重新登录(401)';",
              "      break;",
              "    case 403:",
              "      message = '拒绝访问(403)';",
              "      break;",
              "    case 404:",
              "      message = '请求出错(404)';",
              "      break;",
              "    case 408:",
              "      message = '请求超时(408)';",
              "      break;",
              "    case 500:",
              "      message = '服务器错误(500)';",
              "      break;",
              "    case 501:",
              "      message = '服务未实现(501)';",
              "      break;",
              "    case 502:",
              "      message = '网络错误(502)';",
              "      break;",
              "    case 503:",
              "      message = '服务不可用(503)';",
              "      break;",
              "    case 504:",
              "      message = '网络超时(504)';",
              "      break;",
              "    case 505:",
              "      message = 'HTTP版本不受支持(505)';",
              "      break;",
              "    default:",
              "      message = `连接出错(${status})!`;",
              "  }",
              "  return `${message}，请检查网络或联系管理员！`;",
              "};",
            ]}
          />
          <ContentCard.Text>创建 useRequest.ts 文件，用于封装 Axios 请求。</ContentCard.Text>
          <ContentCard.Code
            language="typescript"
            title="useRequest.ts"
            code={[
              "import axios from 'axios';",
              "",
              "const instance = axios.create({",
              "  // 这里是将请求的 baseURL 放入环境变量中，方便在不同环境下切换",
              "  baseURL: import.meta.env.VITE_API_URL,",
              "  timeout: +import.meta.env.VITE_API_TIMEOUT,",
              "",
              "  // 这里请求的 headers 定义，可以根据实际情况进行修改",
              "  // 也可以和上面的 baseURL 一样放入环境变量中",
              "  headers: {",
              "    'Source-Client': 'PC-web',",
              "  },",
              "});",
              "",
              "// 封装请求拦截器，在请求前添加 token 信息",
              "instance.interceptors.request.use((_config) => {",
              "  // 由于没有后端信息，暂时先用一个假的 token 信息",
              "  const userInfo = { access_token: '', token_type: 'Bearer' };",
              "",
              "  const { access_token, token_type } = userInfo;",
              "  if (access_token !== '' && token_type !== '') {",
              "    _config.headers.Authorization = `${token_type} ${access_token}`;",
              "  }",
              "  return _config;",
              "});",
              "",
              "// 封装响应拦截器，在响应后统一处理错误信息",
              "instance.interceptors.response.use(",
              "  (response) => response.data,",
              "  (error) => {",
              "    throw error;",
              "  }",
              ");",
              "",
              "// 封装请求方法",
              "export async function request(",
              "  url: string = '',",
              "  params: { [key: string]: unknown } = {},",
              "  method: 'GET' | 'POST' | 'OPTIONS' = 'GET',",
              "  headers: { [key: string]: string } = {}",
              ") {",
              "  return new Promise((resolve, reject) => {",
              "    let promise;",
              "    instance.defaults.headers = { ...instance.defaults.headers, ...headers };",
              "",
              "    if (method === 'GET') promise = instance({ url, params });",
              "    else if (method === 'POST') promise = instance({ url, data: params, method: 'POST' });",
              "    else promise = instance({ url, method: 'OPTIONS' });",
              "",
              "    promise.then((res) => resolve(res)).catch((err) => reject(err));",
              "  });",
              "}",
            ]}
          />
          <ContentCard.Text>
            一般情况下，像上面这样封装就已经够用了，但是 react 由于不像 vue 那样可以在普通的 js 文件中使用 hooks ，所以需要在这个基础上再进行一层封装。
            我们需要将其封装成组件，以组件的形式去调用 use 开头的 hooks 函数，这样就可以在 react 组件中使用 Axios 请求了。
          </ContentCard.Text>
          <ContentCard.Paragraph mt id="wrapper-axios-content-1">
            封装 Axios 请求组件
          </ContentCard.Paragraph>
          <ContentCard.Text>在 useRequest.ts 文件中添加代码</ContentCard.Text>
          <ContentCard.Code
            language="typescript"
            title="useRequest.ts"
            code={[
              "import { useNavigate } from 'react-router-dom';",
              "import { useRef, useEffect } from 'react';",
              "import { showMessage } from './status.ts';",
              "import { message, Modal } from 'antd';",
              "",
              "export function useAxiosNavigation() {",
              "  const navRef = useRef(useNavigate());",
              "",
              "  useEffect(() => {",
              "    const interceptor = instance.interceptors.response.use(",
              "      (response) => response,",
              "      (error) => {",
              "        switch (error?.response?.status) {",
              "          // 这里可以根据实际情况进行修改",
              "          // 401 代表登录失效，需要弹窗提示用户重新登录",
              "          case 401:",
              "            // 这里调用的 Modal 是 antd 的 Modal 组件，如有其他需要请另行修改，这里只是举例",
              "            Modal.info({",
              "              title: '登录失效',",
              "              content: '登录已失效，请重新登录',",
              "              onOk: () => navRef.current('/login'),",
              "            });",
              "            break;",
              "          // 其他情况可以根据实际情况进行处理，我这里是调用了前面封装好的 showMessage 函数，弹窗提示用户",
              "          default:",
              "            // 这里调用的 message 是 antd 的 message 组件，如有其他需要请另行修改，这里只是举例",
              "            message.warning(showMessage(error.response.status));",
              "        }",
              "        return Promise.reject(error);",
              "      }",
              "    );",
              "",
              "    return () => {",
              "      instance.interceptors.response.eject(interceptor);",
              "    };",
              "  }, []);",
              "}",
            ]}
          />
          <ContentCard.Text>创建 AxiosNavigation.ts 文件，用于管理 Axios 请求的封装。</ContentCard.Text>
          <ContentCard.Code
            language="typescript"
            title="AxiosNavigation.ts"
            code={[
              "import type { ReactNode, FC } from 'react';",
              "// 这里是文件路径在 src/api/useRequest.ts 中，由于已经设置了路径别名，所以通过 @/api/useRequest 即可引入",
              "import { useAxiosNavigation } from '@/api/useRequest';",
              "",
              "interface AxiosNavigationProps {",
              "  children: ReactNode;",
              "}",
              "",
              "// 将 useAxiosNavigation 在组件中调用，同时将其包裹在组件中导出，即可完成 Axios 请求的封装",
              "export const AxiosNavigation: FC<AxiosNavigationProps> = ({ children }) => {",
              "  useAxiosNavigation();",
              "  return <>{children}</>;",
              "};",
            ]}
          />
          <ContentCard.Paragraph mt id="wrapper-axios-content-2">
            使用 AxiosNavigation 组件
          </ContentCard.Paragraph>
          <ContentCard.Text>在 App.tsx 文件中使用 AxiosNavigation 组件</ContentCard.Text>
          <ContentCard.Code
            language="tsx"
            title="src/App.tsx"
            code={[
              "import { Outlet } from 'react-router-dom';",
              "import './App.scss';",
              "",
              "const App = () => {",
              "  return (",
              "    <div className='App'>",
              "      <AxiosNavigation>",
              "        <Outlet></Outlet>",
              "      </AxiosNavigation>",
              "    </div>",
              "  );",
              "};",
              "",
              "export default App;",
            ]}
          />
        </ContentCard>
      </Template.Content>
      <DeclarationCard title="文章声明"></DeclarationCard>
    </Template>
  );
};

export default WrapperAxios;
