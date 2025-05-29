import type { FC, ReactNode } from "react";
import { Divider } from "antd";
// import { createContext, useContext } from "react";

interface ContentCardProps {
  title: string;
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
}

interface ParagraphProps {
  id?: string;
  mt?: boolean;
  children: ReactNode;
}

// 创建子组件实现
const Text: FC<TextProps> = ({ children }) => <span className="my-2 leading-6">{children}</span>;
const Paragraph: FC<ParagraphProps> = ({ id, mt, children }) => (
  <>
    {mt && <br />}
    <h2 id={id} className="font-bold my-2 text-xl leading-7">
      {children}
    </h2>
  </>
);

// 创建复合组件类型
interface ContentCardComposition {
  Text: FC<TextProps>;
  Paragraph: FC<ParagraphProps>;
}

/**
 * 用于展示内容的卡片
 * @param title 卡片标题
 * @param children 卡片内容
 * @returns
 */
export const ContentCard: FC<ContentCardProps> & ContentCardComposition = ({ title, children }) => {
  return (
    <>
      <h1 className="text-2xl font-bold pt-4 content-card-title">{title}</h1>
      <Divider size="small" />
      {children}
    </>
  );
};

ContentCard.Text = Text;
ContentCard.Paragraph = Paragraph;
