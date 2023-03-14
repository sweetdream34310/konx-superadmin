// import axios from "axios";
import { GetSuperAdminsRequest } from "../../types";
import {superAdmin} from "../../@fakeDB/superAdmin"

const GetSuperAdminsApi = (reqData : GetSuperAdminsRequest) => {
    // const resData = await axios.get("api/superadmin/get", reqData)
    const start : number = (reqData.data.pageNum - 1) * reqData.data.dataNum;
    const end : number =  reqData.data.pageNum * reqData.data.dataNum - 1;

    const totalPages : number = Math.floor(superAdmin.length / reqData.data.dataNum) + 1
    const superAdminDatas = superAdmin.slice(start, end)

    const resData = {
        pageNum : totalPages,
        superAdminDatas : superAdminDatas
    }
    return resData
}

export {
    GetSuperAdminsApi
}