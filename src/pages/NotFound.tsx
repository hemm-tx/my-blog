import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="size-full flex flex-col justify-center items-center font-bold text-3xl">
      Not Found Page
      <div className="flex flex-row mt-4 *:mx-2">
        <Button type="primary" onClick={() => navigate(-1)}>
          返回上一页
        </Button>
        <Button type="primary" onClick={() => navigate("/home")}>
          返回首页
        </Button>
      </div>
    </div>
  );
}
