import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import VideoWithKeyboard from "@/components/pages/videoWithKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const WorkFieldPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useValidation(enteredKeys.length > 2);

  const handleSubmit = () => {
    setIsValid("unValid");
    handleAddInfo({
      key: "working_field",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate(pagesRoutes.openAccount.workStatus.salary);
  };
  return (
    <VideoWithKeyboard
      enteredKeys={enteredKeys}
      validation={isValid}
      videoNumber="45"
      setEnteredKeys={setEnteredKeys}
      handleNext={handleSubmit}
    />
  );
};

export default WorkFieldPage;
