export default function Auth({ children }) {
  return (
    <div className="min-h-[calc(100vh-65px)] flex justify-center items-center">
      <div className="w-full md:max-w-md min-h-[calc(100vh-65px)] flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
