import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const EndPage = () => {
  const navigate = useNavigate();
  const { isNewUser, handleReset, handleChangeUserStatus } =
    useUserInfoContext();
  const handleNext = () => {
    if (isNewUser) {
      handleChangeUserStatus({ isNewUser: false });
      navigate(pagesRoutes.deposit.source.main);
    } else {
      handleReset();
      navigate("/");
    }
  };
  return (
    <SingleVideo videoNumber="30" handleNext={handleNext} validation="unSet" />
  );
};

export default EndPage;
