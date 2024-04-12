import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const ReEnterNationalNumberPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.nationalNumber.main);
  };
  return (
    <SingleVideo videoNumber="50" validation="unSet" handleNext={handleNext} />
  );
};

export default ReEnterNationalNumberPage;
