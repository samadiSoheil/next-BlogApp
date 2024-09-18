"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const PostInteraction = ({ post }) => {
  return (
    <div className="flex gap-1 mt-4">
      <ButtonIcon onClick={() => null} variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{post.commentsCount.toLocaleString("fa-ir")}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => null} variant="red">
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon onClick={() => null} variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
};

export default PostInteraction;
