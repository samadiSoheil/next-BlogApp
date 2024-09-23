const { default: http } = require("../httpService");

export const loginUserAPI = async (data) => {
  return await http.post("/user/signin", data).then((res) => res.data);
};
