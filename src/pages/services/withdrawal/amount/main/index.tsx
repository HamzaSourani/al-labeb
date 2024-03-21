import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const WithdrawalAmountPage = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {};
  const handleSubmit = async () => {
    if (true) {
      handleAddDepositOrWithdrawalInfo({
        key: "amount",
        value: enteredKeys,
      });
      setDisableNextButton(false);
      navigate("/al-labeb/withdrawal/cause");
    } else {
      navigate("exceed-amount");
    }
  };

  return (
    <div className="flex h-screen flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="40.2"
          onNext={handleNext}
          previousUrl="/"
          disableNextButton={disableNextButton}
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

export default WithdrawalAmountPage;
