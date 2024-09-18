export default async function getSinglePost(postSlug) {
  //   // todo delete this
  //   await new Promise((res, rej) => {
  //     setTimeout(() => res(), 1000);
  //   });

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACE_URL}/post/slug/${postSlug}`);
  const { data } = await res.json();
  const { post } = data || {};

  return post;
}
