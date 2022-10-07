import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HiChevronDown,
  HiMenu,
  HiSearch,
  HiUser,
  HiOutlineBriefcase,
} from "react-icons/hi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`text-white ${isScrolled && "drop-shadow-lg"}`}>
      <div className="inline-flex text-3xl lg:hidden">
        <HiMenu />
      </div>
      <div className="pl-5 lg:pl-0">
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
          <HiSearch />
        </p>
        <p className="headerIcon">
          <HiUser />
        </p>
        <p className="headerIcon">
          <HiOutlineBriefcase />
        </p>
        <span className="absolute -top-3 -right-2 rounded-full bg-[#dc3545] px-[3px] text-sm">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
