import { useNavigate } from "react-router-dom";
import YesNo from "@/components/pages/yesNo";
import pagesRoutes from "@/constants/pagesRoutes";

const SavingAccountMainPage = () => {
  const navigate = useNavigate();
  const handlePositiveCase = () => {
    navigate(pagesRoutes.openAccount.savingAccount.explanation);
  };
  const handleNegativeCase = () => {
    navigate("/al-labeb/open-account/terms-and-conditions");
  };
  return (
    <YesNo
      videoNumber="9"
      handlePositiveCase={handlePositiveCase}
      handleNegativeCase={handleNegativeCase}
    />
  );
};

export default SavingAccountMainPage;
