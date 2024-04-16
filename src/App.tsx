import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserInfoProvider from "./hooks/usUserInfo";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const location = useLocation();
  const variant = {
    hidden: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
    visible: {
      x: "0",
      transition: {
        // delay: 1,
        duration: 1,
      },
    },
    // exit: {
    //   x: "100vw",
    //   transition: {
    //     duration: 1,
    //     ease: "easeInOut",
    //   },
    // },
  };
  return (
    <AnimatePresence>
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
          <motion.div
            key={location.key}
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </UserInfoProvider>
      </div>
    </AnimatePresence>
  );
}

export default App;
