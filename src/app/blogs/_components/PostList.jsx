import Image from "next/image";

const PostList = async () => {
  let result = await fetch(`${process.env.NEXT_PUBLIC_BACE_URL}/post/list`);
  let {
    data: { posts },
  } = await result.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {posts.map((item) => {
        return (
          <div className="border border-secondary-300 p-2 rounded-lg">
            <div className="relative aspect-1 rounded-lg overflow-hidden ">
              <Image
                src={item.coverImageUrl}
                alt={item.title}
                fill
                quality={80}
                className="object-cover object-center hover:scale-110 transition-all duration-300"
              />
            </div>

            {item.title}
          </div>
        );
      })}
    </div>
  ) : null;
};

export default PostList;
