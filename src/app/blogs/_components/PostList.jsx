import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PostImg from "./PostImg";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

const PostList = async () => {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  let result = await fetch(`${process.env.NEXT_PUBLIC_BACE_URL}/post/list`, options);
  let {
    data: { posts },
  } = await result.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((item) => {
        return (
          <div className="border border-secondary-300 p-3 rounded-lg bg-secondary-0">
            <PostImg {...item} />
            <>
              {/* card content */}
              <div className="max-h-[32px] text-2xl font-bold my-4 text-slate-800 hover:text-blue-600 overflow-hidden line-clamp-1 transition-all duration-300">
                <h1>
                  <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                </h1>
              </div>

              {/* author - time reading */}
              <div className="flex justify-between items-center">
                {/* author */}
                <Author {...item.author} />

                {/* time reading */}
                {item.readingTime && (
                  <div className="flex justify-between items-center text-lg lg:text-xs gap-1 text-secondary-500">
                    <span className="flex justify-between items-center gap-1">
                      <span>
                        <ClockIcon className="size-6 lg:size-4" />
                      </span>
                      خواندن
                    </span>
                    {item.readingTime.toLocaleString("fa-ir")}
                    <span>دقیقه</span>
                  </div>
                )}
              </div>
            </>

            {/* post interaction */}
            <PostInteraction post={item} />
          </div>
        );
      })}
    </div>
  ) : null;
};

export default PostList;
