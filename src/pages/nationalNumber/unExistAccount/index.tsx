import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";
import NoIcon from "@/components/svg/no";
import YesIcon from "@/components/svg/yes";

const ExistAccountPage = () => {
  const navigate = useNavigate();

  const handlePositiveCase = () => {
    navigate(-1);
  };
  const handleNegativeCase = () => {
    navigate("/al-labeb/open-account");
  };

  //TODO ask for open account video

  return (
    <div className="flex  flex-col items-center  justify-center gap-y-4">
      <div className="shadow-shadow rounded-lg border  border-secondary  shadow md:w-1/2 lg:w-1/3 ">
        <Video src="3.6" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePositiveCase}
          className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
        >
          <YesIcon className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </button>
        <button
          onClick={handleNegativeCase}
          className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
        >
          <NoIcon className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </button>
      </div>
    </div>
  );
};

export default ExistAccountPage;
