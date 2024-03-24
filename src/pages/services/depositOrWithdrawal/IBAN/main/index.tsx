import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import checkNationalNumber from "@/api/nationalNumber";

const IBANPage = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const { depositOrWithdrawalInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  console.log(depositOrWithdrawalInfo);
  const navigate = useNavigate();
  const handleNext = () => {};
  const handleSubmit = async () => {
    const res = await checkNationalNumber({
      national_id: depositOrWithdrawalInfo.national_id,
      account_id: enteredKeys,
    });
    if (res?.data && res.data.status) {
      handleAddDepositOrWithdrawalInfo({
        key: "account_id",
        value: enteredKeys,
      });
      switch (depositOrWithdrawalInfo.service_name) {
        case "إيداع":
          navigate("/al-labeb/deposit/source");
          break;
        case "سحب":
          navigate("/al-labeb/withdrawal/amount");
          break;
        default:
          navigate("/al-labeb/services");
          break;
      }
    } else {
      navigate("/al-labeb/services/IBAN/re-enter-national-number");
    }

    setDisableNextButton(false);
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="4.1"
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

export default IBANPage;
