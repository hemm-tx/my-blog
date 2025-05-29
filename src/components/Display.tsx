import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { useEffect, useState, useRef, type FC, type ReactNode } from "react";
import { CreateAnchor } from "@/components";

interface DisplayProps {
  parentPath: string;
  items: {
    key: string;
    label: string;
  }[];
}

export const Display: FC<DisplayProps> = ({ items, parentPath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    const defaultActiveKey = location.pathname.split("/")[2];
    setActiveKey(defaultActiveKey);
  }, [location.pathname]);

  return (
    <div className="w-full h-full grid grid-cols-5 gap-2">
      <div className="table h-full w-full">
        <Menu
          style={{ height: "100%", overflowY: "auto" }}
          mode="inline"
          defaultSelectedKeys={[activeKey ?? items[0].key]}
          selectedKeys={[activeKey ?? items[0].key]}
          items={items}
          onClick={(e) => navigate(`/${parentPath}/${e.key}`)}
        />
      </div>
      <div className="col-span-4 relative *:[div]:py-3 *:[div]:px-5 *:[div]:w-full *:[div]:h-full *:[div]:absolute *:[div]:overflow-y-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

interface TemplateProps {
  id: string;
  children: ReactNode;
}

interface TemplateContentProps {
  id: string;
  children: ReactNode;
}

const TemplateContent: FC<TemplateContentProps> = ({ id, children }) => {
  return (
    <>
      <div className="flex flex-col" id={id}>
        {children}
      </div>
      <br />
    </>
  );
};

export const Template: FC<TemplateProps> & { Content: FC<TemplateContentProps> } = ({ id, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-row" id={id}>
      <div className="w-3/4 flex flex-col relative" ref={contentRef}>
        {children}
      </div>
      <CreateAnchor containerId={id} contentRef={contentRef} />
    </div>
  );
};

Template.Content = TemplateContent;
