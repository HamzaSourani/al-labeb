import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const ShouldDepositPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.deposit.source.main);
  };
  return (
    <SingleVideo videoNumber="53" handleNext={handleNext} validation="unSet" />
  );
};

export default ShouldDepositPage;
