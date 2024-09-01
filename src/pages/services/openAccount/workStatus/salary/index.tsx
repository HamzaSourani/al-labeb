import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithAmount from "@/components/pages/videoWithAmount";

const SalaryPage = () => {
  const [secondSegmentOfDigit, setSecondSegmentOfDigit] = useState<number[]>([
    0, 0, 0,
  ]);
  const [thirdSegmentOfDigit, setThirdSegmentOfDigit] = useState<number[]>([
    0, 0, 0,
  ]);
  const enteredValue = [0, 0, 0] 
    .concat( secondSegmentOfDigit, thirdSegmentOfDigit)
    .reverse().join("")
  const navigate = useNavigate();
  const {handleAddInfo } =
    useUserInfoContext();
  const [isValid, setIsValid] = useValidation(enteredValue !== "000000000");

  

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "salary",
      value: enteredValue,
    });
    navigate(pagesRoutes.openAccount.end);
  };

  return (
    <VideoWithAmount
    enteredValue={enteredValue}
    secondSegmentOfDigit={secondSegmentOfDigit}
    thirdSegmentOfDigit={thirdSegmentOfDigit}
    validation={isValid}
    videoNumber="46"
    setSecondSegmentOfDigit={setSecondSegmentOfDigit}
    setThirdSegmentOfDigit={setThirdSegmentOfDigit}
    handleNext={handleSubmit}
  />
  );
};

export default SalaryPage;
