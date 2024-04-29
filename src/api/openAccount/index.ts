import { UserInfo } from "@/hooks/usUserInfo/type";
import API_ROUTES from "../../constants/apiRoutes";
import API_INSTANCE from "../instance";

const openAccount = async (userInfo: UserInfo) => {
  try {
    const { data } = await API_INSTANCE.post(API_ROUTES.OPEN_ACCOUNT, userInfo);
    return data;
  } catch (error) {}
};

export { openAccount };
