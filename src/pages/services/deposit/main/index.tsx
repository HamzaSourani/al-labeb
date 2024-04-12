import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const DepositMainPage = () => {
  const navigate = useNavigate();
  const { isNewUser, handleChangeUserStatus } = useUserInfoContext();
  const handleNext = () => {
    if (isNewUser) {
      handleChangeUserStatus({ isNewUser: false });
      navigate(pagesRoutes.deposit.source.main);
    } else {
      navigate(pagesRoutes.services.IBAN.main);
    }
  };
  return (
    <SingleVideo videoNumber="4" validation="unSet" handleNext={handleNext} />
  );
};

export default DepositMainPage;
