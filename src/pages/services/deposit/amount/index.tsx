import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";

const DepositAmountPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const isValid = useValidation(
    Number(enteredKeys.map((key) => key.value).join("")) > 0,
  );

  const handleSubmit = () => {
    handleAddDepositOrWithdrawalInfo({
      key: "amount",
      value: enteredKeys.map((key) => key.value).join(""),
    });
    navigate("/al-labeb/deposit/end");
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="4.2"
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

export default DepositAmountPage;
