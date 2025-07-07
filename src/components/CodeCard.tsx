import { Card, Button, Tabs } from "antd";
import type { FC, ReactNode } from "react";
import { useState, createContext, useContext } from "react";
import { CopyOutlined } from "@ant-design/icons";

interface CodeCardProps {
  title?: string | ReactNode;
  code: string[];
  language?: string;
}
const CodeCardContext = createContext<CodeCardProps | null>(null);

const CodeContent: FC<{ shell?: boolean }> = ({ shell }) => {
  const { code } = useContext(CodeCardContext) || {};
  return (
    <pre
      className={`relative m-0 py-4 bg-transparent overflow-x-auto text-left whitespace-pre break-normal wrap-normal hyphens-none code-snippet ${
        shell ? "shell" : ""
      }`}
    >
      <code className="block px-6 text-[#67676C] transition-[color] duration-500 leading-[1.7] text-sm">
        {code?.map((line, index) => (
          <span className="whitespace-pre block before:inline-block before:w-12 before:text-right before:mr-4 before:pr-3.5" key={index}>
            {line}
            <br />
          </span>
        ))}
      </code>
    </pre>
  );
};

const CodeCard: FC<CodeCardProps> = ({ title, code, language }) => {
  return (
    <CodeCardContext.Provider value={{ title, code, language }}>
      <Card
        style={{ margin: "15px 0" }}
        size="small"
        title={
          <div className="flex flex-row justify-between">
            <div className="flex flex-row place-items-center">
              <div className="w-3 h-3 rounded-full ml-1 bg-red-500"></div>
              <div className="w-3 h-3 rounded-full ml-1 bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full ml-1 bg-green-500"></div>
              <span className="m-2">{title}</span>
            </div>
            <div className="m-2 cursor-default">{language}</div>
          </div>
        }
        classNames={{ body: "relative bg-[#FBF5F5]" }}
      >
        <CodeContent />
        <div className="absolute right-2 top-2" onClick={() => navigator.clipboard.writeText(code.join("\n"))}>
          <Button size="large" color="default" variant="filled" icon={<CopyOutlined />} />
        </div>
      </Card>
    </CodeCardContext.Provider>
  );
};

const CreateShellCode = () => {
  const { code } = useContext(CodeCardContext) || {};
  return (
    <div className="flex relative items-center hover:*:[&+div]:visible">
      <CodeContent shell />
      <div className="absolute right-2 invisible transition-[visibility] duration-500" onClick={() => code && navigator.clipboard.writeText(code.join("\n"))}>
        <Button size="large" color="default" variant="filled" icon={<CopyOutlined />} />
      </div>
    </div>
  );
};

const ShellCode: FC<CodeCardProps> = ({ code }) => {
  return (
    <CodeCardContext.Provider value={{ code: code }}>
      <Card style={{ margin: "15px 0" }} size="small" classNames={{ body: "relative bg-[#FBF5F5]" }}>
        <CreateShellCode />
      </Card>
    </CodeCardContext.Provider>
  );
};

interface TabsShellCodeProps {
  label: string;
  key: string;
  code: string[];
}

const TabsShellCode: FC<{ items: TabsShellCodeProps[] }> = ({ items }) => {
  const [currentLabel, setCurrentLabel] = useState(items[0].key);
  const onChange = (key: string) => setCurrentLabel(key);

  const tabs = items.map((item) => ({
    label: item.label,
    key: item.key,
    children: (
      <CodeCardContext.Provider value={{ code: item.code }}>
        <CreateShellCode />
      </CodeCardContext.Provider>
    ),
  }));

  return (
    <Card style={{ margin: "15px 0" }} size="small" classNames={{ body: "relative bg-[#FBF5F5]" }}>
      <Tabs size="small" defaultActiveKey={tabs[0].key} activeKey={currentLabel} onChange={onChange} items={tabs} />
    </Card>
  );
};

export { CodeCard, ShellCode, TabsShellCode };
