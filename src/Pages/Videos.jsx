import React from 'react'
import { useSelector } from "react-redux";
import Card from '../Components/Card'
function Videos() {
    const videos = useSelector((state) => state.YoutubeReducer.videos)
    return (
        <div className="grid grid-cols-5 gap-y-6 gap-x-3 container absolute top-44 items-start">
            {
                videos
                    .filter(video => video.type === "video")
                    .map((video, index) => (
                        <Card
                            key={index}
                            videoImage={video.video.thumbnails[0].url}
                            avatar={video.video.author.avatar[0].url}
                            videoTitle={video.video.title}
                            author={video.video.author.title}
                            views={video.video.stats.views}
                            publishedTime={video.video.publishedTimeText}
                            isLive={video.video.isLiveNow}
                            viewers={video.video.stats.viewers}
                            lengthSeconds={video.video.lengthSeconds}
                            isVerified={video.video.author.badges}
                            videoId={video.video.videoId}
                        ></Card>
                    ))
            }
        </div>
    )
}

export default Videos