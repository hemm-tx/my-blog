import { useAppSelector } from "@/store";
import { PicCenterOutlined } from "@ant-design/icons";
import { Divider, Card, Tooltip } from "antd";
import { IconComponents, type IconType } from "@/components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const menuData = useAppSelector((state) => state.header.menuData);

  const renderIcon = (icon: IconType) => {
    const IconComponent = IconComponents[icon];
    return <IconComponent size={36} />;
  };
  return (
    <div className="absolute h-full w-full grid grid-cols-5 gap-3 bg-[#FBF5F5] overflow-y-auto">
      <div className="col-1"></div>
      <div className="col-span-3 bg-white m-2 p-3">
        {menuData.map(
          (item, idx) =>
            idx !== 0 && (
              <div key={item.key} className="mb-3">
                <div className="px-2 pt-2 font-bold">
                  <PicCenterOutlined />
                  <span className="ml-2">{item.label}</span>
                </div>
                <Divider size="small" />
                <div className="w-full grid grid-cols-3 gap-2">
                  {item.children?.map((child) => (
                    <div key={child.key} className="w-full" onClick={() => navigate(`/${child.key}`)}>
                      <div className="col-span-1">
                        <Card hoverable size="small" classNames={{ body: "h-25 flex flex-col" }}>
                          <span className="font-bold text-[16px] text-[#709D83]">{child.label}</span>
                          <div className="flex-1 relative items-center mt-1">
                            <div className="w-full h-full flex items-center absolute">
                              <div className="w-9 mr-3">{renderIcon(child.icon)}</div>
                              <Tooltip title={child.description}>
                                <span className="text-ellipsis overflow-hidden line-clamp-2 hover:">{child.description}</span>
                              </Tooltip>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
