import Spinner from "@/ui/Spinner";

const postLoading = () => {
  return (
    <div className="w-full h-40 flex flex-col justify-center items-center">
      <p>درحال بارگذاری...</p>
      <Spinner />
    </div>
  );
};

export default postLoading;
