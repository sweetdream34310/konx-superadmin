// import axios from "axios";
import { businessAccounts } from "../../../@fakeDB/business";
import { businessTypeAccounts } from "../../../@fakeDB/business/accounts/businessType";
import { Business } from "../../../types";
import { GetBusinessAccountsRequest } from "../../../types";
import { businessPrivateTypeAccount } from "../../../@fakeDB/business/accounts/privateType";

const GetBusinessAccountsApi = async (reqData: GetBusinessAccountsRequest) => {
  // const resData = await axios.get("api/superadmin/get", reqData)
  const start: number = (reqData.data.pageIndex - 1) * reqData.data.rowsPerPage;
  const end: number = reqData.data.pageIndex * reqData.data.rowsPerPage - 1;

  const totalPages: number =
    Math.floor(businessAccounts.length / reqData.data.rowsPerPage) + 1;

  const businessAccountDatas = businessAccounts.slice(start, end);

  let businessAccountData: Business[] = [];

  await Promise.all(
    businessAccountDatas.map((item) => {
      if (item.type == "business") {
        const businessTypeAccount = businessTypeAccounts.find(
          (businessTypeItem) => businessTypeItem._id === item.business_id
        );
        if (businessTypeAccount === undefined) {
          return;
        } else {
          const data: Business = {
            _id: item._id,
            address: businessTypeAccount.address,
            city: businessTypeAccount.city,
            country: businessTypeAccount.country,
            email: businessTypeAccount.email,
            phonenumber: businessTypeAccount.phonenumber,
            province: businessTypeAccount.province,
            status: businessTypeAccount.status,
            sub_district: businessTypeAccount.sub_district,
            type: item.type,
            zipcode: businessTypeAccount.zipcode,
            billing_address: businessTypeAccount.billing_address,
            billing_city: businessTypeAccount.billing_city,
            billing_country: businessTypeAccount.billing_country,
            billing_email: businessTypeAccount.billing_email,
            billing_province: businessTypeAccount.billing_province,
            billing_sub_district: businessTypeAccount.billing_sub_district,
            billing_zipcode: businessTypeAccount.billing_zipcode,
            company_name: businessTypeAccount.company_name,
            vat_id: businessTypeAccount.vat_id,
          };

          businessAccountData.push(data);
        }
      } else if (item.type == "private") {
        const privateTypeAccount = businessPrivateTypeAccount.find(
          (privateTypeItem) => privateTypeItem._id === item.business_id
        );
        if (privateTypeAccount === undefined) {
          return;
        } else {
          const data: Business = {
            _id: privateTypeAccount._id,
            address: privateTypeAccount.address,
            city: privateTypeAccount.city,
            country: privateTypeAccount.country,
            email: privateTypeAccount.email,
            phonenumber: privateTypeAccount.phonenumber,
            province: privateTypeAccount.province,
            status: privateTypeAccount.status,
            sub_district: privateTypeAccount.sub_district,
            type: item.type,
            zipcode: privateTypeAccount.zipcode,
            name: privateTypeAccount.name,
            surname: privateTypeAccount.surname,
          };

          businessAccountData.push(data);
        }
      }
    })
  );

  const resData = {
    totalPages,
    businessAccountData,
  };

  console.log(resData);

  return resData;
};

export { GetBusinessAccountsApi };
