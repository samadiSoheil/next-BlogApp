import getSinglePost from "@/services/getSinglePost";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const post = await getSinglePost(params.postSlug);

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  let result = await fetch(`${process.env.NEXT_PUBLIC_BACE_URL}/post/list`);
  let { data } = await result.json();
  const { posts } = data || {};

  const allSlugs = posts.slice(0, 2).map((item) => {
    return {
      postSlug: item.slug,
    };
  });

  return allSlugs;
}

const PostSLugPage = async ({ params, searchParams }) => {
  const post = await getSinglePost(params.postSlug);

  if (!post) return notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto py-10">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">{post.title}</h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          alt={post.title}
          src={post.coverImageUrl}
        />
      </div>
      {/* {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <BlogComments post={post} /> */}
    </div>
  );
};

export default PostSLugPage;
