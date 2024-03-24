import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const DepositAmountPage = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {};
  const handleSubmit = () => {
    handleAddDepositOrWithdrawalInfo({
      key: "amount",
      value: enteredKeys,
    });
    setDisableNextButton(false);
    navigate("/al-labeb/deposit/end");
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="4.2"
          onNext={handleSubmit}
          previousUrl="/"
          // disableNextButton={disableNextButton}
        />
      </div>
      <NumericKeyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default DepositAmountPage;
