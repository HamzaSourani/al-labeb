import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const EndPage = () => {
  const navigate = useNavigate();
  const {
    depositOrWithdrawalInfo,
    handleAddDepositOrWithdrawalInfo,
    handleReset,
  } = useUserInfoContext();
  console.log(!!!depositOrWithdrawalInfo.service_name, "service_name");
  const handleNext = () => {
    if (!!!depositOrWithdrawalInfo.service_name) {
      handleAddDepositOrWithdrawalInfo({ key: "service_name", value: "إيداع" });
      navigate("/al-labeb/deposit");
    } else {
      handleReset();
      navigate("/");
    }
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
