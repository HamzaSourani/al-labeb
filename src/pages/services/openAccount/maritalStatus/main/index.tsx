import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const MaritalStatusMainPage = () => {
  const navigate = useNavigate();
  const { handleAddInfo } = useUserInfoContext();

  const handleGoToSpouseFirstName = () => {
    handleAddInfo({ key: "married", value: true });

    navigate("/al-labeb/open-account/marital-status/spouse-first-name");
  };
  const handleHasHouse = () => {
    handleAddInfo({ key: "married", value: false });

    navigate("/al-labeb/open-account/has-house");
  };
  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-y-4">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="3.4" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoToSpouseFirstName}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          نعم
        </button>
        <button
          onClick={handleHasHouse}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          لا
        </button>
      </div>
    </div>
  );
};

export default MaritalStatusMainPage;
