import React from "react";

const ButtonList = () => {
  const ButtonList = [
    { name: "All", tag: "all" },
    { name: "Music", tag: "music" },
    { name: "T-series", tag: "t-series" },
    { name: "Gaming", tag: "gaming" },
    { name: "Ramayan", tag: "ramayan" },
    { name: "Live", tag: "live" },
    { name: "Hariharn", tag: "hariharn" },
    { name: "Jukebox", tag: "jukebox" },
    { name: "Cricket", tag: "cricket" },
    { name: "Playlist", tag: "playlist" },

  ]
  return <div className="flex gap-3 mb-4">
    {
      ButtonList.map((btn) => (
        <button className="font-medium px-2.5 py-0.5 bg-gray-200 rounded cursor-pointer active:bg-black active:text-white" key={btn.tag}>
          {btn.name}
        </button>
      ))
    }
  </div>;
};

export default ButtonList;
