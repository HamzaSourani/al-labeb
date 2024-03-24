import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const ExistAccountPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/end");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="33" onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default ExistAccountPage;
