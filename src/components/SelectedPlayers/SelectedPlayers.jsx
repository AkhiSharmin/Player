import React from "react";

const SelectedPlayers = ({ purchasedPlayers }) => {
  console.log(purchasedPlayers);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="border-2 border-slate-500 rounded-xl p-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-xl"
            src="https://i.ibb.co.com/c54zZ7J/1696748634550-Shakib-Al-Hasan.jpg"
            alt=""
          />
          <div className="ml-2">
            <h2>Sakib Al Hasan</h2>
            <p className="text-xs">Left-hand-bat</p>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co.com/7N2Rk7gC/dlt.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayers;
