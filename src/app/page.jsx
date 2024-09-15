import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className=" font-black text-3xl md:text-5xl text-secondary-800 my-10 md:my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>
      <div className="text-center text-secondary-500 text-base md:text-lg leading-loose">
        <p className="max-w-[430px]">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی! بتونی بلاگ بسازی -
          کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!
        </p>

        <div className="flex justify-center items-center gap-x-8 mt-5 md:mt-10">
          <Button variant="outline">
            <Link href="3">مطالعه بلاگ ها</Link>
          </Button>
          <Button variant="primary">
            <Link href="2">مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
