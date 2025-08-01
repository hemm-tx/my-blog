import { type FC, useState, useEffect } from "react";
import { Menu, type MenuProps } from "antd";
import { useAppSelector } from "@/store";
import { type IconType, IconComponents } from "@/components";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const MenuLabel: FC<{ icon: IconType; label: string }> = ({ icon, label }) => {
  const IconComponent = IconComponents[icon];
  return (
    <div className="flex flex-row items-center direction-ltr">
      <IconComponent size={24} />
      <span className="ml-2 text-[#64854C] font-bold">{label}</span>
    </div>
  );
};

export const HeaderMenu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuData = useAppSelector((state) => state.header.menuData);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    setItems(
      menuData.map((item) => ({
        label: <MenuLabel icon={item.icon} label={item.label} />,
        key: item.key,
        children: item.children?.map((child) => ({
          label: <MenuLabel icon={child.icon} label={child.label} />,
          key: child.key,
        })),
      }))
    );
  }, [menuData]);

  useEffect(() => {
    if (location.pathname === "/") setCurrent("home");
    else setCurrent(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <div className="w-full flex flex-row bg-white">
      <div className="flex flex-row px-3">
        <img src="/blog.png" alt="blog logo" className="w-15 h-15" />
        <span className="headerBlogFont">My Blog</span>
      </div>
      <div className="flex-1 direction-rtl">
        <div className="max-md:hidden">
          <Menu theme="light" onClick={onClick} defaultValue={"home"} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        <div className="min-md:hidden">
          <Menu
            theme="light"
            onClick={onClick}
            defaultValue={"home"}
            selectedKeys={[current]}
            mode="horizontal"
            items={[
              {
                label: <MenuLabel icon="MenusIcon" label="菜单" />,
                key: "menus",
                children: items,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
