import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        className="animate-pulse"
        src="/assets/images/SIIB_logo.png"
        alt="SSIB"
      />
    </div>
  );
};

export default Loading;
