import Video from "@/components/ui/video";
import { useNavigate } from "react-router-dom";

const ReEnterNationalNumberPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/services/national-number");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        {
          //TODO change video to re enter national number
        }
        <Video src="0" onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default ReEnterNationalNumberPage;
