import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const ExceedAmountPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.withdrawal.amount.main);
  };
  return (
    <SingleVideo videoNumber="48" validation="unSet" handleNext={handleNext} />
  );
};

export default ExceedAmountPage;
