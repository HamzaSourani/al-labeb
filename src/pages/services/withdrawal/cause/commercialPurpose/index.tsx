import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import VideoWithOptions from "@/components/pages/videoWithOptions";
import pagesRoutes from "@/constants/pagesRoutes";

const CommercialPurposePage = () => {
  const [selectedPurpose, setSelectedPurpose] = useState({
    src: "29",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const PURPOSES = [
    { src: "28.1", label: "مواد غذائية" },
    { src: "28.2", label: "خدمات اتصالات" },
    { src: "28.3", label: "مواد بلاستيكية" },
    { src: "28.4", label: "البسة" },
    { src: "28.5", label: "أخرى" },
  ];
  const [isValid, setIsValid] = useValidation(selectedPurpose.src !== "29");

  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedPurpose.src) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، مواد غذائية",
        });

        break;
      case "28.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، خدمات اتصالات",
        });
        break;
      case "28.3":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، مواد بلاستيكية",
        });

        break;
      case "28.4":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، البسة",
        });
        break;
      case "28.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، أخرى",
        });

        break;
    }
    navigate(pagesRoutes.withdrawal.end);
  };
  return (
    <VideoWithOptions
      selectedOption={selectedPurpose}
      validation={isValid}
      options={PURPOSES}
      setSelectedOption={setSelectedPurpose}
      handleNext={handleNext}
    />
  );
};

export default CommercialPurposePage;
