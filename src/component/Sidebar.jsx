import {
  CircleFadingPlay,
  CircleUserRound,
  Clock,
  House,
  ListVideo,
  RotateCcwClock,
  SquarePlay,
  SquareUserRound,
} from "lucide-react";
import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const appNavIsOpen = useSelector((store) => store.appNav.isMenuOpen);
  // console.log(appNavIsOpen);

  return (
    <div className={appNavIsOpen ? "w-50" : "w-18"}>
      <ul>
        <MenuItem icon={House} name="Home" />
        <MenuItem icon={CircleFadingPlay} name="Shorts" />
        <MenuItem icon={SquarePlay} name="Subscriptions" />
        <MenuItem icon={CircleUserRound} name="User" />
      </ul>
      {appNavIsOpen && (
        <>
          <hr className="text-gray-300 my-1" />
          <h1 className="text-xl font-medium pl-2 pb-1">You</h1>
          <ul>
            <MenuItem icon={SquareUserRound} name="Channel" />
            <MenuItem icon={RotateCcwClock} name="History" />
            <MenuItem icon={ListVideo} name="Playlist" />
            <MenuItem icon={Clock} name="Watch Later" />
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
