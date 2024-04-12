import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCountOfTermsAndConditionVideos } from "@/api/openAccount";
import YesNo from "@/components/pages/yesNo";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const TermsAndConditionMainPage = () => {
  const [index, setIndex] = useState(0);
  const [videoSources, setVideoSources] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNext = async () => {
    if (index !== videoSources.length - 1) {
      setIndex((pre) => pre + 1);
    }
  };
  const handlePositiveCase = () => {
    navigate(pagesRoutes.openAccount.motherFirstName);
  };
  const handleNegativeCase = () => {
    navigate(pagesRoutes.end);
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
  return (
    <>
      {index === videoSources.length - 1 ? (
        <YesNo
          videoNumber="3.1"
          handlePositiveCase={handlePositiveCase}
          handleNegativeCase={handleNegativeCase}
        />
      ) : (
        <SingleVideo
          validation="unSet"
          videoNumber={videoSources[index]}
          handleNext={handleNext}
        />
      )}
    </>
  );
};

export default TermsAndConditionMainPage;
