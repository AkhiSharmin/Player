import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  // console.log(player);

  const handelRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 mt-5 border-slate-500 rounded-xl p-3 flex justify-between items-center">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-xl" src={player.playerImg} alt="" />
        <div className="ml-2">
          <h2>{player.playerName}</h2>
          <p className="text-xs">{player.playingRole}</p>
        </div>
      </div>
      <div className="btn" onClick={handelRemove}>
        <img src="https://i.ibb.co.com/7N2Rk7gC/dlt.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
