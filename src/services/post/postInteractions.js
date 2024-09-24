import http from "../httpService";

export const likePostAPI = async (postId) => {
  return await http.post(`post/like/${postId}`).then((res) => res.data);
};

export const BookmarkPostAPI = async (postIdb) => {
  return await http.post(`post/bookmark/${postIdb}`).then((res) => res.data);
};
