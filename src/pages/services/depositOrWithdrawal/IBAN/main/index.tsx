import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import checkNationalNumber from "@/api/nationalNumber";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";

const IBANPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { depositOrWithdrawalInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const isValid = useValidation(enteredKeys.length === 9);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const res = await checkNationalNumber({
      national_id: depositOrWithdrawalInfo.national_id,
      account_id: enteredKeys.map((key) => key.value).join(""),
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
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="4.1"
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

export default IBANPage;
