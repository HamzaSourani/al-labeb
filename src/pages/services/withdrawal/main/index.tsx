import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const WithdrawalMainPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.services.IBAN.main);
  };
  return (
    <SingleVideo videoNumber="40" validation="unSet" handleNext={handleNext} />
  );
};

export default WithdrawalMainPage;
