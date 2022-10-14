import Head from "next/head";
import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { loginUser } from "../services/userServices";
import { UserContext } from "../context/UserContext";
import { UserContextType } from "../typings";

const Login = () => {
  const router = useRouter();

  const { user, loginContext } = useContext(UserContext) as UserContextType;

  const RefEmail = useRef() as MutableRefObject<HTMLInputElement>;
  const RefPwt = useRef() as MutableRefObject<HTMLInputElement>;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");

  const defalutObjValid = {
    isValidValueLogin: true,
    isValidValuePwt: true,
  };
  const [objValidInput, setObjValidInput] = useState(defalutObjValid);

  const handleLogin = async () => {
    setObjValidInput(defalutObjValid);
    if (!valueLogin) {
      toast.error("Please enter your email address or phone number");
      RefEmail.current.focus();
      setObjValidInput({ ...defalutObjValid, isValidValueLogin: false });
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      RefPwt.current.focus();
      setObjValidInput({ ...defalutObjValid, isValidValuePwt: false });
      return;
    }
    let response = await loginUser(valueLogin, password);
    if (response && response.EC === 0) {
      let groupWithRoles = response.DT.groupWithRoles;
      let email = response.DT.email;
      let username = response.DT.username;
      let token = response.DT.access_token;
      let data = {
        isAuthenticated: true,
        token,
        account: {
          groupWithRoles,
          email,
          username,
        },
      };
      loginContext(data);
      localStorage.setItem("yame-token", token);
      router.push("/");
    }

    if (response && response.EC !== 0) {
      toast.error(response.EM);
    }
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13 && e.code === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (user && user.isAuthenticated) {
      router.push("/");
    }
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Sign In - YaMe.vn</title>
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
        <form className="space-y-8">
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                onKeyPress={(e) => handlePress(e)}
                ref={RefEmail}
                value={valueLogin}
                onChange={(e) => setValueLogin(e.target.value)}
                type="email"
                placeholder="Email or Phone number"
                className="input"
              />
            </label>
            <label className="relative inline-block w-full">
              <input
                onKeyPress={(e) => handlePress(e)}
                ref={RefPwt}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                className="input"
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
            </label>
          </div>

          <div
            onClick={() => handleLogin()}
            className="w-full cursor-pointer rounded bg-black/80 py-3 text-center font-semibold text-white"
          >
            Sign In
          </div>
        </form>
        <div className="text-center text-[gray]">
          Theo dõi đơn hàng - Giảm giá lên đến 15%*{" "}
          <button
            onClick={() => router.push("/register")}
            type="submit"
            className="text-white hover:underline"
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
