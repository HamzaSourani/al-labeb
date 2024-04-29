import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithNumericKeyboard from "@/components/pages/videoWithNumericKeyboard";

const NumberOfChildrenPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const enteredKeysString = enteredKeys.map((key) => key.value).join("");
  const [isValid, setIsValid] = useValidation(
    Number(enteredKeysString) >= 0 && Number(enteredKeysString) <= 50,
  );
  const handleSubmit = async () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "num_children",
      value: enteredKeysString,
    });
    navigate(pagesRoutes.openAccount.hasHouse);
  };

  return (
    <VideoWithNumericKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="3.5"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default NumberOfChildrenPage;
