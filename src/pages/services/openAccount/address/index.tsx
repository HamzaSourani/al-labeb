import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const UserAddressPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/open-account/work-status");
  };
  const handleSubmit = () => {
    handleAddInfo({
      key: "address",
      value: enteredKeys.map((key) => key.label).join(""),
    });
    setDisableNextButton(false);
    navigate("/al-labeb/open-account/work-status");
  };
  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="3.7"
          onNext={handleSubmit}
          previousUrl="/"
          // disableNextButton={disableNextButton}
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

export default UserAddressPage;
