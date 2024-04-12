import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithOptions from "@/components/pages/videoWithOptions";

const WithDrawalCausePage = () => {
  const [selectedCause, setSelectedCause] = useState({
    src: "25",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const CAUSES = [
    { src: "25.1", label: "مصاريف شخصية" },
    { src: "25.2", label: "راتب" },
    { src: "25.3", label: "اغراض تجارية" },
  ];
  const [isValid, setIsValid] = useValidation(selectedCause.src !== "25");

  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedCause.src) {
      case "25.1":
        navigate(pagesRoutes.withdrawal.cause.personalExpense);
        break;
      case "25.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "راتب",
        });
        navigate(pagesRoutes.withdrawal.end);
        break;
      case "25.3":
        navigate(pagesRoutes.withdrawal.cause.commercialPurpose);
        break;
    }
  };
  return (
    <VideoWithOptions
      selectedOption={selectedCause}
      validation={isValid}
      options={CAUSES}
      setSelectedOption={setSelectedCause}
      handleNext={handleNext}
    />
  );
};

export default WithDrawalCausePage;
