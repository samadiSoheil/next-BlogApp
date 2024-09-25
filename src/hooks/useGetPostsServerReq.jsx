import { getPostsAPI } from "@/services/post/getPosts";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

const useGetPostsServerReq = async ({ categorySlugName = "", newSearchParams = "" }) => {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  const result = await getPostsAPI(categorySlugName, newSearchParams, options);
  const { posts } = result || [];

  return posts;
};

export default useGetPostsServerReq;
