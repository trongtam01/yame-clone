import React, { useEffect } from "react";
import { aos } from "../utils";

interface Props {
  img: string;
}

const Banner = ({ img }: Props) => {
  useEffect(() => {
    aos();
  });

  return (
    <div className="" data-aos="zoom-in">
      <img className="w-full" src={`${img}`} />
    </div>
  );
};

export default Banner;
