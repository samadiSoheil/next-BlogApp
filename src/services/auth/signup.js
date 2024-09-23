import http from "../httpService";

export const signupUserAPI = async (data) => {
  return await http.post("/user/signup", data).then((res) => res.data);
};
