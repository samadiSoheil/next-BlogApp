import useGetPostsServerReq from "@/hooks/useGetPostsServerReq";
import Spinner from "@/ui/Spinner";
import PostList from "app/blogs/_components/PostList";
import queryString from "query-string";
import { Suspense } from "react";

const CategotySlugPage = async ({ params, searchParams }) => {
  const categorySlugName = params.categorySlug;
  const newSearchParams = queryString.stringify(searchParams);

  const posts = await useGetPostsServerReq({
    categorySlugName,
    newSearchParams,
  });

  return (
    <div>
      {posts?.length === 0 ? (
        "هیچ پستی با این مشخصات پیدا نشد..."
      ) : !searchParams.q ? (
        ""
      ) : (
        <span className="block mb-8">
          تعداد {posts.length.toLocaleString("fa-ir")} پست بر اساس سرچ{" "}
          <b>
            &quot;
            {searchParams.q}&quot;
          </b>
        </span>
      )}
      <Suspense fallback={<Spinner />}>
        <PostList postsArr={posts} />
      </Suspense>
    </div>
  );
};

export default CategotySlugPage;
