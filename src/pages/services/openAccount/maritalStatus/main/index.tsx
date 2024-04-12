import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import YesNo from "@/components/pages/yesNo";
import pagesRoutes from "@/constants/pagesRoutes";

const MaritalStatusMainPage = () => {
  const navigate = useNavigate();
  const { handleAddInfo } = useUserInfoContext();

  const handlePositiveCase = () => {
    handleAddInfo({ key: "married", value: true });

    navigate(pagesRoutes.openAccount.maritalStatus.spouseFirstName);
  };
  const handleNegativeCase = () => {
    handleAddInfo({ key: "married", value: false });

    navigate(pagesRoutes.openAccount.hasHouse);
  };
  return (
    <YesNo
      videoNumber="3.4"
      handlePositiveCase={handlePositiveCase}
      handleNegativeCase={handleNegativeCase}
    />
  );
};

export default MaritalStatusMainPage;
