import React, { useState } from "react";
import userImg from "../../assets/user.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({ player }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="card bg-base-100 shadow-sm p-8 border-b-2">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={player.playerImg}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.playerName}</h2>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex gap-2 items-center ">
            <img className="w-5 h-4" src={flagImg} alt="" />
            <span className="">{player.playerCountry}</span>
          </div>
          <button className="btn">{player.playingRole}</button>
        </div>
        <div className="divider divider-start"></div>

        <div className="flex justify-between items-center font-bold mt-4">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between ">
          <span className="font-bold">{player.battingStyle}</span>
          <span className="text-slate-400">{player.bowlingStyle}</span>
        </div>

        <div className="card-actions mt-3 flex justify-between items-center">
          <p className="font-bold">Price: ${player.price}</p>
          <button onClick={() => setSelected(true)} className="btn">
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
