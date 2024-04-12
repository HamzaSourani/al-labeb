import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "@/hooks/useValidation";
import VideoWithOptions from "@/components/pages/videoWithOptions";
import pagesRoutes from "@/constants/pagesRoutes";

const UnEmployReasonPage = () => {
  const [selectedStatus, setSelectedStatus] = useState({
    src: "43",
    label: "",
  });
  const navigate = useNavigate();
  const [isValid, setIsValid] = useValidation(selectedStatus.src !== "43");

  const { handleAddInfo } = useUserInfoContext();
  const CLIENT_STATUSES = [
    { src: "43.1", label: "طالب" },
    { src: "43.2", label: "متقاعد" },
    { src: "43.3", label: "لا يعمل" },
  ];
  const handleNext = () => {
    setIsValid("unValid");
    handleAddInfo({ key: "client_status", value: selectedStatus.label });
    navigate(pagesRoutes.openAccount.end);
  };
  return (
    <VideoWithOptions
      selectedOption={selectedStatus}
      validation={isValid}
      options={CLIENT_STATUSES}
      setSelectedOption={setSelectedStatus}
      handleNext={handleNext}
    />
  );
};

export default UnEmployReasonPage;
