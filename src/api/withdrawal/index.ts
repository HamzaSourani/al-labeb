import { DepositOrWithDrawalInfoObject } from "@/hooks/usUserInfo/type";
import API_ROUTES from "../apiRoutes";
import API_INSTANCE from "../instance";

const withdrawal = async (withdrawalInfo: DepositOrWithDrawalInfoObject) => {
  try {
    const { data } = await API_INSTANCE.post(
      API_ROUTES.WITHDRAWAL,
      withdrawalInfo,
    );
    return data;
  } catch (error) {}
};
export default withdrawal;
