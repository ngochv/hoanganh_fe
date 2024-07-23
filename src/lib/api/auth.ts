import { sendPost } from "./axios";

export function apiLogin(params: ILogin) {
  return sendPost("/api/v1/auth/login", params);
}
