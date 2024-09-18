import Image from "next/image";
import Link from "next/link";

const PostImg = ({ coverImageUrl, title, slug }) => {
  return (
    <>
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden ">
        {!coverImageUrl && <div className="absolute inset-0 z-10 backdrop-blur-xl"></div>}
        <Link href={`/blogs/${slug}`}>
          <Image
            src={coverImageUrl || "/images/Rectangle.png"}
            alt={title}
            fill
            quality={80}
            className="object-cover object-center hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
    </>
  );
};

export default PostImg;
