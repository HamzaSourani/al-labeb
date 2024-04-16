import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

const EndPage = () => {
  const navigate = useNavigate();
  const {
    depositOrWithdrawalInfo,
    handleAddDepositOrWithdrawalInfo,
    handleReset,
  } = useUserInfoContext();
  const handleNext = () => {
    if (!!!depositOrWithdrawalInfo.service_name) {
      handleAddDepositOrWithdrawalInfo({ key: "service_name", value: "إيداع" });
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
