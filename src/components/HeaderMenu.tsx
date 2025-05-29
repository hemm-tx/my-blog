import { type FC, useState, useEffect } from "react";
import { Menu, type MenuProps } from "antd";
import { useAppSelector } from "@/store";
import { type IconType, IconComponents } from "@/components";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const create_menu_label = (icon: IconType, label: string) => {
  const IconComponent = IconComponents[icon];
  return (
    <div className="flex flex-row items-center">
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
  useEffect(() => {
    setItems(
      menuData.map((item) => ({
        label: create_menu_label(item.icon, item.label),
        key: item.key,
        children: item.children?.map((child) => ({
          label: create_menu_label(child.icon, child.label),
          key: child.key,
        })),
      }))
    );
  }, [menuData]);

  useEffect(() => {
    if (location.pathname === "/") setCurrent("home");
    else setCurrent(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <div className="w-full flex flex-row">
      <div></div>
      <div className="flex-1">
        <Menu onClick={onClick} defaultValue={"home"} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
    </div>
  );
};
