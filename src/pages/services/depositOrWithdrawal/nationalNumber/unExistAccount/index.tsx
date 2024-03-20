import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const ExistAccountPage = () => {
  const navigate = useNavigate();

  const handlePositiveCase = () => {
    navigate(-1);
  };
  const handleNegativeCase = () => {
    navigate("/al-labeb/open-account");
  };
  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-y-4">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="3.6" />
        {
          //TODO ask for open account video
        }
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

export default ExistAccountPage;
