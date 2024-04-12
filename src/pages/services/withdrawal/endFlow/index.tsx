import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import withdrawal from "@/api/withdrawal";
import SingleVideo from "@/components/pages/singleVideo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
const EndWithDrawalFlowPage = () => {
  const [index, setIndex] = useState(0);
  const [isValid, setIsValid] = useValidation(true);
  const navigate = useNavigate();
  const { depositOrWithdrawalInfo } = useUserInfoContext();
  const videoSources = ["21", "22"];
  const handleNext = async () => {
    if (index === videoSources.length - 1) {
      setIsValid("unValid");
      await withdrawal(depositOrWithdrawalInfo);
      navigate(pagesRoutes.end);
    } else {
      setIndex((pre) => pre + 1);
    }
  };

  return (
    <SingleVideo
      videoNumber={videoSources[index]}
      validation={isValid}
      handleNext={handleNext}
    />
  );
};

export default EndWithDrawalFlowPage;
