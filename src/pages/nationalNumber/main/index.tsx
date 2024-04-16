import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkNationalNumber from "@/api/nationalNumber";
import useValidation from "@/hooks/useValidation";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { Key } from "@/components/ui/NumericKeyboard/type";
import VideoWithNumericKeyboard from "@/components/pages/videoWithNumericKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const NationalNumberMainPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const navigate = useNavigate();
  const { handleAddInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const [isValid, setIsValid] = useValidation(enteredKeys.length === 11);

  const handleSubmit = async () => {
    setIsValid("unValid");
    const res = await checkNationalNumber({
      national_id: enteredKeys.map((key) => key.value).join(""),
    });

    handleAddDepositOrWithdrawalInfo({
      key: "client",
      value: enteredKeys.map((key) => key.value).join(""),
    });
    handleAddInfo({
      key: "national_id",
      value: enteredKeys.map((key) => key.value).join(""),
    });
    if (res?.data && res.data.status) {
      navigate(pagesRoutes.services.main);
    } else {
      navigate(pagesRoutes.nationalNumber.unExist);
    }
  };
  return (
    <VideoWithNumericKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="32"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default NationalNumberMainPage;
