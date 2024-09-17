import Link from "next/link";

const CategoryList = async () => {
  let result = await fetch(`${process.env.NEXT_PUBLIC_BACE_URL}/category/list`);
  let {
    data: { categories },
  } = await result.json();

  return (
    <ul>
      {categories.map((item) => {
        return (
          <li key={item._id}>
            <Link href={`/blogs/category/${item.slug}`}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
