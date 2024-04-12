import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const OpenAccountMainPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.openAccount.savingAccount.main);
  };
  return (
    <SingleVideo videoNumber="3" validation="unSet" handleNext={handleNext} />
  );
};

export default OpenAccountMainPage;
