import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";

const UserPhoneNumberPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  const isValid = useValidation(enteredKeys.length === 10);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    handleAddInfo({
      key: "phone",
      value: enteredKeys.map((key) => key.value).join(""),
    });
    handleAddDepositOrWithdrawalInfo({
      key: "phone",
      value: enteredKeys.map((key) => key.value).join(""),
    });
    navigate("/al-labeb/national-number");
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="4.4"
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

export default UserPhoneNumberPage;
