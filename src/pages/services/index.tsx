import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import VideoWithOptions from "@/components/pages/videoWithOptions";
import pagesRoutes from "@/constants/pagesRoutes";
const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState({
    src: "2",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(selectedService.src !== "2");

  const SERVICES = [
    { src: "4", label: "خدمة الإيداع" },
    { src: "40", label: "خدمة السحب" },
  ];
  const handleNext = () => {
    setIsValid("unValid");
    switch (selectedService.src) {
      case "4":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "إيداع",
        });

        break;
      case "40":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "سحب",
        });
        break;
    }
    navigate(pagesRoutes.services.IBAN.main);
  };
  return (
    <VideoWithOptions
      selectedOption={selectedService}
      validation={isValid}
      options={SERVICES}
      setSelectedOption={setSelectedService}
      handleNext={handleNext}
    />
  );
};

export default ServicesPage;
