import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";

const MotherLastNamePage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);

  const isValid = useValidation(enteredKeys.length > 2);
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    handleAddInfo({
      key: "mother_lastname",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    navigate("/al-labeb/open-account/marital-status");
  };
  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="3.3"
          onNext={handleSubmit}
          validation={isValid}
          disableNextButton={isValid === "unValid"}
        />
      </div>
      <Keyboard enteredKeys={enteredKeys} setEnteredKeys={setEnteredKeys} />
    </div>
  );
};

export default MotherLastNamePage;
