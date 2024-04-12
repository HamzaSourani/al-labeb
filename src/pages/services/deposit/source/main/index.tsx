import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";
import VideoWithOptions from "@/components/pages/videoWithOptions";
import pagesRoutes from "@/constants/pagesRoutes";

const DepositSourcePage = () => {
  const [selectedSource, setSelectedSource] = useState({
    src: "27",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(selectedSource.src !== "27");
  const SOURCES = [
    { src: "27.1", label: "ادخار" },
    { src: "27.2", label: "راتب" },
    { src: "27.3", label: "عائدات عمل تجاري" },
  ];

  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedSource.src) {
      case "27.1":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "ادخار",
        });
        navigate(pagesRoutes.deposit.cause);

        break;
      case "27.2":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "راتب",
        });
        navigate(pagesRoutes.deposit.cause);
        break;
      case "27.3":
        navigate(pagesRoutes.deposit.source.financialBusinessIncome);
        break;
    }
  };
  return (
    <VideoWithOptions
      selectedOption={selectedSource}
      validation={isValid}
      options={SOURCES}
      setSelectedOption={setSelectedSource}
      handleNext={handleNext}
    />
  );
};

export default DepositSourcePage;
