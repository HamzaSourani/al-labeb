import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import YesNo from "@/components/pages/yesNo";
import pagesRoutes from "@/constants/pagesRoutes";

const ExistAccountPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfoContext();
  console.log(userInfo);
  const handlePositiveCase = () => {
    navigate(pagesRoutes.openAccount.main);
  };
  const handleNegativeCase = () => {
    navigate(-1);
  };

  return (
    <YesNo
      videoNumber="49"
      handlePositiveCase={handlePositiveCase}
      handleNegativeCase={handleNegativeCase}
    />
  );
};

export default ExistAccountPage;
