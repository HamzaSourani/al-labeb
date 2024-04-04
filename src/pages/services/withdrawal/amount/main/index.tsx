import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { checkMonyAvailability } from "@/api/withdrawal";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";

const WithdrawalAmountPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { depositOrWithdrawalInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const navigate = useNavigate();
  const isValid = useValidation(
    Number(enteredKeys.map((key) => key.value).join("")) > 0,
  );

  const handleSubmit = async () => {
    const res = await checkMonyAvailability({
      national_id: depositOrWithdrawalInfo.client,
      account_id: depositOrWithdrawalInfo.account_id,
      amount: enteredKeys.map((key) => key.value).join(""),
    });
    if (res && res?.status) {
      handleAddDepositOrWithdrawalInfo({
        key: "amount",
        value: enteredKeys.map((key) => key.value).join(""),
      });
      navigate("/al-labeb/withdrawal/cause");
    } else {
      navigate("exceed-amount");
    }
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="40.2"
          onNext={handleSubmit}
          validation={isValid}
          disableNextButton={isValid === "unValid"}
        />
      </div>
      <NumericKeyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
      />
    </div>
  );
};

export default WithdrawalAmountPage;
