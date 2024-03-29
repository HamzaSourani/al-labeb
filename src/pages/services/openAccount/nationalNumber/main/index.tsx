import checkNationalNumber from "@/api/nationalNumber";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import useValidation from "@/hooks/useValidation";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key } from "@/components/ui/NumericKeyboard/type";

const NationalNumberMainPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const isValid = useValidation(enteredKeys.length === 11);

  const handleSubmit = async () => {
    const res = await checkNationalNumber({
      national_id: enteredKeys.map((key) => key.value).join(""),
    });
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
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="32"
          onNext={handleSubmit}
          validation={isValid}
          disableNextButton={isValid === "unValid"}
        />
      </div>
      <NumericKeyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
      />
    </div>
  );
};

export default NationalNumberMainPage;
