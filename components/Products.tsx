import React, { useEffect } from "react";
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { aos } from "../utils";

interface Props {
  title: string;
}

// SwiperCore.use([Pagination, Autoplay]);

const Products = ({ title }: Props) => {
  //   const swiperRef = React.useRef<SwiperCore>();
  //   const onInit = (Swiper: SwiperCore): void => {
  //     swiperRef.current = Swiper;
  //   };
  //   const handleMouseEnter = () => {
  //     if (swiperRef.current) swiperRef.current.autoplay.start();
  //   };
  //   const handleMouseLeave = () => {
  //     if (swiperRef.current) swiperRef.current.autoplay.stop();
  //   };

  useEffect(() => {
    aos();
  });

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          data-aos="fade-up"
          className="products"
        >
          <Swiper
            //   onInit={onInit}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            //   autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            //   }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/2911548c-05f7-2b00-d4bd-00197e30706f.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/02052c97-afb6-2c00-faa5-00197e307082.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-sm">227</div>
        </div>
        <div
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          data-aos="fade-up"
          className="products"
        >
          <Swiper
            //   onInit={onInit}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            //   autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            //   }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/2911548c-05f7-2b00-d4bd-00197e30706f.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/02052c97-afb6-2c00-faa5-00197e307082.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-sm">227</div>
        </div>
        <div
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          data-aos="fade-up"
          className="products"
        >
          <Swiper
            //   onInit={onInit}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            //   autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            //   }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/2911548c-05f7-2b00-d4bd-00197e30706f.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/02052c97-afb6-2c00-faa5-00197e307082.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-sm">227</div>
        </div>
        <div
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          data-aos="fade-up"
          className="products"
        >
          <Swiper
            //   onInit={onInit}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            //   autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            //   }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/2911548c-05f7-2b00-d4bd-00197e30706f.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link href="/">
                  <img
                    src="./img/02052c97-afb6-2c00-faa5-00197e307082.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-sm">227</div>
        </div>
      </div>
      <div className="text-white">
        <div className="mx-auto my-2 w-max rounded-md bg-[#23272B] px-5 py-2 uppercase drop-shadow-lg">
          <Link href="/">{title}</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
