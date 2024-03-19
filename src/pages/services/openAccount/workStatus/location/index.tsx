import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const WorkLocationPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/open-account/work-status/salary");
  };
  const handleSubmit = () => {
    handleAddInfo({
      key: "working_field",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    setDisableNextButton(false);
    navigate("/al-labeb/open-account/work-status/salary");
  };
  return (
    <div className="flex h-screen flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="45"
          onNext={handleNext}
          previousUrl="/"
          disableNextButton={disableNextButton}
        />
      </div>
      <Keyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default WorkLocationPage;
