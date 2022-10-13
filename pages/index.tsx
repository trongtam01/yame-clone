import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Sales from "../components/Sales";
import ThumbColor from "../components/ThumbColor";
import Thumnail from "../components/Thumbnail";
import { RotatingLines } from "react-loader-spinner";
import { useAppSelector } from "../app/hooks";
import { selectLogin } from "../features/user/loginSlice";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  // const isShowLoading = useAppSelector(selectLoginLoading);

  // if (isShowLoading?.isLoading) {
  //   return (
  //     <div className="flex h-screen w-screen items-center justify-center">
  //       <RotatingLines
  //         strokeColor="black"
  //         strokeWidth="5"
  //         animationDuration="0.75"
  //         width="96"
  //         visible={true}
  //       />
  //     </div>
  //   );
  // }
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <RotatingLines
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="">
      <Head>
        <title>
          YaMe | Mua Online Quần Áo Thời Trang Nam Nữ Giá Rẻ - YaMe.vn
        </title>
        <link rel="icon" href="./img/yame-fav.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <main className="">
        {/* Banner */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <Banner img="./img/bannerweb-fix.jpg" />
        </div>
        {/* Thumbnail */}
        <Thumnail />
        {/* Thumbnail Color */}
        <ThumbColor />
        <div className="">
          <div className="my-3 text-center text-2xl">
            <h4 className="font-medium">Top sản phẩm HOT</h4>
            <p className="font-thin">
              Những sản phẩm thời trang mới nhất/Hot nhất
            </p>
          </div>
        </div>
        {/* Products */}
        <Products title="Xem tất cả áo thun" />
        {/* Banner */}
        <div className="my-5">
          <Banner img="./img/Home_banner_(1280x800).jpg" />
        </div>
        {/* Products */}
        <Products title="Xem tất cả áo sơ mi" />
        {/* Banner */}
        <div className="my-5">
          <Banner img="./img/Banner_NCG.jpg" />
        </div>
        {/* Products */}
        <Products title="Xem tất cả nón" />
        {/* Sales */}
        <div className="mt-8 border-t border-black/30 pt-4">
          <div className="my-3 text-center">
            <h4 className="text-2xl">Các chương trình Khuyến mãi</h4>
            <p className="my-2 text-lg">
              Đừng bỏ lỡ các chương trình khuyến mãi Hot tại Yame.vn
            </p>
          </div>
          <div>
            <Sales />
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
