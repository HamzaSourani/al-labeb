import API_ROUTES from "../apiRoutes";
import API_INSTANCE from "../instance";
import { ReturnValue, CheckNationalNumberParams } from "./type";

const checkNationalNumber = async (params: CheckNationalNumberParams) => {
  try {
    const res = await API_INSTANCE.get<ReturnValue>(
      API_ROUTES.CHECK_USER_EXISTING,
      {
        params,
      },
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default checkNationalNumber;
