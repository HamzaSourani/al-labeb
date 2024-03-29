import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";

const SpouseFirstNamePage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const isValid = useValidation(enteredKeys.length > 2);

  const handleSubmit = () => {
    handleAddInfo({
      key: "spouse_firstname",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate("/al-labeb/open-account/spouse-last-name");
  };
  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="3.4.1"
          onNext={handleSubmit}
          validation={isValid}
          disableNextButton={isValid === "unValid"}
        />
      </div>
      <Keyboard enteredKeys={enteredKeys} setEnteredKeys={setEnteredKeys} />
    </div>
  );
};

export default SpouseFirstNamePage;
