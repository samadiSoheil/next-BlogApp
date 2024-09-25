import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";

export default function BlogsLayout({ children }) {
  return (
    <>
      <div className="w-full pb-10 bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <h1 className=" font-black text-3xl lg:text-4xl text-secondary-700 py-5 md:py-10">
            لیست بلاگ ها
          </h1>
          <Search />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 overflow-scrol">
          <div className="w-full col-span-1 md:col-span-12 lg:col-span-3">
            <Suspense fallback={<Spinner />}>
              <CategoryList />
            </Suspense>
          </div>
          <div className="w-full col-span-1 md:col-span-12 lg:col-span-9">{children}</div>
        </div>
      </div>
    </>
  );
}
