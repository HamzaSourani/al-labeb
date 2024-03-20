import checkNationalNumber from "@/api/nationalNumber";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NationalNumberMainPage = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const handleNext = () => {};
  const handleSubmit = async () => {
    const res = await checkNationalNumber({ national_id: enteredKeys });
    if (res?.data && res.data.status) {
      handleAddDepositOrWithdrawalInfo({
        key: "national_id",
        value: enteredKeys,
      });
      navigate("/al-labeb/services/IBAN");
    } else {
      navigate("/al-labeb/services/national-number/un-exist");
    }
  };
  return (
    <div className="flex h-screen flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="32"
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
