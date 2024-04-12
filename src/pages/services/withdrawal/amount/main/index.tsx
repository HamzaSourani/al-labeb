import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { checkMonyAvailability } from "@/api/withdrawal";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
import pagesRoutes from "@/constants/pagesRoutes";

const WithdrawalAmountPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { depositOrWithdrawalInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const navigate = useNavigate();
  const enteredKeysString = enteredKeys.map((key) => key.value).join("");
  const [isValid, setIsValid] = useValidation(Number(enteredKeysString) > 0);

  const handleSubmit = async () => {
    setIsValid("unValid");
    const res = await checkMonyAvailability({
      national_id: depositOrWithdrawalInfo.client,
      account_id: depositOrWithdrawalInfo.account_id,
      amount: enteredKeysString,
    });
    if (res && res?.status) {
      handleAddDepositOrWithdrawalInfo({
        key: "amount",
        value: enteredKeysString,
      });
      navigate(pagesRoutes.withdrawal.cause.main);
    } else {
      navigate(pagesRoutes.withdrawal.amount.exceedAmount);
    }
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video src="40.2" onNext={handleSubmit} validation={isValid} />
      </div>
      <NumericKeyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
      />
    </div>
  );
};

export default WithdrawalAmountPage;
