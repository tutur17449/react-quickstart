import httpClient from "../lib/axios";

export async function getUsers() {
  return await httpClient.get("https://jsonplaceholder.typicode.com/users");
}
