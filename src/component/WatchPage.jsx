import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/slice/appNavSlice';
import { useSearchParams } from 'react-router';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v")

  return (
    <div>
      <h1>Watch</h1>
      <iframe
        width="1155"
        height="650"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage
