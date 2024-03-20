import { DepositOrWithDrawalInfoObject } from "@/hooks/usUserInfo/type";
import API_ROUTES from "../apiRoutes";
import API_INSTANCE from "../instance";

const deposit = async (depositInfo: DepositOrWithDrawalInfoObject) => {
  try {
    const { data } = await API_INSTANCE.post(API_ROUTES.DEPOSIT, depositInfo);
    return data;
  } catch (error) {}
};
export default deposit;
