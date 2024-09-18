import Image from "next/image";

const Avatar = ({ imgUrl }) => {
  return (
    <div className="w-7 relative aspect-1 rounded-full overflow-hidden">
      <Image
        src={imgUrl || "/images/avatar.png"}
        alt=""
        fill
        className="object-fill object-center"
      />
      ;
    </div>
  );
};

export default Avatar;
