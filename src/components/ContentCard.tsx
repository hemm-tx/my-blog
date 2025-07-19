import type { FC, ReactNode } from "react";
import { Divider, Image as AntdImage } from "antd";
import { CodeCard, ShellCode, TabsShellCode } from "./CodeCard";

interface ContentCardProps {
  title: string;
  children: ReactNode;
}

interface TextProps {
  children?: ReactNode;
}

interface HrefProps {
  href?: string;
  children?: ReactNode;
}

interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
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

interface HtmlLabelProps {
  children?: ReactNode;
}

// 创建子组件实现
const Text: FC<TextProps> = ({ children }) => <span className="my-2 leading-6">{children}</span>;
const Href: FC<HrefProps> = ({ children, href }) => (
  <div className="my-2 leading-5">
    <a className="underline-offset-5 underline text-blue-400 hover:text-blue-800" href={href}>
      {children}
    </a>
  </div>
);
const Image: FC<ImageProps> = ({ src, alt, width = "75%" }) => (
  <div className="w-full my-3 flex place-content-center">
    <AntdImage src={src} alt={alt} width={width} />
  </div>
);
const Paragraph: FC<ParagraphProps> = ({ id, title, children }) => (
  <>
    <br />
    <h2 id={id} className="font-bold my-2 text-lg leading-7">
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
  <div className="my-2 mx-4 relative text-sm leading-6 text-gray-700 before:w-1.5 before:h-4/5 before:bg-gray-500 before:absolute before:top-1/10 before:left-[-16px]">
    {children}
  </div>
);
const HtmlLabel: FC<HtmlLabelProps> = ({ children }) => <code>&lt;{children}&gt;</code>;

// 创建复合组件类型
interface ContentCardComposition {
  Text: FC<TextProps>;
  Href: FC<HrefProps>;
  Image: FC<ImageProps>;
  Paragraph: FC<ParagraphProps>;
  List: FC<ListProps>;
  Note: FC<NoteProps>;
  HtmlLabel: FC<HtmlLabelProps>;
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
ContentCard.Href = Href;
ContentCard.Image = Image;
ContentCard.Paragraph = Paragraph;
ContentCard.List = List;
ContentCard.Note = Note;
ContentCard.HtmlLabel = HtmlLabel;
ContentCard.Code = CodeCard;
ContentCard.ShellCode = ShellCode;
ContentCard.TabsShellCode = TabsShellCode;
