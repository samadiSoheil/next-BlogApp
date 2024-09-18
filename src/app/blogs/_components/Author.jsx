import Avatar from "@/ui/Avatar";
import Link from "next/link";

const Author = ({ avatarUrl, name }) => {
  return (
    <div className="flex justify-between items-center gap-1">
      <Avatar imgUrl={avatarUrl} />
      <Link
        className="text-lg lg:text-xs text-secondary-500 text-nowrap"
        href={`/authers/${name}`}
      >
        {name}
      </Link>
    </div>
  );
};

export default Author;
