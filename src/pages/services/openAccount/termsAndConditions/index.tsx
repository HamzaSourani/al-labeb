import { useState } from "react";
import { useNavigate } from "react-router-dom";
import YesNo from "@/components/pages/yesNo";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const TermsAndConditionMainPage = () => {
  const [index, setIndex] = useState(0);
  const videoSources = Array.from({ length: 5 }, (_, index) =>
    String(100 + index),
  );
  const navigate = useNavigate();

  const handleNext = () => {
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
