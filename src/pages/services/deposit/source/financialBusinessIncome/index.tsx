import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "@/hooks/useValidation";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import VideoWithOptions from "@/components/pages/videoWithOptions";
import pagesRoutes from "@/constants/pagesRoutes";

const FinancialBusinessIncomePage = () => {
  const [selectedIncome, setSelectedIncome] = useState({
    src: "29",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const FINANCIAL_BUSINESS_INCOMES = [
    { src: "28.1", label: "مواد غذائية" },
    { src: "28.2", label: "خدمات اتصالات" },
    { src: "28.3", label: "مواد بلاستيكية" },
    { src: "28.4", label: "البسة" },
    { src: "28.5", label: "أخرى" },
  ];
  const [isValid, setIsValid] = useValidation(selectedIncome.src !== "29");

  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedIncome.src) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، مواد غذائية",
        });
        break;
      case "28.2":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، خدمات اتصالات",
        });
        break;
      case "28.3":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، مواد بلاستيكية",
        });
        break;
      case "28.4":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، البسة",
        });
        break;
      case "28.5":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، أخرى",
        });
        break;
    }
    navigate(pagesRoutes.deposit.cause);
  };
  return (
    <VideoWithOptions
      selectedOption={selectedIncome}
      validation={isValid}
      options={FINANCIAL_BUSINESS_INCOMES}
      setSelectedOption={setSelectedIncome}
      handleNext={handleNext}
    />
  );
};

export default FinancialBusinessIncomePage;
