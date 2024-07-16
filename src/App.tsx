import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import bg from "./assets/bg.jpg";
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
        style={{ backgroundImage: `url(${bg})` }}
        className="!h-screen overflow-hidden"
      >
        <motion.div
          key={location.key}
          className="h-full"
          variants={variant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Outlet />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
