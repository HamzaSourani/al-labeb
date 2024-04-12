import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const GreetingPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.userName);
  };
  return (
    <SingleVideo videoNumber="1" handleNext={handleNext} validation="unSet" />
  );
};

export default GreetingPage;
