import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import {
  HiChevronDown,
  HiMenu,
  HiSearch,
  HiUser,
  HiOutlineBriefcase,
  HiOutlineX,
} from "react-icons/hi";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { logoutUser } from "../services/userServices";
import { UserContextType } from "../typings";

const Header = () => {
  const router = useRouter();

  const { user, logoutContext } = useContext(UserContext) as UserContextType;

  const [isScrolled, setIsScrolled] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleSroll);

    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);

  const userDefault = {
    isLoading: true,
    isAuthenticated: false,
    token: "",
    account: {
      groupWithRoles: "",
      email: "",
      username: "",
    },
  };

  const handleLogOut = async () => {
    let res = await logoutUser(); //clear cookie
    localStorage.removeItem("yame-token"); // clear localstorge
    console.log("userLogout", user);
    if (res && res.EC === 0) {
      logoutContext(userDefault); //clear user contact
      router.push("/login");
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <>
      <header className={`text-white ${isScrolled && "drop-shadow-lg"}`}>
        <div className="inline-flex text-3xl lg:hidden">
          <HiMenu />
        </div>
        <div className="cursor-pointer pl-5 lg:pl-0">
          <Link href="/">
            <img
              className="h-8 md:h-12"
              src="./img/yame-f-logo-white.png"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/">
                <span className="headerLink sm:hover:text-white">
                  GU TỐI GIẢN
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="headerLink">
                  Gu đơn giản <HiChevronDown />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="headerLink">
                  Gu thiết kế <HiChevronDown />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="headerLink">
                  Gu unisex <HiChevronDown />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="headerLink">
                  <HiMenu /> <HiChevronDown />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative flex items-center justify-center gap-1 md:gap-5">
          <p className="headerIcon">
            <Link href="/">
              <span>
                <HiSearch onClick={() => setShowSearch(true)} />
              </span>
            </Link>
          </p>
          <div className="group relative">
            <div className="headerIcon">
              <Link href="/login">
                <span>
                  <HiUser />
                </span>
              </Link>
            </div>
            {user && user.isAuthenticated && (
              <ul className="logoutPosition group-hover:visible group-hover:opacity-100">
                <li
                  className="my-1 cursor-pointer hover:bg-[#222] hover:text-white"
                  onClick={() => router.push("/admin")}
                >
                  <span className="py-2 px-5">Admin</span>
                </li>
                <li
                  className="my-1 cursor-pointer hover:bg-[#222] hover:text-white"
                  onClick={() => handleLogOut()}
                >
                  <span className="py-2 px-5">Logout</span>
                </li>
              </ul>
            )}
          </div>
          <div className="headerIcon">
            <Link href="/">
              <span>
                <HiOutlineBriefcase />
              </span>
            </Link>
          </div>
          <span className="absolute -top-3 -right-2 rounded-full bg-[#dc3545] px-[3px] text-sm">
            0
          </span>
        </div>
      </header>
      {showSearch && (
        <div className="fixed top-0 z-40 w-full">
          <input
            type="text"
            className="headerSearch"
            placeholder="Nhập sản phẩm cần tìm..."
          />
          <span
            className="absolute top-6 right-4 z-50 cursor-pointer text-2xl transition-all duration-200 ease-linear md:right-10 md:top-8 md:text-4xl lg:top-[2rem]"
            onClick={() => setShowSearch(false)}
          >
            <HiOutlineX />
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
