import API_ROUTES from "../apiRoutes";
import API_INSTANCE from "../instance";
import ReturnValue from "./type";

const checkNationalNumber = async (national_id: string) => {
  try {
    const res = await API_INSTANCE.get<ReturnValue>(
      API_ROUTES.CHECK_USER_EXISTING,
      {
        params: { national_id },
      },
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default checkNationalNumber;
