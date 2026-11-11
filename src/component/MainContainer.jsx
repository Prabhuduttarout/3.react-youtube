import { useDispatch } from "react-redux";
import ButtonList from "./ButtonList";
import VideoListConatiner from "./VideoListConatiner";
import { useEffect } from "react";
import { openMenu } from "../store/slice/appNavSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(openMenu()) }, [])
  return (
    <div className="flex-1 p-3">
      <ButtonList />
      <VideoListConatiner />
    </div>
  );
};

export default MainContainer;
