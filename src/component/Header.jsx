import { CircleUserRound, Menu, Search } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/slice/appNavSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-12 gap-4 fixed top-0 right-0 left-0 bg-white px-3 py-2 shadow-md">
      {/* Menu */}
      <div className="flex col-span-3 items-center gap-2">
        <div>
          <Menu onClick={() => dispatch(toggleMenu())} />
        </div>
        <img src="./src/assets/youtube-logo-icon.svg" className="h-5" />
      </div>
      {/* search */}
      <div className="flex col-span-7">
        <input
          type="text"
          className="rounded-tl-4xl rounded-bl-4xl border border-slate-200 bg-slate-50/50 py-1 px-3 text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none sm:text-sm w-4/5"
          placeholder="Search"
        />
        <button className="bg-gray-400 px-2.5 rounded-tr-4xl rounded-br-4xl">
          <Search className="text-white" />
          {/* Search */}
        </button>
      </div>

      {/* user */}

      <div className="flex w-fit items-center px-3 border border-slate-200 rounded-4xl text-blue-800 hover:bg-blue-100 col-span-2  gap-1 ml-auto">
        <CircleUserRound />
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
