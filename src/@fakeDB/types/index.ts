export type SuperAdminType = {
  full_name: string;
  email: string;
  phonenumber: string;
  status: boolean;
  password: string;
};

export type BusinessAccountsType = {
  _id: string;
  type: string;
  business_id: string;
};

export type BusinessType = {
  _id: string;
  company_name: string;
  vat_id: string;
  address: string;
  sub_district: string;
  city: string;
  province: string;
  zipcode: string;
  country: string;
  email: string;
  phonenumber: string;
  billing_address: string;
  billing_sub_district: string;
  billing_city: string;
  billing_province: string;
  billing_zipcode: string;
  billing_country: string;
  billing_email: string;
  status: boolean;
};

export type BusinessPrivateType = {
  _id: string;
  email: string;
  name: string;
  surname: string;
  address: string;
  sub_district: string;
  city: string;
  province: string;
  zipcode: string;
  country: string;
  phonenumber: string;
  status: boolean;
};
