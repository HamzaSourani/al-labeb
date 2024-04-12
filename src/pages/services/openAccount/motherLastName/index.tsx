import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key } from "@/components/ui/keyboard/type";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import VideoWithKeyboard from "@/components/pages/videoWithKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const MotherLastNamePage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const [isValid, setIsValid] = useValidation(enteredKeys.length > 2);
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "mother_lastname",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate(pagesRoutes.openAccount.maritalStatus.main);
  };
  return (
    <VideoWithKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="3.3"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default MotherLastNamePage;
