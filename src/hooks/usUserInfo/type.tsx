export interface UserInfo {
  national_id: string;
  client_name: string;
  phone: string;
  mother_firstname: string;
  mother_lastname: string;
  address: string;
  working: boolean;
  client_status: string | null;
  working_field: string | null;
  company_name: string | null;
  salary: string | null;
  housing: boolean;
  married: boolean;
  spouse_firstname: string | null;
  spouse_lastname: string | null;
  num_children: string | null;
}
export interface DepositOrWithDrawalInfoObject {
  client_id: string;
  national_id: string;
  service_name: "withdrawal" | "deposit" | string;
  amount: string;
  source?: string | null;
  cause: string;
}
export interface HandleAddInfoParams {
  key: keyof UserInfo;
  value: string | boolean | object | null;
}

export interface HandleAddDepositOrWithdrawalInfoParams {
  key: keyof DepositOrWithDrawalInfoObject;
  value: string | boolean | object | null;
}

export interface UserInfoContextType {
  userInfo: UserInfo;
  depositOrWithdrawalInfo: DepositOrWithDrawalInfoObject;
  handleAddInfo: ({ key, value }: HandleAddInfoParams) => void;
  handleAddDepositOrWithdrawalInfo: ({
    key,
    value,
  }: HandleAddDepositOrWithdrawalInfoParams) => void;
}
