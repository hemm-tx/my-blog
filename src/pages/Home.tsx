import { useAppSelector } from "@/store";
import { PicCenterOutlined } from "@ant-design/icons";
import { Divider, Card, Tooltip } from "antd";
import { IconComponents, type IconType } from "@/components";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";

const RenderIcon: FC<{ icon: IconType }> = ({ icon }) => {
  const IconComponent = IconComponents[icon];
  return (
    <div className="w-9 mr-3">
      <IconComponent size={36} />
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const menuData = useAppSelector((state) => state.header.menuData);

  return (
    <div className="absolute size-full flex flex-col items-center bg-[#FBF5F5] overflow-y-auto overflow-x-hidden">
      <div className="w-3/5 bg-white m-2 p-3 max-lg:w-4/5 max-md:w-[calc(100%-1.5rem)] transition-[width]">
        {menuData.map(
          (item, idx) =>
            idx !== 0 && (
              <div key={item.key} className="mb-3">
                <div className="px-2 pt-2 font-bold">
                  <PicCenterOutlined />
                  <span className="ml-2">{item.label}</span>
                </div>
                <Divider size="small" />
                <div className="w-full grid grid-cols-3 gap-2 max-sm:grid-cols-2">
                  {item.children?.map((child) => (
                    <div key={child.key} className="w-full" onClick={() => navigate(`/${child.key}`)}>
                      <div className="col-span-1">
                        <Card hoverable size="small" classNames={{ body: "h-25 flex flex-col" }}>
                          <span className="font-bold text-[16px] text-[#709D83]">{child.label}</span>
                          <div className="flex-1 relative items-center mt-1">
                            <div className="size-full flex items-center absolute">
                              <RenderIcon icon={child.icon} />
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
