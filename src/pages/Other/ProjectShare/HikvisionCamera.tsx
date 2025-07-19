import { Template, ContentCard, DeclarationCard } from "@/components";

const HikvisionCamera = () => {
  return (
    <Template id="Hikvision Camera">
      <Template.Content id="HikvisionCameraContent">
        <ContentCard title="ffmpeg 推流海康威视监控">
          <ContentCard.Text>本文介绍使用 ffmpeg 工具对海康威视摄像头进行录制、转码、推流等操作。</ContentCard.Text>
        </ContentCard>
      </Template.Content>
      <Template.Content id="installFFmpeg">
        <ContentCard title="安装 FFmpeg">
          <ContentCard.Paragraph title="下载 FFmpeg" id="downloadFFmpeg">
            <ContentCard.Href href="https://www.gyan.dev/ffmpeg/builds/">FFmpeg 下载地址</ContentCard.Href>
            <ContentCard.Text>下滑找到 release builds 下载对应版本的 FFmpeg 安装包。</ContentCard.Text>
            <ContentCard.Text>我这里下载的是 ffmpeg-7.0.2-full_build.7z。</ContentCard.Text>
            <ContentCard.Image src="/images/Snipaste_2025-07-17_13-50-16.png" />
            <ContentCard.Text>解压到指定目录，如 D:\ffmpeg。</ContentCard.Text>
            <ContentCard.Text>解压后的文件夹中应包含以下目录：</ContentCard.Text>
            <ContentCard.List
              list={[
                "bin：存放 ffmpeg.exe、ffplay.exe、ffprobe.exe 这三个核心可执行文件。",
                "doc：存放 FFmpeg 相关文档的目录。",
                "presets：存放预设格式和编码方案文件的目录。",
              ]}
            />
            <ContentCard.Image src="/images/Snipaste_2025-07-17_14-09-03.png" />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="配置环境变量" id="configEnv">
            <ContentCard.Text>在环境变量-系统变量-Path 中添加 ffmpeg 解压目录。</ContentCard.Text>
            <ContentCard.Image src="/images/Snipaste_2025-07-17_14-51-26.png" />
            <ContentCard.Image src="/images/Snipaste_2025-07-17_14-52-52.png" />
            <ContentCard.Text>然后依次点击 确定 即可保存成功。</ContentCard.Text>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="验证安装" id="verifyInstall">
            <ContentCard.Text>win + r 打开运行框，输入 cmd 打开命令行窗口。</ContentCard.Text>
            <ContentCard.Image src="/images/Snipaste_2025-07-17_15-09-15.png" />
            <ContentCard.Text>输入 ffmpeg -version 验证是否安装成功。</ContentCard.Text>
            <ContentCard.Image src="/images/Snipaste_2025-07-17_15-09-45.png" />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="BackendPushStream">
        <ContentCard title="后端推流">
          <ContentCard.Paragraph title="环境要求" id="envRequirements">
            <ContentCard.List list={["Node.js", "FFmpeg"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="创建 node.js 项目" id="createNodeProject">
            <ContentCard.Text>创建 node 后端项目用于推流。</ContentCard.Text>
            <ContentCard.Text>新建一个文件夹，初始化 node 项目。</ContentCard.Text>
            <ContentCard.ShellCode code={["npm init"]} />
            <ContentCard.Text>安装 node-rtsp-stream 库。</ContentCard.Text>
            <ContentCard.ShellCode code={["npm install node-rtsp-stream"]} />
            <ContentCard.Text>创建 main.js 文件，写入以下代码：</ContentCard.Text>
            <ContentCard.Code
              title="main.js"
              code={[
                'import Stream from "node-rtsp-stream"',
                "",
                "new Stream({",
                '    name: "socket",',
                '    streamUrl: "rtsp://username:password@ip:port/Streaming/Channels/101",',
                "    wsPort: 8084,",
                "    ffmpegOptions: {",
                '        "-stats": "",',
                '        "-r": 30,',
                '        "-s": "1280 720",',
                "    }",
                "})",
              ]}
            />
            <ContentCard.Note>注意：请将 rtspUrl 中的 ip、port、username、password 替换为实际的摄像头信息。</ContentCard.Note>
            <ContentCard.Text>编辑 package.json 文件，添加 start 命令。</ContentCard.Text>
            <ContentCard.Code
              code={[
                "{",
                '    "name": "node-server",',
                '    "version": "1.0.0",',
                '    "description": "",',
                '    "main": "main.js",',
                '    "type": "module",',
                '    "scripts": {',
                '      "start": "node main.js",',
                '      "test": "echo \\"Error: no test specified\\" && exit 1"',
                "    },",
                '    "keywords": [],',
                '    "author": "",',
                '    "license": "ISC",',
                '    "dependencies": {',
                '      "node-rtsp-stream": "^0.0.9"',
                "    }",
                "}",
              ]}
            />
            <ContentCard.Text>运行项目。</ContentCard.Text>
            <ContentCard.ShellCode code={["npm run start"]} />
            <ContentCard.Note>如果遇到报错，项目运行不起来的情况，可能是环境变量没有生效，可以重启一下电脑。</ContentCard.Note>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <Template.Content id="FrontEndShow">
        <ContentCard title="前端视频展示">
          <ContentCard.Paragraph title="创建 react 项目" id="createReactProject">
            <ContentCard.Text>前端基于 jsmpeg-player 库进行播放。</ContentCard.Text>
            <ContentCard.Text>创建 react 项目。</ContentCard.Text>
            <ContentCard.ShellCode code={["npx create-react-app my-app"]} />
            <ContentCard.Text>运行项目。</ContentCard.Text>
            <ContentCard.ShellCode code={["cd my-app", "npm start"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="安装依赖" id="installDependencies">
            <ContentCard.Text>安装 jsmpeg-player 库。</ContentCard.Text>
            <ContentCard.ShellCode code={["npm install @cycjimmy/jsmpeg-player --save"]} />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="编写代码" id="writeCode">
            <ContentCard.Text>编辑 App.tsx 文件，写入以下代码：</ContentCard.Text>
            <ContentCard.Code
              title="App.tsx"
              code={[
                'import "./App.css";',
                'import JSMpeg from "@cycjimmy/jsmpeg-player";',
                'import { useEffect, useState } from "react";',
                "",
                "function App() {",
                "  const [player, setPlayer] = useState<JSMpegPlayer.VideoElement | null>(null);",
                "",
                "  useEffect(() => {",
                "    setPlayer(",
                "      // 这里只需要给 websocket 路径即可，不需要创建 ws 连接",
                '      new JSMpeg.VideoElement("#video", "ws://localhost:8084/", {',
                "        autoplay: true,",
                "        audio: false,",
                "      })",
                "    );",
                "",
                "    return () => player?.destroy();",
                "  }, []);",
                "",
                "  return (",
                '    <div className="w-screen h-screen place-content-center place-items-center flex flex-col">',
                '      <h1 className="font-bold mb-3">Jsmpeg Player</h1>',
                '      <div className="relative hover:[&>.button-group]:flex">',
                "        {/* 这里不能使用 video 标签，否则会导致播放失败，jsmpeg-player 会自行在 div 中创建 canvas 标签 */}",
                '        <div id="video" className="w-160 h-120"></div>',
                '        <div className="hidden flex-row button-group absolute left-0 bottom-0 z-10">',
                "          <button onClick={() => player?.play()}>播放</button>",
                "          <button onClick={() => player?.pause()}>暂停</button>",
                "        </div>",
                "      </div>",
                "    </div>",
                "  );",
                "}",
                "",
                "export default App;",
              ]}
            />
            <ContentCard.Note>这里使用了 tailwindcss 库，可以根据自己的喜好安装。</ContentCard.Note>
            <ContentCard.Note>由于是 .tsx 文件，所以需要定义 @cycjimmy/jsmpeg-player 库的数据类型，不然会报错。</ContentCard.Note>
            <ContentCard.Code
              title="*.d.ts"
              code={[
                "declare namespace JSMpegPlayer {",
                "  class VideoElement {",
                "    constructor(container: string, url: string, options?: VideoElementOptions);",
                "    play(): void;",
                "    pause(): void;",
                "    stop(): void;",
                "    destroy(): void;",
                "  }",
                "",
                "  interface VideoElementOptions {",
                "    autoplay?: boolean;",
                "    audio?: boolean;",
                "    hooks?: {",
                "      play?: () => void;",
                "      pause?: () => void;",
                "      stop?: () => void;",
                "      load?: () => void;",
                "    };",
                "  }",
                "}",
                "",
                'declare module "@cycjimmy/jsmpeg-player";',
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="运行项目" id="runProject">
            <ContentCard.Text>运行项目，即可看到摄像头画面。</ContentCard.Text>
            <ContentCard.Image src="/images/Snipaste_2025-07-17_16-12-35.png" />
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard
        importForm={[
          { text: "ffmpeg - Gyan", href: "https://www.gyan.dev/ffmpeg/builds/" },
          { text: "@cycjimmy/jsmpeg-player - npm", href: "https://www.npmjs.com/package/@cycjimmy/jsmpeg-player" },
          { text: "Web 播放 RTSP 推流最佳方案实践", href: "https://juejin.cn/post/7221858081485963324" },
          { text: "FFmpeg 超级详细安装与配置教程（Windows 系统）", href: "https://blog.csdn.net/Natsuago/article/details/143231558" },
        ]}
      />
    </Template>
  );
};

export default HikvisionCamera;
