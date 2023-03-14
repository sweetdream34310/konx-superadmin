// import axios from "axios";
import { superAdmin } from "../../@fakeDB/superAdmin";
import { AddSuperAdminRequest } from "../../types";
const AddSuperAdmin = (reqData: AddSuperAdminRequest) => {
  // const resData = await axios.get("api/superadmin/get", reqData)

  const email = reqData.data.email;
  const full_name = reqData.data.full_name;
  const phonenumber = reqData.data.phonenumber;
  const status = reqData.data.status;
  const password = reqData.data.password;

  const newSuperAdmin = {
    full_name,
    email,
    phonenumber,
    status,
    password,
  };
  //   const index = superAdmin.findIndex((item) => item.email == email)
  superAdmin.push(newSuperAdmin);

  const resData = {
    message: "success",
  };

  return resData;
};

export { AddSuperAdmin };
