import React, { useEffect, useState } from "react";
import { Anchor } from "antd";

interface CreateAnchorProps {
  containerId: string;
  contentRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export const CreateAnchor: React.FC<CreateAnchorProps> = (props) => {
  const { containerId, contentRef, className = "p-2" } = props;

  const [anchorItems, setAnchorItems] = useState<AnchorItemProps[]>([]);

  useEffect(() => {
    const contentContainer = contentRef.current;
    if (contentContainer) {
      const child = contentContainer.children;
      if (child) {
        const ids: AnchorItemProps[] = [];
        Array.from(child).forEach((item) => {
          const _id = item.id;
          if (_id !== "") {
            const child_list = document.querySelectorAll(`#${_id}>h2`);
            ids.push({
              key: _id,
              href: `#${_id}`,
              title: document.querySelector(`#${_id}>h1`)?.textContent as string,
              children: Array.from(child_list).map((sub, idx) => ({
                key: `${_id}-${idx}`,
                href: `#${sub.id}`,
                title: sub.textContent as string,
              })),
            });
          }
        });
        setAnchorItems(ids);
      }
    }
  }, [contentRef]);

  return (
    <div className={className}>
      <Anchor
        items={anchorItems}
        affix={true}
        offsetTop={20}
        onClick={(e) => e.preventDefault()}
        getContainer={() => document.getElementById(containerId) as HTMLDivElement}
      />
    </div>
  );
};
