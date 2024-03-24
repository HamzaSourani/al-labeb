import React from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/al-labeb/greeting");
  };
  return (
    <div
      className="flex h-screen  items-center justify-center"
      onClick={handleNavigate}
    >
      <img
        className="animate-pulse"
        src="/assets/images/SIIB_logo.png"
        alt="SSIB"
      />
    </div>
  );
};

export default LoadingPage;
