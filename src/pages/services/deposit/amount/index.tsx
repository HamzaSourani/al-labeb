import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithAmount from "@/components/pages/videoWithAmount";

const DepositAmountPage = () => {
  const [secondSegmentOfDigit, setSecondSegmentOfDigit] = useState<number[]>([
    0, 0, 0,
  ]);
  const [thirdSegmentOfDigit, setThirdSegmentOfDigit] = useState<number[]>([
    0, 0, 0,
  ]);
  const enteredValue = ([0, 0, 0] as (string | number)[])
    .concat([","], secondSegmentOfDigit, [","], thirdSegmentOfDigit)
    .reverse()
    .join("");
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(enteredValue !== "000,000,000");

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddDepositOrWithdrawalInfo({
      key: "amount",
      value: enteredValue,
    });
    navigate(pagesRoutes.deposit.end);
  };

  return (
    <VideoWithAmount
      enteredValue={enteredValue}
      secondSegmentOfDigit={secondSegmentOfDigit}
      thirdSegmentOfDigit={thirdSegmentOfDigit}
      validation={isValid}
      videoNumber="4.2"
      setSecondSegmentOfDigit={setSecondSegmentOfDigit}
      setThirdSegmentOfDigit={setThirdSegmentOfDigit}
      handleNext={handleSubmit}
    />
  );
};

export default DepositAmountPage;
