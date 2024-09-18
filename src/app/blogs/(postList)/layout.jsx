import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";

export default function BlogsLayout({ children }) {
  return (
    <>
      <div className="w-full pb-10 bg-slate-100">
        <h1 className=" font-black text-3xl md:text-4xl text-secondary-800 py-5 md:py-10">
          لیست بلاگ ها
        </h1>
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
