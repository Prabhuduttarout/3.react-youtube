import { CircleUserRound, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/slice/appNavSlice";
import { Link } from "react-router";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestionText, setSearchSuggestionText] = useState([]);
  const [showSuggestionText, setShowSuggestionText] = useState(false);

  //=> Using Debounce for Serach Suggestions
  useEffect(() => {
    const searchTimer = setTimeout(() => searchSuggestion(searchText), 200)
    return () => {
      clearTimeout(searchTimer);
    }
  }, [searchText])

  const searchSuggestion = async (query) => {
    const response = await fetch(YOUTUBE_SEARCH_API + query);
    const data = await response.json();
    setSearchSuggestionText(data[1]);
    // console.log(data[1]);
  }

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-12 gap-4 fixed top-0 right-0 left-0 bg-white px-3 py-2 shadow-md z-10">
      {/* Menu */}
      <div className="flex col-span-3 items-center gap-2">
        <div>
          <Menu onClick={() => dispatch(toggleMenu())} className="cursor-pointer" />
        </div>
        <Link to="/"><img src="./src/assets/youtube-logo-icon.svg" className="h-5 cursor-pointer" /></Link>
      </div>
      {/* search */}
      <div className="flex col-span-7 relative">
        <input
          type="text"
          className="rounded-tl-4xl rounded-bl-4xl border border-slate-200 bg-slate-50/50 py-1 px-3 text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none sm:text-sm w-4/5"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={() => setShowSuggestionText(false)}
          onFocus={() => setShowSuggestionText(true)}
        />
        <button className="bg-gray-400 px-2.5 rounded-tr-4xl rounded-br-4xl cursor-pointer">
          <Search className="text-white" />
        </button>
        {
          searchSuggestionText.length > 0 &&
          <div className={`searchSuggestion h-auto bg-white shadow-md/40 absolute w-4/5 top-8 p-2 rounded-xl ${showSuggestionText ? "" : "hidden"}`}>

            <ul className="flex gap-1 flex-col">
              {
                searchSuggestionText.map((text, index) => (
                  <li className="flex items-center gap-3 pl-2 py-2 hover:bg-gray-200 rounded cursor-pointer" key={index}><Search className="h-5" /> {text}</li>
                ))
              }
            </ul>
          </div>
        }
      </div>


      {/* user */}

      <div className="flex w-fit items-center px-3 border border-slate-200 rounded-4xl text-blue-800 hover:bg-blue-100 col-span-2  gap-1 ml-auto cursor-pointer">
        <CircleUserRound />
        <span>User</span>
      </div>
    </div>
  );
};

export default Header;
