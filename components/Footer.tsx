import Link from "next/link";
import React from "react";
import { FaTshirt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { GiDjedPillar } from "react-icons/gi";
// import Swiper core and required modules
import { A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img
            className="h-16 md:h-20"
            src="./img/yame-f-logo-white.png"
            alt=""
          />
        </div>
        <div className="text-center text-white">
          <p className="font-thin">Đặt hàng và thu tiền tận nơi toàn quốc</p>
          <h4 className="text-xl font-semibold">(028) 7307 1441</h4>
          <div className="py-1 font-thin">
            <Link href="/">Than phiền/Góp ý</Link>
          </div>
          <div>
            <Link href="/">
              <span className="flex cursor-pointer items-center justify-center pt-1 text-sm text-[#00ffff] hover:underline">
                Xem thông thông tin Yame <BiChevronDown />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-8 text-white">
        <Swiper
          // install Swiper modules
          modules={[A11y]}
          spaceBetween={50}
          slidesPerView={4}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          breakpoints={{
            320: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
            1024: {
              // width: 576,
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="cursor-pointer">
              <h4 className="md:2xl flex items-center text-lg font-semibold uppercase">
                <GiDjedPillar /> Tây nam bộ
              </h4>
              <div className="mt-5">
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <h4 className="md:2xl flex items-center text-lg font-semibold uppercase">
                <GiDjedPillar /> Tây nam bộ
              </h4>
              <div className="mt-5">
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <h4 className="md:2xl flex items-center text-lg font-semibold uppercase">
                <GiDjedPillar /> Tây nam bộ
              </h4>
              <div className="mt-5">
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <h4 className="md:2xl flex items-center text-lg font-semibold uppercase">
                <GiDjedPillar /> Tây nam bộ
              </h4>
              <div className="mt-5">
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <h4 className="md:2xl flex items-center text-lg font-semibold uppercase">
                <GiDjedPillar /> Tây nam bộ
              </h4>
              <div className="mt-5">
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
                <p className="flex-cols my-3 flex items-center text-sm font-thin">
                  <FaTshirt />{" "}
                  <span className="pl-2">YaMe Cần Thơ: 45 đ. 3 Tháng 2</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white md:flex-row md:justify-between md:text-start ">
        <div>
          <p className="font-light">© 2022 - CÔNG TY TNHH YAME VN</p>
          <p className="text-[8px] font-thin">
            Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng
            Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM
          </p>
          <p className="text-[8px] font-thin">
            Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường
            12, Quận 10, TP.HCM - Điện thoại: (028) 3868 4857 - Mua hàng: (028)
            7307 1441 - Email: cskh@yame.vn
          </p>
        </div>
        <div>
          <Link href="/">
            <img
              className="md:12 mt-2 h-12 md:mt-0 lg:mt-0 lg:h-14"
              src="./img/dathongbao.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
