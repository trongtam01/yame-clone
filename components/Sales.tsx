import Link from "next/link";
import React from "react";

const Sales = () => {
  return (
    <div className="mx-2 grid grid-cols-1 gap-2 md:grid-cols-2">
      <div>
        <div className="my-2">
          <Link href="/">
            <span className="cursor-pointer text-lg uppercase transition-all duration-200 hover:text-[#007bff] md:text-2xl">
              SALE OFF 30% GU TỐI GIẢN
            </span>
          </Link>
        </div>
        <div>
          <img src="/img/Home_banner_(1280x800).jpg" alt="" />
        </div>
      </div>
      <div>
        <div className="my-2">
          <Link href="/">
            <span className="cursor-pointer text-lg uppercase transition-all duration-200 hover:text-[#007bff] md:text-2xl">
              YaMe.vn - GIỚI THIỆU
            </span>
          </Link>
        </div>
        <div>
          <img src="/img/Banner_NCG.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sales;
