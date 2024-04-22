import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <img
        className="w-2/6 animate-pulse"
        src="/assets/images/SIIB_logo.png"
        alt="SSIB"
      />
    </div>
  );
};

export default Loading;
