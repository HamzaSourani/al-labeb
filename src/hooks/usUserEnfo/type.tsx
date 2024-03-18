export interface UserInfo {
  national_id: string;
  client_name: string;
  phone: string;
  mother_firstname: string;
  mother_lastname: string;
  address: string;
  working: boolean;
  client_status: string;
  working_field: string;
  company_name: string;
  salary: string;
  housing: boolean;
  married: boolean;
  spouse_firstname: string;
  spouse_lastname: string;
  num_children: string;
  created: Date | null;
}

export interface HandleAddInfoParams {
  key: keyof UserInfo;
  value: string | boolean | object | null;
}

export interface UserInfoContextType {
  userInfo: UserInfo;
  handleAddInfo: ({ key, value }: HandleAddInfoParams) => void;
}
