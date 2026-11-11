import { Play } from "lucide-react";
import { formatDuration, formatTimeAgo, formatViews } from "../utils/formatters";
import { Link } from "react-router";

const VideoCrad = ({ info }) => {
  // console.log(info);
  const { id, contentDetails, snippet, statistics } = { ...info }
  // console.log(snippet);

  return (
    <Link to={`/watch?v=${id}`}>
      <div className="flex flex-col p-3 rounded-xl cursor-pointer hover:bg-red-50">
        <div className="thumbnail mb-2 relative">
          <img src={snippet?.thumbnails?.maxres?.url} className="rounded-xl object-fill h-full" alt="{snippet?.title}" />
          <p className="absolute bottom-1.5 right-2 font-medium text-white text-sm px-1  bg-mist-900 rounded">{formatDuration(contentDetails.duration)}</p>
        </div>
        <div className="flex gap-2">
          <div className="channelImg w-10 h-10 shrink-0">
            <img src="https://yt3.ggpht.com/zGnrFUqmF6Xp2tM8ecG9sVXyHjJUrqa7GnNV_kATAdAvSwfgIg7693GURHASA7C6OPK3YmGZ=s68-c-k-c0x00ffffff-no-rj" alt="{snippet?.channelTitle}" className="rounded-3xl" />
          </div>
          <div className="videoDetails grow">
            <p className="font-medium">{snippet?.title}</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm w-auto overflow-hidden">
              <p className="whitespace-nowrap">{snippet?.channelTitle}</p>
              <p className="flex gap-1 items-center whitespace-nowrap"><Play className="w-3" /> {formatViews(statistics?.viewCount)}</p>
              <p className="whitespace-nowrap">{formatTimeAgo(snippet?.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCrad
