import http from "../httpService";

export const getPostsAPI = async (categorySlugName, newSearchParams, options) => {
  return await http
    .get(`/post/list?categorySlug=${categorySlugName}&${newSearchParams}`, options)
    .then((res) => res.data.data);
};
