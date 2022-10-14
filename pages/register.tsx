import Head from "next/head";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RegisterNewUser } from "../services/userServices";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  password: string;
  username: string;
  phone: number;
};

const Register = () => {
  const router = useRouter();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    username,
    phone,
  }) => {
    let res = await RegisterNewUser(email, password, username, phone);
    if (res.EC === 0) {
      router.push("/login");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Sign Up - YaMe.vn</title>
        <link rel="icon" href="./img/yame-fav.png" />
      </Head>
      <Image
        src="/img/Banner_NCG.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div className="absolute left-4 top-4 md:left-10 md:top-6">
        <Link href="/">
          <img
            src="./img/yame-f-logo-white.png"
            className="cursor-pointer object-contain"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-8 md:max-w-md md:px-14">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
                className="input"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Please enter a valid email
                </p>
              )}
            </label>
            <label className="relative inline-block w-full">
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                className="input"
                {...register("password", { required: true })}
              />
              {isShowPassword === true ? (
                <AiFillEye
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="loginPasword"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="loginPasword"
                />
              )}
              {errors.password && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Your password must contain between 4 and 6 characters
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="text"
                placeholder="Username"
                className="input"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Please enter a valid username
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="text"
                placeholder="Phone"
                className="input"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="p-1 text-[13px] font-light text-red-500">
                  Please enter a valid phone number
                </p>
              )}
            </label>
          </div>

          <button className="w-full rounded bg-black/80 py-3 font-semibold text-white">
            Sign Up
          </button>
        </form>
        <div className="text-center text-[gray]">
          Theo dõi đơn hàng - Giảm giá lên đến 15%*{" "}
          <button
            onClick={() => router.push("/login")}
            type="submit"
            className="text-white hover:underline"
          >
            Sign in now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
