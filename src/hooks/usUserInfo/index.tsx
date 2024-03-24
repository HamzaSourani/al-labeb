import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import {
  HandleAddInfoParams,
  UserInfo,
  UserInfoContextType,
  DepositOrWithDrawalInfoObject,
  HandleAddDepositOrWithdrawalInfoParams,
} from "./type";

const userInformation = {
  national_id: "",
  client_name: "",
  phone: "",
  mother_firstname: "",
  mother_lastname: "",
  address: "",
  working: false,
  client_status: null,
  working_field: null,
  company_name: null,
  salary: null,
  housing: false,
  married: false,
  spouse_firstname: null,
  spouse_lastname: null,
  num_children: null,
};
const depositOrWithDrawalInfoObject = {
  national_id: "",
  client: "",
  account_id: "",
  service_name: "",
  amount: "",
  phone: "",
  source: null,
  cause: "",
};

const userInfoContext = createContext<UserInfoContextType>({
  userInfo: userInformation,
  depositOrWithdrawalInfo: depositOrWithDrawalInfoObject,
  handleAddDepositOrWithdrawalInfo: () => {},
  handleAddInfo: () => {},
});

export const useUserInfoContext = () => {
  return useContext(userInfoContext);
};

const UserInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(userInformation);
  const [depositOrWithdrawalInfo, setDepositOrWithDrawalInfo] =
    useState<DepositOrWithDrawalInfoObject>(depositOrWithDrawalInfoObject);

  const handleAddInfo = ({ key, value }: HandleAddInfoParams) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [key]: value,
    }));
  };

  const handleAddDepositOrWithdrawalInfo = ({
    key,
    value,
  }: HandleAddDepositOrWithdrawalInfoParams) => {
    setDepositOrWithDrawalInfo((preInfo) => ({
      ...preInfo,
      [key]: value,
    }));
  };
  return (
    <userInfoContext.Provider
      value={{
        userInfo,
        handleAddInfo,
        depositOrWithdrawalInfo,
        handleAddDepositOrWithdrawalInfo,
      }}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export default UserInfoProvider;
