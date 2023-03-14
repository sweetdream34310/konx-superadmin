// import axios from "axios";
import { ResetSuperAdminPasswordRequest } from "../../types";
import { superAdmin } from "../../@fakeDB/superAdmin";

const ResetSuperAdminPassword = (reqData: ResetSuperAdminPasswordRequest) => {
  // const resData = await axios.get("api/superadmin/get", reqData)

  const email = reqData.data.email;
  const password = reqData.data.password;

  const index = superAdmin.findIndex((item) => item.email == email)
  superAdmin[index].password = password

  const resData = {
    message : 'success',
  };

  return resData;
};

export { ResetSuperAdminPassword };
