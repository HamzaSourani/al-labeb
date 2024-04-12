import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const SavingAccountExplanation = () => {
  const [videoSrc, setVideoSrc] = useState("10");
  const navigate = useNavigate();
  const handleNext = () => {
    videoSrc === "15"
      ? navigate(pagesRoutes.openAccount.termsAndConditions)
      : setVideoSrc((pre) => String(Number(pre) + 1));
  };
  return (
    <SingleVideo
      validation="unSet"
      videoNumber={videoSrc}
      handleNext={handleNext}
    />
  );
};

export default SavingAccountExplanation;
