export interface Business {
  _id: string;
  address: string;
  sub_district: string;
  city: string;
  province: string;
  zipcode: string;
  country: string;
  email: string;
  phonenumber: string;
  status: boolean;
  type: string;
  company_name?: string;
  vat_id?: string;
  billing_address?: string;
  billing_sub_district?: string;
  billing_city?: string;
  billing_province?: string;
  billing_zipcode?: string;
  billing_country?: string;
  billing_email?: string;
  name?: string;
  surname?: string;
}

export interface GetBusinessAccountsRequest {
  token: string;
  data: { email: string | null; pageIndex: number; rowsPerPage: number };
}

export interface AddSuperAdminRequest {
  token: string;
  email: string;
  data: {
    email: string;
    full_name: string;
    phonenumber: string;
    status: boolean;
    password: string;
  };
}

export interface DeleteSuperAdminRequest {
  token: string;
  email: string;
  deleteEmail: string;
}

export interface EditSuperAdminRequest {
  token: string;
  email: string;
  data: {
    email: string;
    full_name: string;
    phonenumber: string;
    status: boolean;
  };
}

export interface GetSuperAdminsRequest {
  token: string;
  data: { email: string | null; pageNum: number; dataNum: number };
}

export interface ResetSuperAdminPasswordRequest {
  token: string;
  email: string;
  data: { email: string; password: string };
}
