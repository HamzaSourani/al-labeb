import { UserInfo } from "@/hooks/usUserInfo/type";
import API_ROUTES from "../apiRoutes";
import API_INSTANCE from "../instance";

const openAccount = async (userInfo: UserInfo) => {
  try {
    const { data } = await API_INSTANCE.post(API_ROUTES.OPEN_ACCOUNT, userInfo);
    return data;
  } catch (error) {}
};
const getCountOfTermsAndConditionVideos = async () => {
  try {
    const { data } = await API_INSTANCE.get(
      API_ROUTES.GET_COUNT_OF_TERMS_AND_CONDITIONS_VIDEOS,
    );
    return data;
  } catch (error) {}
};
export { getCountOfTermsAndConditionVideos, openAccount };
