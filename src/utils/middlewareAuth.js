export default async function middlewareAuth(req) {
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
    },
  };

  const result = await fetch(`${process.env.NEXT_PUBLIC_BACE_URL}/user/profile`, options);
  const { data } = await result.json();
  const { user } = data || {};

  return user;
}
