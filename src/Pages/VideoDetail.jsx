import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
function VideoDetail() {
  const { id } = useParams();
  const videos = useSelector((state) => state.YoutubeReducer.videos)
  const matchVideo = () => {
    videos.forEach(video => {
      if (video.video.videoId === id) {
        return video.video.title;
      }
    });
  }
  return (
    <div className='absolute w-full h-full top-0 left-0 bottom-0 flex  '>
      <div className='flex w-full h-full pt-28 py-16 px-10'>
        <div className='w-3/4 mx-auto'>
          <iframe className='w-full h-full rounded-2xl' src={`https://www.youtube.com/embed/${id}`} frameBorder={"0"} title={matchVideo()} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail