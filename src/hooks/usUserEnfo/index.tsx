import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { HandleAddInfoParams, UserInfo, UserInfoContextType } from "./type";

const userInformation = {
  national_id: "",
  client_name: "",
  phone: "",
  mother_firstname: "",
  mother_lastname: "",
  address: "",
  working: false,
  client_status: "",
  working_field: "",
  company_name: "",
  salary: "",
  housing: false,
  married: false,
  spouse_firstname: "",
  spouse_lastname: "",
  num_children: "",
  created: null,
};
const userInfoContext = createContext<UserInfoContextType>({
  userInfo: userInformation,
  handleAddInfo: () => {},
});

export const useUserInfoContext = () => {
  return useContext(userInfoContext);
};

const UserInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(userInformation);

  const handleAddInfo = ({ key, value }: HandleAddInfoParams) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [key]: value,
    }));
  };

  return (
    <userInfoContext.Provider value={{ userInfo, handleAddInfo }}>
      {children}
    </userInfoContext.Provider>
  );
};

export default UserInfoProvider;
