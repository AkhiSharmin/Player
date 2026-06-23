import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import CommonNavPlayers from "./components/CommonNavPlayers/CommonNavPlayers";

// loaded players data
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [Toggle, setToggle] = useState(true);

  const [availableBalance, setAvailableBalance] = useState(600000000);

  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filterData = purchasedPlayers.filter(
      (player) => player.playerName !== p.playerName
    );
    setPurchasedPlayers(filterData);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <CommonNavPlayers
        purchasedPlayers={purchasedPlayers}
        Toggle={Toggle}
        setToggle={setToggle}
      ></CommonNavPlayers>

      {Toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-error"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasedPlayers={purchasedPlayers}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
