import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const RefuseTermsAndConditionsPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/open-account/saving-account");
  };
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="" onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default RefuseTermsAndConditionsPage;
