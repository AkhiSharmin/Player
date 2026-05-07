import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div>
      <h2>Available Players</h2>
    </div>
  );
};

export default AvailablePlayers;
