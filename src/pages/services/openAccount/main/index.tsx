import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const OpenAccountMainPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/open-account/saving-account");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="3" onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default OpenAccountMainPage;
