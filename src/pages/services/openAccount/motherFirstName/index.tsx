import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key } from "@/components/ui/keyboard/type";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import VideoWithKeyboard from "@/components/pages/videoWithKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const MotherFirstNamePage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useValidation(enteredKeys.length > 2);

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "mother_firstname",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate(pagesRoutes.openAccount.motherLastName);
  };
  return (
    <VideoWithKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="3.2"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default MotherFirstNamePage;
