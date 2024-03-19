import checkNationalNumber from "@/api/nationalNumber";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NationalNumberMainPage = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/user-name");
  };
  const handleSubmit = async () => {
    const res = await checkNationalNumber(enteredKeys);
    if (res?.data && res.data.status) {
      navigate("/al-labeb/open-account/exist-account");
    } else {
      handleAddInfo({
        key: "national_id",
        value: enteredKeys,
      });
      navigate("/al-labeb/open-account/mother-first-name");
    }
  };
  return (
    <div className="flex h-screen flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="0"
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

export default NationalNumberMainPage;
