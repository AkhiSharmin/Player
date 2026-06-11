import React from "react";

const CommonNavPlayers = ({ Toggle, setToggle }) => {
  return (
    <div className="max-w-7xl mx-auto border-2 border-slate-500 flex justify-between items-center">
      <h2>Available Players</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setToggle(true)}
          class={`${
            Toggle === true ? "bg-[#E7FE29]" : ""
          }  font-bold px-4 py-4 my-2 btn border-2 border-slate-400`}
        >
          Available
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`${
            Toggle === false ? "bg-[#E7FE29]" : ""
          } font-bold px-4 py-4 my-2 btn border-2 border-slate-400`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default CommonNavPlayers;
