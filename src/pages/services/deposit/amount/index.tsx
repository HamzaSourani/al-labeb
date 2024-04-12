import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
import VideoWithNumericKeyboard from "@/components/pages/videoWithNumericKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const DepositAmountPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const navigate = useNavigate();
  const enteredKeysString = enteredKeys.map((key) => key.value).join("");
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(Number(enteredKeysString) > 0);

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddDepositOrWithdrawalInfo({
      key: "amount",
      value: enteredKeysString,
    });
    navigate(pagesRoutes.deposit.end);
  };

  return (
    <VideoWithNumericKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="4.2"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default DepositAmountPage;
