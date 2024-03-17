import Layout from "@/layout";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default MainPage;
