import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { FloatButton, Menu, Layout, Drawer } from "antd";
import { useEffect, useState, useRef, type FC, type ReactNode } from "react";
import { CreateAnchor } from "@/components";
import { MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface DisplayProps {
  parentPath: string;
  items: {
    key: string;
    label: string;
  }[];
}

const { Sider, Content } = Layout;

export const Display: FC<DisplayProps> = ({ items, parentPath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState<string>("");
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false); // 标记是否处于移动断点
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const defaultActiveKey = location.pathname.split("/")[2];
    setActiveKey(defaultActiveKey);
  }, [location.pathname]);

  // 处理菜单点击
  const handleMenuClick = (e: { key: string }) => {
    navigate(`/${parentPath}/${e.key}`);
    if (broken) setCollapsed(true); // 移动端选择后自动收起菜单
    if (drawerVisible) setDrawerVisible(false); // 移动端选择后关闭抽屉
  };

  // 响应式断点处理
  const handleBreakpoint = (brokenStatus: boolean) => {
    setBroken(brokenStatus);
    setCollapsed(brokenStatus); // 进入移动端自动收起，离开则展开
    if (drawerVisible) setDrawerVisible(false);
  };

  const MenuComponent = () =>
    items && (
      <Menu
        mode="inline"
        style={{ height: "100%", overflowY: "auto" }}
        defaultSelectedKeys={[activeKey ?? items[0].key]}
        selectedKeys={[activeKey ?? items[0].key]}
        items={items}
        onClick={handleMenuClick}
      />
    );

  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="md"
        theme="light"
        width="20%"
        style={{ height: "100%" }}
        collapsedWidth={0}
        collapsed={collapsed}
        trigger={null}
        onBreakpoint={handleBreakpoint}
        onCollapse={setCollapsed}
      >
        <MenuComponent />
      </Sider>
      <Drawer
        styles={{ header: { display: "none" }, body: { padding: 0 } }}
        width={200}
        open={drawerVisible}
        placement="left"
        getContainer={false}
        maskClosable={true}
        onClose={() => setDrawerVisible(false)}
      >
        <MenuComponent />
      </Drawer>
      <Content className="flex-1 relative bg-white *:[div]:py-3 *:[div]:px-5 *:[div]:size-full *:[div]:absolute *:[div]:overflow-y-auto">
        <Outlet></Outlet>
        {broken && collapsed && (
          <FloatButton
            type="primary"
            icon={drawerVisible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={() => setDrawerVisible(!drawerVisible)}
            style={{ left: drawerVisible ? 224 : 24, transition: "left 0.3s ease" }}
          />
        )}
      </Content>
    </Layout>
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
    <div className="flex flex-row size-full relative overflow-x-hidden" id={id}>
      <div className="w-full lg:w-3/4 flex flex-col relative transition-[width] duration-300" ref={contentRef}>
        {children}
      </div>
      <div className="absolute min-lg:hidden">
        <FloatButton
          type="primary"
          icon={<MenuOutlined />}
          tooltip={{
            color: "#fff",
            title: <CreateAnchor containerId={id} contentRef={contentRef} />,
          }}
        />
      </div>
      <CreateAnchor className="w-1/4 pl-3 max-lg:hidden" containerId={id} contentRef={contentRef} />
    </div>
  );
};

Template.Content = TemplateContent;
