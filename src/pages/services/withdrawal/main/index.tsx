import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";

const WithdrawalMainPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/services/IBAN");
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="40" onNext={handleNext} validation="unSet" />
      </div>
    </div>
  );
};

export default WithdrawalMainPage;
