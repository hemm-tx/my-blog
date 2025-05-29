import { type FC } from "react";
import { Divider } from "antd";

export const DeclarationCard: FC<{ title: string; importForm?: { text: string; href: string }[] }> = ({ title, importForm }) => {
  return (
    <div className="grid">
      <div className="flex flex-col mb-5 *:[span]:text-[14px]">
        <h1 className="text-xl font-bold mt-5">{title}</h1>
        <Divider size="small" />
        {importForm?.map((item, idx) => (
          <a href={item.href} key={idx} className="text-blue-500 hover:underline text-[14px]">
            {item.text}
          </a>
        ))}
        <span>本文声明所有内容皆为作者日常使用问题的分享，仅用于学习使用，不做任何的商用目的，如有侵权请联系删除。</span>
        <span>本文仅代表作者个人观点，不代表本人立场。</span>
        <span>如有任何疑问，请联系作者。</span>
      </div>
    </div>
  );
};
