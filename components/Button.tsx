import React from "react";

interface Props {
  title?: string;
  onClick?: () => void;
  icon?: string;
  color?: string;
}

const Button = ({ title, icon, onClick, color }: Props) => {
  return (
    <div className="flex justify-center space-x-2">
      <div className="">
        <button
          onClick={onClick}
          type="button"
          className={`align-center ml-2 flex items-center rounded ${color} px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:opacity-60 hover:shadow-lg`}
        >
          <i className={`${icon} w-3`}></i>
          <span className="ml-1">{title}</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
