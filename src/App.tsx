import { Outlet } from "react-router-dom";
import "./App.css";
import UserInfoProvider from "./hooks/usUserInfo";
function App() {
  return (
    <div className="h-screen ">
      <img
        className="absolute -z-10 h-screen w-screen object-cover"
        src="/bg.jpg"
        alt="background"
      />
      <UserInfoProvider>
        <Outlet />
      </UserInfoProvider>
    </div>
  );
}

export default App;
