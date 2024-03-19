import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import React from "react";
import { useNavigate } from "react-router-dom";

const HasHousePage = () => {
  const navigate = useNavigate();
  const { handleAddInfo } = useUserInfoContext();

  const handlePositiveCase = () => {
    handleAddInfo({
      key: "housing",
      value: true,
    });
    navigate("/al-labeb/open-account/user-address");
  };
  const handleNegativeCase = () => {
    handleAddInfo({
      key: "housing",
      value: false,
    });
    navigate("/al-labeb/open-account/address");
  };
  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-y-4">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="3.6" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePositiveCase}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          نعم
        </button>
        <button
          onClick={handleNegativeCase}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          لا
        </button>
      </div>
    </div>
  );
};

export default HasHousePage;
