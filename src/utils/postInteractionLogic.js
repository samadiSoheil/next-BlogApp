import toast from "react-hot-toast";

export const postInteractionLogic = async (logicAPI, postId, router) => {
  try {
    const result = await logicAPI(postId);
    const { data, statusCode } = result;
    if (statusCode === 200) {
      router.refresh();
      return toast.success(data.message);
    }
  } catch (err) {
    console.log(err);
    return toast.error(err.response?.data?.message);
  }
};
