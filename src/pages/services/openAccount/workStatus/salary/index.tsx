import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";

const SalaryPage = () => {
  const [enteredKeys, setEnteredKeys] = useState<string>("");
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const isValid = useValidation(Number(enteredKeys) > 0);

  const handleSubmit = async () => {
    handleAddInfo({
      key: "salary",
      value: enteredKeys,
    });
    navigate("/al-labeb/open-account/end");
  };

  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video
          src="46"
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

export default SalaryPage;
