// import axios from "axios";
import { EditSuperAdminRequest } from "../../types";
import { superAdmin } from "../../@fakeDB/superAdmin";

const EditSuperAdmin = (reqData: EditSuperAdminRequest) => {
  // const resData = await axios.get("api/superadmin/get", reqData)

  const email = reqData.data.email;
  const full_name = reqData.data.full_name;
  const phonenumber = reqData.data.phonenumber;
  const status = reqData.data.status;

  const index = superAdmin.findIndex((item) => item.email == email)
  superAdmin[index].full_name = full_name
  superAdmin[index].phonenumber = phonenumber
  superAdmin[index].status = status

  const resData = {
    message : 'success',
  };

  return resData;
};

export { EditSuperAdmin };
