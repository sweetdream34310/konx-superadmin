// import axios from "axios";
import {superAdmin} from "../../@fakeDB/superAdmin"

const GetSuperAdminsTotalNumberApi = () => {
    // const resData = await axios.get("api/superadmin/get", reqData)
    const length = superAdmin.length;

    const resData = {
        data : length
    }
    return resData
}

export {
    GetSuperAdminsTotalNumberApi
}