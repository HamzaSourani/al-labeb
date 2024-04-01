import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@/components/svg/home";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { handleReset } = useUserInfoContext();
  const navigate = useNavigate();
  const handleGoToGreetingPage = () => {
    handleReset();
    navigate("/al-labeb/greeting");
  };
  return (
    <div className="grid h-full [grid-template-rows:120px_auto]">
      <header className="flex justify-between px-10 py-5">
        <img
          src="/assets/images/SIIB_logo.png"
          className="w-92 h-20"
          alt="SSIB"
        />{" "}
        <button
          className="flex w-40 flex-col items-end gap-2 "
          onClick={handleGoToGreetingPage}
        >
          <HomeIcon className="ml-2 h-6  w-6 fill-primary transition-transform hover:scale-105 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          <span className="h-[2px] w-full rounded-full [background-image:linear-gradient(45deg,#262626,transparent)]"></span>
        </button>
      </header>
      {children}
    </div>
  );
};

export default Layout;
