import React from 'react'
import WhiteLine from '../Components/WhiteLine'
import Explore from './Explore'
import MoreFromYoutube from './MoreFromYoutube'
import Help from './Help'
import Footer from './Footer'
import BrowseChannels from './BrowseChannels'
import Tools from './Tools'
function Sidebar() {
  return (
    <div className='fixed top-70px left-0 bg-0f0f0f z-20 w-15  h-[calc(100%-70px)] overflow-y-scroll'>
      <Tools/>
      <WhiteLine />
      <Explore />
      <WhiteLine />
      <BrowseChannels />
      <WhiteLine />
      <MoreFromYoutube />
      <WhiteLine />
      <Help />
      <WhiteLine />
      <Footer />
      <WhiteLine />
    </div>
  )
}

export default Sidebar