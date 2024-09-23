"use client";

import useAuth from "@/context/AuthContextProvider";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMIni";
import TextField from "@/ui/TextField";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginUser = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isLoading },
  } = useForm();

  // const { loginUser } = useAuth();
  const onLoginHandler = async (userData) => {
    // await loginUser(userData);
  };
  return (
    <>
      <h1 className=" font-black text-xl md:text-3xl text-secondary-800 my-5 md:my-10">
        ورود
      </h1>
      <form
        onSubmit={handleSubmit(onLoginHandler)}
        className="w-full flex flex-col justify-center items-start gap-5"
      >
        <TextField
          label="ایمیل"
          autoFocus={true}
          name="email"
          type="email"
          isRequired={true}
          register={register}
          validationSchema={{
            required: "ایمیل الزامی است...",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است...",
            },
          }}
          errors={errors}
        />
        <TextField
          label="رمزعبور"
          name="password"
          type="password"
          isRequired={true}
          register={register}
          validationSchema={{
            required: "رمز عبور الزامی است...",
            minLength: {
              value: 8,
              message: "رمز عبور حداقل 8 کاراکتر الزامی است...",
            },
          }}
          errors={errors}
        />
        {isLoading ? <SpinnerMini /> : <Button classNameAd="w-full">ارسال</Button>}
        <div className="w-full flex justify-center gap-2 text-center text-secondary-400">
          <span> اکانت نداری؟</span>
          <Link href="/signup" className="text-primary-600 font-bold">
            ثبت نام
          </Link>
        </div>
      </form>
    </>
  );
};
export default LoginUser;
