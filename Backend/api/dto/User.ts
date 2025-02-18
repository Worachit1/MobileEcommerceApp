

export interface userAddressProps {
    _id?:string;
    firstName:string;
    lastName:string;
    email:string;
    mobileNo:string;
    deliveryInfo:string;
    region:string;
    city:string;
}

export interface userModelParams {
    firstName:string;
    lastName:string;
    email:string;
    mobileNo:string;
    password:string;
    confirmPassword?:string;
    userAddressInfo:userAddressProps[]
    userId?:string;
}