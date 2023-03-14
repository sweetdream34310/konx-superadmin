// import axios from "axios";
import { DeleteSuperAdminRequest } from "../../types";
import { superAdmin } from "../../@fakeDB/superAdmin";

const DeleteSuperAdmin = (reqData: DeleteSuperAdminRequest) => {
  // const resData = await axios.get("api/superadmin/get", reqData)

  const deleteEmail = reqData.deleteEmail;

  const index = superAdmin.findIndex((item) => item.email == deleteEmail)
  superAdmin.splice(index, 1)

  const resData = {
    message : 'success',
  };

  return resData;
};

export { DeleteSuperAdmin };
