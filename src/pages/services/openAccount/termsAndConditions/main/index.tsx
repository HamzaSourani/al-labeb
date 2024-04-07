import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Video from "@/components/ui/video";
import { getCountOfTermsAndConditionVideos } from "@/api/openAccount";

const TermsAndConditionMainPage = () => {
  const [index, setIndex] = useState(0);
  const [videoSources, setVideoSources] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNext = async () => {
    if (index !== videoSources.length - 1) {
      setIndex((pre) => pre + 1);
    }
  };
  const handleGoToNationalNumber = () => {
    navigate("/al-labeb/open-account/mother-first-name");
  };
  const handleGoToEndPage = () => {
    navigate("/al-labeb/end");
  };
  useEffect(() => {
    (async () => {
      const data = await getCountOfTermsAndConditionVideos();
      if (data && data.count) {
        setVideoSources(
          Array.from({ length: data.count }, (_, index) => String(100 + index)),
        );
      }
    })();
  }, []);
  console.log(videoSources);
  return (
    <>
      {index === videoSources.length - 1 ? (
        <div className="flex  flex-col items-center  justify-center gap-y-4">
          <div className="rounded-lg border border-secondary  shadow  shadow-shadow md:w-1/2 lg:w-1/3 ">
            <Video src="3.1" />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleGoToNationalNumber}
              className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
            >
              <img
                className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10"
                src="/assets/images/yes.png"
                alt="yes"
              />
            </button>
            <button
              onClick={handleGoToEndPage}
              className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
            >
              <img
                className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10"
                src="/assets/images/no.png"
                alt="no"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex  items-center justify-center">
          <div className="md:w-1/2 lg:w-1/3 ">
            <Video
              src={videoSources[index]}
              onNext={handleNext}
              validation="unSet"
              previousUrl="/"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditionMainPage;
