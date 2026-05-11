import React, { use } from "react";
import userImg from "../../assets/user.png";
import flagImg from "../../assets/flag.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="max-w-7xl mx-auto ">
      {playersData.map((player) => (
        <div className="card bg-base-100 w-96 shadow-sm p-4 ">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={userImg} alt="" />
              <h2 className="card-title ml-2">Virat koheli</h2>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex gap-2 items-center ">
                <img className="w-5 h-4" src={flagImg} alt="" />
                <span className="">India</span>
              </div>
              <button className="btn">All Rounder</button>
            </div>
            <div className="divider divider-start"></div>

            <div className="flex justify-between items-center font-bold mt-4">
              <span>Rating</span>
              <span>5</span>
            </div>

            <div className="flex justify-between ">
              <span className="font-bold">Left hand bat</span>
              <span className="text-slate-400">Right hand bowl</span>
            </div>

            <div className="card-actions mt-3 flex justify-between items-center">
              <p className="font-bold">Price: $150000</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
