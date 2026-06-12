import React from "react";

const CommonNavPlayers = ({ Toggle, setToggle }) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h2 className="text-2xl font-bold">Available Players</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setToggle(true)}
          className={`${
            Toggle === true ? "bg-[#232F72]" : ""
          }  font-bold px-4 py-4 btn my-2 border-2 border-slate-400`}
        >
          Available
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`${
            Toggle === false ? "bg-[#232F72]" : ""
          } font-bold px-4 py-4 my-2 btn border-2 border-slate-400`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default CommonNavPlayers;
