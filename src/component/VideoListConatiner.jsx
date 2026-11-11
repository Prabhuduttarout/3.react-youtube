import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCrad from "./VideoCrad";
import Shimmer from "./Shimmer";

const VideoListConatiner = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [videoList, setVideoList] = useState([])
  useEffect(() => {
    fetch_video_list();
  }, [])

  async function fetch_video_list() {
    const response = await fetch(YOUTUBE_VIDEO_API)
    const json = await response.json()
    // console.log(json);
    setVideoList(json.items);
    setIsLoading(false);
  }
  return <div className="grid grid-flow-row grid-cols-3 h-full gap-x-1 gap-y-4">
    {
      isLoading ?
        [...Array(9)].map((_, index) => <Shimmer key={index} />)
        :
        videoList.map((video) => <VideoCrad info={video} key={video.id} />)

    }
  </div>;
};

export default VideoListConatiner;
