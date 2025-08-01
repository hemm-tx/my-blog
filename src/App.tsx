import { Outlet } from "react-router-dom";
import "./App.scss";
import { AxiosNavigation, HeaderMenu } from "@/components";
import { Layout } from "antd";

const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <AxiosNavigation>
        <Layout style={{ height: "100vh" }}>
          <Header style={{ padding: 0 }}>
            <HeaderMenu />
          </Header>
          <Content style={{ position: "relative" }}>
            <Outlet />
          </Content>
        </Layout>
      </AxiosNavigation>
    </div>
  );
};

export default App;
