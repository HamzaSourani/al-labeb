import { useNavigate } from "react-router-dom";
import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const DepositMainPage = () => {
  const navigate = useNavigate();
  const { isNewUser, handleChangeUserStatus } = useUserInfoContext();
  const handleNext = () => {
    if (isNewUser) {
      handleChangeUserStatus({ isNewUser: false });
      navigate("/al-labeb/deposit/source");
    } else {
      navigate("/al-labeb/services/IBAN");
    }
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="4" onNext={handleNext} validation="unSet" />
      </div>
    </div>
  );
};

export default DepositMainPage;
