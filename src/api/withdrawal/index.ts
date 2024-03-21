import { DepositOrWithDrawalInfoObject } from "@/hooks/usUserInfo/type";
import API_ROUTES from "../apiRoutes";
import API_INSTANCE from "../instance";
import { CheckMonyAvailabilityParams } from "./type";
import { ReturnValue } from "../nationalNumber/type";

const withdrawal = async (withdrawalInfo: DepositOrWithDrawalInfoObject) => {
  try {
    const { data } = await API_INSTANCE.post(
      API_ROUTES.WITHDRAWAL,
      withdrawalInfo,
    );
    return data;
  } catch (error) {}
};
const checkMonyAvailability = async (params: CheckMonyAvailabilityParams) => {
  try {
    const { data } = await API_INSTANCE.get<ReturnValue>(
      API_ROUTES.CHECK_MONY_AVAILABILITY,
      { params },
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { checkMonyAvailability };
export default withdrawal;
