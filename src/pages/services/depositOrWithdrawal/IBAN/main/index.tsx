import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import checkNationalNumber from "@/api/nationalNumber";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithNumericKeyboard from "@/components/pages/videoWithNumericKeyboard";

const IBANPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const {
    depositOrWithdrawalInfo,
    userInfo,
    handleAddDepositOrWithdrawalInfo,
  } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(enteredKeys.length === 9);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    setIsValid("unValid");
    const res = await checkNationalNumber({
      national_id: depositOrWithdrawalInfo.client,
      account_id: enteredKeys.map((key) => key.value).join(""),
      client_name: userInfo.client_name,
    });
    if (res?.data && res.data.status) {
      handleAddDepositOrWithdrawalInfo({
        key: "account_id",
        value: enteredKeys.map((key) => key.value).join(""),
      });
      switch (depositOrWithdrawalInfo.service_name) {
        case "إيداع":
          navigate(pagesRoutes.deposit.source.main);
          break;
        case "سحب":
          navigate(pagesRoutes.withdrawal.amount.main);
          break;
        default:
          navigate(pagesRoutes.services.main);
          break;
      }
    } else {
      navigate(pagesRoutes.services.IBAN.reEnterNationalNumber);
    }
  };

  return (
    <VideoWithNumericKeyboard
      enteredKeys={enteredKeys}
      videoNumber="4.1"
      validation={isValid}
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default IBANPage;
