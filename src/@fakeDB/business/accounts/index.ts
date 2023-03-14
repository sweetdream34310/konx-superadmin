import { BusinessAccountsType } from "../../types"

let businessAccounts : BusinessAccountsType[] = [
    {
        _id : "BusinessAccountId01",
        type : "private",
        business_id : "PrivateType01"
    },
    {
        _id : "BusinessAccountId02",
        type : "business",
        business_id : "BusinessType01"
    },
    {
        _id : "BusinessAccountId03",
        type : "private",
        business_id : "PrivateType02"
    },
]

export {
    businessAccounts
}