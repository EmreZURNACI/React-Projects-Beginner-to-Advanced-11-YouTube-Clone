import React from 'react'
import { BsDot } from 'react-icons/bs'
import { CalculateViews } from '../Functions/CalculateViews'
import { CalculateLengthofTitle } from '../Functions/CalculateLengthofTitle';
import { CalculateTime } from '../Functions/CalculateTime'
function Card({ videoImage, avatar, videoTitle, author, views, publishedTime, isLive, viewers, lengthSeconds, isVerified,videoId }) {
  return (
    <div className='card'>
      <a href={"VideoDetail/"+videoId}>
        <div className='relative'>
          <img src={videoImage} alt="#" className=" rounded-xl hover:rounded-none duration-300 w-full" />
          {
            isLive === true ?
              <div className='absolute bg-red-700 py-1 px-2 flex items-center gap-2 rounded-lg live'>
                <svg height="16" viewBox="0 0 16 16" width="16" focusable="false" fill='white' className='pointer-events-none block h-full' ><path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path></svg>
                <span className='font-bold text-white text-sm'>LIVE</span>
              </div>
              :
              <div className='absolute bg-zinc-950 text-white py-1 px-2 flex items-center gap-2 rounded-lg time duration-300'>
                <span>
                  {CalculateTime(lengthSeconds)}
                </span>
              </div>
          }
        </div>
        <div className='flex items-start pt-5 gap-3'>
          <div>
            <img src={avatar} alt="#" className="rounded-full h-12 w-14" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-base font-medium leading-5" title={videoTitle}>{CalculateLengthofTitle(videoTitle)}</h1>
            <h1 className='pt-2 gap-x-1 flex items-center'>
              <span  className="text-170 text-sm leading-4 font-medium" title={author}>{author}</span>
              {
                (Array.from(isVerified).length !== 0 && isVerified[0].type) === "VERIFIED_CHANNEL" &&
                <svg viewBox="0 0 26 26" focusable="false" className='pointer-events-none block w-18px h-18px' fill='rgb(170,170,170)' ><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
              }
            </h1>
            <div className='flex items-center text-sm'>
              {
                (isLive === true && (viewers !== null || viewers !== undefined))
                  ? <span className="text-170 leading-">{CalculateViews(viewers)} viewers</span>
                  : <span className="text-170 leading-">{CalculateViews(views)} views</span>
              }
              <BsDot className="text-2xl text-170 leading-"></BsDot>
              <span className="text-170 leading-">{publishedTime !== null && String(publishedTime).replace("yayınlandı", "")}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card