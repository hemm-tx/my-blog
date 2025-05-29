import { useState, useEffect } from "react";

/**
 * 创建锚点列表
 * @param contentRef 内容区的 ref
 */
export const useCreateAnchorItem = (contentRef: React.RefObject<HTMLDivElement | null>) => {
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

  return { anchorItems };
};
