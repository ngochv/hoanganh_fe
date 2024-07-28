import { COOKIE_AUTH } from "@/constants/cache";
import Cookies from "js-cookie";

export function setToken(value: string) {
  Cookies.set(COOKIE_AUTH, value), { expires: 7 };
}

export function getToken() {
  return Cookies.get(COOKIE_AUTH);
}

export function deleteToken() {
  return Cookies.remove(COOKIE_AUTH);;
}

export const isAuthentication = () => {
  return !!Cookies.get(COOKIE_AUTH);
};
