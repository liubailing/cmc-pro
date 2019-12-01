// import request from "@/utils/request";
// export interface FormDataType {
//   userName: string;
//   password: string;
// }

// export function fakeAccountLogin(params: FormDataType) {
//   return request("/manage/user/login.do", {
//     method: "POST",
//     data: params
//   });
// }

import request from "@/utils/request";
import { apiUrls } from "@/utils/_config";

export interface FormDataType {
  userName: string;
  password: string;
}

export function fakeAccountLogin(params: FormDataType) {
  debugger;
  return request(apiUrls.LOGIN, {
    method: "POST",
    data: params
  });
}