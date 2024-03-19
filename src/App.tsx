import { Outlet } from "react-router-dom";
import "./App.css";
import UserInfoProvider from "./hooks/usUserInfo";

function App() {
  return (
    <div className="h-screen">
      <UserInfoProvider>
        <Outlet />
      </UserInfoProvider>
    </div>
  );
}

export default App;
