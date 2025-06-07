import type { FC, ReactNode } from "react";
import { Divider } from "antd";
import { CodeCard, ShellCode, TabsShellCode } from "./CodeCard";

interface ContentCardProps {
  title: string;
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
}

interface ParagraphProps {
  id?: string;
  title: ReactNode;
  children?: ReactNode;
}
interface ListProps {
  list: string[] | ReactNode[];
  color?: string;
}
interface NoteProps {
  children: ReactNode;
}

// 创建子组件实现
const Text: FC<TextProps> = ({ children }) => <span className="my-2 leading-6">{children}</span>;
const Paragraph: FC<ParagraphProps> = ({ id, title, children }) => (
  <>
    <br />
    <h2 id={id} className="font-bold my-2 text-xl leading-7">
      {title}
    </h2>
    {children}
  </>
);
const List: FC<ListProps> = ({ list, color }) => {
  const text_color = color ? `text-${color}` : "text-[#B25134]";
  return (
    <ul className={`mx-5 my-2 ${text_color}`}>
      {list.map((item, index) => (
        <li className="list-inside list-disc leading-7" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
const Note: FC<NoteProps> = ({ children }) => (
  <div className="my-2 mx-4 relative text-sm leading-6 text-gray-700 before:w-1 before:h-full before:bg-gray-300 before:absolute before:left-[-10px]">
    {children}
  </div>
);

// 创建复合组件类型
interface ContentCardComposition {
  Text: FC<TextProps>;
  Paragraph: FC<ParagraphProps>;
  List: FC<ListProps>;
  Note: FC<NoteProps>;
  Code: typeof CodeCard;
  ShellCode: typeof ShellCode;
  TabsShellCode: typeof TabsShellCode;
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
      <Divider className="[&+br]:hidden" size="small" />
      {children}
    </>
  );
};

ContentCard.Text = Text;
ContentCard.Paragraph = Paragraph;
ContentCard.List = List;
ContentCard.Note = Note;
ContentCard.Code = CodeCard;
ContentCard.ShellCode = ShellCode;
ContentCard.TabsShellCode = TabsShellCode;
