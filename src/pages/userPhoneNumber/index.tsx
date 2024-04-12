import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
import VideoWithNumericKeyboard from "@/components/pages/videoWithNumericKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const UserPhoneNumberPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const [isValid, setIsValid] = useValidation(enteredKeys.length === 10);

  const navigate = useNavigate();
  const enteredKeysString = enteredKeys.map((key) => key.value).join("");
  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "phone",
      value: enteredKeys,
    });
    handleAddDepositOrWithdrawalInfo({
      key: "phone",
      value: enteredKeysString,
    });
    navigate(pagesRoutes.nationalNumber.main);
  };

  return (
    <VideoWithNumericKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="4.4"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default UserPhoneNumberPage;
