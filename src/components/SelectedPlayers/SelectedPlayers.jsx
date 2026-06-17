import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers }) => {
  console.log("test", purchasedPlayers);
  return (
    <div className="max-w-7xl mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCard player={player}></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
