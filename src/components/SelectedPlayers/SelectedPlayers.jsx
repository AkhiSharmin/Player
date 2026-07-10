import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";
// import { useNavigate } from "react-router-dom";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  // const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          player={player}
          removePlayer={removePlayer}
        ></SelectedCard>
      ))}
      <div className="py-4">
        {/* <div
          onClick={() => navigate("/PlayerCard")}
          className="btn border-4 border-lime-900 px-5 py-5 font-bold"
        >
          Added More
        </div> */}
      </div>
    </div>
  );
};

export default SelectedPlayers;
