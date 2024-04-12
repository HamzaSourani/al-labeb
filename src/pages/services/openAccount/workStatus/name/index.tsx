import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key } from "@/components/ui/keyboard/type";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithKeyboard from "@/components/pages/videoWithKeyboard";

const WorkNamePage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useValidation(enteredKeys.length > 2);

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "company_name",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate(pagesRoutes.openAccount.workStatus.workField);
  };
  return (
    <VideoWithKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="44"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default WorkNamePage;
