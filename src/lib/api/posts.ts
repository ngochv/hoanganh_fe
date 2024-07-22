import { sendGet } from "./axios";

export function apiGetAllPosts() {
  return sendGet("https://jsonplaceholder.typicode.com/posts");
}
