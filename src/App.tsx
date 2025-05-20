import { Outlet } from "react-router-dom";
import "./App.scss";
import { AxiosNavigation } from "@/components";

const App = () => {
  return (
    <div className="App">
      <AxiosNavigation>
        <Outlet></Outlet>
      </AxiosNavigation>
    </div>
  );
};

export default App;
