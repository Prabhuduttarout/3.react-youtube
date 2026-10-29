import React from "react";
import ButtonList from "./ButtonList";
import VideoListConatiner from "./VideoListConatiner";

const MainContainer = () => {
  return (
    <div className="flex-1">
      <ButtonList />
      <VideoListConatiner />
    </div>
  );
};

export default MainContainer;
