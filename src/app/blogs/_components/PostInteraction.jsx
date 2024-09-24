"use client";

import { likePostAPI, BookmarkPostAPI } from "@/services/post/postInteractions";
import ButtonIcon from "@/ui/ButtonIcon";
import { postInteractionLogic } from "@/utils/postInteractionLogic";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const PostInteraction = ({ post }) => {
  // console.log(post);
  const route = useRouter();

  // Like Handler Func
  const onLikeHandle = async (postId) => {
    // This is a function for try catch and send a toast message
    await postInteractionLogic(likePostAPI, postId, route);
  };

  // Bookmark Handler Func
  const onBookmarkHandle = async (postId) => {
    // This is a function for try catch and send a toast message
    await postInteractionLogic(BookmarkPostAPI, postId, route);
  };

  return (
    <div className="flex gap-1 mt-4">
      <ButtonIcon onClick={() => null} variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{post.commentsCount.toLocaleString("fa-ir")}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => onLikeHandle(post._id)} variant="red">
        <HeartIcon className={post.isLiked ? "fill-red-400" : ""} />
      </ButtonIcon>
      <ButtonIcon onClick={() => onBookmarkHandle(post._id)} variant="primary">
        <BookmarkIcon className={post.isBookmarked ? "fill-primary-500" : ""} />
      </ButtonIcon>
    </div>
  );
};

export default PostInteraction;
