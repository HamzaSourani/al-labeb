import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import YesNo from "@/components/pages/yesNo";
import pagesRoutes from "@/constants/pagesRoutes";

const HasHousePage = () => {
  const navigate = useNavigate();
  const { handleAddInfo } = useUserInfoContext();

  const handlePositiveCase = () => {
    handleAddInfo({
      key: "housing",
      value: true,
    });
    navigate(pagesRoutes.openAccount.userAddress);
  };
  const handleNegativeCase = () => {
    handleAddInfo({
      key: "housing",
      value: false,
    });
    navigate(pagesRoutes.openAccount.userAddress);
  };
  return (
    <YesNo
      videoNumber="3.6"
      handlePositiveCase={handlePositiveCase}
      handleNegativeCase={handleNegativeCase}
    />
  );
};

export default HasHousePage;
