import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const UserPhoneNumberPage = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/services");
  };
  const handleSubmit = async () => {
    handleAddInfo({
      key: "phone",
      value: enteredKeys,
    });
    setDisableNextButton(false);
    navigate("/al-labeb/services");
  };

  return (
    <div className="flex h-screen flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="4.4"
          onNext={handleNext}
          previousUrl="/"
          disableNextButton={disableNextButton}
        />
      </div>
      <NumericKeyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserPhoneNumberPage;
