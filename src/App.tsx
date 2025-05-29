import { Outlet } from "react-router-dom";
import "./App.scss";
import { AxiosNavigation, HeaderMenu } from "@/components";

const App = () => {
  return (
    <div className="App">
      <AxiosNavigation>
        <div className="h-screen w-screen flex flex-col">
          <div className="w-full h-[46px]">
            <HeaderMenu />
          </div>
          <div className="flex-1 relative">
            <Outlet></Outlet>
          </div>
        </div>
      </AxiosNavigation>
    </div>
  );
};

export default App;
