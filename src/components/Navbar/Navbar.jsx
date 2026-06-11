import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-1">
        <span>{availableBalance}</span>
        <span>Coin</span>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
