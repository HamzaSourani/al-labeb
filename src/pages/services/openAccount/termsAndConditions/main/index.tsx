import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoIcon from "@/components/svg/no";
import YesIcon from "@/components/svg/yes";
import Video from "@/components/ui/video";

const TermsAndConditionMainPage = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();
  const videoSources = ["100", "101", "102", "103"];

  const handleNext = async () => {
    if (index !== videoSources.length - 1) {
      setIndex((pre) => pre + 1);
    }
  };
  const handleGoToNationalNumber = () => {
    navigate("/al-labeb/open-account/national-number");
  };
  const handleGoToEndPage = () => {
    navigate("/al-labeb/end");
  };
  return (
    <>
      {index === videoSources.length - 1 ? (
        <div className="flex  flex-col items-center  justify-center gap-y-4">
          <div className="shadow-shadow rounded-lg border  border-secondary  shadow md:w-1/2 lg:w-1/3 ">
            <Video src="3.1" />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleGoToNationalNumber}
              className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
            >
              <YesIcon className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </button>
            <button
              onClick={handleGoToEndPage}
              className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
            >
              <NoIcon className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex  items-center justify-center">
          <div className="md:w-1/2 lg:w-1/3 ">
            <Video
              src={videoSources[index]}
              onNext={handleNext}
              previousUrl="/"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditionMainPage;
