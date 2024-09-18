import Spinner from "@/ui/Spinner";

const postLoading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <p>درحال بارگذاری...</p>
      <Spinner />
    </div>
  );
};

export default postLoading;
