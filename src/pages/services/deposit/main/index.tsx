import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const DepositMainPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/services/national-number");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="4" onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default DepositMainPage;
