import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { checkMonyAvailability } from "@/api/withdrawal";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithAmount from "@/components/pages/amount";

const WithdrawalAmountPage = () => {
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
  const { depositOrWithdrawalInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const [isValid, setIsValid] = useValidation(enteredValue !== "000,000,000");

  const handleSubmit = async () => {
    setIsValid("unValid");
    const res = await checkMonyAvailability({
      national_id: depositOrWithdrawalInfo.client,
      account_id: depositOrWithdrawalInfo.account_id,
      amount: enteredValue,
    });
    if (res && res?.status) {
      handleAddDepositOrWithdrawalInfo({
        key: "amount",
        value: enteredValue,
      });
      navigate(pagesRoutes.withdrawal.cause.main);
    } else {
      navigate(pagesRoutes.withdrawal.amount.exceedAmount);
    }
  };
  return (
    <VideoWithAmount
      enteredValue={enteredValue}
      validation={isValid}
      videoNumber="40.2"
      setSecondSegmentOfDigit={setSecondSegmentOfDigit}
      setThirdSegmentOfDigit={setThirdSegmentOfDigit}
      handleNext={handleSubmit}
    />
  );
};

export default WithdrawalAmountPage;
