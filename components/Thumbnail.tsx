import React, { useEffect } from "react";
// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { aos } from "../utils";

const Thumnail = () => {
  useEffect(() => {
    aos();
  });

  return (
    <div className="px-2" data-aos="zoom-in">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        breakpoints={{
          320: {
            // width: 576,
            slidesPerView: 1,
          },
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <Link href="/">
              <span className="thumbTitle">Mở bán 0710 LB1</span>
            </Link>
            <div className="flex flex-col">
              <div className="w-full">
                <img src="./img/thumb-1280x1000-2_ko_chữ.jpg" alt="" />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    src="./img/2b231c05-9803-3a00-91ec-00197e30f51f.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/5ab6e9df-64cd-0f00-50ad-00197e2daa12.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/0822a50b-52d0-7b01-5103-00197e3d5c78.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/d2773503-7b26-2401-45d4-00197e394c33.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/">
              <span className="thumbTitle">Mở bán 0710 LB1</span>
            </Link>
            <div className="flex flex-col">
              <div className="w-full">
                <img src="./img/thumb-1280x1000-2_ko_chữ.jpg" alt="" />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    src="./img/2b231c05-9803-3a00-91ec-00197e30f51f.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/5ab6e9df-64cd-0f00-50ad-00197e2daa12.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/0822a50b-52d0-7b01-5103-00197e3d5c78.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/d2773503-7b26-2401-45d4-00197e394c33.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="/">
              <span className="thumbTitle">Mở bán 0710 LB1</span>
            </Link>
            <div className="flex flex-col">
              <div className="w-full">
                <img src="./img/thumb-1280x1000-2_ko_chữ.jpg" alt="" />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    src="./img/2b231c05-9803-3a00-91ec-00197e30f51f.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/5ab6e9df-64cd-0f00-50ad-00197e2daa12.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/0822a50b-52d0-7b01-5103-00197e3d5c78.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./img/d2773503-7b26-2401-45d4-00197e394c33.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Thumnail;
