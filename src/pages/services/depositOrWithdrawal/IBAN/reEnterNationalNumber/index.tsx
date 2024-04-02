import Video from "@/components/ui/video";
import { useNavigate } from "react-router-dom";

const ReEnterNationalNumberPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/national-number");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="50" onNext={handleNext} validation="unSet" />
      </div>
    </div>
  );
};

export default ReEnterNationalNumberPage;
