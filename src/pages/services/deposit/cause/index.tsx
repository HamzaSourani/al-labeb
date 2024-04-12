import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";
import VideoWithOptions from "@/components/pages/videoWithOptions";

const DepositCausePage = () => {
  const [selectedCause, setSelectedCause] = useState({
    src: "26",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(selectedCause.src !== "26");

  const CAUSES = [
    { src: "26.1", label: "ادخار" },
    { src: "26.2", label: "تغذية حساب" },
    { src: "26.3", label: "سداد التزام" },
    { src: "26.4", label: "تحويل وحدات" },
    { src: "26.5", label: "قسط" },
    { src: "26.6", label: "قيمة فاتورة" },
  ];

  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedCause.src) {
      case "26.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "ادخار",
        });

        break;
      case "26.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "تغذية حساب",
        });
        break;
      case "26.3":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "سداد التزام",
        });

        break;
      case "26.4":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "تحويل وحدات",
        });
        break;
      case "26.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "قسط",
        });

        break;
      case "26.6":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "قيمة فاتورة",
        });
        break;
    }
    navigate(pagesRoutes.deposit.amount);
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

export default DepositCausePage;
