import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithOptions from "@/components/pages/videoWithOptions";

const PersonalExpensePage = () => {
  const [selectedExpense, setSelectedExpense] = useState({
    src: "28",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const EXPENSES = [
    { src: "28.1", label: "مواد غذائية" },
    { src: "28.2", label: "خدمات اتصالات" },
    { src: "28.3", label: "مواد بلاستيكية" },
    { src: "28.4", label: "البسة" },
    { src: "28.5", label: "أخرى" },
  ];
  const [isValid, setIsValid] = useValidation(selectedExpense.src !== "28");

  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedExpense.src) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، مواد غذائية",
        });

        break;
      case "28.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، خدمات اتصالات",
        });
        break;
      case "28.3":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، مواد بلاستيكية",
        });

        break;
      case "28.4":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، البسة و مواد تجميل",
        });
        break;

      case "28.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية،اخرى",
        });
        break;
    }
    navigate(pagesRoutes.withdrawal.end);
  };
  return (
    <VideoWithOptions
      selectedOption={selectedExpense}
      validation={isValid}
      options={EXPENSES}
      setSelectedOption={setSelectedExpense}
      handleNext={handleNext}
    />
  );
};

export default PersonalExpensePage;
