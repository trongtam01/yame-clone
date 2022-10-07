import Link from "next/link";
import React, { useEffect } from "react";
import { aos } from "../utils";

const ThumbColor = () => {
  useEffect(() => {
    aos();
  });

  return (
    <div
      className="grid grid-cols-2 gap-y-2 md:grid-cols-4 md:gap-y-3"
      data-aos="zoom-in"
    >
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/6-BLUE.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/5-BLACK.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/1-WHITE.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/8-GREY.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/4-GREEN.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/2-RED.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/3-PINK.jpg" alt="" />
        </Link>
      </div>
      <div className="thumbColor">
        <Link href="/">
          <img src="./img/7-BEIGE.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ThumbColor;
