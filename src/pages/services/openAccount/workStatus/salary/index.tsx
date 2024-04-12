import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
import VideoWithNumericKeyboard from "@/components/pages/videoWithNumericKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const SalaryPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useValidation(
    Number(enteredKeys.map((key) => key.value).join("")) > 0,
  );

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "salary",
      value: enteredKeys.map((key) => key.value).join(""),
    });
    navigate(pagesRoutes.openAccount.end);
  };

  return (
    <VideoWithNumericKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="46"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default SalaryPage;
