import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";
import queryString from "query-string";
import useGetPostsServerReq from "@/hooks/useGetPostsServerReq";

export const metadata = {
  title: "وبلاگ",
};

const blogPage = async ({ searchParams }) => {
  const newSearchParams = queryString.stringify(searchParams);

  const posts = await useGetPostsServerReq({ newSearchParams });

  return (
    <>
      <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
        کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
        جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
        ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
        توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <Suspense fallback={<Spinner />}>
        {!posts.length ? <p>پستی یافت نشد...</p> : <PostList postsArr={posts} />}
      </Suspense>
    </>
  );
};

export default blogPage;
