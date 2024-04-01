import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const EndPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="30" onNext={handleNext} validation="unSet" />
      </div>
    </div>
  );
};

export default EndPage;
