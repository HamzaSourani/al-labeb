import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="grid h-full [grid-template-rows:120px_auto]">
      <header className="px-10 py-5">
        <img
          src="/assets/images/SIIB_logo.png"
          className="w-92 h-20"
          alt="SSIB"
        />{" "}
      </header>
      {children}
    </div>
  );
};

export default Layout;
