"use client";

import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import useAuth from "@/context/AuthContextProvider";
import Link from "next/link";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const { signupUser } = useAuth();
  const onSigninHandler = async (formData) => {
    await signupUser(formData);
  };

  return (
    <>
      <h1 className=" font-black text-xl md:text-3xl text-secondary-800 my-5 md:my-10">
        ثبت نام
      </h1>

      <form
        onSubmit={handleSubmit(onSigninHandler)}
        className="w-full flex flex-col justify-center items-start gap-5"
      >
        <TextField
          label="نام کاربری"
          name="name"
          isRequired={true}
          autoFocus={true}
          register={register}
          validationSchema={{
            required: "نام کاربری الرامی است...",
            minLength: {
              value: 5,
              message: "نام کاربری حداقل 5 کاراکتر الزامی است...",
            },
          }}
          errors={errors}
        />
        <TextField
          label="ایمیل"
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
          <span> اکانت داری؟</span>
          <Link href="/login" className="text-primary-600 font-bold">
            ورود
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignupPage;
