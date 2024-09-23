import http from "../httpService";

export const getUserAPI = async () => {
  return await http.get("/user/profile").then((res) => res.data.data);
};
