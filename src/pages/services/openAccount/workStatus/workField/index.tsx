import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";

const WorkFieldPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const isValid = useValidation(enteredKeys.length > 2);

  const handleSubmit = () => {
    handleAddInfo({
      key: "working_field",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate("/al-labeb/open-account/work-status/salary");
  };
  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="45"
          onNext={handleSubmit}
          validation={isValid}
          disableNextButton={isValid === "unValid"}
        />
      </div>
      <Keyboard enteredKeys={enteredKeys} setEnteredKeys={setEnteredKeys} />
    </div>
  );
};

export default WorkFieldPage;
