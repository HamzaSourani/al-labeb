import { useRef } from "react";
import { Outlet } from "react-router-dom";
import UserInfoProvider from "./hooks/usUserInfo";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div
      ref={containerRef}
      onClick={() => containerRef.current.requestFullscreen()}
      className=" h-screen "
    >
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
