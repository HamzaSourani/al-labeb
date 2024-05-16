import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const EndPage = () => {
  const navigate = useNavigate();
  const { isNewUser, userInfo, handleReset, handleChangeUserStatus } =
    useUserInfoContext();
  const handleNext = () => {
    if (isNewUser) {
      handleChangeUserStatus({ isNewUser: false });
      navigate(pagesRoutes.deposit.shouldDeposit);
    } else {
      localStorage.setItem("national_id", userInfo.national_id);
      handleReset();
      navigate(`/al-labeb/employ-password`);
    }
  };
  return (
    <>
      <SingleVideo
        videoNumber="30"
        handleNext={handleNext}
        validation="unSet"
      />
    </>
  );
};

export default EndPage;
