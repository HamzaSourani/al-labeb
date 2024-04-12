import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import YesNo from "@/components/pages/yesNo";
import pagesRoutes from "@/constants/pagesRoutes";

const WorkStatusMainPage = () => {
  const navigate = useNavigate();
  const { handleAddInfo } = useUserInfoContext();
  const handlePositiveCase = () => {
    handleAddInfo({ key: "working", value: true });
    navigate(pagesRoutes.openAccount.workStatus.name);
  };
  const handleNegativeCase = () => {
    handleAddInfo({ key: "working", value: false });

    navigate(pagesRoutes.openAccount.workStatus.unEmploy);
  };
  return (
    <YesNo
      videoNumber="3.8"
      handlePositiveCase={handlePositiveCase}
      handleNegativeCase={handleNegativeCase}
    />
  );
};

export default WorkStatusMainPage;
