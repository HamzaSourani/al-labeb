import Video from "@/components/ui/video";
import { useNavigate } from "react-router-dom";

const GreetingPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/user-name");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="1" onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default GreetingPage;
